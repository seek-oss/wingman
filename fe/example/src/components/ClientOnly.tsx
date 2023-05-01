import { useEffect, useState } from 'react';

import {
  type ExtendedClientContext,
  augmentClient,
  useUser,
} from '../hooks/user';

interface Props {
  children: JSX.Element | ((ctx: ExtendedClientContext) => JSX.Element);
}

export const ClientOnly = ({ children }: Props) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const client = useUser();

  const [ctx] = client;

  if (ctx.server || !hasMounted) {
    return null;
  }

  const augmentedClient = augmentClient(client);

  return (
    (typeof children === 'function' ? children(augmentedClient) : children) ??
    null
  );
};
