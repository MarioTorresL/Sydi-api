const router = require('express').Router();

const { getUser, postUser, putUser, deleteUser } = require('../controllers/users');

// ===route: /api/users ===

router.get('/', getUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete(':id', deleteUser);

module.exports = router;