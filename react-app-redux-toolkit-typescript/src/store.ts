import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "./modules/counter/redux";
import { reducer as todosReducer } from "./modules/todos/redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
