import { log, getX, getY, repeatedQuestion, logUser, askQuestion, checkResult } from './../games';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export default () => {
  log('Welcome to the Brain Games! \nFind the greatest common divisor of given numbers.\n');
  const userName = logUser();

  const checkSum = (pair, isLastElement) => {
    log(`Question: ${getX(pair)} ${getY(pair)}`);

    const answer = askQuestion('Your answer: ');
    const res = gcd(getX(pair), getY(pair));

    return checkResult(parseInt(answer, 10), res, userName, isLastElement);
  };

  repeatedQuestion(checkSum);
};
