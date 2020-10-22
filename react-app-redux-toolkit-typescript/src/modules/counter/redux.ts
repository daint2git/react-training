import { createAction, createReducer } from "@reduxjs/toolkit";

import { RootState } from "src/store";

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");

interface State {
  value: number;
}

const initialState: State = {
  value: 0,
};

export const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(increment, (state) => {
      state.value += 1;
    })
    .addCase(decrement, (state) => {
      state.value -= 1;
    })
);

export const counterSelector = (state: RootState): State => state.counter;
