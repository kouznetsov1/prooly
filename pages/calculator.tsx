import { useState } from "react";
import StandardButton from "../components/standardButton";
import Stepper from "../components/stepper";

export default function CalorieCalculator() {
  const [useCalculator, setUseCalculator] = useState(true);

  return (
    <div className="bg-neutral-900">
      <div className="flex justify-center">
        <Stepper steps={3} currentStep={1} />
      </div>
      <h1 className="text-white text-2xl m-auto w-1/2 text-center my-4">
        Steg 1. Skriv in dina mål och räkna ut ditt intag för en dag.
      </h1>
      <div>
        <CalculatorButtons
          setUseCalculator={setUseCalculator}
          useCalculator={useCalculator}
        />
        {useCalculator ? <Sections /> : <CustomMacros />}
      </div>
      <MoveOnButton />
    </div>
  );
}

interface CalculatorButtonsProps {
  setUseCalculator: React.Dispatch<React.SetStateAction<boolean>>;
  useCalculator: boolean;
}

interface CategoryProps {
  title: string;
  options: string[];
}

var activityLevel: CategoryProps = {
  title: "Vad är din aktivitetsnivå?",
  options: [
    "Stillasittande, ingen träning",
    "Mestadels stillasittande (kontorsarbete) + träning 3-6 dagar i veckan",
    "Lätt aktivitet (träning 3-6 dagar i veckan) + jobb som kräver fysisk aktivitet",
    "Hög aktivitet (träning 6-7 dagar i veckan) + jobb som kräver fysisk aktivitet",
  ],
};

var goal: CategoryProps = {
  title: "Vad har du för mål?",
  options: [
    "Deff - viktminsking med fokus på fettförbränning",
    "Muskeltillväxt - viktökning med fokus på muskeltillväxt",
    "Omfördelning - bibehållande av vikt med fokus på muskeltillväxt och fettförbränning",
  ],
};

var experience: CategoryProps = {
  title: "Vad har du för erfarenhet?",
  options: [
    "Nybörjare - helt ny till träning",
    "Medel - ökar belastningen i gymmet på veckobasis",
    "Intermediär - ökar belastningen i gymmet på månadsbasis",
    "Avancerad - framsteg går endast att se över månader eller ett år",
  ],
};

var categories: CategoryProps[] = [activityLevel, goal, experience];

const CalculatorButtons = (props: CalculatorButtonsProps) => {
  return (
    <div className="w-96 flex justify-evenly m-auto my-8">
      {props.useCalculator ? (
        <button
          className="bg-yellow-300 text-neutral-900 border-2 py-2 px-4 rounded-md text-2xl border-black"
          onClick={() => props.setUseCalculator(true)}
        >
          Kalkylator
        </button>
      ) : (
        <button
          className="text-yellow-300 border-2 border-yellow-300 py-2 px-4 rounded-md text-2xl"
          onClick={() => props.setUseCalculator(true)}
        >
          Kalkylator
        </button>
      )}
      {props.useCalculator ? (
        <button
          className="text-yellow-300 border-2 border-yellow-300 py-2 px-4 rounded-md text-2xl"
          onClick={() => props.setUseCalculator(false)}
        >
          Fyll i själv
        </button>
      ) : (
        <button
          className="bg-yellow-300 text-neutral-900 border-2 py-2 px-4 rounded-md text-2xl border-black"
          onClick={() => props.setUseCalculator(false)}
        >
          Fyll i själv
        </button>
      )}
    </div>
  );
};

function Sections(): JSX.Element {
  return (
    <div className="w-5/6 lg:w-1/2 m-auto">
      <div>
        <AgeSection />
      </div>
      <div>
        {categories.map((category) => (
          <CategorySection title={category.title} options={category.options} />
        ))}
      </div>
    </div>
  );
}

const CategorySection = (props: CategoryProps): JSX.Element => {
  return (
    <div className="my-8 w-5/6 lg:w-full m-auto">
      <h2 className="text-white text-2xl mb-2">{props.title}</h2>
      <div className="flex flex-wrap justify-center">
        {props.options.map((option) => (
          <div className="w-full my-2 flex">
            <input
              className="ml-1"
              type="radio"
              name="colored-radio"
              value={option}
              id={option + "-radio"}
            />
            <div className="mx-2 w-full">
              <span className="text-white">{option}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function AgeSection(): JSX.Element {
  return (
    <div className="grid text-white w-4/6 m-auto justify-evenly">
      <div className="grid grid-cols-3 justify-evenly my-2">
        <span className="col-end-1 w-24">Ålder</span>
        <div className="col-start-2 col-span-2 justify-start flex">
          <input type="number" className="w-20 text-black"></input>
          <span className="ml-2">(15-80)</span>
        </div>
      </div>
      <RadioGenderButtons />
      <LengthWeightForm />
    </div>
  );
}

function RadioGenderButtons(): JSX.Element {
  return (
    <div className="grid justify-between my-2 grid-cols-3">
      <span className="col-end-1 w-24">Kön</span>
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

function LengthWeightForm(): JSX.Element {
  return (
    <div>
      <div className="grid grid-cols-3 justify-between my-2">
        <span className="col-end-1 w-24">Längd</span>
        <div className="col-start-2 col-span-2">
          <input type="number" className="w-20 text-black"></input>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-between my-2">
        <span className="col-end-1 w-24">Vikt</span>
        <div className="col-start-2 col-span-2">
          <input type="number" className="w-20 text-black"></input>
        </div>
      </div>
    </div>
  );
}

const CustomMacros = (): JSX.Element => {
  return (
    <div>
      <p>custom</p>
    </div>
  );
};

const MoveOnButton = (): JSX.Element => {
  return (
    <div className="w-36 m-auto h-24">
      <StandardButton text="Nästa" url="/calculator" inverted={true} />
    </div>
  );
};
