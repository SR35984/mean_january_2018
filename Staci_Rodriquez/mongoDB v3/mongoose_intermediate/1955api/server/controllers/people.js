var Person = require('../models/person')

module.exports = {
	index: (req, res) => {
		Person.find({}, (err, people) => {
			if (err){
				res.json(err);
			}
			return res.json(people);
		});
	},

	show: (req, res) => {
		Person.findOne({name: req.params.name}, (err, person) =>{
			if(err){
				res.json(err);
			}
			return res.json(person);
		});
	},

	create: (req, res) => {
		var person = new Person({name: req.params.name});
		var thing = person.save();

		thing.then((doc) => {
			res.json("added" + doc);
		});

		thing.catch((err) =>{
			res.json(err);
		});
	},

	delete: (req, res) => {
		Person.remove({name: req.params.name}, (err) =>{
			if(err){
				console.log("Could not delete" + err);
			}
			return res.redirect('/');
		});
	}
}