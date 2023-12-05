// Function to fetch the JSON file
async function fetchJSONFile() {
	try {
	  const response = await fetch('./assets/data/merged_data_2021.json');
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.error('Error fetching data:', error);
	  return null;
	}
  }
  
  // Function to get a random subset of items
  function getRandomItems(data, count) {
	const shuffled = data.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
  }
  
  // Fetch and process the data
  async function processData() {
	const jsonData = await fetchJSONFile();
	if (jsonData) {
	  const randomItems = getRandomItems(jsonData, 100); // Get a random selection of 100 items
	  console.log(randomItems); // Do something with the randomly selected items
	} else {
	  console.error('Failed to fetch data.');
	}
  }
  
  // Call the function to initiate data processing
  processData();