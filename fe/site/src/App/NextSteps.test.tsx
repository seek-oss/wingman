import { render } from '@testing-library/react';
import { BraidTestProvider } from 'braid-design-system';
import React from 'react';

import { NextSteps } from './NextSteps';

describe('NextSteps', () => {
  it('should praise me 😌', () => {
    const { getByText } = render(
      <BraidTestProvider>
        <NextSteps />
      </BraidTestProvider>,
    );

    expect(getByText(/congratulations/i)).toBeDefined();
  });
});
