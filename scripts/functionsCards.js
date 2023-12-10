// Function to create and append div elements for each item
export function displayReviews(data) {
	const reviewsContainer = document.querySelector('.grid');
  
	data.forEach(item => {
	  const div = document.createElement('div');
	  div.classList.add('review-card', 'grid-item');

	  const cardDetailsDiv = document.createElement('div');
	  cardDetailsDiv.classList.add('card-details');

	  const cardReviewsDiv = document.createElement('div');
	  cardReviewsDiv.classList.add('card-reviews');
  
	  // Extracting fields from the JSON object
	  const name = document.createElement('p');
	  name.classList.add('card-name');
	  name.textContent = `${item.name}`;
  
	  const location = document.createElement('p');
	  location.classList.add('card-location');
	  location.textContent = `${item.city}, ${item.state}`;

	  const stars = document.createElement('p');
	  stars.classList.add('card-stars');
	  stars.textContent = `${item.stars} stars`;

	  const locationAndStars = document.createElement('p');
	  locationAndStars.classList.add('card-location-and-stars')
	  locationAndStars.textContent = `${item.city}, ${item.state} • ${item.stars} stars`;

	  const hrElem = document.createElement('hr');
  
	  const categories = document.createElement('p');
	  categories.classList.add('card-categories');
	  categories.textContent = `${item.categories}`;
  
	  const text5StarHeading = document.createElement('div');
	  text5StarHeading.classList.add('card-text5StarHeading');

	  //add five filled stars
	  for (let i = 0; i < 5; i++) {
		const filledStar = document.createElement('span');
	    filledStar.classList.add('filled-star')
	    filledStar.textContent = '\u2605';
	    text5StarHeading.appendChild(filledStar);
	  }

	  const text5Star = document.createElement('p');
	  text5Star.classList.add('card-text5Star');
	  text5Star.textContent = `${item.text_5_star}`;

	  const text1StarHeading = document.createElement('div');
	  text1StarHeading.classList.add('card-text1StarHeading');

	  // Loop to create and append stars
	  for (let i = 0; i < 5; i++) {
		const star = document.createElement('span');
		star.textContent = '\u2605'; // Unicode character for a star (★)
		if (i === 0) {
			star.classList.add('filled-star'); // Add a different class to the first star
		}
		else {
			star.classList.add('empty-star');
		}
		text1StarHeading.appendChild(star);
		
	  }

  
	  const text1Star = document.createElement('p');
	  text1Star.classList.add('card-text1Star');
	  text1Star.textContent = `${item.text_1_star}`;
  
	  // Append all the fields to the div
	  cardDetailsDiv.appendChild(name);
	//   cardDetailsDiv.appendChild(location);
	//   cardDetailsDiv.appendChild(stars); 
	  cardDetailsDiv.appendChild(locationAndStars); 
	  cardDetailsDiv.appendChild(categories);
	  cardReviewsDiv.appendChild(text5StarHeading);
	  cardReviewsDiv.appendChild(text5Star);
	  cardReviewsDiv.appendChild(hrElem);
	  cardReviewsDiv.appendChild(text1StarHeading);
	  cardReviewsDiv.appendChild(text1Star);

	  // Append those divs to the parent div
	  div.appendChild(cardDetailsDiv)
	  div.appendChild(cardReviewsDiv)
  
	  // Append the div to the container
	  reviewsContainer.appendChild(div);
	});
  }
  
  