
const cons = (x, y) => f => f(x, y);
const car = pair => pair(x => x);
const cdr = pair => pair((x, y) => y);

export { cons, car, cdr };
