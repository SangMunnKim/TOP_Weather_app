import './styles.css';
import { weatherData } from './modules/weather-data-handler.js';
import { search, displayCurrentConditions, displayAddress } from './modules/dom-handler.js';

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