var name = "Window";

function fala () {
  console.log("fala: ", this.name); // depende do escopo de execução
};


var fala = function () {
  console.log("fala: ", this.name); // window
}.bind(this); 

var fala = () => {
  console.log("fala: ", this.name); // window
}; 



var obj = {
  name: "joao",
  fala: fala,
  thiz: this,
  say: function () {
    fala();
    console.log("Say: ", this.name);
    var grito = function () {
      console.log("Grito: ", this.name); // window
    }; // escopo aberto em window

    var grito = function () {
      console.log("Grito: ", this.name); // joao
    }.bind(this); // escopo vinculado ao obj

    var grito = () => {
      console.log("Grito: ", this.name); // joao
    }; // escopo vinculado ao obj

    grito();
  },
};

obj.fala();
obj.say();
