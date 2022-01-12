const employee = {
    employee :'Sam' ,
    streetAddress: "11 Broadway",
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

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    return {
     obj,
    [key]: value,
        };
    };
    
function DeleteFromEmployeeByKey(employee, name)  {
     
    delete  {...employee}; [name];

    employee;

    
    
    

   };
    

    

    

 