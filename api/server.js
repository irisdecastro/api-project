var express = require('express')
var app = express()
const port = 5566;
var cors = require('cors');

app.use(cors({
	origin: 'http://localhost:5555'
	}))

//Add the mongodb configuration
var username = 'admin';
var password = '123456';
var dbHost = 'localhost';
var dbPort = '27017'
var database = 'first_db';

var url = 'mongodb://' + username + ':' + password + '@' + dbHost + ':' + dbPort + '/' + database;

console.log('mongodb url = ' + url);

app.get('/', function(req, res) {
	res.send('Hi! This is the API server.')
})

app.listen(port, function() {
	console.log(`Server running on port ${port}`);
})

