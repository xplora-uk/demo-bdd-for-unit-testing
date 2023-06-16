const assert = require('assert');
const { When } = require('@cucumber/cucumber');

// import function to be tested
const { add } = require('../../src');


function additionStep(number1, number2, expectedResult) {

  const output = add(number1, number2);

  assert.strictEqual(output, expectedResult);
}

When('I add {int} and {int} the result should be {int}', additionStep);

