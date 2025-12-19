import { render, waitFor } from '@testing-library/react';
import { ToastProvider } from 'braid-design-system';
import { BraidTestProvider } from 'braid-design-system/test';

import { BrowserTokenProvider } from '../../../../lib/hooks';
import * as seekGraph from '../../api/seekGraph';
import { UserProvider } from '../../hooks/user';

import { AdminPage } from './Admin';

describe('AdminPage', () => {
  it('mentions a resume', () => {
    jest
      .spyOn(seekGraph, 'querySeekGraph')
      .mockResolvedValue({ version: 'SUPER_UNIQUE_VERSION' });

    const { queryByText } = render(
      <UserProvider server={false}>
        <BraidTestProvider>
          <ToastProvider>
            <BrowserTokenProvider baseUrl="https://example.com">
              <AdminPage />
            </BrowserTokenProvider>
          </ToastProvider>
        </BraidTestProvider>
      </UserProvider>,
    );

    return waitFor(() => expect(queryByText(/resume/i)).toBeDefined());
  });
});
