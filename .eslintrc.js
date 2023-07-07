module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-boolean-value': 0,
    'jsx-a11y/label-has-associated-control': 'off',
    // transfer lint，后面优化
    'jsx-a11y/label-has-for': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'global-require': 'warn',
  },
};
