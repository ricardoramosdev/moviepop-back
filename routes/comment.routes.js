var express = require('express')
var api = express.Router();
var commentController = require('../controllers/comment.controller')


api.post('/comment', commentController.addComment);

api.get('/comments',  commentController.getComments); 

// api.get('/comment',  commentController.getcomment); 

// api.delete('/comment/:id', [ isAdmin], commentController.deletecomment); 

// api.put('/comment/:id',  commentController.updatecomment); 

// api.post('/login', commentController.login);

module.exports = api;

