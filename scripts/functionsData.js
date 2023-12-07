
////////// DATA PROCESSING //////////
/////////////////////////////////////

// Function to fetch the JSON file
export async function fetchJSONFile(dataPath) {
	try {
	  const response = await fetch(dataPath);
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.error('Error fetching data:', error);
	  return null;
	}
  }

// Function to get a random subset of items
export function getRandomItems(data, count) {
	const shuffled = data.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
  }

// Fetch and process the data
export async function processData(dataPath) {
	const jsonData = await fetchJSONFile(dataPath);
	if (jsonData) {
	  const randomItems = getRandomItems(jsonData, 33); // Get a random selection of 33 items
	  return randomItems; // Return the random items
	} else {
	  console.error('Failed to fetch data.');
	  return null;
	}
  }