import { Stepper, Button } from "@components";
import { Recipes } from "@components";

export default function RecipesPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-neutral-900 border-2 border-neutral-900">
      <div className="my-12">
        <div className="flex justify-center">
          <Stepper steps={3} currentStep={2} />
        </div>
        <div className="border-2 grid grid-cols-3 gap-4 mx-12">
          <div className="col-span-2">
            <Recipes />
          </div>
          <div className="border-2">
            <p className="text-4xl text-white">Calories & macros</p>
          </div>
        </div>
      </div>
    </div>
  );
}
