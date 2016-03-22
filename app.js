var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Make connection to mongodb
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';
var str="";


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
//Cursor iterates through all employees
//Find specifies that we want to retrieve all documents from collection
MongoClient.connect(url, function(err, db){
    var cursor = db.collection('Employee').find();

    cursor.each(function(err, doc){
        console.log(doc);
    });
});*/

/*//Inserting document into collection
MongoClient.connect(url, function(err, db){
    db.collection('Employee').insertOne({
        Employeeid: 4,
        EmployeeName: "NewEmployee"
    });
});*/

/*
//Updating document in database
MongoClient.connect(url, function(err,db) {
    db.collection('Employee').updateOne(
        {"EmployeeName": "NewEmployee"},
        {
            $set: {"EmployeeName": "Mohan"}
        }
    );
});*/

/*
//Deleting document
MongoClient.connect(url, function(err, db){
    db.collection('Employee').deleteOne(
        {"EmployeeName" : "Mohan"}
    );
});*/

/*//Get all records in employee collection and work with them
app.route('/Employeeid').get(function(req,res){
    MongoClient.connect(url, function(err, db){
        var cursor = db.collection('Employee').find();

        cursor.each(function(err, item){
            if(item != null){
                str = str + "&nbsp;&nbsp;&nbsp;&nbsp;Employee id&nbsp;&nbsp;" + item.Employeeid + "</br>";
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
