import { faker } from './faker';

export interface User {
  formattedName: string;
  id: string;
}

export const USERS = faker.custom.generate<User>(
  () => ({
    formattedName: `${faker.person.firstName()} ${faker.person.lastName()}`,
    id: faker.string.uuid(),
  }),
  5,
);
