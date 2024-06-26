import type { AdProductName } from './adProducts';
import { faker } from './faker';
import { POSITIONS, type Position } from './positions';

export interface Ad {
  id: string;
  position: Pick<Position, 'id'>;
  title: string;
  location: string;
  workType: string;
  category: string;
  adProduct: AdProductName;
  description: string;
  summary: string;
  bulletPoint1: string;
  bulletPoint2: string;
  bulletPoint3: string;
  questionnaire: string;
  status: 'Live' | 'Expired' | 'Draft';
}

const LOCATION = [
  'Melbourne',
  'Adelaide',
  'Geelong',
  'Sydney',
  'Peninsula',
  'Surrey Hills',
];

const AD_DESCRIPTIONS = [
  'This is cool job. You should apply for the $.',
  'If you have an ey for details, please apply',
  'We are hiring!',
];

const CATEGORY = [
  'Science & Technology',
  'Accounting',
  'Legal',
  'RealEstate',
  'Hospitality',
  'Tourism',
  'Marketing',
  'Sales',
  'Construction',
  'Engineering',
];

const generateTitle = (positionName: string) =>
  faker.helpers.arrayElement([
    positionName,

    faker.helpers.shuffle(positionName.split(' ')).join(' '),

    `${positionName}${faker.helpers.arrayElement([
      ' -',
      ' |',
      ':',
    ])} ${faker.company.buzzAdjective()} ${faker.company.buzzNoun()}${faker.helpers.arrayElement(
      ['!', '!!', '!!!'],
    )}`,

    `${positionName} ${faker.helpers.arrayElement([
      'Copy Copy',
      'Copy',
      'Draft',
      'FINAL v2',
      'FINAL',
    ])}`,

    `${faker.helpers.arrayElement([
      'Are you the one we’ve been looking for?',
      'BIG BUX + BONUS!',
      'Career change friendly.',
      'LOOKING FOR STAR',
    ])} ${positionName}`,
  ]);

export const ADS: Ad[] = POSITIONS.map((position) =>
  faker.custom.generate<Ad>(
    () => ({
      id: `wingman:ad:${faker.string.uuid()}`,
      position: {
        id: position.id,
      },
      title: generateTitle(position.name),
      location: faker.helpers.arrayElement(LOCATION),
      workType: faker.person.jobTitle(),
      category: faker.helpers.arrayElement(CATEGORY),
      adProduct: faker.helpers.arrayElement(['Classic', 'StandOut', 'Premium']),
      description: faker.helpers.arrayElement(AD_DESCRIPTIONS),
      summary: `${faker.company.catchPhrase()}. ${faker.custom.titleCase(
        faker.company.buzzAdjective(),
      )} ${faker.company.buzzNoun()}!`,
      bulletPoint1: faker.company.buzzVerb(),
      bulletPoint2: faker.company.buzzVerb(),
      bulletPoint3: faker.company.buzzVerb(),
      questionnaire: '',
      status: faker.helpers.arrayElement(['Live', 'Draft', 'Expired']),
    }),
    { max: 3, min: 0 },
  ),
)
  .reduce((acc, ads) => acc.concat(ads), [])
  .sort((a, b) => a.title.localeCompare(b.title));

export const ADS_BY_POSITION_ID = ADS.reduce(
  (acc, ad) => {
    acc[ad.position.id].push(ad);

    return acc;
  },

  POSITIONS.reduce<Record<string, Ad[]>>((acc, position) => {
    acc[position.id] = [];

    return acc;
  }, {}),
);
