var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('can add two numbers', function(){
    calculator.add(4)
    assert.equal(calculator.runningTotal, 4)
  })

  it('can subtract two numbers', function(){
    calculator.subtract(1)
    assert.equal(calculator.runningTotal, -1)
  })

  it('can multiply two numbers', function(){
    calculator.multiply(2)
    assert.equal(calculator.runningTotal, 0)
  })

  it('can divide two numbers', function(){
    calculator.divide(2)
    assert.equal(calculator.runningTotal, 0)
  })

  it('can perform multiple operations', function(){
    calculator.add(1)
    calculator.add(1)
    assert.equal(calculator.runningTotal, 2)
  })

  it('can use operatorClick to add three numbers', function(){
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 11)
  })

  it('can clear the runningTotal', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.clearClick()
    assert.equal(calculator.runningTotal, 0)
  })


});
