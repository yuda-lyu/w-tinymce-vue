import assert from 'assert'
import { readText, loadDefSettings, loadComponent } from './tools/loadSrc.mjs'


//假 editor: 記錄 on 與 parser 過濾之註冊; parser 於真實 editor 在 PreInit 後才存在, 故過濾須於 PreInit 事件內註冊
function makeFakeEditor(log) {
    let handlers = {}
    let calls = []
    let nodeFilters = []
    let attrFilters = []
    return {
        calls,
        nodeFilters,
        attrFilters,
        on: function(name, fn, prepend) {
            calls.push('on:' + name + (prepend ? ':prepend' : ''))
            if (!handlers[name]) {
                handlers[name] = []
            }
            if (prepend) {
                handlers[name].unshift(fn)
            }
            else {
                handlers[name].push(fn)
            }
        },
        fire: function(name, ev) {
            let e = ev || {}
            ;(handlers[name] || []).forEach(fn => fn(e))
            return e
        },
        parser: {
            addNodeFilter: function(name, fn) {
                calls.push('node:' + name)
                nodeFilters.push({ name, fn })
                if (log) {
                    log.push('filter-node')
                }
            },
            addAttributeFilter: function(names, fn) {
                calls.push('attr:' + names)
                attrFilters.push({ names, fn })
                if (log) {
                    log.push('filter-attr')
                }
            },
        },
    }
}


function makeNode(extra) {
    let n = {
        removed: false,
        attrs: [],
        remove: function() {
            n.removed = true
        },
        attr: function(k, v) {
            n.attrs.push([k, v])
        },
    }
    return Object.assign(n, extra)
}


