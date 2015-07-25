module.exports = function(server){
	var Request = require('../../models/request'),
        User = require('./../../models/user');

    findAllRequests = function(req, res) {
        Request.find(function(err, request) {
            if(!err) 
                res.send(request);
            else 
                console.log('ERROR: ' +err);
        });
    };

    findRequestsByUser = function(req, res) {
        User.findById(req.user.id, function(err, user){
            var groups_create = user.groups_created;
            var groups = [];
            for (var i = 0; i < groups_create.length; i++) {
                groups.push(groups_create[i]._id);
            };
            
            Request.find({'id_group' : groups}, function(err, request) {
                if(!err) {
                    res.send(request);
                }else{
                    res.send(err);
                } 
            });
        });
        
    };

    findByID = function(req, res) {
        Request.findById(req.params.id, function(err, request) {
            if(!err) 
                res.send(request);
            else 
                console.log('ERROR: ' +err);
        });
    };

    addRequest = function(req, res) {
        var currentdate = new Date();
        var newRequest = new Request({
            id_group     :req.body.id_group,
            requester_user  :req.user.id,
            status :'En espera',
            create_date  :currentdate
        });
        
     

        newRequest.save(function(err) {
            if(!err) 
                console.log('request Successfully Saved');
            else 
                console.log('ERROR: ' +err);
       });

        res.send(newRequest);
    };


     
    readRequests = function(req, res){
    	userAdmin = '559786baa361ca280ffa15f0';
    	Request.update({'sender_user' : userAdmin}, function(err){
    		if (err) {
    			console.log('ERROR: '+err);
    		}else{
    			console.log('Leyo sus requests');
    		}
    	});	
    }


    deleteRequest = function(req, res) {
        Request.findById(req.params.id, function(err, request) {
            request.remove(function(err) {
                if(!err) 
                    console.log('request Successfully Deleted');
                else 
                    console.log('ERROR: ' +err);  
            });    
        });
    }

    //API Routes
    server.get('/request', server.oauth.authorise(), findAllRequests);
    server.get('/request/:id', server.oauth.authorise(), findByID);
    server.post('/request', server.oauth.authorise(), addRequest);
    server.get('/requestUser/', server.oauth.authorise(), findRequestsByUser);
    server.put('/request/:id', server.oauth.authorise(), readRequests);
    server.delete('/request/:id', server.oauth.authorise(), deleteRequest);
}
