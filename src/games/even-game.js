
import { log, getX, repeatedQuestion, logUser, askQuestion } from './../games';

export default () => {
  log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');

  const userName = logUser();

  const checkYesNo = (pair, isLastElement) => {
    const number = getX(pair);
    log(`Question: ${number}`);

    const answer = askQuestion('Your answer: ');
    const numCheck = Number.isInteger(number / 2) ? 'yes' : 'no';

    if (numCheck === answer) {
      log('Correct!');
    } else {
      log(`'${answer}' is wrong answer ;(. Correct answer was '${numCheck}'. \nLet's try again, ${userName}!`);
      return false;
    }

    if (isLastElement) {
      log(`Congratulations, ${userName}!`);
    }
    return true;
  };
  repeatedQuestion(checkYesNo);
};

