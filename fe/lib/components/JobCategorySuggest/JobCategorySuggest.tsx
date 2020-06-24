import { useLazyQuery } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { FieldMessage, Loader, Stack, Text } from 'braid-design-system';
import React, { forwardRef, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

import {
  JobCategorySuggestionChoice,
  JobCategorySuggestionPositionProfileInput,
} from 'lib/types/seek.graphql';

import JobCategorySuggestChoices from './JobCategorySuggestChoices';
import { JOB_CATEGORY_SUGGESTION } from './queries';

interface Props {
  client?: ApolloClient<unknown>;
  schemeId: string;
  debounceDelay?: number;
  positionProfile: JobCategorySuggestionPositionProfileInput;
  onSelect?: (jobCategorySuggestionChoice: JobCategorySuggestionChoice) => void;
  showConfidence?: boolean;
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
    },
    forwardedRef,
  ) => {
    const [
      getCategorySuggestion,
      { data: suggestData, error: suggestError, loading: suggestLoading },
    ] = useLazyQuery(JOB_CATEGORY_SUGGESTION, {
      client,
      fetchPolicy: 'no-cache',
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
              choices={suggestData.jobCategorySuggestions}
              ref={forwardedRef}
              onSelect={onSelect}
              showConfidence={showConfidence}
            />
          )
        )}
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
