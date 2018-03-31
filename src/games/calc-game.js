import { cons, car, cdr } from './../pairs';
import { game } from './../';
import { randomOperator, randomNumber } from './../helpers';

const calculations = pair => (operator) => {
  if (operator === '+') {
    return car(pair) + cdr(pair);
  } else if (operator === '-') {
    return car(pair) - cdr(pair);
  }
  return car(pair) * cdr(pair);
};

const rule = 'What is the result of the expression ?';

const calcGame = () => {
  const operator = randomOperator();
  const numbers = cons(randomNumber(100), randomNumber(100));
  const question = `${car(numbers)} ${operator} ${cdr(numbers)}`;
  const res = calculations(numbers)(operator);
  return cons(res, question);
};

export default () => {
  game(calcGame, rule);
};
