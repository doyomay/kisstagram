/**
 * Created by Gerardo on 6/13/2015.
 */
var express = require('express');

var app = express();

app.use(require('./controllers/static.js'));

var server = app.listen(80, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);

});
