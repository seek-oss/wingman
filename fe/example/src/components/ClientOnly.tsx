import { ReactNode } from 'react';

import { ExtendedClientContext, augmentClient, useUser } from '../hooks/user';

interface Props {
  children: ReactNode | ((ctx: ExtendedClientContext) => ReactNode);
}

export const ClientOnly = ({ children }: Props) => {
  const client = useUser();

  const [ctx] = client;

  if (ctx.server) {
    return null;
  }

  const augmentedClient = augmentClient(client);

  return (
    (typeof children === 'function' ? children(augmentedClient) : children) ??
    null
  );
};
