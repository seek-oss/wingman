import { gql } from '@apollo/client';

export const PAY_TYPES = gql`
  query payTypes($schemeId: String!) {
    payTypes(schemeId: $schemeId) {
      basisCode
      intervalCode
      label
    }
  }
`;

export const CURRENCIES = gql`
  query currencies($usageTypeCode: String!) {
    currencies(usageTypeCode: $usageTypeCode) {
      code
    }
  }
`;
