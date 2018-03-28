import { cons, car, cdr } from './pairs';

const makePairOfNumbers = (num1, num2) => cons(num1, num2);
const getFirstNumber = pair => car(pair);
const getLastNumber = pair => cdr(pair);

const calculations = pair => (operator) => {
  if (operator === '+') {
    return getFirstNumber(pair) + getLastNumber(pair);
  } else if (operator === '-') {
    return getFirstNumber(pair) - getLastNumber(pair);
  }
  return getFirstNumber(pair) * getLastNumber(pair);
};


export { makePairOfNumbers, getFirstNumber, getLastNumber, calculations };
