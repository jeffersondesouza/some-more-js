const http = require("https");
// PROMSISES
const promise = new Promise((resolve, reject) => {
  resolve("ok");
});

const promise2 = Promise.resolve("ok 2");

promise.then(console.log);
promise2.then(console.log);

const doubleAsyncUser = (value) => {
  return new Promise((resolve, reject) => {
    if (typeof value !== "number") {
      return reject("Not a number");
    }

    resolve(value * 2);
  });
};

doubleAsyncUser(2).then(console.log);
doubleAsyncUser("2").then(console.log).catch(console.log);

doubleAsyncUser(2)
  .then((res) => doubleAsyncUser(res))
  .then((res) => doubleAsyncUser(res))
  .then(console.log); // 16

async function doubleAsyncUserWrap(value) {
  return doubleAsyncUser(value);
}

const v1 = await doubleAsyncUserWrap(2);
const v2 = await doubleAsyncUserWrap(v1);
const v3 = await doubleAsyncUserWrap(v2);

console.log(v3); // 16

const URLS = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
];
