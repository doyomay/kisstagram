/**
 * Created by Gerardo on 6/13/2015.
 */
var express = require('express');
var router = require('express').Router();

router.use(express.static(__dirname + '/../templates'));
router.use(express.static(__dirname + '/../assets'));

var options_layouts = {
	root: 'layouts',
	dotfiles: 'deny',
	headers: {
		'x-timestamp': Date.now(),
		'x-sent': true
	}
};

router.get('/', function (req, res, next) {
	res.sendFile('app.html', options_layouts, function (err) {
		if (err) {
			next(err);
		}
	});
});
router.get('/upload', function (req, res, next) {
	res.sendFile('app.html', options_layouts, function (err) {
		if (err) {
			next(err);
		}
	});
});

module.exports = router;
