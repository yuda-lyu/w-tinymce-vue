# 規則帳本

本檔為套件設計與開發階段之規則帳本(藍圖),為要求程式碼須長成什麼樣,或由規格產出之測試(項目/說明/流程)有哪些,包含軸、單一擁有者、已知限制、破壞性變更紀錄,以及對應是哪些測試檔案或指令等,由agent自行編列、擴充與維護.當前已做到哪些記於`sgud/state/state.md`.過長時依類型拆為`rulebook_<類型>.md`,本檔只留索引.

## 規則索引

| 規則 | 一句話 | 盤點/測試 |
|---|---|---|
| R-ver | tinymce 只能 6.x(`^6.8.6`);`@tinymce/tinymce-vue` 維持 3.x | `test/unit-settings.test.mjs`(R1、R2) |
| R-plugins | 預設外掛須存在於安裝之 tinymce,且不含 6 已移除者 | `unit-settings`(R3) |
| R-toolbar | 工具列項目與選項名用 6 之命名 | `unit-settings`(R4、R5、R6) |
| R-lang | `zh_TW` 語系檔之格式、涵蓋與字面 | `test/unit-lang.test.mjs`(R9、R10、R11) |
| R-editable | `editable` 由本元件以 `editor.mode.set` 切換,不交給 tinymce-vue 之 `disabled` | `unit-settings`(R8)、R-verify |
| R-safe | tinymce 6.x 無後續修補之公告,以預設設定與 parser/貼上過濾緩解,且不可被使用端之 `setup` 覆蓋 | `test/unit-safe.test.mjs`(R12,R13)、R-verify |
| R-ie | 元件不含 IE11 專用程式(6 不支援 IE11) | `unit-safe`(R14) |
| R-doc | 範例頁與 README 載入之 tinymce 須為 6.x,並列出使用端可見之變化 | `unit-settings`(R7) |
| R-verify | 升版類改動須以 headless 實跑做前後對照 | 檢查清單(本檔) |

## R-ver 版本線

- 規則:`dependencies.tinymce` 宣告為 `^6.8.6`,lock 與安裝版皆為 6.x;**不得升 7 以上**(7 起授權為 GPL-2.0-or-later 或 Tiny 商用授權,執行時另須 `license_key`,使用者不採).`@tinymce/tinymce-vue` 維持 Vue 2 可用之 3.x(4.x 起為 Vue 3).
- 為何:公告修補版皆在 7.x 以上(授權不採),故停在 6.x 最新之 6.8.6(MIT).`@tinymce/tinymce-vue` 3.x 不宣告 tinymce 為依賴(只讀全域 `tinymce`),不會把 tinymce 拉到 7 以上.
- 升版前查證:`npm view tinymce@<版> license`;`@tinymce/tinymce-vue` 之原始碼(`node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/`)所呼叫之 editor API 是否仍存在於新版 tinymce(查 `tinymce/tinymce.js`).
- 測試:`unit-settings` R1(宣告、lock、安裝版三處)、R2.

## R-plugins 預設外掛

- 規則:`def_settings.plugins` 之每一項須存在於 `node_modules/tinymce/plugins/`,且不得為 6 已移除或併入核心者(`paste`、`imagetools`、`hr`、`print`、`toc`、`textcolor`、`colorpicker`、`fullpage`、`spellchecker`、`bbcode`、`legacyoutput`、`contextmenu`、`tabfocus`、`textpattern`).現為 `link table lists advlist charmap`.
- 盤點:`ls node_modules/tinymce/plugins`;測試 `unit-settings` R3(三案).
- 站點全集:`src/WTinymceVue.vue` 之 `def_settings.plugins`、`examples/ex-default.html` 之 settings 註解範例(已套);使用端自訂之 `settings.plugins` 不在本套件管轄,README 已提示.

## R-toolbar 工具列與選項命名

- 規則:預設工具列用 6 之項目名(`fontsize`,非 `fontsizeselect`;不使用 `fontselect`、`formatselect`);字級清單用 `font_size_formats`(非 `fontsize_formats`);`promotion: false` 與 `branding: false` 併用,維持 5 時之畫面(無推廣連結、無商標).
- 其餘預設值(語系、選單、淨空元素、版面)不得因升版而變(`unit-settings` R6).
- 盤點:`def_settings` 全部鍵於 `node_modules/tinymce/tinymce.js` 與 `themes/silver/theme.js` 以 `registerOption('<鍵>'` 查是否為 6 已註冊之選項.

## R-lang 語系檔

