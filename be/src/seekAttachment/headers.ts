import { Headers } from 'node-fetch';

const HEADERS_TO_FORWARD = {
  'Content-Disposition': 'attachment',
  'Content-Length': undefined,
  'Content-Type': 'application/octet-stream',
  'Last-Modified': undefined,
} as const;

export const filterHeaders = (headers: Headers) =>
  Object.entries(HEADERS_TO_FORWARD).reduce<Record<string, string>>(
    (subset, [name, defaultValue]) => {
      const value = headers.get(name) ?? defaultValue;

      if (typeof value !== 'undefined') {
        subset[name] = value;
      }

      return subset;
    },
    {},
  );
