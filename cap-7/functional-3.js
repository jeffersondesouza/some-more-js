// Pure functions

// Not pure - cause side effect
const array1 = [1, 2, 3];
console.log("array1:", array1); // 1,2,3

function removeLastItem1(arr) {
  arr.pop();
}

removeLastItem1(array1);
console.log("array1:", array1); // 1,2

// Not pure - cause side effect
const array2 = [1, 2, 3];
console.log("array2:", array2); // 1,2,3

function removeLastItem2(arr) {
  // const newArray = [...arr];
  // newArray.pop();
  const [last, ...rest] = [...arr].reverse();
  return rest.reverse();
}

console.log("removeLastItem2:", removeLastItem2(array2)); // 1,2,3
console.log("array2:", array2); // 1,2,3
