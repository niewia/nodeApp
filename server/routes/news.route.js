var express = require('express');
var router = express.Router();
var newsService = require('../services/news.service');

/* GET news listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource');
});

router.post('/', function(req, res, next) {
	newsService.add(req.body).then(function(result) {
		console.log(result);
		res.json(result);
	}, function(error) {
		res.json(error);
	})
  
});

module.exports = router;
