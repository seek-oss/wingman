import { ApolloClient, useQuery } from '@apollo/client';
import {
  FieldMessage,
  Loader,
  RadioGroup,
  Stack,
  Text,
} from 'braid-design-system';
import React, { ComponentPropsWithRef, forwardRef } from 'react';
import isDeepEqual from 'react-fast-compare';
import { useDebounce } from 'use-debounce';

import type {
  JobCategorySuggestQuery,
  JobCategorySuggestionChoiceAttributesFragment,
  JobCategorySuggestionPositionProfileInput,
} from '../../types/seekApi.graphql';

import JobCategorySuggestChoices from './JobCategorySuggestChoices';
import { JOB_CATEGORY_SUGGEST } from './queries';

type RadioProps = ComponentPropsWithRef<typeof RadioGroup>;

export interface JobCategorySuggestProps
  extends Partial<Omit<RadioProps, 'id' | 'value'>> {
  positionProfile: JobCategorySuggestionPositionProfileInput;
  schemeId: string;
  onSelect: (
    jobCategorySuggestionChoice: JobCategorySuggestionChoiceAttributesFragment,
  ) => void;
  client?: ApolloClient<unknown>;
  debounceDelay?: number;
  showConfidence?: boolean;
  initialValue?: string;
}

export const JobCategorySuggest = React.memo(
  forwardRef<HTMLInputElement, JobCategorySuggestProps>(
    (
      {
        client,
        debounceDelay = 250,
        onSelect,
        positionProfile,
        schemeId,
        showConfidence,
        initialValue,

        message,
        name,
        reserveMessageSpace,
        tone,

        ...restProps
      },
      forwardedRef,
    ) => {
      const [debounceJobCategorySuggestInput] = useDebounce(
        positionProfile,
        debounceDelay,
      );

      const {
        data: suggestData,
        error: suggestError,
        loading: suggestLoading,
      } = useQuery<JobCategorySuggestQuery>(JOB_CATEGORY_SUGGEST, {
        client,
        // Avoid polluting the Apollo cache with partial searches
        fetchPolicy: 'no-cache',
        variables: {
          positionProfile: debounceJobCategorySuggestInput,
          schemeId,
          first: 5,
        },
      });

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
                initialValue={initialValue}
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
              reserveMessageSpace={
                suggestError ? undefined : reserveMessageSpace
              }
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
  ),
  isDeepEqual,
);
