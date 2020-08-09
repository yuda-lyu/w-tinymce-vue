<template>
    <div style="display:inline-block;" :changeHeight="changeHeight">

        <tinymce-vue
            ref="edr"
            :init="settings"
            :value="value"
            :disabled="!editable"
            @input="function(v){$emit('input',v)}"
            @onInit="onInit"
        ></tinymce-vue>

    </div>
</template>

<script>
import get from 'lodash/get'
import Editor from '@tinymce/tinymce-vue'
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
 * @vue-prop {String} value 輸入富文本字串
 * @vue-prop {String} settings 輸入tinymce設定物件，預設值詳見原始碼
 * @vue-prop {String} [editable=true] 輸入是否允許編輯，預設true
 */
export default {
    components: {
        'tinymce-vue': Editor
    },
    props: {
        value: {
            type: String,
        },
        settings: {
            type: Object,
            default: function() {
                return def_settings
            }
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
    mounted: function() {
        //console.log('mounted')

        let vo = this

        // //強制修改選單字型
        // function modifyFontFamily(q) {
        //     let elems = document.querySelectorAll(q)
        //     console.log(elems)
        //     let index = 0; let length = elems.length
        //     for (; index < length; index++) {
        //         elems[index].style.fontFamily = 'Microsoft JhengHei'
        //     }
        // }
        // //因tinymce選單是啟動後插入, 無法被css樣式穿透修改, 故改用js延遲修改
        // setTimeout(function() {
        //     modifyFontFamily('div,button,span,p,a')
        // }, 500)

    },
    computed: {

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

        updateHeight: function() {
            //console.log('methods updateHeight')

            let vo = this

            vo.$nextTick(() => {

                //editor
                let editor = vo.getEditor()

                //ele
                let frame = get(editor, 'iframeElement') //可編輯區是位於iframe內
                let ele = get(frame, 'parentNode.parentNode') //把height設定至兩層父層的高度才能響應調整

                //update height
                if (editor && ele) {
                    ele.style.height = vo.height + 'px'
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
