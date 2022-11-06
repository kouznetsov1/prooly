export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  image: string;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}
