import { useState } from "react";

const useFocus = (): [boolean, () => void, () => void] => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  return [focus, onFocus, onBlur];
};

export default useFocus;
