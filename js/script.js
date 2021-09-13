const loadMealsByName = () => {
    const inputField = document.getElementById('input-field')
    const mealName = inputField.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => console.log(data.meals[0]))
}

