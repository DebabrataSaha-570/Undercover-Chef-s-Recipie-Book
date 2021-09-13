const loadMealsByName = () => {
    const inputField = document.getElementById('input-field')
    const mealName = inputField.value;
    inputField.value = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meals-container');

    meals.forEach(meal => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
       <div onClick="singleMealDetail('${meal.idMeal}')"  class="card h-100 ">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">${meal.strMeal}</h5>
                        
                      
                    </div>
                </div>
       
       `
        mealsContainer.appendChild(div)
    })
}

const singleMealDetail = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = (meal) => {
    console.log(meal)
    const mealDetail = document.getElementById('meal-detail-container')
    mealDetail.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">Meal Instruction : ${meal.strInstructions}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Youtube </a>
    </div>
  </div>
    `
}

