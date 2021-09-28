import React, { forwardRef } from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';

import {
  AdSelectionFallback,
  AdSelectionFallbackProps,
} from './AdSelectionFallback';

interface Props extends AdSelectionFallbackProps {
  showStorybookAction?: boolean;
}

export const MockAdSelectionFallback = forwardRef<HTMLSelectElement, Props>(
  ({ showStorybookAction, ...props }, ref) => (
    <MockComponentActions
      space="medium"
      storybookPath={
        showStorybookAction
          ? '/story/job-posting-ad-selection-adselectionfallback--ad-selection-fallback'
          : undefined
      }
      sourcePath="lib/components/AdSelectionFallback"
    >
      <AdSelectionFallback {...props} ref={ref} />
    </MockComponentActions>
  ),
);
