const employee = {
        name: "Hayley",
        streetAddress: "20 Cat Street"   
}

function updateEmployeeWithKeyAndValue() {
    return {
        ...employee,
        name: "Sam",
        streetAddress: "11 Broadway"
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam",
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey() {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}

