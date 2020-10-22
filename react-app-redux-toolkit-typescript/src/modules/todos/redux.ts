import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "src/store";

interface State {
  data: string[];
}

const initialState: State = {
  data: [],
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<string>) => {
      state.data.push(payload);
    },
  },
});

export const { addTodo } = slice.actions;

export const reducer = slice.reducer;

export const todosSelector = (state: RootState): State => state.todos;
