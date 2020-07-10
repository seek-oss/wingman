export const componentId = (prefix: string, ...rawValues: string[]) => {
  const values = rawValues.map((value) => Buffer.from(value).toString('hex'));

  return [prefix, ...values].join('-');
};
