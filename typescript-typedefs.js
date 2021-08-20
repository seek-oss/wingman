/**
 * {@link https://github.com/dotansimha/graphql-code-generator/issues/3899}
 */

const { printSchemaWithDirectives } = require('@graphql-tools/utils');

const printTypeScriptTypeDefs = (schema) => `
import gql from 'graphql-tag';

export const typeDefs = gql\`
${schema.replace(/`/g, '\\`')}
\`;
`;

module.exports = {
  plugin: (schema) =>
    printTypeScriptTypeDefs(
      printSchemaWithDirectives(schema),
    ),
};
