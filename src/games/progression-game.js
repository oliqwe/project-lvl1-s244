import { cons } from './../pairs';
import { game } from './../';
import { randomNumber } from './../helpers';

const rule = 'What number is missing in this progression?';

const progressionStep = (startPoint, step, n) => startPoint + ((n - 1) * step);

const progression = (start, step, resStr = '', acc = 1) => {
  if (acc === 11) {
    return resStr;
  }
  const stepProgRes = progressionStep(start, step, acc);
  let string = acc === 1 ? `${stepProgRes}` : `${resStr}  ${stepProgRes}`;
  string = acc === step ? `${resStr}  ..` : string;
  return progression(start, step, string, acc + 1);
};

const progressionGame = () => {
  const startPoint = randomNumber(10);
  const step = randomNumber(10);
  const progressionString = progression(startPoint, step);
  const missingNumber = progressionStep(startPoint, step, step);
  return cons(missingNumber, progressionString);
};

export default () => {
  game(progressionGame, rule);
};

