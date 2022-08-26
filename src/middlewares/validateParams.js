const { validationResult } = require('express-validator');

const validateParams = (req, res, next)=>{

	const errors = validationResult(req); //check errors in req

	if( !errors.isEmpty() ){
    return res.status(400).json({ error: errors.mapped() })
	}
}

module.exports = { validateParams }