- 格式:`tinymce.addI18n('zh_TW', {...})`,全檔純 ASCII(中文以 `\uXXXX` 跳脫);註冊一次;語系碼 `zh_TW` 與預設 `language` 一致(6 核心於該碼已註冊時不再載入 `langs/zh_TW.js`).6 官方語系碼為 `zh-Hant`,本套件不更名.
- 字面:舊包鍵值不得更動;TinyMCE 轉譯鍵不分大小寫(精確鍵優先,再比對小寫),故**僅大小寫不同之鍵須同字面**(如 `Font Sizes`/`Font sizes`);6 官方語系包之 `Redo`=`Test` 為錯誤,不得採;採入 6 新鍵時明顯錯譯須更正並於檔頭註明.
- 涵蓋:預設設定下可見之 UI 字串(`test/tools/ui-strings-6.8.6.mjs`,於 6.8.6 英文介面實測收集)除登記之 `knownUntranslated`(字型名、字級、行高數值)外須有翻譯;`knownUntranslated` 不得過期,亦不得登記非專有名詞;6 工具列提示含 `{0}` 參數者(`Font size {0}`、`Text color {0}`、`Background color {0}`)須有保留 `{0}` 之翻譯.
- 升 tinymce 小版本或改預設外掛/工具列時之重收集方法:以新版 tinymce 於預設設定、不載語系啟動編輯器,收集工具列按鈕 `aria-label`、四個選單與其子選單之 `.tox-collection__item-label`、link/charmap/表格對話框之標籤與按鈕文字,與字典比對(鍵不分大小寫),重產 `ui-strings-<版>.mjs`;另以載入 `zh_TW` 之同一頁確認無英文殘留(工具列/選單之 `title`、`aria-label` 無漢字者僅允許字型名與數值).
- 測試:`unit-lang` R9(格式)、R10(涵蓋與登記)、R11(字面).

## R-editable 唯讀切換

- 規則:模板不得綁 `:disabled` 給 `@tinymce/tinymce-vue`(其 `disabled` 之 watcher 呼叫 `this.editor.setMode`,TinyMCE 6 之 editor 已無此方法,切換時拋 TypeError、狀態不變).`editable` 由本元件之 watcher 與 `onInit` 以 `editor.mode.set('design'|'readonly')` 套用;編輯器未初始化完成時不處理,由 `onInit` 套用.
- 盤點:`grep setMode node_modules/tinymce/tinymce.js`(僅內部函式 `setMode`,無 `editor.setMode`);`node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js` 之 `watch.disabled`.
- 測試:`unit-settings` R8(靜態,守住不重新綁 `:disabled`);行為由 R-verify 之 `editable` 切換與「掛載時即為 false」實跑確認.

## R-safe 公告緩解

- 規則:tinymce 6.x 之公告無後續修補(修補版在 7.x 以上,授權不採),第三方問題由本套件自行處理(原則 15),不加淨化套件.預設須含:①`def_settings.convert_unsafe_embeds: true`(GHSA-5359);②`safeFilters`(prop,Boolean,預設 true)為 true 時註冊三項過濾:parser 之 `#comment` 節點過濾移除 `mce:protected` 註解(GHSA-v98h),parser 之屬性過濾移除 `data-mce-href`,`data-mce-src`,`data-mce-style`(GHSA-q742),`PastePreProcess`(以 `ed.on(name, fn, true)` prepend)自貼上之原始字串移除該三屬性.
- 生效條件:過濾由 `useSettings` 包一層 `setup` 註冊,先於使用端或預設之 `setup` 執行,故使用端自訂 `settings.setup` 不會使緩解失效;使用端 `settings.setup` 非函式時不拋錯.parser 過濾須於 `PreInit` 事件內註冊(`editor.parser` 於 `setup` 時尚未建立).`PastePreProcess` 須 prepend:核心之貼上前處理(`removeWebKitStyles` 等)先行處理時會把 `data-mce-style` 之值升為 `style`,屆時 parser 過濾已無從移除.
- 關閉方式(README〈Security notes〉):`:safe-filters="false"`(僅初始化時讀取);`settings.convert_unsafe_embeds: false`.副作用:`protect` 選項失效;貼上 HTML 中形似三屬性之文字被移除.
- 正則不用 lookbehind(舊版 Safari 於載入時即語法錯誤,整個 bundle 失效).
- 未涵蓋(已知):GHSA-mh5m(巢狀 svg,無設定可降,README 建議輸出端淨化);GHSA-vg35 僅使用端自行啟用 `media` 外掛時受影響;拖放,`format: 'raw'` 之 `setContent`,使用端自行 `dom.setHTML`.
- 驗證:node 測試 `unit-safe`(以假 editor 驗註冊時機,順序,回呼行為,使用端 `setup` 之併存);瀏覽器以 R-verify 之偽造樣本探測(只用無害標記),須含 `setContent`,`insertContent`,`mceInsertContent`,貼上事件,`mceInsertClipboardContent` 五條路徑,並以控制組(`safeFilters=false` 且 `convert_unsafe_embeds=false`)確認樣本確實會出現於未緩解之輸出,再以一般內容樣本確認預設與控制組輸出相同.
- 升 tinymce 小版本時:先查公告是否已修(`npm view`/OSV),已修者移除對應緩解並更新 README 與本節.

