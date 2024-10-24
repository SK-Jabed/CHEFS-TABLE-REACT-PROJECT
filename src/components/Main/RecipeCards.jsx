import { useState, useEffect } from "react";

const RecipeCards = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
      fetch("/public/recipes.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    
    console.log(recipes);

    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                recipes.map(recipe => (
                    <div key={recipe.recipe_id} className="card shadow-xl">
                        <figure className="px-6 pt-4">
                            <img className="w-full md:h-56 rounded-xl" src={recipe.recipe_image} alt="Recipe Image" />
                        </figure>
                        <div className="card-body">
                            <h2 className="recipe-name text-xl font-bold">{recipe.recipe_name}</h2>
                            <p className="border-b-2 pb-2 text-base font-medium text-gray-500">{recipe.short_description}</p>
                            <h3 className="text-lg font-semibold ">Ingredients: {recipe.ingredients.length}</h3>
                            <ul className="list-disc pb-3 border-b-2">
                                {recipe.ingredients.map((item, idx) => <li className="text-gray-500 font-medium ml-8" key={idx}>{item}</li>)}
                            </ul>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center space-x-2 text-base font-medium text-gray-500">
                                    <i className="fa-regular fa-clock"></i>
                                    <p>{recipe.preparing_time} minutes</p>
                                </div>
                                <div className="flex items-center space-x-2 text-base font-medium text-gray-500">
                                    <i className="fa-solid fa-fire-flame-curved"></i>
                                    <p>{recipe.calories} calories</p>
                                </div>                                                  
                            </div>
                            <div className="card-actions">
                            <button className="btn px-8 bg-green-400 rounded-full hover:bg-green-500 text-lg font-bold mt-4">Want to Cook</button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            
        </div>
    );
};

export default RecipeCards;