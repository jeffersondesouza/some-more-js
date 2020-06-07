// Spred Operator

const animals = {
  tiger: "tiger",
  monkey: "monkey",
  lion: "lion",
};

const { tiger, ...rest } = animals;
console.log("rest:", rest);
console.log("tiger:", tiger);


