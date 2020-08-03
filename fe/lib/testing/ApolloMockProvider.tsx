import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import React, { ReactNode } from 'react';

import typeDefs from '../types/seekSchema.graphql';

interface Props {
  children: ReactNode;
  resolvers: Parameters<typeof makeExecutableSchema>[0]['resolvers'];
}

export const ApolloMockProvider = ({ children, resolvers }: Props) => {
  const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new SchemaLink({ schema }),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
