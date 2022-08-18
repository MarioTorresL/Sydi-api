const router = require('express').Router();

const { getCompany, postCompany, putCompany, deleteCompany } = require('../controllers/companies')

// ===route: /api/companies ===

router.get('/', getCompany);
router.post('/', postCompany);
router.put('/:id', putCompany);
router.delete('/:id', deleteCompany);

module.exports = router;