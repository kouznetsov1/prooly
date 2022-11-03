import { RadioButtons } from "./RadioButtons";
import { Forms } from "./Forms/Forms";
import { AgeProps, ActivityProps, CalculatorProps } from "../props";
import { useEffect, useState } from "react";

interface Props {
  setParentState: React.Dispatch<React.SetStateAction<CalculatorProps>>;
}

export const Questionnaire: React.FC = (setParentState) => {
  const [age, setAge] = useState<AgeProps>({} as AgeProps);
  const [activity, setActivity] = useState<ActivityProps>({} as ActivityProps);

  useEffect(() => {
    console.log(age);
    /*
    if (age && activity) {
      setParentState({
        age: age?.age,
        gender: age?.gender,
        weight: age?.weight,
        height: age?.height,
        activity: activity?.activity,
        goal: activity?.goal,
        experience: activity?.experience,
      });
    }
    */
  }, [age, activity]);

  return (
    <div>
      <Forms setParentState={setAge} />
    </div>
  );
};
