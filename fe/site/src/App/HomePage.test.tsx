import { render } from '@testing-library/react';
import { BraidTestProvider } from 'braid-design-system';
import React from 'react';

import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('mentions a resume', () => {
    const { getByText } = render(
      <BraidTestProvider>
        <HomePage />
      </BraidTestProvider>,
    );

    expect(getByText(/resume/i)).toBeDefined();
  });
});
