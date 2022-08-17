const router = require('express').Router();

const { login, renewToken } = require('../controllers/auth')

// ===== route: /api/auth  ==

router.post('/login', [], login);

router.get('/renew', renewToken);

module.exports = router;
