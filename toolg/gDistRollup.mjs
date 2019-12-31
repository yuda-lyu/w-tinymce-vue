import rollupFiles from 'w-package-tools/src/rollupFiles.mjs'


let fdSrc = './src'
let fdTar = './dist'


rollupFiles({
    fns: ['WTinymceVue.vue'],
    fdSrc,
    fdTar,
    nameDistType: 'kebabCase',
    globals: {
        'tinymce': 'tinymce',
    },
    external: [
        'tinymce',
    ],
})

