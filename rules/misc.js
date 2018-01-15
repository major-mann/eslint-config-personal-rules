module.exports = {
    rules: {
        strict: [
            2,
            'safe'
        ],
        'no-restricted-syntax': [
            2,
            // Instead of deprecating new they added class :( :( :(
            'ClassExpression',
            'ClassDeclaration'
        ]
    }
};
