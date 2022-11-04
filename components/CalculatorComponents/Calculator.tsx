import { CalculatorProps } from "./props";
import { CalculatorButtons } from "./CalculatorButtons";
import { useEffect, useState } from "react";
import { Questionnaire } from "./Questionnaire";

export const Calculator: React.FC = () => {
  const [useCalculator, setUseCalculator] = useState(true);
  const [finishCalculator, setFinishCalculator] = useState(false);
  const [information, setInformation] = useState<CalculatorProps[]>([]);

  useEffect(() => {
    console.log(information);
  }, [information]);
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
            <Questionnaire setParentState={setInformation} />
          </div>
        </div>
      )}
    </div>
  );
};
