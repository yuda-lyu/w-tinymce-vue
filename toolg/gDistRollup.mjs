import rollupFiles from '../tool/rollupFiles.mjs'
import getFiles from '../tool/getFiles.mjs'


let fdSrc = './src'
let fdTar = './dist'


rollupFiles({
    fns: getFiles(fdSrc),
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
