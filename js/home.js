// const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='


// const recipes_cards = document.querySelector('recipes_cards')


// function getMeals(category = "Breakfast"){
//     fetch(API + category)
//        // JSON STRING
//       .then( response => response.json())
//       .then(foods => {
//           console.log(foods.meals);
//           recipes_cards.innerHTML = foods.meals.slice(0,6).map( el => {
//             return renderCard (el)
//           }).join('')

//       })
// }

// //dom

// getMeals()

// function renderCard(food){
//     return `
//     <div class="card">
//     <div class="card-img">
//     <img src="${food.strMealThumb}" alt="">
//     </div>
//     <div class="card-text">
//     <h4>Savory Herb-Infused Chicken</h4>
//     <p>
//      Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken
//     </p>
//                    <p> 40 Min - easy prep -3 server</p>
//                <button>view  recipe</button>
//             </div>


    
//     </div>

//     `
// }








/* 
git add .
git commit - "lesson 8"
git push
*/







const menu = [
    {
        img: 'break.svg',
        name: 'breakfest'
    },



    {
        img: 'lunch.svg',
        name: 'lunch'
    },


    {
        img: 'dinner.svg',
        name: 'dinner'
    },


    {
        img: 'dessert.svg',
        name: 'dessert'
    },


    {
        img: 'quick.svg',
        name: 'quick bite!'
    },

]


//DOM
const menuEl = document.getElementById('menu')

menuEl.innerHTML = menu.map( m => {
    return `
        <div>
                <img src="../img/${m.img}" alt="">
                <h4>${m.name}</h4>
            </div>`
}).join(``)













// async function getMeals(category) {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
//     const data = await response.json();

//     const recipesCards = document.querySelector('.recipes-cards');
//     recipesCards.innerHTML = ''; // Очищаем предыдущие блюда

//     if (data.meals && data.meals.length > 0) {
//         // Ограничиваем до 6 блюд, если они доступны
//         const mealsToShow = data.meals.slice(0, 6);
//         renderMeals(mealsToShow);
//     } else {
//         recipesCards.innerHTML = '<p>No meals found for this category.</p>'; // Если нет блюд, выводим сообщение
//     }
// }

// function renderMeals(meals) {
//     const recipesCards = document.querySelector('.recipes-cards');
//     meals.forEach(meal => {
//         recipesCards.innerHTML += renderCard(meal);
//     });
// }

// function renderCard(food) {
//     return `
//     <div class="card">
//         <div class="card-img">
//             <img src="${food.strMealThumb}" alt="">
//         </div>
//         <div class="card-text">
//             <h4>${food.strMeal.length > 25 ? food.strMeal.substring(0,23) + '...' : food.strMeal}</h4>
//             <div>
//                 <p>40 Min - easy prep - 3 serves</p>
//                 <button onclick="showRecipeId('${food.idMeal}')">view recipe</button>
//             </div>
//         </div>
//     </div>`;
// }

// async function showRecipeId(id) {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
//     const data = await response.json();
//     const meal = data.meals[0];
//     alert(`Recipe: ${meal.strMeal}\nInstructions: ${meal.strInstructions}`);
// }

// const recipeButtons = document.querySelectorAll('.recipes-buttons button');

// recipeButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         recipeButtons.forEach(btn => btn.classList.remove('active-button'));
//         button.classList.add('active-button');
//         const category = button.textContent;
//         getMeals(category); // Загрузка блюд в зависимости от выбранной категории
//     });
// });

// // Инициализируем с "Lunch"
// getMeals("Lunch");




async function getMeals(category) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();

    const recipesCards = document.querySelector('.recipes-cards');
    recipesCards.innerHTML = ''; // Очищаем предыдущие блюда

    if (data.meals && data.meals.length > 0) {
        const mealsToShow = data.meals.slice(0, 6);
        renderMeals(mealsToShow);
    } else {
        recipesCards.innerHTML = '<p>No meals found for this category.</p>';
    }
}

function renderMeals(meals) {
    const recipesCards = document.querySelector('.recipes-cards');
    meals.forEach(meal => {
        recipesCards.innerHTML += renderCard(meal);
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = 1; // Делаем карточки видимыми
    });
}

function renderCard(food) {
    return `
    <div class="card">
        <div class="card-img">
            <img src="${food.strMealThumb}" alt="">
        </div>
        <div class="card-text">
            <h4>${food.strMeal.length > 25 ? food.strMeal.substring(0,23) + '...' : food.strMeal}</h4>
            <div>
                <p>40 Min - easy prep - 3 serves</p>
                <button onclick="showRecipeId('${food.idMeal}')">view recipe</button>
            </div>
        </div>
    </div>`;
}

async function showRecipeId(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    const meal = data.meals[0];
    alert(`Recipe: ${meal.strMeal}\nInstructions: ${meal.strInstructions}`);
}

const recipeButtons = document.querySelectorAll('.recipes-buttons button');

// Инициализируем с "Starter" для отображения изначальных блюд
getMeals("Starter");

// Обработчик событий для кнопок
recipeButtons.forEach(button => {
    button.addEventListener('click', () => {
        recipeButtons.forEach(btn => btn.classList.remove('active-button'));
        button.classList.add('active-button');
        const category = button.textContent;
        getMeals(category);
    });
});

