import * as ELEMENTS from './elements.js';
export default (WEATHER_PROXY) => {
  ELEMENTS.ELEMENT_LOADING_TEXT.value = '';
  ELEMENTS.ELEMENT_LOADING_WEATHER_TEXT.textContent = WEATHER_PROXY.cityName;
  ELEMENTS.ELEMENT_LOADING_WEATHER_Description.textContent =
    WEATHER_PROXY.description;
  ELEMENTS.ELEMENT_LOADING_WEATHER_TEMP.textContent = WEATHER_PROXY.temperature;
  ELEMENTS.ELEMENT_LOADING_WEATHER_BOX.style.display = 'block';
  ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none';
};
