const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  console.log(newToDo, todoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
