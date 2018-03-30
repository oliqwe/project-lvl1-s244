
const randomNumber = () => Math.floor((Math.random() * 100) + 1);
const bigRandomNumber = () => Math.floor((Math.random() * 1000) + 1);
const tail = str => str.slice(1);
const lastChar = str => str.slice(-1);
const strMiddle = str => str.slice(1, -1);

const randomOperator = () => {
  const number = randomNumber();
  if (number <= 33) {
    return '-';
  } else if (number > 33 && number < 66) {
    return '+';
  }
  return '*';
};

const sortAscend = (str) => {
  const iter = (res, acc) => {
    if (acc === 10 || str.length === 0) {
      return res;
    }
    let intRes = res;
    // const num = parseInt(str[0], 10);
    for (let i = 0; i <= str.length; i += 1) {
      if (parseInt(str[i], 10) === acc) {
        intRes += str[i];
      }
    }

    return iter(intRes, acc + 1);
  };
  return iter('', 0);
};
export { randomNumber, randomOperator, tail, lastChar, strMiddle, sortAscend, bigRandomNumber };
