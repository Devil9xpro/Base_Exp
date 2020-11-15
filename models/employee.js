const mongoose = require("mongoose");

const {Schema} = mongoose;

const EmployeeSchema = Schema({
    fullName: {type:String, required: true},
    email: String,
    mobile: String,
    city: String,
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

module.exports = EmployeeModel
