const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//import the route
const sample = require('./routes/sample.route')

//initializes the app
const app = express();

//connect to MongoDB
let dev_db_url = 'mongodb+srv://mukti:Password@cluster0-06o78.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MongoDB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error with MongoDB: '));

//this is important
//wherever you see .use(), then it is middelware express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/sample', sample);

//designate the port
let port = 8181;
app.listen(port, ()=>{
    console.log('Server up and running on port: ', + port)
});