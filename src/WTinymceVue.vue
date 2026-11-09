<template>
    <div style="display:inline-block;" :changeHeight="changeHeight">

        <tinymce-vue
            ref="edr"
            :init="useSettings"
            :value="value"
            @input="function(v){$emit('input',v)}"
            @onInit="onInit"
        ></tinymce-vue>

    </div>
</template>

<script>
import get from 'lodash-es/get.js'
import Editor from '@tinymce/tinymce-vue' //支援vue2是3.2.6, 支援vue3是4.x
import './zh_TW.js'


let def_settings = {
    language: 'zh_TW',
    menubar: 'edit insert format table',
    plugins: 'link table lists advlist charmap', //autoresize, TinyMCE 6起paste與hr已併入核心, imagetools已移除
    toolbar: 'undo redo | fontsize | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
    font_size_formats: '8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt',
    invalid_elements: 'wbr', //禁止使用適合換行處元素wbr
    paste_data_images: true,
    branding: false, //移除logo
    promotion: false, //移除選單列右側之升級推廣連結(TinyMCE 6起預設顯示)
    elementpath: false, //移除選擇元素路徑
    resize: false, //禁止改變視窗大小
    convert_unsafe_embeds: true, //把object與embed轉為img,video,audio,iframe(GHSA-5359, TinyMCE 7起預設為true)
    setup: function (ed) {
        ed.on('init', function (e) {

            //style
            let s = ed.getBody().style
            s.fontSize = '11pt'
            s.fontFamily = `'Microsoft JhengHei','Avenir','Helvetica'`

        })
    },
    height: '100%',
}


