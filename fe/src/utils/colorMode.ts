import { colorModeStyle } from 'braid-design-system/css';

/**
 * ```typescript
 * const input = '${parent}:hover &, ${parent}:active &';
 * const fromColorModeStyle = '${darkMode} &';
 * const output = '${darkMode} ${parent}:hover &, ${darkMode} ${parent}:active &';
 */
export const colorModeStyleWithSelector = (
  selector: string,
  ...params: Parameters<typeof colorModeStyle>
) => {
  const initial = colorModeStyle(...params);

  const selectors = Object.fromEntries(
    Object.entries(initial.selectors ?? {}).map(([key, value]) => [
      selector
        .split(', ')
        .map((s) => `${key.replace(/ &$/, '')} ${s}`)
        .join(', '),
      value,
    ]),
  );

  return {
    ...initial,
    selectors,
  };
};
