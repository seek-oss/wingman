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
  JobCategorySuggestQuery,
  JobCategorySuggestionChoiceAttributesFragment,
  JobCategorySuggestionPositionProfileInput,
} from '../../types/seek.graphql';

import JobCategorySuggestChoices from './JobCategorySuggestChoices';
import { JOB_CATEGORY_SUGGEST } from './queries';

interface RadioProps extends ComponentPropsWithRef<typeof RadioGroup> {}

interface Props extends Partial<Omit<RadioProps, 'id'>> {
  positionProfile: JobCategorySuggestionPositionProfileInput;
  schemeId: string;
  onSelect: (
    jobCategorySuggestionChoice: JobCategorySuggestionChoiceAttributesFragment,
  ) => void;
  client?: ApolloClient<unknown>;
  debounceDelay?: number;
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
    ] = useLazyQuery<JobCategorySuggestQuery>(JOB_CATEGORY_SUGGEST, {
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
              {...restProps}
              choices={suggestData.jobCategorySuggestions}
              name={name}
              ref={forwardedRef}
              onSelect={onSelect}
              showConfidence={showConfidence}
              tone={tone}
              client={client}
              schemeId={schemeId}
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
