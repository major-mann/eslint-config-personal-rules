module.exports = {
    parser: 'espree',
    parserOptions: {
        impliedStrict: true,
        ecmaVersion: 2017
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        './rules/misc.js',
        './rules/error.js',
        './rules/es6.js',
        './rules/best-practice.js',
        './rules/variables.js',
        './rules/node.js',
        './rules/style.js'
    ].map(require.resolve)
};
