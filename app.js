const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
    useMongoClient: true
});

//On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database at '+config.database);
});

//On Error
mongoose.connection.on('error', (err) => {
    console.log('Database Error: '+err);
});

const app = express();
const users = require('./routes/users');
const clients = require('./routes/clients');

//Port Number
const port = process.env.PORT || 8080;

//CORS Middleware
app.use(cors()); 

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Routes
app.use('/users', users);
app.use('/clients', clients);

//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.all('/*', (req, res, next) => {
    res.sendFile('public/index.html', {root: __dirname});
});

//Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
});

