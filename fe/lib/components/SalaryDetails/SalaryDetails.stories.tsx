import 'braid-design-system/reset';

import React from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { SalaryDetails as SalaryDetailsComponent } from './SalaryDetails';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    hirerId: 'seekAnzPublicTest:organization:seek:93WyyF1h',
    wrapper: 'undefined',
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    wrapper: {
      control: { type: 'radio' },
      mapping: { undefined, card: 'card' },
      options: ['undefined', 'card', 'custom'],
    },
  },
  component: SalaryDetailsComponent,
  title: 'Job Posting/SalaryDetails/SalaryDetails',
};

// export default {
//   args: {
//     braidThemeName: defaultArgs.braidThemeName,
//     message: 'undefined',
//     onSelect: () => {},
//     positionProfile: {
//       positionTitle: `Senior Developer`,
//       positionLocation: ['seekAnzPublicTest:location:seek:2FqwWaaMV'],
//     },
//     reserveMessageSpace: false,
//     schemeId: 'seekAnz',
//     tone: defaultArgs.tone,
//   },
//   argTypes: {
//     braidThemeName: defaultArgTypes.braidThemeName,
//     message: {
//       control: { type: 'radio' },
//       mapping: { undefined, requiredValidation: 'Please select a category.' },
//       options: ['undefined', 'requiredValidation'],
//     },
//     showStorybookAction: defaultArgTypes.showStorybookAction,
//     tone: defaultArgTypes.tone,
//   },
//   component: Component,
//   title: 'Job Posting/Job categories/JobCategorySuggest',
// };

type Args = BraidArgs;

export const SalaryDetails = ({ braidThemeName }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <SalaryDetailsComponent />
  </BraidStorybookProvider>
);
SalaryDetails.storyName = 'SalaryDetails';
