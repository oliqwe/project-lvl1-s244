import readlineSync from 'readline-sync';
import { cons, car, cdr } from './pairs';

const makePair = (num1, num2) => cons(num1, num2);
const getX = pair => car(pair);
const getY = pair => cdr(pair);
const log = str => console.log(str);
const askQuestion = str => readlineSync.question(str);
const randomNumber = () => Math.floor((Math.random() * 10) + 1);

const logUser = () => {
  const name = askQuestion('May i have your name ? ');
  log(`Hello, ${name} ! \n`);
  return name;
};

const repeatedQuestion = (fn) => {

  for (let i = 0; i < 3; i += 1) {
    const isLastElement = i === 2 ? true : false
    const numbers = makePair(randomNumber(), randomNumber())
    const res = fn(numbers, isLastElement);
    if (res === false ) return
  }
};

export { makePair, getX, getY, log, askQuestion, repeatedQuestion, logUser, randomNumber};
