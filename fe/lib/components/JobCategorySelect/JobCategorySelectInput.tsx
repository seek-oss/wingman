import { calc } from '@vanilla-extract/css-utils';
import { Box, Dropdown, Stack } from 'braid-design-system';
import { vars } from 'braid-design-system/css';
import React, { ComponentProps, useEffect, useRef, useState } from 'react';

import type {
  JobCategoriesQuery,
  JobCategoryAttributesFragment,
} from '../../types/seekApi.graphql';
import { findObjectByOid } from '../../utils';

import { categoryLink, childCategoryStyling } from './styles.css';

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

  const categoryLinkHeight = dropDownHeight
    ? calc.add(
        vars.space.small, // Padding associated to parent `Box`
        vars.space.xsmall, // Padding associated to Dropdown
        `${dropDownHeight / 2}px`,
      )
    : '0px';

  return (
    <Stack space="none">
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
      {childCategories && (
        <Box position="relative" paddingTop="small">
          <Box
            className={categoryLink}
            style={{ height: categoryLinkHeight }}
          />
          <Box className={childCategoryStyling}>
            <Dropdown
              {...restProps}
              aria-label="Subcategory"
              id="subJobCategoriesSelect"
              label={undefined}
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
        </Box>
      )}
    </Stack>
  );
};

export default JobCategorySelectInput;
