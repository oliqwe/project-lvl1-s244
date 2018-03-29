import { log, getX, getY, repeatedQuestion, logUser, randomNumber, askQuestion } from './../games';

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

    if (parseInt(answer, 10) === calcResult) {
      log('Correct!');
    } else {
      log(`'${answer}' is wrong answer ;(. Correct answer was '${calcResult}'. \nLet's try again, ${userName}!`);
      return false;
    }

    if (isLastElement) {
      log(`Congratulations, ${userName}!`);
    }
    return true;
  };

  repeatedQuestion(checkSum);
};
