import type { ApolloClient } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import {
  Divider,
  FieldMessage,
  Loader,
  Notice,
  Stack,
  Text,
  TextField,
} from 'braid-design-system';
import { useState } from 'react';
import { InlineCode } from 'scoobie';
import { useDebounce } from 'use-debounce';

import type {
  JobCategoryQuery,
  JobCategoryQueryVariables,
} from '../../types/seekApi.graphql';
import { flattenResourceByKey } from '../../utils/flattenResourceByKey';
import { BreadCrumbsString } from '../BreadCrumbsString/BreadCrumbsString';
import { SeekApiResponse } from '../SeekApiResponse/SeekApiResponse';

import { JOB_CATEGORY } from './queries';

export interface JobCategoryLookupProps {
  schemeId: string;
  client?: ApolloClient;
  context?: Record<string, unknown>;
  initialJobCategoryId?: string;
  debounceDelay?: number;
}

export const JobCategoryLookup = ({
  schemeId,
  initialJobCategoryId,
  debounceDelay = 250,
  client,
  context,
}: JobCategoryLookupProps) => {
  const [jobCategoryId, setJobCategoryId] = useState(
    initialJobCategoryId ?? '',
  );

  const [debouncedJobCategoryId] = useDebounce(jobCategoryId, debounceDelay);

  const {
    data: categoryData,
    error: categoryError,
    loading: categoryLoading,
  } = useQuery<JobCategoryQuery, JobCategoryQueryVariables>(JOB_CATEGORY, {
    ...(client && { client }),
    context,
    variables: {
      id: debouncedJobCategoryId,
    },
    skip: !debouncedJobCategoryId,
  });

  return (
    <Stack space="large">
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
      {categoryLoading && (
        <>
          <Divider />
          <Loader />
        </>
      )}

      {categoryError && (
        <>
          <Divider />
          <FieldMessage
            id="jobCategoryLookupError"
            message="Sorry, we couldn’t retrieve this job category. Please try again."
            tone="critical"
          />
        </>
      )}

      {categoryData &&
        (categoryData.jobCategory ? (
          <>
            <Divider />
            <BreadCrumbsString
              segments={flattenResourceByKey(
                categoryData.jobCategory,
                'parent',
              ).map((x) => ({ name: x.name, key: x.id.value }))}
            />
            <Divider />
            <SeekApiResponse
              data={categoryData.jobCategory}
              id="jobCategoryLookupSeekApiResponse"
            />
          </>
        ) : (
          <>
            <Divider />
            <Notice tone="info">
              <Text>Hmm, we can’t find that job category.</Text>
            </Notice>
          </>
        ))}
    </Stack>
  );
};
