import { faker } from './faker';

export interface User {
  formattedName: string;
  id: string;
}

export const USERS = faker.custom.generate<User>(
  () => ({
    formattedName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    id: faker.datatype.uuid(),
  }),
  5,
);
