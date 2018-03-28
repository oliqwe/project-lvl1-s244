import readlineSync from 'readline-sync';
import { log, getX, getY, repeatedQuestion, logUser, randomNumber, askQuestion } from './../games';


export default () => {
  log('Welcome to the Brain Games! \nWhat is the result of the expression ?\n');
  const userName = logUser();
  
  const checkSum = (pair, isLastElement) => {

    const operator = randomOperator();
    const calcResult = calculations(pair)(operator);

    log(`Question: ${getX(pair)} ${operator} ${getY(pair)}`);
    const answer = askQuestion("Your answer: ");
    const operationResult = parseInt(answer, 10) === calcResult ? true : false;

    if (operationResult) {
      log('Correct!');
    } else {
      log(`'${answer}' is wrong answer ;(. Correct answer was '${calcResult}'. \nLet's try again, ${userName}!`);
      return false
    }

    if (isLastElement) {
      log(`Congratulations, ${userName}!`);
    }
  }
  repeatedQuestion(checkSum);
};

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

