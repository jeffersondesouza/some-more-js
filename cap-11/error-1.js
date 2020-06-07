function foo(a, b) {
  return a.name.id
}

function moo(a, b) {
  if (a > b) {
    foo(a, b);
  }
  return a + b;
}

function boo(a, b) {
  return moo(a, b);
}

function exec(fn) {
  return (...args) => Promise.resolve(fn(...args));
}
/* 
exec(boo)(11, 4)
  .then(console.log)
  .catch((err) => {
    console.log(err.stack);
  });
 */

  try {
    exec(boo)(11, 4)
    
  } catch (error) {
    console.log('error:', error.stack)
    
  }