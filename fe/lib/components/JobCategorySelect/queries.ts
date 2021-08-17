import { gql } from '@apollo/client';

const JOB_CATEGORY_ATTRIBUTES = gql`
  fragment jobCategoryAttributes on JobCategory {
    id {
      value
    }
    name
  }
`;
export const JOB_CATEGORIES = gql`
  query JobCategories($schemeId: String!) {
    jobCategories(schemeId: $schemeId) {
      ...jobCategoryAttributes
      children {
        ...jobCategoryAttributes
      }
    }
  }
  ${JOB_CATEGORY_ATTRIBUTES}
`;

export const JOB_CATEGORY = gql`
  query jobCategory($id: String!) {
    jobCategory(id: $id) {
      ...jobCategoryAttributes
      children {
        ...jobCategoryAttributes
      }
      parent {
        ...jobCategoryAttributes
      }
    }
  }
  ${JOB_CATEGORY_ATTRIBUTES}
`;
