import { cons } from './../pairs';
import { game } from './../';
import { randomNumber } from './../helpers';

const rule = 'Answer "yes" if number even otherwise answer "no". ?';

const evenGame = () => {
  const number = randomNumber(100);
  const res = Number.isInteger(number / 2) ? 'yes' : 'no';
  return cons(res, number);
};

export default () => {
  game(evenGame, rule);
};
