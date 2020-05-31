var b = 1000;
var c = [];
console.log("b:", b);
c.push(90);
console.log("c:", c);

(function () {
  var a = c;
  b = 300;
  a.push(1)  
  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);
})();


console.log("b:", b);
console.log("c:", c);
