import { ApolloClient, useLazyQuery } from '@apollo/client';
import {
  Button,
  Column,
  Columns,
  FieldMessage,
  Loader,
  Notice,
  Stack,
  Text,
  TextField,
} from 'braid-design-system';
import React, { forwardRef, useState } from 'react';
import { InlineCode } from 'scoobie';

import { SeekApiResponse } from '../../../example/src/components/SeekApiResponse';
import {
  JobCategoryQuery,
  JobCategoryQueryVariables,
} from '../../types/seekApi.graphql';

import { JOB_CATEGORY } from './queries';

export interface JobCategoryLookupProps {
  schemeId: string;
  client?: ApolloClient<unknown>;
  initialJobCategoryId?: string;
}

export const JobCategoryLookup = forwardRef<
  HTMLInputElement,
  JobCategoryLookupProps
>(({ schemeId, initialJobCategoryId, client }) => {
  const [jobCategoryId, setJobCategoryId] = useState(
    initialJobCategoryId ?? '',
  );

  const [
    jobCategoryLookup,
    { data: categoryData, error: categoryError, loading: categoryLoading },
  ] = useLazyQuery<JobCategoryQuery, JobCategoryQueryVariables>(JOB_CATEGORY, {
    ...(client && { client }),
  });

  const handleSubmit = () => {
    jobCategoryLookup({
      variables: {
        id: jobCategoryId,
      },
    });
  };
  return (
    <form action="" method="get">
      <Stack space="small">
        <Columns space="small" alignY="bottom">
          <Column>
            <TextField
              aria-label="Job category OID"
              id="categoryId"
              onClear={() => setJobCategoryId('')}
              value={jobCategoryId ?? ''}
              onChange={(event) => setJobCategoryId(event.currentTarget.value)}
              name="categoryId"
            />
          </Column>

          <Column width="content">
            <Button onClick={handleSubmit}>Find</Button>
          </Column>
        </Columns>

        <FieldMessage
          id="categoryIdMessage"
          message={
            <>
              e.g. <InlineCode>{schemeId}:jobCategory:seek:cs6EEZj5</InlineCode>
            </>
          }
        />

        {categoryLoading && <Loader />}

        {categoryError && (
          <FieldMessage
            id="jobCategorySelectError"
            message="Sorry, we couldn’t fetch categories. Please try again."
            tone="critical"
          />
        )}

        <Stack space="medium">
          {categoryData &&
            (categoryData.jobCategory ? (
              <>
                {/* <Breadcrumbs
              segments={flattenResourceByKey(
                categoryData.jobCategory,
                'parent',
              ).reverse()}
            /> */}

                <SeekApiResponse id="jobCategorySeekApiResponse">
                  {categoryData.jobCategory}
                </SeekApiResponse>
              </>
            ) : (
              <Notice tone="info">
                <Text>Hmm, we can’t find that job category.</Text>
              </Notice>
            ))}
        </Stack>
      </Stack>
    </form>
  );
});
