/*!
 * w-tinymce-vue v1.0.3
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a["w-tinymce-vue"]=b())})(this,function(){'use strict';function a(a,b){var c=w?b.media||"default":a,d=y[c]||(y[c]={ids:new Set,styles:[]});if(!d.ids.has(a)){d.ids.add(a);var e=b.source;if(b.map&&(e+="\n/*# sourceURL="+b.map.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(b.map))))+" */"),d.element||(d.element=document.createElement("style"),d.element.type="text/css",b.media&&d.element.setAttribute("media",b.media),x.appendChild(d.element)),"styleSheet"in d.element)d.styles.push(e),d.element.styleSheet.cssText=d.styles.filter(Boolean).join("\n");else{var f=d.ids.size-1,g=document.createTextNode(e),h=d.element.childNodes;h[f]&&d.element.removeChild(h[f]),h.length?d.element.insertBefore(g,h[f]):d.element.appendChild(g)}}}tinymce.addI18n("zh_TW",{Redo:"\u91CD\u505A",Undo:"\u64A4\u92B7",Cut:"\u526A\u4E0B",Copy:"\u8907\u88FD",Paste:"\u8CBC\u4E0A","Select all":"\u5168\u9078","New document":"\u65B0\u6587\u4EF6",Ok:"\u78BA\u5B9A",Cancel:"\u53D6\u6D88","Visual aids":"\u5C0F\u5E6B\u624B",Bold:"\u7C97\u9AD4",Italic:"\u659C\u9AD4",Underline:"\u4E0B\u5283\u7DDA",Strikethrough:"\u522A\u9664\u7DDA",Superscript:"\u4E0A\u6A19",Subscript:"\u4E0B\u6A19","Clear formatting":"\u6E05\u9664\u683C\u5F0F","Align left":"\u5DE6\u908A\u5C0D\u9F4A","Align center":"\u4E2D\u9593\u5C0D\u9F4A","Align right":"\u53F3\u908A\u5C0D\u9F4A",Justify:"\u5DE6\u53F3\u5C0D\u9F4A","Bullet list":"\u9805\u76EE\u6E05\u55AE","Numbered list":"\u6578\u5B57\u6E05\u55AE","Decrease indent":"\u6E1B\u5C11\u7E2E\u6392","Increase indent":"\u589E\u52A0\u7E2E\u6392",Close:"\u95DC\u9589",Formats:"\u683C\u5F0F","Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.":"\u60A8\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u5B58\u53D6\u526A\u8CBC\u7C3F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5FEB\u901F\u9375 Ctrl + X/C/V \u4EE3\u66FF\u526A\u4E0B\u3001\u8907\u88FD\u8207\u8CBC\u4E0A\u3002",Headers:"\u6A19\u984C","Header 1":"\u6A19\u984C 1","Header 2":"\u6A19\u984C 2","Header 3":"\u6A19\u984C 3","Header 4":"\u6A19\u984C 4","Header 5":"\u6A19\u984C 5","Header 6":"\u6A19\u984C 6",Headings:"\u6A19\u984C","Heading 1":"\u6A19\u984C1","Heading 2":"\u6A19\u984C2","Heading 3":"\u6A19\u984C3","Heading 4":"\u6A19\u984C4","Heading 5":"\u6A19\u984C5","Heading 6":"\u6A19\u984C6",Preformatted:"\u9810\u5148\u683C\u5F0F\u5316\u7684",Div:"Div",Pre:"Pre",Code:"\u4EE3\u78BC",Paragraph:"\u6BB5\u843D",Blockquote:"\u5F15\u7528",Inline:"\u5167\u806F",Blocks:"\u57FA\u584A","Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.":"\u76EE\u524D\u5C07\u4EE5\u7D14\u6587\u5B57\u7684\u6A21\u5F0F\u8CBC\u4E0A\uFF0C\u60A8\u53EF\u4EE5\u518D\u9EDE\u9078\u4E00\u6B21\u53D6\u6D88\u3002",Fonts:"\u5B57\u578B","Font Sizes":"\u5B57\u578B\u5927\u5C0F",Class:"\u985E\u578B","Browse for an image":"\u5F9E\u5716\u7247\u4E2D\u700F\u89BD",OR:"\u6216","Drop an image here":"\u62D6\u66F3\u5716\u7247\u81F3\u6B64",Upload:"\u4E0A\u50B3",Block:"\u5340\u584A",Align:"\u5C0D\u9F4A",Default:"\u9810\u8A2D",Circle:"\u7A7A\u5FC3\u5713",Disc:"\u5BE6\u5FC3\u5713",Square:"\u6B63\u65B9\u5F62","Lower Alpha":"\u5C0F\u5BEB\u82F1\u6587\u5B57\u6BCD","Lower Greek":"\u5E0C\u81D8\u5B57\u6BCD","Lower Roman":"\u5C0F\u5BEB\u7F85\u99AC\u6578\u5B57","Upper Alpha":"\u5927\u5BEB\u82F1\u6587\u5B57\u6BCD","Upper Roman":"\u5927\u5BEB\u7F85\u99AC\u6578\u5B57","Anchor...":"\u9328\u9EDE...",Name:"\u540D\u7A31",Id:"Id","Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.":"Id\u61C9\u4EE5\u5B57\u6BCD\u958B\u982D\uFF0C\u5F8C\u9762\u63A5\u8457\u5B57\u6BCD\uFF0C\u6578\u5B57\uFF0C\u7834\u6298\u865F\uFF0C\u9EDE\u6578\uFF0C\u5192\u865F\u6216\u4E0B\u5283\u7DDA\u3002","You have unsaved changes are you sure you want to navigate away?":"\u7DE8\u8F2F\u5C1A\u672A\u88AB\u5132\u5B58\uFF0C\u4F60\u78BA\u5B9A\u8981\u96E2\u958B\uFF1F","Restore last draft":"\u8F09\u5165\u4E0A\u4E00\u6B21\u7DE8\u8F2F\u7684\u8349\u7A3F","Special characters...":"\u7279\u6B8A\u5B57\u5143...","Source code":"\u539F\u59CB\u78BC","Insert/Edit code sample":"\u63D2\u5165/\u7DE8\u8F2F \u7A0B\u5F0F\u78BC\u7BC4\u4F8B",Language:"\u8A9E\u8A00","Code sample...":"\u7A0B\u5F0F\u78BC\u7BC4\u4F8B...","Color Picker":"\u9078\u8272\u5668",R:"\u7D05",G:"\u7DA0",B:"\u85CD","Left to right":"\u5F9E\u5DE6\u5230\u53F3","Right to left":"\u5F9E\u53F3\u5230\u5DE6","Emoticons...":"\u8868\u60C5\u7B26\u865F\u2026","Metadata and Document Properties":"\u5F8C\u8A2D\u8CC7\u6599\u8207\u6587\u4EF6\u5C6C\u6027",Title:"\u6A19\u984C",Keywords:"\u95DC\u9375\u5B57",Description:"\u63CF\u8FF0",Robots:"\u6A5F\u5668\u4EBA",Author:"\u4F5C\u8005",Encoding:"\u7DE8\u78BC",Fullscreen:"\u5168\u87A2\u5E55",Action:"\u52D5\u4F5C",Shortcut:"\u5FEB\u901F\u9375",Help:"\u5E6B\u52A9",Address:"\u5730\u5740","Focus to menubar":"\u8DF3\u81F3\u9078\u55AE\u5217","Focus to toolbar":"\u8DF3\u81F3\u5DE5\u5177\u5217","Focus to element path":"\u8DF3\u81F3HTML\u5143\u7D20\u5217","Focus to contextual toolbar":"\u8DF3\u81F3\u5FEB\u6377\u9078\u55AE","Insert link (if link plugin activated)":"\u65B0\u589E\u6377\u5F91 (\u6377\u5F91\u5916\u639B\u555F\u7528\u6642)","Save (if save plugin activated)":"\u5132\u5B58 (\u5132\u5B58\u5916\u639B\u555F\u7528\u6642)","Find (if searchreplace plugin activated)":"\u5C0B\u627E (\u5C0B\u627E\u53D6\u4EE3\u5916\u639B\u555F\u7528\u6642)","Plugins installed ({0}):":"({0}) \u500B\u5916\u639B\u5DF2\u5B89\u88DD\uFF1A","Premium plugins:":"\u52A0\u503C\u5916\u639B\uFF1A","Learn more...":"\u4E86\u89E3\u66F4\u591A...","You are using {0}":"\u60A8\u6B63\u5728\u4F7F\u7528 {0}",Plugins:"\u5916\u639B","Handy Shortcuts":"\u5FEB\u901F\u9375","Horizontal line":"\u6C34\u5E73\u7DDA","Insert/edit image":"\u63D2\u5165/\u7DE8\u8F2F \u5716\u7247","Image description":"\u5716\u7247\u63CF\u8FF0",Source:"\u5716\u7247\u7DB2\u5740",Dimensions:"\u5C3A\u5BF8","Constrain proportions":"\u7B49\u6BD4\u4F8B\u7E2E\u653E",General:"\u4E00\u822C",Advanced:"\u9032\u968E",Style:"\u6A23\u5F0F","Vertical space":"\u9AD8\u5EA6","Horizontal space":"\u5BEC\u5EA6",Border:"\u908A\u6846","Insert image":"\u63D2\u5165\u5716\u7247","Image...":"\u5716\u7247...","Image list":"\u5716\u7247\u6E05\u55AE","Rotate counterclockwise":"\u9006\u6642\u91DD\u65CB\u8F49","Rotate clockwise":"\u9806\u6642\u91DD\u65CB\u8F49","Flip vertically":"\u5782\u76F4\u7FFB\u8F49","Flip horizontally":"\u6C34\u5E73\u7FFB\u8F49","Edit image":"\u7DE8\u8F2F\u5716\u7247","Image options":"\u5716\u7247\u9078\u9805","Zoom in":"\u653E\u5927","Zoom out":"\u7E2E\u5C0F",Crop:"\u88C1\u526A",Resize:"\u8ABF\u6574\u5927\u5C0F",Orientation:"\u65B9\u5411",Brightness:"\u4EAE\u5EA6",Sharpen:"\u92B3\u5316",Contrast:"\u5C0D\u6BD4","Color levels":"\u984F\u8272\u5C64\u6B21",Gamma:"\u4F3D\u99AC\u503C",Invert:"\u53CD\u8F49",Apply:"\u61C9\u7528",Back:"\u5F8C\u9000","Insert date/time":"\u63D2\u5165 \u65E5\u671F/\u6642\u9593","Date/time":"\u65E5\u671F/\u6642\u9593","Insert/Edit Link":"\u63D2\u5165/\u7DE8\u8F2F\u9023\u7D50","Insert/edit link":"\u63D2\u5165/\u7DE8\u8F2F\u9023\u7D50","Text to display":"\u986F\u793A\u6587\u5B57",Url:"\u7DB2\u5740","Open link in...":"\u958B\u555F\u9023\u7D50\u65BC...","Current window":"\u76EE\u524D\u8996\u7A97",None:"\u7121","New window":"\u53E6\u958B\u8996\u7A97","Remove link":"\u79FB\u9664\u9023\u7D50",Anchors:"\u52A0\u5165\u9328\u9EDE","Link...":"\u9023\u7D50...","Paste or type a link":"\u8CBC\u4E0A\u6216\u8F38\u5165\u9023\u7D50","The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?":"\u4F60\u6240\u586B\u5BEB\u7684URL\u70BA\u96FB\u5B50\u90F5\u4EF6\uFF0C\u9700\u8981\u52A0\u4E0Amailto:\u524D\u7DB4\u55CE\uFF1F","The URL you entered seems to be an external link. Do you want to add the required http:// prefix?":"\u4F60\u6240\u586B\u5BEB\u7684URL\u5C6C\u65BC\u5916\u90E8\u93C8\u63A5\uFF0C\u9700\u8981\u52A0\u4E0Ahttp://:\u524D\u7DB4\u55CE\uFF1F","Link list":"\u9023\u7D50\u6E05\u55AE","Insert video":"\u63D2\u5165\u5F71\u97F3","Insert/edit video":"\u63D2\u4EF6/\u7DE8\u8F2F \u5F71\u97F3","Insert/edit media":"\u63D2\u5165/\u7DE8\u8F2F \u5A92\u9AD4","Alternative source":"\u66FF\u4EE3\u5F71\u97F3","Alternative source URL":"\u66FF\u4EE3\u4F86\u6E90URL","Media poster (Image URL)":"\u5A92\u9AD4\u6D77\u5831\uFF08\u5F71\u50CFImage URL\uFF09","Paste your embed code below:":"\u8ACB\u5C07\u60A8\u7684\u5D4C\u5165\u5F0F\u7A0B\u5F0F\u78BC\u8CBC\u5728\u4E0B\u9762:",Embed:"\u5D4C\u5165\u78BC","Media...":"\u5A92\u9AD4...","Nonbreaking space":"\u4E0D\u5206\u884C\u7684\u7A7A\u683C","Page break":"\u5206\u9801","Paste as text":"\u4EE5\u7D14\u6587\u5B57\u8CBC\u4E0A",Preview:"\u9810\u89BD","Print...":"\u5217\u5370...",Save:"\u5132\u5B58",Find:"\u641C\u5C0B","Replace with":"\u66F4\u63DB",Replace:"\u66FF\u63DB","Replace all":"\u66FF\u63DB\u5168\u90E8",Previous:"\u4E0A\u4E00\u500B",Next:"\u4E0B\u4E00\u500B","Find and replace...":"\u5C0B\u627E\u53CA\u53D6\u4EE3...","Could not find the specified string.":"\u7121\u6CD5\u67E5\u8A62\u5230\u6B64\u7279\u5B9A\u5B57\u4E32","Match case":"\u76F8\u5339\u914D\u6848\u4EF6","Find whole words only":"\u50C5\u627E\u51FA\u5B8C\u6574\u5B57\u532F","Spell check":"\u62FC\u5BEB\u6AA2\u67E5",Ignore:"\u5FFD\u7565","Ignore all":"\u5FFD\u7565\u6240\u6709",Finish:"\u5B8C\u6210","Add to Dictionary":"\u52A0\u5165\u5B57\u5178\u4E2D","Insert table":"\u63D2\u5165\u8868\u683C","Table properties":"\u8868\u683C\u5C6C\u6027","Delete table":"\u522A\u9664\u8868\u683C",Cell:"\u5132\u5B58\u683C",Row:"\u5217",Column:"\u884C","Cell properties":"\u5132\u5B58\u683C\u5C6C\u6027","Merge cells":"\u5408\u4F75\u5132\u5B58\u683C","Split cell":"\u5206\u5272\u5132\u5B58\u683C","Insert row before":"\u63D2\u5165\u5217\u5728...\u4E4B\u524D","Insert row after":"\u63D2\u5165\u5217\u5728...\u4E4B\u5F8C","Delete row":"\u522A\u9664\u5217","Row properties":"\u5217\u5C6C\u6027","Cut row":"\u526A\u4E0B\u5217","Copy row":"\u8907\u88FD\u5217","Paste row before":"\u8CBC\u4E0A\u5217\u5728...\u4E4B\u524D","Paste row after":"\u8CBC\u4E0A\u5217\u5728...\u4E4B\u5F8C","Insert column before":"\u63D2\u5165\u6B04\u4F4D\u5728...\u4E4B\u524D","Insert column after":"\u63D2\u5165\u6B04\u4F4D\u5728...\u4E4B\u5F8C","Delete column":"\u522A\u9664\u884C",Cols:"\u6B04\u4F4D\u6BB5",Rows:"\u5217",Width:"\u5BEC\u5EA6",Height:"\u9AD8\u5EA6","Cell spacing":"\u5132\u5B58\u683C\u5F97\u9593\u8DDD","Cell padding":"\u5132\u5B58\u683C\u7684\u908A\u8DDD","Show caption":"\u986F\u793A\u6A19\u984C",Left:"\u5DE6\u908A",Center:"\u4E2D\u9593",Right:"\u53F3\u908A","Cell type":"\u5132\u5B58\u683C\u7684\u985E\u578B",Scope:"\u7BC4\u570D",Alignment:"\u5C0D\u9F4A","H Align":"\u6C34\u5E73\u4F4D\u7F6E","V Align":"\u5782\u76F4\u4F4D\u7F6E",Top:"\u7F6E\u9802",Middle:"\u7F6E\u4E2D",Bottom:"\u7F6E\u5E95","Header cell":"\u6A19\u982D\u5132\u5B58\u683C","Row group":"\u5217\u7FA4\u7D44","Column group":"\u6B04\u4F4D\u7FA4\u7D44","Row type":"\u884C\u7684\u985E\u578B",Header:"\u6A19\u982D",Body:"\u4E3B\u9AD4",Footer:"\u9801\u5C3E","Border color":"\u908A\u6846\u984F\u8272","Insert template...":"\u63D2\u5165\u6A23\u7248...",Templates:"\u6A23\u7248",Template:"\u6A23\u677F","Text color":"\u6587\u5B57\u984F\u8272","Background color":"\u80CC\u666F\u984F\u8272","Custom...":"\u81EA\u8A02","Custom color":"\u81EA\u8A02\u984F\u8272","No color":"No color","Remove color":"\u79FB\u9664\u984F\u8272","Table of Contents":"\u76EE\u9304","Show blocks":"\u986F\u793A\u5340\u584A\u8CC7\u8A0A","Show invisible characters":"\u986F\u793A\u96B1\u85CF\u5B57\u5143","Word count":"\u8A08\u7B97\u5B57\u6578","Words: {0}":"\u5B57\u6578\uFF1A{0}","{0} words":"{0} \u5B57\u5143",File:"\u6A94\u6848",Edit:"\u7DE8\u8F2F",Insert:"\u63D2\u5165",View:"\u6AA2\u8996",Format:"\u683C\u5F0F",Table:"\u8868\u683C",Tools:"\u5DE5\u5177","Powered by {0}":"\u7531 {0} \u63D0\u4F9B","Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help":"\u8C50\u5BCC\u7684\u6587\u672C\u5340\u57DF\u3002\u6309ALT-F9\u524D\u5F80\u4E3B\u9078\u55AE\u3002\u6309ALT-F10\u547C\u53EB\u5DE5\u5177\u6B04\u3002\u6309ALT-0\u5C0B\u6C42\u5E6B\u52A9","Image title":"\u5716\u7247\u6A19\u984C","Border width":"\u6846\u7DDA\u5BEC\u5EA6","Border style":"\u6846\u7DDA\u6A23\u5F0F",Error:"\u932F\u8AA4",Warn:"\u8B66\u544A",Valid:"\u6709\u6548","To open the popup, press Shift+Enter":"\u8981\u958B\u555F\u5F48\u51FA\u8996\u7A97\uFF0C\u8ACB\u6309Shift+Enter","Rich Text Area. Press ALT-0 for help.":"\u5BCC\u6587\u672C\u5340\u57DF\u3002\u8ACB\u6309ALT-0\u5C0B\u6C42\u5354\u52A9\u3002","System Font":"\u7CFB\u7D71\u5B57\u578B","Failed to upload image: {0}":"\u7121\u6CD5\u4E0A\u50B3\u5F71\u50CF\uFF1A{0}","Failed to load plugin: {0} from url {1}":"\u7121\u6CD5\u4E0A\u50B3\u63D2\u4EF6\uFF1A{0}\u81EAurl{1}","Failed to load plugin url: {0}":"\u7121\u6CD5\u4E0A\u50B3\u63D2\u4EF6\uFF1A{0}","Failed to initialize plugin: {0}":"\u7121\u6CD5\u555F\u52D5\u63D2\u4EF6\uFF1A{0}",example:"\u7BC4\u4F8B",Search:"\u641C\u7D22",All:"\u5168\u90E8",Currency:"\u8CA8\u5E63",Text:"\u6587\u672C",Quotations:"\u5F15\u7528",Mathematical:"\u6578\u5B78","Extended Latin":"\u62C9\u4E01\u5B57\u6BCD\u64F4\u5145",Symbols:"\u7B26\u865F",Arrows:"\u7BAD\u982D","User Defined":"\u4F7F\u7528\u8005\u5DF2\u5B9A\u7FA9","dollar sign":"\u7F8E\u5143\u7B26\u865F","currency sign":"\u8CA8\u5E63\u7B26\u865F","euro-currency sign":"\u6B50\u5143\u7B26\u865F","colon sign":"\u79D1\u6717\u7B26\u865F","cruzeiro sign":"\u514B\u9B6F\u8CFD\u7F85\u7B26\u865F","french franc sign":"\u6CD5\u6717\u7B26\u865F","lira sign":"\u91CC\u62C9\u7B26\u865F","mill sign":"\u6587\u7B26\u865F","naira sign":"\u5948\u62C9\u7B26\u865F","peseta sign":"\u6BD4\u585E\u5854\u7B26\u865F","rupee sign":"\u76E7\u6BD4\u7B26\u865F","won sign":"\u97D3\u571C\u7B26\u865F","new sheqel sign":"\u65B0\u8B1D\u514B\u723E\u7B26\u865F","dong sign":"\u8D8A\u5357\u76FE\u7B26\u865F","kip sign":"\u8001\u64BE\u5E63\u7B26\u865F","tugrik sign":"\u8499\u53E4\u5E63\u7B26\u865F","drachma sign":"\u5FB7\u514B\u62C9\u99AC\u7B26\u865F","german penny symbol":"\u5FB7\u570B\u5206\u7B26\u865F","peso sign":"\u62AB\u7D22\u7B26\u865F","guarani sign":"\u5DF4\u62C9\u572D\u5E63\u7B26\u865F","austral sign":"\u963F\u6839\u5EF7\u5E63\u7B26\u865F","hryvnia sign":"\u70CF\u514B\u862D\u5E63\u7B26\u865F","cedi sign":"\u8FE6\u7D0D\u5E63\u7B26\u865F","livre tournois sign":"\u91CC\u5F17\u723E\u7B26\u865F","spesmilo sign":"\u570B\u969B\u5E63\u7B26\u865F","tenge sign":"\u54C8\u85A9\u514B\u5E63\u7B26\u865F","indian rupee sign":"\u5370\u5EA6\u76E7\u6BD4\u7B26\u865F","turkish lira sign":"\u571F\u8033\u5176\u91CC\u62C9\u7B26\u865F","nordic mark sign":"\u5317\u6B50\u99AC\u514B\u7B26\u865F","manat sign":"\u4E9E\u585E\u62DC\u7136\u5E63\u7B26\u865F","ruble sign":"\u76E7\u5E03\u7B26\u865F","yen character":"\u65E5\u5713\u7B26\u865F","yuan character":"\u4EBA\u6C11\u5E63\u7B26\u865F","yuan character, in hong kong and taiwan":"\u6E2F\u5143\u8207\u53F0\u5E63\u7B26\u865F","yen/yuan character variant one":"\u65E5\u5713/\u4EBA\u6C11\u5E63\u7B26\u865F\u8B8A\u5316\u578B","Loading emoticons...":"\u8F09\u5165\u8868\u60C5\u7B26\u865F\u2026","Could not load emoticons":"\u7121\u6CD5\u8F09\u5165\u8868\u60C5\u7B26\u865F",People:"\u4EBA","Animals and Nature":"\u52D5\u7269\u8207\u81EA\u7136","Food and Drink":"\u98F2\u98DF",Activity:"\u6D3B\u52D5","Travel and Places":"\u65C5\u884C\u8207\u5730\u9EDE",Objects:"\u7269\u4EF6",Flags:"\u65D7\u6A19",Characters:"\u5B57\u5143","Characters (no spaces)":"\u5B57\u5143\uFF08\u7121\u7A7A\u683C\uFF09","Error: Form submit field collision.":"\u932F\u8AA4\uFF1A\u8868\u683C\u905E\u4EA4\u6B04\u4F4D\u885D\u7A81\u3002","Error: No form element found.":"\u932F\u8AA4\uFF1A\u627E\u4E0D\u5230\u8868\u683C\u5143\u7D20\u3002",Update:"\u66F4\u65B0","Color swatch":"\u8272\u5F69\u6A23\u672C",Turquoise:"\u571F\u8033\u5176\u85CD",Green:"\u7DA0\u8272",Blue:"\u85CD\u8272",Purple:"\u7D2B\u8272","Navy Blue":"\u6DF1\u85CD\u8272","Dark Turquoise":"\u6DF1\u571F\u8033\u5176\u85CD","Dark Green":"\u6DF1\u7DA0\u8272","Medium Blue":"\u4E2D\u85CD\u8272","Medium Purple":"\u4E2D\u7D2B\u8272","Midnight Blue":"\u9ED1\u85CD\u8272",Yellow:"\u9EC3\u8272",Orange:"\u6A59\u8272",Red:"\u7D05\u8272","Light Gray":"\u6DFA\u7070\u8272",Gray:"\u7070\u8272","Dark Yellow":"\u6DF1\u9EC3\u8272","Dark Orange":"\u6DF1\u6A59\u8272","Dark Red":"\u6697\u7D05\u8272","Medium Gray":"\u4E2D\u7070\u8272","Dark Gray":"\u6DF1\u7070\u8272",Black:"\u9ED1\u8272",White:"\u767D\u8272","Switch to or from fullscreen mode":"\u8F49\u63DB\u81EA/\u81F3\u5168\u87A2\u5E55\u6A21\u5F0F","Open help dialog":"\u958B\u555F\u5354\u52A9\u5C0D\u8A71",history:"\u6B77\u53F2",styles:"\u6A23\u5F0F",formatting:"\u683C\u5F0F",alignment:"\u5C0D\u9F4A",indentation:"\u7E2E\u6392","permanent pen":"\u6C38\u4E45\u6027\u7B46",comments:"\u8A3B\u89E3",Anchor:"\u52A0\u5165\u9328\u9EDE","Special character":"\u7279\u6B8A\u5B57\u5143","Code sample":"\u7A0B\u5F0F\u78BC\u7BC4\u4F8B",Color:"\u984F\u8272",Emoticons:"\u8868\u60C5","Document properties":"\u6587\u4EF6\u7684\u5C6C\u6027",Image:"\u5716\u7247","Insert link":"\u63D2\u5165\u9023\u7D50",Target:"\u958B\u555F\u65B9\u5F0F",Link:"\u9023\u7D50",Poster:"\u9810\u89BD\u5716\u7247",Media:"\u5A92\u9AD4",Print:"\u5217\u5370",Prev:"\u4E0A\u4E00\u500B","Find and replace":"\u5C0B\u627E\u53CA\u53D6\u4EE3","Whole words":"\u6574\u500B\u55AE\u5B57",Spellcheck:"\u62FC\u5B57\u6AA2\u67E5",Caption:"\u8868\u683C\u6A19\u984C","Insert template":"\u63D2\u5165\u6A23\u7248"});var b=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],c=function(a){return-1!==b.indexOf(a)},d=function(a,b,d){Object.keys(b).filter(c).forEach(function(c){var f=b[c];"function"==typeof f&&("onInit"===c?f(a,d):d.on(c.substring(2),function(a){return f(a,d)}))})},e=function(a,b){var c,d=a.$props.modelEvents?a.$props.modelEvents:null,e=Array.isArray(d)?d.join(" "):d;a.$watch("value",function(a,d){b&&"string"==typeof a&&a!==c&&a!==d&&(b.setContent(a),c=a)}),b.on(e?e:"change keyup undo redo",function(){c=b.getContent(),a.$emit("input",c)})},f=function(a,b,c){var f=b.$props.value?b.$props.value:"",g=b.$props.initialValue?b.$props.initialValue:"";c.setContent(f||g),b.$listeners.input&&e(b,c),d(a,b.$listeners,c)},g=0,h=function(a){var b=Math.floor,c=Date.now(),d=b(1e9*Math.random());return g++,a+"_"+d+g+(c+"")},i=function(a){return null!==a&&"textarea"===a.tagName.toLowerCase()},j=function(a){return"undefined"==typeof a||""===a?[]:Array.isArray(a)?a:a.split(" ")},k=function(a,b){return j(a).concat(j(b))},l=function(a,b,c,d){var e=b.createElement("script");e.type="application/javascript",e.id=a,e.addEventListener("load",d),e.src=c,b.head&&b.head.appendChild(e)},m=function(a,b,c,d){a.scriptLoaded?d():(a.listeners.push(d),!b.getElementById(a.scriptId)&&l(a.scriptId,b,c,function(){a.listeners.forEach(function(a){return a()}),a.scriptLoaded=!0}))},n=function(){return"undefined"==typeof window?global:window},o=function(){var a=n();return a&&a.tinymce?a.tinymce:null},p={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean},q=function(){return q=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a},q.apply(this,arguments)},r=function(){return{listeners:[],scriptId:h("tiny-script"),scriptLoaded:!1}}(),s=function(a,b,c){return a(c?c:"div",{attrs:{id:b}})},t=function(a,b){return a("textarea",{attrs:{id:b},style:{visibility:"hidden"}})},u=function(a){return function(){var b=q({},a.$props.init,{readonly:a.$props.disabled,selector:"#"+a.elementId,plugins:k(a.$props.init&&a.$props.init.plugins,a.$props.plugins),toolbar:a.$props.toolbar||a.$props.init&&a.$props.init.toolbar,inline:a.inlineEditor,setup:function(b){a.editor=b,b.on("init",function(c){return f(c,a,b)}),a.$props.init&&"function"==typeof a.$props.init.setup&&a.$props.init.setup(b)}});i(a.element)&&(a.element.style.visibility=""),o().init(b)}},v={components:{"tinymce-vue":{props:p,created:function(){this.elementId=this.$props.id||h("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==o())u(this)();else if(this.element&&this.element.ownerDocument){var a=this.element.ownerDocument,b=this.$props.cloudChannel?this.$props.cloudChannel:"5",c=this.$props.apiKey?this.$props.apiKey:"no-api-key";m(r,a,"https://cdn.tiny.cloud/1/"+c+"/tinymce/"+b+"/tinymce.min.js",u(this))}},beforeDestroy:function(){null!==o()&&o().remove(this.editor)},render:function(a){return this.inlineEditor?s(a,this.elementId,this.$props.tagName):t(a,this.elementId)}}},props:{value:{type:String},settings:{type:Object,default:{language:"zh_TW",menubar:"edit insert format table",plugins:"paste imagetools link table lists advlist hr charmap",toolbar:"undo redo | fontsizeselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",fontsize_formats:"8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt",invalid_elements:"wbr",paste_data_images:!0,branding:!1,elementpath:!1,setup:function(a){a.on("init",function(){var b=a.getBody().style;b.fontSize="11pt",b.fontFamily="Microsoft JhengHei"})},height:250}},editable:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{},methods:{}},w="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),x=document.head||document.getElementsByTagName("head")[0],y={};var z=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticStyle:{display:"inline-block"}},[c("tinymce-vue",{attrs:{init:a.settings,value:a.value,disabled:!a.editable},on:{input:function(b){a.$emit("input",b)}}})],1)};z._withStripped=!0;var A=function(a,b,c,d,e,f,g,h,i,j){"boolean"!=typeof g&&(i=h,h=g,g=!1);var k="function"==typeof c?c.options:c;a&&a.render&&(k.render=a.render,k.staticRenderFns=a.staticRenderFns,k._compiled=!0,e&&(k.functional=!0)),d&&(k._scopeId=d);var l;if(f?(l=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),b&&b.call(this,i(a)),a&&a._registeredComponents&&a._registeredComponents.add(f)},k._ssrRegister=l):b&&(l=g?function(){b.call(this,j(this.$root.$options.shadowRoot))}:function(a){b.call(this,h(a))}),l)if(k.functional){var m=k.render;k.render=function(a,b){return l.call(b),m(a,b)}}else{var n=k.beforeCreate;k.beforeCreate=n?[].concat(n,l):[l]}return c}({render:z,staticRenderFns:[]},function(a){a&&a("data-v-1a682afe_0",{source:"\n[data-v-1a682afe] div, button[data-v-1a682afe], span[data-v-1a682afe], p[data-v-1a682afe], a[data-v-1a682afe], select[data-v-1a682afe], option[data-v-1a682afe] {\r\n    font: inherit;\r\n    font-family: inherit;\n}\r\n",map:{version:3,sources:["D:\\\u958B\u6E90-Javascript-w-tinymce-vue\\w-tinymce-vue\\src\\WTinymceVue.vue"],names:[],mappings:";AA8EA;IACA,aAAA;IACA,oBAAA;AACA",file:"WTinymceVue.vue",sourcesContent:["<template>\r\n    <div style=\"display:inline-block;\">\r\n\r\n        <tinymce-vue\r\n            :init=\"settings\"\r\n            :value=\"value\"\r\n            :disabled=\"!editable\"\r\n            @input=\"function(v){$emit('input',v)}\"\r\n        ></tinymce-vue>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport './zh_TW.js'\r\nimport Editor from '@tinymce/tinymce-vue'\r\n\r\nlet def_settings = {\r\n    language: 'zh_TW',\r\n    menubar: 'edit insert format table',\r\n    plugins: 'paste imagetools link table lists advlist hr charmap',\r\n    toolbar: 'undo redo | fontsizeselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',\r\n    fontsize_formats: '8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt',\r\n    invalid_elements: 'wbr', //\u7981\u6B62\u4F7F\u7528\u9069\u5408\u63DB\u884C\u8655\u5143\u7D20wbr\r\n    paste_data_images: true,\r\n    branding: false, //\u79FB\u9664logo\r\n    elementpath: false, //\u79FB\u9664\u9078\u64C7\u5143\u7D20\u8DEF\u5F91\r\n    //resize: false, //\u7981\u6B62\u6539\u8B8A\u8996\u7A97\u5927\u5C0F\r\n    setup: function (ed) {\r\n        ed.on('init', function (e) {\r\n\r\n            //style\r\n            let s = ed.getBody().style\r\n            s.fontSize = '11pt'\r\n            s.fontFamily = 'Microsoft JhengHei'\r\n\r\n        })\r\n    },\r\n    height: 250,\r\n}\r\n\r\n/**\r\n * @vue-prop {String} value \u8F38\u5165\u5BCC\u6587\u672C\u5B57\u4E32\r\n * @vue-prop {String} settings \u8F38\u5165tinymce\u8A2D\u5B9A\u7269\u4EF6\uFF0C\u9810\u8A2D\u503C\u8A73\u898B\u539F\u59CB\u78BC\r\n * @vue-prop {String} [editable=true] \u8F38\u5165\u662F\u5426\u5141\u8A31\u7DE8\u8F2F\uFF0C\u9810\u8A2Dtrue\r\n */\r\nexport default {\r\n    components: {\r\n        'tinymce-vue': Editor\r\n    },\r\n    props: {\r\n        value: {\r\n            type: String,\r\n        },\r\n        settings: {\r\n            type: Object,\r\n            default: def_settings\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n::v-deep div, button, span, p, a, select, option {\r\n    font: inherit;\r\n    font-family: inherit;\r\n}\r\n</style>\r\n"]},media:void 0})},v,"data-v-1a682afe",!1,void 0,function(){return function(b,c){return a(b,c)}},void 0);return A});
//# sourceMappingURL=w-tinymce-vue.umd.js.map