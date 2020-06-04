/* Nao é mais necessário colocar o error no catch */

// BEFORE
try {
  bob + 1;
} catch (error) {
  // error tinha que ser definido, e as vezesnao era utilizado
  console.log("error, Ops!");
}

try {
  bob + 1;
} catch {
  // Erro é opcional
  console.log("Ops!");
}
