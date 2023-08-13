module.exports = {

    'env': {
        'browser': true,
        'es2021': true,
        node: true
    },

    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module',
        parser: '@typescript-eslint/parser'
    },

    extends: [
        'plugin:vue/vue3-recommended'
    ],

    plugins: [
        '@typescript-eslint'
    ],

    rules: {

        'quotes': ['error', 'single'],

        "semi": ['error', 'never'],

        'vue/component-name-in-template-casing': ['error', 'PascalCase'],

        'vue/multi-word-component-names': 'off',

        // white line between sfc tags (script, template, style)
        'vue/padding-line-between-blocks': ['error', 'always'],

        // white line between template tag block
        'vue/multiline-html-element-content-newline': ['error', {
            'ignoreWhenEmpty': true,
            'allowEmptyLines': true,
        }],

        // SFC's tags order
        'vue/component-tags-order': ['error', {
            order: ['script', 'template', 'style'],
        }],

        // indent
        'indent': ['error', 'tab'],

        'vue/html-indent': ['error', 'tab'],

        'vue/block-tag-newline': ['error', {
            'singleline': 'always', 
            'multiline': 'always', 
            'maxEmptyLines': 1 
        }]
    }
}