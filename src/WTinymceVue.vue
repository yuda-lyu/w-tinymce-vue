<template>
    <div style="display:inline-block;" :changeHeight="changeHeight">

        <tinymce-vue
            ref="edr"
            :init="useSettings"
            :value="value"
            :disabled="!editable"
            @input="function(v){$emit('input',v)}"
            @onInit="onInit"
        ></tinymce-vue>

    </div>
</template>

<script>
import get from 'lodash-es/get'
import isElement from 'lodash-es/isElement'
import Editor from '@tinymce/tinymce-vue' //支援vue2是3.2.6, 支援vue3是4.x
import './zh_TW.js'


let def_settings = {
    language: 'zh_TW',
    menubar: 'edit insert format table',
    plugins: 'paste imagetools link table lists advlist hr charmap', //autoresize
    toolbar: 'undo redo | fontsizeselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
    fontsize_formats: '8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt',
    invalid_elements: 'wbr', //禁止使用適合換行處元素wbr
    paste_data_images: true,
    branding: false, //移除logo
    elementpath: false, //移除選擇元素路徑
    resize: false, //禁止改變視窗大小
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

/**
 * @vue-prop {String} [value=''] 輸入富文本字串，預設為''
 * @vue-prop {Object} [settings={}] 輸入quill設定物件，預設值詳見原始碼
 * @vue-prop {Number} [height=250] 輸入高度數字，單位為px，預設為250
 * @vue-prop {Boolean} [editable=true] 輸入是否允許編輯，預設true
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
    computed: {

        useSettings: function() {
            //console.log('computed useSettings')

            let vo = this

            let st = {
                ...def_settings,
                ...vo.settings,
            }
            // console.log('st', st)

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

                //isIE11
                let eleIE11 = vo.$el.querySelector('.tox-platform-ie')
                let isIE11 = isElement(eleIE11)

                //update height
                ele.style.height = vo.height + 'px'
                //於IE11未設定min-height會無法順利展開, 得一併設定
                if (isIE11) {
                    ele.style.minHeight = ele.style.height
                    // ele.style.maxHeight = ele.style.height
                }

                //IE11時選單下方的分隔線會消失, 得強制給予
                if (isIE11) {
                    let eleToolbar = vo.$el.querySelector('.tox-toolbar-overlord')
                    if (eleToolbar) {
                        eleToolbar.style.borderBottom = '1px solid #ccc'
                    }
                }

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
