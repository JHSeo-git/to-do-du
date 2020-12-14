import _ from 'lodash';

export const pressedKey = (fn: () => void) => (e: React.KeyboardEvent) => {
  if (e.key === 'Enter') {
    fn();
  }

  return null;
};

export const debounce = _.debounce((func: any) => {
  func();
}, 2000);
