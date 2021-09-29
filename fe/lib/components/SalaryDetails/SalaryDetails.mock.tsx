import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';

import { SalaryDetails, SalaryDetailsProps } from './SalaryDetails';

interface Props extends SalaryDetailsProps {
  showStorybookAction?: boolean;
}

export const MockSalaryDetails = ({ showStorybookAction, ...props }: Props) => (
  <MockComponentActions
    space="medium"
    storybookPath={
      showStorybookAction
        ? '/story/job-posting-salary-details-salarydetails--salary-details'
        : undefined
    }
    sourcePath="lib/components/SalaryDetails"
  >
    <SalaryDetails {...props} />
  </MockComponentActions>
);
