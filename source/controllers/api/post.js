module.exports = function(server) {
    
    var Post = require('../../models/post');
    var currentdate = new Date(); 
    var datetime = (currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes()
    );

    //GET ALL
    findAllPosts = function(req, res) {
        Post.find(function(err, post) {
            if(!err) 
                res.send(post);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //GET BY ID
    findByID = function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            if(!err) 
                res.send(post);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //POST
    addPost = function(req, res) {
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

    //PUT
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

    //DELETE
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
    server.get('/post', findAllPosts);
    server.get('/post/:id', findByID);
    server.post('/post', addPost);
    server.put('/post/:id', updatePost);
    server.delete('/post/:id', deletePost);
}