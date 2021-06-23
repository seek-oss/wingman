import { faker } from './faker';
import { USERS, User } from './users';

export type Stage = typeof STAGES[number];

export const STAGES = [
  'Open',
  'Inbox',
  'Interview',
  'Offer',
  'Filled',
  'Unfilled',
] as const;

export interface Position {
  id: string;
  name: string;
  candidates: {
    new: number;
    total: number;
  };
  stage: Stage;
  contact: User;
  lastUpdate: Date;
}

export const POSITIONS: Position[] = faker.custom
  .generate<Position>(() => {
    const totalCandidates = faker.datatype.number(5)
      ? faker.datatype.number({
          max: 200,
          min: 1,
        })
      : 0;

    const newCandidates = faker.datatype.number({
      max: totalCandidates,
      min: 0,
    });

    return {
      id: `wingman:position:${faker.datatype.uuid()}`,
      name: faker.name.jobTitle(),
      candidates: {
        new: newCandidates,
        total: totalCandidates,
      },
      stage: faker.random.arrayElement(STAGES),
      contact: faker.random.arrayElement(USERS),
      lastUpdate: faker.date.recent(30),
    };
  }, 25)
  .sort((a, b) => b.lastUpdate.getTime() - a.lastUpdate.getTime());

export const POSITION_BY_ID = POSITIONS.reduce<
  Record<string, Position | undefined>
>((acc, position) => {
  acc[position.id] = position;

  return acc;
}, {});
