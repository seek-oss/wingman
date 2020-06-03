import { render, waitFor } from '@testing-library/react';
import { BraidTestProvider, ToastProvider } from 'braid-design-system';
import React from 'react';

import * as seekGraph from '../api/seekGraph';

import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('mentions a resume', () => {
    jest
      .spyOn(seekGraph, 'querySeekGraph')
      .mockResolvedValue({ version: 'SUPER_UNIQUE_VERSION' });

    const { queryByText } = render(
      <BraidTestProvider>
        <ToastProvider>
          <HomePage />
        </ToastProvider>
      </BraidTestProvider>,
    );

    return waitFor(() => expect(queryByText(/resume/i)).toBeDefined());
  });
});
