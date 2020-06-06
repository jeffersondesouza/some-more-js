// Object.create

const elfFuntions = {
  attack() {
    return this.name + " Attack with " + this.weapon;
  },
};

function createElf(name, weapon) {
  const newElf = Object.create(elfFuntions);

  newElf.name = name;
  newElf.weapon = weapon;

  return newElf;
}

const peter = createElf("peter", "bowl");
const kiki = createElf("kiki", "fire");

/* console.log(peter.attack());
console.log(kiki.attack());
 */

const IAnimal = {
  live() {
    console.log(this.name);
  },
};

const animal = Object.create(IAnimal);
const person = Object.assign({ name: "joao" }, animal);

person.live();
