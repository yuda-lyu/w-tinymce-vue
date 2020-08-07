/*!
 * w-tinymce-vue v1.0.26
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self)["w-tinymce-vue"]=n()}(this,(function(){"use strict";tinymce.addI18n("zh_TW",{Redo:"重做",Undo:"撤銷",Cut:"剪下",Copy:"複製",Paste:"貼上","Select all":"全選","New document":"新文件",Ok:"確定",Cancel:"取消","Visual aids":"小幫手",Bold:"粗體",Italic:"斜體",Underline:"下劃線",Strikethrough:"刪除線",Superscript:"上標",Subscript:"下標","Clear formatting":"清除格式","Align left":"左邊對齊","Align center":"中間對齊","Align right":"右邊對齊",Justify:"左右對齊","Bullet list":"項目清單","Numbered list":"數字清單","Decrease indent":"減少縮排","Increase indent":"增加縮排",Close:"關閉",Formats:"格式","Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.":"您的瀏覽器不支援存取剪貼簿，可以使用快速鍵 Ctrl + X/C/V 代替剪下、複製與貼上。",Headers:"標題","Header 1":"標題 1","Header 2":"標題 2","Header 3":"標題 3","Header 4":"標題 4","Header 5":"標題 5","Header 6":"標題 6",Headings:"標題","Heading 1":"標題1","Heading 2":"標題2","Heading 3":"標題3","Heading 4":"標題4","Heading 5":"標題5","Heading 6":"標題6",Preformatted:"預先格式化的",Div:"Div",Pre:"Pre",Code:"代碼",Paragraph:"段落",Blockquote:"引文區塊",Inline:"內聯",Blocks:"基塊","Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.":"目前將以純文字的模式貼上，您可以再點選一次取消。",Fonts:"字型","Font Sizes":"字型大小",Class:"類型","Browse for an image":"從圖片中瀏覽",OR:"或","Drop an image here":"拖曳圖片至此",Upload:"上傳",Block:"區塊",Align:"對齊",Default:"預設",Circle:"空心圓",Disc:"實心圓",Square:"正方形","Lower Alpha":"小寫英文字母","Lower Greek":"希臘字母","Lower Roman":"小寫羅馬數字","Upper Alpha":"大寫英文字母","Upper Roman":"大寫羅馬數字","Anchor...":"錨點...",Name:"名稱",Id:"Id","Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.":"Id應以字母開頭，後面接著字母，數字，破折號，點數，冒號或下劃線。","You have unsaved changes are you sure you want to navigate away?":"編輯尚未被儲存，你確定要離開？","Restore last draft":"載入上一次編輯的草稿","Special character...":"特殊字元......","Source code":"原始碼","Insert/Edit code sample":"插入/編輯 程式碼範例",Language:"語言","Code sample...":"程式碼範例...","Color Picker":"選色器",R:"紅",G:"綠",B:"藍","Left to right":"從左到右","Right to left":"從右到左","Emoticons...":"表情符號…","Metadata and Document Properties":"後設資料與文件屬性",Title:"標題",Keywords:"關鍵字",Description:"描述",Robots:"機器人",Author:"作者",Encoding:"編碼",Fullscreen:"全螢幕",Action:"動作",Shortcut:"快速鍵",Help:"幫助",Address:"地址","Focus to menubar":"跳至選單列","Focus to toolbar":"跳至工具列","Focus to element path":"跳至HTML元素列","Focus to contextual toolbar":"跳至快捷選單","Insert link (if link plugin activated)":"新增捷徑 (捷徑外掛啟用時)","Save (if save plugin activated)":"儲存 (儲存外掛啟用時)","Find (if searchreplace plugin activated)":"尋找 (尋找取代外掛啟用時)","Plugins installed ({0}):":"({0}) 個外掛已安裝：","Premium plugins:":"加值外掛：","Learn more...":"了解更多...","You are using {0}":"您正在使用 {0}",Plugins:"外掛","Handy Shortcuts":"快速鍵","Horizontal line":"水平線","Insert/edit image":"插入/編輯 圖片","Image description":"圖片描述",Source:"圖片網址",Dimensions:"尺寸","Constrain proportions":"等比例縮放",General:"一般",Advanced:"進階",Style:"樣式","Vertical space":"高度","Horizontal space":"寬度",Border:"邊框","Insert image":"插入圖片","Image...":"圖片......","Image list":"圖片清單","Rotate counterclockwise":"逆時針旋轉","Rotate clockwise":"順時針旋轉","Flip vertically":"垂直翻轉","Flip horizontally":"水平翻轉","Edit image":"編輯圖片","Image options":"圖片選項","Zoom in":"放大","Zoom out":"縮小",Crop:"裁剪",Resize:"調整大小",Orientation:"方向",Brightness:"亮度",Sharpen:"銳化",Contrast:"對比","Color levels":"顏色層次",Gamma:"伽馬值",Invert:"反轉",Apply:"應用",Back:"後退","Insert date/time":"插入 日期/時間","Date/time":"日期/時間","Insert/Edit Link":"插入/編輯連結","Insert/edit link":"插入/編輯連結","Text to display":"顯示文字",Url:"網址","Open link in...":"開啟連結於...","Current window":"目前視窗",None:"無","New window":"另開視窗","Remove link":"移除連結",Anchors:"加入錨點","Link...":"連結...","Paste or type a link":"貼上或輸入連結","The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?":"你所填寫的URL為電子郵件，需要加上mailto:前綴嗎？","The URL you entered seems to be an external link. Do you want to add the required http:// prefix?":"你所填寫的URL屬於外部鏈接，需要加上http://:前綴嗎？","Link list":"連結清單","Insert video":"插入影音","Insert/edit video":"插件/編輯 影音","Insert/edit media":"插入/編輯 媒體","Alternative source":"替代影音","Alternative source URL":"替代來源URL","Media poster (Image URL)":"媒體海報（影像Image URL）","Paste your embed code below:":"請將您的嵌入式程式碼貼在下面:",Embed:"嵌入碼","Media...":"媒體...","Nonbreaking space":"不分行的空格","Page break":"分頁","Paste as text":"以純文字貼上",Preview:"預覽","Print...":"列印...",Save:"儲存",Find:"搜尋","Replace with":"更換",Replace:"替換","Replace all":"替換全部",Previous:"上一個",Next:"下一個","Find and replace...":"尋找及取代...","Could not find the specified string.":"無法查詢到此特定字串","Match case":"相匹配案件","Find whole words only":"僅找出完整字匯","Spell check":"拼寫檢查",Ignore:"忽略","Ignore all":"忽略所有",Finish:"完成","Add to Dictionary":"加入字典中","Insert table":"插入表格","Table properties":"表格屬性","Delete table":"刪除表格",Cell:"儲存格",Row:"列",Column:"行","Cell properties":"儲存格屬性","Merge cells":"合併儲存格","Split cell":"分割儲存格","Insert row before":"插入列在...之前","Insert row after":"插入列在...之後","Delete row":"刪除列","Row properties":"列屬性","Cut row":"剪下列","Copy row":"複製列","Paste row before":"貼上列在...之前","Paste row after":"貼上列在...之後","Insert column before":"插入欄位在...之前","Insert column after":"插入欄位在...之後","Delete column":"刪除行",Cols:"欄位段",Rows:"列",Width:"寬度",Height:"高度","Cell spacing":"儲存格得間距","Cell padding":"儲存格的邊距","Show caption":"顯示標題",Left:"左邊",Center:"中間",Right:"右邊","Cell type":"儲存格的類型",Scope:"範圍",Alignment:"對齊","H Align":"水平位置","V Align":"垂直位置",Top:"置頂",Middle:"置中",Bottom:"置底","Header cell":"標頭儲存格","Row group":"列群組","Column group":"欄位群組","Row type":"行的類型",Header:"標頭",Body:"主體",Footer:"頁尾","Border color":"邊框顏色","Insert template...":"插入樣版...",Templates:"樣版",Template:"樣板","Text color":"文字顏色","Background color":"背景顏色","Custom...":"自訂","Custom color":"自訂顏色","No color":"No color","Remove color":"移除顏色","Table of Contents":"目錄","Show blocks":"顯示區塊資訊","Show invisible characters":"顯示隱藏字元","Word count":"計算字數",Count:"計算",Document:"文件",Selection:"選項",Words:"字數","Words: {0}":"字數：{0}","{0} words":"{0} 字元",File:"檔案",Edit:"編輯",Insert:"插入",View:"檢視",Format:"格式",Table:"表格",Tools:"工具","Powered by {0}":"由 {0} 提供","Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help":"豐富的文本區域。按ALT-F9前往主選單。按ALT-F10呼叫工具欄。按ALT-0尋求幫助","Image title":"圖片標題","Border width":"框線寬度","Border style":"框線樣式",Error:"錯誤",Warn:"警告",Valid:"有效","To open the popup, press Shift+Enter":"要開啟彈出視窗，請按Shift+Enter","Rich Text Area. Press ALT-0 for help.":"富文本區域。請按ALT-0尋求協助。","System Font":"系統字型","Failed to upload image: {0}":"無法上傳影像：{0}","Failed to load plugin: {0} from url {1}":"無法上傳插件：{0}自url{1}","Failed to load plugin url: {0}":"無法上傳插件：{0}","Failed to initialize plugin: {0}":"無法啟動插件：{0}",example:"範例",Search:"搜索",All:"全部",Currency:"貨幣",Text:"文本",Quotations:"引用",Mathematical:"數學","Extended Latin":"拉丁字母擴充",Symbols:"符號",Arrows:"箭頭","User Defined":"使用者已定義","dollar sign":"美元符號","currency sign":"貨幣符號","euro-currency sign":"歐元符號","colon sign":"科朗符號","cruzeiro sign":"克魯賽羅符號","french franc sign":"法朗符號","lira sign":"里拉符號","mill sign":"文符號","naira sign":"奈拉符號","peseta sign":"比塞塔符號","rupee sign":"盧比符號","won sign":"韓圜符號","new sheqel sign":"新謝克爾符號","dong sign":"越南盾符號","kip sign":"老撾幣符號","tugrik sign":"蒙古幣符號","drachma sign":"德克拉馬符號","german penny symbol":"德國分符號","peso sign":"披索符號","guarani sign":"巴拉圭幣符號","austral sign":"阿根廷幣符號","hryvnia sign":"烏克蘭幣符號","cedi sign":"迦納幣符號","livre tournois sign":"里弗爾符號","spesmilo sign":"國際幣符號","tenge sign":"哈薩克幣符號","indian rupee sign":"印度盧比符號","turkish lira sign":"土耳其里拉符號","nordic mark sign":"北歐馬克符號","manat sign":"亞塞拜然幣符號","ruble sign":"盧布符號","yen character":"日圓符號","yuan character":"人民幣符號","yuan character, in hong kong and taiwan":"港元與台幣符號","yen/yuan character variant one":"日圓/人民幣符號變化型","Loading emoticons...":"載入表情符號…","Could not load emoticons":"無法載入表情符號",People:"人","Animals and Nature":"動物與自然","Food and Drink":"飲食",Activity:"活動","Travel and Places":"旅行與地點",Objects:"物件",Flags:"旗標",Characters:"字元","Characters (no spaces)":"字元（無空格）","{0} characters":"{0}字元","Error: Form submit field collision.":"錯誤：表格遞交欄位衝突。","Error: No form element found.":"錯誤：找不到表格元素。",Update:"更新","Color swatch":"色彩樣本",Turquoise:"土耳其藍",Green:"綠色",Blue:"藍色",Purple:"紫色","Navy Blue":"深藍色","Dark Turquoise":"深土耳其藍","Dark Green":"深綠色","Medium Blue":"中藍色","Medium Purple":"中紫色","Midnight Blue":"黑藍色",Yellow:"黃色",Orange:"橙色",Red:"紅色","Light Gray":"淺灰色",Gray:"灰色","Dark Yellow":"深黃色","Dark Orange":"深橙色","Dark Red":"暗紅色","Medium Gray":"中灰色","Dark Gray":"深灰色","Light Green":"淡綠色","Light Yellow":"淺黃色","Light Red":"淺紅色","Light Purple":"淺紫色","Light Blue":"淺藍色","Dark Purple":"深紫色","Dark Blue":"深藍色",Black:"黑色",White:"白色","Switch to or from fullscreen mode":"轉換自/至全螢幕模式","Open help dialog":"開啟協助對話",history:"歷史",styles:"樣式",formatting:"格式",alignment:"對齊",indentation:"縮排","permanent pen":"永久性筆",comments:"註解","Format Painter":"複製格式","Insert/edit iframe":"插入/編輯iframe",Capitalization:"大寫",lowercase:"小寫",UPPERCASE:"大寫","Title Case":"字首大寫","Permanent Pen Properties":"永久標記屬性","Permanent pen properties...":"永久標記屬性......",Font:"字型",Size:"字形大小","More...":"更多資訊......","Spellcheck Language":"拼寫語言","Select...":"選擇......",Preferences:"首選項",Yes:"是",No:"否","Keyboard Navigation":"鍵盤導航",Version:"版本",Anchor:"加入錨點","Special character":"特殊字元","Code sample":"程式碼範例",Color:"顏色",Emoticons:"表情","Document properties":"文件的屬性",Image:"圖片","Insert link":"插入連結",Target:"開啟方式",Link:"連結",Poster:"預覽圖片",Media:"媒體",Print:"列印",Prev:"上一個","Find and replace":"尋找及取代","Whole words":"整個單字",Spellcheck:"拼字檢查",Caption:"表格標題","Insert template":"插入樣版"});var e,n=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],t=function(e){return-1!==n.indexOf(e)},r=function(e,n,r){var i=n.$props.value?n.$props.value:"",o=n.$props.initialValue?n.$props.initialValue:"";r.setContent(i||o),n.$listeners.input&&function(e,n){var t=e.$props.modelEvents?e.$props.modelEvents:null,r=Array.isArray(t)?t.join(" "):t;e.$watch("value",(function(t,r){n&&"string"==typeof t&&t!==r&&t!==n.getContent({format:e.$props.outputFormat})&&n.setContent(t)})),n.on(r||"change keyup undo redo",(function(){e.$emit("input",n.getContent({format:e.$props.outputFormat}))}))}(n,r),function(e,n,r){Object.keys(n).filter(t).forEach((function(t){var i=n[t];"function"==typeof i&&("onInit"===t?i(e,r):r.on(t.substring(2),(function(e){return i(e,r)})))}))}(e,n.$listeners,r)},i=0,o=function(e){var n=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++i+String(n)},a=function(e){return void 0===e||""===e?[]:Array.isArray(e)?e:e.split(" ")},s=function(){return{listeners:[],scriptId:o("tiny-script"),scriptLoaded:!1}},l=(e=s(),{load:function(n,t,r){e.scriptLoaded?r():(e.listeners.push(r),n.getElementById(e.scriptId)||function(e,n,t,r){var i=n.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=e,i.src=t,i.addEventListener("load",(function e(){i.removeEventListener("load",e),r()})),n.head&&n.head.appendChild(i)}(e.scriptId,n,t,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0})))},reinitialize:function(){e=s()}}),d=function(){return"undefined"!=typeof window?window:global},c=function(){var e=d();return e&&e.tinymce?e.tinymce:null},u={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return"html"===e||"text"===e}}},p=function(){return(p=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},m=function(e){return function(){var n,t,i,o=p(p({},e.$props.init),{readonly:e.$props.disabled,selector:"#"+e.elementId,plugins:(n=e.$props.init&&e.$props.init.plugins,t=e.$props.plugins,a(n).concat(a(t))),toolbar:e.$props.toolbar||e.$props.init&&e.$props.init.toolbar,inline:e.inlineEditor,setup:function(n){e.editor=n,n.on("init",(function(t){return r(t,e,n)})),e.$props.init&&"function"==typeof e.$props.init.setup&&e.$props.init.setup(n)}});null!==(i=e.element)&&"textarea"===i.tagName.toLowerCase()&&(e.element.style.visibility=""),c().init(o)}},f={language:"zh_TW",menubar:"edit insert format table",plugins:"paste imagetools link table lists advlist hr charmap",toolbar:"undo redo | fontsizeselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",fontsize_formats:"8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt",invalid_elements:"wbr",paste_data_images:!0,branding:!1,elementpath:!1,setup:function(e){e.on("init",(function(n){var t=e.getBody().style;t.fontSize="11pt",t.fontFamily="'Microsoft JhengHei','Avenir','Helvetica'"}))},height:250},g={components:{"tinymce-vue":{props:u,created:function(){this.elementId=this.$props.id||o("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==c())m(this)();else if(this.element&&this.element.ownerDocument){var e=this.$props.cloudChannel?this.$props.cloudChannel:"5",n=this.$props.apiKey?this.$props.apiKey:"no-api-key",t=null==this.$props.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+e+"/tinymce.min.js":this.$props.tinymceScriptSrc;l.load(this.element.ownerDocument,t,m(this))}},beforeDestroy:function(){null!==c()&&c().remove(this.editor)},render:function(e){return this.inlineEditor?function(e,n,t){return e(t||"div",{attrs:{id:n}})}(e,this.elementId,this.$props.tagName):function(e,n){return e("textarea",{attrs:{id:n},style:{visibility:"hidden"}})}(e,this.elementId)}}},props:{value:{type:String},settings:{type:Object,default:function(){return f}},editable:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{},methods:{}};function h(e,n,t,r,i,o,a,s,l,d){"boolean"!=typeof a&&(l=s,s=a,a=!1);var c,u="function"==typeof t?t.options:t;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),r&&(u._scopeId=r),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=a?function(e){n.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,s(e))}),c)if(u.functional){var p=u.render;u.render=function(e,n){return c.call(n),p(e,n)}}else{var m=u.beforeCreate;u.beforeCreate=m?[].concat(m,c):[c]}return t}var y,v="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function b(e){return function(e,n){return function(e,n){var t=v?n.media||"default":e,r=A[t]||(A[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var i=n.source;if(n.map&&(i+="\n/*# sourceURL="+n.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===y&&(y=document.head||document.getElementsByTagName("head")[0]),y.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(i),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var o=r.ids.size-1,a=document.createTextNode(i),s=r.element.childNodes;s[o]&&r.element.removeChild(s[o]),s.length?r.element.insertBefore(a,s[o]):r.element.appendChild(a)}}}(e,n)}}var A={};const C=g;var w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{display:"inline-block"}},[t("tinymce-vue",{attrs:{init:e.settings,value:e.value,disabled:!e.editable},on:{input:function(n){e.$emit("input",n)}}})],1)};w._withStripped=!0;return h({render:w,staticRenderFns:[]},(function(e){e&&(e("data-v-7fb6bf28_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* 組件內選單初始文字用樣式穿透覆蓋 */\n[data-v-7fb6bf28] div {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\n}\n[data-v-7fb6bf28] button {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\n}\n[data-v-7fb6bf28] span {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\n}\r\n",map:{version:3,sources:["D:\\開源-JS-102-1-w-tinymce-vue\\w-tinymce-vue\\src\\WTinymceVue.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4FA,qBAAA;AACA;IACA,sDAAA;AACA;AACA;IACA,sDAAA;AACA;AACA;IACA,sDAAA;AACA",file:"WTinymceVue.vue",sourcesContent:["<template>\r\n    <div style=\"display:inline-block;\">\r\n\r\n        <tinymce-vue\r\n            :init=\"settings\"\r\n            :value=\"value\"\r\n            :disabled=\"!editable\"\r\n            @input=\"function(v){$emit('input',v)}\"\r\n        ></tinymce-vue>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport './zh_TW.js'\r\nimport Editor from '@tinymce/tinymce-vue'\r\n\r\nlet def_settings = {\r\n    language: 'zh_TW',\r\n    menubar: 'edit insert format table',\r\n    plugins: 'paste imagetools link table lists advlist hr charmap',\r\n    toolbar: 'undo redo | fontsizeselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',\r\n    fontsize_formats: '8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt',\r\n    invalid_elements: 'wbr', //禁止使用適合換行處元素wbr\r\n    paste_data_images: true,\r\n    branding: false, //移除logo\r\n    elementpath: false, //移除選擇元素路徑\r\n    //resize: false, //禁止改變視窗大小\r\n    setup: function (ed) {\r\n        ed.on('init', function (e) {\r\n\r\n            //style\r\n            let s = ed.getBody().style\r\n            s.fontSize = '11pt'\r\n            s.fontFamily = `'Microsoft JhengHei','Avenir','Helvetica'`\r\n\r\n        })\r\n    },\r\n    height: 250,\r\n}\r\n\r\n/**\r\n * @vue-prop {String} value 輸入富文本字串\r\n * @vue-prop {String} settings 輸入tinymce設定物件，預設值詳見原始碼\r\n * @vue-prop {String} [editable=true] 輸入是否允許編輯，預設true\r\n */\r\nexport default {\r\n    components: {\r\n        'tinymce-vue': Editor\r\n    },\r\n    props: {\r\n        value: {\r\n            type: String,\r\n        },\r\n        settings: {\r\n            type: Object,\r\n            default: function() {\r\n                return def_settings\r\n            }\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n        // //強制修改選單字型\r\n        // function modifyFontFamily(q) {\r\n        //     let elems = document.querySelectorAll(q)\r\n        //     console.log(elems)\r\n        //     let index = 0; let length = elems.length\r\n        //     for (; index < length; index++) {\r\n        //         elems[index].style.fontFamily = 'Microsoft JhengHei'\r\n        //     }\r\n        // }\r\n        // //因tinymce選單是啟動後插入, 無法被css樣式穿透修改, 故改用js延遲修改\r\n        // setTimeout(function() {\r\n        //     modifyFontFamily('div,button,span,p,a')\r\n        // }, 500)\r\n    },\r\n    computed: {\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n/* 組件內選單初始文字用樣式穿透覆蓋 */\r\n::v-deep div {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\r\n}\r\n::v-deep button {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\r\n}\r\n::v-deep span {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\r\n}\r\n</style>\r\n<style>\r\n/* 組件彈出選單用全域樣式覆蓋, 會影響到其他直接使用tinymce的地方 */\r\n.tox-collection__item-label {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica' !important;\r\n}\r\n</style>\r\n"]},media:void 0}),e("data-v-7fb6bf28_1",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* 組件彈出選單用全域樣式覆蓋, 會影響到其他直接使用tinymce的地方 */\n.tox-collection__item-label {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica' !important;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-102-1-w-tinymce-vue\\w-tinymce-vue\\src\\WTinymceVue.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwGA,wCAAA;AACA;IACA,iEAAA;AACA",file:"WTinymceVue.vue",sourcesContent:["<template>\r\n    <div style=\"display:inline-block;\">\r\n\r\n        <tinymce-vue\r\n            :init=\"settings\"\r\n            :value=\"value\"\r\n            :disabled=\"!editable\"\r\n            @input=\"function(v){$emit('input',v)}\"\r\n        ></tinymce-vue>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport './zh_TW.js'\r\nimport Editor from '@tinymce/tinymce-vue'\r\n\r\nlet def_settings = {\r\n    language: 'zh_TW',\r\n    menubar: 'edit insert format table',\r\n    plugins: 'paste imagetools link table lists advlist hr charmap',\r\n    toolbar: 'undo redo | fontsizeselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',\r\n    fontsize_formats: '8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt',\r\n    invalid_elements: 'wbr', //禁止使用適合換行處元素wbr\r\n    paste_data_images: true,\r\n    branding: false, //移除logo\r\n    elementpath: false, //移除選擇元素路徑\r\n    //resize: false, //禁止改變視窗大小\r\n    setup: function (ed) {\r\n        ed.on('init', function (e) {\r\n\r\n            //style\r\n            let s = ed.getBody().style\r\n            s.fontSize = '11pt'\r\n            s.fontFamily = `'Microsoft JhengHei','Avenir','Helvetica'`\r\n\r\n        })\r\n    },\r\n    height: 250,\r\n}\r\n\r\n/**\r\n * @vue-prop {String} value 輸入富文本字串\r\n * @vue-prop {String} settings 輸入tinymce設定物件，預設值詳見原始碼\r\n * @vue-prop {String} [editable=true] 輸入是否允許編輯，預設true\r\n */\r\nexport default {\r\n    components: {\r\n        'tinymce-vue': Editor\r\n    },\r\n    props: {\r\n        value: {\r\n            type: String,\r\n        },\r\n        settings: {\r\n            type: Object,\r\n            default: function() {\r\n                return def_settings\r\n            }\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n        // //強制修改選單字型\r\n        // function modifyFontFamily(q) {\r\n        //     let elems = document.querySelectorAll(q)\r\n        //     console.log(elems)\r\n        //     let index = 0; let length = elems.length\r\n        //     for (; index < length; index++) {\r\n        //         elems[index].style.fontFamily = 'Microsoft JhengHei'\r\n        //     }\r\n        // }\r\n        // //因tinymce選單是啟動後插入, 無法被css樣式穿透修改, 故改用js延遲修改\r\n        // setTimeout(function() {\r\n        //     modifyFontFamily('div,button,span,p,a')\r\n        // }, 500)\r\n    },\r\n    computed: {\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n/* 組件內選單初始文字用樣式穿透覆蓋 */\r\n::v-deep div {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\r\n}\r\n::v-deep button {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\r\n}\r\n::v-deep span {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\r\n}\r\n</style>\r\n<style>\r\n/* 組件彈出選單用全域樣式覆蓋, 會影響到其他直接使用tinymce的地方 */\r\n.tox-collection__item-label {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica' !important;\r\n}\r\n</style>\r\n"]},media:void 0}))}),C,"data-v-7fb6bf28",!1,void 0,!1,b,void 0,void 0)}));
//# sourceMappingURL=w-tinymce-vue.umd.js.map
