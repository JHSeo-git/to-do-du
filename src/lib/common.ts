export const pressedKey = (fn: () => void) => (e: React.KeyboardEvent) => {
  if (e.key === 'Enter') {
    fn();
  }

  return null;
};
