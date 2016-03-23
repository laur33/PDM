var express = require('express');
var router = express.Router();


//Getting mongoose and user model
var models = require('../models/user.js');
var mongoose = require('mongoose');
var User = mongoose.model("User");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PDM Project' });
});

//Get data from the form. Prints to console and inserts into database
router.post('/', function (req, res) {
  console.log(req.body.UserName);
  console.log(req.body.Password);
  console.log(req.body.Email);

  //Connect via mongoose and save a new user as added on localhost:3000 to mongodb
  mongoose.connect('mongodb://localhost/TestDB', function(err) {
    if (err) throw err;
    else
      var newUser = new User({userName: req.body.UserName, password: req.body.Password, email: req.body.Email });
      newUser.save(function (err) {
        if (err) return handleError(err);

        console.log("saved");
    })


  });


  //Sends to new page test
  //res.send('Post page');
});




module.exports = router;
