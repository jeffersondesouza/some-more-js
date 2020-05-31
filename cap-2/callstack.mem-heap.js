// Call stack  +  memory heap

const number = 123; // memory heap allocate memory for number
const string = 123; // memory heap allocate memory for string
const human = { name: "joao" }; // memory heap allocate memory for human infomrations

/* call stack */
function calculate() {
  const sumTotal = 4 + 5;
  return sumTotal;
}

// Exempo 1

calculate();

/* 
  Ao ler o código, ao chegar na execução calculate(), o interpretador irá buscá-lo no código 
  e alocálo no topo da pilha de execução (call atack), executa=lo e depois removê-lo:
  
  * código começa a ser executado

  CALL_STACK:
    anonymous(contexto de execução)

  * encontrado calculate()

  CALL_STACK:
    calculate()

  * calculate() é executado

  CALL_STACK:
    vazia

*/

// EXEMPLO 2
function sub(num) {
  return num - 2;
}

function calc() {
  const sumTotal = 4 + 5;
  return sub(sumTotal);
}

calc();
/* 
  * código começa a ser executado

  CALL_STACK:
    anonymous(contexto global de execução)

  * encontrado calc(), dentro encontra sub()

  CALL_STACK:
    sub
    calc
    anonymous

  * sub() é executado

  CALL_STACK:
    calc()
    anonymous

  * calc() é executado

  CALL_STACK:
    anonymous

*/
