const router = require('express').Router();

const { getRole, postRole, putRole, deleteRole } = require('../controllers/roles')

// ===route: /api/roles ===

router.get('/', getRole);
router.post('/', postRole);
router.put('/:id', putRole);
router.delete('/:id', deleteRole);

module.exports = router;