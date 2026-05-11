import { calc } from '@vanilla-extract/css-utils';
import { Box, Dropdown, Stack } from 'braid-design-system';
import { vars } from 'braid-design-system/css';
import { type ComponentProps, useMemo, useState } from 'react';

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
  label?: string;
}

const JobCategorySelectInput = ({
  jobCategories,
  onSelect,
  hideLabel,
  initialValue,
  label = 'Category',
  ...restProps
}: Props) => {
  const initialState = useMemo(() => {
    if (!initialValue) {
      return { parentId: '', childId: '', children: undefined };
    }

    for (const parentCategory of jobCategories) {
      if (!parentCategory.children) {
        continue;
      }

      if (parentCategory.id.value === initialValue) {
        return {
          parentId: parentCategory.id.value,
          childId: '',
          children: parentCategory.children,
        };
      }

      for (const childCategory of parentCategory.children) {
        if (childCategory.id.value === initialValue) {
          return {
            parentId: parentCategory.id.value,
            childId: childCategory.id.value,
            children: parentCategory.children,
          };
        }
      }
    }

    return { parentId: '', childId: '', children: undefined };
  }, [initialValue, jobCategories]);

  const [selectedParentCategoryId, setSelectedParentCategoryId] = useState(
    initialState.parentId,
  );
  const [selectedChildCategoryId, setSelectedChildCategoryId] = useState(
    initialState.childId,
  );
  const [childCategories, setChildCategories] = useState<AnyJobCategory[]>(
    initialState.children ?? [],
  );
  const [dropDownHeight, setDropDownHeight] = useState<number>();

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
        ref={(node) => {
          if (node && !dropDownHeight) {
            setDropDownHeight(node.clientHeight);
          }
        }}
        aria-label="Category"
        id="jobCategoriesSelect"
        label={hideLabel ? undefined : label}
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
