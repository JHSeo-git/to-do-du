import { StateType } from "typesafe-actions";
import todoReducer from "./todos/reducer";

interface State {
  todos: typeof todoReducer;
}

declare module "typesafe-actions" {
  export type RootState = StateType<State>;
}
