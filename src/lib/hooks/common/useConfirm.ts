const useConfirm = () => {
  const confirmAction = (
    message: string,
    callback?: () => void,
    rejection?: () => void
  ) => {
    if (window.confirm(message)) {
      if (callback) callback();
    } else {
      if (rejection) rejection();
    }
  };
  return confirmAction;
};

export default useConfirm;
