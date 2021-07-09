function addTodo(){
    /** Get Todo Name
     *  Get Todo Description
     *  Create a <tr> string with new name and description
     *  Append to the <tbody>.inner text
     */

    let todoNameElement = document.querySelector("#form-name-input");
    let todoName = todoNameElement.value;

    let todoDescriptionElement = document.querySelector("#form-description-input");
    let todoDescription = todoDescriptionElement.value;

    let rowCount = document.querySelectorAll("tr").length;

    let tableString = 
    `
        <tr>
            <th scope="row">${rowCount}</th>
            <td>${todoName}</td>
            <td>${todoDescription}</td>
            <td>
            <button onclick="deleteTodo(${rowCount})" class="btn btn-danger">Delete</button>
            <button onclick="editTodo(${rowCount})" class="btn btn-secondary">Edit</button>
            </td>
        </tr>
    `;

    // Appending the table body with the new todo

    let tbodyElement = document.querySelector("tbody");
    tbodyElement.innerHTML = tbodyElement.innerHTML + tableString;

    // Empty the form elements
    todoNameElement.value = "";
    todoDescriptionElement.value = "";
}

function deleteTodo(index){
    let allTableRows = Array.from(document.querySelectorAll('tbody th'));

    let indexElement = allTableRows.find(el => el.textContent == index);
    let tableRowElement = indexElement.parentElement;

    tableRowElement.outerHTML = "";
}

function editTodo(index){
    console.log(`Editting ${index}`);
}