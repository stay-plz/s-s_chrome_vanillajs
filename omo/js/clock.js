const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function setClock(clock) {
  clockTitle.innerText =
    clock.hour + " : " + clock.minute + " : " + clock.seconds;
}
function getClock() {
  const date = new Date();
  const hour = ("0" + date.getHours()).slice(-2);
  const minute = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  const clock = {
    hour: hour,
    minute: minute,
    seconds: seconds,
  };
  return clock;
}

function loadClock() {
  const clock = getClock();
  setClock(clock);
}
(function init() {
  setInterval(loadClock, 100);
})();
