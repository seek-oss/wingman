import { gql } from '@apollo/client';

const JOB_CATEGORY_ATTRIBUTES = gql`
  fragment jobCategoryAttributes on JobCategory {
    id {
      value
    }
    name
  }
`;

const JOB_CATEGORY_SUGGESTION_CHOICE_ATTRIBUTES = gql`
  fragment jobCategorySuggestionChoiceAttributes on JobCategorySuggestionChoice {
    jobCategory {
      ...jobCategoryAttributes
      parent {
        ...jobCategoryAttributes
      }
      children {
        ...jobCategoryAttributes
      }
    }
    confidence
  }

  ${JOB_CATEGORY_ATTRIBUTES}
`;

export const JOB_CATEGORY_SUGGEST = gql`
  query JobCategorySuggest(
    $positionProfile: JobCategorySuggestionPositionProfileInput!
    $schemeId: String!
    $first: Int
  ) {
    jobCategorySuggestions(
      positionProfile: $positionProfile
      schemeId: $schemeId
      first: $first
    ) {
      ...jobCategorySuggestionChoiceAttributes
    }
  }

  ${JOB_CATEGORY_SUGGESTION_CHOICE_ATTRIBUTES}
`;
