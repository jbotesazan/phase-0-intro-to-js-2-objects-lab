const employee = {
    name: "Jason",
    streetAdress: "7 Steven Lane"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}

    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const deletion = {...employee}
    delete deletion[key]
    return deletion
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key]
    delete employee[key]
    return employee
}