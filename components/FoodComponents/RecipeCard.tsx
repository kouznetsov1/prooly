import { Recipe as RecipeProps } from "./props";

interface Props {
  recipes: RecipeProps[];
}

export const RecipeCard: React.FC<Props> = ({ recipes }) => {
  return (
    <div className="border-2 overflow-auto flex">
      {recipes.map((recipe, index) => (
        <div className="m-2 border-2 h-24" key={index}>
          <div>
            {/*<img src={recipe.image} alt={recipe.name} />*/}
            <h1 className="text-white text-md">{recipe.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
