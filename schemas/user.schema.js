var mongoose =require('mongoose')
var Schema = mongoose.Schema;

var rolesValidos = [

    'ADMINISTRADOR',
    'USUARIO'

]

var UserSchema = new Schema({
    fullName: { type: String, required: true, maxlength: 40 },
    email: { type: String, required: true, unique: true, maxlength: 40 },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
    role: { type: String,  default: 'USUARIO', enum: rolesValidos },
    favoriteMovie:{ type: Array, default:[]}
})

module.exports = mongoose.model('User', UserSchema)
