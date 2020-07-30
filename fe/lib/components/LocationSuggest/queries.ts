import { gql } from 'apollo-boost';

const LOCATION_ATTRIBUTES = gql`
  fragment locationAttributes on Location {
    id {
      value
    }
    name
    contextualName
    countryCode
  }
`;

const NESTED_LOCATION_ATTRIBUTES = gql`
  fragment nestedLocationAttributes on Location {
    ...locationAttributes
    parent {
      ...locationAttributes
      parent {
        ...locationAttributes
        parent {
          ...locationAttributes
          parent {
            ...locationAttributes
            parent {
              ...locationAttributes
            }
          }
        }
      }
    }
  }
  ${LOCATION_ATTRIBUTES}
`;

export const LOCATION = gql`
  query($id: String!) {
    location(id: $id) {
      ...nestedLocationAttributes
    }
  }
  ${NESTED_LOCATION_ATTRIBUTES}
`;

export const LOCATION_SUGGEST = gql`
  query suggestLocations(
    $usageTypeCode: String!
    $schemeId: String!
    $hirerId: String
    $text: String!
    $first: Int
  ) {
    locationSuggestions(
      usageTypeCode: $usageTypeCode
      schemeId: $schemeId
      hirerId: $hirerId
      text: $text
      first: $first
    ) {
      location {
        ...nestedLocationAttributes
      }
    }
  }
  ${NESTED_LOCATION_ATTRIBUTES}
`;

export const NEAREST_LOCATIONS = gql`
  query($schemeId: String!, $geoLocation: GeoLocationInput!, $first: Int) {
    nearestLocations(
      schemeId: $schemeId
      geoLocation: $geoLocation
      first: $first
    ) {
      ...nestedLocationAttributes
    }
  }
  ${NESTED_LOCATION_ATTRIBUTES}
`;
