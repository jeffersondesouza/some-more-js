
console.log(foo) // undefined - Pois foo sofre hoisting parcial

boo(); // hello boo - roda pois hello é uma declaração de função, sofre hointing total 
/* foo(); */ // Error - pois seu hointing é parcial, até aq foo=undefined, logo undefined is not a funtion

// function expression
var foo  = function(){
  console.log('hello foo');
}

foo(); // hello foo 

// function declaration
function boo(){
  console.log('hello boo');
}