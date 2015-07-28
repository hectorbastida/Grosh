module.exports = function(server) {
    
    var Image = require('../../models/image');
    var Group = require('../../models/group');
   
  
    /**
     * @api {get} /image/ Return a list of images
     * @apiVersion 1.0.0
     * @apiName GetImages
     * @apiGroup image
     *
     *
     * @apiSuccessExample Success-Response:
     *
     *  [
     *     {
     *       "_id": "559793914fc9bea00a464a6d",
     *       "content": "Work In Progress",
     *       "name": "Grafica ",
     *       "user_creator": "987654jhgf76543gfd",
     *       "create_date": "2015-07-04T08:03:45.887Z",
     *       "__v": 0,
     *       "answer": [],
     *       "status": true
     *     },
     *     {
     *       "_id": "559793cc4fc9bea00a464a6e",
     *       "content": "Homework de Telecomunicaciones",
     *       "name": "Apuntes del Pizarron",
     *       "user_creator": "987654jhgf76543gfd",
     *       "create_date": "2015-07-04T08:03:45.887Z",
     *       "__v": 0,
     *       "answer": [],
     *       "status": false
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
    findAllImages = function(req, res) {
        Image.find(function(err, image) {
            if(!err) 
                res.send(image);
            else 
                console.log('ERROR: ' +err);
        });
    };

    /**
     * @api {get} /imageGroup/:idGroup Gets all Images from a Group
     * @apiVersion 1.0.0
     * @apiName GetGroupImages
     * @apiGroup image
     *
     * @apiParam {String} id Group from you want to reach the images.
     * 
     * @apiSuccessExample Success-Response:
     *    
     *     {
     *       "_id": "559793914fc9bea00a464a6d",
     *       "content": "Work In Progress",
     *       "name": "Grafica ",
     *       "user_creator": "987654jhgf76543gfd",
     *       "create_date": "2015-07-04T08:03:45.887Z",
     *       "__v": 0,
     *       "answer": [],
     *       "status": true
     *     },
     *     {
     *       "_id": "559793cc4fc9bea00a464a6e",
     *       "content": "Homework de Telecomunicaciones",
     *       "name": "Apuntes del Pizarron",
     *       "user_creator": "987654jhgf76543gfd",
     *       "create_date": "2015-07-04T08:03:45.887Z",
     *       "__v": 0,
     *       "answer": [],
     *       "status": false
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
    findAllImagesGroup = function(req, res) {
        Group.findById(req.params.idGroup, function(err, group) {
            if(!err && group) 
                res.send(group.image);
            else 
                console.log('ERROR: ' +err);
                res.send('Sin imagenes');
        });
    };

    /**
     * @api {get} /image/:id Gets a specific image
     * @apiVersion 1.0.0
     * @apiName GetImage
     * @apiGroup image
     *
     * @apiParam {String} id Image to look for.
     * 
     * @apiSuccessExample Success-Response:
     *    
     *   {
     *     "_id": "559793914fc9bea00a464a6d",
     *     "content": "Work In Progress",
     *     "name": "Grafica ",
     *     "user_creator": "987654jhgf76543gfd",
     *     "create_date": "2015-07-04T08:03:45.887Z",
     *     "__v": 0,
     *     "answer": [],
     *     "status": true
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
        Image.findById(req.params.id, function(err, image) {
            if(!err) 
                res.send(image);
            else 
                console.log('ERROR: ' +err);
        });
    };

    /**
     * @api {post} /image/ Creates a image
     * @apiVersion 1.0.0
     * @apiName CreateImage
     * @apiGroup image
     *
     * @apiParam {String} content Content or description of the image.
     * @apiParam {String} name Name or title of the image.
     * @apiParam {String} user_creator User who uploads the image.
     *
     * @apiSuccessExample Success-Response:
     *
     *     {
     *       "_id": "559793914fc9bea00a464a6d",
     *       "content": "Work In Progress",
     *       "name": "Grafica ",
     *       "user_creator": "987654jhgf76543gfd",
     *       "create_date": "2015-07-04T08:03:45.887Z",
     *       "__v": 0,
     *       "answer": [],
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
    addImage = function(req, res) {
        var currentdate = new Date(); 
        var newImage = new Image({
            content      :req.body.content,
            name         :req.body.name,
            user_creator :req.body.user_creator,
            create_date  :currentdate
        });

        newImage.save(function(err) {
            if(!err) 
                console.log('Image Successfully Saved');
            else 
                console.log('ERROR: ' +err);
       });

        res.send(newImage);
    };

    

    /**
     * @api {post} /image/ Creates a image
     * @apiVersion 1.0.0
     * @apiName CreateImage
     * @apiGroup image
     *
     * @apiParam {String} id Id of the image to update.
     * @apiParam {String} content Content or description of the image.
     * @apiParam {String} name Name or title of the image.
     * @apiParam {String} status Status of the image.
     *
     * @apiSuccessExample Success-Response:
     *
     *     {
     *       "_id": "559793914fc9bea00a464a6d",
     *       "content": "Work In Progress",
     *       "name": "Grafica ",
     *       "user_creator": "987654jhgf76543gfd",
     *       "create_date": "2015-07-04T08:03:45.887Z",
     *       "__v": 0,
     *       "answer": [],
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
    updateImage = function(req, res) {
        Image.findById(req.params.id, function(err, image) {
            image.content     = req.body.content;
            image.name        = req.body.name;
            image.status      = req.body.status;
            
            image.save(function(err) {
                if(!err) 
                    console.log("Image Successfully Updated");
                else 
                    console.log('ERROR: ' +err); 
                
            });
            res.send(image);
        });
    };

    /**
     * @api {delete} /image/:id Delete a specific Image
     * @apiVersion 1.0.0
     * @apiName DeleteImage
     * @apiGroup image
     *
     * @apiParam {String} id Image to delete.
     * 
     * @apiSuccessExample Success-Response:
     *     {
     *        "msg":"Image Successfully Deleted"
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
    deleteImage = function(req, res) {
        Image.findById(req.params.id, function(err, image) {
            image.remove(function(err) {
                if(!err) 
                    console.log('Image Successfully Deleted');
                else 
                    console.log('ERROR: ' +err);  
            });    
        });
    }

    //API Routes
    server.get('/image/', server.oauth.authorise(), findAllImages);
    server.get('/imageGroup/:idGroup', server.oauth.authorise(), findAllImagesGroup);
    server.get('/image/:id', server.oauth.authorise(), findByID);
    server.post('/image', server.oauth.authorise(), addImage);
    server.put('/image/:id', server.oauth.authorise(), updateImage);
    server.delete('/image/:id', server.oauth.authorise(), deleteImage);
}