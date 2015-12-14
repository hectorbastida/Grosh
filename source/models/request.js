var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var requestSchema = new Schema({
    id_group       :{type:String,required:true},
    from_user      :{type:String,required:true},
    to_user        :{type:String},
    create_date    :{type:Date,required:true},
    status         :{
                        type:String,
                        enum:[
                            'En espera',
                            'Aceptada',
                            'Declinada'
                        ],
                        required:true
                    }
});

var Request = mongoose.model('request',requestSchema);

module.exports = Request;