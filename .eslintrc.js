/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['@inabagumi/react', 'plugin:@next/next/recommended'],
  parserOptions: {
    project: 'tsconfig.json'
  },
  root: true,
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
