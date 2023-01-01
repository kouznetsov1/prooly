import { Recipe as RecipeProps } from "./props";
import { RecipeCard } from "./RecipeCard";
import { useState, useEffect } from "react";

interface Props {
  recipes: RecipeProps[];
  show: number;
}

export const Carousel: React.FC<Props> = ({ recipes, show }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length: number = recipes.length;

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex + 4 === length - 1 ? currentIndex : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
  };

  console.log(currentIndex);

  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full relative">
        <div className="overflow-hidden w-full h-full flex">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / length)}%)`,
            }}
          >
            {recipes.map((recipe, index) => (
              <div key={index} className="" style={{ width: `${100 / show}%` }}>
                {/*<h1 className="text-white">{index}</h1>*/}
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white w-full m-auto text-center mb-2 mt-8">
        {currentIndex > 0 ? (
          <button className="carousel-button mx-2" onClick={prevSlide}>
            &lt;
          </button>
        ) : (
          <button className="carousel-button mx-2 opacity-0" disabled>
            &lt;
          </button>
        )}
        {currentIndex < length - show - 1 ? (
          <button className="carousel-button mx-2" onClick={nextSlide}>
            &gt;
          </button>
        ) : (
          <button className="carousel-button mx-2 opacity-0" disabled>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};
