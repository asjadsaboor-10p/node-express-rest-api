const express = require('express');

module.exports = function(app) {

	var bookRouter = express.Router();

	bookRouter.route('/')
		.get((req, res) => {
			res.send('hello world books');
		})

	app.use('/books', bookRouter);

}