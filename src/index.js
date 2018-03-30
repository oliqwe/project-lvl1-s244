import readlineSync from 'readline-sync';
import { car, cdr } from './pairs';

const askQuestion = str => readlineSync.question(str);
const log = str => console.log(str);

// game function
export const game = (fn, rule) => {
  log(`Welcome to the Brain Games! \n${rule === undefined ? '' : rule}\n`);
  const userName = askQuestion('May i have your name ? ');
  log(`Hello, ${userName} ! \n`);

  if (fn === undefined) {
    return;
  }

  for (let i = 0; i < 3; i += 1) {
    const calcResQuestion = fn();
    log(`Question: ${cdr(calcResQuestion)}`);
    const answer = askQuestion('Your answer: ');
    const res = car(calcResQuestion).toString();

    if (res === answer) {
      log('Correct!');
    } else {
      log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'. \nLet's try again, ${userName}!`);
      return;
    }

    if (i === 2) {
      log(`Congratulations, ${userName}!`);
    }
  }
};

export default game;
