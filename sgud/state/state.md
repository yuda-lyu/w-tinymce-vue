# 狀態

本檔記載當前已開發功能之最新狀態(各功能做到哪裡、對應之規則帳本條目與測試檔、已知缺口與待辦、最近一次驗證或發布之版本),只記現況、不寫過程(過程寫入`sgud/exp/experience.md`).規則帳本為藍圖(`sgud/rule/rulebook.md`)、本檔為現況,兩者比對即知尚未做到者.

## 版本線與驗證(2026-11-09)

| 項目 | 現況 | 對應規則 | 測試 |
|---|---|---|---|
| tinymce | `^6.8.6`(lock 6.8.6,MIT);不得升 7 以上(7 起授權為 GPL-2.0-or-later 或商用) | R-ver | `test/unit-settings.test.mjs`(R1) |
| @tinymce/tinymce-vue | `^3.2.6`(已裝 3.2.8,Vue 2 版本線);原始碼已查,對 TinyMCE 6 僅 `disabled` 切換之 `editor.setMode` 不相容,已由元件繞開(見 R-editable) | R-ver、R-editable | `unit-settings`(R2、R8)、headless 實跑 |
| vue | devDependencies `^2.7.16` | — | — |
| 實跑環境 | Chromium headless(Playwright 1.63),範例頁 `examples/ex-default.html` 原樣載入、tinymce 與 vue 之 CDN 網址導至本機同版檔案 | R-verify | 實跑腳本不入倉庫,檢查項見 R-verify |
| 單元測試 | `npm test` 41 項全綠(`all` 1、`unit-settings` 14、`unit-lang` 11、`unit-safe` 15) | 全部 | `test/*.test.mjs` |

實跑結果(升版前 tinymce 5.10.9 基準對照升版後 6.8.6):3 個編輯器初始化成功、無 console error 與頁面錯誤;工具列按鈕數與順序不變(19/19/13);四個選單之項目數不變;粗體、斜體、對齊、清單、縮排、復原重做、字級、文字色皆可用;輸入文字後 `v-model` 值與同步編輯器正確;`height` 綁定之編輯區高度逐字相同(150px/200px);`editable` 切換與初始為 false 皆正確.

公告緩解與 IE11 分支移除後之複驗(同日第二輪):上述實跑項目全數同結果(外框,編輯區,`height` 綁定,工具列操作,`v-model`,`editable`);偽造樣本於預設下經 `setContent`,`insertContent`,`mceInsertContent`,貼上事件,`mceInsertClipboardContent` 五條路徑皆不再出現於 `getContent()` 與 `v-model` 值,控制組(`safeFilters=false`,`convert_unsafe_embeds=false`)則仍出現;12 個一般內容樣本(連結,圖片,表格,清單,一般註解,`noscript` 等)於預設與控制組輸出逐一相同;使用端傳入含自己 `setup` 之 `settings` 時緩解仍生效,使用端 `setup` 照常執行一次.

## 預設設定(`src/WTinymceVue.vue` 之 `def_settings`)

| 設定 | 值 | 備註 |
|---|---|---|
| plugins | `link table lists advlist charmap` | `paste`、`hr` 已併入 6 核心(命令仍在),`imagetools` 已被 TinyMCE 移除 |
| toolbar | `undo redo \| fontsize \| forecolor backcolor \| bold italic \| alignleft aligncenter alignright alignjustify \| bullist numlist outdent indent` | 僅 `fontsizeselect` 改名為 `fontsize` |
| font_size_formats | `8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt` | 原選項名 `fontsize_formats` 已於 6 移除 |
| promotion | `false` | 6 預設於選單列右側顯示「Upgrade」推廣連結 |
| convert_unsafe_embeds | `true` | 把 `object`、`embed` 轉為 `img`、`video`、`audio`、`iframe`(GHSA-5359 之官方設定;使用端傳 `false` 可關閉) |
| setup | 預設之 setup(內文 11pt 與字型)或使用端之 `settings.setup`,皆由元件包一層:先註冊公告緩解過濾(`safeFilters` 為 true 時),再執行該 setup | 使用端之 setup 取代預設 setup 之既有語意不變 |
| 不變者 | language `zh_TW`、menubar `edit insert format table`、invalid_elements `wbr`、paste_data_images、branding、elementpath、resize、height `100%` | `unit-settings`(R6) |

