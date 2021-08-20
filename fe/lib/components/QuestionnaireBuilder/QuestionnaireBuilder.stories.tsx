import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { QuestionnaireBuilder as Component } from './QuestionnaireBuilder';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    hirerId: 'seekAnzPublicTest:organization:seek:93WyyF1h',
    showGraphqlOutput: true,
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
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
