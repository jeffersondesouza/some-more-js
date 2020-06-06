// funções contrutoras - part 4
// Old waybefore Object.Create

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function () {
  return this.name + " Attack with " + this.weapon;
};

const kiki = new Elf("kiki", "fire");

console.log(kiki.attack());


