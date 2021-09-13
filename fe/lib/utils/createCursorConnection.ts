import { PageInfo } from '../types/seekApi.graphql';

interface Connection<T> {
  edges: T[];
  pageInfo: PageInfo;
}

interface PaginationArgs {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const createCursorConnection = <T extends { cursor: string }>(
  items: T[],
  args: PaginationArgs,
): Connection<T> => {
  if (args.first && args.last) {
    throw new Error('first and last cannot be specified in the same query');
  }

  const operationPageSize = clamp(
    Math.floor(args.first ?? args.last ?? 100),
    1,
    100,
  );

  let startIndex = items.findIndex((item) => item.cursor === args.after) + 1;

  let endIndex = items.findIndex(
    (item, index) => index >= startIndex && item.cursor === args.before,
  );
  endIndex = endIndex === -1 ? items.length : endIndex;

  if (args.last) {
    startIndex = Math.max(startIndex, endIndex - operationPageSize);
  } else {
    endIndex = Math.min(endIndex, startIndex + operationPageSize);
  }

  const edges = items.slice(startIndex, endIndex);

  return {
    edges,
    pageInfo: {
      hasNextPage: endIndex < items.length,
      hasPreviousPage: startIndex > 0,
      startCursor: edges[0]?.cursor ?? null,
      endCursor: edges[edges.length - 1]?.cursor ?? null,
    },
  };
};
