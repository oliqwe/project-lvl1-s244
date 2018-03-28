import readlineSync from 'readline-sync';
import { showWelcomeMsg, questionMsg, logUser } from './../helpers';

export default () => {
  showWelcomeMsg();
  questionMsg();
  const userName = logUser();

  for (let i = 0; i < 3; i += 1) {
    // generate a random number from 1 to 100
    const randomNumber = Math.floor((Math.random() * 100) + 1);

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');
    const numCheck = Number.isInteger(randomNumber / 2) ? 'yes' : 'no';

    if (numCheck === answer || numCheck === answer) {
      console.log('Correct !');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numCheck}'. \nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
