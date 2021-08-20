import 'braid-design-system/reset';
import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../../../storybook/controls';
import { BraidStorybookProvider } from '../../../../storybook/decorators';
import type { FormComponent } from '../../types';

import { GraphqlQueryRenderer as Component } from './GraphqlQueryRenderer';

const sampleQuestions: FormComponent[] = [
  {
    componentTypeCode: 'Question',
    questionHtml: 'Tell us about yourself',
    responseTypeCode: 'FreeText',
    value: '04e671b1-166d-416d-a346-4b560ad13a51',
  },
  {
    componentTypeCode: 'Question',
    questionHtml: 'Can you drive?',
    responseChoice: [
      { preferredIndicator: true, text: 'Yes', value: 'yes' },
      { preferredIndicator: false, text: 'No', value: 'no' },
    ],
    responseTypeCode: 'SingleSelect',
    value: '76250b99-dfc7-47a3-8418-1fc6bee64589',
  },
  {
    componentTypeCode: 'PrivacyConsent',
    privacyPolicyUrl: {
      url: 'https://www.seek.com.au/my-privacy/',
    },
    value: 'cdb93e19-6caf-4852-854c-3088787f234c',
    descriptionHtml: 'Do you agree to the privacy policy?',
  },
];

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    components: sampleQuestions,
    hirerId: 'seekAnzPublicTest:organization:seek:93WyyF1h',
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
  },
  component: Component,
  title: 'Job Posting/Questionnaires/GraphqlQueryRenderer',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const GraphqlQueryRenderer = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args} />
  </BraidStorybookProvider>
);
GraphqlQueryRenderer.storyName = 'GraphqlQueryRenderer';
