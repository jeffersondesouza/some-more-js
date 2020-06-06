var a = 10;
var b = a;
console.log("a:", a); //10
console.log("b:", b); //10
b++;
console.log("a:", a); // 10
console.log("b:", b); // 11

var obj1 = { id: 1 };
var obj2 = obj1;

console.log(obj1.id); // 1
console.log(obj2.id); // 1
obj2.id = 1000;
console.log(obj1.id); // 1000
console.log(obj2.id); // 1000
obj1.id = 3000;
console.log(obj1.id); // 3000
console.log(obj2.id); // 3000

var values = [1, 2, 3, 4];
var obj3 = { id: 1, values: values.slice() };

// var obj4 = Object.assign({}, obj3);
var obj4 = { ...obj3 };

console.log("values:", values);
console.log("obj3:", obj3);
console.log("obj4:", obj4);

values.push(12);
obj4.id = 100;

console.log("values:", values);
console.log("obj3:", obj3);
console.log("obj4:", obj4);

var obj5 = { id: 5, b: { deep: "deepp a" } };
var obj6 = Object.assign({}, obj5);
console.log("obj5:", obj5);
console.log("obj6:", obj6);

// obj6.b = { deep: "xxx" };
/* Aqui nao alterou o obj5 pois estmos apontoando uma nova referecia */

obj6.b.deep = "xxxxx";
/* Aqui altera pois estamos modificadno para a referência do valor na memoria */
//  altera pois o Asung foi feito no obj5, é o shallow clone
console.log("b:", b);
console.log("obj5:", obj5);
console.log("obj6:", obj6);
