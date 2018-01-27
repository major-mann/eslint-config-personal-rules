module.exports = {
    parserOptions: {
        impliedStrict: true,
        ecmaVersion: 2017
    },
    env: {
        node: true
    },
    extends: './index.js',
    root: true,
    rules: {
        // Since we are creating rules the files are full of magic numbers which are clearly associated to their
        //  respective rules and as such have clear usage implications.
        'no-magic-numbers': 0
    }
};
