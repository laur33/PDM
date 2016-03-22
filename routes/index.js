var express = require('express');
var router = express.Router();

//Establish connection to mongodb
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/TestDB';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get data from. Prints to console and inserts into database
router.post('/', function (req, res) {
  console.log(req.body.UserName);
  console.log(req.body.Email);

  MongoClient.connect(url, function(err, db){
    db.collection('Users').insertOne({
      UserName: req.body.UserName,
      email: req.body.Email
    });
  });

  //Sends to new page test
  //res.send('Post page');
});




module.exports = router;
