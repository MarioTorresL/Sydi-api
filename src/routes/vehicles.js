const router = require('express').Router();

const { getAllVehicle, getOneVehicle, postVehicle, putVehicle, deleteVehicle } = require('../controllers/vehicles');
const { validateJwt } = require('../middlewares/validateJwt');

//=== route: /api/vehicles ===

router.get('/', getAllVehicle );
router.post('/', postVehicle);
router.get('/:id', getOneVehicle);
router.put('/:id', putVehicle);
router.delete('/:id', deleteVehicle);

module.exports = router;
