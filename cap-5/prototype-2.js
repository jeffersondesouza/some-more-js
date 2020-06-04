// Incrementing a current prototype

// Date.lastYear() nao existe. entao vamos incrementar

Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};
console.log("Date.prototype:", Date.prototype);

console.log(new Date().lastYear());
