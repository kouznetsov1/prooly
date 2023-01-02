/* eslint-disable react/jsx-key */
import { breakfastRecipes, lunchRecipes, dinnerRecipes } from "./data";
import { Carousel } from "./Carousel";

export const Recipes: React.FC = () => {
  const categories: string[] = ["Frukost", "Lunch", "Middag"];
  const show: number = 4;
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
                {category === "Frukost" && (
                  <Carousel recipes={breakfastRecipes} show={show} />
                )}
                {category === "Lunch" && (
                  <Carousel recipes={lunchRecipes} show={show} />
                )}
                {category === "Middag" && (
                  <Carousel recipes={dinnerRecipes} show={show} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
