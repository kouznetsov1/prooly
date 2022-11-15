import { Recipe as RecipeProps } from "./props";

interface Props {
  recipe: RecipeProps;
}

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <div className="m-2 w-56 my-4">
      <div className="text-white">
        <img className="rounded-3xl" src={recipe.image} alt={recipe.name} />
        <div className="mx-2">
          <h1 className="text-lg font-medium my-2">{recipe.name}</h1>
          <div className="whitespace-pre">
            <div className="flex justify-between">
              <div>
                <span>Kalorier: </span>
              </div>
              <div>
                <span className="text-yellow-300">{recipe.kcal}</span>
              </div>
              {"\n"}
            </div>
            <div className="flex justify-between">
              <div>
                <span>Protein: </span>
              </div>
              <div>
                <span className="text-yellow-300">{recipe.protein}</span>
              </div>
              {"\n"}
            </div>
            <div className="flex justify-between">
              <div>
                <span>Kolhydrater: </span>
              </div>
              <div>
                <span className="text-yellow-300">{recipe.carbs}</span>
              </div>
              {"\n"}
            </div>
            <div className="flex justify-between">
              <div>
                <span>Fett: </span>
              </div>
              <div>
                <span className="text-yellow-300">{recipe.fat}</span>
              </div>
              {"\n"}
            </div>
          </div>
          <div className="text-center my-4 flex m-auto justify-center">
            <button className="bg-black text-yellow-300 font-bold rounded-full w-8 h-8">
              -
            </button>
            <p className="mx-4 my-1">0</p>
            <button className="bg-yellow-300 text-black font-bold rounded-full w-8 h-8">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
