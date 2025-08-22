import type { ApolloClient } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import {
  type Dropdown,
  FieldMessage,
  Loader,
  Stack,
  Text,
} from 'braid-design-system';
import React, { type ComponentPropsWithRef, forwardRef, useState } from 'react';

import type {
  JobCategoriesPositionProfileInput,
  JobCategoriesQuery,
  JobCategoriesQueryVariables,
  JobCategoryAttributesFragment,
} from '../../types/seekApi.graphql';

import JobCategorySelectInput from './JobCategorySelectInput';
import { JOB_CATEGORIES } from './queries';

type FieldProps = ComponentPropsWithRef<typeof Dropdown>;
type JobCategoryType = 'parent' | 'child';

export interface JobCategorySelectProps
  extends Omit<FieldProps, 'value' | 'onChange' | 'children'> {
  client?: ApolloClient;
  context?: Record<string, unknown>;
  label?: string;
  onSelect?: (
    jobCategory: JobCategoryAttributesFragment,
    type: JobCategoryType,
  ) => void;
  schemeId: string;
  positionProfile?: JobCategoriesPositionProfileInput;
  initialValue?: string;
  hideLabel?: boolean;
}

export const JobCategorySelect = forwardRef<
  HTMLInputElement,
  JobCategorySelectProps
>(
  (
    {
      client,
      context,
      onSelect,
      schemeId,
      positionProfile,
      initialValue,

      message,
      name,
      reserveMessageSpace,
      tone,
      ...restProps
    },
    forwardedRef,
  ) => {
    const {
      data: categoriesData,
      loading: categoriesLoading,
      error: categoriesError,
    } = useQuery<JobCategoriesQuery, JobCategoriesQueryVariables>(
      JOB_CATEGORIES,
      {
        ...(client && { client }),
        context,
        variables: {
          schemeId,
          positionProfile,
        },
      },
    );

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
                initialValue={initialValue}
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
