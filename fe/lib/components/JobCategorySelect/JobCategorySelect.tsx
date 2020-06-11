import { useQuery } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import {
  Dropdown,
  FieldMessage,
  Loader,
  Stack,
  Text,
} from 'braid-design-system';
import React, { ComponentPropsWithRef, forwardRef, useState } from 'react';

import { JobCategory } from '../../types/seek.graphql';

import JobCategorySelectInput from './JobCategorySelectInput';
import { JOB_CATEGORIES } from './queries';

interface FieldProps extends ComponentPropsWithRef<typeof Dropdown> {}

interface Props extends Omit<FieldProps, 'value' | 'onChange' | 'children'> {
  client?: ApolloClient<unknown>;
  schemeId: string;
  onSelect?: (jobCategory: JobCategory) => void;
}

export const JobCategorySelect = forwardRef<HTMLInputElement, Props>(
  ({ schemeId, onSelect, client, ...restProps }, forwardedRef) => {
    const {
      data: categoriesData,
      loading: categoriesLoading,
      error: categoriesError,
    } = useQuery(JOB_CATEGORIES, {
      ...(client && { client }),
      fetchPolicy: 'no-cache',
      variables: {
        schemeId,
      },
    });

    const [selectedJobCategoryId, setSelectedJobCategoryId] = useState('');

    const handleJobCategoriesSelect = (selectedJobCategory: JobCategory) => {
      if (onSelect) {
        onSelect(selectedJobCategory);
      }
      if (selectedJobCategory?.id?.value) {
        setSelectedJobCategoryId(selectedJobCategory.id.value);
      }
    };

    return (
      <>
        {categoriesLoading ? (
          <Stack space="medium">
            <Text>Loading all categories</Text>
            <Loader size="xsmall" />
          </Stack>
        ) : (
          categoriesData?.jobCategories && (
            <JobCategorySelectInput
              onSelect={handleJobCategoriesSelect}
              jobCategories={categoriesData.jobCategories}
              {...restProps}
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
        {categoriesError && (
          <FieldMessage
            id="selectError"
            message="Error fetching job category, please try again"
            tone="critical"
          />
        )}
      </>
    );
  },
);
