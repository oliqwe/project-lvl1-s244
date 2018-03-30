
const randomNumber = () => Math.floor((Math.random() * 100) + 1);

const randomOperator = () => {
  const number = randomNumber();
  if (number <= 33) {
    return '-';
  } else if (number > 33 && number < 66) {
    return '+';
  }
  return '*';
};

export { randomNumber, randomOperator };
