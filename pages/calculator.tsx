import StandardButton from "../components/standardButton";
import Stepper from "../components/stepper";

export default function CalorieCalculator() {
  return (
    <div className="bg-neutral-900 border-4">
      <div>
        <div className="flex justify-center my-12 mr-10">
          <Stepper steps={3} currentStep={1} />
        </div>
        <h1 className="text-white text-2xl m-auto w-1/2 text-center my-8 mt-16">
          Steg 1. Skriv in dina mål och räkna ut ditt intag för en dag.
        </h1>
        <div>
          <CalculatorButtons />
          <AgeSection />
        </div>
      </div>
    </div>
  );
}

function CalculatorButtons() {
  return (
    <div className="w-96 flex justify-evenly m-auto my-8">
      <button className="bg-yellow-300 text-neutral-900 border-2 py-2 px-4 rounded-md text-2xl border-black">
        Kalkylator
      </button>
      <button className="text-yellow-300 border-2 border-yellow-300 py-2 px-4 rounded-md text-2xl">
        Fyll i själv
      </button>
    </div>
  );
}

function AgeSection() {
  return (
    <div className="grid text-white w-96 border-2 m-auto">
      <div className="grid grid-cols-3 justify-between my-2">
        <span className="col-end-1 w-32">Ålder</span>
        <div className="col-start-2 col-span-2 justify-end flex">
          <input type="number" className="w-20 text-black"></input>
          <span className="ml-2">(15-80)</span>
        </div>
      </div>
      <RadioGenderButtons />
      <LengthWeightForm />
    </div>
  );
}

function RadioGenderButtons() {
  return (
    <div className="grid justify-between my-2 grid-cols-3">
      <span className="col-end-1 w-28">Kön</span>
      <div className="col-start-2 col-span-2 mx-3">
        <div className="">
          <input
            type="radio"
            name="colored-radio"
            value="man"
            id="yellow-radio"
            className=""
          />
          <span className="text-white mx-2">Man</span>
        </div>
        <div className="">
          <input
            type="radio"
            name="colored-radio"
            value="kvinna"
            id="yellow-radio"
            className=""
          />
          <span className="text-white mx-2">Kvinna</span>
        </div>
      </div>
    </div>
  );
}

function LengthWeightForm() {
  return (
    <div>
      <div className="grid grid-cols-3 justify-between my-2">
        <span className="col-end-1 w-32">Längd</span>
        <div className="col-start-2 col-span-2">
          <input type="number" className="w-20 text-black"></input>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-between my-2">
        <span className="col-end-1 w-32">Vikt</span>
        <div className="col-start-2 col-span-2">
          <input type="number" className="w-20 text-black"></input>
        </div>
      </div>
    </div>
  );
}
