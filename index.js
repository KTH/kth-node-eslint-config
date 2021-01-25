module.exports = {
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["airbnb", "prettier", "plugin:testing-library/recommended", "plugin:jest-dom/recommended", "plugin:testing-library/react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      classes: true,
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["prettier", "jest", "testing-library", "jest-dom"],
  rules: {
    "import/extensions": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "no-underscore-dangle": "off",
    "prefer-template": "off",
    "prettier/prettier": ["error"],
    "react/destructuring-assignment": ["error", "always", { ignoreClassFields: true }],
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "sort-imports": "off",
    strict: "off",
    "global-require": "off",
    "react/no-multi-comp": "off",
  },
};
