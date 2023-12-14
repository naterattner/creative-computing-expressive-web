import { fetchJSONFile, getRandomItems, processData } from './functionsData.js';
import { displayReviews } from './functionsCards.js';

const jsonPath = './assets/data/merged_data_1yr.json';

async function initializeIsotope() {
  try {
    const grid = document.querySelector('.grid');
    const iso = new Isotope(grid, {
      itemSelector: '.grid-item',
      masonry: {
        columnWidth: 324
      },
    });
    return iso;
  } catch (error) {
    console.error('Error initializing Isotope:', error);
    return null;
  }
}

async function getDataAndDisplay() {
  try {
    const data = await processData(jsonPath);
    if (data) {
      displayReviews(data);
      return data;
    }
    return null;
  } catch (error) {
    console.error('Error getting data and displaying:', error);
    return null;
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const iso = await initializeIsotope();
    if (iso) {
      const data = await getDataAndDisplay();
      if (data) {
        const refreshButton = document.getElementById('refreshButton');
        refreshButton.addEventListener('click', async () => {
          const gridDiv = document.querySelector('.grid');
          gridDiv.innerHTML = '';
          const newData = await getDataAndDisplay();
          if (newData && iso) {
            iso.reloadItems();
            iso.arrange();
          }
        });
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
