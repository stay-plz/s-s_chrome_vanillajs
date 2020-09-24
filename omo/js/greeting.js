const greetingContainer = document.querySelector(".js-greeting");
const greetingInput = greetingContainer.querySelector("input");
const greetingText = document.querySelector(".js-greetingtxt");
const delBtn = document.querySelector(".js-delgreeting");

const LS_KEY = "currentUser";
const CN_SHOW = "show";
const CN_HIDE = "hide";

function hiding(container) {
  if (container.classList.contains(CN_SHOW)) {
    container.classList.remove(CN_SHOW);
  }
  container.classList.add(CN_HIDE);
}

function shoiwng(container) {
  if (container.classList.contains(CN_HIDE)) {
    container.classList.remove(CN_HIDE);
  }
  container.classList.add(CN_SHOW);
}

function showName() {
  shoiwng(greetingText);
  greetingText.innerText = localStorage.getItem(LS_KEY);
}

function saveName(name) {
  localStorage.setItem(LS_KEY, name);
  hiding(greetingContainer);
  showName();
}

function askName() {
  hiding(greetingText);
  shoiwng(greetingContainer);
  greetingContainer.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = greetingInput.value;
    saveName(name);
  });
}

function loadName() {
  const NAME_LS = localStorage.getItem(LS_KEY);
  if (NAME_LS === null || NAME_LS === "undifined") {
    askName();
  } else {
    hiding(greetingContainer);
    showName();
  }
}

function init() {
  delBtn.addEventListener("click", function () {
    greetingText.innerHTML = "";
    localStorage.removeItem(LS_KEY);
    loadName();
  });
  loadName();
}
init();
