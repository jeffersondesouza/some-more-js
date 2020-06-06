// funções contrutoras - part 1
// Sepradndo as funções

function elfFuntions() {
  return {
    attack() {
      return this.name + " Attack with " + this.weapon;
    },
  };
}

function createElf(name, weapon) {
  return {
    name,
    weapon,
  };
}

const peter = createElf("peter", "bowl");
const kiki = createElf("kiki", "fire");


/* Not so reusable let' to part 3*/
peter.attack = elfFuntions().attack;
kiki.attack = elfFuntions().attack;

console.log(peter.attack());
console.log(kiki.attack());
