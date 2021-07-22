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

interface Props {
  choices: JobCategorySuggestionChoiceAttributesFragment[];
  name?: string;
  onSelect?: (
    jobCategorySuggestionChoice: JobCategorySuggestionChoiceAttributesFragment,
  ) => void;
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
    const simpleChoices = choices.map((choice) => {
      return {
        key: choice.jobCategory.id.value,
        label: getJobCategoryName(choice.jobCategory),
        value: choice.jobCategory.id.value,
        confidence: choice.confidence,
      };
    });

    simpleChoices.push({
      key: 'Other',
      label: 'Other',
      value: 'Other',
      confidence: 0,
    });

    const [selectedJobCategory, setSelectedJobCategory] = useState<string>();

    const handleChoiceSelect = (event: React.FormEvent<HTMLInputElement>) => {
      const choiceId = event.currentTarget.value;

      const jobCategorySuggest = choices.find(
        (choice) => choice.jobCategory.id.value === choiceId,
      );

      setSelectedJobCategory(choiceId);

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
          value={selectedJobCategory ?? ''}
        >
          {simpleChoices.map((choice) => {
            const { label, confidence, key, value } = choice;
            return (
              <RadioItem
                key={key}
                label={label}
                ref={forwardedRef}
                value={value}
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
