var ligers = require('../controllers/ligers.js');

module.exports = function(app){

	app.get('/', (req,res) => {
		ligers.index(req,res);
	});

	app.get('/ligers/new', (req,res) => {
		ligers.new(req,res);
	});

	app.post('/ligers', (req,res) => {
		ligers.create(req,res);
	});

	app.get('/ligers/:id', (req,res) => {
		ligers.show(req,res);
	});

	app.get('/ligers/edit/:id', (req,res) => {
		ligers.edit(req,res);
	});

	app.post('/ligers/:id', (req,res) => {
		ligers.update(req,res);
	});

	app.post('/ligers/destroy/:id', (req,res) => {
		ligers.delete(req,res);
	});
}