## 公告緩解(`src/WTinymceVue.vue`;規則 R-safe)

- 元件 prop `safeFilters`(Boolean,預設 `true`,僅於編輯器初始化時讀取):為 true 時註冊三項過濾——①parser 之 `#comment` 節點過濾,移除 `mce:protected` 註解(GHSA-v98h);②parser 之屬性過濾,移除 `data-mce-href`、`data-mce-src`、`data-mce-style`(GHSA-q742);③`PastePreProcess`(以 prepend 最先處理)自貼上之原始字串移除該三屬性(核心之貼上前處理會先把 `data-mce-style` 之值升為 `style`,parser 過濾來不及).①②於 `PreInit` 事件內註冊(`editor.parser` 於 `setup` 時尚未建立).
- 配合預設 `convert_unsafe_embeds: true`(GHSA-5359).
- 過濾涵蓋 `setContent`,`insertContent`,`mceInsertContent`,貼上事件,`mceInsertClipboardContent` 五條路徑(實跑);`undo`/`redo` 不復活偽造內容.
- 副作用(README 已列):使用端自行啟用 TinyMCE 之 `protect` 選項時其機制失效;貼上之 HTML 中形似三屬性之文字會被移除.
- 對應測試:`test/unit-safe.test.mjs`(R12,R13).

## 語系檔(`src/zh_TW.js`)

- 以 `tinymce.addI18n('zh_TW', {...})` 註冊(6 之語系檔格式與 5 相同,6 核心於該碼已註冊時不再載入 `langs/<碼>.js`);6 官方語系碼為 `zh-Hant`,本套件維持 `zh_TW`(預設 `language` 不變).
- 共 482 鍵:舊包 417 鍵字面全部不變;自 TinyMCE 6.x 語系包(zh-Hant)補入 62 鍵(其中 `Blue component`、`List properties...` 為更正之錯譯;與舊鍵僅大小寫不同者沿用舊字面;該包之 `Redo`=`Test` 為錯誤,未採);另以既有字面組成 3 鍵(`Font size {0}`、`Text color {0}`、`Background color {0}`,6 之工具列提示含參數,兩包皆無).
- 預設畫面(工具列、選單與子選單、link、charmap、表格對話框)之可見字串共 137 個,除字型名、字級、行高數值共 32 個不需翻譯者外全部為中文(`test/tools/ui-strings-6.8.6.mjs` 登記,`unit-lang`(R10)).
- 規則:R-lang.

## 使用端可見之變化(tinymce 5.10.x → 6.8.6;README〈Breaking changes〉同步)

一、使用端程式或設定須處理者
1. 須全域載入 TinyMCE 6.x 之 `tinymce.min.js`(README 範例為 6.8.6);5.x 腳本不再適用.
2. 自訂 `settings.plugins` 不得含 `paste`、`imagetools`、`hr`;自訂 `settings.toolbar` 之 `fontsizeselect` 改 `fontsize`(`fontselect`→`fontfamily`、`formatselect`→`blocks`);`settings.fontsize_formats` 改 `font_size_formats`.
3. `tinymce.editors` 已於 6 移除,使用端自己之程式改用 `tinymce.get()`(本元件不使用).

二、畫面
4. 預設皮膚改為 6 之 oxide:示範頁(預設工具列、`height`=200)外框寬 725→832px、高 280→292px,選單列加工具列高 78→88px,編輯區高度不變(等於 `height`);無工具列群組分隔線、外框圓角、字級下拉為灰底.元件為 `inline-block`,寬度隨工具列而變,版面緊貼之使用端須核對.要維持 5 之尺寸與外觀:`:settings="{ skin: 'tinymce-5', content_css: 'tinymce-5' }"`(實測外框 725×229、標頭 77px,對 5 之 725×230、78px 差 1px;須提供 `skins/ui/tinymce-5`,同頁不得混用不同皮膚——兩套 CSS 會互相覆蓋).
5. 6 預設顯示之「Upgrade」推廣連結已由本元件預設關閉.
6. 工具列字級鈕提示字「字型大小」→「字型大小 11pt」(含目前字級);格式選單「Line height」(原為英文)→「行高」;文字顏色、背景顏色選單項之無障礙標籤含目前色名(「文字顏色 淺紅色」).
7. 其餘預設工具列(19 鈕)與四個選單之項目與順序不變.

