module.exports = {
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/dom',
    'plugin:testing-library/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      classes: true,
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  plugins: ['prettier', 'jest', 'jest-dom', 'testing-library', 'import', 'react', 'jsx-a11y'],
  rules: {
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-underscore-dangle': 'off',
    'prefer-template': 'off',
    'prettier/prettier': ['error'],
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'sort-imports': 'off',
    strict: 'off',
    'global-require': 'off',
    'react/no-multi-comp': 'off',
    'testing-library/no-debugging-utils': [
      'error',
      {
        utilsToCheckFor: {
          debug: false,
        },
      },
    ],
    quotes: [
      0,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'no-console': ['error', { allow: [''] }],
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': ['error', { builtinGlobals: true, hoist: 'functions', allow: [], ignoreOnInitialization: false }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    'no-multi-assign': ['error', { ignoreNonDeclaration: true }],
    'no-var': 'error',
  },
}
