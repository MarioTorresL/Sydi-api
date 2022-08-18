const router = require('express').Router();

const { getRole, postRole, putRole, deleteRole } = require('../controllers/roles')
const { validateJwt } =require('../middlewares/validateJwt');
// ===route: /api/roles ===

router.get('/',validateJwt, getRole);
router.post('/',validateJwt,  postRole);
router.put('/:id',validateJwt,  putRole);
router.delete('/:id',validateJwt, deleteRole);

module.exports = router;
