var name = 'Ze';

function fale() {
  console.log("fale: ", this.name);
}

var obj = {
  name: "joao",
  say: function () {
    console.log("say: ", this.name);
  },
  fale,
};

var obj2 = {
  name: "maria",
  say: obj.say.bind(this),
  fale,
};

obj.say();
obj2.say();
obj.fale();
obj2.fale();
