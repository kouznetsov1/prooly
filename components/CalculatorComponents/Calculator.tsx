import { CalculatorProps } from "./props";
import { CalculatorButtons } from "./CalculatorButtons";
import { useState } from "react";
import { Questionnaire } from "./Questionnaire";
import { RadioButtons } from "./Questionnaire/RadioButtons";

export const Calculator: React.FC = () => {
  const [useCalculator, setUseCalculator] = useState(true);
  const [finishCalculator, setFinishCalculator] = useState(false);
  const [information, setInformation] = useState<CalculatorProps[]>([]);

  return (
    <div>
      {finishCalculator ? (
        <p>results</p>
      ) : (
        <div>
          <h1 className="text-white text-2xl text-center my-4 m-auto">
            Steg 1. Skriv in dina mål och räkna ut ditt intag för en dag.
          </h1>
          <div>
            <CalculatorButtons
              setUseCalculator={setUseCalculator}
              useCalculator={useCalculator}
            />
          </div>
          <div className="">
            <Questionnaire />
          </div>
        </div>
      )}
    </div>
  );
};
