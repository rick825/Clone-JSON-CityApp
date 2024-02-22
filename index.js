document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
  try {
    const response = await fetch('https://api.npoint.io/7bbd3a59c401f616bb89'); 
    const data = await response.json();
    displayCities(data.places);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayCities(cities) {
  const container = document.getElementById('cities-container');
  container.innerHTML = '';

  cities.forEach(city => {
    const card = document.createElement('div');
    card.classList.add('city-card');

    const image = document.createElement('img');
    image.src = city.image;
    card.appendChild(image);

    const cityName = document.createElement('h2');
    cityName.textContent = city.name;
    card.appendChild(cityName);

    const cityInfo = document.createElement('p');
    cityInfo.textContent = city.info;
    cityInfo.classList.add('city-info');
    card.appendChild(cityInfo);

    container.appendChild(card);
  });
}