var a = 'a';
var d = 'd';
console.log("b:", b);
var b = "B";

hello("Mundo");

var e = 'fora eee';

var c = "C";
function hello() {
  console.log("Hello : ", c, d, e);
  var d = 'mundo';
  var e = 'mundo eee';
  console.log('e:', e)
}

function hello2() {
  var e = 'hello2 eee';
}

var e = 'fora eee';


hello();
hello2();

/* INTEPRETADOR */
/* 
var a = undefined; <--
var a = 'a';
var d = undefined; <--
var d = 'd';
var c = undefined;

var b = undefined; <--

function hello() { <--
  var d = undefined;
  var d = 'mundo';
  console.log("Hello : ", c, d);
}

console.log("b:", b);
var b = "B";

hello("Mundo");

var c = "C";

hello();

*/
