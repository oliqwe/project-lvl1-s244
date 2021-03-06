import { cons, car, cdr } from './../pairs';
import { game } from './../';
import { randomNumber } from './../helpers';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const rule = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const numbers = cons(randomNumber(100), randomNumber(100));
  const question = `${car(numbers)} ${cdr(numbers)}`;
  const res = gcd(car(numbers), cdr(numbers));
  return cons(res, question);
};

export default () => {
  game(gcdGame, rule);
};
