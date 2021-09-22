import { ApolloClient } from '@apollo/client';
import {
  RadioGroup,
  RadioItem,
  Stack,
  Strong,
  Text,
} from 'braid-design-system';
import React, { ComponentProps, forwardRef, useEffect, useState } from 'react';

import type {
  JobCategory,
  JobCategorySuggestionChoiceAttributesFragment,
} from '../../types/seekApi.graphql';
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
  initialValue?: string;
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
      initialValue,
      ...restProps
    },
    forwardedRef,
  ) => {
    const suggestions = choices.map((choice) => ({
      key: choice.jobCategory.id.value,
      label: getJobCategoryName(choice.jobCategory),
      confidence: choice.confidence,
    }));

    const [selectedJobCategory, setSelectedJobCategory] = useState<
      string | undefined
    >(initialValue ? 'Other' : undefined);

    useEffect(() => {
      const [firstChoice] = choices;
      if (!initialValue && firstChoice.confidence > 0.5) {
        setSelectedJobCategory(firstChoice.jobCategory.id.value);
        onSelect(firstChoice);
      }
    }, [choices, initialValue, onSelect]);

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
        <Text id="job-category-suggest-select-label" weight="strong">
          Category
        </Text>
        <RadioGroup
          {...restProps}
          aria-labelledby="job-category-suggest-select-label"
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
          <RadioItem key="Other" label="Other" ref={forwardedRef} value="Other">
            {selectedJobCategory === 'Other' && (
              <JobCategorySelect
                client={client}
                label="Category"
                id="job-category-suggest-select-other"
                initialValue={initialValue}
                onSelect={(jobCategory, type) => {
                  /**
                   * Only child job categories are suitable for job posting
                   */
                  if (type === 'child') {
                    onSelect({ jobCategory, confidence: 1 });
                  }
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
