/* eslint-disable react/jsx-key */
import { setFips } from "crypto";
import React, { SetStateAction, useEffect, useState } from "react";
import StandardButton from "../components/Button/Button";
import { Stepper } from "../components/Stepper/Stepper";

export default function CalorieCalculator() {
  const [useCalculator, setUseCalculator] = useState(true);
  const [finishCalculator, setFinishCalculator] = useState(false);
  const [macros, setMacros] = useState<MacroProps[]>([]);

  return (
    <div className="bg-neutral-900 min-h-[calc(100vh-160px)] border-2 border-neutral-900">
      <div className="my-12">
        <div className="flex justify-center">
          <Stepper steps={3} currentStep={1} />
        </div>

        {finishCalculator ? (
          <Results setFinishCalculator={setFinishCalculator} />
        ) : (
          <div>
            <h1 className="text-white text-2xl m-auto w-1/2 text-center my-4">
              Steg 1. Skriv in dina mål och räkna ut ditt intag för en dag.
            </h1>
            <div>
              <CalculatorButtons
                setUseCalculator={setUseCalculator}
                useCalculator={useCalculator}
              />
              {useCalculator ? (
                <Sections setMacros={setMacros} />
              ) : (
                <CustomMacros />
              )}
            </div>
            <MoveOnButton setFinishCalculator={setFinishCalculator} />
          </div>
        )}
      </div>
    </div>
  );
}

