import uglify from 'rollup-plugin-uglify';
import buble from 'rollup-plugin-buble';

const config = (file, plugins) => ({
    input: 'index.js',
    output: {
        name: 'TinyQueue',
        format: 'umd',
        file
    },
    plugins
});

export default [
    config('tinyqueue.js', [buble()]),
    config('tinyqueue.min.js', [uglify(), buble()])
];
