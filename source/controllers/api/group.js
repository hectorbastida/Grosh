module.exports = function(server) {
    
    var Group      = require('../../models/group');
    var Formidable = require('formidable');
    var fs         = require('fs');
    var path       = require("path")
    
  
    /**
     * @api {get} /group/ Return a list of groups
     * @apiVersion 1.0.0
     * @apiName GetGroups
     * @apiGroup group
     *
     *
     * @apiSuccessExample Success-Response:
     *
     *  [
     *     {
     *       "_id": "558c297bcb25211407129fac",
     *       "name": "Ing 9A",
     *       "description": "Grupo Ingenieria",
     *       "date_creation": "2015-06-25T16:13:20.492Z",
     *       "privileges": "Admin",
     *       "url_image": "4g5f6d7s8a90fghrhgfh",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [],
     *       "members": [],
     *       "status": true
     *     },
     *     {
     *       "_id": "559775a37adfe1b40377a690",
     *       "name": "Venta de Perritos",
     *       "description": "Perritos de todas las razas",
     *       "create_date": "2015-07-04T05:52:03.283Z",
     *       "url_image": "1234567",
     *       "privileges": "private",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [],
     *       "members": [],
     *       "status": true
     *     },
     *     {
     *    "_id": "559784231b993bfe0e8667b8",
     *    "name": "my g-cloud",
     *    "description": "My personal folder",
     *    "date_creation": "2015-07-04T06:53:11.132Z",
     *    "privileges": "personal",
     *    "__v": 0,
     *    "file": [],
     *    "image": [],
     *    "post": [],
     *    "administrators": [],
     *    "members": [],
     *       "status": true
     *     },
     *     {
     *       "_id": "559786bba361ca280ffa15f1",
     *       "name": "my g-cloud",
     *       "description": "My personal folder",
     *       "date_creation": "2015-07-04T07:04:54.592Z",
     *       "privileges": "personal",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [
     *         "559786baa361ca280ffa15f0"
     *       ],
     *       "members": [],
     *       "status": true
     *     },
     *     {
     *       "_id": "559799468dcbb06a176de448",
     *       "name": "Lobos",     *   
     *       "description": "Gurpo de lobos aulladores",
     *       "date_creation": "2015-07-04T08:27:08.748Z",
     *       "url_image": "lorempixel.com/g/400/200",
     *       "privileges": "public",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [
     *         "559786baa361ca280ffa15f0"
     *       ],
     *       "members": [],
     *       "status": true
     *     }
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
    findAllGroups = function(req, res) {
        Group.find({'privileges' : 'public'},function(err, group) {
            if(!err) 
                res.send(group);
            else 
                console.log('ERROR: ' +err);
        });
    };


    /**
     * @api {get} /groupUser/:idUser Gets all the Groups created by a User
     * @apiVersion 1.0.0
     * @apiName GetUserGroups
     * @apiGroup group
     *
     * @apiParam {String} id User from you want to reach the Groups.
     * 
     * @apiSuccessExample Success-Response:
     *    
     *     {
     *       "_id": "559786bba361ca280ffa15f1",
     *       "name": "my g-cloud",
     *       "description": "My personal folder",
     *       "date_creation": "2015-07-04T07:04:54.592Z",
     *       "privileges": "personal",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [
     *         "559786baa361ca280ffa15f0"
     *       ],
     *       "members": [],
     *       "status": true
     *     },
     *     {
     *       "_id": "559799468dcbb06a176de448",
     *       "name": "Lobos",     *   
     *       "description": "Gurpo de lobos aulladores",
     *       "date_creation": "2015-07-04T08:27:08.748Z",
     *       "url_image": "lorempixel.com/g/400/200",
     *       "privileges": "public",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [
     *         "559786baa361ca280ffa15f0"
     *       ],
     *       "members": [],
     *       "status": true
     *     }
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
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
    findAllGroupsUser = function(req, res) {
        Group.find({
            'administrators' : req.params.idUser,
            'privileges' : {$ne : "personal"}
        }, function(err, groups) {
            if(!err) 
                res.send(groups);
            else 
                console.log('ERROR: ' +err);
        });
    };

    
    /**
     * @api {get} /groupUserBelongs/:idUser Gets all the Groups where a User belongs
     * @apiVersion 1.0.0
     * @apiName GetBelongUserGroups
     * @apiGroup group
     *
     * @apiParam {String} id Id of the User who belongs to those Groups.
     * 
     * @apiSuccessExample Success-Response:
     *    
     *     {
     *       "_id": "559786bba361ca280ffa15f1",
     *       "name": "my g-cloud",
     *       "description": "My personal folder",
     *       "date_creation": "2015-07-04T07:04:54.592Z",
     *       "privileges": "personal",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [
     *         "559786baa361ca280ffa15f0"
     *       ],
     *       "members": [],
     *       "status": true
     *     },
     *     {
     *       "_id": "558c297bcb25211407129fac",
     *       "name": "Ing 9A",
     *       "description": "Grupo Ingenieria",
     *       "date_creation": "2015-06-25T16:13:20.492Z",
     *       "privileges": "Admin",
     *       "url_image": "4g5f6d7s8a90fghrhgfh",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [],
     *       "members": [],
     *       "status": true
     *     },
     *     {
     *       "_id": "559799468dcbb06a176de448",
     *       "name": "Lobos",     *   
     *       "description": "Gurpo de lobos aulladores",
     *       "date_creation": "2015-07-04T08:27:08.748Z",
     *       "url_image": "lorempixel.com/g/400/200",
     *       "privileges": "public",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [
     *         "559786baa361ca280ffa15f0"
     *       ],
     *       "members": [],
     *       "status": true
     *     }
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
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
    findAllGroupsUserBelongs = function(req, res) {
        Group.find({'members' : req.params.idUser }, function(err, groups) {
            if(!err) 
                res.send(groups);
            else 
                console.log('ERROR: ' +err);
        });
    };

    /*
        params:
            @id_group
            @id_user
    */
    addUserToGroup = function(req, res) {
        Group.findById(req.body.id_group, function(err, group){
            if (group) {
                group.members.push(req.body.id_user);
                group.save(function(err){
                    if (err) {
                        res.send('error');
                    }else{
                        res.send('added');
                    }
                });
            }else{
                res.send('group not found');
            }
        });
    };

    /*
        params:
            @id_group
    */
    addMeToGroup = function(req, res) {
        Group.findById(req.body.id_group, function(err, group){
            if (group) {
                group.members.push(req.user.id);
                group.save(function(err){
                    if (err) {
                        res.send('error');
                    }else{
                        res.send('added');
                    }
                });
            }else{
                res.send('group not found');
            }
        });
    };

    /**
     * @api {get} /personalUserGroup/:idUser Gets the personal Group of a User.
     * @apiVersion 1.0.0
     * @apiName GetPersonalGroup
     * @apiGroup group
     *
     * @apiParam {String} id Id of the User.
     * 
     * @apiSuccessExample Success-Response:
     *    
     *     {
     *       "_id": "559786bba361ca280ffa15f1",
     *       "name": "my g-cloud",
     *       "description": "My personal folder",
     *       "date_creation": "2015-07-04T07:04:54.592Z",
     *       "privileges": "personal",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [
     *         "559786baa361ca280ffa15f0"
     *       ],
     *       "members": [],
     *       "status": true
     *     },
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
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
    findPersonalGroup = function(req, res){
        Group.find(
            {'administrators': req.user.id , 'privileges' : 'personal'}, function(err, group){
                    if (!err) 
                        res.send(group);
                    else
                        console.log('ERROR: '+err);
                }
        );
    }

    /**
     * @api {get} /group/:id Gets a specific group
     * @apiVersion 1.0.0
     * @apiName GetGroup
     * @apiGroup group
     *
     * @apiParam {String} id Group to look for.
     * 
     * @apiSuccessExample Success-Response:
     *    
     *     {
     *       "_id": "559799468dcbb06a176de448",
     *       "name": "Lobos",     *   
     *       "description": "Gurpo de lobos aulladores",
     *       "date_creation": "2015-07-04T08:27:08.748Z",
     *       "url_image": "lorempixel.com/g/400/200",
     *       "privileges": "public",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [
     *         "559786baa361ca280ffa15f0"
     *       ],
     *       "members": [],
     *       "status": true
     *     }
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
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
        Group.findById(req.params.id, function(err, group) {
            if(!err) 
                res.send(group);
            else 
                console.log('ERROR: ' +err);
        });
    };

    /**
     * @api {post} /group/ Creates a group
     * @apiVersion 1.0.0
     * @apiName CreateGroup
     * @apiGroup group
     *
     * @apiParam {String} name Name of the group.
     * @apiParam {String} description Description of the group.
     * @apiParam {String} url_image URL of the group profile.
     * @apiParam {String} privileges Privileges of the group (personal, public, private).
     * @apiParam {Array} administrators One or more administrators of the group.
     *
     * @apiSuccessExample Success-Response:
     *
     *     {
     *       "_id": "559799468dcbb06a176de448",
     *       "name": "Lobos",     *   
     *       "description": "Gurpo de lobos aulladores",
     *       "date_creation": "2015-07-04T08:27:08.748Z",
     *       "url_image": "lorempixel.com/g/400/200",
     *       "privileges": "public",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [
     *         "559786baa361ca280ffa15f0"
     *       ],
     *       "members": [],
     *       "status": true
     *     }
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
    addGroup = function(req, res) {
        var currentdate = new Date(); 
        var newGroup = new Group({
            name            :req.body.name,
            description     :req.body.description,
            create_date   :currentdate,
            url_image       :req.body.url_image,
            privileges      :req.body.privileges,
            administrators  :[]
        });
        newGroup.administrators.push(req.body.id);
        newGroup.save(function(err) {
            if(!err) 
                console.log('Group Successfully Saved');
            else 
                console.log('ERROR: ' +err);
       });

        res.send(newGroup);
    };

    /**
     * @api {put} /group/ Updates a group
     * @apiVersion 1.0.0
     * @apiName UpdateGroup
     * @apiGroup group
     *
     * @apiParam {String} id Id of the group to update.
     * @apiParam {String} name Name of the group.
     * @apiParam {String} description Description of the group.
     * @apiParam {String} url_image URL of the group profile.
     * @apiParam {Boolean} status Status of the group.
     * @apiParam {String} privileges Privileges of the group (personal, public, private).
     *
     * @apiSuccessExample Success-Response:
     *
     *     {
     *       "_id": "559799468dcbb06a176de448",
     *       "name": "Lobos",     *   
     *       "description": "Gurpo de lobos aulladores",
     *       "date_creation": "2015-07-04T08:27:08.748Z",
     *       "url_image": "lorempixel.com/g/400/200",
     *       "privileges": "public",
     *       "__v": 0,
     *       "file": [],
     *       "image": [],
     *       "post": [],
     *       "administrators": [
     *         "559786baa361ca280ffa15f0"
     *       ],
     *       "members": [],
     *       "status": true
     *     }
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
    updateGroup = function(req, res) {
        Group.findById(req.params.id, function(err, group) {
            group.name        = req.body.name;
            group.description = req.body.description;
            group.status      = req.body.status;
            group.url_image   = req.body.url_image;
            group.privileges  = req.body.privileges;
            
            group.save(function(err) {
                if(!err) 
                    console.log("Group Successfully Updated");
                else 
                    console.log('ERROR: ' +err); 
                
            });
            res.send(group);
        });
    };


    addURLImage = function(req, res){
        Group.findById(req.params.id, function(err, group){
            group.url_image = req.body.url_image;
            group.save(function(err){
                if (!err) {
                    res.send('Updated');
                }else{
                    res.send('error');
                }
            });
        });
    }

    findByName = function(req, res){
        Group.find(
            {
                $or : [
                        {'name' : new RegExp('^'+req.params.name+'', "i")},
                        {'name' : new RegExp(''+req.params.name+'$', "i")}
                    ],
                'privileges' : 'public'
            }, function(err, groups){
            if (err) {
                res.send('err');
            }else{
                res.send(groups);
            }
        });
    }

    /**
     * @api {delete} /group/:id Delete a specific Group
     * @apiVersion 1.0.0
     * @apiName DeleteGroup
     * @apiGroup group
     *
     * @apiParam {String} id Group to delete.
     * 
     * @apiSuccessExample Success-Response:
     *     {
     *        "msg":"Group Successfully Deleted"
     *     }
     *
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
    deleteGroup = function(req, res) {
        Group.findById(req.params.id, function(err, group) {
            group.remove(function(err) {
                if(!err) 
                    console.log('Group Successfully Deleted');
                else 
                    console.log('ERROR: ' +err);  
            });    
        });
    }

    addFrontImage = function(req, res) {
        var form = new Formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var tmp_path = files.file.path;
            var tipo = files.file.type;
            
            if (tipo == 'image/jpeg' || tipo=='image/png') {
                var aleatorio = Math.floor((Math.random() * 9999999999) + 1);
                var nombrearchivo = aleatorio + '' + files.file.name;

                var target_path = path.join(__dirname, ("./../../../client/uploads/" + aleatorio));
                fs.rename(tmp_path, target_path, function(err) {
                    
                    fs.unlink(tmp_path, function(err) {
                        Group.findById(req.params.id_group, function(err, group){
                            if (group) {
                                group.url_front_image = "./uploads/" + nombrearchivo;
                                group.save(function(err){
                                    if (!err) {
                                        res.send({
                                            url_front_image: group.url_front_image,
                                        });
                                        res.end();
                                    }else{
                                        res.send('error');
                                    }
                                });
                            }else{
                                res.send('error, group not found');
                            }
                        }); 
                    });
                });

            } else {
                res.send('Tipo de archivo no soportado');
                res.end();
            }
        });
    };

    addURLImage = function(req, res) {
        var form = new Formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var tmp_path = files.file.path;
            var tipo = files.file.type;
            
            if (tipo == 'image/jpeg' || tipo=='image/png') {
                var aleatorio = Math.floor((Math.random() * 9999999999) + 1);
                var nombrearchivo = aleatorio + '' + files.file.name;
                
                var target_path = path.join(__dirname, ("./../../../client/uploads/" + nombrearchivo));
                fs.rename(tmp_path, target_path, function(err) {
                    
                    fs.unlink(tmp_path, function(err) {
                        Group.findById(req.params.id, function(err, group){
                            if (group) {
                                group.url_image = "/uploads/" + nombrearchivo;
                                group.save(function(err){
                                    if (!err) {
                                        res.send({
                                            url_image: group.url_image,
                                        });
                                        res.end();
                                    }else{
                                        res.send('error');
                                    }
                                });
                            }else{
                                
                                res.send('error, group not found');
                            }
                        }); 
                    });
                });

            } else {
                res.send('Tipo de archivo no soportado');
                res.end();
            }
        });
    };

    //API Routes
    server.get('/group/', server.oauth.authorise(), findAllGroups);
    server.get('/groupUser/:idUser', server.oauth.authorise(), findAllGroupsUser);
    server.get('/groupUserBelongs/:idUser', server.oauth.authorise(), findAllGroupsUserBelongs);
    server.get('/personalUserGroup/', server.oauth.authorise(), findPersonalGroup);
    server.get('/group/:id/', server.oauth.authorise(), findByID);
    server.get('/groupByName/:name', server.oauth.authorise(), findByName);
    server.post('/group/', server.oauth.authorise(), addGroup);
    server.put('/group/:id/', server.oauth.authorise(), updateGroup);
    server.patch('/group/:id/', server.oauth.authorise(), addURLImage);
    server.patch('/addUserGroup/', server.oauth.authorise(), addUserToGroup);
    server.patch('/addMeGroup/', server.oauth.authorise(), addMeToGroup);
    server.delete('/group/:id', server.oauth.authorise(), deleteGroup);
}