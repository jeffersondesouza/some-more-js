/* Usando encapsulamento com clousere para garantir que um trecho do código so possa
ser chamado uma vez */

const msg = "Plese, callme once";

// BAD - it do not avoid nothing
function printMsg() {
  console.log(msg);
}

// GOOD - ensure call just onces
function printMsg2() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    }
    called++;
    console.log(msg + "!");
  };
}

const printMsgOnce = printMsg2();

printMsg();
printMsg();
printMsg();

printMsgOnce();
printMsgOnce();
printMsgOnce();
printMsgOnce();
