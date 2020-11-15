import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type BaseAction = ActionType<typeof actions>;

export type BaseState = {
  sidebar: boolean;
};
