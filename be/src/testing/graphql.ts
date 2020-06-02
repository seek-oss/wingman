export const INTROSPECTION_RESPONSE = {
  data: {
    __schema: {
      queryType: {
        name: 'Query',
      },
      mutationType: {
        name: 'Mutation',
      },
      subscriptionType: null,
      types: [
        {
          kind: 'OBJECT',
          name: 'Mutation',
          description:
            "The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start.",
          fields: [
            {
              name: '_mutation',
              description: '',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'Query',
          description:
            "The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.",
          fields: [
            {
              name: '_query',
              description: '',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'SCALAR',
          name: 'String',
          description:
            'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
      ],
      directives: [],
    },
  },
};
