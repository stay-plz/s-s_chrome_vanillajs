const grContainer = document.querySelector(".js-greeting");
const grInput = grContainer.querySelector("input");
const grTitle = document.querySelector(".js-greetingTitle");

const LS_KEY = "userName";

function setLs(name) {
  localStorage.setItem(LS_KEY, name);
}

function setTitle(name) {
  grTitle.innerText = name;
}

function getName() {
  const inputName = grInput.value;
  return inputName;
}

function handleSubmit(event) {
  event.preventDefault();
  const inputName = getName();
  setTitle(inputName);
  setLs(inputName);
  showing(grTitle);
  hiding(grInput);
}

function showing(element) {
  element.classList.add("show");
  element.classList.remove("hide");
}
function hiding(element) {
  element.classList.add("hide");
  element.classList.remove("show");
}

function loadGreeting() {
  const name = localStorage.getItem(LS_KEY);
  if (name === null) {
    hiding(grTitle);
    showing(grInput);
  } else {
    hiding(grInput);
    showing(grTitle);
    setTitle(name);
  }
}

function init() {
  loadGreeting();
  grContainer.addEventListener("submit", handleSubmit);
}
init();
