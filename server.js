var express = require('express');
var app = express();
var _ = require('underscore');

app.use(express.logger());
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded());

var things = [
	{ id: 1, floop: 'floppity' },
	{ id: 2, floop: 'ploppity' },
	{ id: 3, floop: 'boppity' },
	{ id: 4, floop: 'moppity' }
];

app.get('/api/things', function(req, res) {
	res.send(things);
});

app.get('/api/things/:id', function(req, res) {
	var id = req.params.id;
	var match = _.find(things, function(thing) {
		return thing.id == id;
	});
	if (match) {
		res.send(match);
	} else {
		res.send(404);
	}
});

app.del('/api/things', function(req, res) {
	res.send(200);
});

app.listen(1337);

module.exports = app;