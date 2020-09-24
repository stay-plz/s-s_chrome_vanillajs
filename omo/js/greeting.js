const greetingContainer = document.querySelector(".js-greeting");
const greetingInput = greetingContainer.querySelector("input");
const greetingTitle = document.querySelector(".js-greeting__title");
const delBtn = document.querySelector(".js-greeting__del-title");

const LS_KEY = "currentUser";
const CN_HIDE = "hiding";
const CN_SHOW = "showing";

function showing(container) {
  if (container.classList.contains(CN_HIDE)) {
    container.classList.remove(CN_HIDE);
  }
  container.classList.add(CN_SHOW);
}

function hiding(container) {
  if (container.classList.contains(CN_SHOW)) {
    container.classList.remove(CN_SHOW);
  }
  container.classList.add(CN_HIDE);
}

function showName(name) {
  greetingTitle.innerText = name;
  hiding(greetingContainer);
  showing(greetingTitle);
}
function saveName() {
  showing(greetingContainer);
  hiding(greetingTitle);
  greetingContainer.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = greetingInput.value;
    localStorage.setItem(LS_KEY, name);
    showName(name);
  });
}

function loadName() {
  const LS_VALUE = localStorage.getItem(LS_KEY);
  if (LS_VALUE === null) {
    saveName();
  } else {
    greetingTitle.innerText = LS_VALUE;
    hiding(greetingContainer);
    showing(greetingTitle);
  }
}

function init() {
  loadName();
  delBtn.addEventListener("click", function (event) {
    localStorage.removeItem(LS_KEY);
    loadName();
  });
}
init();
