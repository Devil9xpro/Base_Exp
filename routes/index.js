let express = require('express');
let router = express.Router();
let employeeRouter = require('./employee')
let userAuthRouter = require('./userAuth')
let middleware  = require('../middleware/middleware');

router.use('/employee',middleware.authenticateToken,employeeRouter);
router.use('/auth', userAuthRouter);

module.exports = router;
