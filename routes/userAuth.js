let express = require('express');
let router = express.Router();
const employeeController = require('../controller/employeeController');

router.post('/login', employeeController.login);
module.exports = router;
