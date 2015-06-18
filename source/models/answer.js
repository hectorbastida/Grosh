var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var answerSchema = new Schema({
	content      :{type:String,required:true},
	user_creator :{type:String,required:true},
	status       :{type:Boolean,required:true},
	date_hour    :{type:Date,required:true}
})

var Answer = mongoose.model('answer',answerSchema);

module.exports = Answer;	 
