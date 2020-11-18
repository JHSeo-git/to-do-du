import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";

const useTodos = () => {
  const todos = useSelector(({ todos }: RootState) => {
    return todos;
  });
  return todos;
};

export default useTodos;
