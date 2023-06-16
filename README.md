# bdd-for-unit-testing

Sample repo shows using BDD for unit testing

## requirements

Node v16.x

## installation

We use [cucumber-js](https://github.com/cucumber/cucumber-js)

```sh
npm i
```

## structure

```plain
features/
  support/
    steps.js    step definitions for our BDD expressions
  add.feature   sample feature file that tests our sample unit of code
src/
  index.js      sample unit of code to be tested
```

## run bdd tests

```sh
npm run test
```
