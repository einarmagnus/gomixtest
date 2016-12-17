// Use ES6
"use strict";

// Express & Socket.io deps
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const _ = require('lodash');

/*
 * Serve client
 */
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
 
/*
 * Listen for incoming clients
 */
io.on('connection', (client) => {
  let player;
  let id;

  client.on('auth', (opts, cb) => {
    // Create player
    cb({ id: 3 });
  });

  // Receive keystrokes
  client.on('msg', (msg) => {
    console.log(msg);  
  });

  // Remove players on disconnect
  client.on('disconnect', () => {
    console.log("disconnected")
  });
});


// Main loop
setInterval(() => {
  io.emit('state', {
    hej: "apa"
  });
}, 100);

