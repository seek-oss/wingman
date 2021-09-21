import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';

import { SalaryDetails } from './SalaryDetails';

export const MockSalaryDetails = ({
  showStorybookAction,
}: {
  showStorybookAction: boolean;
}) => (
  <MockComponentActions
    space="medium"
    storybookPath={
      showStorybookAction
        ? '/story/job-posting-salary-details-salarydetails--salary-details'
        : undefined
    }
  >
    <SalaryDetails />
  </MockComponentActions>
);
