const employee = {
    name: 'Michael Jacksonovich',
    streetAddress: '1 Wonderland',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...employee};

    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value;

    return employee
}

function deleteFromEmployeeByKey(obj, key) {
    const newEm = {...employee};

    delete newEm[key];

    return newEm
}

destructivelyDeleteFromEmployeeByKey = (obj, key) => {
    delete employee[key];

    return employee
}