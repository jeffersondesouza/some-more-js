//Prmise all
const URLS = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = (url) => fetch(url).then((res) => res.json());

// Not so async
getData(URLS[0]).then(console.log);
getData(URLS[1]).then(console.log);
getData(URLS[2]).then(console.log);

Promise.all([getData(URLS[0]), getData(URLS[1]), getData(URLS[2])]).then(
  (arrRes) => {
    console.log(arrRes);
  }
);

Promise.all(URLS.map((url) => getData(url)))
  .then((arrRes) => {
    console.log(arrRes);
  })
  .catch(console.log);

// Queremos contar o lenth de todos os endpoints juntos
Promise.all(URLS.map((url) => getData(url)))
  .then((arrs) => arrs.map((arr) => arr.length))
  .then((arrs) => arrs.reduce((r, a) => r + a))
  .then((arrRes) => {
    console.log("total size: ", arrRes);
  })
  .catch(console.log);

const getAllData = async () => {
  try {
    const [users, comments, albums] = await Promise.all(
      URLS.map((url) => getData(url))
    );
    return { users, comments, albums };
  } catch {
    console.log("erro");
  }
};

getAllData();
