module.exports = {
  extends: ['@inabagumi/react'],
  parserOptions: {
    project: 'tsconfig.json'
  },
  root: true,
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}
