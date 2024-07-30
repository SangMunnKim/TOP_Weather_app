import { weatherData } from "./weather-data-handler";

const form = document.querySelector('form');
const searchBar = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('button');
const currentConditionsDisplay = document.querySelector('.current-conditions');
const addressDisplay = document.querySelector('.address');

const search = form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchQuery = searchBar.value;
  console.log(searchQuery);
  clearDisplay();
  const data = await weatherData(searchQuery);
  displayAddress(data);
  displayCurrentConditions(data);
});

function displayAddress(data) {
    const addres = data.address;
    console.log(addres);
    addressDisplay.textContent = addres;
}

function displayCurrentConditions(weatherData) {
    for (const [key, value] of Object.entries(weatherData.currentConditions)) {
        console.log(`${key}: ${value}`);

        //skip null value entries
        if (value === null) {
            continue;
        }

        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        div.appendChild(h2);
        div.appendChild(p);

        h2.textContent = captializeFirstLetter(camelCaseToSpaceSeparated(key));
        p.textContent = value;

        div.id = `${key}`;  

        currentConditionsDisplay.appendChild(div);
    }
}

function displayError(error) {
    alert(`Error fetching data. ${error}`);
}

function clearDisplay() {
    addressDisplay.innerHTML = '';
    currentConditionsDisplay.innerHTML = '';
}

function captializeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function camelCaseToSpaceSeparated(string) {
    return string
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before uppercase letters
        // .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // Handle cases like "HTTPResponse"
        // .toLowerCase(); // Convert the entire string to lowercase if needed
}


export { search, displayCurrentConditions, displayAddress, displayError };