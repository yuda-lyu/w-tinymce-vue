<template>
    <div style="display:inline-block;">

        <tinymce-vue
            :init="settings"
            :value="value"
            :disabled="!editable"
            @input="function(v){$emit('input',v)}"
        ></tinymce-vue>

    </div>
</template>

<script>
import './zh_TW.js'
import Editor from '@tinymce/tinymce-vue'

let def_settings = {
    language: 'zh_TW',
    menubar: 'edit insert format table',
    plugins: 'paste imagetools link table lists advlist hr charmap',
    toolbar: 'undo redo | fontsizeselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
    fontsize_formats: '8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt',
    invalid_elements: 'wbr', //禁止使用適合換行處元素wbr
    paste_data_images: true,
    branding: false, //移除logo
    elementpath: false, //移除選擇元素路徑
    //resize: false, //禁止改變視窗大小
    setup: function (ed) {
        ed.on('init', function (e) {

            //style
            let s = ed.getBody().style
            s.fontSize = '11pt'
            s.fontFamily = 'Microsoft JhengHei'

        })
    },
    height: 250,
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
    },
    computed: {
    },
    methods: {
    },
}
</script>

<style scoped>
::v-deep div, button, span, p, a, select, option {
    font: inherit;
    font-family: inherit;
}
</style>
