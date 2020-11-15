import { createAction } from "typesafe-actions";
import { BaseState } from "./types";

export const OPEN_SIDEBAR = "@@base/OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "@@base/OPEN)SIDEBAR";

// TODO: call firebase db insert
export const openSidebar = createAction(
  OPEN_SIDEBAR,
  ({ sidebar }: BaseState) => sidebar
)();
export const closeSidebar = createAction(
  CLOSE_SIDEBAR,
  ({ sidebar }: BaseState) => sidebar
)();
