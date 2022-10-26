var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var num1 = Math.random() *10;
  var num2 = Math.random() *10;
  var num3 = Math.random() *10;

  var cos = Math.cos(num1);
  var sin = Math.sin(num2);
  var asinh = Math.asinh(num3);

  res.render('computation', { title: 'Jeevan Kumari Chevula', 
  num1:num1,
  num2:num2,
  num3:num3,
  cos:cos,
  sin:sin,
  asinh:asinh
});

});

module.exports = router;
