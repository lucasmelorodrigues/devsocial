const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express ();

mongoose.connect('mongodb+srv://caslu:caslu@cluster0-2pef9.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);