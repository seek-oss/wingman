import { gql } from 'apollo-boost';

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

export const JOB_CATEGORY = gql`
  query($id: String!) {
    jobCategory(id: $id) {
      ...nestedJobCategoryAttributes
    }
  }
  ${NESTED_JOB_CATEGORY_ATTRIBUTES}
`;

export const JOB_CATEGORIES = gql`
  query($schemeId: String!) {
    jobCategories(schemeId: $schemeId) {
      ...nestedJobCategoryAttributes
    }
  }
  ${NESTED_JOB_CATEGORY_ATTRIBUTES}
`;

export const JOB_CATEGORY_SUGGESTION = gql`
  query(
    $positionProfile: JobCategorySuggestionPositionProfileInput!
    $schemeId: String!
    $hirerId: String
    $first: Int
  ) {
    jobCategorySuggestions(
      positionProfile: $positionProfile
      schemeId: $schemeId
      hirerId: $hirerId
      first: $first
    ) {
      jobCategory {
        ...nestedJobCategoryAttributes
      }
      confidence
    }
  }
  ${NESTED_JOB_CATEGORY_ATTRIBUTES}
`;
