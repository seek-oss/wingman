import 'braid-design-system/reset';

import {
  Card,
  Column,
  Columns,
  ContentBlock,
  Heading,
  Stack,
  TextField,
} from 'braid-design-system';
import React, { useEffect, useState } from 'react';

import { QuestionnaireForm } from '../QuestionnaireForm/QuestionnaireForm';
import {
  GraphqlQueryRenderer,
  MutationVariables,
  convertComponentsToMutationVariables,
} from '../components/GraphqlQueryRenderer/GraphqlQueryRenderer';
import { FormComponent } from '../questionTypes';

import { FormBuilder } from './FormBuilder/FormBuilder';

interface QuestionnaireBuilderProps {
  hirerId?: string;
  onChange?: (mutationVariables: MutationVariables) => void;
}

export const QuestionnaireBuilder = ({
  hirerId: externalHirerId,
  onChange,
}: QuestionnaireBuilderProps) => {
  const [formBuilderState, setFormBuilderState] = useState<FormComponent[]>([]);
  const [hirerId, setHirerId] = useState(externalHirerId ?? '');

  useEffect(() => {
    setHirerId(externalHirerId ?? '');
  }, [externalHirerId]);

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
            <FormBuilder onChange={setFormBuilderState} />
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

            {typeof externalHirerId === 'undefined' && (
              <TextField
                id="hirerId"
                label="Hirer OID"
                placeholder="seekAnzPublicTest:organization:seek:93WyyF1h"
                value={hirerId}
                onChange={({ currentTarget: { value } }) => setHirerId(value)}
              />
            )}

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
