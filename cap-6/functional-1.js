const sequence = (...fns) => (params) => fns.map((fn) => fn(params));

const user = { id: 1 };

const save = (data) => console.log("save: ", data);
const print = (data) => console.log("print: ", data);

sequence(save, print)(user);
