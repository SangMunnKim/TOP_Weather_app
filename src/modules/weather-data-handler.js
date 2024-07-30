import { getWeatherData } from "./api-handler";

async function processData(weatherDataJson) {
    const weatherData = {
        address: weatherDataJson.resolvedAddress,
        currentConditions: weatherDataJson.currentConditions,
        days: weatherDataJson.days,
    }
    return weatherData;
}

async function weatherData(city) {
    const result = await getWeatherData(city);
    const weatherData = processData(result);
    return weatherData;
};

export { processData, weatherData };