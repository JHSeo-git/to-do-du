import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from 'store/modules/base';

const useUserMenu = () => {
  const dispatch = useDispatch();

  return useCallback(
    (isShow: boolean) =>
      dispatch(isShow ? actions.showUserMenu() : actions.hideUserMenu()),
    [dispatch]
  );
};

export default useUserMenu;
