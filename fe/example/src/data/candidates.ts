import { faker } from './faker';
import { POSITIONS, type Position } from './positions';
import { type Qualification, generateQualification } from './qualifications';
import { SKILLS, type Skill } from './skills';
import { USERS, type User } from './users';

export interface Candidate {
  id: string;
  formattedName: string;
  source: Source;

  positions: Array<Pick<Position, 'id'>>;

  attachments: Attachment[];
  qualifications: Qualification[];
  roles: Role[];
  skills: Skill[];

  notes: Note[];
}

export interface Attachment {
  id: string;
  filename: string;
  type: AttachmentType;
  url: string;
}

export interface Note {
  author: User;
  text: string;
  date: Date;
}

export interface Role {
  company: string;
  title: string;
  highlights: string;

  // TODO: represent as month-year
  startDate: Date;
  endDate?: Date;
}

type AttachmentType = 'Resume' | 'Cover letter';

type Source = (typeof SOURCES)[number];

const SOURCES = ['Internal', 'SEEK application'] as const;

const generateAttachmentFilename = () =>
  faker.system.commonFileName(
    faker.helpers.arrayElement(['png', 'jpeg', 'pdf', 'doc', 'docx', 'rtf']),
  );

export const CANDIDATES: Candidate[] = POSITIONS.map((position) =>
  faker.custom.generate<Candidate>(() => {
    const firstName = faker.person.firstName();

    const formattedName = faker.number.int(20)
      ? `${firstName} ${faker.person.lastName()}`
      : firstName;

    const id = `wingman:candidate:${faker.string.uuid()}`;

    return {
      id,
      formattedName,

      // Inflate our self-importance
      source: faker.number.int(5)
        ? 'SEEK application'
        : faker.helpers.arrayElement(SOURCES),

      // TODO: seed candidates across multiple positions
      positions: [
        {
          id: position.id,
        },
      ],

      attachments: faker.custom.sample<Attachment>([
        {
          id: `${id}:attachment:cover-letter`,
          filename: generateAttachmentFilename(),
          type: 'Cover letter',
          url: '#',
        },
        {
          id: `${id}:attachment:resume`,
          filename: generateAttachmentFilename(),
          type: 'Resume',
          url: '#',
        },
      ]),
      roles: faker.custom
        .generate<Role>(
          () => {
            const startDate = faker.date.past({
              years: 5,
              refDate: faker.custom.latestDate,
            });
            const endDate = faker.number.int(3)
              ? faker.date.between({
                  from: startDate,
                  to: faker.custom.latestDate,
                })
              : undefined;

            return {
              company: faker.company.name(),
              title: faker.person.jobTitle(),
              highlights: faker.lorem.paragraphs(
                faker.number.int({ max: 3, min: 1 }),
              ),
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

      notes: faker.custom
        .generate<Note>(
          () => ({
            author: faker.helpers.arrayElement(USERS),
            text: faker.lorem.paragraphs(faker.number.int({ max: 3, min: 1 })),
            // TODO: candidate uploaded date
            date: faker.date.between({
              from: faker.custom.latestDate,
              to: new Date(),
            }),
          }),
          { max: 5 },
        )
        .sort((a, b) => b.date.getTime() - a.date.getTime()),
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
    for (const position of candidate.positions) {
      acc[position.id].push(candidate);
    }

    return acc;
  },

  POSITIONS.reduce<Record<string, Candidate[]>>((acc, position) => {
    acc[position.id] = [];

    return acc;
  }, {}),
);
