import { faker } from './faker';

export interface Questionnaire {
  id: string;
  name: string;
  components: Component[];
}

type Component =
  | FreeTextQuestion
  | MultiSelectQuestion
  | SingleSelectQuestion
  | PrivacyConsent;

type ComponentType = typeof COMPONENT_TYPES[number];

const COMPONENT_TYPES = [
  'FreeTextQuestion',
  'MultiSelectQuestion',
  'SingleSelectQuestion',
  'PrivacyConsent',
] as const;

interface ComponentBase {
  label: string;
  type: ComponentType;
}

interface FreeTextQuestion extends ComponentBase {
  type: 'FreeTextQuestion';
}

interface MultiSelectQuestion extends ComponentBase {
  type: 'MultiSelectQuestion';

  responses: Response[];
}

interface SingleSelectQuestion extends ComponentBase {
  type: 'SingleSelectQuestion';

  responses: Response[];
}

interface PrivacyConsent extends ComponentBase {
  type: 'PrivacyConsent';

  url: string;
}

interface Response {
  preferred?: boolean;
  label: string;
}

const componentGenerators: Record<ComponentType, () => Component> = {
  FreeTextQuestion: (): FreeTextQuestion => ({
    label: faker.lorem.sentence(),
    type: 'FreeTextQuestion',
  }),

  MultiSelectQuestion: (): MultiSelectQuestion => {
    const usePreferred = faker.random.boolean();

    return {
      label: faker.lorem.sentence(),
      type: 'MultiSelectQuestion',

      responses: faker.custom.generate<Response>(
        () => ({
          label: faker.lorem.sentence(),
          preferred: usePreferred ? faker.random.boolean() : undefined,
        }),
        { max: 5, min: 2 },
      ),
    };
  },

  SingleSelectQuestion: (): SingleSelectQuestion => {
    const usePreferred = faker.random.boolean();

    return {
      label: faker.lorem.sentence(),
      type: 'SingleSelectQuestion',

      responses: faker.custom.generate<Response>(
        () => ({
          label: faker.lorem.sentence(),
          preferred: usePreferred ? faker.random.boolean() : undefined,
        }),
        { max: 5, min: 2 },
      ),
    };
  },

  PrivacyConsent: (): PrivacyConsent => ({
    label: faker.lorem.sentence(),
    type: 'PrivacyConsent',

    url: faker.internet.url(),
  }),
};

export const QUESTIONNAIRES = faker.custom.generate<Questionnaire>(
  () => ({
    id: faker.random.uuid(),
    name: faker.random.words(),
    components: faker.custom.generate(
      () => {
        const type = faker.random.arrayElement(COMPONENT_TYPES);

        const generateComponent = componentGenerators[type];

        return generateComponent();
      },
      { max: 10, min: 1 },
    ),
  }),
  10,
);
