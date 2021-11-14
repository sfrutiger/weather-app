//get DOM elements
const city = document.getElementById('city');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');


const inputText = document.querySelector('#search-text');
const newSearchButton = document.querySelector('#new-search-button');
const img = document.querySelector('img');


const newSearch = function () {
  getWeather();
  clearSearch();
}

const clearSearch = function () {
  inputText.value = '';
}

const getWeather = function () {
  let searchText = document.querySelector('#search-text').value;
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchText + '&appid=8459b9cbf6abdcf305c2c6843de2c817';
  fetch(url, {mode: 'cors'})
    .then(response => response.json())
    .then(data => {
      console.log(data);
      city.textContent = data.name;
      const descriptionString = data.weather[0].description;
      weatherDescription.textContent = descriptionString.charAt(0).toUpperCase() + descriptionString.slice(1);
      temperature.textContent = 'Temperature: ' + Math.round((data.main.temp - 273.15) * (9/5) + 32) + '\xB0F';
      humidity.textContent = 'Humidity: ' + data.main.humidity + '%';
      wind.textContent = 'Wind: ' + Math.round(data.wind.speed * 2.23694) + ' mph';
    })
};


newSearchButton.addEventListener('click', newSearch);