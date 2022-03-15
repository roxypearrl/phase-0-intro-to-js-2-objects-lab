function updateEmployeeWithKeyAndValue(obj, key, value){
    return Object.assign ({}, obj, {[key]: value});
}
let employee = {name:'',
streetAdress: '12 Broadway'
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee [key] = value;
    return employee;
}
function deleteFromEmployeeByKey(obj, key, value) {
return Object.assign({},obj,{[key] : value});
}
function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;

}