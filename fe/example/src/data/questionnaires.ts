import type {
  FormComponent,
  FreeTextQuestion,
  PrivacyConsent,
  SelectionQuestion,
} from '../../../lib/private/questionnaires/types';

import { faker } from './faker';

export interface Questionnaire {
  id: string;
  name: string;
  components: FormComponent[];
}

type ComponentType = (typeof COMPONENT_TYPES)[number];

const COMPONENT_TYPES = [
  'FreeText',
  'MultiSelect',
  'SingleSelect',
  'PrivacyConsent',
] as const;

const componentGenerators: Record<ComponentType, () => FormComponent> = {
  FreeText: (): FreeTextQuestion => ({
    value: faker.lorem.sentence(),
    questionHtml: faker.lorem.sentence(),
    responseTypeCode: 'FreeText',
    componentTypeCode: 'Question',
  }),

  MultiSelect: (): SelectionQuestion => ({
    value: faker.lorem.sentence(),
    responseTypeCode: 'MultiSelect',
    questionHtml: faker.lorem.sentence(),
    componentTypeCode: 'Question',
    responseChoice: faker.custom.generate(
      () => ({
        text: faker.lorem.sentence(),
        value: faker.lorem.sentence(),
        preferredIndicator: faker.datatype.boolean(),
      }),
      { max: 5, min: 2 },
    ),
  }),

  SingleSelect: (): SelectionQuestion => ({
    value: faker.lorem.sentence(),
    responseTypeCode: 'SingleSelect',
    questionHtml: faker.lorem.sentence(),
    componentTypeCode: 'Question',
    responseChoice: faker.custom.generate(
      () => ({
        text: faker.lorem.sentence(),
        value: faker.lorem.sentence(),
        preferredIndicator: faker.datatype.boolean(),
      }),
      { max: 5, min: 2 },
    ),
  }),

  PrivacyConsent: (): PrivacyConsent => ({
    value: faker.lorem.sentence(),
    privacyPolicyUrl: { url: faker.internet.url() },
    componentTypeCode: 'PrivacyConsent',
  }),
};

export const QUESTIONNAIRES = faker.custom.generate<Questionnaire>(
  () => ({
    id: faker.string.uuid(),
    name: faker.word.words(),
    components: faker.custom.generate(
      () => {
        const type = faker.helpers.arrayElement(COMPONENT_TYPES);

        const generateComponent = componentGenerators[type];

        return generateComponent();
      },
      { max: 10, min: 1 },
    ),
  }),
  10,
);
