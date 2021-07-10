let todos = [
    {
        id: 1,
        name: "Clean the room",
        description: "just clean the room"
    },
    {
        id: 2,
        name: "Train in a gym",
        description: "I need to train to loose some weight"
    },
    {
        id: 3,
        name: "Study Programming",
        description: "I need to study Javascript more"
    },
]

updateHtml();

function updateHtml(){
    let tbodyElement = document.querySelector("tbody");
    tbodyElement.innerHTML = "";

    todos.forEach(todo => {
        let tableString = 
        `
            <tr>
                <th scope="row">${todo.id}</th>
                <td class="todo-name">${todo.name}</td>
                <td class="todo-description">${todo.description}</td>
                <td>
                <button onclick="deleteTodo(${todo.id})" class="btn btn-danger">Delete</button>
                <button onclick="activateEditMode(${todo.id})" class="btn btn-secondary">Edit</button>
                </td>
            </tr>
        `;
        tbodyElement.innerHTML = tbodyElement.innerHTML + tableString;
    });
}

function addTodo(){
    let todoNameElement = document.querySelector("#form-name-input");
    let todoName = todoNameElement.value;

    let todoDescriptionElement = document.querySelector("#form-description-input");
    let todoDescription = todoDescriptionElement.value;
    let index = todos.length + 1;

    let newTodoObject = {
        id: index,
        name: todoName,
        description: todoDescription
    };

    todos.push(newTodoObject);
    updateHtml();

    // Cleaning form values
    todoNameElement.value = "";
    todoDescriptionElement.value = "";
}

function deleteTodo(todoId){
    todos = todos.filter(t => t.id != todoId);
    updateHtml();
}

function activateEditMode(todoId){

    let todo = todos.find(t => t.id == todoId);
    let todoName = todo.name;
    let todoDescription = todo.description;

    let todoNameEditElement = document.querySelector("#form-name-input");
    todoNameEditElement.value = todoName;
    let todoDescriptionEditElement = document.querySelector("#form-description-input");
    todoDescriptionEditElement.value = todoDescription;

    let hiddenIndexElement = document.querySelector("#update-index-input");
    hiddenIndexElement.value = todoId;

    let addButton = document.querySelector(".add-button");
    addButton.style.display = "none";
    let updateButton = document.querySelector(".update-button");
    updateButton.style.display = "block";
}

function updateTodo(){
    let todoId = document.querySelector("#update-index-input").value;
    let todoName = document.querySelector("#form-name-input").value;
    let todoDescription = document.querySelector("#form-description-input").value;

    let todo = todos.find(t => t.id == todoId);

    todo.name = todoName;
    todo.description = todoDescription;
    updateHtml();

    let addButton = document.querySelector(".add-button");
    addButton.style.display = "block";
    let updateButton = document.querySelector(".update-button");
    updateButton.style.display = "none";

    //Clean the form values
    document.querySelector("#update-index-input").value = "";
    document.querySelector("#form-name-input").value = "";
    document.querySelector("#form-description-input").value = "";

}

