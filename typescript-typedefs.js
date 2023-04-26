/**
 * {@link https://github.com/dotansimha/graphql-code-generator/issues/3899}
 */

const { printSchemaWithDirectives } = require('@graphql-tools/utils');
const { Kind } = require('graphql');

/**
 * @param {import('graphql').GraphQLSchema} schema
 */
const forceBlockDescriptionsOnDirectives = (schema) => {
  const directives = schema.getDirectives();

  for (const directive of directives) {
    if (directive.astNode || !directive.description) {
      return;
    }

    directive.astNode = {
      kind: Kind.DIRECTIVE_DEFINITION,
      // Use block styling to ensure that our hack in `printTypeScriptTypeDefs`
      // to escape backticks outputs valid JavaScript.
      description: {
        kind: Kind.STRING,
        value: directive.description,
        block: true,
      },
    };
  }
};

/**
 * @param {string} source
 */
const printTypeScriptTypeDefs = (source) => `
import gql from 'graphql-tag';

export const typeDefs = gql\`
${source.replace(/`/g, '\\`')}
\`;
`;

module.exports = {
  plugin: (schema) => {
    forceBlockDescriptionsOnDirectives(schema);

    const source = printSchemaWithDirectives(schema);

    return printTypeScriptTypeDefs(source);
  },
};
