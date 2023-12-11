import { fetchJSONFile, getRandomItems, processData } from './functionsData.js';

import { displayReviews } from './functionsCards.js';
  
// Call the function to initiate data processing
//processData('./assets/data/merged_data_2021.json');
// console.log(randomItems)

const jsonPath = './assets/data/merged_data_1yr.json'

// Call the function to get random items and assign it to a variable
async function getDataAndDisplay() {
	const data = await processData(jsonPath);
	if (data) {
		console.log(data)
	  // Use the data for further processing or display
	  displayReviews(data); // Call the displayReviews function with the fetched data
	}
  }
  
document.addEventListener('DOMContentLoaded', () => {
// Your JavaScript code that interacts with the DOM goes here
// getDataAndDisplay(); // Call your function here then 

// Call function then Initialize Isotope after data fetching and display
getDataAndDisplay().then(() => {
	var grid = document.querySelector('.grid');
	var iso = new Isotope(grid, {
	  itemSelector: '.grid-item',
	  masonry: {
		columnWidth: 324
	  },
	});
  }).catch((error) => {
	console.error('Error fetching data:', error);
  });

});


//Refresh data
const refreshButton = document.getElementById('refreshButton');

// Function to handle the button click
function handleButtonClick() {
	// Add your logic here for refreshing data or any action you want to perform
	console.log('Button clicked! Refreshing data...');
	const gridDiv = document.querySelector('.grid');

	// Empty the grid container by setting its innerHTML to an empty string
	gridDiv.innerHTML = '';
	// Add more code for data refresh or other actions
	getDataAndDisplay().then(() => {
		var grid = document.querySelector('.grid');
		var iso = new Isotope(grid, {
		  itemSelector: '.grid-item',
		  masonry: {
			columnWidth: 324
		  },
		});
	  }).catch((error) => {
		console.error('Error fetching data:', error);
	  });
	
	// For example, refreshing the Isotope layout (if applicable)
	// iso.layout();
  }
  
  // Attach a click event listener to the button
  refreshButton.addEventListener('click', handleButtonClick);
