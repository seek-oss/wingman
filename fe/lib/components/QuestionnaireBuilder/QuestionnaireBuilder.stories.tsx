import 'braid-design-system/reset';

import { Box } from 'braid-design-system';
import React, { ComponentProps, ReactNode } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { QuestionnaireBuilder as Component } from './QuestionnaireBuilder';

interface CustomWrapperProps {
  children: ReactNode;
}

const CustomWrapper = ({ children }: CustomWrapperProps) => (
  <Box
    background="promoteLight"
    borderRadius="xlarge"
    boxShadow="small"
    padding="gutter"
  >
    {children}
  </Box>
);

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
      mapping: { undefined, card: 'card', custom: CustomWrapper },
      options: ['undefined', 'card', 'custom'],
    },
  },
  component: Component,
  title: 'Job Posting/Questionnaires/QuestionnaireBuilder',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const QuestionnaireBuilder = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args} />
  </BraidStorybookProvider>
);
QuestionnaireBuilder.storyName = 'QuestionnaireBuilder';
