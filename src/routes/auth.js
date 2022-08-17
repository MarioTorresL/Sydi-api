const router = require('express').Router();

const { login, renewToken } = require('../controllers/auth')
const { validateJwt } = require('../middlewares/validateJwt');

// ===== route: /api/auth  ==

router.post('/login', [], login);

router.get('/renew', validateJwt, renewToken);

module.exports = router;
