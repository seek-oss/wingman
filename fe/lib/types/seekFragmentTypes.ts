export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}
const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'ApplicationQuestionnaireComponent',
        possibleTypes: [
          {
            name: 'ApplicationQuestion',
          },
          {
            name: 'ApplicationPrivacyConsent',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'ApplicationQuestionnaireComponentResponse',
        possibleTypes: [
          {
            name: 'ApplicationQuestionResponse',
          },
          {
            name: 'ApplicationPrivacyConsentResponse',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Event',
        possibleTypes: [
          {
            name: 'CandidateApplicationCreatedEvent',
          },
          {
            name: 'PositionProfilePostedEvent',
          },
          {
            name: 'CandidateProfilePurchasedEvent',
          },
        ],
      },
    ],
  },
};
export default result;
