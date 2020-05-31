var obj1 = {
  name: "Joao",
  say: function (msg) {
    const sayAux = function () {
      console.log(this.name + " says: " + msg);
    };
    return sayAux.bind(this);
  },
};

var obj2 = {
  name: "Maria",
  say: obj1.say,
};

obj1.say("Hello")();
obj2.say("Hi")();
