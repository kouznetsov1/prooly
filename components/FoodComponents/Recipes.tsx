/* eslint-disable react/jsx-key */
import { breakfastRecipes, lunchRecipes, dinnerRecipes } from "./data";
import { RecipeCard } from "./RecipeCard";

export const Recipes: React.FC = () => {
  const categories: string[] = ["Breakfast", "Lunch", "Dinner"];
  console.log("breakfasttyp3", typeof breakfastRecipes);
  return (
    <div>
      <div>
        <h1 className="text-white text-4xl">Recipes</h1>
      </div>
      <div>
        {categories.map((category) => {
          return (
            <div className="my-4">
              <div>
                <h1 className="text-white text-2xl">{category}</h1>
              </div>
              <div>
                {category === "Breakfast" && (
                  <RecipeCard recipes={breakfastRecipes} />
                )}
                {category === "Lunch" && <RecipeCard recipes={lunchRecipes} />}
                {category === "Dinner" && (
                  <RecipeCard recipes={dinnerRecipes} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
