// Memory heap allocate memory for each human infomrations
var human = {
  name: "joao",
  id: 1,
  age: 23,
};

/* 
 MEMORY_HEAP:
  - human
  - human.name
  - human.id
  - human.age
*/

human = 5;

function calculate() {
  return human;
}

/* 
 MEMORY_HEAP:
  - human
  - human.name (sem referência)
  - human.id (sem referência)
  - human.age (sem referência)
  - calculate
*/

calculate();
/* 
  Na execução, o valor de human(alterado), foi utilizado em calculte() porém as informações 
  anteriores que estão na memória não foram usadas, logo todo esse fragmento é removido:
*/

/*
 MEMORY_HEAP:
  - human
  - calculate
*/
