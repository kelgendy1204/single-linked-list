import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'dist/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    plugins: [resolve(), babel({ babelHelpers: 'bundled' }), terser()]
};
