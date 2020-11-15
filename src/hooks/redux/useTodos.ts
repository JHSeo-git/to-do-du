import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";

const useTodos = () => {
  const todos = useSelector((state: RootState) => {
    return state.todos;
  });
  return todos;
};

export default useTodos;
