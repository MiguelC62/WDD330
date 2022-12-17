//import { latitude, longitude } from "./scripts.js";
// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const currentTempOne = document.querySelector('#tempe-one');
const currentTempTwo = document.querySelector('#tempe-two');
const currentTempThree = document.querySelector('#tempe-three');
const currentTempFour = document.querySelector('#tempe-four');
const currentHumidity =document.querySelector('#current-humid');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');
const currentWind = document.querySelector("#speed");

const weatherIconOne = document.querySelector('#weather-one-icon');
const forecastOne = document.querySelector('#forecast-one');
const captionDescOne = document.querySelector('#caption-one');
const weatherIconTwo = document.querySelector('#weather-two-icon');
const forecastTwo = document.querySelector('#forecast-two');
const captionDescTwo = document.querySelector('#caption-two');
const weatherIconThree = document.querySelector('#weather-three-icon');
const forecastThree = document.querySelector('#forecast-three');
const captionDescThree = document.querySelector('#caption-three');
const weatherIconFour = document.querySelector('#weather-four-icon');
const forecastFour = document.querySelector('#forecast-four');
const captionDescFour = document.querySelector('#caption-four');

const chill = document.getElementById('fw');
//API URL current wearher 
let lat = 25.286106;
let long = 51.534817;
console.log(lat,long)
const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=55e6a0445e9b76e56e106624765beb6c&units=metric`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=55e6a0445e9b76e56e106624765beb6c&units=metric`;
fetch(urlCurrent)
  .then((response) => response.json())
  .then((data) => {
    tempe = data.main.temp;
    wind = data.wind.speed * 3.6;
    humidity = data.main.humidity;
    currentTemp.innerHTML = `<strong>${tempe.toFixed(1)}</strong>`;
    currentWind.innerHTML = `<strong>${wind.toFixed(1)}</strong>`;
    currentHumidity.innerHTML = `<strong>${humidity.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    chill.textContent = `${chillTemperature(tempe,wind)}`;
  });

function chillTemperature(celsius, kmph) {
const fahrenheit = (celsius * 1.8) + 32;
const mph = kmph * 0.62;
let chillfactor = 35.74 + 0.6215 * fahrenheit - 35.75 * mph ** 0.16 + 0.4275 * fahrenheit * mph ** 0.16;
chillfactor = chillfactor.toFixed(1);
if ( fahrenheit > 50 || mph < 3) {
    chilltempe = "N/A";
} else {
    chillCelcius = (5/9)*(chillfactor - 32);
    chilltempe = `${chillCelcius.toFixed(1)} °C`;
}
return chilltempe;
}

fetch(urlForecast)
  .then((response) => response.json())
  .then((data) => {
    var Xmas95 = new Date(data.list[8].dt_txt);
    var weekday = Xmas95.getDay();
    dayone = `${getWeekday(weekday)}, ${Xmas95.getDate()}`;
    forecastOne.textContent = dayone;
    tempeone = data.list[8].main.temp;
    currentTempOne.innerHTML = `<strong>${tempeone.toFixed(1)}</strong>`;
    weather = data.list[8].weather[0].icon;
    const iconOne = `https://openweathermap.org/img/w/${weather}.png`;
    weatherIconOne.setAttribute('src', iconOne);
    const descone = data.list[8].weather[0].description;
    weatherIconOne.setAttribute('alt', descone);
    captionDescOne.textContent = descone;

    var Xmas95 = new Date(data.list[16].dt_txt);
    var weekday = Xmas95.getDay();
    dayone = `${getWeekday(weekday)}, ${Xmas95.getDate()}`;
    forecastTwo.textContent = dayone;
    tempeone = data.list[16].main.temp;
    currentTempTwo.innerHTML = `<strong>${tempeone.toFixed(1)}</strong>`;
    weather = data.list[16].weather[0].icon;
    const iconTwo = `https://openweathermap.org/img/w/${weather}.png`;
    weatherIconTwo.setAttribute('src', iconTwo);
    const desctwo = data.list[16].weather[0].description;
    weatherIconTwo.setAttribute('alt', desctwo);
    captionDescTwo.textContent = desctwo;

    var Xmas95 = new Date(data.list[24].dt_txt);
    var weekday = Xmas95.getDay();
    dayone = `${getWeekday(weekday)}, ${Xmas95.getDate()}`;
    forecastThree.textContent = dayone;
    tempeone = data.list[24].main.temp;
    currentTempThree.innerHTML = `<strong>${tempeone.toFixed(1)}</strong>`;
    weather = data.list[24].weather[0].icon;
    const iconThree = `https://openweathermap.org/img/w/${weather}.png`;
    weatherIconThree.setAttribute('src', iconThree);
    const descthree = data.list[24].weather[0].description;
    weatherIconThree.setAttribute('alt', descthree);
    captionDescThree.textContent = descthree;

    var Xmas95 = new Date(data.list[32].dt_txt);
    var weekday = Xmas95.getDay();
    dayone = `${getWeekday(weekday)}, ${Xmas95.getDate()}`;
    forecastFour.textContent = dayone;
    tempeone = data.list[32].main.temp;
    currentTempFour.innerHTML = `<strong>${tempeone.toFixed(1)}</strong>`;
    weather = data.list[32].weather[0].icon;
    const iconFour = `https://openweathermap.org/img/w/${weather}.png`;
    weatherIconFour.setAttribute('src', iconFour);
    const descfour = data.list[32].weather[0].description;
    weatherIconFour.setAttribute('alt', descfour);
    captionDescFour.textContent = descfour;

    
  });
  function getWeekday(weekday) {
    
    if ( weekday == 0) {
        day = "Sunday";
    } else if (weekday == 1){
        day = "Monday"
    } else if (weekday == 2){
        day = "Tuesday"
    } else if (weekday == 3){
        day = "Wednesday"
    } else if (weekday == 4){
        day = "Thursday"
    } else if (weekday == 5){
        day = "Friday"
    } else if (weekday == 6){
        day = "Saturday"
    }
    return day;
    };
    



  
  