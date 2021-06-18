// import {
//   initApi,
//   getUsers,
//   createTodo,
//   removeUser,
//   updateUser,
//   createUser,
// } from './api/api-handlers';
// // import { createUser } from './api/api-handlers';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

// const user = {
//   username: 'Alex',
//   age: 31,
//   creationDate: moment().format(),
// };
// const todo = {
//   title: 'bafjn;ksn',
//   creationDate: moment().format('lll'),
//   author: 'Lena',
// };

// // createUser(user);
// // getUsers();
// // createTodo(todo);
// // removeUser();
// updateUser();

// --------------------2-----------------

import './styles/styles.scss';
// import { createPost, initApi } from './api/api-handlers';
// initApi();

// const post_form = document.getElementById('post_form');
// const title_input = document.getElementById('title_input');
// const post_content = document.getElementById('post_content');
// const postsContainer = document.querySelector('.main-content__posts');
// const post = {
//   userId: uuidv4(),
//   name: 'Ivan',
//   email: 'test2@mail.com',
//   data: moment().format(),
//   title: null,
//   content: null,
// };

// post_form.addEventListener('submit', (event) => {
//   title_input.value = null;
//   post_content.value = null;
//   event.preventDefault();
//   post.title = title_input.value;
//   post.content = post_content.value;
//   createPost(post);
// });

// ---------------Home_work-----------------------------
import { createHomeUser, getHomeUser } from './api/api-handlers';

const first_name = document.querySelector('#first_name');
const last_name = document.querySelector('#last_name');
const user_name = document.querySelector('#user_name');
const city = document.querySelector('#city');
const job = document.querySelector('#job');
const post_info = document.querySelector('#post_info');
const get_button = document.querySelector('#get_button');

const user_info = {
  userId: uuidv4(),
  firstName: first_name,
  lastName: last_name,
  userName: user_name,
  city: city,
  job: job,
};

post_info.addEventListener('click', (event) => {
  event.preventDefault();
  createHomeUser(user_info);
});
get_button.addEventListener('click', () => {
  getHomeUser();
});
// console.log(first_name.value);
