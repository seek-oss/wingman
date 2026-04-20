import { gql } from '@apollo/client';

const ADVERTISEMENT_BRANDING_FIELDS = gql`
  fragment advertisementBrandingFields on AdvertisementBranding {
    id {
      value
    }
    name
    images {
      typeCode
      url
    }
  }
`;

const ADVERTISEMENT_BRANDING_EDGE_FIELDS = gql`
  fragment advertisementBrandingEdgeFields on AdvertisementBrandingEdge {
    node {
      ...advertisementBrandingFields
    }
  }
  ${ADVERTISEMENT_BRANDING_FIELDS}
`;

export const ADVERTISEMENT_BRANDINGS = gql`
  query AdvertisementBrandings(
    $after: String
    $before: String
    $first: Int
    $last: Int
    $hirerId: String!
  ) {
    advertisementBrandings(
      after: $after
      before: $before
      first: $first
      last: $last
      hirerId: $hirerId
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        ...advertisementBrandingEdgeFields
      }
    }
  }
  ${ADVERTISEMENT_BRANDING_EDGE_FIELDS}
`;
