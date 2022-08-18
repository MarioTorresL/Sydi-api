const router = require("express").Router();

const {getEmployee, postEmployee, putEmployee, deleteEmployee} = require("../controllers/employees");
const { validateJwt } = require("../middlewares/validateJwt");
// ===route: /api/roles ===

router.get("/", validateJwt, getEmployee);
router.post("/", validateJwt, postEmployee);
router.put("/:id", validateJwt, putEmployee);
router.delete("/:id", validateJwt, deleteEmployee);

module.exports = router;
