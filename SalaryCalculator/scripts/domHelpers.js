function renderEmployeesTable(employees) {
  let bodyHtml = "";
  employees.forEach((employee) => {

    bodyHtml += `
        <tr>
            <th scope="row">${employee.id}</th>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td><input type="number" class="hourly-rate ${
              employee.id
            }" value="${employee.getHourlyRate()}"></td>
            <td><input type="number" class="working-hours ${
              employee.id
            }" value="${employee.getWorkingHours()}"></td>
            <td><h4>${employee.getSalary()}</h4></td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
        
        `;
  });

  document.querySelector("#employees-table-body").innerHTML = bodyHtml;
}

let addEventListeners = (employees) => {
    let elements = document.querySelectorAll('input[type="number"]');
    elements.forEach((element) => {
      element.addEventListener("change", () => {

        updateValues(employees, element);

        DomHelpers.renderEmployeesTable(employees);
      });
    });
}

function updateValues(employees, element){
    let classNames = element.className.split(" ");
    let employee = employees.filter((e) => e.id == classNames[1])[0];
    
    employee.updateValues(classNames[0], element.value);
}

export class DomHelpers {
  static renderEmployeesTable(employees) {
    renderEmployeesTable(employees);
    addEventListeners(employees);
  }
}
