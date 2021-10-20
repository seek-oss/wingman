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
} from '../../types/seekApi.graphql';

import JobCategorySuggestChoices from './JobCategorySuggestChoices';
import { JOB_CATEGORY_SUGGEST } from './queries';

type RadioProps = ComponentPropsWithRef<typeof RadioGroup>;

export interface JobCategorySuggestProps
  extends Partial<Omit<RadioProps, 'id'>> {
  positionTitle: string;
  positionLocation: string[];
  schemeId: string;
  onSelect: (
    jobCategorySuggestionChoice: JobCategorySuggestionChoiceAttributesFragment,
  ) => void;
  client?: ApolloClient<unknown>;
  debounceDelay?: number;
  showConfidence?: boolean;
  initialValue?: string;
}

export const JobCategorySuggest = forwardRef<
  HTMLInputElement,
  JobCategorySuggestProps
>(
  (
    {
      client,
      debounceDelay = 250,
      onSelect,
      positionTitle,
      positionLocation,
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
    const [
      getCategorySuggestion,
      { data: suggestData, error: suggestError, loading: suggestLoading },
    ] = useLazyQuery<JobCategorySuggestQuery>(JOB_CATEGORY_SUGGEST, {
      client,
      // Avoid polluting the Apollo cache with partial searches
      fetchPolicy: 'no-cache',
    });

    const [debouncePositionTitle] = useDebounce(positionTitle, debounceDelay);

    const [debouncePositionLocation] = useDebounce(
      positionLocation,
      debounceDelay,
    );

    useEffect(() => {
      if (debouncePositionTitle && debouncePositionLocation) {
        getCategorySuggestion({
          variables: {
            positionProfile: {
              positionTitle: debouncePositionTitle,
              positionLocation: debouncePositionLocation,
            },
            schemeId,
            first: 5,
          },
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [schemeId, debouncePositionTitle, debouncePositionLocation]);

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
