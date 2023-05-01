import { type SetStateAction, useState } from 'react';

/**
 * @see {@link https://usehooks.com/useLocalStorage/}
 */
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const rawItem = window.localStorage.getItem(key);

      return rawItem === null ? initialValue : JSON.parse(rawItem);
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: SetStateAction<T>) => {
    // This is unsafe if you pass in a function as T. So don't do that.
    const isFunction = (
      action: SetStateAction<T>,
    ): action is (prevState: T) => T => typeof action === 'function';

    const valueToStore = isFunction(value) ? value(storedValue) : value;

    setStoredValue(valueToStore);

    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue] as const;
};
