import app from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io'; //replaces (import socketIo from 'socket.io')

const httpServer = createServer(app);
const io = new Server(httpServer, {cors: {origin: '*'}});

io.on('connection', (socket) => {
  console.log('new client connected', socket.id);

  socket.on('user_join', (name) => {
    console.log('A user joined their name is ' + name);
    socket.broadcast.emit('user_join', name);
  });

  socket.on('message', ({name, message}) => {
    console.log(name, message, socket.id);
    io.emit('message', {name, message});
  });

  socket.on('disconnect', () => {
    console.log('Disconnect Fired');
  });
});

httpServer.listen(4000, () => {
  console.log(`listening on *:${4000}`);
});
