import { log, getX, getY, game } from './../games';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const greeting = 'Welcome to the Brain Games! \nFind the greatest common divisor of given numbers.\n';

const gcdGame = (pair) => {
  log(`Question: ${getX(pair)} ${getY(pair)}`);
  return gcd(getX(pair), getY(pair));
};

export default () => {
  game(gcdGame)(greeting);
};
