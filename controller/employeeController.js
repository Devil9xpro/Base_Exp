const employeeService = require("../service/employeeService");
const jwt = require('jsonwebtoken');
const employee = require('../models/employee')
const employeeController = {};

employeeController.getAll = async (req, res) => {
    try {
        //lay param o post man
        const filter = req.query;
        const listEmployee = await employeeService.getAll(filter);
        res.status(200).json({
            data: listEmployee,
        });
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

employeeController.create = async (req, res) => {
    try {
        let employee = req.body;
        console.log(employee);
        const newEmployee = await employeeService.create(employee);
        res.status(200).json({
            data: newEmployee
        })
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

employeeController.update = async (req, res) => {
    try {
        let id = req.params.id
        let employee = req.body
        const updatedEmployee = await employeeService.updateByID(employee, id)
        res.status(200).json({
            //update lan dau k thay doi value response -> {new:true} o service
            data: updatedEmployee
        })
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

employeeController.delete = async (req, res) => {
    try {
        let id = req.params.id
        const deletedEmployee = await employeeService.deleteByID(id)
        res.status(200).json({
            //update lan dau k thay doi value response -> {new:true} o service
            data: 'Deleted Successfully'
        })
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

employeeController.login = async (req, res) => {
    try {
        //authenticate users
        let username = req.body.username;
        let password = req.body.pass;
        const user = {
            username: username,
            password: password,
        }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: '10s'})
        res.json({accessToken: accessToken})
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

//get employee by token
function authenticateToken(req, res, next){
    const authHeader = req.header['authorization']
    const token = authHeader && authHeader.split('')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN, (err,user) =>{
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}


module.exports = employeeController;



