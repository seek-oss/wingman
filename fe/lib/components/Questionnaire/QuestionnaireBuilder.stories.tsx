import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import { DesignDecorator } from '../../storybook/decorators';

import { QuestionnaireBuilder as Component } from './QuestionnaireBuilder/QuestionnaireBuilder';

export default {
  args: {
    hirerId: 'seekAnzPublicTest:organization:seek:93WyyF1h',
    showGraphqlOutput: true,
  },
  component: Component,
  decorators: [DesignDecorator],
  title: 'Job Posting/Questionnaires/QuestionnaireBuilder',
};

type Args = ComponentProps<typeof Component>;

export const QuestionnaireBuilder = (args: Args) => <Component {...args} />;
QuestionnaireBuilder.storyName = 'QuestionnaireBuilder';
