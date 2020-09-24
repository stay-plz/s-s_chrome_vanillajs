const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function clock() {
  const date = new Date();
  let hours = ("0" + date.getHours()).slice(-2);
  let minutes = ("0" + date.getMinutes()).slice(-2);
  let seconds = ("0" + date.getSeconds()).slice(-2);
  clockTitle.innerText = hours + ":" + minutes + ":" + seconds;
}

function init() {
  setInterval(clock, 1000);
}

init();
