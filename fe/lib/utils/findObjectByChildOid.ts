export const findObjectByChildOid = (objects: any, id: string) => {
  for (let i = 0; i <= objects.length; i++) {
    for (let j = 0; j <= objects[i].children.length; j++) {
      if (
        objects[i].children[j] &&
        objects[i].children[j].id.value === String(id)
      ) {
        return objects[i];
      }
    }
  }
};
