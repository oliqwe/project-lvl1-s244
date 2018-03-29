import { log, getX, game } from './../games';

const greeting = 'Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no". ?\n';

const evenGame = (pair) => {
  const number = getX(pair);
  log(`Question: ${number}`);
  return Number.isInteger(number / 2) ? 'yes' : 'no';
};

export default () => {
  game(evenGame)(greeting);
};
