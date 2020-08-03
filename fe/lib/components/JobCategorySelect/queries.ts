import { gql } from '@apollo/client';

const JOB_CATEGORY_ATTRIBUTES = gql`
  fragment jobCategoryAttributes on JobCategory {
    id {
      value
    }
    name
  }
`;

const NESTED_JOB_CATEGORY_ATTRIBUTES = gql`
  fragment nestedJobCategoryAttributes on JobCategory {
    ...jobCategoryAttributes
    parent {
      ...jobCategoryAttributes
    }
    children {
      ...jobCategoryAttributes
      parent {
        ...jobCategoryAttributes
      }
    }
  }
  ${JOB_CATEGORY_ATTRIBUTES}
`;

export const JOB_CATEGORIES = gql`
  query($schemeId: String!) {
    jobCategories(schemeId: $schemeId) {
      ...nestedJobCategoryAttributes
    }
  }
  ${NESTED_JOB_CATEGORY_ATTRIBUTES}
`;
