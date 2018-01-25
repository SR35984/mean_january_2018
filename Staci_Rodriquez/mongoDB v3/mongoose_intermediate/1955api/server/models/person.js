var mongoose = require('mongoose');

module.exports = mongoose.model('Person', new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required."]
	}}, {timestamps: true}));
