const employee = {
    name: 'Sam',
    key: '12 Broadway',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {

    return {
        ...employee, [key]: value,


    };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;


};

function deleteFromEmployeeByKey(employee, key, value) {

    return {
        ...employee, [key]: value,
    };


};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};

function DeleteFromEmployeeByKey(employee, key) {

    delete { ...employee[key] };

    return (employee);





};






