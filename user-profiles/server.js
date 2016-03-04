var express = require('express'),
    expressSession = require('express-session'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    config = require('./server.js')
    corsOptions = { origin: 'http://localhost:8000' };


app.use(bodyParser.json());
app.use(cors(corsOptions));







app.listen(8000, function () {
    console.log('listening on port 8000');
});