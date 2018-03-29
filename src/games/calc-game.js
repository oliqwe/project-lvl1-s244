import { log, getX, getY, repeatedQuestion, logUser, randomNumber, askQuestion, checkResult } from './../games';

const randomOperator = () => {
  const number = randomNumber();
  if (number <= 3) {
    return '-';
  } else if (number > 3 && number < 6) {
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


export default () => {
  log('Welcome to the Brain Games! \nWhat is the result of the exspression ?\n');
  const userName = logUser();

  const checkSum = (pair, isLastElement) => {
    const operator = randomOperator();
    const calcResult = calculations(pair)(operator);

    log(`Question: ${getX(pair)} ${operator} ${getY(pair)}`);

    const answer = askQuestion('Your answer: ');

    return checkResult(parseInt(answer, 10), calcResult, userName, isLastElement);
  };

  repeatedQuestion(checkSum);
};
