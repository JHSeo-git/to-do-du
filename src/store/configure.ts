import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import modules, { rootSaga } from "./modules";

const isDev = process.env.NODE_ENV === "development";

const devTools = isDev && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// TODO: add saga middleware
const configure = (preloadedState: any) =>
  createStore(
    modules,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  );

sagaMiddleware.run(rootSaga);

export default configure;
