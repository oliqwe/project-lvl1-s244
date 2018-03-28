

import readlineSync from 'readline-sync';
import { logUser, showWelcomeMsg, questionCalcMsg, randomNumber, randomOperator } from './../helpers';
import { makePairOfNumbers, getFirstNumber, getLastNumber, calculations } from './../numbers';


export default () => {
  showWelcomeMsg();
  questionCalcMsg();
  const name = logUser();

  for (let i = 0; i < 3; i += 1) {
    const operator = randomOperator();
    const numbers = makePairOfNumbers(randomNumber(), randomNumber());

    console.log(`Question: ${getFirstNumber(numbers)} ${operator} ${getLastNumber(numbers)}`);

    const answer = readlineSync.question('Your answer: ');
    const res = calculations(numbers)(operator);

    if (parseInt(answer, 10) === res) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'. \nLet's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