interface MoveButtonProps {
  setFinishCalculator: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SectionProps {
  setMacros: React.Dispatch<React.SetStateAction<MacroProps[]>>;
}

interface CalculatorButtonsProps {
  setUseCalculator: React.Dispatch<React.SetStateAction<boolean>>;
  useCalculator: boolean;
}

interface MacroProps {
  age: number;
  gender: number;
  weight: number;
  height: number;
  activity: number;
  goal: number;
  experience: number;
}

// This is the buttons that change mode for the calculator
const CalculatorButtons = (props: CalculatorButtonsProps) => {
  return (
    <div className="w-96 flex justify-evenly m-auto my-12">
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

interface AgeProps {
  age: number;
  gender: number;
  weight: number;
  height: number;
}

interface ActivityProps {
  activity: number;
  goal: number;
  experience: number;
}

// Sections for the calculator
const Sections = (props: SectionProps) => {
  const [age, setAge] = useState<AgeProps[]>([]);
  const [activity, setActivity] = useState<ActivityProps[]>([]);

  return (
    <div className="w-5/6 lg:w-1/3 m-auto">
      <div>
        <AgeSection setAge={setAge} />
      </div>
      <div>
        <CategorySection setActivity={setActivity} />
      </div>
    </div>
  );
};

interface CategorySectionProps {
  setActivity: React.Dispatch<React.SetStateAction<ActivityProps[]>>;
}

const CategorySection = (props: CategorySectionProps): JSX.Element => {
  interface CategoryProps {
    title: string;
    name: string;
    options: string[];
  }

  var activityCategory: CategoryProps = {
    title: "Vad är din aktivitetsnivå?",
    name: "activity",
    options: [
      "Stillasittande, ingen träning",
      "Mestadels stillasittande (kontorsarbete) + träning 3-6 dagar i veckan",
      "Lätt aktivitet (träning 3-6 dagar i veckan) + jobb som kräver fysisk aktivitet",
      "Hög aktivitet (träning 6-7 dagar i veckan) + jobb som kräver fysisk aktivitet",
    ],
  };

  var goalCategory: CategoryProps = {
    title: "Vad har du för mål?",
    name: "goal",
    options: [
      "Deff - viktminsking med fokus på fettförbränning",
      "Muskeltillväxt - viktökning med fokus på muskeltillväxt",
      "Omfördelning - bibehållande av vikt med fokus på muskeltillväxt och fettförbränning",
    ],
  };

  var experienceCategory: CategoryProps = {
    title: "Vad har du för erfarenhet?",
    name: "experience",
    options: [
      "Nybörjare - helt ny till träning",
      "Medel - ökar belastningen i gymmet på veckobasis",
      "Intermediär - ökar belastningen i gymmet på månadsbasis",
      "Avancerad - framsteg går endast att se över månader eller ett år",
    ],
  };

  var categories: CategoryProps[] = [
    activityCategory,
    goalCategory,
    experienceCategory,
  ];

  const [activity, setActivity] = useState(0);
  const [goal, setGoal] = useState(0);
  const [experience, setExperience] = useState(0);

  const radioClick = (e: React.SyntheticEvent<Element, Event>) => {
    const target = e.target as HTMLInputElement;
    if (target.name === "activity") {
      setActivity(parseInt(target.value));
    } else if (target.name === "goal") {
      setGoal(parseInt(target.value));
    } else if (target.name === "experience") {
      setExperience(parseInt(target.value));
    }
  };

  useEffect(() => {
    if (activity !== 0 && goal !== 0 && experience !== 0) {
      props.setActivity([
        {
          activity: activity,
          goal: goal,
          experience: experience,
        },
      ]);
    }
  }, [activity, goal, experience]);

  return (
    <div>
      {categories.map((category, index) => (
        <div className="my-8 w-5/6 lg:w-full m-auto">
          <h2 className="text-white text-2xl mb-2">{category.title}</h2>
          <div className="flex flex-wrap justify-center">
            {category.options.map((option, index_option) => (
              <div className="w-full my-2 flex">
                <input
                  className="ml-1"
                  type="radio"
                  name={category.name}
                  value={index_option + 1}
                  id={index_option + "-" + category.title}
                  onInput={(e) => radioClick(e)}
                />
                <div className="mx-2 w-full">
                  <span className="text-white">{option}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

interface AgeSectionProps {
  setAge: React.Dispatch<React.SetStateAction<AgeProps[]>>;
}

function AgeSection(props: AgeSectionProps): JSX.Element {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div className="grid text-white w-5/6 m-auto justify-evenly">
      <div className="grid grid-cols-3 justify-evenly my-2">
        <span className="col-end-1 w-24">Ålder</span>
        <div className="col-start-2 col-span-2 justify-start flex">
          <input
            type="number"
            className="w-20 text-black"
            value={age}
            onChange={(e) => {
              const age_to_number: number = Number(e.target.value);
              setAge(age_to_number);
            }}
          ></input>
          <span className="ml-2">(15-80)</span>
        </div>
      </div>
      <RadioGenderButtons setGender={setGender} />
      <LengthWeightForm />
    </div>
  );
}

interface RadioGenderButtonsProps {
  setGender: React.Dispatch<React.SetStateAction<number>>;
}

function RadioGenderButtons(props: RadioGenderButtonsProps): JSX.Element {
  return (
    <div className="grid justify-between my-2 grid-cols-3">
      <span className="col-end-1 w-24">Kön</span>
      <div className="col-start-2 col-span-2 mx-3">
        <div className="flex">
          <input
            type="radio"
            name="colored-radio"
            value="man"
            id="yellow-radio"
            className=""
            onInput={(e) => props.setGender(1)}
          />
          <span className="text-white mx-2">Man</span>
        </div>
        <div className="flex">
          <input
            type="radio"
            name="colored-radio"
            value="kvinna"
            id="yellow-radio"
            className=""
            onInput={(e) => props.setGender(2)}
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

// Section for showing the results
// Conditionally rendered
const Results = (props: MoveButtonProps): JSX.Element => {
  // placeholder data
  var data = [
    {
      title: "Kalorier",
      value: 3000,
    },
    {
      title: "Protein",
      value: 250,
    },
    {
      title: "Kolhydrater",
      value: 300,
    },
    {
      title: "Fett",
      value: 150,
    },
  ];

  return (
    <div className="w-full text-white">
      <div className="w-4/6 m-auto">
        <h1 className="text-3xl text-center my-4">Resultat</h1>
      </div>
      <div className="w-5/6 m-auto my-4 mt-8">
        {data.map((item) => (
          <div className="my-4 text-center">
            {item.title === "Kalorier" ? (
              <span>
                Ditt dagliga intag av kalorier är{" "}
                <span className="text-yellow-300">{item.value}</span> kalorier
                med följande näringsvärden:
              </span>
            ) : (
              <span>
                {item.title}:{" "}
                <span className="text-yellow-300">{item.value}</span> gram
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="w-full">
        <ResultButtons setFinishCalculator={props.setFinishCalculator} />
      </div>
      <div>
        <FeedbackForm />
      </div>
    </div>
  );
};

// For when you want to add custom macros
const CustomMacros = (): JSX.Element => {
  var data = ["Kalorier (kcal)", "Protein (g)", "Kolhydrater (g)", "Fett (g)"];
  return (
    <div className="w-4/6 lg:w-1/4 m-auto my-12">
      {data.map((item) => (
        <div className="grid grid-cols-2 justify-between my-2">
          <span className="col-end-1 w-26 text-white">{item}</span>
          <div className="col-start-3 col-span-2">
            <input type="number" className="w-20 text-black"></input>
          </div>
        </div>
      ))}
    </div>
  );
};

const MoveOnButton = (props: MoveButtonProps): JSX.Element => {
  return (
    <div className="w-36 m-auto h-24 flex items-center justify-center">
      <div onClick={() => props.setFinishCalculator(true)}>
        <StandardButton text="Nästa" url="/calculator" inverted={false} />
      </div>
    </div>
  );
};

const ResultButtons = (props: MoveButtonProps): JSX.Element => {
  return (
    <div className="w-1/2 md:w-2/5 lg:w-1/5 m-auto my-12 flex text-sm justify-around">
      <div className="w-32" onClick={() => props.setFinishCalculator(false)}>
        <StandardButton text="gå tillbaka" url="/calculator" inverted={false} />
      </div>
      <div className="w-28">
        <StandardButton text="gå vidare" url="/calculator" inverted={false} />
      </div>
    </div>
  );
};

const FeedbackForm = (): JSX.Element => {
  var placeHolderText: string =
    "Jag har räknat ut mitt kaloriintag men något blev fel..";
  return (
    <div className="w-1/2 m-auto">
      <div className="text-center m-auto w-1/2 my-6">
        <div>
          <span className="">Ser något inte rätt ut?</span>
        </div>
        <div>
          <span className="">Kontakta oss här:</span>
        </div>
      </div>
      <div>
        <form className="w-4/5 m-auto">
          <textarea
            id="feedback-result"
            className="w-full h-40 text-black focus:outline-none p-1 overflow-auto rounded-sm"
            placeholder={placeHolderText}
          />
        </form>
      </div>
      <div className="w-4/5 m-auto flex">
        <div className="w-full flex justify-end">
          <StandardButton text="Skicka" url="" inverted={false} />
        </div>
      </div>
    </div>
  );
};

const Macros = (): number[] => {
  var macros: number[] = [0, 0, 0, 0];
  return macros;
};