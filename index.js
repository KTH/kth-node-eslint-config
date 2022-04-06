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
    'plugin:jest/recommended',
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
    jest: {
      version: 'detect',
    },
  },
  plugins: ['prettier', 'jest', 'jest-dom', 'testing-library', 'import', 'react', 'jsx-a11y'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'array-callback-return': 'error',
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
    'dot-notation': 'error',
    'func-names': ['error', 'as-needed'],
    'global-require': 'off',
    'import/extensions': 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'lines-around-directive': ['error', 'always'],
    'no-console': ['error', { allow: [''] }],
    'no-multi-assign': ['error', { ignoreNonDeclaration: true }],
    'no-param-reassign': ['error', { props: false }],
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
    'no-shadow': ['error', { builtinGlobals: true, hoist: 'functions', allow: [], ignoreOnInitialization: false }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    'no-underscore-dangle': 'off',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-destructuring': ['error', { object: true, array: true }],
    'prefer-template': 'off',
    'prettier/prettier': ['error'],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    quotes: [
      0,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/no-multi-comp': 'off',
    'sort-imports': 'off',
    'spaced-comment': ['error', 'always'],
    strict: 'off',
    'testing-library/no-debugging-utils': [
      'error',
      {
        utilsToCheckFor: {
          debug: false,
        },
      },
    ],
    'vars-on-top': 'error',
  },
}
