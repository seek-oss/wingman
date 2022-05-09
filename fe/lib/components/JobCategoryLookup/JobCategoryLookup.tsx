import { ApolloClient, useLazyQuery } from '@apollo/client';
import {
  FieldMessage,
  Loader,
  Notice,
  Stack,
  Text,
  TextField,
} from 'braid-design-system';
import React, { forwardRef, useEffect, useState } from 'react';
import { InlineCode } from 'scoobie';
import { useDebounce } from 'use-debounce';

import { BreadCrumbsString } from '../../../example/src/components/BreadCrumbsString';
import { SeekApiResponse } from '../../../example/src/components/SeekApiResponse';
import {
  JobCategoryQuery,
  JobCategoryQueryVariables,
} from '../../types/seekApi.graphql';
import { flattenResourceByKey } from '../../utils/flattenResourceByKey';

import { JOB_CATEGORY } from './queries';

export interface JobCategoryLookupProps {
  schemeId: string;
  client?: ApolloClient<unknown>;
  initialJobCategoryId?: string;
  debounceDelay?: number;
}

export const JobCategoryLookup = forwardRef<
  HTMLInputElement,
  JobCategoryLookupProps
>(({ schemeId, initialJobCategoryId, debounceDelay = 250, client }) => {
  const [jobCategoryId, setJobCategoryId] = useState(
    initialJobCategoryId ?? '',
  );

  const [debouncedJobCategoryId] = useDebounce(jobCategoryId, debounceDelay);

  const [
    jobCategoryLookup,
    { data: categoryData, error: categoryError, loading: categoryLoading },
  ] = useLazyQuery<JobCategoryQuery, JobCategoryQueryVariables>(JOB_CATEGORY, {
    ...(client && { client }),
  });

  useEffect(() => {
    if (debouncedJobCategoryId) {
      jobCategoryLookup({
        variables: {
          id: debouncedJobCategoryId,
        },
      });
    }
  }, [jobCategoryLookup, debouncedJobCategoryId]);

  if (categoryLoading) {
    return <Loader />;
  }
  return (
    <Stack dividers space="large">
      <Stack space="medium">
        <TextField
          aria-label="Job category OID"
          id="jobCategoryLookupId"
          onClear={() => setJobCategoryId('')}
          value={jobCategoryId ?? ''}
          onChange={(event) => setJobCategoryId(event.currentTarget.value)}
          name="categoryId"
        />

        <FieldMessage
          id="categoryIdMessage"
          message={
            <>
              e.g. <InlineCode>{schemeId}:jobCategory:seek:CTriSTrf</InlineCode>
            </>
          }
        />
      </Stack>

      {categoryLoading && <Loader />}

      {categoryError && (
        <FieldMessage
          id="jobCategoryLookupError"
          message="Sorry, we couldn’t fetch category. Please try again."
          tone="critical"
        />
      )}

      {categoryData &&
        (categoryData.jobCategory ? (
          <>
            <BreadCrumbsString
              segments={flattenResourceByKey(categoryData.jobCategory, 'parent')
                .map((x) => ({ name: x.name, key: x.id.value }))
                .reverse()}
            />

            <SeekApiResponse id="jobCategoryLookupSeekApiResponse">
              {categoryData.jobCategory}
            </SeekApiResponse>
          </>
        ) : (
          <Notice tone="info">
            <Text>Hmm, we can’t find that job category.</Text>
          </Notice>
        ))}
    </Stack>
  );
});
