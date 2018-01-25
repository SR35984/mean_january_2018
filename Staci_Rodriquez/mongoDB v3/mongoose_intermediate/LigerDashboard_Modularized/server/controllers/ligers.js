var Liger = require('../models/liger');

module.exports = {
	index: (req,res) => {
		Liger.find({}, (err, ligers) => {
			res.render('index', {ligers: ligers});
		});
	},

	new: (req,res) => {
		res.render('new');
	},

	create: (req,res) => {
		var liger = new Liger(req.body);
		liger.save((err) => {
			res.redirect('/');
		});
	},

	show: (req,res) => {
		Liger.findOne({_id: req.params.id}, (err, liger) => {
			res.render('show', {liger: liger});
		});
	},

	edit: (req,res) => {
		Liger.findOne({_id: req.params.id}, (err, liger) => {
			res.render('edit', {liger: liger});
		});
	},

	update: (req,res) => {
		Liger.update({_id: req.params.id}, req.body, (err, result) => {
			res.redirect('/');
		});
	},

	delete: (req,res) => {
		Liger.remove({_id: req.params.id}, (err, liger) =>{
			res.redirect('/');
		});
	}
}