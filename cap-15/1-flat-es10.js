// Flat

console.log([1, 2, 3, 4, 5].flat()); // [ 1, 2, 3, 4, 5 ]

console.log([1, 2, [3], 4, 5].flat()); // [ 1, 2, 3, 4, 5 ]

console.log([1, [2, [3]], 4, 5].flat()); // [ 1, 2, [3], 4, 5 ]

// É possível especificar a profundidade das camadas a falzer  o flat
console.log([1, [2, [3]], 4, 5].flat(2)); // [ 1, 2, 3, 4, 5 ]

// É possível especificar a profundidade das camadas a falzer  o flat
console.log([1, [2, [3]], [[[4, 5]]]].flat(2)); // [ 1, 2, 3, [4, 5] ]

console.log([1, [2, [3]], [[[4, 5]]]].flatMap((i) => i+1)); // [ 1, 2, 3, [4, 5] ]
