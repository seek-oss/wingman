import { GraphQLError } from 'graphql';

export class ForbiddenError extends GraphQLError {
  constructor(message: string, extensions?: Record<string, unknown>) {
    super(message, {
      extensions: {
        ...extensions,
        code: 'FORBIDDEN',
      },
    });
  }
}
