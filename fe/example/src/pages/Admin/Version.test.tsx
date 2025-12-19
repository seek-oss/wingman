import { render, waitFor } from '@testing-library/react';
import { BraidTestProvider } from 'braid-design-system/test';

import * as seekGraph from '../../api/seekGraph';

import { Version } from './Version';

describe('Version', () => {
  it('loads in version information', () => {
    jest
      .spyOn(seekGraph, 'querySeekGraph')
      .mockResolvedValue({ version: 'SUPER_UNIQUE_VERSION' });

    const { queryByText } = render(
      <BraidTestProvider>
        <Version />
      </BraidTestProvider>,
    );

    expect(queryByText(/SUPER_UNIQUE_VERSION/)).toBeNull();

    return waitFor(() =>
      expect(queryByText(/SUPER_UNIQUE_VERSION/)).toBeDefined(),
    );
  });
});
