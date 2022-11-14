/* eslint-disable react/jsx-key */
import { breakfastRecipes, lunchRecipes, dinnerRecipes } from "./data";
import { Carousel } from "./Carousel";

export const Recipes: React.FC = () => {
  const categories: string[] = ["Breakfast", "Lunch", "Dinner"];
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
                <h2 className="text-white text-2xl">{category}</h2>
              </div>
              <div>
                {category === "Breakfast" && (
                  <Carousel recipes={breakfastRecipes} />
                )}
                {category === "Lunch" && <Carousel recipes={lunchRecipes} />}
                {category === "Dinner" && <Carousel recipes={dinnerRecipes} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
