// Function to fetch a random subset of items from the JSON data
function getRandomItems(data, count) {
	const shuffled = data.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
  }

 function loadData(path, numItems) {
	fetch(path)
		.then(response => response.json())
		.then(data => {
			const randomItems = getRandomItems(data, numItems); // Get a random selection of numItems
			
			// Process and display the randomly selected items
			randomItems.forEach(item => {
			// Create elements for each item and display them on the page
			const element = document.createElement('div');
			element.textContent = item.name; // Replace 'name' with your JSON property
			document.body.appendChild(element); // Append to the document body or your desired container
			});
		})
		.catch(error => console.log('Error fetching data:', error));

 } 
 
 
 loadData('./assets/data/merged_data.json')