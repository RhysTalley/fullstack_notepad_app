const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const noteRoutes = require('./routes/note-routes');

const app = express(); // constructor

mongoose.connect(process.env.MONGO_DB_URI);

app.use(cors()); // tells server to always use cors when a request is made
app.use(express.json());

app.use('/notes', noteRoutes);

app.get('/', (req, res) => { // set a response for the default page. in this case, send "hello world"
    res.json({message: 'API works'}); // we want to send our data in JSON format
});

app.listen(8000, () => { // tell the server to listen on port 6000
    console.log('server is running on port 8000')
});