module.exports = function(server, io){
	var Invitation = require('../../models/invitation'),
        Group      = require('../../models/group');
	 

    /**
     * @api {get} /invitation/ Return a list of invitations
     * @apiVersion 1.0.0
     * @apiName GetInvitations
     * @apiGroup invitation
     *
     *
     * @apiSuccessExample Success-Response:
     *  [
     *    {
     *       "_id": "55abff4227121c1016cd6b6c",
     *       "id_group": "34567dfghjk63292",
     *       "sender_user": "559786baa361ca280ffa15f0",
     *       "invited_user": "01011010101077h",
     *       "create_date": "2015-07-19T19:49:22.298Z",
     *       "__v": 0,
     *       "status": "En espera"
     *    }
     *  ]
     * 
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
     *     }
     *
     * @apiHeaderExample {json} Header-Response:
     *     {
     *       "Content-Type": "application/json; charset=utf-8",
     *       "status": "200 OK"
     *     }
     *
     * @apiErrorExample Error-404:
     *{
     *  "message": "The resource specified don't exist.",
     * }
     *
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token was not found.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token provided has expired.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Malformed auth header.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Only one method may be used to authenticate at a time (Auth header, GET or POST).",
     * } 
     * 
     */
    findAllInvitations = function(req, res) {
        Invitation.find(function(err, invitation) {
            if(!err) 
                res.send(invitation);
            else 
                console.log('ERROR: ' +err);
        });
    };

    /**
     * @api {get} /invitation/:id Gets a specific invitation
     * @apiVersion 1.0.0
     * @apiName GetInvitation
     * @apiGroup invitation
     *
     * @apiParam {String} id Invitation to look for.
     * 
     * @apiSuccessExample Success-Response:
     *    
     *    
     *    {
     *      "_id": "55abff4227121c1016cd6b6c",
     *      "id_group": "34567dfghjk63292",
     *      "sender_user": "559786baa361ca280ffa15f0",
     *      "invited_user": "01011010101077h",
     *      "create_date": "2015-07-19T19:49:22.298Z",
     *      "__v": 0,
     *      "status": "En espera"
     *    }
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
     *     }
     *
     * @apiHeaderExample {json} Header-Response:
     *     {
     *       "Content-Type": "application/json; charset=utf-8",
     *       "status": "200 OK"
     *     }
     *
     * @apiErrorExample Error-404:
     *{
     *  "message": "The resource specified don't exist.",
     * }
     *
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token was not found.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token provided has expired.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Malformed auth header.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Only one method may be used to authenticate at a time (Auth header, GET or POST).",
     * } 
     *
     */ 
    findByID = function(req, res) {
        Invitation.findById(req.params.id, function(err, invitation) {
            if(!err) 
                res.send(invitation);
            else 
                console.log('ERROR: ' +err);
        });
    };

    /**
     * @api {post} /invitation/ Creates a invitation
     * @apiVersion 1.0.0
     * @apiName CreateInvitation
     * @apiGroup invitation
     *
     * @apiParam {String} id_group Id of the group that will be invited.
     * @apiParam {String} sender_user Id of the user that sends the invitation.
     * @apiParam {String} invited_user Id of the user to be invited.
     *
     * @apiSuccessExample Success-Response:
     *
     *   {
     *     "id_group": "34567dfghjk63292",
     *     "sender_user": "559786baa361ca280ffa15f0",
     *     "invited_user": "01011010101077h",
     *     "create_date": "2015-07-19T19:49:22.298Z",
     *     "_id": "55abff4227121c1016cd6b6c",
     *     "status": "En espera"
     *   }    
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
     *     }
     *
     * @apiHeaderExample {json} Header-Response:
     *     {
     *       "Content-Type": "application/json; charset=utf-8",
     *       "status": "201 Created"
     *     }
     *
     * @apiErrorExample Error-404:
     *{
     *  "message": "The resource specified don't exist.",
     * }
     *
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token was not found.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token provided has expired.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Malformed auth header.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Only one method may be used to authenticate at a time (Auth header, GET or POST).",
     * } 
     *
     */
    addInvitation = function(req, res) {
        var newInvitation = new Invitation({
            id_group     :req.body.id_group,
            sender_user  :req.user.id,
            invited_user :req.body.invited_user,
            create_date  :new Date()
        });

        //invitation
        Group.findById(req.body.id_group, function(err, group){
            if (group) {
                var user = req.body.invited_user;
                io.sockets.emit( "invitation"+user , {'group':group});
            }
        });

        newInvitation.save(function(err) {
            if(!err) 
                console.log('Invitation Successfully Saved');
            else 
                console.log('ERROR: ' +err);
       });

        res.send(newInvitation);
    };
    

    /**
     * @api {get} /invitation/ Gets invitations of one user
     * @apiVersion 1.0.0
     * @apiName GetUserInvitations
     * @apiGroup invitation
     *
     * @apiParam {String} id_user Id from user in session.
     * 
     * @apiSuccessExample Success-Response:
     *    
     *    
     *    {
     *      "_id": "55abff4227121c1016cd6b6c",
     *      "id_group": "34567dfghjk63292",
     *      "sender_user": "559786baa361ca280ffa15f0",
     *      "invited_user": "01011010101077h",
     *      "create_date": "2015-07-19T19:49:22.298Z",
     *      "__v": 0,
     *      "status": "En espera"
     *    }
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
     *     }
     *
     * @apiHeaderExample {json} Header-Response:
     *     {
     *       "Content-Type": "application/json; charset=utf-8",
     *       "status": "200 OK"
     *     }
     *
     * @apiErrorExample Error-404:
     *{
     *  "message": "The resource specified don't exist.",
     * }
     *
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token was not found.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token provided has expired.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Malformed auth header.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Only one method may be used to authenticate at a time (Auth header, GET or POST).",
     * } 
     * 
     */
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
    	Invitation.update({'sender_user' : req.user.id}, function(err){
    		if (err) {
    			console.log('ERROR: '+err);
    		}else{
    			console.log('Leyo sus invitations');
    		}
    	});	
    }

    /**
     * @api {delete} /invitation/:id Delete a specific invitation
     * @apiVersion 1.0.0
     * @apiName DeleteInvitation
     * @apiGroup invitation
     *
     * @apiParam {String} id Invitation to delete.
     * 
     * @apiSuccessExample Success-Response:
     *     {
     *        "msg":"Invitation Successfully Deleted"
     *     }
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
     *     }
     *
     *
     * @apiHeaderExample {json} Header-Response:
     *     {
     *       "Content-Type": "application/json; charset=utf-8",
     *       "status": "200 OK"
     *     }
     *
     * @apiErrorExample Error-404:
     *{
     *  "message": "The resource specified don't exist.",
     * }
     *
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token was not found.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token provided has expired.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Malformed auth header.",
     * } 
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Only one method may be used to authenticate at a time (Auth header, GET or POST).",
     * } 
     * 
     */
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
    server.get('/invitation', server.oauth.authorise(), findAllInvitations);
    server.get('/invitation/:id', server.oauth.authorise(), findByID);
    server.post('/invitation', server.oauth.authorise(), addInvitation);
    server.get('/invitationUser/', server.oauth.authorise(), getByUser);
    server.put('/invitation/:id', server.oauth.authorise(), readInvitations);
    server.delete('/invitation/:id', server.oauth.authorise(), deleteInvitation);
}
