import 'braid-design-system/reset';

import React from 'react';
import docs from 'braid-design-system/themes/docs';
import seekJobs from 'braid-design-system/themes/seekJobs';
import wireframe from 'braid-design-system/themes/wireframe';
import { Box, BraidProvider, ContentBlock } from 'braid-design-system';

import type { Preview } from '@storybook/react';

const THEMES = { seekJobs, docs, wireframe };

type BraidThemeName = 'seekJobs' | 'docs' | 'wireframe';

export const defaultArgs = {
  tone: undefined,
};

export const defaultArgTypes = {
  showStorybookAction: {
    control: { type: 'boolean' },
    name: 'Mock showStorybookAction',
  },
  tone: {
    control: { type: 'radio' },
    mapping: {
      undefined,
      critical: 'critical',
      neutral: 'neutral',
      positive: 'positive',
    },
    options: ['undefined', 'critical', 'neutral', 'positive'],
  },
} as const;

export default {
  globalTypes: {
    theme: {
      description: 'Braid theme to use',
      defaultValue: 'seekJobs',
      toolbar: {
        title: 'Theme',
        icon: 'contrast',
        items: ['seekJobs', 'docs', 'wireframe'],
      },
    },
  },
  decorators: [
    (Story, { globals }) => (
      <BraidProvider theme={THEMES[globals.theme as BraidThemeName]}>
        <ContentBlock>
          <Box paddingX="gutter" paddingY="large">
            <Story />
          </Box>
        </ContentBlock>
      </BraidProvider>
    ),
  ],
} satisfies Preview;
