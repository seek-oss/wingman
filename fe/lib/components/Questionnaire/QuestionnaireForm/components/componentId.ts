export const componentId = (prefix: string, ...rawValues: string[]) => {
  const values = rawValues.map((str) => {
    let value = '';

    for (let i = 0; i < str.length; i++) {
      value += str.charCodeAt(i).toString(36);
    }

    return value;
  });

  return [prefix, ...values].join('-');
};
