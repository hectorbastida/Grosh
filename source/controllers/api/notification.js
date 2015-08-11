module.exports = function(server, io){
	var Notification = require('../../models/notification');
    var Group = require('../../models/group');
	 
    findNotifications = function(req, res) {
        Notification.find({'to_user' : req.user.id, 'status' : 'En espera'}, function(err, notifications){
            if (err) {
                res.send('error');
            }else{
                res.send(notifications);
            }
        });
    };

    findByID = function(req, res) {
        Notification.findById(req.params.id, function(err, notification) {
            if(!err){
                res.send(notification);
            }else{
                res.send('error');
            } 
        });
    };

    /*
        params:
        @ id_group,
        @ to_user
    */
    addInvitation = function(req, res) {
        Group.findById(req.body.id_group, function(err, group){
            if (group) {
                var newInvitation = new Notification({
                    id_group     :group.id,
                    from_user    :req.user.id,
                    to_user      :req.body.to_user,
                    create_date  :new Date(),
                    type         :'Invitation'
                });

                newInvitation.save(function(err) {
                    if(err){
                        res.send('error');
                    }else{
                        io.sockets.emit( "invitation"+newInvitation.to_user , {'group':group});
                        res.send('sent');
                    } 
                });
            }else{
                res.send('group not found.');
            }
        });
    };

    /*
        params:
        @ id_group
    */

    addRequest = function(req, res) {
        //request
        Group.findById(req.body.id_group, function(err, group){

            var newRequest = new Notification({
                id_group: group.id,
                from_user: req.user.id,
                to_user: group.administrators[0],
                create_date: new Date(),
                type : 'Request'
            });

            newRequest.save(function(err) {
                if (err){
                    res.send('error');
                }else{
                    io.sockets.emit( "request"+newRequest.to_user , {'request':newRequest});
                    res.send('sent');
                }
            });
        });
    };


    //API Routes
    server.get('/notification/', server.oauth.authorise(), findNotifications);
    server.get('/notification/:id', server.oauth.authorise(), findByID);
    server.post('/invitation/', server.oauth.authorise(), addInvitation);
    server.post('/request/', server.oauth.authorise(), addRequest);
}