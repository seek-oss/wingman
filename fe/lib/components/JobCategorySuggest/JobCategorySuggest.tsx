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
} from '../../types/seekApi.graphql';

import JobCategorySuggestChoices from './JobCategorySuggestChoices';
import { JOB_CATEGORY_SUGGEST } from './queries';

type RadioProps = ComponentPropsWithRef<typeof RadioGroup>;

export interface JobCategorySuggestProps
  extends Partial<Omit<RadioProps, 'id'>> {
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

const propsAreEqual = (
  prevProps: JobCategorySuggestProps,
  nextProps: JobCategorySuggestProps,
) =>
  prevProps.schemeId === nextProps.schemeId &&
  prevProps.onSelect === nextProps.onSelect &&
  prevProps.client === nextProps.client &&
  prevProps.debounceDelay === nextProps.debounceDelay &&
  prevProps.showConfidence === nextProps.showConfidence &&
  prevProps.initialValue === nextProps.initialValue &&
  // This is a bit lazy, but the partner's frontend will serialise this as JSON
  // when passing to the SEEK API. This should only cause false positives if the
  // property order changes.
  JSON.stringify(prevProps.positionProfile) ===
    JSON.stringify(nextProps.positionProfile);

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
      const [
        getCategorySuggestion,
        { data: suggestData, error: suggestError, loading: suggestLoading },
      ] = useLazyQuery<JobCategorySuggestQuery>(JOB_CATEGORY_SUGGEST, {
        client,
        // Avoid polluting the Apollo cache with partial searches
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
  propsAreEqual,
);
