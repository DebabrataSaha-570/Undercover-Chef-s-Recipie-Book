
const loadMealsByName = () => {
    const inputField = document.getElementById('input-field')
    const mealName = inputField.value;
    inputField.value = '';
    const mealsContainer = document.getElementById('meals-container');

    if (mealName.length > 0) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
            .then(res => res.json())
            .then(data => displayMeals(data.meals))

        mealsContainer.innerHTML = `
    <div id="loading-spinner" class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
    `
    }
    else {
        alert('please write something to display')
    }
}

const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    console.log('meals length', meals.length)




    meals.forEach(meal => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.classList.add('cards')

        div.innerHTML = `
            <div onClick="singleMealDetail('${meal.idMeal}')"  class="card h-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center">${meal.strMeal}</h5>
            
            
            </div>
            </div>
            
            `
            ;
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
    const mealDetails = document.getElementById('meal-details')
    console.log(mealDetails)
    mealDetails.innerHTML = `
    <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-center"  id="exampleModalLabel">${meal.strMeal}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <p> <span class="text-success">Recipe :</span> ${meal.strInstructions} </p>
                    
                    <table class="table table-bordered border-primary">
                    <thead>
                        <tr>
        
                            <th scope="col">Ingredients</th>
        
                            <th scope="col">Measurement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
        
                            <td>${meal.strIngredient1}</td>
        
                            <td>${meal.strMeasure1}</td>
                        </tr>
                        <tr>
        
                            <td>${meal.strIngredient2}</td>
        
                            <td>${meal.strMeasure2}</td>
                        </tr>
                        <tr>
                            <td>${meal.strIngredient3}</td>
        
                            <td>${meal.strMeasure3}</td>
                        </tr>
                        <tr>
                            <td>${meal.strIngredient4}</td>
        
                            <td>${meal.strMeasure4}</td>
                        </tr>
                        <tr>
                            <td>${meal.strIngredient5}</td>
        
                            <td>${meal.strMeasure5}</td>
                        </tr>
                        <tr>
                            <td>${meal.strIngredient6}</td>
        
                            <td>${meal.strMeasure6}</td>
                        </tr>
                        <tr>
                            <td>${meal.strIngredient7}</td>
        
                            <td>${meal.strMeasure7}</td>
                        </tr>
                        <tr>
                            <td>${meal.strIngredient8}</td>
        
                            <td>${meal.strMeasure8}</td>
                        </tr>
                    </tbody>
                </table>

                <a target="_blank" href=" ${meal.strYoutube}"> Video Tutorial </a> 
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
    `

}



