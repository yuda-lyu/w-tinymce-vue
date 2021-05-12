# w-tinymce-vue
A wrapper for @tinymce/tinymce-vue.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![language](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://github.com/vuejs/vue) 
[![npm version](http://img.shields.io/npm/v/w-tinymce-vue.svg?style=flat)](https://npmjs.org/package/w-tinymce-vue) 
[![Build Status](https://travis-ci.org/yuda-lyu/w-tinymce-vue.svg?branch=master)](https://travis-ci.org/yuda-lyu/w-tinymce-vue) [![license](https://img.shields.io/npm/l/w-tinymce-vue.svg?style=flat)](https://npmjs.org/package/w-tinymce-vue) 
[![gzip file size](http://img.badgesize.io/yuda-lyu/w-tinymce-vue/master/dist/w-tinymce-vue.umd.js.svg?compression=gzip)](https://github.com/yuda-lyu/w-tinymce-vue)
[![npm download](https://img.shields.io/npm/dt/w-tinymce-vue.svg)](https://npmjs.org/package/w-tinymce-vue) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-tinymce-vue.svg)](https://www.jsdelivr.com/package/npm/w-tinymce-vue)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-tinymce-vue/module-WTinymceVue.html).

## Example
To view some examples for more understanding, visit examples:
> **default:** [ex-default.html](https://yuda-lyu.github.io/w-tinymce-vue/examples/ex-default.html) [[source code](https://github.com/yuda-lyu/w-tinymce-vue/blob/master/docs/examples/ex-default.html)]

## Installation
### Using npm(ES6 module):
> **Note:** w-tinymce-vue is mainly dependent on `tinymce`, `@tinymce/tinymce-vue` and `vue`.
```alias
npm i w-tinymce-vue
```
By import:
```alias
<w-tinymce-vue 
    v-model="..."
></w-tinymce-vue>

import WTinymceVue from 'w-tinymce-vue'

Vue.component('w-tinymce-vue', WTinymceVue)
```

### In a browser(UMD module):
> **Note:** umd file includes with `@tinymce/tinymce-vue`, by using tree-shaking for dead-code elimination

[Necessary] Add script for tinymce.
```alias
<script src="https://cdn.jsdelivr.net/npm/tinymce/tinymce.min.js"></script>
```
[Necessary] Add script for vue.
```alias
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.min.js"></script>
```
[Necessary] Add script for w-tinymce-vue.
```alias
<script src="https://cdn.jsdelivr.net/npm/w-tinymce-vue@1.0.30/dist/w-tinymce-vue.umd.js"></script>
```
Directly use:
```alias
<w-tinymce-vue 
    v-model="..."
></w-tinymce-vue>

Vue.component('w-tinymce-vue', window['w-tinymce-vue'])

new Vue({
    el: '#app',
    data: {
        content: 'abc中文123'
    }
})
```