const jwt = require("jsonwebtoken")

function generateToken(_id) {
    //assign a token 
    const token_id= jwt.sign({_id}, process.env.SECRET_CODE,{expiresIn:"30d"})
    return token_id
}

module.exports= generateToken;