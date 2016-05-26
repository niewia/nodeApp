var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Flawless victory!' });
});

router.get('/zuzia', function(req, res, next) {
  res.render('zuzia', { title: 'Zuzia kochana! <3' });
});

module.exports = router;
