import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type TodosAction = ActionType<typeof actions>;

export type Todo = {
  id: string;
  title: string;
  content?: string;
  // TODO: add Date and think format
  done: boolean;
};

export interface TodosState {
  todos: Todo[];
}
