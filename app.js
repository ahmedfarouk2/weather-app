/* eslint-disable func-names */
(function () {
  const submitBtn = document.querySelector('#submit');
  const searchBarText = document.querySelector('#search');
  async function getWeather(searchBarValue = 'Cairo, Egypt') {
    const region = document.querySelector('.region');
    const tempC = document.querySelector('.temp-c');
    const tempF = document.querySelector('.temp-f');
    const humidity = document.querySelector('.humidity');
    const clouds = document.querySelector('.clouds');
    const windSpeedKM = document.querySelector('.wind-speed-km');
    const windSpeedMPH = document.querySelector('.wind-speed-mph');
    const weatherFetching = await fetch(`https://api.weatherapi.com/v1/current.json?key=8c3ab26e7de54c36b8d215943230704&q=${searchBarValue}`);
    const responseJSON = await weatherFetching.json();
    region.innerText = `${responseJSON.location.name} / ${responseJSON.location.region} / ${responseJSON.location.country}`;
    tempC.innerText = `Temparature in C = ${responseJSON.current.temp_c}`;
    tempF.innerText = `Temparature in F = ${responseJSON.current.temp_f}`;
    humidity.innerText = `Humidity = ${responseJSON.current.humidity}%`;
    clouds.innerText = `Clouds = ${responseJSON.current.cloud}%`;
    windSpeedKM.innerText = `Wind Speed in KPH = ${responseJSON.current.wind_kph}`;
    windSpeedMPH.innerText = `Wind Speed in MPH = ${responseJSON.current.wind_mph}`;
    console.log(responseJSON);
  }
  getWeather();
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(searchBarText.value);
  });
}());
