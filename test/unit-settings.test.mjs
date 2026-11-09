import assert from 'assert'
import fs from 'fs'
import path from 'path'
import { root, readText, readJson, loadDefSettings } from './tools/loadSrc.mjs'


//TinyMCE 6.0 已移除或併入核心之外掛(來源: TinyMCE 6.0 發行說明; 6.8.6 之 plugins/ 資料夾實測亦無此諸項)
let removedIn6 = ['paste', 'imagetools', 'hr', 'print', 'toc', 'textcolor', 'colorpicker', 'fullpage', 'spellchecker', 'bbcode', 'legacyoutput', 'contextmenu', 'tabfocus', 'textpattern']

//TinyMCE 6 已改名或移除之工具列項目(5 → 6)
let renamedToolbarIn6 = ['fontsizeselect', 'fontselect', 'formatselect']

let tokens = (s) => String(s).split(/[\s|,]+/).filter(v => v !== '')


describe('unit-settings 版本線(tinymce 6.x、@tinymce/tinymce-vue 3.x)', function() {

    it('R1 package.json 之 tinymce 宣告為 ^6.8.6(不升 7 以上)', function() {
        //需求: 「tinymce 升至 6.8.6, 宣告為 ^6.8.6; 不得升 7 以上」
        let pk = readJson('package.json')
        assert.strictEqual(pk.dependencies.tinymce, '^6.8.6')
    })

    it('R1 package-lock.json 鎖定之 tinymce 為 6.x(>=6.8.6 且 <7)', function() {
        //需求: 「tinymce 版本不超出 6.x」
        let lock = readJson('package-lock.json')
        let v = lock.packages['node_modules/tinymce'].version
        assert.ok(/^6\.(\d+)\.(\d+)$/.test(v), `locked tinymce=${v}`)
        let [, mi, pa] = v.match(/^6\.(\d+)\.(\d+)$/).map(Number)
        assert.ok(mi > 8 || (mi === 8 && pa >= 6), `locked tinymce=${v} < 6.8.6`)
    })

    it('R1 node_modules 內安裝之 tinymce 為 6.x', function() {
        //需求: 同上; 安裝版本才是實際載入者
        let pk = readJson('node_modules/tinymce/package.json')
        assert.strictEqual(pk.version.split('.')[0], '6', `installed tinymce=${pk.version}`)
    })

    it('R2 @tinymce/tinymce-vue 維持 Vue 2 可用之 3.x 版本線', function() {
        //需求: 「@tinymce/tinymce-vue 維持 Vue 2 可用之版本線(3.x)」
        let pk = readJson('package.json')
        assert.ok(/^\^?3\./.test(pk.dependencies['@tinymce/tinymce-vue']), pk.dependencies['@tinymce/tinymce-vue'])
        let ins = readJson('node_modules/@tinymce/tinymce-vue/package.json')
        assert.strictEqual(ins.version.split('.')[0], '3')
    })

})


