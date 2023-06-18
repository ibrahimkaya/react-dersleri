import axios from "axios";
//ctrl + k + c comment
//ctrl + k + u uncomment
// const fetchFunc = async function getData() {
//     axios('https://jsonplaceholder.typicode.com/todos/1')
//     .then(jsonData => console.log(jsonData.data));
//     console.log("fetchden sonra")

//     const {data: post2} = await axios('https://jsonplaceholder.typicode.com/todos/1');

//     console.log(post2);
// }

// setTimeout(fetchFunc, 2000);

const getComments = () => {
  return new Promise((resolve, reject) => {
    console.log("acbc");
    resolve("gönderdiğim data");
  });
};

getComments()
  .then((data) => console.log("cagirim bitti" + data))
  .catch((e) => console.log(e));
