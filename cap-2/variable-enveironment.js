function two() {
  console.log("two isValid:", isValid);
  var isValid = 2;
}

function one() {
  console.log("one isValid:", isValid);
  isValid = 1;
}

var isValid = 0;

one();
two();
console.log("isValid:", isValid);
