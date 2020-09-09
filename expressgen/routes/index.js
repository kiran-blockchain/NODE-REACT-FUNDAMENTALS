var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let data = [{
    name: "Kiran",
    age: 30,
    salary: 40000
  },
  {
    name: "Ravi",
    age: 40,
    salary: 50000
  },

  ]
  res.render('index', {
    title: 'Express',
    myName: "Kiran", 
    users: data
  });
});

module.exports = router;
