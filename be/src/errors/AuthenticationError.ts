import { GraphQLError } from 'graphql';

export class AuthenticationError extends GraphQLError {
  constructor(message: string, extensions?: Record<string, unknown>) {
    super(message, {
      extensions: {
        ...extensions,
        code: 'UNAUTHENTICATED',
      },
    });
  }
}
