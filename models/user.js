/*Defined the user schema and model to call this in other files add these lines to the top
 *var mongoose = require('mongoose');
 *var User = mongoose.model("User");
 *var models = require('./models/user.js'); <--- needs directory path to be relative from the document that is invoking
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Requires a unique username.
//Also requires a password and email.
var User = new Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    totalLikes: Number
});

mongoose.model("User", User);