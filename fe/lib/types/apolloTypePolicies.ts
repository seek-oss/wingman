import { FieldFunctionOptions, Reference, StoreObject } from '@apollo/client';

import { TypedTypePolicies } from './apolloHelpers';

export const readNestedStringField = (
  readField: FieldFunctionOptions['readField'],
  fieldPath: string[],
  from: unknown,
): string | undefined => {
  let field = from as Reference | StoreObject | undefined;

  for (const fieldName of fieldPath) {
    field = readField<Reference | StoreObject>(fieldName, field);
  }

  return typeof field === 'string' ? field : undefined;
};

/**
 * Creates a type policy for a SEEK API connection.
 *
 * The SEEK API follows the Relay Cursor Connections Specification, which has a
 * standard `node` field on each edge. We identify each edge by its underlying
 * node to support creates, edits and deletes against the list of edges.
 *
 * We also use the existence of the backwards pagination argument `last` to
 * determine the desired pagination direction. This assumes that the SEEK API
 * returns results from oldest to newest. When we are performing backwards
 * pagination, we need to reverse each retrieved page to render the results from
 * newest to oldest.
 *
 * This may be used as the policy for an `EventsConnection` type, as an example.
 *
 * - {@link https://developer.seek.com/schema/#/named-type/EventsConnection}
 * - {@link https://relay.dev/graphql/connections.htm}
 * - {@link https://www.apollographql.com/docs/react/caching/cache-field-behavior/#merging-arrays-of-non-normalized-objects}
 *
 * @param keyFields - Field path that uniquely identifies a node in the
 *                    connection.
 */
const seekApiConnection = (
  keyFields: 'documentId' | 'id' | 'profileId' | string[],
) => ({
  fields: {
    edges: {
      merge: (
        existing: Array<Reference | StoreObject> | undefined,
        rawIncoming: Array<Reference | StoreObject>,
        { mergeObjects, readField, variables }: FieldFunctionOptions,
      ) => {
        // The `last` argument controls backwards pagination.
        // This requires operations to use the `$last` variable name.
        const reversed = Boolean(variables?.last);

        const merged = existing?.slice(0) ?? [];

        // Give Apollo the null prototypes that they love!
        const keyToIndex: Record<string, number> = Object.create(null);

        const fieldPath = [
          'node',
          ...(Array.isArray(keyFields) ? keyFields : [keyFields, 'value']),
        ];

        existing?.forEach((edge, index) => {
          const key = readNestedStringField(readField, fieldPath, edge);
          if (!key) {
            return;
          }

          keyToIndex[key] = index;
        });

        // Reverse each incoming page when paginating backwards (new-to-old).
        const incoming = reversed
          ? rawIncoming.slice(0).reverse()
          : rawIncoming;

        incoming.forEach((edge) => {
          const key = readNestedStringField(readField, fieldPath, edge);
          if (!key) {
            return;
          }

          const index = keyToIndex[key];

          if (typeof index === 'number') {
            // Merge the new edge into the existing edge.
            merged[index] = mergeObjects(merged[index], edge);
          } else {
            // First time we've seen this edge in the connection.
            keyToIndex[key] = merged.length;

            merged.push(edge);
          }
        });

        return merged;
      },
    },
  },
});

/**
 * Creates a type policy for a SEEK API edge.
 *
 * The SEEK API follows the Relay Cursor Connections Specification, which has a
 * standard `node` field on each edge. We identify each edge by its underlying
 * node to support creates, edits and deletes against the list of edges.
 *
 * This may be used as the policy for an `EventEdge` type, as an example.
 *
 * - {@link https://developer.seek.com/schema/#/named-type/EventEdge}
 * - {@link https://relay.dev/graphql/connections.htm}
 *
 * @param keyFields - Field path that uniquely identifies the edge's node.
 */
const seekApiEdge = (
  keyFields: 'documentId' | 'id' | 'profileId' | unknown[],
) => ({
  /**
   * This is `any`ed because `graphql-code-generator` doesn't support nested
   * Apollo `keyFields`.
   *
   * {@link https://github.com/dotansimha/graphql-code-generator/issues/5025}
   */
  keyFields: [
    'node',
    Array.isArray(keyFields) ? keyFields : ([keyFields, ['value']] as any),
  ],
});

/**
 * Creates a type policy for a SEEK API object.
 *
 * This may be used as the policy for an `Event` type, as an example.
 *
 * - {@link https://developer.seek.com/schema/#/named-type/Event}
 *
 * @param keyFields - Field path that uniquely identifies the object.
 */
