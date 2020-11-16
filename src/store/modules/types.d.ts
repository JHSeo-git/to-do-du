import { StateType } from "typesafe-actions";
import { TodosState } from "./todos";

interface State {
  todoState: TodosState;
}

declare module "typesafe-actions" {
  export type RootState = StateType<State>;
}
