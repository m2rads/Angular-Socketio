import { io } from 'socket.io-client';

const URL = 'http://localhost:8080';
const socket = io(URL, { autoConnect: false });

// good for development, any event recieved will be printed out to the console
socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