const seekApiObject = (
  keyFields: 'documentId' | 'id' | 'profileId' | unknown[],
) => ({
  /**
   * This is `any`ed because `graphql-code-generator` doesn't support nested
   * Apollo `keyFields`.
   *
   * {@link https://github.com/dotansimha/graphql-code-generator/issues/5025}
   */
  keyFields: Array.isArray(keyFields)
    ? keyFields
    : ([keyFields, ['value']] as any),
});

/**
 * Custom Apollo cache type policies to support paginated lists of objects.
 *
 * These lists support bidirectional pagination, creates, edits and deletes.
 * Some implementation specifics are detailed below.
 *
 * ---
 *
 * `keyArgs`
 *
 * The arguments specified in `keyArgs` will be serialised and appended to
 * create a distinct storage key for the cached results of a given query.
 * Changing the value of an argument will cause the results to be stored
 * separately from the previous query.
 *
 * To implement an infinite scrolling list, `after` and `before` are omitted to
 * make Apollo reuse its cache of previously-requested pages.
 *
 * {@link https://www.apollographql.com/docs/react/pagination/key-args}
 *
 * ---
 *
 * `keyFields`
 *
 * The field path specified in `keyFields` determines the cache key of a given
 * type. The SEEK API uses HR-JSON object identifiers which are not understood
 * by Apollo out of the box; we encapsulate our required `keyFields` logic within
 * the `seekApiEdge` and `seekApiObject` helper functions.
 *
 * ---
 *
 * `merge`
 *
 * The `merge` function specifies custom logic for combining two instances of a
 * type. The `seekApiConnection` helper function uses this to implement
 * paginated lists.
 */
export const apolloTypePolicies: TypedTypePolicies = {
  AdvertisementBranding: seekApiObject('id'),
  AdvertisementBrandingEdge: seekApiEdge('id'),
  AdvertisementBrandingsConnection: seekApiConnection('id'),

  CandidateProcessHistoryItem: seekApiObject('id'),
  CandidateProcessHistoryItemEdge: seekApiEdge('id'),
  CandidateProcessHistoryItemConnection: seekApiConnection('id'),

  CandidateProfile: {
    ...seekApiObject('profileId'),
    fields: {
      seekProcessHistory: {
        keyArgs: ['first'],
      },
    },
  },

  Event: seekApiObject('id'),
  EventEdge: seekApiEdge('id'),
  EventsConnection: seekApiConnection('id'),

  HiringOrganization: seekApiObject('id'),
  HiringOrganizationEdge: seekApiEdge('id'),
  HiringOrganizationsConnection: seekApiConnection('id'),

  PositionOpening: seekApiObject('documentId'),
  PositionOpeningEdge: seekApiEdge('documentId'),
  PositionOpeningsConnection: seekApiConnection('documentId'),

  Query: {
    fields: {
      advertisementBrandings: {
        keyArgs: ['filter', 'first', 'hirerId', 'last'],
      },
      events: {
        keyArgs: ['filter', 'first', 'last', 'schemeId'],
      },
      hiringOrganizations: {
        keyArgs: ['filter', 'first', 'last', 'schemeId'],
      },
      positionOpenings: {
        keyArgs: ['filter', 'first', 'hirerId', 'last'],
      },
      webhookAttemptsForEvent: {
        keyArgs: ['eventId', 'filter', 'first', 'last'],
      },
      webhookRequestsForSubscription: {
        keyArgs: ['filter', 'first', 'last'],
      },
      webhookSubscriptions: {
        keyArgs: ['filter', 'first', 'last', 'schemeId'],
      },
    },
  },

  WebhookRequest: seekApiObject(['requestId']),
  WebhookRequestEdge: seekApiEdge(['requestId']),
  WebhookRequestsConnection: seekApiConnection(['requestId']),

  WebhookSubscription: {
    ...seekApiObject('id'),
    fields: {
      webhookRequests: {
        keyArgs: ['filter', 'first', 'last'],
      },
      webhookSubscriptionReplays: {
        keyArgs: ['filter', 'first', 'last'],
      },
    },
  },
  WebhookSubscriptionEdge: seekApiEdge('id'),
  WebhookSubscriptionsConnection: seekApiConnection('id'),

  WebhookSubscriptionReplay: seekApiObject('id'),
  WebhookSubscriptionReplayEdge: seekApiEdge('id'),
  WebhookSubscriptionReplaysConnection: seekApiConnection('id'),
};
