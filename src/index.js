import './styles.css';
import { weatherData } from './modules/weather-data-handler.js';
import { search, displayCurrentConditions, displayAddress } from './modules/dom-handler.js';

// async function consoleLogWeatherData() {
//     const weather = await weatherData('London');
//     displayCurrentConditions(weather);
// }
// async function fetchLocalJson(filePath) {
//     const response = await fetch(filePath);
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return await response.json();
// }

(async () => {
    const city = "London";
    try {
        const data = await weatherData(city);
        displayAddress(data);
        displayCurrentConditions(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
})();

// consoleLogWeatherData();