describe('unit-safe 公告緩解:預設設定與 parser 過濾', function() {

    let comp = loadComponent()
    let useSettings = (vo) => comp.computed.useSettings.call(Object.assign({ settings: {}, safeFilters: true }, vo))

    it('R12 預設設定含 convert_unsafe_embeds: true(GHSA-5359 之官方設定)', function() {
        //需求: 「(a) convert_unsafe_embeds: true」加入元件預設設定
        let st = loadDefSettings()
        assert.strictEqual(st.convert_unsafe_embeds, true)
    })

    it('R12 元件合併後之設定亦為 true, 使用端明確傳 false 時以使用端為準', function() {
        //需求: 同上; 「若使用端明確要關閉, README 寫明方式」——此項關閉方式為傳 settings.convert_unsafe_embeds: false
        assert.strictEqual(useSettings().convert_unsafe_embeds, true)
        assert.strictEqual(useSettings({ settings: { convert_unsafe_embeds: false } }).convert_unsafe_embeds, false)
    })

    it('R13 props.safeFilters 為 Boolean, 預設 true', function() {
        //需求: 預設即緩解; 使用端明確要關閉時之開關
        //元件於獨立 vm 環境載入, Boolean 為另一個 realm 之建構式, 以名稱比對
        assert.strictEqual(comp.props.safeFilters.type.name, 'Boolean')
        assert.strictEqual(comp.props.safeFilters.default, true)
    })

    it('R13 預設:setup 於 PreInit 事件內才註冊 #comment 節點過濾與三個 data-mce-* 屬性過濾', function() {
        //需求: 「B 案: PreInit 註冊 parser 之 #comment 節點過濾; 並註冊 data-mce-href、data-mce-src、data-mce-style 之屬性過濾」
        let ed = makeFakeEditor()
        useSettings().setup(ed)
        assert.ok(ed.calls.includes('on:PreInit'), 'PreInit not hooked')
        assert.deepStrictEqual(ed.calls.filter(c => /^(node|attr):/.test(c)), [], 'filters registered before PreInit (editor.parser does not exist yet)')
        ed.fire('PreInit')
        assert.strictEqual(ed.nodeFilters.length, 1)
        assert.strictEqual(ed.nodeFilters[0].name, '#comment')
        assert.strictEqual(ed.attrFilters.length, 1)
        assert.deepStrictEqual(ed.attrFilters[0].names.split(','), ['data-mce-href', 'data-mce-src', 'data-mce-style'])
    })

    it('R13 #comment 過濾只移除 mce:protected 註解(含前置空白), 保留一般註解', function() {
        //需求: 「移除 mce:protected 註解(GHSA-v98h)」; 「正常之註解內容不受影響」
        let ed = makeFakeEditor()
        useSettings().setup(ed)
        ed.fire('PreInit')
        let nodes = [
            makeNode({ value: 'mce:protected %3Cb%3Eprobe%3C%2Fb%3E' }),
            makeNode({ value: ' MCE:PROTECTED %3Cb%3E' }),
            makeNode({ value: ' plain comment ' }),
            makeNode({ value: 'x mce:protected inside text' }),
        ]
        ed.nodeFilters[0].fn(nodes)
        assert.deepStrictEqual(nodes.map(n => n.removed), [true, true, false, false])
    })

    it('R13 貼上:以 prepend 註冊 PastePreProcess, 自貼上之原始字串移除三個 data-mce-* 屬性(各種寫法), 其餘內容不變', function() {
        //需求: 「貼上(mceInsertClipboardContent 或 paste 事件)路徑亦驗」; 核心之貼上前處理會把 data-mce-style 升為 style, parser 過濾來不及, 須在最先處理
        let ed = makeFakeEditor()
        useSettings().setup(ed)
        assert.ok(ed.calls.includes('on:PastePreProcess:prepend'), 'PastePreProcess not hooked with prepend')
        //期望值保留屬性前之分隔空白(無害)
        let cases = [
            ['<p style="color: red;" data-mce-style="color: blue;">t</p>', '<p style="color: red;" >t</p>'],
            ['<a href="/ok" data-mce-href=\'/other\'>l</a>', '<a href="/ok" >l</a>'],
            ['<img src=a.png data-mce-src=b.png>', '<img src=a.png >'],
            ['<p DATA-MCE-STYLE = "x" style="a">t</p>', '<p  style="a">t</p>'],
            ['<p data-mce-style\n=\n"x">t</p>', '<p >t</p>'],
            ['<p data-mce-style>t</p>', '<p >t</p>'],
            ['<p style="a"data-mce-style="b"data-mce-href="c">t</p>', '<p style="a">t</p>'],
            ['<p data-mce-fragment="1" data-mce-styles="k" data-mce-style-x="k">t</p>', '<p data-mce-fragment="1" data-mce-styles="k" data-mce-style-x="k">t</p>'],
            ['<p>plain <b>text</b></p><!-- c -->', '<p>plain <b>text</b></p><!-- c -->'],
        ]
        for (let [input, expected] of cases) {
            let e = ed.fire('PastePreProcess', { content: input })
            assert.strictEqual(e.content, expected, `input: ${input}`)
        }
    })

    it('R13 PastePreProcess 處理非字串內容時不拋錯', function() {
        //需求: 緩解不得使貼上流程中斷
        let ed = makeFakeEditor()
        useSettings().setup(ed)
        let e = ed.fire('PastePreProcess', { content: undefined })
        assert.strictEqual(e.content, undefined)
    })

    it('R13 屬性過濾對每個命中之節點移除該屬性(依 name)', function() {
        //需求: 「data-mce-href、data-mce-src、data-mce-style 之屬性過濾(GHSA-q742)」
        let ed = makeFakeEditor()
        useSettings().setup(ed)
        ed.fire('PreInit')
        let n = makeNode({})
        ed.attrFilters[0].fn([n], 'data-mce-href')
        ed.attrFilters[0].fn([n], 'data-mce-style')
        assert.deepStrictEqual(n.attrs, [['data-mce-href', null], ['data-mce-style', null]])
    })

    it('R13 使用端傳入含自己 setup 之 settings 時, 過濾仍註冊, 使用端 setup 照常執行, 且過濾先於使用端之 PreInit 處理', function() {
        //需求: 「使用端自訂之 settings(含自己的 setup)與預設合併時, 緩解仍須生效(不可被使用端之 setup 覆蓋掉)」
        let order = []
        let userSetup = function(ed) {
            order.push('user-setup')
            ed.on('PreInit', function() {
                order.push('user-preinit')
            })
        }
        let st = useSettings({ settings: { setup: userSetup } })
        let ed = makeFakeEditor(order)
        st.setup(ed)
        ed.fire('PreInit')
        assert.strictEqual(ed.nodeFilters.length, 1, '#comment filter lost when user provides setup')
        assert.strictEqual(ed.attrFilters.length, 1, 'attribute filter lost when user provides setup')
        //註冊順序: 本元件之 PreInit 處理先於使用端之(使用端之處理可據以調整)
        assert.deepStrictEqual(order, ['user-setup', 'filter-node', 'filter-attr', 'user-preinit'])
    })

    it('R13 使用端提供 setup 時預設 setup(內文 11pt 樣式)不執行——既有行為不變', function() {
        //需求: 「上一輪之其他成果不得改變」; 使用端之 setup 取代預設 setup 為既有語意
        let st = useSettings({ settings: { setup: function() {} } })
        let ed = makeFakeEditor()
        st.setup(ed)
        assert.ok(!ed.calls.includes('on:init'), 'default style setup ran although user provided setup')
        let st2 = useSettings()
        let ed2 = makeFakeEditor()
        st2.setup(ed2)
        assert.ok(ed2.calls.includes('on:init'), 'default style setup no longer runs')
    })

    it('R13 safeFilters 為 false 時不註冊過濾, 使用端 setup 仍執行', function() {
        //需求: 「若使用端明確要關閉, README 寫明方式與風險」——關閉方式為 :safe-filters="false"
        let ran = 0
        let userSetup = function() {
            ran++
        }
        let st = useSettings({ safeFilters: false, settings: { setup: userSetup } })
        let ed = makeFakeEditor()
        st.setup(ed)
        ed.fire('PreInit')
        assert.strictEqual(ran, 1)
        assert.deepStrictEqual(ed.calls.filter(c => /^(node|attr):/.test(c)), [])
        assert.ok(!ed.calls.includes('on:PastePreProcess:prepend'))
    })

    it('R13 使用端 settings.setup 非函式時不拋錯, 過濾仍註冊', function() {
        //需求: 緩解不得因使用端傳入異常之 setup 而失效或使元件初始化中斷
        let st = useSettings({ settings: { setup: 'not a function' } })
        let ed = makeFakeEditor()
        st.setup(ed)
        ed.fire('PreInit')
        assert.strictEqual(ed.nodeFilters.length, 1)
    })

})


