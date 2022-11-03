import { RadioButtons } from "./RadioButtons";
import { Forms } from "./Forms/Forms";
import { AgeProps, ActivityProps, CalculatorProps } from "../props";
import { useEffect, useState } from "react";

interface Props {
  setParentState: React.Dispatch<React.SetStateAction<CalculatorProps[]>>;
}

export const Questionnaire: React.FC = (setParentState) => {
  const [age, setAge] = useState<AgeProps[]>([]);
  const [activity, setActivity] = useState<ActivityProps[]>([]);

  useEffect(() => {
    const ageState = age[0];
    const activityState = activity[0];
    if (
      ageState.age !== 0 &&
      ageState.gender !== 0 &&
      ageState.height !== 0 &&
      ageState.weight !== 0 &&
      activityState.activity !== 0 &&
      activityState.goal !== 0 &&
      activityState.experience !== 0
    ) {
      setParentState([
        {
          age: ageState.age,
          gender: ageState.gender,
          weight: ageState.weight,
          height: ageState.height,
          activity: activityState.activity,
          goal: activityState.goal,
          experience: activityState.experience,
        },
      ]);
    }
  }, [age, activity]);

  return (
    <div>
      <Forms setParentState={setAge} />
      <RadioButtons setParentState={setActivity} />
    </div>
  );
};
