import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-design-system/css';
import { Box, Dropdown, Stack } from 'braid-design-system';
import React, { ComponentProps, useEffect, useRef, useState } from 'react';

import type {
  JobCategoriesQuery,
  JobCategoryAttributesFragment,
} from '../../types/seekApi.graphql';
import { findObjectByOid } from '../../utils';

import { wrapper } from './styles.css';

type AllJobCategories = JobCategoriesQuery['jobCategories'];
type AnyJobCategory = JobCategoryAttributesFragment;

interface Props {
  jobCategories: AllJobCategories;
  onSelect: (jobCategory: AnyJobCategory, type: 'parent' | 'child') => void;
  tone: ComponentProps<typeof Dropdown>['tone'];
  hideLabel?: boolean;
  initialValue?: string;
}

const JobCategorySelectInput = ({
  jobCategories,
  onSelect,
  hideLabel,
  initialValue,
  ...restProps
}: Props) => {
  const [selectedParentCategoryId, setSelectedParentCategoryId] = useState('');
  const [selectedChildCategoryId, setSelectedChildCategoryId] = useState('');
  const [childCategories, setChildCategories] = useState<AnyJobCategory[]>();
  const parentRef = useRef<HTMLSelectElement>(null);

  const handleParentCategorySelect = (parentCategoryId: string) => {
    const parentCategory = findObjectByOid(jobCategories, parentCategoryId);

    setSelectedParentCategoryId(parentCategoryId);

    if (parentCategory?.children) {
      setChildCategories(parentCategory.children);
      setSelectedChildCategoryId('');
      onSelect(parentCategory, 'parent');
    }
  };

  const handleChildCategorySelect = (childCategoryId: string) => {
    if (childCategories) {
      const childCategory = findObjectByOid(childCategories, childCategoryId);
      setSelectedChildCategoryId(childCategoryId);
      if (childCategory) {
        onSelect(childCategory, 'child');
      }
    }
  };

  useEffect(() => {
    if (initialValue) {
      for (const parentCategory of jobCategories) {
        if (!parentCategory.children) {
          continue;
        }

        if (parentCategory.id.value === initialValue) {
          setChildCategories(parentCategory.children);
          setSelectedParentCategoryId(parentCategory.id.value);
          return;
        }

        for (const childCategory of parentCategory.children) {
          if (childCategory.id.value === initialValue) {
            setChildCategories(parentCategory.children);
            setSelectedParentCategoryId(parentCategory.id.value);
            setSelectedChildCategoryId(childCategory.id.value);
            return;
          }
        }
      }
    }
  }, [initialValue, jobCategories]);

  const dropDownHeight = parentRef.current?.clientHeight;

  return (
    <Box position="relative">
      <Stack space="xsmall">
        <Dropdown
          {...restProps}
          ref={parentRef}
          aria-label="Category"
          id="jobCategoriesSelect"
          label={hideLabel ? undefined : 'Category'}
          onChange={(event) =>
            handleParentCategorySelect(event.currentTarget.value)
          }
          placeholder="Select a category"
          value={selectedParentCategoryId}
        >
          {jobCategories.map(({ name, id }) => (
            <option key={id.value} value={id.value}>
              {name}
            </option>
          ))}
        </Dropdown>
        {childCategories && Boolean(dropDownHeight) && (
          <React.Fragment>
            <Box
              className={wrapper}
              style={{
                width: parentRef.current?.clientWidth / 2 ?? 0,
                height: calc.add(
                  `${dropDownHeight}px`,
                  vars.space.small,
                  vars.space.xsmall,
                  vars.space.xxsmall,
                  `${dropDownHeight! / 2}px`,
                ),
              }}
            />
            <Box paddingLeft="xxlarge">
              <Dropdown
                {...restProps}
                aria-label="Subcategory"
                id="subJobCategoriesSelect"
                label={hideLabel ? undefined : 'Subcategory'}
                onChange={(event) =>
                  handleChildCategorySelect(event.currentTarget.value)
                }
                placeholder="Select a subcategory"
                value={selectedChildCategoryId}
              >
                {childCategories.map(({ name, id }) => (
                  <option key={id.value} value={id.value}>
                    {name}
                  </option>
                ))}
              </Dropdown>
            </Box>
          </React.Fragment>
        )}
      </Stack>
    </Box>
  );
};

export default JobCategorySelectInput;
