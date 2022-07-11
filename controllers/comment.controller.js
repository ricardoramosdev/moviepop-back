const Comment = require('../schemas/comment.schema');


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



module.exports = {
    addComment,
    getComments,
    
}