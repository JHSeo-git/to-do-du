import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

function useOnClickOutside<T extends HTMLElement = HTMLDivElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }
      handler(event);
    };
    document.addEventListener(`click`, listener);
    document.addEventListener(`touchend`, listener);
    return () => {
      document.removeEventListener(`click`, listener);
      document.removeEventListener(`touchend`, listener);
    };
    // Reload only if ref or handler changes
  }, [ref, handler]);
}

export default useOnClickOutside;
