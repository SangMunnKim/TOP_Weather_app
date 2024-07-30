let apiKey = process.env.WEATHER_API_KEY;

async function getWeatherData(city) {
    try {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;
        const response = await fetch(url, {
            mode: 'cors',
        });
        console.log(`API response status: ${response.status}`);
        
        if (!response.ok) {
            // If the response is not OK, log the status and status text
            const errorText = await response.text();
            console.error(`Error: ${response.status} ${response.statusText}`);
            console.error(`Error body: ${errorText}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const weatherDataJson = await response.json();

        // saveJsonToFile(weatherDataJson, 'weatherData.json');

        return weatherDataJson;
    } 
    catch (error) {
        console.error(`There was an error: ${error.message}`);
        if (error instanceof Response) {
            // Attempt to parse the error response as JSON
            try {
                const errorJson = await error.json();
                console.error('Error JSON:', errorJson);
                return errorJson;
            } catch (jsonError) {
                console.error('Error parsing JSON:', jsonError);
                return { message: 'Error parsing error response as JSON.' };
            }
        } else {
            return { message: 'An unexpected error occurred.' };
        }
    }
}

// function saveJsonToFile(data, filename) {
//     const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = filename;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }

export { getWeatherData };