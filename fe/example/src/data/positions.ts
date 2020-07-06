import { faker } from './faker';
import { USERS } from './users';

type Stage = typeof STAGES[number];

const STAGES = [
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
  contact: string;
  lastUpdate: Date;
}

export const POSITIONS: Position[] = faker.custom
  .generate<Position>(() => {
    const newCandidates = faker.random.number({ max: 20, min: 0 });

    const totalCandidates = faker.random.number({
      max: 200,
      min: newCandidates,
    });

    return {
      id: `wingman:position:${faker.random.uuid()}`,
      name: faker.name.jobTitle(),
      candidates: {
        new: newCandidates,
        total: totalCandidates,
      },
      stage: faker.random.arrayElement(STAGES),
      contact: faker.random.arrayElement(USERS).formattedName,
      lastUpdate: faker.date.recent(30),
    };
  }, 25)
  .sort((a, b) => b.lastUpdate.getTime() - a.lastUpdate.getTime());
