import type { Meta, StoryObj } from '@storybook/react';
import { Box } from 'braid-design-system';
import type { ReactNode } from 'react';

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
    hirerId: 'seekAnzPublicTest:organization:seek:93WyyF1h',
    wrapper: undefined,
  },
  argTypes: {
    wrapper: {
      control: { type: 'radio' },
      mapping: { undefined, card: 'card', custom: CustomWrapper },
      options: ['undefined', 'card', 'custom'],
    },
  },
  component: Component,
  title: 'Job Posting/Questionnaires/QuestionnaireBuilder',
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const QuestionnaireBuilder: Story = {};
