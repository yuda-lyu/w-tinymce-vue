# w-tinymce-vue
A wrapper for @tinymce/tinymce-vue.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-tinymce-vue.svg?style=flat)](https://npmjs.org/package/w-tinymce-vue) 
[![Build Status](https://travis-ci.org/yuda-lyu/w-tinymce-vue.svg?branch=master)](https://travis-ci.org/yuda-lyu/w-tinymce-vue) [![license](https://img.shields.io/npm/l/w-tinymce-vue.svg?style=flat)](https://npmjs.org/package/w-tinymce-vue) 
[![gzip file size](http://img.badgesize.io/yuda-lyu/w-tinymce-vue/master/dist/w-tinymce-vue.umd.js.svg?compression=gzip)](https://github.com/yuda-lyu/w-tinymce-vue)
[![npm download](https://img.shields.io/npm/dt/w-tinymce-vue.svg)](https://npmjs.org/package/w-tinymce-vue) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-tinymce-vue.svg)](https://www.jsdelivr.com/package/npm/w-tinymce-vue)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-tinymce-vue/global.html).

## Example
To view some examples for more understanding, visit examples:
> **small data:** [ex-small.html](https://yuda-lyu.github.io/w-tinymce-vue/examples/ex-small.html) [[source code](https://github.com/yuda-lyu/w-tinymce-vue/blob/master/docs/examples/ex-small.html)]

> **large data:** [ex-large.html](https://yuda-lyu.github.io/w-tinymce-vue/examples/ex-large.html) [[source code](https://github.com/yuda-lyu/w-tinymce-vue/blob/master/docs/examples/ex-large.html)]

## Installation
### Using npm(ES6 module):
> **Note:** w-tinymce-vue does't depend on any package.
```alias
npm i w-tinymce-vue
```
By import:
```alias
import jv from 'w-tinymce-vue'

let data={a1:123,b1:'xyz',c1:[1.2,3.4,'5.6',false],d1:{cid:'WK2WHS',name:'peter',unique:false}}
let ele=document.querySelector('#id')

jv(data, element, {expanded:true})
```

### In a browser(UMD module):
Add script for w-tinymce-vue.
```alias
<script src="https://cdn.jsdelivr.net/npm/w-tinymce-vue@1.0.0/dist/w-tinymce-vue.umd.js"></script>
```
Directly use:
```alias
let jv=window['w-tinymce-vue']

let data={a1:123,b1:'xyz',c1:[1.2,3.4,'5.6',false],d1:{cid:'WK2WHS',name:'peter',unique:false}}
let ele=document.querySelector('#id')

jv(data, element, {expanded:true})
```
