var express = require('express');
var router = express.Router();

//Establish connection to mongodb
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get data from form
router.post('/', function (req, res) {
  console.log(req.body.title);
  console.log(req.body.description);

  MongoClient.connect(url, function(err, db){
    db.collection('Employee').insertOne({
      Employeeid: req.body.title,
      EmployeeName: req.body.description
    });
  });

  //Sends to new page test
  //res.send('Post page');
});




module.exports = router;
