import { useApolloClient } from '@apollo/client';
import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { SalaryDetails, type SalaryDetailsProps } from './SalaryDetails';
import {
  mockAllCurrencies,
  mockRecommendedCurrencies,
} from './fixtures/currencies';
import { mockPayTypes } from './fixtures/payTypes';

interface Props extends SalaryDetailsProps {
  showStorybookAction?: boolean;
}

const Component = ({ client: _client, ...props }: SalaryDetailsProps) => {
  const client = useApolloClient();

  return <SalaryDetails {...props} client={client} />;
};

export const MockSalaryDetails = ({
  showStorybookAction,
  currencyUsageTypeCode,
  ...props
}: Props) => (
  <ApolloMockProvider
    resolvers={{
      Query: {
        payTypes: () => mockPayTypes,
        currencies: () =>
          currencyUsageTypeCode === 'SEEKMarket'
            ? mockRecommendedCurrencies
            : mockAllCurrencies,
      },
    }}
  >
    <MockComponentActions
      space="large"
      showStorybookAction={showStorybookAction}
      storybookPath="/story/job-posting-salary-details--salary-details"
      sourcePath="lib/components/SalaryDetails"
    >
      <Component {...props} />
    </MockComponentActions>
  </ApolloMockProvider>
);
