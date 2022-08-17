
const jwt = require('jsonwebtoken');

const validateJwt = (req,res, next)=>{
	try{
		
		if(!req.headers.authorization){
			return res.status(401).json({message:'No credential sent'})
		}
		const token = req.headers.authorization.trim().split(' ')[1]

		const { uid } = jwt.verify(token, process.env.JWT_SECRET);

		req.uid = uid;

		next();
	}catch(e){
		return res.status(401).send('Invalid token')
	}
}

module.exports = {validateJwt}
