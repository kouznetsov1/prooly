import { atom } from "jotai";
import { MacroProps } from "./props";

export const macroAtom = atom<MacroProps>({
  calories: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
});
