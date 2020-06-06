// simpçe

function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return "Attack with " + weapon;
    },
  };
}
const peter = createElf("peter", "bowl");
const kiki = createElf("kiki", "fire");

console.log(peter.attack());
console.log(kiki.attack());
