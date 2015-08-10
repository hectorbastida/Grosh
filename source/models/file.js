var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var fileSchema = new Schema({
    content      :{type:String},
    name         :{type:String},
    user_creator :{type:String,required:true},
    url_file     :{type:String},
    status       :{type:Boolean,required:true,default:true},
    create_date  :{type:Date,required:true},
    answer       :{type:Array},
    group        :{type:String}
});

var File = mongoose.model('file', fileSchema);

module.exports = File;