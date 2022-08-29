import { useState } from "react";

interface StepperProps {
  steps: number;
  currentStep: number;
}

export default function Stepper(props: StepperProps) {
  const [steppedOver, setSteppedOver] = useState(false);

  const renderLI = () => {
    let listItems: Array<any> = [];
    for (let i = 0; i <= props.steps; i++) {
      if (i <= props.currentStep) {
      }
    }
    return listItems;
  };

  return (
    <div>
      <ol className="flex">{renderLI()}</ol>
    </div>
  );
}
