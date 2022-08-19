const router = require('express').Router();

const { getAllVehicle, getOneVehicle, postVehicle, putVehicle, deleteVehicle } = require('../controllers/vehicles');
const { validateJwt } = require('../middlewares/validateJwt');

//=== route: /api/vehicles ===

router.get('/', validateJwt, getAllVehicle );
router.post('/', validateJwt, postVehicle);
router.get('/:id', validateJwt, getOneVehicle);
router.put('/:id', validateJwt, putVehicle);
router.delete('/:id', validateJwt, deleteVehicle);

module.exports = router;
