let apiKey = process.env.WEATHER_API_KEY;

async function getWeatherData(city) {
    try {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;
        const response = await fetch(url, {
            mode: 'cors',
        });
        console.log(`API response status: ${response.status}`);
        const weatherDataJson = await response.json();
        
        return weatherDataJson;
    } 
    catch(error) {
        console.error(`There was an error ${error}`);
        return error.json();
    }
}

export { getWeatherData };