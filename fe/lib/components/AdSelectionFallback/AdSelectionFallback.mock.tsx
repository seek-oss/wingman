import React, { forwardRef } from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';

import {
  AdSelectionFallback,
  type AdSelectionFallbackProps,
} from './AdSelectionFallback';

interface Props extends AdSelectionFallbackProps {
  showStorybookAction?: boolean;
}

export const MockAdSelectionFallback = forwardRef<HTMLSelectElement, Props>(
  ({ showStorybookAction, ...props }, ref) => (
    <MockComponentActions
      space="medium"
      showStorybookAction={showStorybookAction}
      storybookPath="/story/job-posting-ad-selection-adselectionfallback--ad-selection-fallback"
      sourcePath="lib/components/AdSelectionFallback"
    >
      <AdSelectionFallback {...props} ref={ref} />
    </MockComponentActions>
  ),
);
