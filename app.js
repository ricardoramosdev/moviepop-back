var express = require('express');
var app = express();
var user_routes = require('./routes/user.routes')
var comment_routes = require('./routes/comment.routes')
var cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api',[
    user_routes,
    comment_routes
]);

module.exports = app;