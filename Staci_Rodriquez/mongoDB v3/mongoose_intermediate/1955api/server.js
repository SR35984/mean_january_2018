var express = require('express'),
	app = express(),
	path = require('path'),
	port = 6789,
	routes = require('./server/config/routes.js');

require('./server/config/mongoose.js');

routes(app);

app.listen(6789, function() {
	console.log(`running on port ${port}`);
})