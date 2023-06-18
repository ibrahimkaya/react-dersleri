import axios from "axios";

const getUserBaseUrl = "https://jsonplaceholder.typicode.com/users/";
const getUserPostsBaseUrl =
  "https://jsonplaceholder.typicode.com/posts?userId=";

const getData = (userId) => {
  return fetchUser(userId);
};

const fetchUser = async (userId) => {
  const userData = await axios
    .get(getUserBaseUrl + userId)
    .then((response) => response.data);

  const userPostList = await axios
    .get(getUserPostsBaseUrl + userId)
    .then((response) => response.data);

  return appendUserData(userData, userPostList);
};

const appendUserData = (userData, postList) => {
  return { userData, posts: postList };
};

export default getData;
