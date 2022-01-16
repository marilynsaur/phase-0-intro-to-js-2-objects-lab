const employee = {
    name: "" ,
    streetAddress: "",
};

function updateEmployeeWithKeyAndValue(name,key,value) {

    return  { ...name, [key]: value,


    };
}


function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    obj[key] = value;
    return obj;


    };

 function deleteFromEmployeeByKey(obj,key,value) {
    
    return {
        ...obj,
        [key]:value,
    };
    
    
     };   

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
    };
    
function DeleteFromEmployeeByKey(employee, key)  {
    
    delete  {...employee[key]};

     return (employee);

    
    
    

   };
    

    

    

 