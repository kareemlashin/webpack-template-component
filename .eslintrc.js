// https://eslint.org/docs/user-guide/configuring

module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    rules: {
        'no-undef': 'off',
        'no-console': 'warn',
    },
    globals: {
        module: true,
        jQuery: true,
        $: true,
    },
}