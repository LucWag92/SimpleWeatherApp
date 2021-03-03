import * as ELEMENTS from './js-helper/elements.js';
import fetch from './js-helper/http.js';
import {
  WeatherData,
  WEATHER_PROXY_HANDLER,
} from './js-helper/weather-data.js';
import fillWeatherBox from './js-helper/fill-weather-box.js';

const APITOKEN = 'XXX';

const searchWeather = async () => {
  const cityName = ELEMENTS.ELEMENT_INPUT.value.trim();
  if (cityName.length == 0) {
    alert('Provide CityName');
  }
  ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'block';
  ELEMENTS.ELEMENT_LOADING_WEATHER_BOX.style.display = 'none';
  fetch(cityName, APITOKEN)
    .then((data) => {
      const WEATHER_DATA = new WeatherData(
        cityName,
        data.weather[0].description
      );

      const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
      WEATHER_PROXY.temperature = data.main.temp;
      fillWeatherBox(WEATHER_PROXY);
    })
    .catch((e) => alert(e));
};

ELEMENTS.ELEMENT_BUTTON.addEventListener('click', searchWeather);
