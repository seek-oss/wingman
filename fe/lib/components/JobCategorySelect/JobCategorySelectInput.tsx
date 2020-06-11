import { Column, Columns, Dropdown } from 'braid-design-system';
import React, { useEffect, useState } from 'react';

import { JobCategory } from '../../types/seek.graphql';
import { findCategory } from '../../utils';

interface Props {
  jobCategories: JobCategory[];
  onSelect: (jobCategory: JobCategory) => void;
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
          id="jobCategoriesSelect"
          label="Job category"
          placeholder="Please select a job category"
          onChange={(event) =>
            setSelectedParentCategoryId(event.currentTarget.value)
          }
          value={selectedParentCategoryId}
          {...restProps}
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
            id="subJobCategoriesSelect"
            label="Sub category"
            placeholder="Please select a sub category"
            onChange={(event) =>
              setSelectedChildCategoryId(event.currentTarget.value)
            }
            value={selectedChildCategoryId}
            {...restProps}
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
