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

    if (validateForm(todoName, todoDescription)){
        let rowCount = document.querySelectorAll("tr").length;

        let tableString = 
        `
            <tr>
                <th scope="row">${rowCount}</th>
                <td class="todo-name">${todoName}</td>
                <td class="todo-description">${todoDescription}</td>
                <td>
                <button onclick="deleteTodo(${rowCount})" class="btn btn-danger">Delete</button>
                <button onclick="activateEditMode(${rowCount})" class="btn btn-secondary">Edit</button>
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
}

function validateForm(name, description){
    if (name != "" && description != ""){
        return true;
    }
    // popup error
    alert("name or description is missing");
    return false;
}

function deleteTodo(index){
    let allTableRows = Array.from(document.querySelectorAll('tbody th'));

    let indexElement = allTableRows.find(el => el.textContent == index);
    let tableRowElement = indexElement.parentElement;

    tableRowElement.outerHTML = "";
}

function activateEditMode(index){
    /** Get Todo Name from the table by index
     *  Get Todo Description from the table the index
     *  Update forms values with name and description
     *  hide Add button and display Update button
     */

     let allTableRows = Array.from(document.querySelectorAll('tbody th'));

     let indexElement = allTableRows.find(el => el.textContent == index);
     let tableRowElement = indexElement.parentElement;

     let todoName = tableRowElement.querySelector(".todo-name").innerText;
     let todoDescription = tableRowElement.querySelector(".todo-description").innerText;

     let todoNameEditElement = document.querySelector("#form-name-input");
     todoNameEditElement.value = todoName;
     let todoDescriptionEditElement = document.querySelector("#form-description-input");
     todoDescriptionEditElement.value = todoDescription;

     let hiddenIndexElement = document.querySelector("#update-index-input");
     hiddenIndexElement.value = index;

     let addButton = document.querySelector(".add-button");
     addButton.style.display = "none";
     let updateButton = document.querySelector(".update-button");
     updateButton.style.display = "block";

}

function updateTodo(){
    //Update the todo with the values in the form
    let index = document.querySelector("#update-index-input").value;
    let todoName = document.querySelector("#form-name-input").value;
    let todoDescription = document.querySelector("#form-description-input").value;

    if (validateForm(todoName, todoDescription)){
        let allTableRows = Array.from(document.querySelectorAll('tbody th'));
        let indexElement = allTableRows.find(el => el.textContent == index);
        let tableRowElement = indexElement.parentElement;
    
        tableRowElement.querySelector(".todo-name").innerText = todoName;
        tableRowElement.querySelector(".todo-description").innerText = todoDescription;
        
        //Hide Update button and display add
        let addButton = document.querySelector(".add-button");
        addButton.style.display = "block";
        let updateButton = document.querySelector(".update-button");
        updateButton.style.display = "none";
    
        //Clean the form values
        document.querySelector("#update-index-input").value = "";
        document.querySelector("#form-name-input").value = "";
        document.querySelector("#form-description-input").value = "";
    }
}