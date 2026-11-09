# 累積經驗

本檔為執行工作時特有之累積經驗,留給後續之嘗試、執行與判斷,由agent自行編列、擴充與維護.過長時抽出舊者為`experience_<年月日>.md`,並於本檔註明何時抽出.

## 2026-11-09 tinymce 5.10 → 6.8.6

1. **`@tinymce/tinymce-vue` 3.2.8 對 TinyMCE 6 只有一處不相容**:`disabled` 之 watcher 呼叫 `this.editor.setMode(...)`,6 之 editor 已無此方法(只有 `editor.mode.set`),切換時 Vue 印出 `TypeError: this.editor.setMode is not a function` 且狀態不變.初始 `readonly` 走 init 選項仍正常.處置為不傳 `disabled`、由本元件以 `mode.set` 切換(原則 15:繞開觸發條件,不動第三方、不向上游通報).升版類驗證務必含「切換 props」,只看初始化會漏.
2. **6 已移除 `tinymce.editors`**(`EditorManager.editors` 變為私有),量測腳本與使用端程式改用 `tinymce.get()`(5、6 皆可用,無參數回傳全部編輯器).
3. **`editor.parser` 於 `setup` 時尚未建立**,要加 parser 過濾須在 `PreInit` 事件內註冊(於 `setup` 直接用會拋錯,連帶使該編輯器初始化中斷).
4. **TinyMCE 轉譯鍵不分大小寫**:`I18n.add` 對僅大小寫不同之兩鍵各存精確值,查表先比對精確鍵、再比對小寫.5 之 `Font Sizes` 與 6 之 `Font sizes` 並存時,6 之選單會顯示新鍵之值,故新鍵若與舊鍵僅大小寫不同須沿用舊字面,否則使用端看到用詞改變(此項曾因直接取 6 語系包之值而發生,以測試 R11 補上).
5. **6 官方語系包(`tinymce-i18n` 套件之 `langs6/zh-Hant.js`)不可原樣採用**:`Redo` 被譯為 `Test`、`Blue component`=`白色部分`、`List properties...`=`標題字體屬性`,且檔名/語系碼依主版本不同(5:`zh_TW`、6:`zh-Hant`、7:`zh_TW`、8:`zh-TW`).該套件授權為「語系檔與對應 TinyMCE 版本同授權」,6.x 為 MIT.另有 `Font size {0}`、`Text color {0}`、`Background color {0}` 三個含參數之提示鍵,舊包與 6 之包皆無,需自行以既有字面組成,否則字級按鈕提示退回英文.
6. **同一頁混用不同皮膚時,兩套 CSS 互相覆蓋**(同為 `.tox` 類名),量測外框尺寸必須各自獨立頁面,混在同頁會得到兩者相同之假結果.
7. **6 預設之外框變寬**:元件根為 `display:inline-block`,寬度由工具列決定,6 之工具列間距較大,預設工具列下外框 725→832px;編輯區高度仍等於 `height`(`updateHeight` 設在 `.tox-sidebar-wrap`,6 之結構相同).`skin: 'tinymce-5'` 加 `content_css: 'tinymce-5'` 可還原到差 1px 內.
8. **6 預設顯示「Upgrade」推廣連結**(選項 `promotion`),`branding: false` 不含此項,須另設 `promotion: false`.
9. **v-model 輸出之序列化差異**:5 輸出 `<br />`、`<img ... />`、`<hr />`,6 輸出 `<br>`、`<img ...>`、`<hr>`;`rgb()` 色值 5 轉 `#hex`、6 保留;表格對話框 6 用 `<colgroup>`.升版時用同一組內容於新舊版各 `getContent()` 比對最快(取樣 18 項中 4 項不同,另表格、hr 命令各 1).
10. **實跑技巧**:Playwright 以 `page.route` 將範例頁之 CDN 網址(`cdn.jsdelivr.net/npm/tinymce@…`、`vue@…`)導至本機 `node_modules` 同版檔案,範例頁原樣載入、不連網;`playwright` 可借用 `w-package-tools` 之安裝(本套件 `node_modules` 無);新舊 tinymce 對照時舊版以 `npm pack tinymce@5.10.9` 解到暫存夾.本機建置 dist 副本用 `rollupFiles`(選項同 `toolg/gDistRollup.mjs`,`fdTar` 改 `./tmp/…`),不動 `./dist`.
11. **測試之取樣法**:元件為 `.vue`,node 下不載入整個元件,改以括號配對自 `<script>` 取出 `def_settings` 字面量,用 `vm.runInNewContext` 求值(`no-new-func` 禁用 `new Function`);語系檔亦以 `vm` 注入假 `tinymce.addI18n` 執行,不污染全域.
12. **預設設定對公告之實測**(2026-11-09,6.8.6 預設設定,僅用無害標記內容):`<object data=… type="image/svg+xml">` 預設保留,`convert_unsafe_embeds: true` 轉為 `<img>`;`<svg>` 元素預設即被內容過濾移除;偽造之 `<!--mce:protected …-->` 註解於**未設 `protect` 選項時**仍在 `getContent()` 輸出還原為標記(DOM 內無 `<b>`,但輸出字串含 `<b>`);`data-mce-href` 於序列化時覆蓋 `href`;`media` 外掛未載入.緩解見下列第二輪各條與規則帳本 R-safe.
13. **(第二輪)緩解須逐條內容進入路徑驗,只驗 `setContent` 會漏**:parser 之屬性過濾對 `setContent`,`insertContent`,`mceInsertContent` 皆有效,但貼上(`mceInsertClipboardContent` 與 paste 事件)之 `data-mce-style` 仍覆蓋 `style`——核心之 `PastePreProcess` 處理(`removeWebKitStyles` 一類,先於本元件註冊者)會先把 `data-mce-style` 之值升為 `style`,內容抵達 `editor.insertContent` 之 parser 時已無該屬性可移除(以 `PastePreProcess` 之 prepend 與 append 兩個監聽比對原始與處理後字串查出).處置:`ed.on('PastePreProcess', fn, true)`(第三參數 prepend)於最先自原始字串移除三屬性.
14. **(第二輪)探測用控制組**:同一頁掛預設實例與關閉緩解之實例(`:safe-filters="false"` 且 `convert_unsafe_embeds: false`),偽造樣本須在控制組確實出現(證明樣本有效),在預設實例不出現;一般內容樣本須兩者輸出逐一相同(證明無副作用).偽造註解經 paste 事件(text/html)時核心會退回純文字,該路徑對此樣本本就不受影響,以 `mceInsertClipboardContent` 驗之.
15. **(第二輪)使用端自訂 `settings.setup` 會整個取代預設 `setup`**(既有語意),所以緩解不能放進預設 `setup`;改在 `useSettings` 包一層 `setup`,先註冊過濾再呼叫使用端或預設之 `setup`.測試以假 editor 驗:註冊時機(PreInit 前不得碰 `editor.parser`),順序(過濾先於使用端之 PreInit 處理),使用端 `setup` 非函式時不拋錯.
16. **(第二輪)測試取元件邏輯之法**:`loadComponent()` 去掉 import 行,把 `export default {` 換成賦值,於 `vm.runInNewContext` 執行(沙箱給簡易 `get`),即可用假 `this` 呼叫 `computed.useSettings`,`methods.updateHeight`;跨 realm 之建構式(如 `Boolean`)不可用 `===` 比對,以 `.name` 比對.
17. **(第二輪)正則不用 lookbehind**:舊版 Safari(< 16.4)遇正則字面量之 lookbehind 於載入時即語法錯誤,整個 bundle 失效;以「前導字元群組 + 重複替換至穩定」取代(相鄰屬性之分隔字元被前一個匹配吃掉時,第二輪才能移除).
18. **(第二輪)移除 IE11 分支後 `isElement` 成孤兒 import**,一併移除;`lodash-es` 仍因 `get` 而需要.