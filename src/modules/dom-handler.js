import { weatherData } from "./weather-data-handler";

const form = document.querySelector('form');
const searchBar = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('button');
const currentConditionsDisplay = document.querySelector('.current-conditions');

const search = form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchQuery = searchBar.value;
  console.log(searchQuery);
});

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

        h2.textContent = key;
        p.textContent = value;

        div.classList.add(`${key}`);  

        currentConditionsDisplay.appendChild(div);
    }
}

export { search, displayCurrentConditions };