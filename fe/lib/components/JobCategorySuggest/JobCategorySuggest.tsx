import { ApolloClient, useLazyQuery } from '@apollo/client';
import {
  FieldMessage,
  Loader,
  RadioGroup,
  Stack,
  Text,
} from 'braid-design-system';
import React, {
  ComponentProps,
  ComponentPropsWithRef,
  forwardRef,
  useEffect,
} from 'react';
import { useDebounce } from 'use-debounce';

import type {
  JobCategorySuggestionChoice,
  JobCategorySuggestionPositionProfileInput,
} from '../../types/seek.graphql';

import JobCategorySuggestChoices from './JobCategorySuggestChoices';
import { JOB_CATEGORY_SUGGESTION } from './queries';

interface RadioProps extends ComponentPropsWithRef<typeof RadioGroup> {}

interface Props extends Partial<Omit<RadioProps, 'id'>> {
  client?: ApolloClient<unknown>;
  schemeId: string;
  debounceDelay?: number;
  positionProfile: JobCategorySuggestionPositionProfileInput;
  onSelect?: (jobCategorySuggestionChoice: JobCategorySuggestionChoice) => void;
  showConfidence?: boolean;
  message?: ComponentProps<typeof FieldMessage>['message'];
}

export const JobCategorySuggest = forwardRef<HTMLInputElement, Props>(
  (
    {
      schemeId,
      onSelect,
      client,
      positionProfile,
      debounceDelay = 250,
      showConfidence,
      message = '',
      name,
      tone,
      ...restProps
    },
    forwardedRef,
  ) => {
    const [
      getCategorySuggestion,
      { data: suggestData, error: suggestError, loading: suggestLoading },
    ] = useLazyQuery(JOB_CATEGORY_SUGGESTION, {
      client,
      fetchPolicy: 'no-cache',
      ssr: false,
    });

    const [debounceJobCategorySuggestInput] = useDebounce(
      positionProfile,
      debounceDelay,
    );

    useEffect(() => {
      if (debounceJobCategorySuggestInput) {
        getCategorySuggestion({
          variables: {
            positionProfile: debounceJobCategorySuggestInput,
            schemeId,
            first: 5,
          },
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [schemeId, debounceJobCategorySuggestInput]);

    return (
      <Stack space="small">
        {suggestLoading ? (
          <Stack space="medium">
            <Text>Loading suggested categories</Text>
            <Loader size="xsmall" />
          </Stack>
        ) : (
          suggestData?.jobCategorySuggestions && (
            <JobCategorySuggestChoices
              {...restProps}
              choices={suggestData.jobCategorySuggestions}
              name={name}
              ref={forwardedRef}
              onSelect={onSelect}
              showConfidence={showConfidence}
              tone={tone}
            />
          )
        )}
        <FieldMessage
          message={message}
          id="jobCategorySuggestMessage"
          tone={tone}
        />
        {suggestError && (
          <FieldMessage
            id="suggestError"
            message="Error fetching job category suggestions, please try again"
            tone="critical"
          />
        )}
      </Stack>
    );
  },
);
