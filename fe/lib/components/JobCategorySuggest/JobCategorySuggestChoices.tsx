import { ApolloClient } from '@apollo/client';
import {
  RadioGroup,
  RadioItem,
  Stack,
  Strong,
  Text,
} from 'braid-design-system';
import React, { ComponentProps, forwardRef, useState } from 'react';

import type {
  JobCategory,
  JobCategorySuggestionChoiceAttributesFragment,
} from '../../types/seek.graphql';
import { flattenResourceByKey } from '../../utils';
import { JobCategorySelect } from '../JobCategorySelect/JobCategorySelect';

interface Props {
  schemeId: string;
  choices: JobCategorySuggestionChoiceAttributesFragment[];
  onSelect: (
    jobCategorySuggestionChoice: JobCategorySuggestionChoiceAttributesFragment,
  ) => void;
  client?: ApolloClient<unknown>;
  name?: string;
  showConfidence?: boolean;
  tone?: ComponentProps<typeof RadioGroup>['tone'];
}

const getJobCategoryName = (jobCategory: JobCategory): string =>
  flattenResourceByKey(jobCategory, 'parent')
    .reverse()
    .map((flatJobCategory: JobCategory) => flatJobCategory.name)
    .join(' > ');

const JobCategorySuggestChoices = forwardRef<HTMLInputElement, Props>(
  (
    {
      client,
      schemeId,
      choices,
      name,
      onSelect,
      showConfidence = false,
      ...restProps
    },
    forwardedRef,
  ) => {
    const suggestions = choices.map((choice) => ({
      key: choice.jobCategory.id.value,
      label: getJobCategoryName(choice.jobCategory),
      confidence: choice.confidence,
    }));

    const [selectedJobCategory, setSelectedJobCategory] = useState<string>();

    const handleChoiceSelect = (event: React.FormEvent<HTMLInputElement>) => {
      const choiceId = event.currentTarget.value;

      const jobCategorySuggest = choices.find(
        (choice) => choice.jobCategory.id.value === choiceId,
      );

      setSelectedJobCategory(choiceId);

      if (jobCategorySuggest) {
        onSelect(jobCategorySuggest);
      }
    };

    return (
      <Stack space="small">
        <Text weight="strong">Category</Text>
        <RadioGroup
          {...restProps}
          name={name}
          id="job-category-suggest-select"
          onChange={handleChoiceSelect}
          value={selectedJobCategory ?? ''}
        >
          <>
            {suggestions.map((choice) => {
              const { label, confidence, key } = choice;
              return (
                <RadioItem
                  key={key}
                  label={label}
                  ref={forwardedRef}
                  value={key}
                >
                  {showConfidence && (
                    <Text tone="secondary" size="small">
                      <Strong>Confidence score:</Strong>{' '}
                      {`${(confidence * 100).toFixed(2)}%`}
                    </Text>
                  )}
                </RadioItem>
              );
            })}
          </>
          <RadioItem
            key="Other"
            label="Other"
            ref={forwardedRef}
            value="Other"
          >
            {selectedJobCategory === 'Other' && (
              <JobCategorySelect
                client={client}
                id="job-category-suggest-select-other"
                onSelect={(jobCategory) => {
                  onSelect({ jobCategory, confidence: 1 });
                }}
                schemeId={schemeId}
                hideLabel
              />
            )}
          </RadioItem>
        </RadioGroup>
      </Stack>
    );
  },
);

export default JobCategorySuggestChoices;
