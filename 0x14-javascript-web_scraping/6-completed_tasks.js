#!/usr/bin/node

// a script to count items from an API call

const request = require('request');
const url = process.argv[2];
request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const todos = JSON.parse(body);
  const completed = {};
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    if (todo.completed && completed[todo.userId] === undefined) {
      completed[todo.userId] = 1;
    } else if (todo.completed) {
      completed[todo.userId] += 1;
    }
  }
  console.log(completed);
});

