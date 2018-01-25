var mongoose = require('mongoose');

module.exports = mongoose.model('Liger', new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required."]
	},
	age: {
		type: Number,
		required: [true, "Age is required."]
	},
	color: {
		type: String,
		required: [true, "Color is required."]
	}
}));