import { Disclosure } from 'braid-design-system';
import React from 'react';
import { CodeBlock } from 'scoobie';

import { prettyPrintWithoutTypename } from './prettyPrintWithoutTypename';

interface Props {
  /**
   * The label of the underlying disclosure component when it can be collapsed.
   */
  collapseLabel?: string;

  /**
   * The JSON response data from the SEEK API.
   */
  data: unknown;

  /**
   * The label of the underlying disclosure component when it can be expanded.
   */
  expandLabel?: string;

  /**
   * The DOM identifier of the underlying disclosure component.
   */
  id: string;
}

export const SeekApiResponse = ({
  collapseLabel,
  data,
  expandLabel,
  id,
}: Props) => (
  <Disclosure
    collapseLabel={collapseLabel ?? 'Hide SEEK API response'}
    expandLabel={expandLabel ?? 'Show SEEK API response'}
    id={id}
  >
    <CodeBlock language="json">{prettyPrintWithoutTypename(data)}</CodeBlock>
  </Disclosure>
);
