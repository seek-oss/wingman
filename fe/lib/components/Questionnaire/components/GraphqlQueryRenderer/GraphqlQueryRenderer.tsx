import {
  RadioGroup,
  RadioItem,
  Stack,
  Text,
  TextLink,
} from 'braid-design-system';
import React, { useState } from 'react';
import { CodeBlock } from 'scoobie';

import { MAX_NUMBER_OF_COMPONENTS } from '../../constants';
import type { FormComponent, PrivacyConsent, Question } from '../../types';

type MutationQuestionnaireComponents =
  | {
      componentTypeCode: 'Question';
      question: Question;
    }
  | {
      componentTypeCode: 'PrivacyConsent';
      privacyConsent: PrivacyConsent;
    };

export interface QuestionnaireCreateInput {
  variables: {
    input: {
      applicationQuestionnaire: {
        hirerId: string;
        components: MutationQuestionnaireComponents[];
      };
    };
  };
  valid: boolean;
}

const graphqlMutation = `
mutation($input: CreateApplicationQuestionnaireInput!) {
  createApplicationQuestionnaire(input: $input) {
    applicationQuestionnaire {
      id {
        value
      }
    }
  }
}`.trim();

const validateComponents = (components: FormComponent[]) => {
  if (components.length === 0 || components.length > MAX_NUMBER_OF_COMPONENTS) {
    return false;
  }

  const privacyConsentComponents = components.filter(
    (fc): fc is PrivacyConsent => fc.componentTypeCode === 'PrivacyConsent',
  );

  if (privacyConsentComponents.length > 1) {
    return false;
  }

  return true;
};

export const convertComponentsToMutationVariables = (
  components: FormComponent[],
  hirerId: string,
): QuestionnaireCreateInput => {
  const questionnaireComponents: MutationQuestionnaireComponents[] =
    components.map((component) =>
      component.componentTypeCode === 'Question'
        ? {
            componentTypeCode: 'Question',
            question: component,
          }
        : {
            componentTypeCode: 'PrivacyConsent',
            privacyConsent: component,
          },
    );

  return {
    variables: {
      input: {
        applicationQuestionnaire: {
          hirerId,
          components: questionnaireComponents,
        },
      },
    },
    valid: validateComponents(components),
  };
};

const renderVariablesPane = (components: FormComponent[], hirerId: string) => {
  if (components.length > 0) {
    const { variables } = convertComponentsToMutationVariables(
      components,
      hirerId,
    );

    const variablesString = JSON.stringify(variables, null, 2);

    return (
      <Stack space="medium">
        <Text>For the variables of the mutation, use:</Text>

        <CodeBlock language="json">{variablesString}</CodeBlock>
      </Stack>
    );
  }

  return <Text>You need to add some questions first</Text>;
};

interface GraphqlQueryRendererProps {
  components: FormComponent[];
  hirerId: string;
}

export const GraphqlQueryRenderer = ({
  components,
  hirerId,
}: GraphqlQueryRendererProps) => {
  type VisiblePane = 'variables' | 'mutation';
  const [visiblePane, setVisiblePane] = useState<VisiblePane>('variables');

  return (
    <Stack space="large">
      <RadioGroup
        aria-label="GraphQL query"
        id="graphql-query-renderer-pane"
        onChange={(event) =>
          setVisiblePane(event.currentTarget.value as VisiblePane)
        }
        value={visiblePane}
      >
        <RadioItem label="Variables" value="variables" />
        <RadioItem label="Mutation" value="mutation" />
      </RadioGroup>

      {visiblePane === 'mutation' && (
        <Stack space="medium">
          <Text>
            To generate the form you’ve built, you’ll need to send a mutation to
            the{' '}
            <TextLink href="https://graphql.seek.com/graphql" target="_blank">
              SEEK API
            </TextLink>
            . It will look something like this, although the response fields you
            require are up to you.
          </Text>

          <CodeBlock language="graphql">{graphqlMutation}</CodeBlock>
        </Stack>
      )}

      {visiblePane === 'variables' && renderVariablesPane(components, hirerId)}
    </Stack>
  );
};
