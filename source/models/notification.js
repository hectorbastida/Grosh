var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var notificationSchema = new Schema({
    id_group       :{type:String,required:true},
    from_user      :{type:String,required:true},
    to_user        :{type:String},
    create_date    :{type:Date,required:true},
    type           :{type:String},
    status         :{
                        type:String,
                        enum:[
                            'En espera',
                            'Aceptada',
                            'Declinada'
                        ],
                        required:true,
                        default: 'En espera'
                    }
});

var Notification = mongoose.model('notification',notificationSchema);

module.exports = Notification;