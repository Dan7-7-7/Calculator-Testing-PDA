import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container, runningTotal, equals;
  beforeEach(() => {
    container = mount(<Calculator/>)
    runningTotal = container.find('#running-total');
    equals = container.find('#operator-equals');
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add two numbers together', () => {
    const four = container.find('#number4');
    const one = container.find('#number1');
    const add = container.find('#operator_add');
    four.simulate('click');
    add.simulate('click');
    one.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to subtract one number from another', () => {
    const seven = container.find('#number7');
    const four = container.find('#number4');
    const subtract = container.find('#operator-subtract');
    seven.simulate('click');
    subtract.simulate('click');
    four.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })
  
  it('should be able to multiply one number by another', () => {
    const three = container.find('#number3');
    const five = container.find('#number5');
    const multiply = container.find('#operator-multiply');
    three.simulate('click');
    multiply.simulate('click');
    five.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide one number by another', () => {
    const two = container.find('#number2');
    const one = container.find('#number1');
    const seven = container.find('#number7');
    const divide = container.find('#operator-divide');
    two.simulate('click');
    one.simulate('click');
    divide.simulate('click');
    seven.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to concatenate multiple number button clicks', () => {
    const five = container.find('#number5');
    const two = container.find('#number2');
    const one = container.find('#number1');
    two.simulate('click');
    five.simulate('click');
    one.simulate('click');
    expect(runningTotal.text()).toEqual('251');
  })

  it('should be able to chain multiple operations together', () => {
    const two = container.find('#number2');
    const one = container.find('#number1');
    const seven = container.find('#number7');
    const multiply = container.find('#operator-multiply');
    const divide = container.find('#operator-divide');
    two.simulate('click');
    one.simulate('click');
    divide.simulate('click');
    seven.simulate('click');
    multiply.simulate('click');
    two.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('6');
  })
})

// - `calculator.add()` - add 1 to 4 and get 5
// - `calculator.subtract()` subtract 4 from 7 and get 3
// - `calculator.multiply()` - multiply 3 by 5 and get 15
// - `calculator.divide()` - divide 21 by 7 and get 3
// - `calculator.numberClick()` - concatenate multiple number button clicks
// - `calculator.operatorClick()` - chain multiple operations together
// - `calculator.clearClick()` - clear the running total without affecting the calculation