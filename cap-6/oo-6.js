// Iheritance 1
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    console.log(this.name + " Attack with " + this.weapon + "!");
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  say() {
    console.log(this.type);
  }
}

class Ogre extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
  }
  makeFort() {
    this.attack();
    console.log(this.name + " created  afort!");
  }
}

const kiki = new Elf("kiki", "fire", "light");
const mork = new Ogre("mork", "stone");

kiki.attack();
kiki.say();
mork.makeFort();
