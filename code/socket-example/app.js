const express = require('express');
const http = require('http');
const app = express();

console.log('Starting up.');

const server = http.createServer(app);

const { Server } = require('socket.io');
const socketServer = new Server(server);

app.get('/', (req, res) => res.sendFile(__dirname + '/html/index.html'));

const presences = [];

socketServer.on('connection', socket => {
    console.log('A connection!');

    presences.push(socket);

    // listen for disconnect
    socket.on('disconnect', () => {
        console.log('A disconnection.');

        presences.splice(presences.indexOf(socket), 1);
    });
});

const port = 1337;
server.listen(port, () => console.log(`Listening on port ${port}.`));
