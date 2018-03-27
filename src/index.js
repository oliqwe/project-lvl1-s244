
import readlineSync from 'readline-sync';

// Messages
const showWelcomeMsg = () => console.log('Welcome to the Brain Games');
const questionMsg = () => console.log('Answer "yes" if number even otherwise answer "no". \n');

const logUser = () => {
  const name = readlineSync.question('May i have your name ? ');
  console.log(`Hello, ${name} ! \n`);
  return name;
};

const question = (userName) => {
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

export { showWelcomeMsg, questionMsg, logUser, question };

// "\n" - new line
