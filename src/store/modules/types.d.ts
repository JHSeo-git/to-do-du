import { StateType } from "typesafe-actions";
import { AuthState } from "./auth";
import { BaseState } from "./base";
import { TodosState } from "./todos";
import { UserState } from "./user";

interface State {
  todoState: TodosState;
  authState: AuthState;
  baseState: BaseState;
  userState: UserState;
}
