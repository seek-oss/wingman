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
  query JobCategories($schemeId: String!, $positionProfile: JobCategories_PositionProfileInput) {
    jobCategories(schemeId: $schemeId, positionProfile: $positionProfile) {
      ...jobCategoryAttributes
      children {
        ...jobCategoryAttributes
      }
    }
  }
  ${JOB_CATEGORY_ATTRIBUTES}
`;
