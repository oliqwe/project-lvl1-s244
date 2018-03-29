import { log, getX, getY, randomNumber, game } from './../games';

const randomOperator = () => {
  const number = randomNumber();
  if (number <= 33) {
    return '-';
  } else if (number > 33 && number < 66) {
    return '+';
  }
  return '*';
};

const calculations = pair => (operator) => {
  if (operator === '+') {
    return getX(pair) + getY(pair);
  } else if (operator === '-') {
    return getX(pair) - getY(pair);
  }
  return getX(pair) * getY(pair);
};

const greeting = 'Welcome to the Brain Games! \nWhat is the result of the expression ?\n';

const calcGame = (pair) => {
  const operator = randomOperator();
  log(`Question: ${getX(pair)} ${operator} ${getY(pair)}`);
  return calculations(pair)(operator);
};

export default () => {
  game(calcGame)(greeting);
};
