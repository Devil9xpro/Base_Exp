const mongoose = require("mongoose");

const {Schema} = mongoose;

const EmployeeSchema = Schema({
    username: {type: String, required: true, unique: true},
    pass: {type: String, required: true, unique: true},
    email: String,
    mobile: String,
    city: String,
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

module.exports = EmployeeModel
