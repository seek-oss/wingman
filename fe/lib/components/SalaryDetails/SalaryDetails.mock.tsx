import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';

import { SalaryDetails } from './SalaryDetails';

interface MockSalaryDetailsProps {
  showStorybookAction?: boolean;
}

export const MockSalaryDetails = ({
  showStorybookAction,
}: MockSalaryDetailsProps) => (
  <MockComponentActions
    space="medium"
    storybookPath={
      showStorybookAction
        ? '/story/job-posting-salary-details-salarydetails--salary-details'
        : undefined
    }
  >
    <SalaryDetails currency="AUD" onBlur={() => {}} />
  </MockComponentActions>
);
