// Parallel
// sequencial
// race

const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(item);
    }, delay)
  );

const a = () => promisify("a", 1000);
const b = () => promisify("b", 700);
const c = () => promisify("c", 1000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `Parallel: ${output1} - ${output2} - ${output3}`;
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `Race winner: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  console.log("output1:", output1);
  const output2 = await b();
  console.log("output2:", output2);
  const output3 = await c();
  console.log("output3:", output3);

  return `sequence: ${output1} - ${output2} - ${output3}`;
}

console.log("Init");
race().then(console.log);
sequence().then(console.log);
parallel().then(console.log);