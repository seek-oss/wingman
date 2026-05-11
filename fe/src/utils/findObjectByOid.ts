interface IdentifiedObject {
  id: {
    value: string;
  };
}

export const findObjectByOid = <T extends IdentifiedObject>(
  objects: T[],
  id: string,
): T | undefined => objects.find((object) => object.id.value === id);
