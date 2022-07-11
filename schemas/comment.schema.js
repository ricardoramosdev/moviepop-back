var mongoose =require('mongoose')
var Schema = mongoose.Schema;



var CommentSchema = new Schema({
    movieID: { type: Number, required: true},
    userID: { type: Number, required: true},
    comment: { type: String, required: true },
    
})

module.exports = mongoose.model('Comment', CommentSchema)
