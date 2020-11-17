import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";

const useTodos = () => {
  const todos = useSelector(({ todoState }: RootState) => {
    return todoState;
  });
  return todos;
};

export default useTodos;
