import { Radio, Stack, Text, TextLink } from 'braid-design-system';
import React, { useState } from 'react';
import { CodeBlock } from 'scoobie';

import { MAX_NUMBER_OF_COMPONENTS } from '../../constants';
import { FormComponent, PrivacyConsent, Question } from '../../questionTypes';

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
): MutationVariables => {
  const questionnaireComponents: MutationQuestionnaireComponents[] = components.map(
    component =>
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
  if (components.length > 0 && hirerId) {
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

  if (hirerId && components.length === 0) {
    return <Text>You need to add some questions first</Text>;
  }

  if (!hirerId && components.length > 0) {
    return <Text>You need to add your hirer ID first</Text>;
  }

  return (
    <Text>
      You need to add your hirer ID, and then add some questions to see any
      output.
    </Text>
  );
};

interface GraphqlQueryRendererProps {
  components: FormComponent[];
  hirerId: string;
}

export const GraphqlQueryRenderer = ({
  components,
  hirerId,
}: GraphqlQueryRendererProps) => {
  const [visiblePane, setVisiblePane] = useState<'variables' | 'mutation'>(
    'variables',
  );

  return (
    <Stack space="medium">
      <Stack space="small">
        <Radio
          checked={visiblePane === 'variables'}
          id="variablesVisible"
          label="Variables"
          onChange={() => setVisiblePane('variables')}
        />
        <Radio
          checked={visiblePane === 'mutation'}
          id="mutationVisible"
          label="Mutation"
          onChange={() => setVisiblePane('mutation')}
        />
      </Stack>

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
