var express = require("express"),
	app = express(),
	routes = require('./server/config/routes'),
	port = 6789,
	path = require("path"),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	session = require('express-session');
	
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/client/views'));
app.use(express.static(path.join(__dirname, '/client/static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: 'secretpassword',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));

mongoose.connect('mongodb://localhost/liger_dashboard')

routes(app);

app.listen(6789, function() {
	console.log(`running on port ${port}`);
})