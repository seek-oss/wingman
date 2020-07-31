import { useLazyQuery } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { FieldMessage, Loader, Radio, Stack, Text } from 'braid-design-system';
import React, {
  ComponentProps,
  ComponentPropsWithRef,
  forwardRef,
  useEffect,
} from 'react';
import { useDebounce } from 'use-debounce';

import {
  JobCategorySuggestionChoice,
  JobCategorySuggestionPositionProfileInput,
} from '../../types/seek.graphql';

import JobCategorySuggestChoices from './JobCategorySuggestChoices';
import { JOB_CATEGORY_SUGGESTION } from './queries';

interface RadioProps extends ComponentPropsWithRef<typeof Radio> {}

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
              tone={tone}
              {...restProps}
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
