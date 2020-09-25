const todoContainer = document.querySelector(".js-todo");
const todoInput = todoContainer.querySelector("input");
const todoList = document.querySelector(".js-todo__list");

const LS_TODO_KEY = "todoList";
let LIST_ARR = [];

function deleteTodo(event) {
  const li = event.target.parentNode;
  console.log(li.id);
  todoList.removeChild(li);
}

function saveLSTodo() {
  localStorage.setItem(LS_TODO_KEY, JSON.stringify(LIST_ARR));
}

function addLiTodo(event) {
  event.preventDefault();
  const todoLi = document.createElement("li");
  const todoLiContent = document.createTextNode(todoInput.value);
  const todoDelBtn = document.createElement("button");
  todoDelBtn.addEventListener("click", deleteTodo);

  let liObj = {
    id: LIST_ARR.length + 1,
    text: todoInput.value,
  };
  todoLi.id = LIST_ARR.length + 1;
  todoLi.text = todoInput.value;
  LIST_ARR.push(liObj);

  todoLi.appendChild(todoDelBtn);
  todoLi.appendChild(todoLiContent);
  todoList.appendChild(todoLi);

  todoInput.value = null;
  saveLSTodo();
}

function loadTodo() {
  const LS_TODOLIST = localStorage.getItem(LS_TODO_KEY);
  if (LS_TODOLIST === null) {
    localStorage.setItem(LS_TODO_KEY, "");
  }
  if (LS_TODOLIST !== "") {
    LIST_ARR = JSON.parse(LS_TODOLIST);
    LIST_ARR.forEach(function (toDo) {
      const todoLi = document.createElement("li");
      const todoLiContent = document.createTextNode(toDo.text);
      const todoDelBtn = document.createElement("button");

      todoLi.id = LIST_ARR.length + 1;
      todoLi.text = todoLiContent;
      todoDelBtn.addEventListener("click", deleteTodo);
      todoLi.appendChild(todoDelBtn);
      todoLi.appendChild(todoLiContent);
      todoList.appendChild(todoLi);
    });
  }
}

function init() {
  loadTodo();
  todoContainer.addEventListener("submit", addLiTodo);
}
init();
