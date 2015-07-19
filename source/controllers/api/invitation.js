module.exports = function(server){
	var Invitation = require('../../models/invitation');
	var currentdate = new Date(); 
    var datetime = (currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes()
    );

    //GET ALL
    findAllInvitations = function(req, res) {
        Invitation.find(function(err, invitation) {
            if(!err) 
                res.send(invitation);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //GET BY ID
    findByID = function(req, res) {
        Invitation.findById(req.params.id, function(err, invitation) {
            if(!err) 
                res.send(invitation);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //POST
    addInvitation = function(req, res) {
        userAdmin = "559786baa361ca280ffa15f0";// will be replaced by the id_user in session
        var newInvitation = new Invitation({
            id_group     :req.body.id_group,
            sender_user  :userAdmin,
            invited_user :req.body.invited_user,
            create_date  :currentdate
        });

        newInvitation.save(function(err) {
            if(!err) 
                console.log('Invitation Successfully Saved');
            else 
                console.log('ERROR: ' +err);
       });

        res.send(newInvitation);
    };

    getByUser = function(req, res){
    	userAdmin = "559786baa361ca280ffa15f0";// will be replaced by the id_user in session
    	Invitation.find({'invited_user' : userAdmin}, function(err, invitations){
    		if (err) {
    			console.log('ERROR: '+err);
    		}else{
    			return invitations;
    		}
    	})
    }

    readInvitations = function(req, res){
    	userAdmin = '559786baa361ca280ffa15f0';
    	Invitation.update({'sender_user' : userAdmin}, function(err){
    		if (err) {
    			console.log('ERROR: '+err);
    		}else{
    			console.log('Leyo sus invitations');
    		}
    	});	
    }

    //DELETE
    deleteInvitation = function(req, res) {
        Invitation.findById(req.params.id, function(err, invitation) {
            invitation.remove(function(err) {
                if(!err) 
                    console.log('Invitation Successfully Deleted');
                else 
                    console.log('ERROR: ' +err);  
            });    
        });
    }

    //API Routes
    server.get('/invitation', findAllInvitation);
    server.get('/invitation/:id', findByID);
    server.get('/invitationUser/', getByUser);
    server.post('/invitation', addInvitation);
    server.put('/invitation/:id', updateInvitation);
    server.delete('/invitation/:id', deleteInvitation);
}
