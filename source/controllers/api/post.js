module.exports = function(server) {
    
    var Post = require('../../models/post');
    var Group = require('../../models/group');
    var User = require('../../models/user');
    var currentdate = new Date(); 

    /**
     * @api {get} /post/ Return a list of posts
     * @apiVersion 1.0.0
     * @apiName GetPosts
     * @apiGroup post
     *
     *
     * @apiSuccessExample Success-Response:
     *   [
     *     {
     *       "_id": "55978ea34e9fbbc40c6ddb7a",
     *       "content": "Hola chicos, recuerden que mañana hay examen de Hilario",
     *       "user_creator": "345678fghjkty",
     *       "create_date": "2015-07-04T07:40:09.247Z",
     *       "__v": 0,
     *       "answers": [],
     *       "status": true
     *     }
     *   ]
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
    findAllPosts = function(req, res) {
        Post.find(function(err, post) {
            if(!err) 
                res.send(post);
            else 
                console.log('ERROR: ' +err);
        });
    };

    /**
     * @api {get} /postGroup/:idGroup Gets all Posts from a Group
     * @apiVersion 1.0.0
     * @apiName GetGroupPosts
     * @apiGroup post
     *
     * @apiParam {String} id Group from you want to reach the posts.
     * 
     * @apiSuccessExample Success-Response:
     *    
     *  {
     *    "_id": "55978ea34e9fbbc40c6ddb7a",
     *    "content": "Hola chicos, recuerden que mañana hay examen de Hilario",
     *    "user_creator": "345678fghjkty",
     *    "create_date": "2015-07-04T07:40:09.247Z",
     *    "__v": 0,
     *    "answers": [],
     *    "status": true
     *  }
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
    findAllPostsGroup = function(req, res) {

        Post.find({group : req.params.idGroup}, function(err, posts){
            if (!err) {
                res.send(posts);
            }else{
                res.send('error');
            }
        });
    };

     /**
     * @api {get} /post/:id Gets a specific post
     * @apiVersion 1.0.0
     * @apiName GetPost
     * @apiGroup post
     *
     * @apiParam {String} id Post to look for.
     * 
     * @apiSuccessExample Success-Response:
     *    
     *  {
     *    "_id": "55978ea34e9fbbc40c6ddb7a",
     *    "content": "Hola chicos, recuerden que mañana hay examen de Hilario",
     *    "user_creator": "345678fghjkty",
     *    "create_date": "2015-07-04T07:40:09.247Z",
     *    "__v": 0,
     *    "answers": [],
     *    "status": true
     *  }    
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
        Post.findById(req.params.id, function(err, post) {
            if(!err) 
                res.send(post);
            else 
                console.log('ERROR: ' +err);
        });
    };

    /**
     * @api {post} /post/ Creates a post
     * @apiVersion 1.0.0
     * @apiName CreatePost
     * @apiGroup post
     *
     * @apiParam {String} content Content of the post.
     * @apiParam {String} user_creator User who writes the post.
     *
     * @apiSuccessExample Success-Response:
     *
     * {
     *    "_id": "55978ea34e9fbbc40c6ddb7a",
     *    "content": "Hola chicos, recuerden que mañana hay examen de Hilario",
     *    "user_creator": "345678fghjkty",
     *    "create_date": "2015-07-04T07:40:09.247Z",
     *    "__v": 0,
     *    "answers": [],
     *    "status": true
     *  } 
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
    addPost = function(req, res) {
        userCreator = User.findById(req.user.id, function(err, user){
            if (user) {
                user_creator = {
                                    'id': user.id,
                                    'name' : user.name,
                                    'last_name' : user.last_name,
                                    'url_image' : user.url_image
                                };


                var newPost = new Post({
                    content      :req.body.content,
                    user_creator : user_creator,
                    create_date  :new Date(),
                    group : req.body.id_group
                });

                newPost.save(function(err) {
                    if(!err){
                        Group.findById(req.body.id_group, function(err, group){
                            if (group) {
                                group.post.push(newPost);
                                group.save(function(err){
                                    if (!err) {
                                        res.send('Post Saved');
                                    }else{
                                        console.log(err);
                                        res.send('Post Saved but dont added in the group');
                                    }
                                });
                            }else{
                                res.send('error');
                            }
                        });
                        console.log('Post Successfully Saved');
                    }
                    else {
                        console.log('ERROR: ' +err);
                        res.send('error');
                    }
               });
            }else{
                res.send('error, user not found.');
            }
        });
    };

    /**
     * @api {put} /post/ Updates a post
     * @apiVersion 1.0.0
     * @apiName UpdatePosts
     * @apiGroup post
     *
     * @apiParam {String} id Id of the post to update.
     * @apiParam {String} content Content of the post.
     * @apiParam {Boolean} status Status from the post.
     *
     * @apiSuccessExample Success-Response:
     *
     * {
     *    "_id": "55978ea34e9fbbc40c6ddb7a",
     *    "content": "Hola chicos, recuerden que mañana hay examen de Hilario",
     *    "user_creator": "345678fghjkty",
     *    "create_date": "2015-07-04T07:40:09.247Z",
     *    "__v": 0,
     *    "answers": [],
     *    "status": true
     *  } 
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
    updatePost = function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            post.content     = req.body.content;
            post.status      = req.body.status;
            
            post.save(function(err) {
                if(!err) 
                    console.log("Post Successfully Updated");
                else 
                    console.log('ERROR: ' +err); 
                
            });
            res.send(post);
        });
    };

    /**
     * @api {delete} /post/:id Delete a specific Post
     * @apiVersion 1.0.0
     * @apiName DeletePost
     * @apiGroup post
     *
     * @apiParam {String} id Post to delete.
     * 
     * @apiSuccessExample Success-Response:
     *     {
     *        "msg":"Post Successfully Deleted"
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
    deletePost = function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            post.remove(function(err) {
                if(!err) 
                    console.log('Post Successfully Deleted');
                else 
                    console.log('ERROR: ' +err);  
            });    
        });
    }

    //API Routes
    server.get('/post/', server.oauth.authorise(), findAllPosts);
    server.get('/postGroup/:idGroup', server.oauth.authorise(), findAllPostsGroup);
    server.get('/post/:id', server.oauth.authorise(), findByID);
    server.post('/post', server.oauth.authorise(), addPost);
    server.put('/post/:id', server.oauth.authorise(), updatePost);
    server.delete('/post/:id', server.oauth.authorise(), deletePost);
}