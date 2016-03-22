var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Getting mongoose and user model
var models = require('./models/user.js');
var mongoose = require('mongoose');
var User = mongoose.model("User");

/*//Make connection to mongodb
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/TestDB';
var str="";*/

//Mongoose connection to db and add new document of User model

//var newUser = new User({userName: 'Laurence2', password: '12345', email: 'hotmail@gmail.com', totalLikes: '33'  });

/*mongoose.connect('mongodb://localhost/TestDB', function(err) {
    if (err) throw err;
    else
        console.log("connected");
        newUser.save(function (err) {
            if (err) return handleError(err);
            console.log("saved");
        })
});*/


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/*//Testing Connection to mongodb prints connected if succesfully connected to mongodb
MongoClient.connect(url, function(err, db){
  console.log("connected");

    db.close();
});*/

/*
//Testing Querying the mongo database and prints all documents in cmd prompt
//Cursor iterates through all users
//Find specifies that we want to retrieve all documents from collection
MongoClient.connect(url, function(err, db){
    var cursor = db.collection('Users').find();

    cursor.each(function(err, doc){
        console.log(doc);
    });
});*/

/*//Inserting document into normal mongo collection
MongoClient.connect(url, function(err, db){
    db.collection('Users').insertOne({
        UserName: newUser,
        Email: "NewUser@gmail.com"
    });
});*/


/*
//Updating document in database
MongoClient.connect(url, function(err,db) {
    db.collection('Users').updateOne(
        {"UserName": "NewUser"},
        {
            $set: {"UserName": "Godzilla"}
        }
    );
});*/

/*
//Deleting document
MongoClient.connect(url, function(err, db){
    db.collection('Users').deleteOne(
        {"UserName" : "Godzilla"}
    );
});*/

/*//Get all records in user collection and work with them
app.route('/UserName').get(function(req,res){
    MongoClient.connect(url, function(err, db){
        var cursor = db.collection('Users').find();

        cursor.each(function(err, item){
            if(item != null){
                str = str + "&nbsp;&nbsp;&nbsp;&nbsp;User Name&nbsp;&nbsp;" + item.UserName + "</br>";
            }
        });

        res.send(str);
    });
});*/




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
