import {
  Column,
  Columns,
  IconChevron,
  Stack,
  Text,
  TextLinkButton,
} from 'braid-design-system';
import type { JSX } from 'react';

import type { PageInfo } from '../types/seekApi.graphql';

interface Connection<T> {
  edges: T[];
  pageInfo: PageInfo;
}

export type OnClickHandler = (event: {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}) => void;

interface Props<T> {
  children: (edges: T[]) => JSX.Element;
  connection: Connection<T>;
  dividers?: true;
  onPagination: OnClickHandler;
  pageSize: number;
}

export const ConnectionPagination = <T,>({
  children: render,
  connection: {
    edges,
    pageInfo: { endCursor, hasNextPage, hasPreviousPage, startCursor },
  },
  dividers,
  onPagination,
  pageSize,
}: Props<T>) => (
  <Stack dividers={dividers} space="large">
    {render(edges)}

    {hasPreviousPage || hasNextPage ? (
      <Columns space="large">
        {hasPreviousPage && startCursor ? (
          <Column>
            <Text align="left">
              <TextLinkButton
                onClick={() =>
                  onPagination({
                    after: null,
                    before: startCursor,
                    first: null,
                    last: pageSize,
                  })
                }
              >
                <IconChevron direction="left" /> Previous
              </TextLinkButton>
            </Text>
          </Column>
        ) : null}

        {hasNextPage && endCursor ? (
          <Column>
            <Text align="right">
              <TextLinkButton
                onClick={() =>
                  onPagination({
                    after: endCursor,
                    before: null,
                    first: pageSize,
                    last: null,
                  })
                }
              >
                Next <IconChevron direction="right" />
              </TextLinkButton>
            </Text>
          </Column>
        ) : null}
      </Columns>
    ) : null}
  </Stack>
);
