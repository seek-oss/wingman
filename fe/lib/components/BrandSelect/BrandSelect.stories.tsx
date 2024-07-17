import type { Meta, StoryObj } from '@storybook/react';

import { defaultArgTypes } from '../../../.storybook/preview';

import { MockBrandSelect as Component } from './BrandSelect.mock';

export default {
  title: 'Job Posting/Branding/BrandSelect',
  component: Component,
  args: {
    hirerId: 'seekAnzPublicTest:organization:seek:93WyyF1h',
    initialBrandId:
      'global:advertisementBranding:hirerBranding:4pkLmqYhoSxSKmfcKMbDG6',
    pageSize: 4,
  },
  argTypes: {
    showStorybookAction: defaultArgTypes.showStorybookAction,
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const MultipleBrands: Story = {
  args: {
    variant: 'multiple-brands',
  },
  name: 'Multiple brands',
};

export const NoInitialBrandId: Story = {
  args: {
    variant: 'multiple-brands',
    initialBrandId: undefined,
  },
  name: 'No initial brand ID',
};

export const NoBrands: Story = {
  args: {
    variant: 'no-brands',
  },
  name: 'No brands',
};
