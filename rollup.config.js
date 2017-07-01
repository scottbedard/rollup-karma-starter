import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';

let pkg = require('./package.json');

export default {
    entry: 'src/index.js',
    external: Object.keys(pkg.dependencies),
    plugins: [
        babel(babelrc()),
    ],
    targets: [
        {
            dest: pkg.main,
            format: 'umd',
            moduleName: 'rollupStarterProject',
            sourceMap: true,
        },
        {
            dest: pkg.module,
            format: 'es',
            sourceMap: true,
        },
    ],
};
