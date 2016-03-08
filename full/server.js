var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    foodCtrl = require('./controllers/foodCtrl')
    port = 8090,
    app = express(),
    mongoUri = 'mongodb://localhost:27017/menu';

app.use(bodyParser.json());   //creating req.body for us, makes it easier to handle data
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/api/food', foodCtrl.getFood);
app.get('/api/food/review', foodCtrl.getOneReview);
app.post('/api/food', foodCtrl.addFood);
app.post('/api/food/review', foodCtrl.addReview);

app.listen(port, function () {
    console.log('listening on port ' + port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connected to MongoD at ' + mongoUri);
});