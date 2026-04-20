export const flattenResourceByKey = <T>(resource: T, key: string): T[] => {
  const castedResource = resource as any;

  return [resource].concat(
    castedResource[key] ? flattenResourceByKey(castedResource[key], key) : [],
  );
};
