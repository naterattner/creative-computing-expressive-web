import { fetchJSONFile, getRandomItems, processData } from './functionsData.js';

import { displayReviews } from './functionsCards.js';
  
// Call the function to initiate data processing
//processData('./assets/data/merged_data_2021.json');
// console.log(randomItems)

// Call the function to get random items and assign it to a variable
async function getDataAndDisplay() {
	const data = await processData('./assets/data/merged_data_2021.json');
	if (data) {
		console.log(data)
	  // Use the data for further processing or display
	  displayReviews(data); // Call the displayReviews function with the fetched data
	}
  }
  
document.addEventListener('DOMContentLoaded', () => {
// Your JavaScript code that interacts with the DOM goes here
getDataAndDisplay(); // Call your function here
});