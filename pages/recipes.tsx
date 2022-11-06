import { Stepper, Button } from "@components";

export default function RecipesPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-neutral-900 border-2 border-neutral-900">
      <div className="my-12">
        <div className="flex justify-center">
          <Stepper steps={3} currentStep={2} />
        </div>
      </div>
    </div>
  );
}
