const weatherTitle = document.querySelector(".js-weather");
const API_KEY = "1ef02773faefc638d1018b3e979ab15d";

const COORDS = "coords";

function loadWeather(lat, lng) {
  let pro = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      const jsonObj = response.json();
      console.log(jsonObj);
      return jsonObj;
    })
    .then(function (jsonObj) {
      const temp = jsonObj.main.temp;
      const city = jsonObj.name;
      weatherTitle.innerHTML = "temp : " + temp + "<br>" + "city : " + city;
    });
}

function saveLsCoords(coordObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function handleGeoSuccess(obj) {
  const latitude = obj.coords.latitude;
  const longitude = obj.coords.longitude;
  const coordObj = {
    latitude: latitude,
    longitude: longitude,
  };
  saveLsCoords(coordObj);
  loadWeather(latitude, longitude);
}
function handleGeoError() {
  console.log("failed");
}

function setLsCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function getCoords() {
  const coords = localStorage.getItem(COORDS);
  if (coords === null) {
    setLsCoords();
  } else {
    const coordObj = JSON.parse(coords);
    loadWeather(coordObj.latitude, coordObj.longitude);
  }
}

function init() {
  getCoords();
}
init();
