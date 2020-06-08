export const isObject = (
  value: unknown,
): value is Record<PropertyKey, unknown> =>
  typeof value === 'object' && value !== null;

export const hasStringProp = <P extends PropertyKey>(
  value: unknown,
  prop: P,
): value is Record<P, string> =>
  isObject(value) && typeof value[prop] === 'string';
