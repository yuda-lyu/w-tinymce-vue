import assert from 'assert'
import { readText, loadZhTW } from './tools/loadSrc.mjs'
import ui from './tools/ui-strings-6.8.6.mjs'


describe('unit-lang 語系檔 src/zh_TW.js(TinyMCE 6.x)', function() {

    let got = loadZhTW()

    //TinyMCE 6 轉譯時鍵不分大小寫(I18n.translate 先比對原字串, 再比對小寫)
    let lcKeys = new Set(Object.keys(got.dict).map(k => k.toLowerCase()))
    let has = (s) => (s in got.dict) || lcKeys.has(s.toLowerCase())

    it('R9 以 tinymce.addI18n 註冊且僅註冊一次, 語系碼 zh_TW(與預設 language 一致)', function() {
        //需求: 「語系檔改為 6 之格式」; 6 之語系檔仍為 tinymce.addI18n(code, dict); 6 核心於該碼已註冊時不再載入 langs/<code>.js
        assert.strictEqual(got.calls, 1)
        assert.strictEqual(got.code, 'zh_TW')
        assert.ok(got.dict && typeof got.dict === 'object')
    })

    it('R9 字典之鍵與值皆為非空字串', function() {
        //需求: 語系檔格式正確(6 以字串鍵值轉譯)
        let keys = Object.keys(got.dict)
        assert.ok(keys.length > 0)
        for (let k of keys) {
            assert.ok(k !== '', 'empty key')
            assert.strictEqual(typeof got.dict[k], 'string', `value of '${k}' is not string`)
            assert.ok(got.dict[k] !== '', `value of '${k}' is empty`)
        }
    })

    it('R9 語系檔為純 ASCII(中文以 \\uXXXX 跳脫), 不受檔案編碼影響', function() {
        //需求: 與既有檔案格式一致, 打包後不依賴編碼
        let txt = readText('src/zh_TW.js')
        assert.ok(/^[^\u0080-￿]*$/.test(txt), 'contains non-ASCII chars')
    })

    it('R10 TinyMCE 6.8.6 於本元件預設設定下可見之 UI 字串, 除登記之未翻譯者外皆已翻譯', function() {
        //需求: 升 6 後預設畫面(工具列、選單、子選單、link/charmap/表格對話框)之文字不得退回英文
        //依據: ui-strings-6.8.6.mjs 為於 6.8.6 實測收集之字串; knownUntranslated 為專有名詞或官方語系包亦無翻譯者
        let known = new Set(ui.knownUntranslated)
        let missing = ui.strings.filter(s => !known.has(s) && !has(s))
        assert.deepStrictEqual(missing, [], `untranslated default UI strings: ${missing.join(' | ')}`)
    })

    it('R10 knownUntranslated 登記之字串確實不在字典內(登記不得過期)', function() {
        //需求: 登記表須與字典同步; 日後補上翻譯時須同步自登記表移除
        let stale = ui.knownUntranslated.filter(s => has(s))
        assert.deepStrictEqual(stale, [], `translated but still registered as untranslated: ${stale.join(' | ')}`)
    })

    it('R10 knownUntranslated 僅含專有名詞與數值(字型名、字級、行高), 不得以登記掩蓋待翻譯字串', function() {
        //需求: 登記表之收錄範圍受限, 避免「未翻譯」被登記表合理化
        let ok = /^(Andale Mono|Arial|Arial Black|Book Antiqua|Comic Sans MS|Courier New|Georgia|Helvetica|Impact|Symbol|Tahoma|Terminal|Times New Roman|Trebuchet MS|Verdana|Webdings|Wingdings|\d+(\.\d+)?(pt)?)$/
        let bad = ui.knownUntranslated.filter(s => !ok.test(s))
        assert.deepStrictEqual(bad, [], `non-proper-name strings registered as untranslated: ${bad.join(' | ')}`)
    })

    it('R10 6 新增之選單字串 Font sizes / Line height / Special Character 已翻譯', function() {
        //需求: 6 之格式選單新增 Font sizes(5 為 Font Sizes)與 Line height, 字元對話框標題為 Special Character
        for (let k of ['Font sizes', 'Line height', 'Special Character']) {
            assert.ok(k in got.dict, `'${k}' missing`)
        }
    })

    it('R10 6 之工具列/選單提示含 {0} 參數(目前字級、目前色名)者已翻譯, 且保留 {0} 佔位', function() {
        //需求: 5 之字級按鈕提示為中文「字型大小」, 6 之提示鍵為 Font size {0} / Text color {0} / Background color {0}, 不得退回英文
        for (let k of ['Font size {0}', 'Text color {0}', 'Background color {0}']) {
            assert.ok(k in got.dict, `'${k}' missing`)
            assert.ok(got.dict[k].includes('{0}'), `'${k}' lost the {0} placeholder`)
            assert.ok(/[㐀-鿿]/.test(got.dict[k]), `'${k}' has no Chinese`)
        }
    })

    it('R11 既有翻譯之字面不變(使用端可見字樣不因升版而改變)', function() {
        //需求: 不因升版而改動既有字樣; 6 官方語系包之 Redo 為錯誤之 Test, 不得採用
        assert.strictEqual(got.dict['Undo'], '撤銷')
        assert.strictEqual(got.dict['Redo'], '重做')
        assert.strictEqual(got.dict['Bold'], '粗體')
        assert.strictEqual(got.dict['Italic'], '斜體')
        assert.strictEqual(got.dict['Align center'], '中間對齊')
        assert.strictEqual(got.dict['Bullet list'], '項目清單')
        assert.strictEqual(got.dict['Numbered list'], '數字清單')
        assert.strictEqual(got.dict['Font Sizes'], '字型大小')
    })

    it('R11 鍵僅大小寫不同者(5 之 Font Sizes 與 6 之 Font sizes 等)字面一致', function() {
        //需求: 使用端可見字樣不因 5 → 6 之鍵大小寫改變而變(TinyMCE 轉譯本就不分大小寫)
        let byLc = {}
        for (let k of Object.keys(got.dict)) {
            let l = k.toLowerCase()
            if (byLc[l] !== undefined) {
                assert.strictEqual(got.dict[k], got.dict[byLc[l]], `'${k}' and '${byLc[l]}' differ only by case but wording differs`)
            }
            else {
                byLc[l] = k
            }
        }
        assert.strictEqual(got.dict['Font sizes'], '字型大小')
    })

    it('R11 已知錯譯不得出現(Redo=Test, Blue component=白色部分, List properties...=標題字體屬性)', function() {
        //需求: 採入 6 語系包新增之字串時, 明顯錯誤者須更正
        assert.notStrictEqual(got.dict['Redo'], 'Test')
        if ('Blue component' in got.dict) {
            assert.ok(!/白色/.test(got.dict['Blue component']), got.dict['Blue component'])
        }
        if ('List properties...' in got.dict) {
            assert.ok(!/標題字體/.test(got.dict['List properties...']), got.dict['List properties...'])
        }
    })

})
