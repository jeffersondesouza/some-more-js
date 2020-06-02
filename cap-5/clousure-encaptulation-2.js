const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("Im th e index: ", i);
  }, 100);
}

/* setTimeout i=0,setTimeout i=1,setTimeout i=2,setTimeout i=3,,setTimeout i=4 */

// let permite o uso de block scoping, assim i nao vai ser sobreescritos
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("Im th e index: ", i);
  }, 100);
}

/* setTimeout i=0,setTimeout i=1,setTimeout i=2,setTimeout i=3,,setTimeout i=4 */

/* com uma IIEF tb resolve, pois o valor de i que entra na função nao pe smais removido do 
escopo global
*/
for (var i = 0; i < array.length; i++) {
  (function () {
    setTimeout(function () {
      console.log("Im th e index: ", i);
    }, 100);
  })();
}
