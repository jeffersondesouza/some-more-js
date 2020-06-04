// entries ES8

const usersObj = { joao: 1, maria: 2, ze: 3 };

const usersArr = Object.entries(usersObj);
console.log(usersArr);
/*
[
  ["joao", 1],
  ["maria", 2],
  ["ze", 3],
];
*/

// fromEntries ES10
const users = [
  ["joao", 1],
  ["maria", 2],
  ["ze", 3],
];

const flatedObject = Object.fromEntries(users);

console.log(flatedObject); // { joao: 1, maria: 2, ze: 3 }
