import { faker } from './faker';
import { POSITIONS, Position } from './positions';
import { Qualification, generateQualification } from './qualifications';
import { SKILLS, Skill } from './skills';

export interface Candidate {
  id: string;
  formattedName: string;
  source: Source;

  // TODO: support multiple positions
  position: Pick<Position, 'id'>;

  attachments: Attachment[];
  qualifications: Qualification[];
  roles: Role[];
  skills: Skill[];
}

interface Attachment {
  filename: string;
  type: string;
  url: string;
}

interface Role {
  company: string;
  title: string;

  // TODO: represent as month-year
  startDate: Date;
  endDate?: Date;
}

type Source = typeof SOURCES[number];

const SOURCES = ['internal', 'SEEK application'] as const;

export const CANDIDATES: Candidate[] = POSITIONS.map((position) =>
  faker.custom.generate<Candidate>(() => {
    const firstName = faker.name.firstName();

    const formattedName = faker.random.number(20)
      ? `${firstName} ${faker.name.lastName()}`
      : firstName;

    return {
      id: `wingman:candidate:${faker.random.uuid()}`,
      formattedName,

      // Inflate our self-importance
      source: faker.random.number(5)
        ? 'SEEK application'
        : faker.random.arrayElement(SOURCES),

      position: {
        id: position.id,
      },

      attachments: faker.random.arrayElement([]),
      roles: faker.custom
        .generate<Role>(
          () => {
            const startDate = faker.date.past(5, faker.custom.latestDate);
            const endDate = faker.random.number(3)
              ? faker.date.between(startDate, faker.custom.latestDate)
              : undefined;

            return {
              company: faker.company.companyName(),
              title: faker.name.jobTitle(),
              startDate,
              endDate,
            };
          },
          { max: 10 },
        )
        .sort(
          (a, b) =>
            (b.endDate?.getTime() ?? Number.MAX_SAFE_INTEGER) -
              (a.endDate?.getTime() ?? Number.MAX_SAFE_INTEGER) ||
            b.startDate.getTime() - a.startDate.getTime(),
        ),
      qualifications: faker.custom
        .generate<Qualification>(generateQualification, { max: 5 })
        .sort((a, b) => b.date.getTime() - a.date.getTime()),
      skills: faker.custom
        .sample(SKILLS, 10)
        .sort((a, b) => a.name.localeCompare(b.name)),
    };
  }, position.candidates.total),
)
  .reduce((acc, candidates) => acc.concat(candidates), [])
  .sort((a, b) => a.formattedName.localeCompare(b.formattedName));

export const CANDIDATE_BY_ID = CANDIDATES.reduce<
  Record<string, Candidate | undefined>
>((acc, candidate) => {
  acc[candidate.id] = candidate;

  return acc;
}, {});

export const CANDIDATES_BY_POSITION_ID = CANDIDATES.reduce(
  (acc, candidate) => {
    acc[candidate.position.id].push(candidate);

    return acc;
  },

  POSITIONS.reduce<Record<string, Candidate[]>>((acc, position) => {
    acc[position.id] = [];

    return acc;
  }, {}),
);
