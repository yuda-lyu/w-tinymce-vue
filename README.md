# w-tinymce-vue
A wrapper for @tinymce/tinymce-vue.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![language](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://github.com/vuejs/vue) 
[![npm version](http://img.shields.io/npm/v/w-tinymce-vue.svg?style=flat)](https://npmjs.org/package/w-tinymce-vue) 
[![npm download](https://img.shields.io/npm/dt/w-tinymce-vue.svg)](https://npmjs.org/package/w-tinymce-vue) 
[![npm download](https://img.shields.io/npm/dm/w-tinymce-vue.svg)](https://npmjs.org/package/w-tinymce-vue) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-tinymce-vue.svg)](https://www.jsdelivr.com/package/npm/w-tinymce-vue)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-tinymce-vue/module-WTinymceVue.html).

## Example
To view some examples for more understanding, visit examples:
> **default:** [ex-default.html](https://yuda-lyu.github.io/w-tinymce-vue/examples/ex-default.html) [[source code](https://github.com/yuda-lyu/w-tinymce-vue/blob/master/docs/examples/ex-default.html)]

## Installation

### Using npm(ES6 module):
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

Add script for tinymce.
```alias
<script src="https://cdn.jsdelivr.net/npm/tinymce@6.8.6/tinymce.min.js"></script>
```

Add script for vue.
```alias
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.min.js"></script>
```

Add script for w-tinymce-vue.
```alias
<script src="https://yuda-lyu.github.io/w-tinymce-vue/dist/w-tinymce-vue.umd.js"></script>
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

## Breaking changes

### Update to TinyMCE 6 (tinymce 6.8.6)

This version requires TinyMCE 6.x (MIT license). Do not use TinyMCE 7 or later (GPL or commercial license). Load `tinymce.min.js` of TinyMCE 6.x globally before this component, as shown above. The props, events and `v-model` of the component are unchanged.

- Default plugins: `paste` and `hr` were merged into the TinyMCE core and `imagetools` was removed by TinyMCE. The default is now `link table lists advlist charmap`. Remove these names from your own `settings.plugins` too.
- Toolbar items: `fontsizeselect` was renamed to `fontsize` (also `fontselect` to `fontfamily`, `formatselect` to `blocks`), and the option `fontsize_formats` was renamed to `font_size_formats`. Update your own `settings.toolbar` and `settings.fontsize_formats`.
- Appearance: the default skin of TinyMCE 6 differs from TinyMCE 5 (rounded border, no separators between toolbar groups, larger spacing). With the default settings the editor becomes wider and taller than before (measured on the example page: width 725px to 832px, menubar plus toolbar height 78px to 88px; the editing area keeps the height of the `height` prop). To keep the TinyMCE 5 size and look, use `:settings="{ skin: 'tinymce-5', content_css: 'tinymce-5' }"` (the folder `skins/ui/tinymce-5` of TinyMCE must be served; do not mix editors with different skins in one page).
- The "Upgrade" promotion link that TinyMCE 6 shows in the menubar is disabled by default (`promotion: false`).
- The language pack `zh_TW` was updated for TinyMCE 6: the previous wording is unchanged and the strings that are new in TinyMCE 6 were added.
- `editable` is now applied by this component with `editor.mode.set` (`editor.setMode`, which `@tinymce/tinymce-vue` 3.x calls when its `disabled` changes, does not exist in TinyMCE 6).
- TinyMCE 6 removed `tinymce.editors`; use `tinymce.get()` in your own code.
- Saved HTML (the `v-model` string) is serialized differently by TinyMCE 6: void elements are written as `<br>`, `<img ...>` and `<hr>` (TinyMCE 5 wrote `<br />`, `<img ... />` and `<hr />`), `rgb(r, g, b)` colors are kept as they are (TinyMCE 5 converted them to `#rrggbb`), and a table inserted by the table dialog uses `<colgroup>` instead of a width on every cell. If you compare or diff stored strings, content that was saved by TinyMCE 5 and is edited again is saved in the new format.
- `object` and `embed` elements in the content are converted by default (`convert_unsafe_embeds: true`, see Security notes): an `object` or `embed` element becomes an `img`, `video`, `audio` or `iframe` element.
- New prop `safeFilters` (Boolean, default `true`, see Security notes).
- The IE11 specific code of the component (min-height and toolbar border in `updateHeight`) was removed because TinyMCE 6 does not support IE11.

### Security notes (TinyMCE 6.8.6)

TinyMCE 6.x gets no further security fixes; the fixes of the advisories below exist only in TinyMCE 7 or later (GPL or commercial license). This component therefore mitigates what can be mitigated by default:

| Advisory | Status with the default settings |
|---|---|
| GHSA-5359-pvf2-pw78 (`object` and `embed` loading an SVG) | Mitigated: `convert_unsafe_embeds: true` converts `object` and `embed` elements. |
| GHSA-v98h-vmpc-fpqv (forged `mce:protected` comments) | Mitigated: the editor parser removes `mce:protected` comments. |
| GHSA-q742-qvgc-gc2f (forged `data-mce-href`, `data-mce-src`, `data-mce-style`) | Mitigated: the editor parser removes these three attributes, and pasted HTML is cleaned of them before TinyMCE processes it. |
| GHSA-mh5m-5hw4-5c69 (nested `svg` bypasses the sanitizer) | Not fixable by a setting. Sanitize the saved HTML on output (when you store or render it). |
| GHSA-vg35-5wq7-3x7w (`media` plugin) | Only affects editors where you enable the `media` plugin; the default plugins do not include it. |

The parser filters apply to all content that goes through the editor parser (setting the content, `insertContent`, `mceInsertClipboardContent` and paste). They also work with your own `settings` and your own `settings.setup`: the component registers them before it runs your `setup`.

To turn them off (not recommended):

- `:safe-filters="false"` turns off the parser filters and the paste cleaning (read once when the editor is created). Risk: HTML with forged `mce:protected` comments or `data-mce-*` attributes is restored or overrides `href`, `src` and `style` as described in the advisories, so use it only when all content is trusted or sanitized elsewhere. Side effects when they are on: the `protect` option of TinyMCE (it works with `mce:protected` comments) stops working, and text in pasted HTML that looks like a `data-mce-href`, `data-mce-src` or `data-mce-style` attribute is removed.
- `:settings="{ convert_unsafe_embeds: false }"` turns off the conversion. Risk: `object` and `embed` elements that load an SVG stay in the saved HTML (GHSA-5359).
