var express = require('express'),
    bodyParser = require('body-parser'),
    _ = require('lodash'),
    app = express(),
    port = 8000;


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.listen(port, function () {
	console.log('Listening on port', port);
});