//自HTML字串移除data-mce-href, data-mce-src, data-mce-style三個屬性(含單雙引號, 無引號, 無值, 大小寫, 空白換行之寫法)
//移除一輪後可能因相鄰屬性之分隔字元被吃掉而露出另一個, 故重複至不再變動
let reDataMce = /(^|[\s"'/])data-mce-(?:href|src|style)(?=[\s=/>]|$)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*))?/gi
function removeDataMce(html) {
    let s = html
    let prev = ''
    while (s !== prev) {
        prev = s
        s = s.replace(reDataMce, '$1')
    }
    return s
}


//於編輯器註冊過濾, 緩解TinyMCE 6.8.6仍有之公告(6.x不再修補)
//1. GHSA-v98h: 偽造之mce:protected註解會於輸出時被還原為標記, 故於parser移除該註解節點
//2. GHSA-q742: 偽造之data-mce-href, data-mce-src, data-mce-style會於序列化時覆蓋href, src, style, 故於parser移除該三屬性
//   貼上時核心之PastePreProcess處理(先於本元件註冊者)會先把data-mce-style之值升為style, parser過濾來不及移除, 故另以prepend方式於最先處理, 自貼上之原始字串移除該三屬性
//editor.parser於setup時尚未建立, parser過濾須於PreInit事件內註冊; 過濾對經parser解析之內容皆生效(setContent, insertContent, mceInsertClipboardContent, 貼上)
//副作用: 使用端若自行啟用protect選項, 其以mce:protected註解保護之內容亦會被移除; 內容文字若含data-mce-href等字樣之屬性寫法, 於貼上時亦會被移除
function installSafeFilters(ed) {

    //貼上之原始字串
    ed.on('PastePreProcess', function (e) {
        if (typeof e.content === 'string') {
            e.content = removeDataMce(e.content)
        }
    }, true)

    ed.on('PreInit', function () {

        //GHSA-v98h
        ed.parser.addNodeFilter('#comment', function (nodes) {
            nodes.forEach(function (n) {
                if (/^\s*mce:protected/i.test(n.value)) {
                    n.remove()
                }
            })
        })

        //GHSA-q742
        ed.parser.addAttributeFilter('data-mce-href,data-mce-src,data-mce-style', function (nodes, name) {
            nodes.forEach(function (n) {
                n.attr(name, null)
            })
        })

    })
}


/**
 * @vue-prop {String} [value=''] 輸入富文本字串，預設為''
 * @vue-prop {Object} [settings={}] 輸入quill設定物件，預設值詳見原始碼
 * @vue-prop {Number} [height=250] 輸入高度數字，單位為px，預設為250
 * @vue-prop {Boolean} [editable=true] 輸入是否允許編輯，預設true
 * @vue-prop {Boolean} [safeFilters=true] 輸入是否於parser註冊公告緩解過濾(移除mce:protected註解與data-mce-href,data-mce-src,data-mce-style屬性)，預設true，僅於編輯器初始化時讀取
 */
export default {
    components: {
        'tinymce-vue': Editor,
    },
    props: {
        value: {
            type: String,
            default: '',
        },
        settings: {
            type: Object,
            default: () => {},
        },
        height: {
            type: Number,
            default: 250,
        },
        editable: {
            type: Boolean,
            default: true,
        },
        safeFilters: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
        }
    },
    // mounted: function() {
    //     //console.log('mounted')

    //     let vo = this

    //     //強制修改選單字型
    //     function modifyFontFamily(q) {
    //         let elems = document.querySelectorAll(q)
    //         console.log(elems)
    //         let index = 0; let length = elems.length
    //         for (; index < length; index++) {
    //             elems[index].style.fontFamily = 'Microsoft JhengHei'
    //         }
    //     }
    //     //因tinymce選單是啟動後插入, 無法被css樣式穿透修改, 故改用js延遲修改
    //     setTimeout(function() {
    //         modifyFontFamily('div,button,span,p,a')
    //     }, 500)

    // },
    watch: {

        editable: function() {
            //console.log('watch editable')

            let vo = this

            //updateEditable
            vo.updateEditable()

        },

    },
    computed: {

        useSettings: function() {
            //console.log('computed useSettings')

            let vo = this

            let st = {
                ...def_settings,
                ...vo.settings,
            }
            // console.log('st', st)

            //使用端自訂之setup會取代預設setup, 故包一層, 確保公告緩解之過濾先註冊, 再執行(使用端或預設之)setup
            let setupUse = st.setup
            st.setup = function (ed) {
                if (vo.safeFilters) {
                    installSafeFilters(ed)
                }
                if (typeof setupUse === 'function') {
                    setupUse(ed)
                }
            }

            return st
        },

        changeHeight: function() {
            //console.log('computed changeHeight')

            let vo = this

            //height for trigger
            let height = vo.height
            vo.__heightTemp__ = height

            //updateHeight
            vo.updateHeight()

            return ''
        },

    },
    methods: {

        onInit: function() {
            //console.log('methods onInit')

            let vo = this

            //updateHeight
            vo.updateHeight()

            //updateEditable
            vo.updateEditable()

        },

        updateEditable: function() {
            //console.log('methods updateEditable')

            let vo = this

            //editor
            let editor = vo.getEditor()

            //未初始化完成時不處理, 於onInit再套用
            if (!editor || !editor.initialized) {
                return
            }

            //TinyMCE 6之editor已無setMode, 故不把editable交給@tinymce/tinymce-vue之disabled(其切換時呼叫setMode), 改由本元件以mode.set切換唯讀
            editor.mode.set(vo.editable ? 'design' : 'readonly')

        },

        getEditor: function() {
            //console.log('methods getEditor')

            let vo = this

            if (vo.$refs.edr) {
                return vo.$refs.edr.editor
            }
            return null
        },

        remove: function(ele) {
            //console.log('methods remove', ele)
            ele.parentNode.removeChild(ele)
        },

        updateHeight: function() {
            //console.log('methods updateHeight')

            let vo = this

            vo.$nextTick(() => {

                //editor
                let editor = vo.getEditor()

                //ele
                let frame = get(editor, 'iframeElement') //可編輯區是位於iframe內
                let ele = get(frame, 'parentNode.parentNode') //把height設定至兩層父層的高度才能響應調整

                //check
                if (!vo.$el || !editor || !ele) {
                    return
                }

                //update height
                ele.style.height = vo.height + 'px'

                //移除logo後的空白區域
                let sb = vo.$el.querySelector('.tox-statusbar')
                if (sb) {
                    vo.remove(sb)
                }

            })

        },

    },
}
</script>

<style scoped>
/* 組件內選單初始文字用樣式穿透覆蓋 */
::v-deep div {
    font-family: 'Microsoft JhengHei','Avenir','Helvetica';
}
::v-deep button {
    font-family: 'Microsoft JhengHei','Avenir','Helvetica';
}
::v-deep span {
    font-family: 'Microsoft JhengHei','Avenir','Helvetica';
}
</style>
<style>
/* 組件彈出選單用全域樣式覆蓋, 會影響到其他直接使用tinymce的地方 */
.tox-collection__item-label {
    font-family: 'Microsoft JhengHei','Avenir','Helvetica' !important;
}
</style>
