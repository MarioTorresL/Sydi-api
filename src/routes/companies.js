const router = require('express').Router();

const { getCompany, postCompany, putCompany, deleteCompany } = require('../controllers/companies');
const { validateJwt } = require('../middlewares/validateJwt');

// ===route: /api/companies ===

router.get('/',validateJwt, getCompany);
router.post('/',validateJwt, postCompany);
router.put('/:id',validateJwt, putCompany);
router.delete('/:id',validateJwt, deleteCompany);

module.exports = router;