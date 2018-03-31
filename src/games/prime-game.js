import { cons } from './../pairs';
import { game } from './../';
import { randomNumber } from './../helpers';


const rule = 'Is this number prime?';


const isPrime = (n) => {
  if (n <= 3) {
    return false;
  }

  const iter = (num, acc) => {
    if (num === acc) {
      return true;
    }
    if ((num % acc) === 0) {
      return false;
    }
    const a = acc + 1;
    return iter(num, a);
  };
  return iter(n, 2);
};


const primeGame = () => {
  const number = randomNumber(100);
  const primeNumber = isPrime(number) ? 'yes' : 'no';
  return cons(primeNumber, number);
};

export default () => {
  game(primeGame, rule);
};
