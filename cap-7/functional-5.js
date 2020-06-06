// Memorization

function addTo80(a) {
  console.log("addTo80", a);
  return 80 + a;
}

// Chama tres vezes a mesma função
console.log(addTo80(1));
console.log(addTo80(1));
console.log(addTo80(1));

// Cahed version

  function memorizedAddTo80(a) {
  cache = {};
  if (a in cache) {
    return cache[a];
  } else {
    console.log("addTo80 memo", a);

    cache[a] = a + 80;
    return cache[a];
  }
}

console.log(memorizedAddTo80(1));
console.log(memorizedAddTo80(1));
console.log(memorizedAddTo80(1));
