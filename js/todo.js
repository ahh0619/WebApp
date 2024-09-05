const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector('.todoinput');
const toDoList = document.querySelector(".todolist");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletoToDo(event) {
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(deleteLi.id))
    saveToDos();
}

function paintTodo(newTodo) {
    const createLi = document.createElement("li");
    createLi.id = newTodo.id;
    const createSpan = document.createElement("span");
    createSpan.innerText = "🐋" + newTodo.text;
    const createBtn = document.createElement("button");
    createBtn.innerText = "🗑️";
    createBtn.addEventListener("click", deletoToDo);
    createLi.appendChild(createSpan);
    createLi.appendChild(createBtn);
    toDoList.appendChild(createLi);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);

}