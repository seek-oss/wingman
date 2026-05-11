import { gql } from '@apollo/client';

const JOB_CATEGORY_FIELDS = gql`
  fragment jobCategoryFields on JobCategory {
    id {
      value
    }
    name
  }
`;

export const JOB_CATEGORY = gql`
  query JobCategory($id: String!) {
    jobCategory(id: $id) {
      ...jobCategoryFields
      parent {
        ...jobCategoryFields
      }
      children {
        ...jobCategoryFields
      }
    }
  }
  ${JOB_CATEGORY_FIELDS}
`;
