const API_KEY = "275d58779ccf4e22af03e792e8819fff";

const recipeList = document.getElementById("recipeList");

function displayRecipes(recipes) {
  // recipelist.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("li");
    recipeItem.classList.add("recipe-item");
    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title;

    const recipeTitle = document.createElement("h2");
    recipeTitle.innerText = recipe.title;

    const recipeIngredients = document.createElement("p");
    recipeIngredients.innerHTML = `
        <strong>Ingredients: </strong> ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(", ")}`;

    const recipeLink = document.createElement("a");
    recipeLink.href = recipe.sourceUrl;
    recipeLink.innerText = "View Recipe";

    recipeItem.appendChild(recipeImage);
    recipeItem.appendChild(recipeTitle);
    recipeItem.appendChild(recipeIngredients);
    recipeItem.appendChild(recipeLink);
    recipelist.appendChild(recipeItem);
  });
}

async function getRecipes() {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );
    const data = await response.json();
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
  
  console.log("recipes");
  console.log(recipes);
}

init();
