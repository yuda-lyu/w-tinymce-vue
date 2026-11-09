// 測試輔助: 在node下讀取元件原始碼之預設設定與語系檔(不需瀏覽器、不需建置dist)
import fs from 'fs'
import path from 'path'
import vm from 'vm'
import { fileURLToPath } from 'url'

//套件根目錄(本檔位於test/tools/)
let root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')


function readText(rel) {
    return fs.readFileSync(path.join(root, rel), 'utf8')
}


function readJson(rel) {
    return JSON.parse(readText(rel))
}


//由src/WTinymceVue.vue之<script>取出def_settings物件字面量並求值(以括號配對, 略過字串與註解內之括號)
function loadDefSettings() {
    let src = readText('src/WTinymceVue.vue')
    let m = src.match(/<script>([\s\S]*?)<\/script>/)
    if (!m) {
        throw new Error('no <script> in WTinymceVue.vue')
    }
    let js = m[1]
    let i = js.indexOf('let def_settings =')
    if (i < 0) {
        throw new Error('def_settings not found')
    }
    let start = js.indexOf('{', i)
    let depth = 0
    let mode = '' //'' | "'" | '"' | '`' | '//' | '/*'
    let end = -1
    for (let k = start; k < js.length; k++) {
        let c = js[k]
        let n = js[k + 1]
        if (mode === '') {
            if (c === '\'' || c === '"' || c === '`') {
                mode = c
            }
            else if (c === '/' && n === '/') {
                mode = '//'
            }
            else if (c === '/' && n === '*') {
                mode = '/*'
            }
            else if (c === '{') {
                depth++
            }
            else if (c === '}') {
                depth--
                if (depth === 0) {
                    end = k
                    break
                }
            }
        }
        else if (mode === '//') {
            if (c === '\n') {
                mode = ''
            }
        }
        else if (mode === '/*') {
            if (c === '*' && n === '/') {
                mode = ''
                k++
            }
        }
        else {
            if (c === '\\') {
                k++
            }
            else if (c === mode) {
                mode = ''
            }
        }
    }
    if (end < 0) {
        throw new Error('def_settings literal not closed')
    }
    let literal = js.slice(start, end + 1)
    return vm.runInNewContext('(' + literal + ')')
}


//載入元件選項物件(export default之內容): 去掉import行, 於獨立之vm環境執行, 以簡易get取代lodash-es之get; 供呼叫computed、methods(以假this)
function loadComponent() {
    let src = readText('src/WTinymceVue.vue')
    let m = src.match(/<script>([\s\S]*?)<\/script>/)
    if (!m) {
        throw new Error('no <script> in WTinymceVue.vue')
    }
    let js = m[1].replace(/^import .*$/gm, '').replace(/^export default \{/m, '__comp = {')
    let get = function(obj, pth) {
        let cur = obj
        for (let k of String(pth).split('.')) {
            if (cur === null || cur === undefined) {
                return undefined
            }
            cur = cur[k]
        }
        return cur
    }
    let sandbox = {
        __comp: null,
        get,
        Editor: {},
        isElement: (v) => !!(v && v.nodeType === 1),
    }
    vm.runInNewContext(js, sandbox)
    return sandbox.__comp
}


//載入src/zh_TW.js(其以全域tinymce.addI18n註冊), 於獨立之vm環境執行並注入假tinymce, 回傳{ code, dict, calls }
function loadZhTW() {
    let got = { code: null, dict: null, calls: 0 }
    let sandbox = {
        tinymce: {
            addI18n: function(code, dict) {
                got.code = code
                got.dict = dict
                got.calls++
            },
        },
    }
    vm.runInNewContext(readText('src/zh_TW.js'), sandbox)
    return got
}


export { root, readText, readJson, loadDefSettings, loadComponent, loadZhTW }