describe('unit-settings 預設設定(def_settings)適用 TinyMCE 6', function() {

    let st = loadDefSettings()

    it('R3 預設外掛不含 6 已移除或併入核心者', function() {
        //需求: 「預設設定之外掛清單不含 6 已移除者」
        let ps = tokens(st.plugins)
        let hit = ps.filter(p => removedIn6.includes(p))
        assert.deepStrictEqual(hit, [], `removed plugins in default: ${hit.join(',')}`)
    })

    it('R3 預設外掛皆為安裝之 tinymce 所提供(plugins/ 資料夾存在)', function() {
        //需求: 同上; 以實際安裝之 6.x 套件內容為準, 不依賴記憶中之清單
        let ps = tokens(st.plugins)
        assert.ok(ps.length > 0)
        for (let p of ps) {
            assert.ok(fs.existsSync(path.join(root, 'node_modules/tinymce/plugins', p)), `plugin '${p}' not in installed tinymce/plugins`)
        }
    })

    it('R3 預設保留仍存在之外掛 link table lists advlist charmap', function() {
        //需求: 其他外掛(link,table,lists,advlist,charmap)為 6 仍有者, 使用端功能不減
        let ps = tokens(st.plugins)
        for (let p of ['link', 'table', 'lists', 'advlist', 'charmap']) {
            assert.ok(ps.includes(p), `plugin '${p}' dropped`)
        }
    })

    it('R4 預設工具列不含 6 已改名之項目', function() {
        //需求: 「工具列 fontsizeselect 改名為 fontsize」
        let ts = tokens(st.toolbar)
        let hit = ts.filter(t => renamedToolbarIn6.includes(t))
        assert.deepStrictEqual(hit, [], `renamed toolbar items in default: ${hit.join(',')}`)
    })

    it('R4 預設工具列以 fontsize 取代原 fontsizeselect, 其餘項目與順序不變', function() {
        //需求: 使用端可見之工具列只因改名而變
        assert.strictEqual(st.toolbar, 'undo redo | fontsize | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent')
    })

    it('R5 字級選項改用 6 之選項名 font_size_formats, 值不變', function() {
        //需求: 6 之選項名為 font_size_formats(fontsize_formats 已移除), 字級清單維持 8pt~36pt
        assert.strictEqual(Object.prototype.hasOwnProperty.call(st, 'fontsize_formats'), false)
        assert.strictEqual(st.font_size_formats, '8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt')
    })

    it('R6 其餘預設值不變(語系、選單、淨空元素、版面)', function() {
        //需求: 「元件對外之 props、事件、v-model 盡量不變」; 與升版無關之預設不動
        assert.strictEqual(st.language, 'zh_TW')
        assert.strictEqual(st.menubar, 'edit insert format table')
        assert.strictEqual(st.invalid_elements, 'wbr')
        assert.strictEqual(st.paste_data_images, true)
        assert.strictEqual(st.branding, false)
        assert.strictEqual(st.promotion, false) //6 起預設於選單列右側顯示升級推廣連結, 5 無, 關閉以維持畫面
        assert.strictEqual(st.elementpath, false)
        assert.strictEqual(st.resize, false)
        assert.strictEqual(st.height, '100%')
        assert.strictEqual(typeof st.setup, 'function')
    })

})


describe('unit-settings 元件、範例頁與說明文件', function() {

    it('R7 範例頁載入 tinymce 6.x 並不使用 6 已移除之外掛與工具列項目', function() {
        //需求: 「更新 examples/ 使範例可跑」
        let html = readText('examples/ex-default.html')
        assert.ok(/tinymce@6\.\d+\.\d+\/tinymce\.min\.js/.test(html), 'example does not load tinymce 6.x')
        assert.ok(!/tinymce@5/.test(html), 'example still references tinymce 5')
        for (let t of renamedToolbarIn6) {
            assert.ok(!html.includes(t), `example still uses '${t}'`)
        }
        let m = html.match(/^\s*plugins:\s*'([^']*)'/m)
        if (m) {
            let hit = tokens(m[1]).filter(p => removedIn6.includes(p))
            assert.deepStrictEqual(hit, [])
        }
    })

    it('R7 README 之瀏覽器用法載入 tinymce 6.x', function() {
        //需求: README 列出使用端須載入之 tinymce 版本
        let md = readText('README.md')
        assert.ok(/tinymce@6\.\d+\.\d+\/tinymce\.min\.js/.test(md), 'README does not load tinymce 6.x')
        assert.ok(!/tinymce@5/.test(md), 'README still references tinymce 5')
    })

    it('R8 元件不把 disabled 交給 @tinymce/tinymce-vue 3.x(其切換時呼叫 6 已無之 editor.setMode), 改以 editor.mode.set 切換唯讀', function() {
        //需求: 「editable 之行為不變」; 6 之 editor 已無 setMode(僅 mode.set), 故繞開該路徑; 行為由 headless 實跑驗證
        let vue = readText('src/WTinymceVue.vue')
        let tpl = vue.match(/<template>([\s\S]*?)<\/template>/)[1]
        assert.ok(!/:disabled\s*=/.test(tpl), 'template still binds :disabled')
        assert.ok(/mode\.set\(/.test(vue), 'script does not use editor.mode.set')
        assert.ok(!/\.setMode\(/.test(vue), 'script uses editor.setMode (removed in 6)')
    })

})
