const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const image = "./sample.jpg"
const recipeList = document.getElementById("recipeList");

function displayRecipes(recipes) {
  console.log(recipes);
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("li");
    recipeItem.classList.add("recipe-item");
    recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = "recipe - title";

    recipeTitle = document.createElement("h2");
    recipeTitle.innerText = recipe.title;

    recipeIngredients = document.createElement("p");
    recipeIngredients.innerHTML = `
        <strong>Ingredients: </strong> ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(", ")}`;

    recipeLink = document.createElement("a");
    recipeLink.href = recipe.sourceUrl;
    recipeLink.innerText = "View Recipe";

    recipeItem.appendChild(recipeImage);
    recipeItem.appendChild(recipeTitle);
    recipeItem.appendChild(recipeIngredients);
    recipeItem.appendChild(recipeLink);
    recipeList.appendChild(recipeItem);
  });
}

async function getRecipes() {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.recipes);
    return data.recipes;

  } catch (error) {
    throw new Error("New error message", { cause: error });
  }

}

async function init() {
  const recipes = await getRecipes();
  if(recipes){
    displayRecipes(recipes);
  }else {
    const error = new Error;
    console.log(error)
  }
  }

init();
