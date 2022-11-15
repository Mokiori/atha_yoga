module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'plugin:react/recommended', //react - скоращение от eslint-plugin-react
    ],
    plugins: [
        'react',
    ],
    parserOptions: {
        ecmaVersion: 'latest', 
        sourceType: 'module' 
    },
    rules: {
        'react/require-default-props': 'off',
        'react/function-component-definition': [2, {
            namedComponents: 'arrow-function',
        }],
        'arrow-parens': ['error', 'as-needed'], //as-needed - не требует скобок там, где их можно опустить
    }
}