module.exports = {
  root: true,
  extends: ['@react-native'],
  parserOptions: {
    jsx: true,
  },
  settings: {
    react: {
      version: 'detect',
      jsxRuntime: 'automatic',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-inline-styles': 'off',
  },
};
