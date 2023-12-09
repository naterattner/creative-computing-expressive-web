// Function to create and append div elements for each item
export function displayReviews(data) {
	const reviewsContainer = document.querySelector('.grid');
  
	data.forEach(item => {
	  const div = document.createElement('div');
	  div.classList.add('review-card', 'grid-item');
  
	  // Extracting fields from the JSON object
	  const name = document.createElement('p');
	  name.textContent = `Name: ${item.name}`;
  
	  const location = document.createElement('p');
	  location.textContent = `Location: ${item.city}, ${item.state}`;
  
	  const categories = document.createElement('p');
	  categories.textContent = `Categories: ${item.categories}`;
  
	  const stars = document.createElement('p');
	  stars.textContent = `Stars: ${item.stars}`;
  
	  const text5Star = document.createElement('p');
	  text5Star.textContent = `Positive Review: ${item.text_5_star}`;
  
	  const text1Star = document.createElement('p');
	  text1Star.textContent = `Negative Review: ${item.text_1_star}`;
  
	  // Append all the fields to the div
	  div.appendChild(name);
	  div.appendChild(location);
	  div.appendChild(categories);
	  div.appendChild(stars);
	  div.appendChild(text5Star);
	  div.appendChild(text1Star);
  
	  // Append the div to the container
	  reviewsContainer.appendChild(div);
	});
  }
  
  