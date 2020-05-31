var obj1 = {
  name: "Joao",
  say: function () {
    return function () {
      console.log(this);
    };
  },
};

var obj2 = {
  name: "Maria Bind",
  say: function () {
    return function () {
      return () => {
        console.log(this);
      };
    }.bind(this);
  },
};

obj1.say()(); // .say() -> joao , ()-> winddow
obj2.say()()();
