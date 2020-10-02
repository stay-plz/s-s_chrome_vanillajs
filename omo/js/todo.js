const todoContainer = document.querySelector(".js-todo");
const todoInput = todoContainer.querySelector("input");
const todoList = document.querySelector(".js-todo-list");

const LS_TODO = "todoList";
let TODO_ARR = [];

function handleDelete(event) {
  event.preventDefault();
  const liNode = event.target.parentNode;
  todoList.removeChild(liNode);
  const newARR = TODO_ARR.filter(function (todos) {
    return liNode.id != todos.id;
  });
  TODO_ARR = newARR;
  setLsItem(TODO_ARR);
}
function paintList(text) {
  const todoListE = document.createElement("li");
  todoListE.innerHTML = text;
  todoList.appendChild(todoListE);
  todoList.appendChild(todoListE);
  const todoDelBtn = document.createElement("button");
  todoListE.appendChild(todoDelBtn);
  todoDelBtn.addEventListener("click", handleDelete);
  const todoObj = {
    id: TODO_ARR.length + 1,
    todo: text,
  };
  todoListE.id = todoObj.id;
  TODO_ARR.push(todoObj);
}

function handleSubmit(event) {
  event.preventDefault();

  const todoE = todoInput.value;
  paintList(todoE);
  todoInput.value = "";
  setLsItem(TODO_ARR);
}

function setLsItem(TODO_ARR) {
  localStorage.setItem(LS_TODO, JSON.stringify(TODO_ARR));
}

function getLsItem(todos) {
  const todoArr = JSON.parse(todos);
  if (todos !== null) {
    todoArr.forEach(function (obj) {
      paintList(obj.todo);
    });
  }
}

function loadTodo() {
  const todos = localStorage.getItem(LS_TODO);
  if (todos === null) {
    setLsItem(TODO_ARR);
  }
  getLsItem(todos);
}

function init() {
  loadTodo();
  todoContainer.addEventListener("submit", handleSubmit);
}
init();
