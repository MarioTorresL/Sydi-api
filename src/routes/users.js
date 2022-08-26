const router = require('express').Router();

const { getUser, postUser, putUser, deleteUser } = require('../controllers/users');
const { validateJwt } = require('../middlewares/validateJwt');
const { validateParams } = require('../middlewares/validateParams');
const { check } = require('express-validator');

// ===route: /api/users ===

router.get('/',validateJwt, getUser);

router.post('/',
	[
    check('firstName', 'firstName is required').not().isEmpty(),
		check('email', 'email is required').isEmail(),
    check('password', 'password is required').not().isEmpty(),
		check('RoleId', 'role is required').not().isEmpty(),
		validateParams
	], postUser
); //register

// is nescesary ckeck funcionality of this part
router.put('/:id', validateJwt, putUser);

router.delete('/:id', validateJwt, deleteUser);

module.exports = router;
