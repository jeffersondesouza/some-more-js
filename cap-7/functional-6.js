// Pipe and compose

const pipe = function (...fns) {
  return fns.reduce(function (result, fn) {
    return function (...args) {
      return fn(result(...args));
    };
  });
};

const compose = (...fns) => {
  return fns.reduce((result, fn) => (...args) => result(fn(...args)));
};

const getId = (arg) => arg.id;
const double = (v) => v * 2;
const toString = (v) => v.toString() + " ola";

const user = { id: 1 };

const result1 = pipe(getId, double, toString)(user);
const result2 = compose(toString, double, getId)(user);

console.log("result1:", result1);
console.log("result2:", result2);
