var mongoose=require('../connections/mongoose');
var Schema=mongoose.Schema;

var usuarioSchema=new Schema({
	id_network:{type : String},
	username:{type : String, required : true, index:{unique:true}},
	password:{type:String,required:true}
});

var Usuario = mongoose.model('usuario',usuarioSchema);
/*

	usuarioNuevo=new Usuario({
	id_network:'0',
	username:'AngelLagunas',
	password:'123'
	});

	usuarioNuevo.save(function(err){
		if (err) {
			console.log("no se agrego el usuario")
		}else{
			console.log('alta usuario');
		}
	});*/

module.exports = Usuario;