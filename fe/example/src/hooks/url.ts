import { useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';

export const useQueryParamState = (
  name: string,
): [string | undefined, (value: string | undefined) => void] => {
  const [param, setParam] = useQueryParam(name, StringParam);

  const [state, setState] = useState<string | undefined>(param ?? undefined);

  const set = (value: string | undefined) => {
    // setParam does not trigger a re-render
    setParam(value);

    setState(value);
  };

  return [state, set];
};
