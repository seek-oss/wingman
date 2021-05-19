import 'braid-design-system/reset';

import {
  Card,
  Column,
  Columns,
  ContentBlock,
  Heading,
  Stack,
} from 'braid-design-system';
import React, { useEffect, useState } from 'react';

import { QuestionnaireForm } from '../QuestionnaireForm/QuestionnaireForm';
import {
  GraphqlQueryRenderer,
  QuestionnaireCreateInput,
  convertComponentsToMutationVariables,
} from '../components/GraphqlQueryRenderer/GraphqlQueryRenderer';
import { mapGraphqlToFormComponent } from '../mapping';
import type { FormComponent, GraphqlComponentInput } from '../types';

import { FormBuilder } from './FormBuilder/FormBuilder';

interface QuestionnaireBuilderProps {
  hirerId: string;
  graphqlInput?: GraphqlComponentInput[];
  onChange?: (mutationVariables: QuestionnaireCreateInput) => void;
}

export const QuestionnaireBuilder = ({
  hirerId,
  graphqlInput,
  onChange,
}: QuestionnaireBuilderProps) => {
  const [formBuilderState, setFormBuilderState] = useState<FormComponent[]>([]);

  useEffect(() => {
    if (graphqlInput) {
      setFormBuilderState(mapGraphqlToFormComponent(graphqlInput));
    }
  }, [graphqlInput]);

  useEffect(() => {
    if (onChange) {
      onChange(convertComponentsToMutationVariables(formBuilderState, hirerId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formBuilderState, hirerId]);

  return (
    <ContentBlock>
      <Stack space="medium" dividers>
        <Columns space="large">
          <Column>
            <FormBuilder
              externalFormState={formBuilderState}
              onChange={setFormBuilderState}
            />
          </Column>

          <Column>
            <Stack space="medium">
              <QuestionnaireForm components={formBuilderState} type="Form" />
            </Stack>
          </Column>
        </Columns>

        <Card>
          <Stack space="large">
            <Heading level="3">GraphQL Output</Heading>

            <GraphqlQueryRenderer
              components={formBuilderState}
              hirerId={hirerId}
            />
          </Stack>
        </Card>
      </Stack>
    </ContentBlock>
  );
};
