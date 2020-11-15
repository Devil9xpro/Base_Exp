const employeeModel = require("../models/employee");
const employeeService = {};

employeeService.getAll = async (filter) => {
    // if (filter.phone) {
    //     filter.phone = {
    //         "$lte": filter.phone
    //     }
    // }
    return await employeeModel.find(filter)//find all
    //mongoose require await
}

employeeService.create = async (employee) => {
    return await employeeModel.create(employee);
}

employeeService.updateByID = async (employee, id) => {
    return await employeeModel.findByIdAndUpdate(id, employee, {new:true});
}

employeeService.deleteByID = async (id) => {
    await employeeModel.findByIdAndDelete(id);
}

module.exports = employeeService
