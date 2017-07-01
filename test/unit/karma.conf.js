var babel = require('rollup-plugin-babel');
var babelrc = require('babelrc-rollup').default;

module.exports = function (config) {
    config.set({
        browsers: [
            'PhantomJS',
        ],
        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' },
            ],
        },
        files: [
            './**/*.spec.js',
        ],
        frameworks: [
            'mocha',
        ],
        preprocessors: {
            './**/*.spec.js': ['rollup'],
        },
        reporters: [
            'spec',
            'coverage',
        ],
        rollupPreprocessor: {
            format: 'iife', // <- helps prevent conflicts between different tests entries
            plugins: [
                babel(babelrc()),
            ],
            sourceMap: 'inline',
        },
    });
};
