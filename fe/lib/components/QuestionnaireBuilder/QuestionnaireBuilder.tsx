import { Card, Column, Columns, Heading, Stack } from 'braid-design-system';
import React, {
  Fragment,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { mapGraphqlToFormComponent } from '../../private/questionnaires/mapping';
import type {
  FormComponent,
  GraphqlComponentInput,
} from '../../private/questionnaires/types';
import { QuestionnaireForm } from '../QuestionnaireForm/QuestionnaireForm';
import {
  type QuestionnaireCreateInput,
  QuestionnaireQueryOutput,
  convertComponentsToMutationVariables,
} from '../QuestionnaireQueryOutput/QuestionnaireQueryOutput';

import { FormBuilder } from './FormBuilder/FormBuilder';

interface WrapperProps {
  children: ReactNode;
}

const RoundedCard = ({ children }: WrapperProps) => (
  <Card roundedAbove="mobile">{children}</Card>
);

export interface QuestionnaireBuilderProps {
  hirerId: string;
  graphqlInput?: GraphqlComponentInput[];
  onChange?: (mutationVariables: QuestionnaireCreateInput) => void;

  /**
   * Controls if the raw GraphQL mutation & variables should be shown
   *
   * Defaults to `false`
   */
  showGraphqlOutput?: boolean;

  wrapper?: 'card' | ((props: WrapperProps) => JSX.Element);
}

export const QuestionnaireBuilder = ({
  wrapper,
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

  const Wrapper = useMemo(() => {
    switch (wrapper) {
      case 'card':
        return RoundedCard;
      case undefined:
        return Fragment;
      default:
        return wrapper;
    }
  }, [wrapper]);

  return (
    <Stack space="large" dividers>
      <Columns collapseBelow="tablet" space="large">
        <Column width="1/2">
          <Wrapper>
            <FormBuilder
              externalFormState={formBuilderState}
              onChange={setFormBuilderState}
            />
          </Wrapper>
        </Column>

        {formBuilderState.length ? (
          <Column>
            <Wrapper>
              <QuestionnaireForm components={formBuilderState} type="Form" />
            </Wrapper>
          </Column>
        ) : null}
      </Columns>

      {showGraphqlOutput ? (
        <Wrapper>
          <Stack space="large">
            <Heading level="3">GraphQL output</Heading>

            <QuestionnaireQueryOutput
              components={formBuilderState}
              hirerId={hirerId}
            />
          </Stack>
        </Wrapper>
      ) : null}
    </Stack>
  );
};
