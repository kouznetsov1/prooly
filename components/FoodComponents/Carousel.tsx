import { Recipe as RecipeProps } from "./props";
import { RecipeCard } from "./RecipeCard";
import { useState, useEffect } from "react";

interface Props {
  recipes: RecipeProps[];
}

export const Carousel: React.FC<Props> = ({ recipes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length: number = recipes.length;

  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full relative">
        <div className="overflow-hidden w-full h-full flex">
          <div className="flex">
            {recipes.map((recipe, index) => (
              <div key={index}>
                <h1 className="text-white">{index}</h1>
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white w-full m-auto text-center my-2">
        <button className="carousel-button mx-2">&lt;</button>
        <button className="carousel-button mx-2">&gt;</button>
      </div>
    </div>
  );
};
