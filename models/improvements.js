//Defined the improvements schema and model to call this in other files add these lines to the top
//var mongoose = require('mongoose');
//var User = mongoose.model("Improvements");
//var models = require('./models/improvements.js'); <--- needs directory path to be relative from the document that is invoking

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Each improvement must be tied to a user objectID.
// Each improvement must be tied to a submission objectID.
var Improvements = new Schema({
    likes: Number,
    title: String,
    body: String,
    submissions: [{type: Schema.Types.ObjectId,
        ref: 'Submissions',
        required: true}],
    postedBy: [{type: Schema.Types.ObjectId,
        ref: 'User',
        required: true}]
});

mongoose.model("Improvements", Improvements);