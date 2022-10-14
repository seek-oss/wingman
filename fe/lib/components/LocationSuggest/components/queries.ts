import { gql } from '@apollo/client';

export const NEAREST_LOCATIONS = gql`
  query ($geoLocation: GeoLocationInput!, $schemeId: String!) {
    nearestLocations(geoLocation: $geoLocation, schemeId: $schemeId, first: 3) {
      contextualName
      countryCode
      id {
        value
      }
      name
      parent
    }
  }
`;
