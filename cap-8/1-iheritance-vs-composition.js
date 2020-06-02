/* 
  Herança: uma superclasse extendida por classes menores, mais especializadas;

  COmposição: Partes menores compondo uma parte maior 

*/

function getAttack(character) {
  return Object.assign({}, character, { attack: () => {} });
}

function Elf(name, weapon, type) {
  const elf = {
    name,
    weapon,
    type,
  };

  return getAttack(elf);
}

const elff = Elf("name", "weapon", "type");
console.log("elff:", elff);
