const router = require('express').Router();
const {check} = require('express-validator');

const { getAllVehicle, getOneVehicle, postVehicle, putVehicle, deleteVehicle } = require('../controllers/vehicles');
const { validateJwt } = require('../middlewares/validateJwt');
const { validateParams } = require('../middlewares/validateParams');

//=== route: /api/vehicles ===

router.get('/', validateJwt, getAllVehicle );
router.post('/', 
	[
		check('licence_plate', 'licence plate is required').not().isEmpty(),
		validateParams,
		validateJwt
	], 
	postVehicle
);
router.get('/:id', validateJwt, getOneVehicle);
router.put('/:id', validateJwt, putVehicle);
router.delete('/:id', validateJwt, deleteVehicle);

module.exports = router;
