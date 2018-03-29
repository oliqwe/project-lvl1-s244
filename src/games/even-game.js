
import { log, getX, repeatedQuestion, logUser, askQuestion, checkResult } from './../games';

export default () => {
  log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');

  const userName = logUser();

  const checkYesNo = (pair, isLastElement) => {
    const number = getX(pair);
    log(`Question: ${number}`);

    const answer = askQuestion('Your answer: ');
    const res = Number.isInteger(number / 2) ? 'yes' : 'no';

    return checkResult(answer, res, userName, isLastElement);
  };
  repeatedQuestion(checkYesNo);
};

