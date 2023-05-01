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
  faker.random.arrayElement([
    positionName,

    faker.helpers.shuffle(positionName.split(' ')).join(' '),

    `${positionName}${faker.random.arrayElement([
      ' -',
      ' |',
      ':',
    ])} ${faker.company.bsAdjective()} ${faker.company.bsNoun()}${faker.random.arrayElement(
      ['!', '!!', '!!!'],
    )}`,

    `${positionName} ${faker.random.arrayElement([
      'Copy Copy',
      'Copy',
      'Draft',
      'FINAL v2',
      'FINAL',
    ])}`,

    `${faker.random.arrayElement([
      'Are you the one we’ve been looking for?',
      'BIG BUX + BONUS!',
      'Career change friendly.',
      'LOOKING FOR STAR',
    ])} ${positionName}`,
  ]);

export const ADS: Ad[] = POSITIONS.map((position) =>
  faker.custom.generate<Ad>(
    () => ({
      id: `wingman:ad:${faker.datatype.uuid()}`,
      position: {
        id: position.id,
      },
      title: generateTitle(position.name),
      location: faker.random.arrayElement(LOCATION),
      workType: faker.name.jobTitle(),
      category: faker.random.arrayElement(CATEGORY),
      adProduct: faker.random.arrayElement(['Classic', 'StandOut', 'Premium']),
      description: faker.random.arrayElement(AD_DESCRIPTIONS),
      summary: `${faker.company.catchPhrase()}. ${faker.custom.titleCase(
        faker.company.bsAdjective(),
      )} ${faker.company.bsNoun()}!`,
      bulletPoint1: faker.company.bsBuzz(),
      bulletPoint2: faker.company.bsBuzz(),
      bulletPoint3: faker.company.bsBuzz(),
      questionnaire: '',
      status: faker.random.arrayElement(['Live', 'Draft', 'Expired']),
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
