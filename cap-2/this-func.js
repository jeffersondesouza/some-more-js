var name = "ok";

function falar(complement) {
  console.log("fale de novo:", this.name + (complement || ""));
}

var obj = {
  name: "joao",
  say: function () {
    console.log("fale: ", this.name);
  },
  sayAgain: falar,
};

obj.say();
obj.sayAgain("!!!");

/* console.log(this);

function a() {
  console.log(this);
}

function b() {
  console.log(this);
}


a();

new b(); */
