module.exports = function(server) {
    
    var Image = require('../../models/image');
    var Group = require('../../models/group');
    var currentdate = new Date(); 
    var datetime = (currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes()
    );

    //GET ALL
    findAllImages = function(req, res) {
        Image.find(function(err, image) {
            if(!err) 
                res.send(image);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //GET ALL images of a group
    findAllImagesGroup = function(req, res) {
        Group.findById(req.params.idGroup, function(err, group) {
            if(!err && group) 
                res.send(group.image);
            else 
                console.log('ERROR: ' +err);
                res.send('Sin imagenes');
        });
    };

    //GET BY ID
    findByID = function(req, res) {
        Image.findById(req.params.id, function(err, image) {
            if(!err) 
                res.send(image);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //POST
    addImage = function(req, res) {
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

    //PUT
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

    //DELETE
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
    server.get('/image/', findAllImages);
    server.get('/imageGroup/:idGroup', findAllImagesGroup);
    server.get('/image/:id', findByID);
    server.post('/image', addImage);
    server.put('/image/:id', updateImage);
    server.delete('/image/:id', deleteImage);
}