/**
 * Pretty prints a JSON value with recursively stripping of the GraphQL
 * `__typename` field.
 */
export const prettyPrintWithoutTypename = (data: unknown) =>
  JSON.stringify(
    data,
    (name, value) => (name === '__typename' ? undefined : value),
    2,
  );
