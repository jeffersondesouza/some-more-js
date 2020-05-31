function show() {
  console.log("Show");
}

show();
show.call();

const mago = {
  name: "Merlin",
  health: 50,
  heal: function (num1, num2) {
    return (this.health += num1 + num2);
  },
};

const arqueiro = {
  name: "Robin Hood",
  health: 30,
};

console.log("1: ", arqueiro);
/* Aqui chamamos o call mas passamos o escopo do Arqueiro, logo ele pega o helth do arquiro */
mago.heal.call(arqueiro, 50, 50); // CALL
console.log("2: ", arqueiro);

mago.heal.apply(arqueiro, [100, 100]); // APPLY
console.log("3: ", arqueiro);

mago.heal.bind(arqueiro, 100, 100); // BIND -
/* nao altera altomárico como call e apply, 
   pois bind nao executa a func, ele retorna outra função com o novo escopo, 
   logo que guardar esse novo valor da função e ai sim teremos mantido o escopo do this arqueiro
*/
console.log("4: ", arqueiro);

var curaArqueiro = mago.heal.bind(arqueiro); // Criamos uma ova função com um bind no escopo, foi o q fiz no falar() e f()

curaArqueiro(100, 100);

console.log("5: ", arqueiro);
