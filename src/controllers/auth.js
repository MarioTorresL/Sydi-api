
const bcrypt = require('bcryptjs');

const models = require('../database/models');

const { generateJWT } = require('../helpers/jwt');

const login = async(req,res)=>{
  try{
    const {email, password} = req.body;
    
    const user = models.Users.findOne({where:{email}})
    
    //verify if user exist (response user or password invalid for security)
    if(!user){
      return res.status(404).json({
        message:'User or password invalid'
      })
    }
    
    //validate with bcrypt
    const validPass = bcypt.compareSync(password, user.password);

    if(!validPass){
      return res.status(400).json({
        message:'User or password invalid'
      })
    }

    //token generate
    const token = await generateJWT(user.id)

    return res.json({
      message:'Login ok', 
      token:token
    })

  }catch(e){
    return res.status(500).json({
      message:'Bad Request',
      error: e
    }) 
  }
}

const renewToken = async(req,res)=>{
  try{
    const uid = req.uid
    
    const user = await models.Users.findByPk(uid);

    const token = await generateJWT;

    return res.json({message:'Renew Token', token, user})

  }catch(e){
    return res.status(500).json({
      message:'Bad Request',
      error: e
    })
  }
} 

module.exports = {login, renewToken}
