let express = require('express');
let router = express.Router();
const employeeController = require('../controller/employeeController');

router.get('/',employeeController.getAll);
router.post('/', employeeController.create);
router.put('/:id', employeeController.update);
router.delete('/:id', employeeController.delete)
module.exports = router;
