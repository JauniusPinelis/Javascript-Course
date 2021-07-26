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
            <td><button name="${employee.id}" type="button" class="btn btn-danger">Delete</button></td>
        </tr>
        
        `;
  });

  document.querySelector("#employees-table-body").innerHTML = bodyHtml;
}

function addEventListeners (employees, onChangeFunc) {
    let elements = document.querySelectorAll('input[type="number"]');
    elements.forEach((element) => {
      element.addEventListener("change", () => {

        onChangeFunc(employees, element);

        DomHelpers.renderEmployeesTable(employees, onChangeFunc);
      });
    });

    let deleteButtons = window.document.querySelectorAll("button.btn.btn-danger");

    deleteButtons.forEach((element) => {
      element.addEventListener("click", () => {

        employees = employees.filter(e => e.id != element.getAttribute('name'));

        DomHelpers.renderEmployeesTable(employees, onChangeFunc);
      })
    })
}



export class DomHelpers {
  static renderEmployeesTable(employees, onchangeFunc) {
    renderEmployeesTable(employees);
    addEventListeners(employees, onchangeFunc);
  }
}
