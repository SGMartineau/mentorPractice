var express = require('express'),
    bodyParser = require('body-parser'),
    middleware = require('./controllers/middleware.js'),
    mainCtrl = require('./controllers/mainCtrl.js'),
    app = express();



app.use(bodyParser.json());


app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getType);
app.get('/skills', mainCtrl.getSkills);


app.put('/name', mainCtrl.putName);
app.put('/location', mainCtrl.putLocation);


app.post('/hobbies', mainCtrl.postHobbie);
app.post('/occupations', mainCtrl.postOccupation);
app.post('/skills', middleware.generateId, mainCtrl.postSkills);

app.listen(8000);