import { createSlice } from '@reduxjs/toolkit';

const steps = [
  "Chop onions",
  "Heat oil in a pan",
  "Add onions and sauté",
  "Add spices and cook for 10 mins",
  "Serve hot!",
];

interface RecipeState {
  currentStep: number;
  steps: string[];
  finished: boolean;
}

const initialState: RecipeState = {
  currentStep: 0,
  steps,
  finished: false,
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStep < state.steps.length - 1) {
        state.currentStep += 1;
      } else {
        state.finished = true;
      }
    },
    prevStep: (state) => {
      if (state.currentStep > 0) {
        state.currentStep -= 1;
        state.finished = false;
      }
    },
    reset: (state) => {
      state.currentStep = 0;
      state.finished = false;
    }
  },
});

export const { nextStep, prevStep, reset } = recipeSlice.actions;
export default recipeSlice.reducer;
