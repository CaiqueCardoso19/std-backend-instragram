const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const mongoServer = 'mongodb+srv://caique:caique1907@cluster0-lleyc.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(mongoServer, {
  useNewUrlParses: true,
});

app.use((req, res, next) => {
  req.io = io;
  next();
})

app.use(cors());

app.use(
  '/files', 
  express.static(
  path.resolve(__dirname, '..', 'uploads', 'resized'))
);

app.use(require('./routes'));

server.listen(3000);
