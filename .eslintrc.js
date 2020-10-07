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
    'react/react-in-jsx-scope': 'off'
  }
}
