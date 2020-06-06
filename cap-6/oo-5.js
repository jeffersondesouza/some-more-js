// ES6

class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return this.name + " Attack with " + this.weapon + "!";
  }
}

const kiki = new Elf("kiki", "fire");

console.log(kiki.attack());
