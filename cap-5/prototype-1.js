// Limited charing

const dragon = {
  name: "Drogo",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    return `I'm ${this.name}, the master of firer`;
  },
};

console.log("dragon damage: ", dragon.fight());
console.log(dragon.sing());

const lizardKiki = {
  name: "Kiki",
  fight() {
    return 5;
  },
};

console.log("kiki damage: ", lizardKiki.fight());
console.log(dragon.sing.bind(lizardKiki)());

/* Melhor se herdassemos de form mais racional, pois posso matar o proto do pai */
lizardKiki.__proto__ = dragon;
console.log(lizardKiki.sing());
console.log(dragon.isPrototypeOf(lizardKiki));

for (const prop in lizardKiki) {
  console.log("prop 1:", prop); // name, fire, fight, sing

  if (lizardKiki.hasOwnProperty(prop)) {
    //  fire, sing nao aparecem pois nao ertence a lizzarKiki
    console.log("prop 2:", prop); // name, fight,
  }
}

//  matando o proto do pais
lizardKiki.__proto__.sing = () => console.log("damn");

console.log(lizardKiki.sing()); // undefined

console.log(dragon.sing());
undefined;
