
import { Employee } from "./models.js";
import { DomHelpers } from "./domHelpers.js";

let employees = [
    new Employee("Ana", "Smith"), 
    new Employee("Tom", "Anderson"), 
    new Employee("Sean", "Paul")
];

DomHelpers.renderEmployeesTable(employees, updateEmployeeValues);

function addNewEmployee(){
    let firstName = document.querySelector("#first-name-input").value;
    let lastName = document.querySelector("#last-name-input").value;

    let newEmployee = new Employee(firstName, lastName);

    employees.push(newEmployee);
    DomHelpers.renderEmployeesTable(employees, updateEmployeeValues);
}

function updateEmployeeValues(employees, element){
    console.log("onChangeFunc works");
    let classNames = element.className.split(" ");
    let employee = employees.filter((e) => e.id == classNames[1])[0];
    
    employee.updateValues(classNames[0], element.value);
}

window.addNewEmployee = addNewEmployee;








