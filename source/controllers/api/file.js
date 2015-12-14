module.exports = function(server) {
    
    var File = require('../../models/file');
    var Group = require('../../models/group');
    var Formidable = require('formidable');
    var fs         = require('fs');
    var path       = require("path")
    var User = require('../../models/user');

     /**
     * @api {get} /file/ Return a list of files
     * @apiVersion 1.0.0
     * @apiName GetFiles
     * @apiGroup file
     *
     *
     * @apiSuccessExample Success-Response:
     *
     *   [
     *     {
     *       "_id": "559795074fc9bea00a464a70",
     *       "content": "Clase ITIL Susana",
     *       "name": "Diagrama clases Base",
     *       "user_creator": "diego",
     *       "create_date": "2015-07-04T08:03:45.889Z",
     *       "__v": 0,
     *       "answer": [],
     *       "status": false
     *     },
     *     {
     *       "_id": "559795c64fc9bea00a464a71",
     *       "content": "Libro Pmbok",
     *       "name": "capitulo 2",
     *       "user_creator": "sout",
     *       "create_date": "2015-07-04T08:03:45.889Z",
     *       "__v": 0,
     *       "answer": [],
     *       "status": false
     *     }
     *   ]
     * 
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
    findAllFiles = function(req, res) {
        File.find(function(err, file) {
            if(!err) 
                res.send(file);
            else 
                console.log('ERROR: ' +err);
        });
    };

    /**
     * @api {get} /fileGroup/:idGroup Gets all Files from a Group
     * @apiVersion 1.0.0
     * @apiName GetGroupFiles
     * @apiGroup file
     *
     * @apiParam {String} id Group from you want to reach the files.
     * 
     * @apiSuccessExample Success-Response:
     *    
     *   [
     *     {
     *       "_id": "559795074fc9bea00a464a70",
     *       "content": "Clase ITIL Susana",
     *       "name": "Diagrama clases Base",
     *       "user_creator": "diego",
     *       "create_date": "2015-07-04T08:03:45.889Z",
     *       "__v": 0,
     *       "answer": [],
     *       "status": false
     *     },
     *     {
     *       "_id": "559795c64fc9bea00a464a71",
     *       "content": "Libro Pmbok",
     *       "name": "capitulo 2",
     *       "user_creator": "sout",
     *       "create_date": "2015-07-04T08:03:45.889Z",
     *       "__v": 0,
     *       "answer": [],
     *       "status": false
     *     }
     *   ]
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
    findAllFilesGroup = function(req, res) {
        File.find({group : req.params.idGroup}, function(err, files){
            if (!err) {
                res.send(files);
            }else{
                res.send('error');
            }
        });
    };

    /**
     * @api {get} /file/:id Gets a specific file
     * @apiVersion 1.0.0
     * @apiName GetFile
     * @apiGroup file
     *
     * @apiParam {String} id File to look for.
     * 
     * @apiSuccessExample Success-Response:
     *    
     *   {
     *      "_id": "559795c64fc9bea00a464a71",
     *      "content": "Libro Pmbok",
     *      "name": "capitulo 2",
     *      "user_creator": "sout",
     *      "create_date": "2015-07-04T08:03:45.889Z",
     *      "__v": 0,
     *      "answer": [],
     *      "status": false
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
        File.findById(req.params.id, function(err, file) {
            if(!err) 
                res.send(file);
            else 
                console.log('ERROR: ' +err);
        });
    };

    /**
     * @api {post} /file/ Creates a file
     * @apiVersion 1.0.0
     * @apiName CreateFile
     * @apiGroup file
     *
     * @apiParam {String} content Content or description of the file.
     * @apiParam {String} name Name or title of the file.
     * @apiParam {String} user_creator User who uploads the file.
     *
     * @apiSuccessExample Success-Response:
     *
     *   {
     *      "_id": "559795c64fc9bea00a464a71",
     *      "content": "Libro Pmbok",
     *      "name": "capitulo 2",
     *      "user_creator": "sout",
     *      "create_date": "2015-07-04T08:03:45.889Z",
     *      "__v": 0,
     *      "answer": [],
     *      "status": false
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
    addFile = function(req, res) {
        
        var form = new Formidable.IncomingForm(); // parse a file upload
        form.parse(req, function(err, fields, files) {
            var tmp_path = files.file.path; //ruta del archivo
            var tipo = files.file.type; //tipo del archivo
            if (tipo == 'application/pdf' || tipo == 'application/zip' || 
                tipo == 'application/x-rar' || tipo=='video/mp4') {
                
                var aleatorio = Math.floor((Math.random() * 9999) + 1); //Variable aleatoria
                var nombrearchivo = aleatorio + '' + files.file.name; //nombre del archivo mas variable aleatoria

                var target_path = path.join(__dirname, ("./../../../client/uploads/" + nombrearchivo));//hacia donde subiremos nuestro archivo dentro de nuestro servidor
                fs.rename(tmp_path, target_path, function(err) { //Escribimos el archivo
                    
                    fs.unlink(tmp_path, function(err) { //borramos el archivo tmp
                        userCreator = User.findById(req.user.id, function(err, user){
                            if (user) {
                                user_creator = {
                                    'id': user.id,
                                    'name' : user.name,
                                    'last_name' : user.last_name,
                                    'url_image' : user.url_image
                                };
                                var newFile = new File({
                                    content      :req.query.content,
                                    name         :files.file.name,
                                    user_creator :user_creator,
                                    create_date  :new Date(),
                                    group : req.query.id_group,
                                    url_file:nombrearchivo
                                });

                                newFile.save(function(err) {
                                    if (!err){
                                        Group.findById(req.query.id_group, function(err, group){
                                            if (group) {
                                                group.file.push(newFile);
                                                group.save(function(err){
                                                    if (!err) {
                                                        res.send({
                                                            nombreArchivo: files.file.name,
                                                            random: aleatorio
                                                        });
                                                        res.end();
                                                    }else{
                                                        res.send('error');
                                                    }
                                                });
                                            }else{
                                                res.send('error');
                                            }
                                        });
                                    }else{
                                        console.log('ERROR: ' + err);
                                        res.send('error');
                                    }
                                });
                            }else{

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

    /**
     * @api {post} /file/ Updates a file
     * @apiVersion 1.0.0
     * @apiName UpdateFile
     * @apiGroup file
     *
     * @apiParam {String} id Id of the file to update.
     * @apiParam {String} content Content or description of the file.
     * @apiParam {String} name Name or title of the file.
     * @apiParam {String} status Status of the file.
     *
     * @apiSuccessExample Success-Response:
     *
     *   {
     *      "_id": "559795c64fc9bea00a464a71",
     *      "content": "Libro Pmbok",
     *      "name": "capitulo 2",
     *      "user_creator": "sout",
     *      "create_date": "2015-07-04T08:03:45.889Z",
     *      "__v": 0,
     *      "answer": [],
     *      "status": false
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
    updateFile = function(req, res) {
        File.findById(req.params.id, function(err, file) {
            file.content     = req.body.content;
            file.name        = req.body.name;
            file.status      = req.body.status;
            
            file.save(function(err) {
                if(!err) 
                    console.log("File Successfully Updated");
                else 
                    console.log('ERROR: ' +err); 
                
            });
            res.send(file);
        });
    };

    updateFileAnswers = function(req, res) {
        File.findById(req.params.id, function(err, file) {

            file.answer.push(req.body.answer);
            
            file.save(function(err) {
                if(!err) 
                    console.log("File Successfully Updated");
                else 
                    console.log('ERROR: ' +err); 
                
            });
            res.send(file);
        });
    };

    /**
     * @api {delete} /file/:id Delete a specific File
     * @apiVersion 1.0.0
     * @apiName DeleteFile
     * @apiGroup file
     *
     * @apiParam {String} id File to delete.
     * 
     * @apiSuccessExample Success-Response:
     *     {
     *        "msg":"File Successfully Deleted"
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
    deleteFile = function(req, res) {
        File.findById(req.params.id, function(err, file) {
            file.remove(function(err) {
                if(!err){
                    console.log('File Successfully Deleted');
                    res.send('File Successfully Deleted');
                }else {
                    console.log('ERROR: ' +err); 
                }
            });    
        });
    }

    //API Routes
    server.get('/file/', server.oauth.authorise(), findAllFiles);
    server.get('/fileGroup/:idGroup', server.oauth.authorise(), findAllFilesGroup);
    server.get('/file/:id', server.oauth.authorise(), findByID);
    server.post('/file', server.oauth.authorise(), addFile);
    server.put('/file/:id', server.oauth.authorise(), updateFile);
    server.put('/fileAnswer/:id', server.oauth.authorise(), updateFileAnswers);
    server.delete('/file/:id', server.oauth.authorise(), deleteFile);
}