import { faker } from './faker';

interface User {
  formattedName: string;
}

export const USERS = faker.custom.generate<User>(
  () => ({
    formattedName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  }),
  5,
);
