//Defined the comments schema and model to call this in other files add these lines to the top
//var mongoose = require('mongoose');
//var User = mongoose.model("Comments");
//var models = require('./models/comments.js'); <--- needs directory path to be relative from the document that is invoking

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Each comment must be tied to a user
//Each comment must be tied to either a submission or a improvement
var Comments = new Schema({
    likes: Number,
    body: String,
    submissions: [{type: Schema.Types.ObjectId,
        ref: 'Submissions'}],
    improvements: [{type: Schema.Types.ObjectId,
        ref: 'Improvements'}],
    postedBy: [{type: Schema.Types.ObjectId,
        ref: 'User',
        required: true}]
});

mongoose.model("Comments", Comments);