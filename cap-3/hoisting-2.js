/* b chamado antes da definição */

// hello();

/*  
  Ao envolver nos parênteses nos estamo bloqueando o hointing, pois criamos um novo escopo, a
  Agora hello nao faz parte do escolo global
*/

/* Definir variáveos com let e const tb evita o hoisting para variáveis*/


(function hello() {
  console.log("Hello 1 ");
})();

hello2();

function hello2() {
  console.log("Hello 2 ");
}
