import { ApolloClient, useQuery } from '@apollo/client';
import {
  Dropdown,
  FieldMessage,
  Loader,
  Stack,
  Text,
} from 'braid-design-system';
import React, { ComponentPropsWithRef, forwardRef, useState } from 'react';

import type {
  JobCategoriesQuery,
  JobCategoryAttributesFragment,
} from '../../types/seek.graphql';

import JobCategorySelectInput from './JobCategorySelectInput';
import { JOB_CATEGORIES } from './queries';

interface FieldProps extends ComponentPropsWithRef<typeof Dropdown> {}
type JobCategoryType = 'parent' | 'child';

interface Props extends Omit<FieldProps, 'value' | 'onChange' | 'children'> {
  client?: ApolloClient<unknown>;
  onSelect?: (
    jobCategory: JobCategoryAttributesFragment,
    type: JobCategoryType,
  ) => void;
  schemeId: string;
  hideLabel?: boolean;
}

export const JobCategorySelect = forwardRef<HTMLInputElement, Props>(
  (
    {
      client,
      onSelect,
      schemeId,

      message,
      name,
      reserveMessageSpace,
      tone,
      hideLabel,
      ...restProps
    },
    forwardedRef,
  ) => {
    const {
      data: categoriesData,
      loading: categoriesLoading,
      error: categoriesError,
    } = useQuery<JobCategoriesQuery>(JOB_CATEGORIES, {
      ...(client && { client }),
      fetchPolicy: 'no-cache',
      variables: {
        schemeId,
      },
    });

    const [selectedJobCategoryId, setSelectedJobCategoryId] = useState('');

    const handleJobCategoriesSelect = (
      selectedJobCategory: JobCategoryAttributesFragment,
      type: JobCategoryType,
    ) => {
      if (onSelect) {
        onSelect(selectedJobCategory, type);
      }
      if (selectedJobCategory?.id?.value) {
        setSelectedJobCategoryId(selectedJobCategory.id.value);
      }
    };

    return (
      <Stack space="small">
        <Stack space="none">
          {categoriesLoading ? (
            <Stack space="medium">
              <Text>Loading all categories</Text>
              <Loader size="xsmall" />
            </Stack>
          ) : (
            categoriesData?.jobCategories && (
              <JobCategorySelectInput
                {...restProps}
                jobCategories={categoriesData.jobCategories}
                onSelect={handleJobCategoriesSelect}
                tone={tone}
                hideLabel={hideLabel}
              />
            )
          )}

          <input
            type="hidden"
            name={name}
            value={selectedJobCategoryId}
            ref={forwardedRef}
            readOnly
          />
        </Stack>

        {message || reserveMessageSpace ? (
          <FieldMessage
            id="jobCategorySelectMessage"
            message={message}
            reserveMessageSpace={
              categoriesError ? undefined : reserveMessageSpace
            }
            tone={tone}
          />
        ) : null}

        {categoriesError && (
          <FieldMessage
            id="jobCategorySelectError"
            message="Sorry, we couldn’t fetch categories. Please try again."
            tone="critical"
          />
        )}
      </Stack>
    );
  },
);
