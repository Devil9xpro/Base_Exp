let express = require('express');
let router = express.Router();
let employeeRouter = require('./employee')

router.use('/employee',employeeRouter);

module.exports = router;
