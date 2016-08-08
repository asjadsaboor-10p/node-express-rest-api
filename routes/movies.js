const express = require('express');

module.exports = function(app) {

	var moviesRouter = express.Router();

	moviesRouter.route('/')
		.get((req, res) => {
			res.send('hello world , movies');
		})

	app.use('/movies', moviesRouter);

}