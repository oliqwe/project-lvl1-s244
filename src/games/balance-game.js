import { cons } from './../pairs';
import { game } from './../';
import { randomNumber, sortAscend, tail, lastChar, strMiddle } from './../helpers';

const isBalanced = (str, el) => {
  if (str.length === 1) {
    return true;
  }
  const firstEl = el === undefined ? parseInt(str[0], 10) : el;
  const secondEl = parseInt(str[1], 10);

  if (firstEl === secondEl || firstEl + 1 === secondEl) {
    return isBalanced(tail(str), firstEl);
  }
  return false;
};

const balance = (num) => {
  const str = sortAscend(`${num}`);

  if (isBalanced(str)) {
    return str;
  }
  let lastEl = parseInt(lastChar(str), 10);
  let firstEl = parseInt(str[0], 10);

  while (firstEl < lastEl) {
    firstEl += 1;
    lastEl -= 1;
  }

  if (num.length === 2) {
    return balance(`${firstEl}${lastEl}`);
  }
  return balance(`${firstEl}${strMiddle(str)}${lastEl}`);
};

const rule = 'Balance the given number.';

const calcGame = () => {
  const number = randomNumber(1000);
  const question = `${number}`;
  const res = balance(number);
  return cons(res, question);
};

export default () => {
  game(calcGame, rule);
};
