
import readlineSync from 'readline-sync';

// Messages
const showWelcomeMsg = () => console.log('Welcome to the Brain Games');
const questionMsg = () => console.log('Answer "yes" if number even otherwise answer "no". \n');
const questionCalcMsg = () => console.log('What is the result of the expression? \n');

const logUser = () => {
  const name = readlineSync.question('May i have your name ? ');
  console.log(`Hello, ${name} ! \n`);
  return name;
};

const randomNumber = () => Math.floor((Math.random() * 10) + 1);

const randomOperator = () => {
  const number = randomNumber();
  if (number <= 3) {
    return '-';
  } else if (number > 3 && number < 6) {
    return '+';
  }
  return '*';
};

export { logUser, showWelcomeMsg, questionMsg, questionCalcMsg, randomNumber, randomOperator };
