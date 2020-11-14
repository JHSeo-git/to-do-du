import configure from "./configure";

const store = configure(
  typeof window === "undefined" ? undefined : (window as any).__REDUX_STATE__
);

export default store;
