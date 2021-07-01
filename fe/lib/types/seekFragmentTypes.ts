export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    ApplicationQuestionnaireComponent: [
      'ApplicationPrivacyConsent',
      'ApplicationQuestion',
    ],
    ApplicationQuestionnaireComponentResponse: [
      'ApplicationPrivacyConsentResponse',
      'ApplicationQuestionResponse',
    ],
    CreateCandidateProcessHistoryItemPayload: [
      'CreateCandidateProcessHistoryItemPayload_Conflict',
      'CreateCandidateProcessHistoryItemPayload_Success',
    ],
    CreateWebhookSubscriptionPayload: [
      'CreateWebhookSubscriptionPayload_Conflict',
      'CreateWebhookSubscriptionPayload_Success',
    ],
    Event: [
      'CandidateApplicationCreatedEvent',
      'CandidateProfilePurchasedEvent',
      'PositionProfileClosedEvent',
      'PositionProfilePostedEvent',
    ],
    PositionProfile: ['PostedPositionProfile', 'UnpostedPositionProfile'],
    PostPositionPayload: [
      'PostPositionPayload_Success',
      'PostPositionPayload_Conflict',
    ],
    PostPositionProfileForOpeningPayload: [
      'PostPositionProfileForOpeningPayload_Success',
      'PostPositionProfileForOpeningPayload_Conflict',
    ],
    UpdateUploadedCandidatePersonPayload: [
      'UpdateUploadedCandidatePersonPayload_Conflict',
      'UpdateUploadedCandidatePersonPayload_Success',
    ],
    UpdateWebhookSubscriptionDeliveryConfigurationPayload: [
      'UpdateWebhookSubscriptionDeliveryConfigurationPayload_Conflict',
      'UpdateWebhookSubscriptionDeliveryConfigurationPayload_Success',
    ],
    UploadCandidatePayload: [
      'UploadCandidatePayload_Conflict',
      'UploadCandidatePayload_Success',
    ],
  },
};
export default result;
