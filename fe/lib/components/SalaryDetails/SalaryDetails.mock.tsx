import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';

import { SalaryDetails, type SalaryDetailsProps } from './SalaryDetails';

interface Props extends SalaryDetailsProps {
  showStorybookAction?: boolean;
}

export const MockSalaryDetails = ({ showStorybookAction, ...props }: Props) => (
  <MockComponentActions
    space="large"
    showStorybookAction={showStorybookAction}
    storybookPath="/story/job-posting-salary-details-salarydetails--salary-details"
    sourcePath="lib/components/SalaryDetails"
  >
    <SalaryDetails {...props} />
  </MockComponentActions>
);
