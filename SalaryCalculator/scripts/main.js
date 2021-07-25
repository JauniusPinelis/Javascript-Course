
import { Employee } from "./models.js";
import { DomHelpers } from "./domHelpers.js";

let employees = [
    new Employee("Ana", "Smith"), 
    new Employee("Tom", "Anderson"), 
    new Employee("Sean", "Paul")
];

DomHelpers.renderEmployeesTable(employees);

function addNewEmployee(){
    let firstName = document.querySelector("#first-name-input").value;
    let lastName = document.querySelector("#last-name-input").value;

    let newEmployee = new Employee(firstName, lastName);

    employees.push(newEmployee);
    DomHelpers.renderEmployeesTable(employees);
}

window.addNewEmployee = addNewEmployee;








