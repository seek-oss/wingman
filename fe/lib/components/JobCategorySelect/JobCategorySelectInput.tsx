import { Column, Columns, Dropdown } from 'braid-design-system';
import React, { ComponentProps, useEffect, useState } from 'react';

import type { JobCategory } from '../../types/seek.graphql';
import { findCategory } from '../../utils';

interface Props {
  jobCategories: JobCategory[];
  onSelect: (jobCategory: JobCategory) => void;
  tone: ComponentProps<typeof Dropdown>['tone'];
}

const JobCategorySelectInput = ({
  jobCategories,
  onSelect,
  ...restProps
}: Props) => {
  const [selectedParentCategoryId, setSelectedParentCategoryId] = useState('');
  const [selectedChildCategoryId, setSelectedChildCategoryId] = useState('');
  const [childCategories, setChildCategories] = useState<JobCategory[]>();

  useEffect(() => {
    if (selectedParentCategoryId !== '') {
      const parentCategory = findCategory(
        jobCategories,
        selectedParentCategoryId,
      );

      if (parentCategory?.children) {
        setChildCategories(parentCategory.children);
        setSelectedChildCategoryId('');
        onSelect(parentCategory);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedParentCategoryId]);

  useEffect(() => {
    if (selectedChildCategoryId !== '' && childCategories) {
      const childCategory = findCategory(
        childCategories,
        selectedChildCategoryId,
      );
      if (childCategory) {
        onSelect(childCategory);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChildCategoryId, childCategories]);

  return (
    <Columns space="small">
      <Column>
        <Dropdown
          {...restProps}
          id="jobCategoriesSelect"
          label="Category"
          onChange={(event) =>
            setSelectedParentCategoryId(event.currentTarget.value)
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
      </Column>
      <Column>
        {childCategories && (
          <Dropdown
            {...restProps}
            id="subJobCategoriesSelect"
            label="Subcategory"
            onChange={(event) =>
              setSelectedChildCategoryId(event.currentTarget.value)
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
        )}
      </Column>
    </Columns>
  );
};

export default JobCategorySelectInput;
