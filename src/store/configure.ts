import { createStore, compose } from "redux";
import modules from "./modules";

const isDev = process.env.NODE_ENV === "development";

const devTools = isDev && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const configure = (preloadedState: any) => {
  console.log(preloadedState);
  return createStore(modules, preloadedState, composeEnhancers());
};

export default configure;
