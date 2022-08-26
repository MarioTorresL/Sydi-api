const router = require('express').Router();

const { getBill, postBill, putBill, deleteBill } = require('../controllers/bills');
const { validateJwt } = require('../middlewares/validateJwt');

// ===route: /api/bills ===

router.get('/',validateJwt, getBill);
router.post('/',validateJwt, postBill);
router.put('/:id',validateJwt, putBill);
router.delete('/:id',validateJwt, deleteBill);

module.exports = router;