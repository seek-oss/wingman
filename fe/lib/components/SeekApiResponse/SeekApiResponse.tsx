import { Disclosure } from 'braid-design-system';
import React from 'react';
import { CodeBlock } from 'scoobie';

interface Props {
  children: unknown;
  id: string;
}

export const SeekApiResponse = ({ children, id }: Props) => (
  <Disclosure
    collapseLabel="Hide SEEK API response"
    expandLabel="Show SEEK API response"
    id={id}
  >
    <CodeBlock language="json">{JSON.stringify(children, null, 2)}</CodeBlock>
  </Disclosure>
);