三、`v-model` 輸出之 HTML 字串(6 之序列化不同,見 `serialize` 實測)
8. 空元素 `<br />`、`<img ... />`、`<hr />` → `<br>`、`<img ...>`、`<hr>`.
9. `rgb(r, g, b)` 色值不再被轉為 `#rrggbb`.
10. 以表格對話框插入之表格改用 `<colgroup><col style="width: 50%">`,儲存格不再逐格帶寬度.
11. 其餘取樣內容(粗斜體、清單、連結、對齊、字級、`wbr` 移除、實體、貼上 HTML)輸出與 5 相同.

四、行為
12. `editable` 切換改由本元件以 `editor.mode.set` 執行(行為不變;原由 `@tinymce/tinymce-vue` 之 `disabled` 觸發 6 已無之 `editor.setMode`).
13. `imagetools` 之影像編輯功能隨外掛移除而消失(預設無 `image` 外掛與影像鈕,實務上無影響).
14. 內容中之 `object`,`embed` 元素預設被轉為 `img`,`video`,`audio`,`iframe`(`convert_unsafe_embeds: true`;預設工具列無插入此二元素之功能).使用端傳 `settings.convert_unsafe_embeds: false` 可關閉.
15. 新增 prop `safeFilters`(見〈公告緩解〉);傳 `:safe-filters="false"` 可關閉 parser 過濾與貼上清理.
16. IE11 專用程式(`updateHeight` 內之 min-height 與工具列框線)已移除(6 不支援 IE11).

## 已知缺口與待辦

| 項 | 現況 | 處置 |
|---|---|---|
| tinymce 6.8.6 之公告 | 仍有 5 個,6.x 無後續修補.GHSA-5359-pvf2-pw78、GHSA-v98h-vmpc-fpqv、GHSA-q742-qvgc-gc2f 已由預設緩解(見〈公告緩解〉);GHSA-mh5m-5hw4-5c69(巢狀 svg 繞過消毒器)無設定可降,建議使用端於輸出端(儲存或顯示前)淨化;GHSA-vg35-5wq7-3x7w 僅在使用端自行啟用 `media` 外掛時受影響(預設外掛不含) | mh5m 為殘餘風險,README 已寫;不加淨化套件 |
| 緩解之涵蓋 | 實跑涵蓋五條內容進入路徑;未涵蓋:拖放(drop)、`format: 'raw'` 之 `setContent`(undo 之內部還原用,內容原為已消毒者)、使用端自行以 `dom.setHTML` 等繞過 parser 之寫入 | 已知不修;使用端自行寫入 DOM 者自行負責 |
| 預設皮膚外觀 | 與 5 不同(第 4 項) | 待使用端核對;可選用 `tinymce-5` 皮膚還原 |
| 預載 tinymce | 未預載全域 tinymce 時,`@tinymce/tinymce-vue` 3.x 預設自 Tiny Cloud 5 版通道載入(與本元件之 6 設定不合);本元件不傳 `cloudChannel` | 使用端須預載 6.x(README);不處理 |
| 語系 | 6 官方語系包之 zh-Hant 其餘條目有部分用詞為大陸或不通順(如 `Double`=`雙精度`、`Ridge`=`海脊座`),僅更正明顯錯誤 2 條 | 不處理;日後整包校譯另議 |
| e2e | 倉庫內無 e2e 測試檔;畫面行為以 R-verify 之 headless 實跑確認 | 無標準圖 |
| `dist/`、`docs/` | 未重建,由發布流程產製(`toolg`);舊 `dist` 仍為 5 之設定,不可搭配 6 使用 | 發布時重建 |
