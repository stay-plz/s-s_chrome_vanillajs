const body = document.querySelector("body");
const CL_BG = "bg";

function getRandomNum() {
  const randomNum = Math.floor(Math.random() * 7) + 1;
  return randomNum;
}

function loadImg() {
  const randomNum = getRandomNum();
  const img = new Image();
  img.src = "../images/" + randomNum + ".jpg";
  img.classList.add(CL_BG);
  body.appendChild(img);
}
function init() {
  loadImg();
}
init();
