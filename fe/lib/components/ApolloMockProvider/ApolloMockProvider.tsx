import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import React, { type ReactNode } from 'react';

import { apolloTypePolicies } from '../../types/apolloTypePolicies';
import { typeDefs } from '../../types/seekApi.typeDefs';

type Resolvers = Parameters<typeof makeExecutableSchema>[0]['resolvers'];

const createApolloMockClient = (resolvers: Resolvers) => {
  const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
  });

  const client = new ApolloClient({
    cache: new InMemoryCache({ typePolicies: apolloTypePolicies() }),
    link: new SchemaLink({ schema }),
  });

  return client;
};

interface Props {
  children: ReactNode;
  resolvers: Resolvers;
}

export const ApolloMockProvider = ({ children, resolvers }: Props) => {
  const client = createApolloMockClient(resolvers);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
