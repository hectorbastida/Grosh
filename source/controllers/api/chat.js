var chat = function (server, io){
	var Chat = require('../../models/chat');
	var Message = require('../../models/message');

	getChatInvitation = function(req, res){
		Chat.find(
			{
				'receptor_user' : req.user.id, 
				'statusInvitation' : 'En espera'
			}, function(err, invitations){
				if (err) {
					res.send('error');
				}else{
					res.send(invitations);
				}
			});
	}

	getContactList = function(req, res){
		Chat.find(
			{
				$or : [
					{'sender_user' : req.user.id},
					{'receptor_user' : req.user.id}
				],
				'statusInvitation' : 'Aceptada'
			}, function(err, invitations){
				if (err) {
					res.send('error');
				}else{
					res.send(invitations);
				}
			}
		);
	}

	acceptChatInvitation = function(req, res){
		Chat.findById(req.params.id, function(err, invitation){
			if (invitation) {
				invitation.statusInvitation = 'Aceptada';
				invitation.save(function(err){
					if (err) {
						res.send('error, no se pudo aceptar la invitacion.');
					}else{
						res.send('readed');
					}
				});
			}else{
				res.send('error, not found');
			}
		});
	}

	declineChatInvitation = function(req, res){
		Chat.findById(req.params.id, function(err, invitation){
			if (invitation) {
				invitation.statusInvitation = 'Declinada';
				invitation.save(function(err){
					if (err) {
						res.send('error, no se pudo rechazar la invitacion.');
					}else{
						res.send('declined');
					}
				});
			}else{
				res.send('error, not found');
			}
		});
	}

	addChatInvitation = function(req, res){

		newChat = new Chat({
			sender_user   : req.user.id,
    		receptor_user : req.body.receptor_user
    	});

    	newChat.save(function(err){
    		if (err) {
    			console.log(err);
    			res.send('error');
    		}else{
    			io.sockets.emit('newChatInvitation'+newChat.receptor_user, 'You have a new invitation to chat');
    			res.send('created');
    		}
    	});
	}

	getmessageChat = function(req, res){
		Chat.findById(req.params.idChat, function(err, chat){
			if (chat) {
				if (
					(chat.sender_user==req.user.id || chat.receptor_user==req.user.id)
					&& chat.statusInvitation=='Aceptada') {
					Message.find({'chat_id' : chat.id}, function(err, messages){
						if (messages) {
							res.send(messages);
						}else{
							res.send('error');
						}
					});
				}else{
					res.send('error while chat searching');
				}
			}else{
				res.send('chat not found');
			}
		});
	}

	sendMessage = function(req, res){
		newMessage = new Message({
			chat_id     :req.body.chat_id,
		    content     :req.body.content,
		    author      :req.user.id,
		    create_date : new Date()
		});

		newMessage.save(function(err){
			if (err) {
				res.send('error');
			}else{
				Chat.findById(newMessage.chat_id, function(err, chat){
					io.sockets.emit('newMessage'+chat.receptor_user, 'You have a new message.');
				});
				res.send('sent');
			}
		});
	}

	//API Routes
    server.get('/chatInvitation/', server.oauth.authorise(), getChatInvitation);
    server.get('/contactList/', server.oauth.authorise(), getContactList);
    server.get('/messageChat/:idChat', server.oauth.authorise(), getmessageChat);
    server.patch('/acceptChatInvitation/:id', server.oauth.authorise(),acceptChatInvitation);
    server.patch('/declineChatInvitation/:id', server.oauth.authorise(), declineChatInvitation);
    server.post('/chatInvitation/', server.oauth.authorise(), addChatInvitation)
    server.post('/message/', server.oauth.authorise(), sendMessage);
}

module.exports = chat;