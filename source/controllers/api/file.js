module.exports = function(server) {
    
    var File = require('../../models/file');
    var currentdate = new Date(); 
    var datetime = (currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes()
    );

    //GET ALL
    findAllFiles = function(req, res) {
        File.find(function(err, file) {
            if(!err) 
                res.send(file);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //GET BY ID
    findByID = function(req, res) {
        File.findById(req.params.id, function(err, file) {
            if(!err) 
                res.send(file);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //POST
    addFile = function(req, res) {
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

    //PUT
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

    //DELETE
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
    server.get('/file', findAllFiles);
    server.get('/file/:id', findByID);
    server.post('/file', addFile);
    server.put('/file/:id', updateFile);
    server.delete('/file/:id', deleteFile);
}