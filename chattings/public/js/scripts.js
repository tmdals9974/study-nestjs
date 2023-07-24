const socket = io('chattings');

const getElementById = (id) => document.getElementById(id) || null;

//* get DOM element
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

function helloUser() {
  const username = prompt('What is your name?');
  socket.emit('new_user', username, (data) => console.log(data)); //이벤트명, 파라미터, 콜백함수
  socket.on('hello_user', (data) => console.log(data));
}

function init() {
  helloUser();
}

init();