describe('unit-safe IE11 分支移除(updateHeight)', function() {

    let comp = loadComponent()

    function run(ieElement) {
        let ele = { style: {} }
        let toolbar = { style: {} }
        let removed = []
        let sb = {
            parentNode: {
                removeChild: function(x) {
                    removed.push(x)
                },
            },
        }
        let vo = {
            height: 250,
            $nextTick: (fn) => fn(),
            getEditor: () => ({ iframeElement: { parentNode: { parentNode: ele } } }),
            $el: {
                querySelector: function(sel) {
                    if (sel === '.tox-platform-ie') {
                        return ieElement
                    }
                    if (sel === '.tox-toolbar-overlord') {
                        return toolbar
                    }
                    if (sel === '.tox-statusbar') {
                        return sb
                    }
                    return null
                },
            },
            remove: comp.methods.remove,
        }
        comp.methods.updateHeight.call(vo)
        return { ele, toolbar, removed, sb }
    }

    it('R14 updateHeight 只設定高度並移除狀態列, 不再有 IE11 專用之 min-height 與工具列框線', function() {
        //需求: 「IE11 分支(updateHeight 之 isIE11 判斷與其專用樣式): 因本次升 6 而不可達, 本輪移除」
        let r = run({ nodeType: 1 }) //模擬舊碼會判為 IE11 之元素
        assert.strictEqual(r.ele.style.height, '250px')
        assert.strictEqual(r.ele.style.minHeight, undefined)
        assert.strictEqual(r.toolbar.style.borderBottom, undefined)
        assert.deepStrictEqual(r.removed, [r.sb])
    })

    it('R14 無該元素時行為相同(高度、狀態列移除不變)', function() {
        //需求: 移除 IE11 分支不影響一般情形
        let r = run(null)
        assert.strictEqual(r.ele.style.height, '250px')
        assert.strictEqual(r.ele.style.minHeight, undefined)
        assert.deepStrictEqual(r.removed, [r.sb])
    })

    it('R14 原始碼不再含 IE11 判斷與孤兒 import(isElement)', function() {
        //需求: 自己造成之孤兒 import 須移除
        let src = readText('src/WTinymceVue.vue')
        assert.ok(!/isIE11|tox-platform-ie|toolbar-overlord/.test(src))
        assert.ok(!/isElement/.test(src))
    })

})
