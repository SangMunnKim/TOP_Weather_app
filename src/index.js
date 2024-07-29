import './styles.css';
import { weatherData } from './modules/weather-data-handler.js';
import { search, displayCurrentConditions } from './modules/dom-handler.js';

// async function consoleLogWeatherData() {
//     const weather = await weatherData('London');
//     displayCurrentConditions(weather);
// }

(async () => {
    const city = "InvalidCityName";
    const data = await weatherData(city);
    console.log(data);
})();

// consoleLogWeatherData();