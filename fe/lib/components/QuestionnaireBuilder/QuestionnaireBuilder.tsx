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

import { mapGraphqlToFormComponent } from '../../private/questionnaires/mapping';
import type {
  FormComponent,
  GraphqlComponentInput,
} from '../../private/questionnaires/types';
import { QuestionnaireForm } from '../QuestionnaireForm/QuestionnaireForm';
import {
  QuestionnaireCreateInput,
  QuestionnaireQueryOutput,
  convertComponentsToMutationVariables,
} from '../QuestionnaireQueryOutput/QuestionnaireQueryOutput';

import { FormBuilder } from './FormBuilder/FormBuilder';

export interface QuestionnaireBuilderProps {
  hirerId: string;
  graphqlInput?: GraphqlComponentInput[];
  onChange?: (mutationVariables: QuestionnaireCreateInput) => void;

  /**
   * Controls if the raw GraphQL mutation & variables should be shown
   *
   * Defaults to `true`
   */
  showGraphqlOutput?: boolean;
}

export const QuestionnaireBuilder = ({
  hirerId,
  graphqlInput,
  onChange,
  showGraphqlOutput,
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
        <Columns collapseBelow="tablet" space="large">
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

        {showGraphqlOutput !== false && (
          <Card>
            <Stack space="large">
              <Heading level="3">GraphQL Output</Heading>

              <QuestionnaireQueryOutput
                components={formBuilderState}
                hirerId={hirerId}
              />
            </Stack>
          </Card>
        )}
      </Stack>
    </ContentBlock>
  );
};
