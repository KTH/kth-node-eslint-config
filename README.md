# eslint-config-kth

## Start using this config

```
npm install eslint-config-kth --save-dev
```

You also need [ESLint](https://eslint.org/)

```
npm install eslint --save-dev
```

In our standard projects your .eslintrc file, placed in the root of your project, will only need to contain the following:

```
{
  "extends": ["@kth/eslint-config-kth"]
}
```

All configuration needed will come from this config.

## Developer

Our goal with this module is to use the same ESLint config in all our node projects at KTH.

It's currently based on AirBnB's config.

We are all responsible for keeping this module fresh to help us in our daily work.

Don´t be afraid to make changes but also take your time to discuss with colleagues about the changes you want to make.

**This module/package is built and published to NPM automatically after push.**

**Just commit and push and versions will be updated automatically**
