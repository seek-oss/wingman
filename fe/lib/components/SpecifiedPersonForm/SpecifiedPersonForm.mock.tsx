import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';

import {
  SpecifiedPersonForm,
  type SpecifiedPersonFormProps,
} from './SpecifiedPersonForm';

interface Props extends SpecifiedPersonFormProps {
  showStorybookAction?: boolean;
}

export const MockSpecifiedPersonForm = ({
  showStorybookAction,
  ...props
}: Props) => (
  <MockComponentActions
    space="large"
    showStorybookAction={showStorybookAction}
    storybookPath="/story/job-posting-position-openings-specifiedpersonform--specified-person-form"
    sourcePath="lib/components/SpecifiedPersonForm"
  >
    <SpecifiedPersonForm {...props} />
  </MockComponentActions>
);
