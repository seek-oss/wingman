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
  JobCategorySuggestionChoice,
} from '../../types/seek.graphql';
import { flattenResourceByKey } from '../../utils';

interface Props {
  choices: JobCategorySuggestionChoice[];
  name?: string;
  onSelect?: (jobCategorySuggestionChoice: JobCategorySuggestionChoice) => void;
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
    { choices, name, onSelect, showConfidence = false, ...restProps },
    forwardedRef,
  ) => {
    const [
      selectedJobCategory,
      setSelectedJobCategory,
    ] = useState<JobCategory>();

    const handleChoiceSelect = (event: React.FormEvent<HTMLInputElement>) => {
      const choiceId = event.currentTarget.value;

      const jobCategorySuggest = choices.find(
        (choice) => choice.jobCategory.id.value === choiceId,
      );

      setSelectedJobCategory(jobCategorySuggest?.jobCategory);

      if (onSelect && jobCategorySuggest) {
        onSelect(jobCategorySuggest);
      }
    };

    return (
      <Stack space="small">
        <Text weight="strong">Category</Text>

        <RadioGroup
          {...restProps}
          id="job-category-suggest-select"
          name={name}
          onChange={handleChoiceSelect}
          value={selectedJobCategory?.id.value ?? ''}
        >
          {choices.map((choice) => {
            const { jobCategory, confidence } = choice;
            const { id } = jobCategory;
            return (
              <RadioItem
                key={id.value}
                label={getJobCategoryName(jobCategory)}
                ref={forwardedRef}
                value={id.value}
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
        </RadioGroup>
      </Stack>
    );
  },
);

export default JobCategorySuggestChoices;
