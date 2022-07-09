var express = require("express");
var app = express();
var user_routes = require('./routes/user.routes')
var cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/api',[
    user_routes

])
module.exports = app;