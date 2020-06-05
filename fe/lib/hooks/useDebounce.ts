import { useEffect, useState } from 'react';

/**
 * @see {@link https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci}
 */
export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
};
