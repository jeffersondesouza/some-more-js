/* Cloujures ajudam na economia de memória */

// BAD: sayHiList gera uma grande lista a cada invocação
function sayHiList(index) {
  const bigList = new Array(7000).fill("Ola");
  console.log("Finalizou");
  return bigList[index];
}

console.log(sayHiList(1));
console.log(sayHiList(2));
console.log(sayHiList(3));

// Good: com uma clousure podemos gerar a lista uma única vez e permitir seu acesso nas chamadas da fução;
function generatList() {
  const bigList = new Array(7000).fill("Ola");
  console.log("Finalizou 2");
  return function (index) {
    return bigList[index];
  };
}

const sayHiList2 = generatList();

console.log(sayHiList2(1));
console.log(sayHiList2(2));
console.log(sayHiList2(3));
