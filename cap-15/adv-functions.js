// Clousure
// compose
// Purity
const first = () => {
  const greet = "Hi";
  const second = () => {
    console.log(greet);
  };

  return second;
};

const newFunc = first();

newFunc();

const pipe = (...fns) => {
  return fns.reduce((result, f) => {
    return (...args) => {
      return f(result(...args));
    };
  });
};

const compose = (...fns) => {
  return fns.reduce((result, f) => {
    return (...args) => {
      return result(f(...args));
    };
  });
};

const sum = (x) => {
  console.log("sum:");
  return x + 10;
};
const mult = (x) => {
  console.log("mult:");
  return x * 2;
};
const str = (x) => {
  console.log("str:");
  return x;
};

const total = pipe(str, sum, mult)(10);
console.log("--------");
const total2 = compose(str, sum, mult)(10);

console.log("total:", total);
