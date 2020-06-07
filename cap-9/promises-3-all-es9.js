//- Finally - sempre sera chamado
// for await - loop num array de promises no asyn await
const URLS = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = (url) => fetch(url).then((res) => res.json());

/* Nomal for Promise.all */
Promise.all(URLS.map((url) => getData(url)))
  .then(([users, comments, albums]) => {
    console.log({ users, comments, albums });
  })
  .catch(console.log)
  .finally((data) => console.log("Extra"));

/* for await  */
const getAllData = async () => {
  const arrayOfPromises = URLS.map((url) => getData(url));
  for await (let data of arrayOfPromises) {
    console.log("data:", data);
  }
};

getAllData();
