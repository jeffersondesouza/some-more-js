const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Name: ", function (name) {
  console.log("name:", name);
  rl.close();
});

rl.on("close", function () {
  console.log("\nBYE BYE");
  process.exit(0);
});
