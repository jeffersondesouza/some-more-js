// string.padStart()  string.padEnd() - Adicional espaço no início ou fim de string

console.log("joao".padStart(10));
console.log("joao".padEnd(10));

// Object.entries Objects.values
// Substituem em muitos casos o Object.keys

// Ex1: Criar um array a partir de um objeto

const data = { user1: "joao", user2: "Maria", user3: "ze" };

// BEFORE
const users1 = Object.keys(data).map((key) => data[key]);

console.log(users1);

// NOW - .values remove os keys
const users2 = Object.values(data);

console.log(users2);

const usuario = {
  id: 1,
  nome: "maria",
  endereco: {
    rua: "rua tal",
  },
};

/* 
  Maybe(usuario)
  .map((usuario) => usuario.endereco)
  .map((rua) => endereco.rua)
  .get("nao encontramos");
 */
