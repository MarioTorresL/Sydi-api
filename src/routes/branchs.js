const router = require('express').Router();

const { getBranch, postBranch, putBranch, deleteBranch } = require('../controllers/branchs')

// ===route: /api/branchs ===

router.get('/', getBranch);
router.post('/', postBranch);
router.put('/:id', putBranch);
router.delete('/:id', deleteBranch);

module.exports = router;