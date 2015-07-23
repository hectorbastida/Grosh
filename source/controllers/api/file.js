module.exports = function(server) {
    
    var File = require('../../models/file');
    var Group = require('../../models/group');
     

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
     *  "message": "Internal Server Error.",
     * } 
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
     *  "message": "Internal Server Error.",
     * } 
     */
    findAllFilesGroup = function(req, res) {
        Group.findById(req.params.idGroup, function(err, group) {
            if(!err && group) 
                res.send(group.file);
            else 
                console.log('ERROR: ' +err);
                res.send('Sin archivos');
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
     *  "message": "Internal Server Error.",
     * } 
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
     *  "message": "Internal Server Error.",
     * } 
     */
    addFile = function(req, res) {
        var currentdate = new Date(); 
        var newFile = new File({
            content      :req.body.content,
            name         :req.body.name,
            user_creator :req.body.user_creator,
            create_date  :currentdate
        });

        newFile.save(function(err) {
            if(!err) 
                console.log('File Successfully Saved');
            else 
                console.log('ERROR: ' +err);
       });

        res.send(newFile);
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
     *  "message": "Internal Server Error.",
     * } 
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
     *  "message": "Internal Server Error.",
     * } 
     */
    deleteFile = function(req, res) {
        File.findById(req.params.id, function(err, file) {
            file.remove(function(err) {
                if(!err) 
                    console.log('File Successfully Deleted');
                else 
                    console.log('ERROR: ' +err);  
            });    
        });
    }

    //API Routes
    server.get('/file/', server.oauth.authorise(), findAllFiles);
    server.get('/fileGroup/:idGroup', server.oauth.authorise(), findAllFilesGroup);
    server.get('/file/:id', server.oauth.authorise(), findByID);
    server.post('/file', server.oauth.authorise(), addFile);
    server.put('/file/:id', server.oauth.authorise(), updateFile);
    server.delete('/file/:id', server.oauth.authorise(), deleteFile);
}