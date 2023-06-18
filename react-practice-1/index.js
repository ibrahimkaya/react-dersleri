import getData from "./app.js";

const userId = 1;
const data = await getData(userId);
console.log(data);
