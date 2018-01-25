var express = require("express"),
	app = express(),
	mongoose = require('mongoose'),
	session = require('express-session'),
	path = require("path"),
	bodyParser = require('body-parser'),
	port = 6789;

app.use(express.static(path.join(__dirname, '/static')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: 'secretpassword',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));

mongoose.connect('mongodb://localhost/message_board');

var Schema = mongoose.Schema;

var Message = mongoose.model('Message', new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required."]
	},
	message: {
		type: String,
		required: [true, "Message is required."]
	},
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {usePushEach: true, timestamps: true}));

var Comment = mongoose.model('Comment', new mongoose.Schema({
	name: {
		type: String,
	},
	_message: {type: Schema.Types.ObjectId, ref: 'Message'},
	comment: {type: String, required: true},
}, {usePushEach: true, timestamps: true}));

app.get('/', (req, res) => {
	Message.find({})
	.populate('comments')
	.exec((err, messages) =>{
		res.render("index", {messages: messages});
	});
});


app.post('/message', (req, res) => {
	var message = new Message(req.body);
	message.save(function(err){
	if(err){
		console.log(message.errors);
		res.redirect('/');
		}
	else{
		res.redirect('/');
	}
	});
});

app.post('/messages/:id',(req, res) => {
	Message.findOne({_id: req.params.id}, (err, message) => {
		var comment = new Comment(req.body);
		comment._message = message._id;
		comment.save(function(err){
		message.comments.push(comment._id);
			if (err){
			console.log('comment error')
			}
			console.log(message);
		message.save(function(err){
			if(err){
			console.log(err);
			}
		});
		res.redirect('/');
		});
	});
});

app.listen(6789, () => {
	console.log(`running on port ${port}`);
})