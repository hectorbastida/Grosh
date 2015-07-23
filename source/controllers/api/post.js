module.exports = function(server) {
    
    var Post = require('../../models/post');
    var Group = require('../../models/group');
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
        Group.findById(req.params.idGroup, function(err, group) {
            if(!err && group) 
                res.send(group.post);
            else 
                console.log('ERROR: ' +err);
                res.send('Sin post');
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
        var currentdate = new Date(); 
        var newPost = new Post({
            content      :req.body.content,
            user_creator :req.body.user_creator,
            create_date  :currentdate
        });

        newPost.save(function(err) {
            if(!err) 
                console.log('Post Successfully Saved');
            else 
                console.log('ERROR: ' +err);
       });

        res.send(newPost);
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