import { useState } from 'react';

const useExpandable = (): [boolean, () => void] => {
  const [expand, setExpand] = useState(true);

  const onClick = () => {
    setExpand(!expand);
  };

  return [expand, onClick];
};

export default useExpandable;
