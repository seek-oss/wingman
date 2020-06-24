import { Radio, Stack, Strong, Text } from 'braid-design-system';
import React, { forwardRef, useState } from 'react';

import {
  JobCategory,
  JobCategorySuggestionChoice,
} from '../../types/seek.graphql';
import { flattenResourceByKey } from '../../utils';

interface Props {
  choices: JobCategorySuggestionChoice[];
  onSelect?: (jobCategorySuggestionChoice: JobCategorySuggestionChoice) => void;
  showConfidence?: boolean;
}

const getJobCategoryName = (jobCategory: JobCategory): string =>
  flattenResourceByKey(jobCategory, 'parent')
    .reverse()
    .map((flatJobCategory: JobCategory) => flatJobCategory.name)
    .join(' > ');

const JobCategorySuggestChoices = forwardRef<HTMLInputElement, Props>(
  ({ choices, onSelect, showConfidence = false }, forwardedRef) => {
    const [selectedJobCategory, setSelectedJobCategory] = useState<
      JobCategory
    >();

    const handleChoiceSelect = (choice: JobCategorySuggestionChoice) => {
      setSelectedJobCategory(choice.jobCategory);
      if (onSelect) {
        onSelect(choice);
      }
    };

    return (
      <Stack space="small">
        <Text>
          <Strong>Select a job category</Strong>
        </Text>
        {choices.map((choice: JobCategorySuggestionChoice) => {
          const { jobCategory, confidence } = choice;
          const { id } = jobCategory;
          return (
            <Radio
              key={id.value}
              checked={id.value === selectedJobCategory?.id.value}
              onChange={() => handleChoiceSelect(choice)}
              value={id.value}
              name="jobCategorySuggestion"
              id={id.value}
              label={getJobCategoryName(jobCategory)}
              ref={forwardedRef}
            >
              {showConfidence && (
                <Text tone="secondary" size="small">
                  <Strong>Confidence score:</Strong>{' '}
                  {`${(confidence * 100).toFixed(2)}%`}
                </Text>
              )}
            </Radio>
          );
        })}
      </Stack>
    );
  },
);

export default JobCategorySuggestChoices;
