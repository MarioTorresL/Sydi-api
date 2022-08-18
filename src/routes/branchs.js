const router = require('express').Router();

const { getBranch, postBranch, putBranch, deleteBranch } = require('../controllers/branchs');
const { validateJwt } = require('../middlewares/validateJwt');

// ===route: /api/branchs ===

router.get('/',validateJwt, getBranch);
router.post('/',validateJwt, postBranch);
router.put('/:id',validateJwt, putBranch);
router.delete('/:id',validateJwt, deleteBranch);

module.exports = router;