//Defined the comments schema and model to call this in other files add these lines to the top
//var mongoose = require('mongoose');
//var User = mongoose.model("Improvements");
//var models = require('./models/submissions.js'); <--- needs directory path to be relative from the document that is invoking

// Each submission must be tied to a user
var Submissions = new Schema({
    categories: String,
    likes: Number,
    title: String,
    body: String,
    postedBy: [{type: Schema.Types.ObjectId,
        ref: 'User',
        required: true}]
});

mongoose.model("Submissions", Submissions);