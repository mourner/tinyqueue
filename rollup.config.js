import {terser} from 'rollup-plugin-terser';
import buble from 'rollup-plugin-buble';

const config = (file, plugins) => ({
    input: 'index.js',
    output: {
        name: 'TinyQueue',
        format: 'umd',
        indent: false,
        file
    },
    plugins
});

export default [
    config('tinyqueue.js', [buble()]),
    config('tinyqueue.min.js', [buble(), terser()])
];
