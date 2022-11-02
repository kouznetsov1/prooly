import { AgeProps } from "../../props";
import { useState, useEffect } from "react";

interface Props {
  setParentState: React.Dispatch<React.SetStateAction<AgeProps[]>>;
}

export const Forms: React.FC<Props> = ({ setParentState }) => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const genders = [
    {
      gender: "man",
      value: 1,
    },
    {
      gender: "kvinna",
      value: 2,
    },
  ];

  const lengthAndWeight = ["längd", "vikt"];

  useEffect(() => {
    if (age !== 0 && gender !== 0 && weight !== 0 && height !== 0) {
      setParentState([
        {
          age: age,
          gender: gender,
          weight: weight,
          height: height,
        },
      ]);
    }
  });

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
      {/* gender */}
      <div className="grid justify-between my-2 grid-cols-3">
        <span className="col-end-1 w-24">Kön</span>
        <div className="col-start-2 col-span-2 mx-3">
          {genders.map((item, index) => (
            <div className="flex" key={"gender" + index}>
              <input
                type="radio"
                name="colored-radio"
                value="man"
                id="yellow-radio"
                className=""
                onInput={() => setGender(item.value)}
              />
              <span className="text-white mx-2 capitalize">{item.gender}</span>
            </div>
          ))}
        </div>
        {/* LW */}
        <div>
          {lengthAndWeight.map((item, index) => (
            <div
              key={"lw" + index}
              className="grid grid-cols-3 justify-between my-2"
            >
              <span className="col-end-1 w-24 capitalize">{item}</span>
              <div className="col-start-2 col-span-2">
                <input
                  type="number"
                  className="w-20 text-black"
                  onInput={(e) => {
                    // TODO: Fix this
                    console.log(e.target);
                    /*
                    if (item === "längd") {
                      setHeight(Number(e.target));
                    } else if (item === "vikt") {
                      setWeight(Number());
                    }
                    */
                  }}
                ></input>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
