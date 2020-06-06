// Imutability
const obj1 = { name: "joao" };
console.log("obj1:", obj1.name);

// Not imutable
function updateName(obj, name) {
  obj.name = name;
}
updateName(obj1, "ze");

console.log("obj1:", obj1.name);

const obj2 = { name: "Maria" };
console.log("obj2:", obj2.name);

// imutable
function updateName2(obj, name) {
  const newObj = { ...obj1, name };
  return newObj.name;
}

console.log("updated Name:", updateName2(obj2, "chica"));
console.log("obj2:", obj2.name);

function sum(a, b) {
  return a + b;
}

// partial 
const sum1 = sum.bind(null, 1)(2);

console.log(sum1);
console.log(sum(1, 2));
