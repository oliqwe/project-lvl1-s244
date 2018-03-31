import { cons } from './../pairs';
import { game } from './../';
import { randomNumber } from './../helpers';

const rule = 'What number is missing in this progression?';

const iter = (str, step, res, acc) => {
  if (acc === 10) {
    return str;
  }
  const intRes = acc === 0 ? str : parseInt(res, 10) + step;
  let string = acc === 0 ? `${str}` : `${str}  ${intRes}`;
  string = acc === step ? `${str}  ..` : string;
  const ac = acc + 1;
  return iter(string, step, intRes, ac);
};

const progressionGame = () => {
  const step = randomNumber(9);
  const startPoint = randomNumber(9);
  const missingNumber = startPoint + (step ** 2);
  const stringNumbers = iter(startPoint, step, 0, 0);
  return cons(missingNumber, stringNumbers);
};

export default () => {
  game(progressionGame, rule);
};

