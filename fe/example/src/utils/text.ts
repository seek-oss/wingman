export const pluralise = (count: number, word: string) =>
  `${count} ${word}${count === 1 ? '' : 's'}`;
