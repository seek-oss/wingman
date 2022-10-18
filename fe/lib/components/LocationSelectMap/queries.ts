import { gql } from '@apollo/client';

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

export const NEAREST_LOCATIONS = gql`
  query NearbyLocations($geoLocation: GeoLocationInput!, $schemeId: String!) {
    nearestLocations(geoLocation: $geoLocation, schemeId: $schemeId, first: 3) {
      ...nestedLocationAttributes
    }
  }
  ${NESTED_LOCATION_ATTRIBUTES}
`;
