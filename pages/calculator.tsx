import { Stepper, Button, Calculator } from "@components";

export default function CalculatorPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-neutral-900 border-2 border-neutral-900">
      <div className="my-12 text-white">
        <div className="flex justify-center">
          <Stepper steps={3} currentStep={1} />
        </div>
        <div className="flex justify-center">
          <Calculator />
        </div>
      </div>
    </div>
  );
}
