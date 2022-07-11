const Comment = require('../schemas/comment.schema');
// const bcrypt = require('bcrypt');
// const salt = 10;
// const jwt = require('jsonwebtoken');
// const secret = require('../config/config').secret;


async function addComment(req, res){
    try{
        if(!req.body.comment || !req.body.userID || !req.body.movieID ){ 
            return res.status(400).send('falta un campo obligatorio');
        }
        
        let newComment = new Comment(req.body);
        await newComment.save()// Guardamos en la BD
        res.send({ cometarioNuevo: newComment })
    } catch(error){

        res.status(402).send('error')

    }
}

async function getComments(req, res){
    const commentsDB = await Comment.find()
    res.send({ Comments: commentsDB })
}

// async function getComment(req, res){
//     //id que recibimos desde el endpoint
//     const CommentId = req.query.Comment_id;
//     //buscamos ese Id en nuestra BD
//     const Comment = await Comment.findById(CommentId);
//     console.log(Comment)
//     // si no encontramos el usuario
//     if(!Comment) return res.status(404).send ('no se encontro el usuario que busca');

//     return res.status(200).send({ Comment: Comment })
// }

// async function deleteComment(req, res){
    
//     const Comment_deleted = req.params.id;

//     const Comment = await Comment.findByIdAndDelete(Comment_deleted);
//     console.log(Comment);
    
//     res.send({ CommentDeleted: Comment });
// }

//UPADATE Comment
// async function updateComment(req, res) {
//     const id = req.params.id;

//     const CommentChangesToApply = req.body;

//     const updatedComment = await Comment.findByIdAndUpdate(id, CommentChangesToApply, { new: true });
//     if(!updatedComment) return res.status(404).send('No se encontro el usuario');
    
//     return res.status(200).send(updatedComment)
// }

// //LOGIN
// async function login (req, res){
//     try{
//         const email = req.body.email;
//         const password = req.body.password;

// //checkeamos que el usuario exista y nos traemos sus datos
//         const CommentDB = await Comment.findOne({ email: req.body.email });


//         if(!CommentDB) return res.status(404).send({ msg:'El suario no existe en nuestra BD' });


// //comparamos password proveniente del front con el password del usuario
//         const isValidPassword = await bcrypt.compare(password, CommentDB.password);
//         if(!isValidPassword) return res.status(401).send({ msg:'Alguno de los datos ingresados no es correcto' });
        

// //elimino del objeto Comment el password
//         CommentDB.password = undefined;
//         console.log(CommentDB);


// //generamos un token de acceso
//         const token = jwt.sign(CommentDB.toJSON(), secret);


//         return res.status(200).send({
//             ok: true,
//             msg:'Login correcto',
//             Comment: CommentDB,
//             token
//         })

//     } catch(error){
//         res.status(400).send(error)
//     }
// }


module.exports = {
    addComment,
    getComments,
    // getComment,
    /*deleteComment,*/
    // login,
    // updateComment
}