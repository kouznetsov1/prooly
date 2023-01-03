import { Recipe as RecipeProps } from "./props";
import { RecipeCard } from "./RecipeCard";
import { useState, useEffect } from "react";

interface Props {
  recipes: RecipeProps[];
  show: number;
}

var _window = typeof window !== "undefined" && window;

export const Carousel: React.FC<Props> = ({ recipes, show }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [xPos, setXPos] = useState(0);
  const [xDelta, setXDelta] = useState(0);
  const [xPosDelta, setXPosDelta] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex + 4 === recipes.length - 1 ? currentIndex : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
  };

  const handleDownCapture = (e: any) => {
    setXPos(e.clientX);
  };

  const handleUpCapture = (e: any) => {
    console.log(xPos, e.clientX);
    setXDelta(e.clientX - xPos);
    console.log("xDelta: ", xDelta);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full relative">
        <div className="overflow-hidden w-full h-full flex">
          <div
            className="flex"
            /*style={{
              transform: `translateX(-${
                currentIndex * (100 / recipes.length)
              }%)`,
            }}*/
            style={{
              transform: `translateX(-${xPosDelta}px)`,
            }}
            onMouseDownCapture={(e) => handleDownCapture(e)}
            onMouseUpCapture={(e) => handleUpCapture(e)}
            onTouchStartCapture={(e) => handleDownCapture(e)}
            onTouchEndCapture={(e) => handleUpCapture(e)}
          >
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="border-2 w-64"
                /*style={{ width: `${100 / show}%` }}*/
              >
                <p className="text-white text-center">{index}</p>
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
        {currentIndex < recipes.length - show - 1 ? (
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
