import React from "react";

interface Props {
  setUseCalculator: React.Dispatch<React.SetStateAction<boolean>>;
  useCalculator: boolean;
}

export const CalculatorButtons: React.FC<Props> = ({
  setUseCalculator,
  useCalculator,
}) => {
  return (
    <div>
      <div className="w-96 flex justify-evenly m-auto my-12">
        {useCalculator ? (
          <button
            className="bg-yellow-300 text-neutral-900 border-2 py-2 px-4 rounded-md text-2xl border-black"
            onClick={() => setUseCalculator(true)}
          >
            Kalkylator
          </button>
        ) : (
          <button
            className="text-yellow-300 border-2 border-yellow-300 py-2 px-4 rounded-md text-2xl"
            onClick={() => setUseCalculator(true)}
          >
            Kalkylator
          </button>
        )}
        {useCalculator ? (
          <button
            className="text-yellow-300 border-2 border-yellow-300 py-2 px-4 rounded-md text-2xl"
            onClick={() => setUseCalculator(false)}
          >
            Fyll i själv
          </button>
        ) : (
          <button
            className="bg-yellow-300 text-neutral-900 border-2 py-2 px-4 rounded-md text-2xl border-black"
            onClick={() => setUseCalculator(false)}
          >
            Fyll i själv
          </button>
        )}
      </div>
    </div>
  );
};
