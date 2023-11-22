document.addEventListener('DOMContentLoaded', function () {
  const fetchButton = document.getElementById('fetchButton');
  const mealContainer = document.getElementById('mealContainer');

  fetchButton.addEventListener('click', function () {
    // Fetching a random meal from TheMealDB API
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Display the fetched meal idea
        if (data.meals && data.meals.length > 0) {
          const meal = data.meals[0];
          mealContainer.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Area:</strong> ${meal.strArea}</p>
            <h3>Ingredients</h3>
            <ul>
              ${generateIngredientsList(meal)}
            </ul>
            <h3>Instructions</h3>
            <p>${meal.strInstructions}</p>
          `;
        } else {
          mealContainer.innerHTML = '<p>No meal idea available. Please try again later.</p>';
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        mealContainer.innerHTML = '<p>Failed to fetch a meal idea. Please try again later.</p>';
      });
  });

  function generateIngredientsList(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredients.push(`<li>${measure} ${ingredient}</li>`);
      }
    }
    return ingredients.join('');
  }
});
