import { ApolloClient, useLazyQuery } from '@apollo/client';
import {
  FieldMessage,
  Loader,
  RadioGroup,
  Stack,
  Text,
} from 'braid-design-system';
import React, { ComponentPropsWithRef, forwardRef, useEffect } from 'react';
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
  debounceDelay?: number;
  onSelect?: (jobCategorySuggestionChoice: JobCategorySuggestionChoice) => void;
  positionProfile: JobCategorySuggestionPositionProfileInput;
  schemeId: string;
  showConfidence?: boolean;
}

export const JobCategorySuggest = forwardRef<HTMLInputElement, Props>(
  (
    {
      client,
      debounceDelay = 250,
      onSelect,
      positionProfile,
      schemeId,
      showConfidence,

      message,
      name,
      reserveMessageSpace,
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

        {message || reserveMessageSpace ? (
          <FieldMessage
            id="jobCategorySuggestMessage"
            message={message}
            reserveMessageSpace={suggestError ? undefined : reserveMessageSpace}
            tone={tone}
          />
        ) : null}

        {suggestError && (
          <FieldMessage
            id="jobCategorySuggestError"
            message="Sorry, we couldn’t fetch category suggestions. Please try again."
            tone="critical"
          />
        )}
      </Stack>
    );
  },
);
