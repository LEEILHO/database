var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'login' });
});
router.get('/sign_up', function(req, res, next) {
  res.render('sign_up', { title: 'signup' });
});


module.exports = router;
