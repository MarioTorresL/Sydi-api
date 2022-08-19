const router = require('express').Router();

const { getUser, postUser, putUser, deleteUser } = require('../controllers/users');
const { validateJwt } = require('../middlewares/validateJwt');

// ===route: /api/users ===

router.get('/',validateJwt, getUser);
router.post('/', postUser); //register
router.put('/:id', validateJwt, putUser);
router.delete('/:id', validateJwt, deleteUser);

module.exports = router;
