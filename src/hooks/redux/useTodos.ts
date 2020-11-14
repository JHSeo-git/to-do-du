import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";

const useTodos = () => {
  const todos = useSelector((state: RootState) => {
    console.log(state.todos);
    return state.todos;
  });
  return todos;
};

export default useTodos;
