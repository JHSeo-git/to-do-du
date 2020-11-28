import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions } from "store/modules/base";

const useToggleSidebar = () => {
  const dispatch = useDispatch();

  return useCallback(
    (isShow: boolean) =>
      dispatch(isShow ? actions.openSidebar() : actions.closeSidebar()),
    [dispatch]
  );
};

export default useToggleSidebar;
