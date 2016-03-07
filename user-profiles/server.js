var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    config = require('./config.js'),
    userCtrl = require('./controllers/userCtrl.js'),
    profileCtrl = require('./controllers/profileCtrl.js'),
    corsOptions = { origin: 'http://localhost:8000' };

console.log(__dirname);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.populateFriends);



app.listen(8000, function () {
    console.log('listening on port 8000');
});