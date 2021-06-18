import firebase from 'firebase/app';
import { FIREBASE_CONFIG, databaseURL } from './api-config.js';

export const initApi = () => {
  firebase.initializeApp(FIREBASE_CONFIG);
};

const headers = {
  'Content-Type': 'application/json',
};

// export const createUser = ({ username, age, creationDate }) => {
//   fetch(`${databaseURL}/users.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username,
//       age,
//       creationDate,
//     }),
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// };

// export const getUsers = () => {
//   fetch(`${databaseURL}/users.json`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       const transfotmedArrUsers = Object.keys(result).map((key) => ({
//         ...result[key],
//         id: key,
//       }));
//       console.log(transfotmedArrUsers);
//     });
// };

// export const createTodo = ({ title, creationDate, author }) => {
//   fetch(`${databaseURL}/todos.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       title,
//       creationDate,
//       author,
//     }),
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// };

// export const removeUser = () => {
//   fetch(`${databaseURL}/users/-McBCPBHxsxUO8FJsYmo.json`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// };

// export const updateUser = () => {
//   fetch(`${databaseURL}/users/-McBCUVt88RvNjRMndIq.json`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username: 'Aliaksey',
//       age: 31,
//       creationDate: 'njbzifdnb',
//     }),
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// };

// export const createPost = (post) => {
//   const { userId, name, email, data, title, content } = post;
//   fetch(`${databaseURL}/posts.json`, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({
//       userId,
//       name,
//       email,
//       data,
//       title,
//       content,
//     }),
//   });
// };

// export const getPost = () => {
//   fetch
// }

// ---------------Home_work-------------------------

export const createHomeUser = (user) => {
  const { userId, firstName, lastName, userName, city, job } = user;
  fetch(`${databaseURL}/homeUsers.json`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      userId,
      firstName: firstName.value,
      lastName: lastName.value,
      userName: userName.value,
      city: city.value,
      job: job.value,
    }),
  });
};

export const getHomeUser = () => {
  fetch(`${databaseURL}/homeUsers.json`, {
    method: 'GET',
    headers,
  })
    .then((respons) => respons.json())
    .then((result) => {
      const transfotmedArrUsers = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      console.log(transfotmedArrUsers);
    });
};
