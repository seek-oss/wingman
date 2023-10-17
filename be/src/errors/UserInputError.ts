import { GraphQLError } from 'graphql';

export class UserInputError extends GraphQLError {
  constructor(message: string, extensions?: Record<string, unknown>) {
    super(message, {
      extensions: {
        ...extensions,
        code: 'BAD_USER_INPUT',
      },
    });
  }
}
