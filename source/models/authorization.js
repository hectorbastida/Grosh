var mongoose = require('../connections/mongoose'),
    UserGrosh = require('./user'),
    Schema = mongoose.Schema,
    model = module.exports;

//
// Schemas definitions
//
var OAuthAccessTokensSchema = new Schema({
    accessToken: {
        type: String
    },
    clientId: {
        type: String
    },
    userId: {
        type: String
    },
    expires: {
        type: Date
    }
});

var OAuthRefreshTokensSchema = new Schema({
    refreshToken: {
        type: String
    },
    clientId: {
        type: String
    },
    userId: {
        type: String
    },
    expires: {
        type: Date
    }
});

var OAuthClientsSchema = new Schema({
    clientId: {
        type: String
    },
    clientSecret: {
        type: String
    },
    redirectUri: {
        type: String
    }
});

var OAuthUsersSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        default: ''
    }
});

mongoose.model('OAuthAccessTokens', OAuthAccessTokensSchema);
mongoose.model('OAuthRefreshTokens', OAuthRefreshTokensSchema);
mongoose.model('OAuthClients', OAuthClientsSchema);
mongoose.model('OAuthUsers', OAuthUsersSchema);

var OAuthAccessTokensModel = mongoose.model('OAuthAccessTokens'),
    OAuthRefreshTokensModel = mongoose.model('OAuthRefreshTokens'),
    OAuthClientsModel = mongoose.model('OAuthClients'),
    OAuthUsersModel = mongoose.model('OAuthUsers');

//
// oauth2-server callbacks
//
model.getAccessToken = function(bearerToken, callback) {
    OAuthAccessTokensModel.findOne({
        accessToken: bearerToken
    }, callback);
};

model.getClient = function(clientId, clientSecret, callback) {
    if (clientSecret === null) {
        return OAuthClientsModel.findOne({
            clientId: clientId
        }, callback);
    }
    OAuthClientsModel.findOne({
        clientId: clientId,
        clientSecret: clientSecret
    }, callback);
};

/*
client = new  OAuthClientsModel({
  clientId: '449363d8187d9898abb265e50d1adc20',//MD5 GROSH2015
  clientSecret: 'ec899ab5530e0cd33e4aa4815d927477',//MD5 GROSH2015SECRET
  redirectUri: '/client1'
});

client.save(function(err){
  if (!err) {
    console.log('client saved');
  }else{
    console.log('ERROR: '+err);
  }
});
*/

// Unique client id to App grosh
var authorizedClientIds = ['449363d8187d9898abb265e50d1adc20', 'clienteId'];
model.grantTypeAllowed = function(clientId, grantType, callback) {
    if (grantType === 'password') {
        return callback(false, authorizedClientIds.indexOf(clientId) >= 0);
    }

    callback(false, true);
};

model.saveAccessToken = function(token, clientId, expires, userId, callback) {
    var accessToken = new OAuthAccessTokensModel({
        accessToken: token,
        clientId: clientId,
        userId: userId,
        expires: expires
    });

    accessToken.save(callback);
};

/*
 * Required to support password grant type
 */
model.getUser = function(email, password, callback) {
    UserGrosh.findOne({
        email: email,
        password: password
    }, function(err, user) {
        if (err) return callback(err);
        callback(null, user._id);
    });
};
/*
var userPrueb = new OAuthUsersModel({
    username: 'root',
    password: 'root',
    firstname: 'Angel',
    lastname: 'Lagunas',
    email: 'mail@dominio.com'
  });

userPrueb.save(function(err){
  if (!err) {
    console.log('usuario guardado');
  }else{
    console.log('ERROR: '+err);
  }
});
*/

/*
 * Required to support refreshToken grant type
 */
model.saveRefreshToken = function(token, clientId, expires, userId, callback) {
    var refreshToken = new OAuthRefreshTokensModel({
        refreshToken: token,
        clientId: clientId,
        userId: userId,
        expires: expires
    });

    refreshToken.save(callback);
};

model.getRefreshToken = function(refreshToken, callback) {
    OAuthRefreshTokensModel.findOne({
        refreshToken: refreshToken
    }, callback);
};