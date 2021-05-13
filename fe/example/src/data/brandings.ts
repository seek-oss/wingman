import { faker } from './faker';

export interface Branding {
  id: string;
  name: string;
  url: string;
}

const IMAGE_URLS = [
  'actuary-module.jpg',
  'automotive-electrician-module.jpg',
  'chief-executive-officer-module.jpg',
  'chief-financial-officer.jpg',
  'chief-operating-officer.jpg',
  'commercial-manager-module.jpg',
  'construction-manager-module.jpg',
  'delivery-manager-module.jpg',
  'director-module.jpg',
  'engineering-manager-module.jpg',
  'financial-controller-module.jpg',
  'general-manager-module.jpg',
  'general-practitioner-module.jpg',
  'heavy-diesel-fitter-module.jpg',
  'software-architect-module.jpg',
  'solutions-architect.jpg',
  'supply-chain-manager.jpg',
  'translator-module.jpg',
].map(
  (suffix) =>
    `https://cdn.seeklearning.com.au/media/images/career-guide/module/${suffix}`,
);

export const BRANDINGS = faker.custom.generate<Branding>(
  () => ({
    id: faker.datatype.uuid(),
    name: faker.system
      .commonFileName(faker.random.arrayElement(['jpeg', 'jpg']))
      .replace(faker.random.boolean() ? '' : /\..*$/, ''),
    url: faker.random.arrayElement(IMAGE_URLS),
  }),
  5,
);
