/*!
 * w-tinymce-vue v2.0.6
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self)["w-tinymce-vue"]=e()}(this,(function(){"use strict";var n=Array.isArray,e="object"==typeof global&&global&&global.Object===Object&&global,t="object"==typeof self&&self&&self.Object===Object&&self,r=e||t||Function("return this")(),o=r.Symbol,i=Object.prototype,l=i.hasOwnProperty,a=i.toString,s=o?o.toStringTag:void 0;var c=Object.prototype.toString;var u="[object Null]",d="[object Undefined]",p=o?o.toStringTag:void 0;function h(n){return null==n?void 0===n?d:u:p&&p in Object(n)?function(n){var e=l.call(n,s),t=n[s];try{n[s]=void 0;var r=!0}catch(n){}var o=a.call(n);return r&&(e?n[s]=t:delete n[s]),o}(n):function(n){return c.call(n)}(n)}function f(n){return null!=n&&"object"==typeof n}var g="[object Symbol]";function m(n){return"symbol"==typeof n||f(n)&&h(n)==g}var v=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,y=/^\w*$/;function b(n){var e=typeof n;return null!=n&&("object"==e||"function"==e)}var _="[object AsyncFunction]",A="[object Function]",S="[object GeneratorFunction]",C="[object Proxy]";var w,H=r["__core-js_shared__"],I=(w=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"";var E=Function.prototype.toString;var $=/^\[object .+?Constructor\]$/,x=Function.prototype,T=Object.prototype,k=x.toString,P=T.hasOwnProperty,F=RegExp("^"+k.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function j(n){if(!b(n)||(e=n,I&&I in e))return!1;var e,t=function(n){if(!b(n))return!1;var e=h(n);return e==A||e==S||e==_||e==C}(n)?F:$;return t.test(function(n){if(null!=n){try{return E.call(n)}catch(n){}try{return n+""}catch(n){}}return""}(n))}function O(n,e){var t=function(n,e){return null==n?void 0:n[e]}(n,e);return j(t)?t:void 0}var R=O(Object,"create");var L=Object.prototype.hasOwnProperty;var z=Object.prototype.hasOwnProperty;function D(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}function B(n,e){for(var t,r,o=n.length;o--;)if((t=n[o][0])===(r=e)||t!=t&&r!=r)return o;return-1}D.prototype.clear=function(){this.__data__=R?R(null):{},this.size=0},D.prototype.delete=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e},D.prototype.get=function(n){var e=this.__data__;if(R){var t=e[n];return"__lodash_hash_undefined__"===t?void 0:t}return L.call(e,n)?e[n]:void 0},D.prototype.has=function(n){var e=this.__data__;return R?void 0!==e[n]:z.call(e,n)},D.prototype.set=function(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=R&&void 0===e?"__lodash_hash_undefined__":e,this};var M=Array.prototype.splice;function N(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}N.prototype.clear=function(){this.__data__=[],this.size=0},N.prototype.delete=function(n){var e=this.__data__,t=B(e,n);return!(t<0)&&(t==e.length-1?e.pop():M.call(e,t,1),--this.size,!0)},N.prototype.get=function(n){var e=this.__data__,t=B(e,n);return t<0?void 0:e[t][1]},N.prototype.has=function(n){return B(this.__data__,n)>-1},N.prototype.set=function(n,e){var t=this.__data__,r=B(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this};var U=O(r,"Map");function q(n,e){var t,r,o=n.__data__;return("string"==(r=typeof(t=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t)?o["string"==typeof e?"string":"hash"]:o.map}function J(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}J.prototype.clear=function(){this.size=0,this.__data__={hash:new D,map:new(U||N),string:new D}},J.prototype.delete=function(n){var e=q(this,n).delete(n);return this.size-=e?1:0,e},J.prototype.get=function(n){return q(this,n).get(n)},J.prototype.has=function(n){return q(this,n).has(n)},J.prototype.set=function(n,e){var t=q(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this};var V="Expected a function";function W(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError(V);var t=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=t.cache;if(i.has(o))return i.get(o);var l=n.apply(this,r);return t.cache=i.set(o,l)||i,l};return t.cache=new(W.Cache||J),t}W.Cache=J;var G,K,Y,X=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Z=/\\(\\)?/g,Q=(G=function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(X,(function(n,t,r,o){e.push(r?o.replace(Z,"$1"):t||n)})),e},K=W(G,(function(n){return 500===Y.size&&Y.clear(),n})),Y=K.cache,K),nn=Q;var en=1/0,tn=o?o.prototype:void 0,rn=tn?tn.toString:void 0;function on(e){if("string"==typeof e)return e;if(n(e))return function(n,e){for(var t=-1,r=null==n?0:n.length,o=Array(r);++t<r;)o[t]=e(n[t],t,n);return o}(e,on)+"";if(m(e))return rn?rn.call(e):"";var t=e+"";return"0"==t&&1/e==-en?"-0":t}function ln(e,t){return n(e)?e:function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!m(e))||y.test(e)||!v.test(e)||null!=t&&e in Object(t)}(e,t)?[e]:nn(function(n){return null==n?"":on(n)}(e))}var an=1/0;function sn(n){if("string"==typeof n||m(n))return n;var e=n+"";return"0"==e&&1/n==-an?"-0":e}function cn(n,e,t){var r=null==n?void 0:function(n,e){for(var t=0,r=(e=ln(e,n)).length;null!=n&&t<r;)n=n[sn(e[t++])];return t&&t==r?n:void 0}(n,e);return void 0===r?t:r}var un=function(n,e){return function(t){return n(e(t))}}(Object.getPrototypeOf,Object),dn=un,pn="[object Object]",hn=Function.prototype,fn=Object.prototype,gn=hn.toString,mn=fn.hasOwnProperty,vn=gn.call(Object);function yn(n){return f(n)&&1===n.nodeType&&!function(n){if(!f(n)||h(n)!=pn)return!1;var e=dn(n);if(null===e)return!0;var t=mn.call(e,"constructor")&&e.constructor;return"function"==typeof t&&t instanceof t&&gn.call(t)==vn}(n)}var bn,_n=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],An=function(n){return-1!==_n.map((function(n){return n.toLowerCase()})).indexOf(n.toLowerCase())},Sn=function(n,e,t){var r=e.$props.value?e.$props.value:"",o=e.$props.initialValue?e.$props.initialValue:"";t.setContent(r||(e.initialized?e.cache:o)),e.$watch("value",(function(n,r){t&&"string"==typeof n&&n!==r&&n!==t.getContent({format:e.$props.outputFormat})&&t.setContent(n)})),e.$listeners.input&&function(n,e){var t=n.$props.modelEvents?n.$props.modelEvents:null,r=Array.isArray(t)?t.join(" "):t;e.on(r||"change input undo redo",(function(){n.$emit("input",e.getContent({format:n.$props.outputFormat}))}))}(e,t),function(n,e,t){Object.keys(e).filter(An).forEach((function(r){var o=e[r];"function"==typeof o&&("onInit"===r?o(n,t):t.on(r.substring(2),(function(n){return o(n,t)})))}))}(n,e.$listeners,t),e.initialized=!0},Cn=0,wn=function(n){var e=Date.now();return n+"_"+Math.floor(1e9*Math.random())+ ++Cn+String(e)},Hn=function(n){return void 0===n||""===n?[]:Array.isArray(n)?n:n.split(" ")},In=function(){return{listeners:[],scriptId:wn("tiny-script"),scriptLoaded:!1}},En=(bn=In(),{load:function(n,e,t){bn.scriptLoaded?t():(bn.listeners.push(t),n.getElementById(bn.scriptId)||function(n,e,t,r){var o=e.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=n,o.src=t;var i=function(){o.removeEventListener("load",i),r()};o.addEventListener("load",i),e.head&&e.head.appendChild(o)}(bn.scriptId,n,e,(function(){bn.listeners.forEach((function(n){return n()})),bn.scriptLoaded=!0})))},reinitialize:function(){bn=In()}}),$n=function(){return"undefined"!=typeof window?window:global},xn=function(){var n=$n();return n&&n.tinymce?n.tinymce:null},Tn={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(n){return"html"===n||"text"===n}}},kn=function(){return kn=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},kn.apply(this,arguments)},Pn=function(n){return function(){var e,t,r,o=kn(kn({},n.$props.init),{readonly:n.$props.disabled,selector:"#"+n.elementId,plugins:(e=n.$props.init&&n.$props.init.plugins,t=n.$props.plugins,Hn(e).concat(Hn(t))),toolbar:n.$props.toolbar||n.$props.init&&n.$props.init.toolbar,inline:n.inlineEditor,setup:function(e){n.editor=e,e.on("init",(function(t){return Sn(t,n,e)})),n.$props.init&&"function"==typeof n.$props.init.setup&&n.$props.init.setup(e)}});null!==(r=n.element)&&"textarea"===r.tagName.toLowerCase()&&(n.element.style.visibility="",n.element.style.display=""),xn().init(o)}},Fn={props:Tn,created:function(){this.elementId=this.$props.id||wn("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==xn())Pn(this)();else if(this.element&&this.element.ownerDocument){var n=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",t=null==this.$props.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+n+"/tinymce.min.js":this.$props.tinymceScriptSrc;En.load(this.element.ownerDocument,t,Pn(this))}},beforeDestroy:function(){null!==xn()&&xn().remove(this.editor)},deactivated:function(){var n;this.inlineEditor||(this.cache=this.editor.getContent(),null===(n=xn())||void 0===n||n.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&Pn(this)()},render:function(n){return this.inlineEditor?function(n,e,t){return n(t||"div",{attrs:{id:e}})}(n,this.elementId,this.$props.tagName):function(n,e){return n("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(n,this.elementId)}};tinymce.addI18n("zh_TW",{Redo:"重做",Undo:"撤銷",Cut:"剪下",Copy:"複製",Paste:"貼上","Select all":"全選","New document":"新文件",Ok:"確定",Cancel:"取消","Visual aids":"小幫手",Bold:"粗體",Italic:"斜體",Underline:"下劃線",Strikethrough:"刪除線",Superscript:"上標",Subscript:"下標","Clear formatting":"清除格式","Align left":"左邊對齊","Align center":"中間對齊","Align right":"右邊對齊",Justify:"左右對齊","Bullet list":"項目清單","Numbered list":"數字清單","Decrease indent":"減少縮排","Increase indent":"增加縮排",Close:"關閉",Formats:"格式","Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.":"您的瀏覽器不支援存取剪貼簿，可以使用快速鍵 Ctrl + X/C/V 代替剪下、複製與貼上。",Headers:"標題","Header 1":"標題 1","Header 2":"標題 2","Header 3":"標題 3","Header 4":"標題 4","Header 5":"標題 5","Header 6":"標題 6",Headings:"標題","Heading 1":"標題1","Heading 2":"標題2","Heading 3":"標題3","Heading 4":"標題4","Heading 5":"標題5","Heading 6":"標題6",Preformatted:"預先格式化的",Div:"Div",Pre:"Pre",Code:"代碼",Paragraph:"段落",Blockquote:"引文區塊",Inline:"內聯",Blocks:"基塊","Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.":"目前將以純文字的模式貼上，您可以再點選一次取消。",Fonts:"字型","Font Sizes":"字型大小",Class:"類型","Browse for an image":"從圖片中瀏覽",OR:"或","Drop an image here":"拖曳圖片至此",Upload:"上傳",Block:"區塊",Align:"對齊",Default:"預設",Circle:"空心圓",Disc:"實心圓",Square:"正方形","Lower Alpha":"小寫英文字母","Lower Greek":"希臘字母","Lower Roman":"小寫羅馬數字","Upper Alpha":"大寫英文字母","Upper Roman":"大寫羅馬數字","Anchor...":"錨點...",Name:"名稱",Id:"Id","Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.":"Id應以字母開頭，後面接著字母，數字，破折號，點數，冒號或下劃線。","You have unsaved changes are you sure you want to navigate away?":"編輯尚未被儲存，你確定要離開？","Restore last draft":"載入上一次編輯的草稿","Special character...":"特殊字元......","Source code":"原始碼","Insert/Edit code sample":"插入/編輯 程式碼範例",Language:"語言","Code sample...":"程式碼範例...","Color Picker":"選色器",R:"紅",G:"綠",B:"藍","Left to right":"從左到右","Right to left":"從右到左","Emoticons...":"表情符號…","Metadata and Document Properties":"後設資料與文件屬性",Title:"標題",Keywords:"關鍵字",Description:"描述",Robots:"機器人",Author:"作者",Encoding:"編碼",Fullscreen:"全螢幕",Action:"動作",Shortcut:"快速鍵",Help:"幫助",Address:"地址","Focus to menubar":"跳至選單列","Focus to toolbar":"跳至工具列","Focus to element path":"跳至HTML元素列","Focus to contextual toolbar":"跳至快捷選單","Insert link (if link plugin activated)":"新增捷徑 (捷徑外掛啟用時)","Save (if save plugin activated)":"儲存 (儲存外掛啟用時)","Find (if searchreplace plugin activated)":"尋找 (尋找取代外掛啟用時)","Plugins installed ({0}):":"({0}) 個外掛已安裝：","Premium plugins:":"加值外掛：","Learn more...":"了解更多...","You are using {0}":"您正在使用 {0}",Plugins:"外掛","Handy Shortcuts":"快速鍵","Horizontal line":"水平線","Insert/edit image":"插入/編輯 圖片","Image description":"圖片描述",Source:"圖片網址",Dimensions:"尺寸","Constrain proportions":"等比例縮放",General:"一般",Advanced:"進階",Style:"樣式","Vertical space":"高度","Horizontal space":"寬度",Border:"邊框","Insert image":"插入圖片","Image...":"圖片......","Image list":"圖片清單","Rotate counterclockwise":"逆時針旋轉","Rotate clockwise":"順時針旋轉","Flip vertically":"垂直翻轉","Flip horizontally":"水平翻轉","Edit image":"編輯圖片","Image options":"圖片選項","Zoom in":"放大","Zoom out":"縮小",Crop:"裁剪",Resize:"調整大小",Orientation:"方向",Brightness:"亮度",Sharpen:"銳化",Contrast:"對比","Color levels":"顏色層次",Gamma:"伽馬值",Invert:"反轉",Apply:"應用",Back:"後退","Insert date/time":"插入 日期/時間","Date/time":"日期/時間","Insert/Edit Link":"插入/編輯連結","Insert/edit link":"插入/編輯連結","Text to display":"顯示文字",Url:"網址","Open link in...":"開啟連結於...","Current window":"目前視窗",None:"無","New window":"另開視窗","Remove link":"移除連結",Anchors:"加入錨點","Link...":"連結...","Paste or type a link":"貼上或輸入連結","The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?":"你所填寫的URL為電子郵件，需要加上mailto:前綴嗎？","The URL you entered seems to be an external link. Do you want to add the required http:// prefix?":"你所填寫的URL屬於外部鏈接，需要加上http://:前綴嗎？","Link list":"連結清單","Insert video":"插入影音","Insert/edit video":"插件/編輯 影音","Insert/edit media":"插入/編輯 媒體","Alternative source":"替代影音","Alternative source URL":"替代來源URL","Media poster (Image URL)":"媒體海報（影像Image URL）","Paste your embed code below:":"請將您的嵌入式程式碼貼在下面:",Embed:"嵌入碼","Media...":"媒體...","Nonbreaking space":"不分行的空格","Page break":"分頁","Paste as text":"以純文字貼上",Preview:"預覽","Print...":"列印...",Save:"儲存",Find:"搜尋","Replace with":"更換",Replace:"替換","Replace all":"替換全部",Previous:"上一個",Next:"下一個","Find and replace...":"尋找及取代...","Could not find the specified string.":"無法查詢到此特定字串","Match case":"相匹配案件","Find whole words only":"僅找出完整字匯","Spell check":"拼寫檢查",Ignore:"忽略","Ignore all":"忽略所有",Finish:"完成","Add to Dictionary":"加入字典中","Insert table":"插入表格","Table properties":"表格屬性","Delete table":"刪除表格",Cell:"儲存格",Row:"列",Column:"行","Cell properties":"儲存格屬性","Merge cells":"合併儲存格","Split cell":"分割儲存格","Insert row before":"插入列在...之前","Insert row after":"插入列在...之後","Delete row":"刪除列","Row properties":"列屬性","Cut row":"剪下列","Copy row":"複製列","Paste row before":"貼上列在...之前","Paste row after":"貼上列在...之後","Insert column before":"插入欄位在...之前","Insert column after":"插入欄位在...之後","Delete column":"刪除行",Cols:"欄位段",Rows:"列",Width:"寬度",Height:"高度","Cell spacing":"儲存格得間距","Cell padding":"儲存格的邊距","Show caption":"顯示標題",Left:"左邊",Center:"中間",Right:"右邊","Cell type":"儲存格的類型",Scope:"範圍",Alignment:"對齊","H Align":"水平位置","V Align":"垂直位置",Top:"置頂",Middle:"置中",Bottom:"置底","Header cell":"標頭儲存格","Row group":"列群組","Column group":"欄位群組","Row type":"行的類型",Header:"標頭",Body:"主體",Footer:"頁尾","Border color":"邊框顏色","Insert template...":"插入樣版...",Templates:"樣版",Template:"樣板","Text color":"文字顏色","Background color":"背景顏色","Custom...":"自訂","Custom color":"自訂顏色","No color":"No color","Remove color":"移除顏色","Table of Contents":"目錄","Show blocks":"顯示區塊資訊","Show invisible characters":"顯示隱藏字元","Word count":"計算字數",Count:"計算",Document:"文件",Selection:"選項",Words:"字數","Words: {0}":"字數：{0}","{0} words":"{0} 字元",File:"檔案",Edit:"編輯",Insert:"插入",View:"檢視",Format:"格式",Table:"表格",Tools:"工具","Powered by {0}":"由 {0} 提供","Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help":"豐富的文本區域。按ALT-F9前往主選單。按ALT-F10呼叫工具欄。按ALT-0尋求幫助","Image title":"圖片標題","Border width":"框線寬度","Border style":"框線樣式",Error:"錯誤",Warn:"警告",Valid:"有效","To open the popup, press Shift+Enter":"要開啟彈出視窗，請按Shift+Enter","Rich Text Area. Press ALT-0 for help.":"富文本區域。請按ALT-0尋求協助。","System Font":"系統字型","Failed to upload image: {0}":"無法上傳影像：{0}","Failed to load plugin: {0} from url {1}":"無法上傳插件：{0}自url{1}","Failed to load plugin url: {0}":"無法上傳插件：{0}","Failed to initialize plugin: {0}":"無法啟動插件：{0}",example:"範例",Search:"搜索",All:"全部",Currency:"貨幣",Text:"文本",Quotations:"引用",Mathematical:"數學","Extended Latin":"拉丁字母擴充",Symbols:"符號",Arrows:"箭頭","User Defined":"使用者已定義","dollar sign":"美元符號","currency sign":"貨幣符號","euro-currency sign":"歐元符號","colon sign":"科朗符號","cruzeiro sign":"克魯賽羅符號","french franc sign":"法朗符號","lira sign":"里拉符號","mill sign":"文符號","naira sign":"奈拉符號","peseta sign":"比塞塔符號","rupee sign":"盧比符號","won sign":"韓圜符號","new sheqel sign":"新謝克爾符號","dong sign":"越南盾符號","kip sign":"老撾幣符號","tugrik sign":"蒙古幣符號","drachma sign":"德克拉馬符號","german penny symbol":"德國分符號","peso sign":"披索符號","guarani sign":"巴拉圭幣符號","austral sign":"阿根廷幣符號","hryvnia sign":"烏克蘭幣符號","cedi sign":"迦納幣符號","livre tournois sign":"里弗爾符號","spesmilo sign":"國際幣符號","tenge sign":"哈薩克幣符號","indian rupee sign":"印度盧比符號","turkish lira sign":"土耳其里拉符號","nordic mark sign":"北歐馬克符號","manat sign":"亞塞拜然幣符號","ruble sign":"盧布符號","yen character":"日圓符號","yuan character":"人民幣符號","yuan character, in hong kong and taiwan":"港元與台幣符號","yen/yuan character variant one":"日圓/人民幣符號變化型","Loading emoticons...":"載入表情符號…","Could not load emoticons":"無法載入表情符號",People:"人","Animals and Nature":"動物與自然","Food and Drink":"飲食",Activity:"活動","Travel and Places":"旅行與地點",Objects:"物件",Flags:"旗標",Characters:"字元","Characters (no spaces)":"字元（無空格）","{0} characters":"{0}字元","Error: Form submit field collision.":"錯誤：表格遞交欄位衝突。","Error: No form element found.":"錯誤：找不到表格元素。",Update:"更新","Color swatch":"色彩樣本",Turquoise:"土耳其藍",Green:"綠色",Blue:"藍色",Purple:"紫色","Navy Blue":"深藍色","Dark Turquoise":"深土耳其藍","Dark Green":"深綠色","Medium Blue":"中藍色","Medium Purple":"中紫色","Midnight Blue":"黑藍色",Yellow:"黃色",Orange:"橙色",Red:"紅色","Light Gray":"淺灰色",Gray:"灰色","Dark Yellow":"深黃色","Dark Orange":"深橙色","Dark Red":"暗紅色","Medium Gray":"中灰色","Dark Gray":"深灰色","Light Green":"淡綠色","Light Yellow":"淺黃色","Light Red":"淺紅色","Light Purple":"淺紫色","Light Blue":"淺藍色","Dark Purple":"深紫色","Dark Blue":"深藍色",Black:"黑色",White:"白色","Switch to or from fullscreen mode":"轉換自/至全螢幕模式","Open help dialog":"開啟協助對話",history:"歷史",styles:"樣式",formatting:"格式",alignment:"對齊",indentation:"縮排","permanent pen":"永久性筆",comments:"註解","Format Painter":"複製格式","Insert/edit iframe":"插入/編輯iframe",Capitalization:"大寫",lowercase:"小寫",UPPERCASE:"大寫","Title Case":"字首大寫","Permanent Pen Properties":"永久標記屬性","Permanent pen properties...":"永久標記屬性......",Font:"字型",Size:"字形大小","More...":"更多資訊......","Spellcheck Language":"拼寫語言","Select...":"選擇......",Preferences:"首選項",Yes:"是",No:"否","Keyboard Navigation":"鍵盤導航",Version:"版本",Anchor:"加入錨點","Special character":"特殊字元","Code sample":"程式碼範例",Color:"顏色",Emoticons:"表情","Document properties":"文件的屬性",Image:"圖片","Insert link":"插入連結",Target:"開啟方式",Link:"連結",Poster:"預覽圖片",Media:"媒體",Print:"列印",Prev:"上一個","Find and replace":"尋找及取代","Whole words":"整個單字",Spellcheck:"拼字檢查",Caption:"表格標題","Insert template":"插入樣版"});let jn={language:"zh_TW",menubar:"edit insert format table",plugins:"paste imagetools link table lists advlist hr charmap",toolbar:"undo redo | fontsizeselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",fontsize_formats:"8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt",invalid_elements:"wbr",paste_data_images:!0,branding:!1,elementpath:!1,resize:!1,setup:function(n){n.on("init",(function(e){let t=n.getBody().style;t.fontSize="11pt",t.fontFamily="'Microsoft JhengHei','Avenir','Helvetica'"}))},height:"100%"};var On={components:{"tinymce-vue":Fn},props:{value:{type:String,default:""},settings:{type:Object,default:()=>{}},height:{type:Number,default:250},editable:{type:Boolean,default:!0}},data:function(){return{}},computed:{useSettings:function(){return{...jn,...this.settings}},changeHeight:function(){let n=this,e=n.height;return n.__heightTemp__=e,n.updateHeight(),""}},methods:{onInit:function(){this.updateHeight()},getEditor:function(){let n=this;return n.$refs.edr?n.$refs.edr.editor:null},remove:function(n){n.parentNode.removeChild(n)},updateHeight:function(){let n=this;n.$nextTick((()=>{let e=n.getEditor(),t=cn(e,"iframeElement"),r=cn(t,"parentNode.parentNode");if(!n.$el||!e||!r)return;let o=yn(n.$el.querySelector(".tox-platform-ie"));if(r.style.height=n.height+"px",o&&(r.style.minHeight=r.style.height),o){let e=n.$el.querySelector(".tox-toolbar-overlord");e&&(e.style.borderBottom="1px solid #ccc")}let i=n.$el.querySelector(".tox-statusbar");i&&n.remove(i)}))}}};function Rn(n,e,t,r,o,i,l,a,s,c){"boolean"!=typeof l&&(s=a,a=l,l=!1);const u="function"==typeof t?t.options:t;let d;if(n&&n.render&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),r&&(u._scopeId=r),i?(d=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,s(n)),n&&n._registeredComponents&&n._registeredComponents.add(i)},u._ssrRegister=d):e&&(d=l?function(n){e.call(this,c(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,a(n))}),d)if(u.functional){const n=u.render;u.render=function(e,t){return d.call(t),n(e,t)}}else{const n=u.beforeCreate;u.beforeCreate=n?[].concat(n,d):[d]}return t}const Ln="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function zn(n){return(n,e)=>function(n,e){const t=Ln?e.media||"default":n,r=Bn[t]||(Bn[t]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);let t=e.source;if(e.map&&(t+="\n/*# sourceURL="+e.map.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===Dn&&(Dn=document.head||document.getElementsByTagName("head")[0]),Dn.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(t),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const n=r.ids.size-1,e=document.createTextNode(t),o=r.element.childNodes;o[n]&&r.element.removeChild(o[n]),o.length?r.element.insertBefore(e,o[n]):r.element.appendChild(e)}}}(n,e)}let Dn;const Bn={};const Mn=On;var Nn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{display:"inline-block"},attrs:{changeHeight:n.changeHeight}},[t("tinymce-vue",{ref:"edr",attrs:{init:n.useSettings,value:n.value,disabled:!n.editable},on:{input:function(e){n.$emit("input",e)},onInit:n.onInit}})],1)};Nn._withStripped=!0;return Rn({render:Nn,staticRenderFns:[]},(function(n){n&&(n("data-v-17f102f4_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* 組件內選單初始文字用樣式穿透覆蓋 */\n[data-v-17f102f4] div {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\n}\n[data-v-17f102f4] button {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\n}\n[data-v-17f102f4] span {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\n}\r\n",map:{version:3,sources:["D:\\- 006 -        開源\\開源-JS-102-1-w-tinymce-vue\\w-tinymce-vue\\src\\WTinymceVue.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoNA,qBAAA;AACA;IACA,sDAAA;AACA;AACA;IACA,sDAAA;AACA;AACA;IACA,sDAAA;AACA",file:"WTinymceVue.vue",sourcesContent:["<template>\r\n    <div style=\"display:inline-block;\" :changeHeight=\"changeHeight\">\r\n\r\n        <tinymce-vue\r\n            ref=\"edr\"\r\n            :init=\"useSettings\"\r\n            :value=\"value\"\r\n            :disabled=\"!editable\"\r\n            @input=\"function(v){$emit('input',v)}\"\r\n            @onInit=\"onInit\"\r\n        ></tinymce-vue>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport get from 'lodash-es/get'\r\nimport isElement from 'lodash-es/isElement'\r\nimport Editor from '@tinymce/tinymce-vue' //支援vue2是3.2.6, 支援vue3是4.x\r\nimport './zh_TW.js'\r\n\r\n\r\nlet def_settings = {\r\n    language: 'zh_TW',\r\n    menubar: 'edit insert format table',\r\n    plugins: 'paste imagetools link table lists advlist hr charmap', //autoresize\r\n    toolbar: 'undo redo | fontsizeselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',\r\n    fontsize_formats: '8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt',\r\n    invalid_elements: 'wbr', //禁止使用適合換行處元素wbr\r\n    paste_data_images: true,\r\n    branding: false, //移除logo\r\n    elementpath: false, //移除選擇元素路徑\r\n    resize: false, //禁止改變視窗大小\r\n    setup: function (ed) {\r\n        ed.on('init', function (e) {\r\n\r\n            //style\r\n            let s = ed.getBody().style\r\n            s.fontSize = '11pt'\r\n            s.fontFamily = `'Microsoft JhengHei','Avenir','Helvetica'`\r\n\r\n        })\r\n    },\r\n    height: '100%',\r\n}\r\n\r\n/**\r\n * @vue-prop {String} [value=''] 輸入富文本字串，預設為''\r\n * @vue-prop {Object} [settings={}] 輸入quill設定物件，預設值詳見原始碼\r\n * @vue-prop {Number} [height=250] 輸入高度數字，單位為px，預設為250\r\n * @vue-prop {Boolean} [editable=true] 輸入是否允許編輯，預設true\r\n */\r\nexport default {\r\n    components: {\r\n        'tinymce-vue': Editor,\r\n    },\r\n    props: {\r\n        value: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        settings: {\r\n            type: Object,\r\n            default: () => {},\r\n        },\r\n        height: {\r\n            type: Number,\r\n            default: 250,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    // mounted: function() {\r\n    //     //console.log('mounted')\r\n\r\n    //     let vo = this\r\n\r\n    //     //強制修改選單字型\r\n    //     function modifyFontFamily(q) {\r\n    //         let elems = document.querySelectorAll(q)\r\n    //         console.log(elems)\r\n    //         let index = 0; let length = elems.length\r\n    //         for (; index < length; index++) {\r\n    //             elems[index].style.fontFamily = 'Microsoft JhengHei'\r\n    //         }\r\n    //     }\r\n    //     //因tinymce選單是啟動後插入, 無法被css樣式穿透修改, 故改用js延遲修改\r\n    //     setTimeout(function() {\r\n    //         modifyFontFamily('div,button,span,p,a')\r\n    //     }, 500)\r\n\r\n    // },\r\n    computed: {\r\n\r\n        useSettings: function() {\r\n            //console.log('computed useSettings')\r\n\r\n            let vo = this\r\n\r\n            let st = {\r\n                ...def_settings,\r\n                ...vo.settings,\r\n            }\r\n            // console.log('st', st)\r\n\r\n            return st\r\n        },\r\n\r\n        changeHeight: function() {\r\n            //console.log('computed changeHeight')\r\n\r\n            let vo = this\r\n\r\n            //height for trigger\r\n            let height = vo.height\r\n            vo.__heightTemp__ = height\r\n\r\n            //updateHeight\r\n            vo.updateHeight()\r\n\r\n            return ''\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        onInit: function() {\r\n            //console.log('methods onInit')\r\n\r\n            let vo = this\r\n\r\n            //updateHeight\r\n            vo.updateHeight()\r\n\r\n        },\r\n\r\n        getEditor: function() {\r\n            //console.log('methods getEditor')\r\n\r\n            let vo = this\r\n\r\n            if (vo.$refs.edr) {\r\n                return vo.$refs.edr.editor\r\n            }\r\n            return null\r\n        },\r\n\r\n        remove: function(ele) {\r\n            //console.log('methods remove', ele)\r\n            ele.parentNode.removeChild(ele)\r\n        },\r\n\r\n        updateHeight: function() {\r\n            //console.log('methods updateHeight')\r\n\r\n            let vo = this\r\n\r\n            vo.$nextTick(() => {\r\n\r\n                //editor\r\n                let editor = vo.getEditor()\r\n\r\n                //ele\r\n                let frame = get(editor, 'iframeElement') //可編輯區是位於iframe內\r\n                let ele = get(frame, 'parentNode.parentNode') //把height設定至兩層父層的高度才能響應調整\r\n\r\n                //check\r\n                if (!vo.$el || !editor || !ele) {\r\n                    return\r\n                }\r\n\r\n                //isIE11\r\n                let eleIE11 = vo.$el.querySelector('.tox-platform-ie')\r\n                let isIE11 = isElement(eleIE11)\r\n\r\n                //update height\r\n                ele.style.height = vo.height + 'px'\r\n                //於IE11未設定min-height會無法順利展開, 得一併設定\r\n                if (isIE11) {\r\n                    ele.style.minHeight = ele.style.height\r\n                    // ele.style.maxHeight = ele.style.height\r\n                }\r\n\r\n                //IE11時選單下方的分隔線會消失, 得強制給予\r\n                if (isIE11) {\r\n                    let eleToolbar = vo.$el.querySelector('.tox-toolbar-overlord')\r\n                    if (eleToolbar) {\r\n                        eleToolbar.style.borderBottom = '1px solid #ccc'\r\n                    }\r\n                }\r\n\r\n                //移除logo後的空白區域\r\n                let sb = vo.$el.querySelector('.tox-statusbar')\r\n                if (sb) {\r\n                    vo.remove(sb)\r\n                }\r\n\r\n            })\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n/* 組件內選單初始文字用樣式穿透覆蓋 */\r\n::v-deep div {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\r\n}\r\n::v-deep button {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\r\n}\r\n::v-deep span {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\r\n}\r\n</style>\r\n<style>\r\n/* 組件彈出選單用全域樣式覆蓋, 會影響到其他直接使用tinymce的地方 */\r\n.tox-collection__item-label {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica' !important;\r\n}\r\n</style>\r\n"]},media:void 0}),n("data-v-17f102f4_1",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* 組件彈出選單用全域樣式覆蓋, 會影響到其他直接使用tinymce的地方 */\n.tox-collection__item-label {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica' !important;\n}\r\n",map:{version:3,sources:["D:\\- 006 -        開源\\開源-JS-102-1-w-tinymce-vue\\w-tinymce-vue\\src\\WTinymceVue.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgOA,wCAAA;AACA;IACA,iEAAA;AACA",file:"WTinymceVue.vue",sourcesContent:["<template>\r\n    <div style=\"display:inline-block;\" :changeHeight=\"changeHeight\">\r\n\r\n        <tinymce-vue\r\n            ref=\"edr\"\r\n            :init=\"useSettings\"\r\n            :value=\"value\"\r\n            :disabled=\"!editable\"\r\n            @input=\"function(v){$emit('input',v)}\"\r\n            @onInit=\"onInit\"\r\n        ></tinymce-vue>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport get from 'lodash-es/get'\r\nimport isElement from 'lodash-es/isElement'\r\nimport Editor from '@tinymce/tinymce-vue' //支援vue2是3.2.6, 支援vue3是4.x\r\nimport './zh_TW.js'\r\n\r\n\r\nlet def_settings = {\r\n    language: 'zh_TW',\r\n    menubar: 'edit insert format table',\r\n    plugins: 'paste imagetools link table lists advlist hr charmap', //autoresize\r\n    toolbar: 'undo redo | fontsizeselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',\r\n    fontsize_formats: '8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt',\r\n    invalid_elements: 'wbr', //禁止使用適合換行處元素wbr\r\n    paste_data_images: true,\r\n    branding: false, //移除logo\r\n    elementpath: false, //移除選擇元素路徑\r\n    resize: false, //禁止改變視窗大小\r\n    setup: function (ed) {\r\n        ed.on('init', function (e) {\r\n\r\n            //style\r\n            let s = ed.getBody().style\r\n            s.fontSize = '11pt'\r\n            s.fontFamily = `'Microsoft JhengHei','Avenir','Helvetica'`\r\n\r\n        })\r\n    },\r\n    height: '100%',\r\n}\r\n\r\n/**\r\n * @vue-prop {String} [value=''] 輸入富文本字串，預設為''\r\n * @vue-prop {Object} [settings={}] 輸入quill設定物件，預設值詳見原始碼\r\n * @vue-prop {Number} [height=250] 輸入高度數字，單位為px，預設為250\r\n * @vue-prop {Boolean} [editable=true] 輸入是否允許編輯，預設true\r\n */\r\nexport default {\r\n    components: {\r\n        'tinymce-vue': Editor,\r\n    },\r\n    props: {\r\n        value: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        settings: {\r\n            type: Object,\r\n            default: () => {},\r\n        },\r\n        height: {\r\n            type: Number,\r\n            default: 250,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    // mounted: function() {\r\n    //     //console.log('mounted')\r\n\r\n    //     let vo = this\r\n\r\n    //     //強制修改選單字型\r\n    //     function modifyFontFamily(q) {\r\n    //         let elems = document.querySelectorAll(q)\r\n    //         console.log(elems)\r\n    //         let index = 0; let length = elems.length\r\n    //         for (; index < length; index++) {\r\n    //             elems[index].style.fontFamily = 'Microsoft JhengHei'\r\n    //         }\r\n    //     }\r\n    //     //因tinymce選單是啟動後插入, 無法被css樣式穿透修改, 故改用js延遲修改\r\n    //     setTimeout(function() {\r\n    //         modifyFontFamily('div,button,span,p,a')\r\n    //     }, 500)\r\n\r\n    // },\r\n    computed: {\r\n\r\n        useSettings: function() {\r\n            //console.log('computed useSettings')\r\n\r\n            let vo = this\r\n\r\n            let st = {\r\n                ...def_settings,\r\n                ...vo.settings,\r\n            }\r\n            // console.log('st', st)\r\n\r\n            return st\r\n        },\r\n\r\n        changeHeight: function() {\r\n            //console.log('computed changeHeight')\r\n\r\n            let vo = this\r\n\r\n            //height for trigger\r\n            let height = vo.height\r\n            vo.__heightTemp__ = height\r\n\r\n            //updateHeight\r\n            vo.updateHeight()\r\n\r\n            return ''\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        onInit: function() {\r\n            //console.log('methods onInit')\r\n\r\n            let vo = this\r\n\r\n            //updateHeight\r\n            vo.updateHeight()\r\n\r\n        },\r\n\r\n        getEditor: function() {\r\n            //console.log('methods getEditor')\r\n\r\n            let vo = this\r\n\r\n            if (vo.$refs.edr) {\r\n                return vo.$refs.edr.editor\r\n            }\r\n            return null\r\n        },\r\n\r\n        remove: function(ele) {\r\n            //console.log('methods remove', ele)\r\n            ele.parentNode.removeChild(ele)\r\n        },\r\n\r\n        updateHeight: function() {\r\n            //console.log('methods updateHeight')\r\n\r\n            let vo = this\r\n\r\n            vo.$nextTick(() => {\r\n\r\n                //editor\r\n                let editor = vo.getEditor()\r\n\r\n                //ele\r\n                let frame = get(editor, 'iframeElement') //可編輯區是位於iframe內\r\n                let ele = get(frame, 'parentNode.parentNode') //把height設定至兩層父層的高度才能響應調整\r\n\r\n                //check\r\n                if (!vo.$el || !editor || !ele) {\r\n                    return\r\n                }\r\n\r\n                //isIE11\r\n                let eleIE11 = vo.$el.querySelector('.tox-platform-ie')\r\n                let isIE11 = isElement(eleIE11)\r\n\r\n                //update height\r\n                ele.style.height = vo.height + 'px'\r\n                //於IE11未設定min-height會無法順利展開, 得一併設定\r\n                if (isIE11) {\r\n                    ele.style.minHeight = ele.style.height\r\n                    // ele.style.maxHeight = ele.style.height\r\n                }\r\n\r\n                //IE11時選單下方的分隔線會消失, 得強制給予\r\n                if (isIE11) {\r\n                    let eleToolbar = vo.$el.querySelector('.tox-toolbar-overlord')\r\n                    if (eleToolbar) {\r\n                        eleToolbar.style.borderBottom = '1px solid #ccc'\r\n                    }\r\n                }\r\n\r\n                //移除logo後的空白區域\r\n                let sb = vo.$el.querySelector('.tox-statusbar')\r\n                if (sb) {\r\n                    vo.remove(sb)\r\n                }\r\n\r\n            })\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n/* 組件內選單初始文字用樣式穿透覆蓋 */\r\n::v-deep div {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\r\n}\r\n::v-deep button {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\r\n}\r\n::v-deep span {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica';\r\n}\r\n</style>\r\n<style>\r\n/* 組件彈出選單用全域樣式覆蓋, 會影響到其他直接使用tinymce的地方 */\r\n.tox-collection__item-label {\r\n    font-family: 'Microsoft JhengHei','Avenir','Helvetica' !important;\r\n}\r\n</style>\r\n"]},media:void 0}))}),Mn,"data-v-17f102f4",false,undefined,!1,zn,void 0,void 0)}));
//# sourceMappingURL=w-tinymce-vue.umd.js.map
