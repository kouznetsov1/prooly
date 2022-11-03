import { Stepper, Button, Calculator } from "@components";

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="flex justify-center">
        <Stepper steps={3} currentStep={1} />
      </div>
      <div className="flex justify-center">
        <Calculator />
      </div>
    </div>
  );
}
