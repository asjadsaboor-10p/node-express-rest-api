const express = require('express'),
	mongoose = require('mongoose'),
	app = express(),
	connection = connect();

mongoose.Promise = global.Promise;

//bootstrapping
require('./bootstrap/express')(app);
require('./routes')(app);



//create mongodb connection
connection
	.on('error', console.log)
	.on('disconnected', connect)
	.once('open', listen);


function listen() {
	app.listen(3000, function() {
		console.log('server is running on port ', 3000);
	})
}

function connect() {
	var options = {
		server: {
			socketOptions: {
				keepAlive: 1
			}
		}
	};
	var connection = mongoose.connect('mongodb://localhost:27017/bookAPI', options).connection;
	return connection;
}

app.get('/', (req, res) => res.send('Welcome'))