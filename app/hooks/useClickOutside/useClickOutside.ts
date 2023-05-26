import { MutableRefObject, RefObject, useEffect, useRef } from 'react';

const useClickOutside = <T>(
  handler: (e: Event) => void,
  customRef?: MutableRefObject<T>,
  listenerOptions?: AddEventListenerOptions
): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const callBack = (event: Event) => {
      const parent = customRef?.current ?? ref.current;
      const target = event.target;

      if (
        target instanceof Node &&
        parent instanceof Node &&
        !parent.contains(target)
      ) {
        handler(event);
      }
    };

    document.addEventListener('click', callBack, listenerOptions);
    return () =>
      document.removeEventListener('click', callBack, listenerOptions);
  }, [listenerOptions, customRef, handler]);

  return ref;
};

export default useClickOutside;