## R-ie IE11 分支

- 規則:`updateHeight` 只設定高度與移除狀態列;不含 IE11 專用之 min-height,工具列框線與 `isElement` import.TinyMCE 6 不支援 IE11.
- 測試:`unit-safe` R14(以假 `this` 呼叫 `updateHeight`,模擬舊碼會判為 IE11 之元素,斷言不設 `minHeight` 與框線).

## R-doc 範例頁與說明文件

- 範例頁 `examples/ex-default.html` 載入 `tinymce@6.x` 之 CDN(第三方 CDN,不受自有套件 gh-pages 規定限制),settings 範例與註解之預設值與 `def_settings` 一致.
- README 之瀏覽器用法載入 `tinymce@6.x`;〈Breaking changes〉列使用端可見之變化(不做舊版相容之墊片,原則 14).`toolg/modifyReadme.mjs` 只改本套件與其他自有套件之 CDN 網址與 `套件名@x.y.z`,不會動 tinymce 之網址.
- 測試:`unit-settings` R7.

## R-verify 升版類改動之 headless 實跑(前後對照)

觸發:tinymce、`@tinymce/tinymce-vue`、vue 之升版,或改 `def_settings`、`zh_TW.js`、`updateHeight`、`editable` 處理時.

1. 升版**前**先以舊版量基準(範例頁原樣載入;CDN 網址以 Playwright `page.route` 導至本機同版檔案,不需連網;dist 用本機建置於 `./tmp/` 之副本,不動 `./dist`).
2. 升版後以同一份腳本實跑,逐項對照:3 個編輯器 `initialized`;無 console error 與頁面錯誤;外框、標頭、編輯區之寬高(`getBoundingClientRect`)與 `height` 綁定(150/200)之目標元素與高度;工具列按鈕數、順序與提示字;四個選單之項目;粗斜體、對齊、清單、縮排、復原重做、字級下拉、文字色色盤之操作結果;輸入文字後 `v-model` 值與同步之第二、三個編輯器;`editable` 由 true→false→true 與掛載時為 false;選單與對話框之英文殘留.
3. 另以同一組內容於新舊 tinymce 各 `getContent()`,對照序列化輸出之差異(空元素、色值、表格),列入「使用端可見之變化」.
4. 公告緩解(R-safe)之偽造樣本探測:預設,控制組,使用端自訂 `setup` 三種實例各跑五條內容進入路徑;偽造樣本僅用無害標記(`<b>probe</b>`,`example.com`,同源相對網址):object/embed,偽造 `data-mce-href`/`data-mce-src`/`data-mce-style`,偽造 `mce:protected` 註解;一般內容樣本(連結,相對連結,圖片,表格,巢狀清單,一般註解,樣式,實體,`noscript`,mailto,錨點,背景色)於預設與控制組輸出須逐一相同;並確認 `v-model` 值與 `undo`/`redo` 不復活偽造內容.
5. 結果寫入 `sgud/state/state.md`(現況)與經驗(過程);倉庫內無 e2e 測試檔,實跑腳本不入倉庫.

## 改動範圍 → 測試對照

| 改動範圍 | node 測試 | 瀏覽器 |
|---|---|---|
| `src/WTinymceVue.vue` 之 `def_settings` | `unit-settings` 全部 | R-verify |
| `src/WTinymceVue.vue` 之方法與 watcher | `unit-settings`(R8)、`unit-safe`(R14) | R-verify(`editable`、`height`) |
| `src/WTinymceVue.vue` 之 `useSettings`、`installSafeFilters`、`safeFilters` prop | `unit-safe`(R12、R13) | R-verify 第 4 點(偽造樣本五條路徑) |
| `src/zh_TW.js` | `unit-lang` 全部 | R-verify 之英文殘留檢查 |
| `package.json` 之依賴 | `unit-settings`(R1、R2) | R-verify |
| `examples/`、`README.md` | `unit-settings`(R7) | — |

本套件無 e2e 測試檔,亦無標準圖.

## 破壞性變更紀錄

- 2026-11-09:tinymce 5.10.x → 6.8.6(使用者裁示「tinymce 升到 6.x」;定案內容與使用端可見之變化見 `sgud/state/state.md`、README〈Breaking changes〉).不保留 5 之相容墊片.
