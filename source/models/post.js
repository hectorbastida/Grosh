var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var childSchema = new Schema({ name: 'string' });

var postSchema = new Schema({
    content      :{type:String,required:true},
    user_creator :{
    	id : {type:String},
    	name: {type:String},
    	last_name : {type:String},
    	url_image : {type:String}
    },
    status       :{type:Boolean,required:true,default:true},
    create_date  :{type:Date,required:true},
    answers      :{type:Array},
    group        :{type:String}
});

var Post = mongoose.model('post', postSchema);

module.exports = Post;