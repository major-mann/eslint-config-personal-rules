module.exports = {
    rules: {
        // Note: We go with impliedStrict
        strict: 0,
        'no-restricted-syntax': [
            2,
            // Instead of deprecating new they added class :( :( :(
            'ClassExpression',
            'ClassDeclaration'
        ]
    }
};
