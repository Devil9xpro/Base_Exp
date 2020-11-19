let express = require('express');
let router = express.Router();
const employeeController = require('../controller/employeeController');

router.post('/login', employeeController.login);
router.get('/getEmployeeByToken', employeeController.getEmployeeByToken)
module.exports = router;
