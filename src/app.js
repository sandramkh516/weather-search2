function currentDate() {
  let date = new Date();
  let days = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "friday",
    "saturday",
  ];

  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    let hours = `0 ${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    let minutes = `0 ${minutes}`;
  }
  return `${day} ${hours} : ${minutes}`;
}
let clock = document.querySelector("#hour");
clock.innerHTML = currentDate();

function currentMonth() {
  let date = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octobor",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let day = date.getDate();
  return `${year} ${day} ${month}`;
}
let period = document.querySelector("#month");
period.innerHTML = currentMonth();

function showCity(event) {
  event.preventDefault();
  let search = document.querySelector("#text-input");
  let h1 = document.querySelector("#city");
  let city = search.value;
  h1.innerHTML = city;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#search-input");
form.addEventListener("submit", showCity);

function showTemperature(response) {
  console.log(response.data);
  let describe = document.querySelector("#description");
  let description = response.data.weather[0].description;
  describe.innerHTML = description;
  let temperature = document.querySelector("#temp");
  temperatureMain = Math.round(response.data.main.temp);
  temperature.innerHTML = temperatureMain;
  let windSpeed = document.querySelector("#wind");
  let wind = Math.round(response.data.wind.speed);
  windSpeed.innerHTML = wind;
  let humidity = document.querySelector("#humid");
  let humid = Math.round(response.data.main.humidity);
  humidity.innerHTML = humid;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
function displayCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = Math.round(temperatureMain);
}
let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCelsius);

function displayFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  let fahrenheitTemperature = (temperatureMain * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheit);
let temperatureMain = null;

function displayForcast() {
  let forecastElement = document.querySelector("#future");
  let days = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "friday",
    "saturday",
  ];
  let forecastHTML = `<div class="row">`;
  days.forEach(function(day)){
    forecastHTML=forecastHTML
  }
  forecastHTML =
    forecastHTML +
    ` <div class="col-2">
            <ul>
              <li>tue</li>
              <li>18</li>
              <li>sun</li>
            </ul>
          </div>`;
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
} 

function getForecast(coordinates){


let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiUrl=`api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}`}
