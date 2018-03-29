import readlineSync from 'readline-sync';
import { cons, car, cdr } from './pairs';

const makePair = (num1, num2) => cons(num1, num2);
const getX = pair => car(pair);
const getY = pair => cdr(pair);
const log = str => console.log(str);
const askQuestion = str => readlineSync.question(str);
const randomNumber = () => Math.floor((Math.random() * 100) + 1);

// game function
export const game = fn => (greeting) => {
  log(greeting);
  const userName = askQuestion('May i have your name ? ');
  log(`Hello, ${userName} ! \n`);

  for (let i = 0; i < 3; i += 1) {
    const numbers = makePair(randomNumber(), randomNumber());
    const res = fn(numbers);
    const answer = askQuestion('Your answer: ');
    const checkRes = Number.isNaN(parseInt(res, 10)) ? res : parseInt(res, 10);
    const checkAnswer = Number.isNaN(parseInt(answer, 10)) ? answer : parseInt(answer, 10);

    if (checkAnswer === checkRes) {
      log('Correct!');
    } else {
      log(`'${checkAnswer}' is wrong answer ;(. Correct answer was '${checkRes}'. \nLet's try again, ${userName}!`);
      return;
    }

    if (i === 2) {
      log(`Congratulations, ${userName}!`);
    }
  }
};

export { makePair, getX, getY, log, randomNumber };
