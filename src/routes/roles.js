const router = require('express').Router();
const {check} = require('express-validator');

const { getRole, postRole, putRole, deleteRole } = require('../controllers/roles')
const { validateJwt } =require('../middlewares/validateJwt');
const { validateParams } = require('../middlewares/validateParams');

// ===route: /api/roles ===

router.get('/', validateJwt, getRole);

router.post('/', 
	[
    validateJwt,
		check('name', 'name of role is required').not().isEmpty(),
		validateParams
  ], postRole
);

router.put('/:id',
	[
		validateJwt,
    check('name', 'name of role is required').not().isEmpty(),
		validateParams

	], putRole
);

router.delete('/:id',validateJwt, deleteRole);

module.exports = router;
