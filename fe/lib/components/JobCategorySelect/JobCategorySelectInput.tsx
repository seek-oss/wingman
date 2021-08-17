import { Column, Columns, Dropdown } from 'braid-design-system';
import React, { ComponentProps, useEffect, useState } from 'react';

import type {
  JobCategoriesQuery,
  JobCategory,
  JobCategoryAttributesFragment,
} from '../../types/seek.graphql';
import { findObjectByOid } from '../../utils';

type AllJobCategories = JobCategoriesQuery['jobCategories'];
type AnyJobCategory = JobCategoryAttributesFragment;

interface Props {
  jobCategories: AllJobCategories;
  onSelect: (jobCategory: AnyJobCategory, type: 'parent' | 'child') => void;
  tone: ComponentProps<typeof Dropdown>['tone'];
  hideLabel?: boolean;
  initialJobCategory?: JobCategory;
}

const JobCategorySelectInput = ({
  jobCategories,
  onSelect,
  hideLabel,
  initialJobCategory,
  ...restProps
}: Props) => {
  const [selectedParentCategoryId, setSelectedParentCategoryId] = useState('');
  const [selectedChildCategoryId, setSelectedChildCategoryId] = useState('');
  const [childCategories, setChildCategories] = useState<AnyJobCategory[]>();
  const [isInitialJobCategory, setIsInitialJobCategory] = useState<boolean>();

  useEffect(() => {
    if (selectedParentCategoryId !== '' && !isInitialJobCategory) {
      const parentCategory = findObjectByOid(
        jobCategories,
        selectedParentCategoryId,
      );

      if (parentCategory?.children) {
        setChildCategories(parentCategory.children);
        setSelectedChildCategoryId('');
        onSelect(parentCategory, 'parent');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedParentCategoryId]);

  useEffect(() => {
    if (initialJobCategory?.parent && !initialJobCategory?.children) {
      setIsInitialJobCategory(true);
      const parentCategory = findObjectByOid(
        jobCategories,
        initialJobCategory.parent.id.value,
      );

      if (parentCategory?.children) {
        setSelectedParentCategoryId(parentCategory.id.value);
        setChildCategories(parentCategory.children);
        setSelectedChildCategoryId(initialJobCategory.id.value);
        onSelect(parentCategory, 'parent');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialJobCategory]);

  useEffect(() => {
    if (selectedChildCategoryId !== '' && childCategories) {
      const childCategory = findObjectByOid(
        childCategories,
        selectedChildCategoryId,
      );
      if (childCategory) {
        onSelect(childCategory, 'child');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChildCategoryId, childCategories]);

  return (
    <Columns space="small">
      <Column>
        <Dropdown
          {...restProps}
          aria-label={hideLabel ? 'Category' : undefined}
          id="jobCategoriesSelect"
          label={hideLabel ? undefined : 'Category'}
          onChange={(event) => {
            setSelectedParentCategoryId(event.currentTarget.value);
            setIsInitialJobCategory(false);
          }}
          placeholder="Select a category"
          value={selectedParentCategoryId}
        >
          {jobCategories.map(({ name, id }) => (
            <option key={id.value} value={id.value}>
              {name}
            </option>
          ))}
        </Dropdown>
      </Column>
      <Column>
        {childCategories && (
          <Dropdown
            {...restProps}
            id="subJobCategoriesSelect"
            label={hideLabel ? undefined : 'Subcategory'}
            onChange={(event) => {
              setSelectedChildCategoryId(event.currentTarget.value);
              setIsInitialJobCategory(false);
            }}
            placeholder="Select a subcategory"
            value={selectedChildCategoryId}
          >
            {childCategories.map(({ name, id }) => (
              <option key={id.value} value={id.value}>
                {name}
              </option>
            ))}
          </Dropdown>
        )}
      </Column>
    </Columns>
  );
};

export default JobCategorySelectInput;
