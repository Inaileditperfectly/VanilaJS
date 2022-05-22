


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("당신의 위치 : ", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  console.log(url);
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerText = data.name 
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  })
}

function onGeoError() {
  alert("위치를 찾을 수 없습니다.")  
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);