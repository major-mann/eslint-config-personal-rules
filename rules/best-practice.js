module.exports = {
    rules: {
        'accessor-pairs': 2,
        'array-callback-return': 2,
        'block-scoped-var': 2,
        'class-methods-use-this': 1,
        complexity: [
            1,
            12
        ],
        'consistent-return': 2,
        curly: 2,
        'default-case': 1,
        'dot-location': [
            2,
            'property'
        ],
        eqeqeq: [
            2,
            'smart'
        ],
        'guard-for-in': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 0,
        'no-div-regex': 2,
        'no-else-return': 0,
        'no-empty-function': 2,
        'no-empty-pattern': 2,
        'no-eq-null': 0,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-fallthrough': [
            2,
            { commentPattern: 'fall-through[\s\w]*' }
        ],
        'no-floating-decimal': 2,
        'no-global-assign': 2,
        'no-implicit-coercion': [
            2,
            { allow: ['!!'] }
        ],
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 1,
        'no-iterator': 2,
        'no-labels': 0,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-magic-numbers': [
            2,
            { ignore: [0, 1, 2] }
        ],
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-new': 2,
        'no-new-func': 0,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-param-reassign': 0,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-restricted-properties': 0,
        'no-return-assign': 0,
        'no-return-await': 2,
        'no-script-url': 0,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 0,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-expressions': 2,
        'no-unused-labels': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-useless-return': 2,
        'no-void': 2,
        'no-warning-comments': [
            1,
            { terms: ['todo', 'fixme'] }
        ],
        'no-with': 2,
        'prefer-promise-reject-errors': [
            2,
            { allowEmptyReject: true }
        ],
        radix: 2,
        'require-await': 2,
        'vars-on-top': 2,
        'wrap-iife': 2,
        yoda: [
            2,
            'never'
        ]
    }
};
