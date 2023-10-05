import type {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';
export type AddressKeySpecifier = Array<
  | 'city'
  | 'countryCode'
  | 'countrySubDivisions'
  | 'extendedLines'
  | 'formattedAddress'
  | 'geoLocation'
  | 'line'
  | 'postalCode'
  | AddressKeySpecifier
>;
export interface AddressFieldPolicy {
  city?: FieldPolicy<any> | FieldReadFunction<any>;
  countryCode?: FieldPolicy<any> | FieldReadFunction<any>;
  countrySubDivisions?: FieldPolicy<any> | FieldReadFunction<any>;
  extendedLines?: FieldPolicy<any> | FieldReadFunction<any>;
  formattedAddress?: FieldPolicy<any> | FieldReadFunction<any>;
  geoLocation?: FieldPolicy<any> | FieldReadFunction<any>;
  line?: FieldPolicy<any> | FieldReadFunction<any>;
  postalCode?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AddressComponentKeySpecifier = Array<
  'type' | 'value' | AddressComponentKeySpecifier
>;
export interface AddressComponentFieldPolicy {
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AdvertisementBrandingKeySpecifier = Array<
  'hirer' | 'id' | 'images' | 'name' | AdvertisementBrandingKeySpecifier
>;
export interface AdvertisementBrandingFieldPolicy {
  hirer?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  images?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AdvertisementBrandingEdgeKeySpecifier = Array<
  'cursor' | 'node' | AdvertisementBrandingEdgeKeySpecifier
>;
export interface AdvertisementBrandingEdgeFieldPolicy {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AdvertisementBrandingImageKeySpecifier = Array<
  'typeCode' | 'url' | AdvertisementBrandingImageKeySpecifier
>;
export interface AdvertisementBrandingImageFieldPolicy {
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AdvertisementBrandingsConnectionKeySpecifier = Array<
  | 'brandManagementUrl'
  | 'edges'
  | 'pageInfo'
  | AdvertisementBrandingsConnectionKeySpecifier
>;
export interface AdvertisementBrandingsConnectionFieldPolicy {
  brandManagementUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AdvertisementProductKeySpecifier = Array<
  | 'description'
  | 'features'
  | 'id'
  | 'label'
  | 'payment'
  | 'price'
  | 'selected'
  | 'sellingPoints'
  | AdvertisementProductKeySpecifier
>;
export interface AdvertisementProductFieldPolicy {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  features?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  payment?: FieldPolicy<any> | FieldReadFunction<any>;
  price?: FieldPolicy<any> | FieldReadFunction<any>;
  selected?: FieldPolicy<any> | FieldReadFunction<any>;
  sellingPoints?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AdvertisementProductFeaturesKeySpecifier = Array<
  'branding' | 'searchBulletPoints' | AdvertisementProductFeaturesKeySpecifier
>;
export interface AdvertisementProductFeaturesFieldPolicy {
  branding?: FieldPolicy<any> | FieldReadFunction<any>;
  searchBulletPoints?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AdvertisementProductFeatures_BrandingKeySpecifier = Array<
  | 'coverImageIndicator'
  | 'logoIndicator'
  | AdvertisementProductFeatures_BrandingKeySpecifier
>;
export interface AdvertisementProductFeatures_BrandingFieldPolicy {
  coverImageIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  logoIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AdvertisementProductFeatures_SearchBulletPointsKeySpecifier = Array<
  'limit' | AdvertisementProductFeatures_SearchBulletPointsKeySpecifier
>;
export interface AdvertisementProductFeatures_SearchBulletPointsFieldPolicy {
  limit?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AdvertisementProductPaymentDetailsKeySpecifier = Array<
  'summary' | 'summaryHtml' | AdvertisementProductPaymentDetailsKeySpecifier
>;
export interface AdvertisementProductPaymentDetailsFieldPolicy {
  summary?: FieldPolicy<any> | FieldReadFunction<any>;
  summaryHtml?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AdvertisementProductPriceDetailsKeySpecifier = Array<
  'summary' | AdvertisementProductPriceDetailsKeySpecifier
>;
export interface AdvertisementProductPriceDetailsFieldPolicy {
  summary?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AdvertisementProductSellingPointKeySpecifier = Array<
  'text' | AdvertisementProductSellingPointKeySpecifier
>;
export interface AdvertisementProductSellingPointFieldPolicy {
  text?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AdvertisementProductsKeySpecifier = Array<
  'information' | 'products' | AdvertisementProductsKeySpecifier
>;
export interface AdvertisementProductsFieldPolicy {
  information?: FieldPolicy<any> | FieldReadFunction<any>;
  products?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationLibraryQuestionKeySpecifier = Array<
  | 'id'
  | 'preferenceSelection'
  | 'responseChoice'
  | 'responseTypeCode'
  | 'text'
  | ApplicationLibraryQuestionKeySpecifier
>;
export interface ApplicationLibraryQuestionFieldPolicy {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  preferenceSelection?: FieldPolicy<any> | FieldReadFunction<any>;
  responseChoice?: FieldPolicy<any> | FieldReadFunction<any>;
  responseTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationLibraryQuestionChoiceKeySpecifier = Array<
  'id' | 'text' | ApplicationLibraryQuestionChoiceKeySpecifier
>;
export interface ApplicationLibraryQuestionChoiceFieldPolicy {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationLibraryQuestionPreferenceSelectionKeySpecifier = Array<
  | 'message'
  | 'typeCode'
  | ApplicationLibraryQuestionPreferenceSelectionKeySpecifier
>;
export interface ApplicationLibraryQuestionPreferenceSelectionFieldPolicy {
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationLibraryQuestionSuggestionKeySpecifier = Array<
  | 'applicationLibraryQuestion'
  | 'id'
  | ApplicationLibraryQuestionSuggestionKeySpecifier
>;
export interface ApplicationLibraryQuestionSuggestionFieldPolicy {
  applicationLibraryQuestion?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationMethodKeySpecifier = Array<
  'applicationEmail' | 'applicationUri' | ApplicationMethodKeySpecifier
>;
export interface ApplicationMethodFieldPolicy {
  applicationEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  applicationUri?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationPrivacyConsentKeySpecifier = Array<
  | 'componentTypeCode'
  | 'descriptionHtml'
  | 'id'
  | 'privacyPolicyUrl'
  | 'value'
  | ApplicationPrivacyConsentKeySpecifier
>;
export interface ApplicationPrivacyConsentFieldPolicy {
  componentTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionHtml?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  privacyPolicyUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationPrivacyConsentResponseKeySpecifier = Array<
  | 'component'
  | 'componentTypeCode'
  | 'consentGivenIndicator'
  | ApplicationPrivacyConsentResponseKeySpecifier
>;
export interface ApplicationPrivacyConsentResponseFieldPolicy {
  component?: FieldPolicy<any> | FieldReadFunction<any>;
  componentTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  consentGivenIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationQuestionKeySpecifier = Array<
  | 'applicationLibraryQuestion'
  | 'componentTypeCode'
  | 'id'
  | 'questionHtml'
  | 'responseChoice'
  | 'responseTypeCode'
  | 'sourceCode'
  | 'value'
  | ApplicationQuestionKeySpecifier
>;
export interface ApplicationQuestionFieldPolicy {
  applicationLibraryQuestion?: FieldPolicy<any> | FieldReadFunction<any>;
  componentTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  questionHtml?: FieldPolicy<any> | FieldReadFunction<any>;
  responseChoice?: FieldPolicy<any> | FieldReadFunction<any>;
  responseTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  sourceCode?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationQuestionAnswerKeySpecifier = Array<
  'answer' | 'choice' | ApplicationQuestionAnswerKeySpecifier
>;
export interface ApplicationQuestionAnswerFieldPolicy {
  answer?: FieldPolicy<any> | FieldReadFunction<any>;
  choice?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationQuestionChoiceKeySpecifier = Array<
  | 'applicationLibraryQuestionChoice'
  | 'id'
  | 'preferredIndicator'
  | 'selectedIndicator'
  | 'text'
  | 'value'
  | ApplicationQuestionChoiceKeySpecifier
>;
export interface ApplicationQuestionChoiceFieldPolicy {
  applicationLibraryQuestionChoice?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  preferredIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  selectedIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationQuestionResponseKeySpecifier = Array<
  | 'answers'
  | 'component'
  | 'componentTypeCode'
  | 'score'
  | ApplicationQuestionResponseKeySpecifier
>;
export interface ApplicationQuestionResponseFieldPolicy {
  answers?: FieldPolicy<any> | FieldReadFunction<any>;
  component?: FieldPolicy<any> | FieldReadFunction<any>;
  componentTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  score?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationQuestionnaireKeySpecifier = Array<
  'components' | 'hirer' | 'id' | ApplicationQuestionnaireKeySpecifier
>;
export interface ApplicationQuestionnaireFieldPolicy {
  components?: FieldPolicy<any> | FieldReadFunction<any>;
  hirer?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationQuestionnaireComponentKeySpecifier = Array<
  | 'componentTypeCode'
  | 'id'
  | 'value'
  | ApplicationQuestionnaireComponentKeySpecifier
>;
export interface ApplicationQuestionnaireComponentFieldPolicy {
  componentTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationQuestionnaireComponentResponseKeySpecifier = Array<
  | 'component'
  | 'componentTypeCode'
  | ApplicationQuestionnaireComponentResponseKeySpecifier
>;
export interface ApplicationQuestionnaireComponentResponseFieldPolicy {
  component?: FieldPolicy<any> | FieldReadFunction<any>;
  componentTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ApplicationQuestionnaireSubmissionKeySpecifier = Array<
  | 'questionnaire'
  | 'responses'
  | 'score'
  | ApplicationQuestionnaireSubmissionKeySpecifier
>;
export interface ApplicationQuestionnaireSubmissionFieldPolicy {
  questionnaire?: FieldPolicy<any> | FieldReadFunction<any>;
  responses?: FieldPolicy<any> | FieldReadFunction<any>;
  score?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AssociatedPositionOpeningKeySpecifier = Array<
  | 'candidateAppliedIndicator'
  | 'positionOpening'
  | 'positionOpeningId'
  | 'positionUri'
  | AssociatedPositionOpeningKeySpecifier
>;
export interface AssociatedPositionOpeningFieldPolicy {
  candidateAppliedIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  positionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
  positionOpeningId?: FieldPolicy<any> | FieldReadFunction<any>;
  positionUri?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type AttachmentKeySpecifier = Array<
  | 'descriptions'
  | 'id'
  | 'seekRole'
  | 'seekRoleCode'
  | 'url'
  | AttachmentKeySpecifier
>;
export interface AttachmentFieldPolicy {
  descriptions?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  seekRole?: FieldPolicy<any> | FieldReadFunction<any>;
  seekRoleCode?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CandidateKeySpecifier = Array<
  | 'distributionGuidelines'
  | 'documentId'
  | 'person'
  | 'profiles'
  | 'seekPrimaryEmailAddress'
  | CandidateKeySpecifier
>;
export interface CandidateFieldPolicy {
  distributionGuidelines?: FieldPolicy<any> | FieldReadFunction<any>;
  documentId?: FieldPolicy<any> | FieldReadFunction<any>;
  person?: FieldPolicy<any> | FieldReadFunction<any>;
  profiles?: FieldPolicy<any> | FieldReadFunction<any>;
  seekPrimaryEmailAddress?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CandidateApplicationCreatedEventKeySpecifier = Array<
  | 'candidate'
  | 'candidateApplicationProfile'
  | 'candidateApplicationProfileId'
  | 'candidateId'
  | 'createDateTime'
  | 'id'
  | 'schemeId'
  | 'typeCode'
  | 'webhookAttempts'
  | CandidateApplicationCreatedEventKeySpecifier
>;
export interface CandidateApplicationCreatedEventFieldPolicy {
  candidate?: FieldPolicy<any> | FieldReadFunction<any>;
  candidateApplicationProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  candidateApplicationProfileId?: FieldPolicy<any> | FieldReadFunction<any>;
  candidateId?: FieldPolicy<any> | FieldReadFunction<any>;
  createDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  schemeId?: FieldPolicy<any> | FieldReadFunction<any>;
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CandidatePersonKeySpecifier = Array<
  'communication' | 'name' | CandidatePersonKeySpecifier
>;
export interface CandidatePersonFieldPolicy {
  communication?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CandidateProcessActionKeySpecifier = Array<
  | 'code'
  | 'description'
  | 'name'
  | 'seekUrl'
  | CandidateProcessActionKeySpecifier
>;
export interface CandidateProcessActionFieldPolicy {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  seekUrl?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CandidateProcessHistoryItemKeySpecifier = Array<
  | 'action'
  | 'actionDate'
  | 'candidateProfile'
  | 'id'
  | 'positionProfile'
  | 'primaryParties'
  | 'seekSource'
  | 'status'
  | CandidateProcessHistoryItemKeySpecifier
>;
export interface CandidateProcessHistoryItemFieldPolicy {
  action?: FieldPolicy<any> | FieldReadFunction<any>;
  actionDate?: FieldPolicy<any> | FieldReadFunction<any>;
  candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  positionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  primaryParties?: FieldPolicy<any> | FieldReadFunction<any>;
  seekSource?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CandidateProcessHistoryItemConnectionKeySpecifier = Array<
  'edges' | 'pageInfo' | CandidateProcessHistoryItemConnectionKeySpecifier
>;
export interface CandidateProcessHistoryItemConnectionFieldPolicy {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CandidateProcessHistoryItemEdgeKeySpecifier = Array<
  'cursor' | 'node' | CandidateProcessHistoryItemEdgeKeySpecifier
>;
export interface CandidateProcessHistoryItemEdgeFieldPolicy {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CandidateProcessPartyKeySpecifier = Array<
  'organization' | 'person' | CandidateProcessPartyKeySpecifier
>;
export interface CandidateProcessPartyFieldPolicy {
  organization?: FieldPolicy<any> | FieldReadFunction<any>;
  person?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CandidateProcessStatusKeySpecifier = Array<
  'code' | CandidateProcessStatusKeySpecifier
>;
export interface CandidateProcessStatusFieldPolicy {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CandidateProfileKeySpecifier = Array<
  | 'associatedPositionOpenings'
  | 'associatedPositionProfile'
  | 'attachments'
  | 'candidate'
  | 'candidateSources'
  | 'certifications'
  | 'createDateTime'
  | 'education'
  | 'employment'
  | 'positionPreferences'
  | 'profileId'
  | 'qualifications'
  | 'seekActions'
  | 'seekProcessHistory'
  | 'seekQuestionnaireSubmission'
  | 'updateDateTime'
  | CandidateProfileKeySpecifier
>;
export interface CandidateProfileFieldPolicy {
  associatedPositionOpenings?: FieldPolicy<any> | FieldReadFunction<any>;
  associatedPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  attachments?: FieldPolicy<any> | FieldReadFunction<any>;
  candidate?: FieldPolicy<any> | FieldReadFunction<any>;
  candidateSources?: FieldPolicy<any> | FieldReadFunction<any>;
  certifications?: FieldPolicy<any> | FieldReadFunction<any>;
  createDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  education?: FieldPolicy<any> | FieldReadFunction<any>;
  employment?: FieldPolicy<any> | FieldReadFunction<any>;
  positionPreferences?: FieldPolicy<any> | FieldReadFunction<any>;
  profileId?: FieldPolicy<any> | FieldReadFunction<any>;
  qualifications?: FieldPolicy<any> | FieldReadFunction<any>;
  seekActions?: FieldPolicy<any> | FieldReadFunction<any>;
  seekProcessHistory?: FieldPolicy<any> | FieldReadFunction<any>;
  seekQuestionnaireSubmission?: FieldPolicy<any> | FieldReadFunction<any>;
  updateDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CandidateProfilePurchasedEventKeySpecifier = Array<
  | 'candidateProfile'
  | 'candidateProfileId'
  | 'createDateTime'
  | 'id'
  | 'schemeId'
  | 'typeCode'
  | 'webhookAttempts'
  | CandidateProfilePurchasedEventKeySpecifier
>;
export interface CandidateProfilePurchasedEventFieldPolicy {
  candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  candidateProfileId?: FieldPolicy<any> | FieldReadFunction<any>;
  createDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  schemeId?: FieldPolicy<any> | FieldReadFunction<any>;
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CandidateSourceKeySpecifier = Array<
  'name' | 'type' | CandidateSourceKeySpecifier
>;
export interface CandidateSourceFieldPolicy {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CertificationKeySpecifier = Array<
  | 'descriptions'
  | 'effectiveTimePeriod'
  | 'issueDate'
  | 'issued'
  | 'issuingAuthority'
  | 'name'
  | CertificationKeySpecifier
>;
export interface CertificationFieldPolicy {
  descriptions?: FieldPolicy<any> | FieldReadFunction<any>;
  effectiveTimePeriod?: FieldPolicy<any> | FieldReadFunction<any>;
  issueDate?: FieldPolicy<any> | FieldReadFunction<any>;
  issued?: FieldPolicy<any> | FieldReadFunction<any>;
  issuingAuthority?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ClosePostedPositionProfilePayloadKeySpecifier = Array<
  'positionProfile' | ClosePostedPositionProfilePayloadKeySpecifier
>;
export interface ClosePostedPositionProfilePayloadFieldPolicy {
  positionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ClosePostedPositionProfile_PositionProfilePayloadKeySpecifier =
  Array<
    'profileId' | ClosePostedPositionProfile_PositionProfilePayloadKeySpecifier
  >;
export interface ClosePostedPositionProfile_PositionProfilePayloadFieldPolicy {
  profileId?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CommunicationKeySpecifier = Array<
  | 'address'
  | 'email'
  | 'phone'
  | 'seekDoNotContactIndicator'
  | CommunicationKeySpecifier
>;
export interface CommunicationFieldPolicy {
  address?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  phone?: FieldPolicy<any> | FieldReadFunction<any>;
  seekDoNotContactIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CreateApplicationQuestionnairePayloadKeySpecifier = Array<
  'applicationQuestionnaire' | CreateApplicationQuestionnairePayloadKeySpecifier
>;
export interface CreateApplicationQuestionnairePayloadFieldPolicy {
  applicationQuestionnaire?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CreateCandidateProcessHistoryItemPayload_ConflictKeySpecifier =
  Array<
    | 'candidateProfile'
    | 'conflictingCandidateProcessHistoryItem'
    | CreateCandidateProcessHistoryItemPayload_ConflictKeySpecifier
  >;
export interface CreateCandidateProcessHistoryItemPayload_ConflictFieldPolicy {
  candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  conflictingCandidateProcessHistoryItem?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
}
export type CreateCandidateProcessHistoryItemPayload_SuccessKeySpecifier =
  Array<
    | 'candidateProcessHistoryItem'
    | 'candidateProfile'
    | CreateCandidateProcessHistoryItemPayload_SuccessKeySpecifier
  >;
export interface CreateCandidateProcessHistoryItemPayload_SuccessFieldPolicy {
  candidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>;
  candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CreatePositionOpeningPayloadKeySpecifier = Array<
  'positionOpening' | CreatePositionOpeningPayloadKeySpecifier
>;
export interface CreatePositionOpeningPayloadFieldPolicy {
  positionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CreateUnpostedPositionProfileForOpeningPayloadKeySpecifier = Array<
  'positionProfile' | CreateUnpostedPositionProfileForOpeningPayloadKeySpecifier
>;
export interface CreateUnpostedPositionProfileForOpeningPayloadFieldPolicy {
  positionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CreateWebhookSubscriptionPayload_ConflictKeySpecifier = Array<
  | 'conflictingWebhookSubscription'
  | CreateWebhookSubscriptionPayload_ConflictKeySpecifier
>;
export interface CreateWebhookSubscriptionPayload_ConflictFieldPolicy {
  conflictingWebhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CreateWebhookSubscriptionPayload_SuccessKeySpecifier = Array<
  'webhookSubscription' | CreateWebhookSubscriptionPayload_SuccessKeySpecifier
>;
export interface CreateWebhookSubscriptionPayload_SuccessFieldPolicy {
  webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CurrencyKeySpecifier = Array<'code' | CurrencyKeySpecifier>;
export interface CurrencyFieldPolicy {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type CurrencyMinorUnitKeySpecifier = Array<
  'currency' | 'value' | CurrencyMinorUnitKeySpecifier
>;
export interface CurrencyMinorUnitFieldPolicy {
  currency?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type DeleteCandidateProcessHistoryItemPayloadKeySpecifier = Array<
  | 'candidateProcessHistoryItem'
  | DeleteCandidateProcessHistoryItemPayloadKeySpecifier
>;
export interface DeleteCandidateProcessHistoryItemPayloadFieldPolicy {
  candidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type DeletePositionOpeningPayloadKeySpecifier = Array<
  'positionOpening' | DeletePositionOpeningPayloadKeySpecifier
>;
export interface DeletePositionOpeningPayloadFieldPolicy {
  positionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type DeleteUnpostedPositionProfilePayloadKeySpecifier = Array<
  'positionProfile' | DeleteUnpostedPositionProfilePayloadKeySpecifier
>;
export interface DeleteUnpostedPositionProfilePayloadFieldPolicy {
  positionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type DeleteUploadedCandidatePayloadKeySpecifier = Array<
  'candidate' | DeleteUploadedCandidatePayloadKeySpecifier
>;
export interface DeleteUploadedCandidatePayloadFieldPolicy {
  candidate?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type DeleteWebhookSubscriptionPayloadKeySpecifier = Array<
  'webhookSubscription' | DeleteWebhookSubscriptionPayloadKeySpecifier
>;
export interface DeleteWebhookSubscriptionPayloadFieldPolicy {
  webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type DistributionGuidelinesKeySpecifier = Array<
  'seekProductCodes' | DistributionGuidelinesKeySpecifier
>;
export interface DistributionGuidelinesFieldPolicy {
  seekProductCodes?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type EducationAttendanceKeySpecifier = Array<
  | 'descriptions'
  | 'educationDegrees'
  | 'institution'
  | EducationAttendanceKeySpecifier
>;
export interface EducationAttendanceFieldPolicy {
  descriptions?: FieldPolicy<any> | FieldReadFunction<any>;
  educationDegrees?: FieldPolicy<any> | FieldReadFunction<any>;
  institution?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type EducationDegreeKeySpecifier = Array<
  'date' | 'degreeGrantedStatus' | 'name' | EducationDegreeKeySpecifier
>;
export interface EducationDegreeFieldPolicy {
  date?: FieldPolicy<any> | FieldReadFunction<any>;
  degreeGrantedStatus?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type EffectiveTimePeriodKeySpecifier = Array<
  'validTo' | EffectiveTimePeriodKeySpecifier
>;
export interface EffectiveTimePeriodFieldPolicy {
  validTo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type EmailKeySpecifier = Array<'address' | EmailKeySpecifier>;
export interface EmailFieldPolicy {
  address?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type EmployerHistoryKeySpecifier = Array<
  'organization' | 'positionHistories' | EmployerHistoryKeySpecifier
>;
export interface EmployerHistoryFieldPolicy {
  organization?: FieldPolicy<any> | FieldReadFunction<any>;
  positionHistories?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type EventKeySpecifier = Array<
  | 'createDateTime'
  | 'id'
  | 'schemeId'
  | 'typeCode'
  | 'webhookAttempts'
  | EventKeySpecifier
>;
export interface EventFieldPolicy {
  createDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  schemeId?: FieldPolicy<any> | FieldReadFunction<any>;
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type EventEdgeKeySpecifier = Array<
  'cursor' | 'node' | 'streamDateTime' | EventEdgeKeySpecifier
>;
export interface EventEdgeFieldPolicy {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
  streamDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type EventsConnectionKeySpecifier = Array<
  'edges' | 'pageInfo' | EventsConnectionKeySpecifier
>;
export interface EventsConnectionFieldPolicy {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type GeoLocationKeySpecifier = Array<
  'latitude' | 'longitude' | GeoLocationKeySpecifier
>;
export interface GeoLocationFieldPolicy {
  latitude?: FieldPolicy<any> | FieldReadFunction<any>;
  longitude?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type HirerRelationshipChangedEventKeySpecifier = Array<
  | 'createDateTime'
  | 'hirer'
  | 'hirerId'
  | 'id'
  | 'schemeId'
  | 'typeCode'
  | 'webhookAttempts'
  | HirerRelationshipChangedEventKeySpecifier
>;
export interface HirerRelationshipChangedEventFieldPolicy {
  createDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  hirer?: FieldPolicy<any> | FieldReadFunction<any>;
  hirerId?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  schemeId?: FieldPolicy<any> | FieldReadFunction<any>;
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type HiringOrganizationKeySpecifier = Array<
  | 'id'
  | 'name'
  | 'seekAnzAdvertiserId'
  | 'seekApiCapabilities'
  | HiringOrganizationKeySpecifier
>;
export interface HiringOrganizationFieldPolicy {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  seekAnzAdvertiserId?: FieldPolicy<any> | FieldReadFunction<any>;
  seekApiCapabilities?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type HiringOrganizationApiCapabilitiesKeySpecifier = Array<
  | 'applicationMethodCodes'
  | 'relationshipTypeCodes'
  | HiringOrganizationApiCapabilitiesKeySpecifier
>;
export interface HiringOrganizationApiCapabilitiesFieldPolicy {
  applicationMethodCodes?: FieldPolicy<any> | FieldReadFunction<any>;
  relationshipTypeCodes?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type HiringOrganizationEdgeKeySpecifier = Array<
  'cursor' | 'node' | HiringOrganizationEdgeKeySpecifier
>;
export interface HiringOrganizationEdgeFieldPolicy {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type HiringOrganizationsConnectionKeySpecifier = Array<
  'edges' | 'pageInfo' | HiringOrganizationsConnectionKeySpecifier
>;
export interface HiringOrganizationsConnectionFieldPolicy {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type JobCategoryKeySpecifier = Array<
  'children' | 'id' | 'name' | 'parent' | JobCategoryKeySpecifier
>;
export interface JobCategoryFieldPolicy {
  children?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  parent?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type JobCategorySuggestionChoiceKeySpecifier = Array<
  'confidence' | 'jobCategory' | JobCategorySuggestionChoiceKeySpecifier
>;
export interface JobCategorySuggestionChoiceFieldPolicy {
  confidence?: FieldPolicy<any> | FieldReadFunction<any>;
  jobCategory?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type LocationKeySpecifier = Array<
  | 'children'
  | 'contextualName'
  | 'countryCode'
  | 'currencies'
  | 'id'
  | 'name'
  | 'parent'
  | LocationKeySpecifier
>;
export interface LocationFieldPolicy {
  children?: FieldPolicy<any> | FieldReadFunction<any>;
  contextualName?: FieldPolicy<any> | FieldReadFunction<any>;
  countryCode?: FieldPolicy<any> | FieldReadFunction<any>;
  currencies?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  parent?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type LocationSuggestionKeySpecifier = Array<
  'location' | LocationSuggestionKeySpecifier
>;
export interface LocationSuggestionFieldPolicy {
  location?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type MutationKeySpecifier = Array<
  | '_empty'
  | 'closePostedPositionProfile'
  | 'createApplicationQuestionnaire'
  | 'createCandidateProcessHistoryItem'
  | 'createPositionOpening'
  | 'createUnpostedPositionProfileForOpening'
  | 'createWebhookSubscription'
  | 'deleteCandidateProcessHistoryItem'
  | 'deletePositionOpening'
  | 'deleteUnpostedPositionProfile'
  | 'deleteUploadedCandidate'
  | 'deleteWebhookSubscription'
  | 'postPosition'
  | 'postPositionProfileForOpening'
  | 'replayWebhookSubscription'
  | 'updateCandidateProcessHistoryItem'
  | 'updatePositionOpeningPersonContacts'
  | 'updatePositionOpeningStatus'
  | 'updatePostedPositionProfile'
  | 'updateUnpostedPositionProfile'
  | 'updateUploadedCandidatePerson'
  | 'updateUploadedCandidateProfileActions'
  | 'updateUploadedCandidateProfileDates'
  | 'updateUploadedCandidateProfilePositionPreferences'
  | 'updateWebhookSubscriptionDeliveryConfiguration'
  | 'updateWebhookSubscriptionSigningConfiguration'
  | 'uploadCandidate'
  | MutationKeySpecifier
>;
export interface MutationFieldPolicy {
  _empty?: FieldPolicy<any> | FieldReadFunction<any>;
  closePostedPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  createApplicationQuestionnaire?: FieldPolicy<any> | FieldReadFunction<any>;
  createCandidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>;
  createPositionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
  createUnpostedPositionProfileForOpening?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  createWebhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteCandidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>;
  deletePositionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUnpostedPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUploadedCandidate?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteWebhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
  postPosition?: FieldPolicy<any> | FieldReadFunction<any>;
  postPositionProfileForOpening?: FieldPolicy<any> | FieldReadFunction<any>;
  replayWebhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
  updateCandidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePositionOpeningPersonContacts?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  updatePositionOpeningStatus?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePostedPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUnpostedPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUploadedCandidatePerson?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUploadedCandidateProfileActions?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  updateUploadedCandidateProfileDates?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  updateUploadedCandidateProfilePositionPreferences?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  updateWebhookSubscriptionDeliveryConfiguration?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  updateWebhookSubscriptionSigningConfiguration?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  uploadCandidate?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ObjectIdentifierKeySpecifier = Array<
  'value' | ObjectIdentifierKeySpecifier
>;
export interface ObjectIdentifierFieldPolicy {
  value?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type OrganizationKeySpecifier = Array<'name' | OrganizationKeySpecifier>;
export interface OrganizationFieldPolicy {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PageInfoKeySpecifier = Array<
  | 'endCursor'
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | PageInfoKeySpecifier
>;
export interface PageInfoFieldPolicy {
  endCursor?: FieldPolicy<any> | FieldReadFunction<any>;
  hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>;
  startCursor?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PartnerOrganizationKeySpecifier = Array<
  | 'credentialSelfServiceApprovedIndicator'
  | 'name'
  | PartnerOrganizationKeySpecifier
>;
export interface PartnerOrganizationFieldPolicy {
  credentialSelfServiceApprovedIndicator?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PayTypeKeySpecifier = Array<
  'basisCode' | 'intervalCode' | 'label' | PayTypeKeySpecifier
>;
export interface PayTypeFieldPolicy {
  basisCode?: FieldPolicy<any> | FieldReadFunction<any>;
  intervalCode?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PersonCompetencyKeySpecifier = Array<
  'competencyName' | PersonCompetencyKeySpecifier
>;
export interface PersonCompetencyFieldPolicy {
  competencyName?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PersonNameKeySpecifier = Array<
  'family' | 'formattedName' | 'given' | PersonNameKeySpecifier
>;
export interface PersonNameFieldPolicy {
  family?: FieldPolicy<any> | FieldReadFunction<any>;
  formattedName?: FieldPolicy<any> | FieldReadFunction<any>;
  given?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PhoneKeySpecifier = Array<'formattedNumber' | PhoneKeySpecifier>;
export interface PhoneFieldPolicy {
  formattedNumber?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PositionFormattedDescriptionKeySpecifier = Array<
  'content' | 'descriptionId' | PositionFormattedDescriptionKeySpecifier
>;
export interface PositionFormattedDescriptionFieldPolicy {
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionId?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PositionFormattedDescriptionIdentifierKeySpecifier = Array<
  'value' | PositionFormattedDescriptionIdentifierKeySpecifier
>;
export interface PositionFormattedDescriptionIdentifierFieldPolicy {
  value?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PositionHistoryKeySpecifier = Array<
  | 'current'
  | 'descriptions'
  | 'end'
  | 'start'
  | 'title'
  | PositionHistoryKeySpecifier
>;
export interface PositionHistoryFieldPolicy {
  current?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptions?: FieldPolicy<any> | FieldReadFunction<any>;
  end?: FieldPolicy<any> | FieldReadFunction<any>;
  start?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PositionOpeningKeySpecifier = Array<
  | 'documentId'
  | 'paginatedPositionProfiles'
  | 'positionProfiles'
  | 'postingRequester'
  | 'seekPartnerMetadata'
  | 'statusCode'
  | PositionOpeningKeySpecifier
>;
export interface PositionOpeningFieldPolicy {
  documentId?: FieldPolicy<any> | FieldReadFunction<any>;
  paginatedPositionProfiles?: FieldPolicy<any> | FieldReadFunction<any>;
  positionProfiles?: FieldPolicy<any> | FieldReadFunction<any>;
  postingRequester?: FieldPolicy<any> | FieldReadFunction<any>;
  seekPartnerMetadata?: FieldPolicy<any> | FieldReadFunction<any>;
  statusCode?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PositionOpeningConnectionKeySpecifier = Array<
  'edges' | 'pageInfo' | PositionOpeningConnectionKeySpecifier
>;
export interface PositionOpeningConnectionFieldPolicy {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PositionOpeningEdgeKeySpecifier = Array<
  'cursor' | 'node' | PositionOpeningEdgeKeySpecifier
>;
export interface PositionOpeningEdgeFieldPolicy {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PositionPreferenceKeySpecifier = Array<
  'locations' | PositionPreferenceKeySpecifier
>;
export interface PositionPreferenceFieldPolicy {
  locations?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PositionProfileKeySpecifier = Array<
  | 'jobCategories'
  | 'offeredRemunerationPackage'
  | 'positionFormattedDescriptions'
  | 'positionLocation'
  | 'positionOpening'
  | 'positionOrganizations'
  | 'positionScheduleTypeCodes'
  | 'positionTitle'
  | 'positionUri'
  | 'postingInstructions'
  | 'profileId'
  | 'seekAnzWorkTypeCode'
  | 'seekApplicationQuestionnaire'
  | 'seekBillingReference'
  | 'seekCreatedBySelfIndicator'
  | 'seekHirerJobReference'
  | 'seekPartnerMetadata'
  | 'seekTypeCode'
  | 'seekVideo'
  | PositionProfileKeySpecifier
>;
export interface PositionProfileFieldPolicy {
  jobCategories?: FieldPolicy<any> | FieldReadFunction<any>;
  offeredRemunerationPackage?: FieldPolicy<any> | FieldReadFunction<any>;
  positionFormattedDescriptions?: FieldPolicy<any> | FieldReadFunction<any>;
  positionLocation?: FieldPolicy<any> | FieldReadFunction<any>;
  positionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
  positionOrganizations?: FieldPolicy<any> | FieldReadFunction<any>;
  positionScheduleTypeCodes?: FieldPolicy<any> | FieldReadFunction<any>;
  positionTitle?: FieldPolicy<any> | FieldReadFunction<any>;
  positionUri?: FieldPolicy<any> | FieldReadFunction<any>;
  postingInstructions?: FieldPolicy<any> | FieldReadFunction<any>;
  profileId?: FieldPolicy<any> | FieldReadFunction<any>;
  seekAnzWorkTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  seekApplicationQuestionnaire?: FieldPolicy<any> | FieldReadFunction<any>;
  seekBillingReference?: FieldPolicy<any> | FieldReadFunction<any>;
  seekCreatedBySelfIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  seekHirerJobReference?: FieldPolicy<any> | FieldReadFunction<any>;
  seekPartnerMetadata?: FieldPolicy<any> | FieldReadFunction<any>;
  seekTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  seekVideo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PositionProfileClosedEventKeySpecifier = Array<
  | 'createDateTime'
  | 'id'
  | 'positionProfile'
  | 'positionProfileId'
  | 'schemeId'
  | 'typeCode'
  | 'webhookAttempts'
  | PositionProfileClosedEventKeySpecifier
>;
export interface PositionProfileClosedEventFieldPolicy {
  createDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  positionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  positionProfileId?: FieldPolicy<any> | FieldReadFunction<any>;
  schemeId?: FieldPolicy<any> | FieldReadFunction<any>;
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PositionProfileConnectionKeySpecifier = Array<
  'edges' | 'pageInfo' | PositionProfileConnectionKeySpecifier
>;
export interface PositionProfileConnectionFieldPolicy {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PositionProfileEdgeKeySpecifier = Array<
  'cursor' | 'node' | PositionProfileEdgeKeySpecifier
>;
export interface PositionProfileEdgeFieldPolicy {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PositionProfilePostedEventKeySpecifier = Array<
  | 'createDateTime'
  | 'id'
  | 'positionProfile'
  | 'positionProfileId'
  | 'schemeId'
  | 'typeCode'
  | 'webhookAttempts'
  | PositionProfilePostedEventKeySpecifier
>;
export interface PositionProfilePostedEventFieldPolicy {
  createDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  positionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  positionProfileId?: FieldPolicy<any> | FieldReadFunction<any>;
  schemeId?: FieldPolicy<any> | FieldReadFunction<any>;
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookAttempts?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PostPositionPayload_ConflictKeySpecifier = Array<
  | 'conflictingPositionOpening'
  | 'conflictingPositionProfile'
  | PostPositionPayload_ConflictKeySpecifier
>;
export interface PostPositionPayload_ConflictFieldPolicy {
  conflictingPositionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
  conflictingPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PostPositionPayload_SuccessKeySpecifier = Array<
  | 'positionOpening'
  | 'positionProfile'
  | PostPositionPayload_SuccessKeySpecifier
>;
export interface PostPositionPayload_SuccessFieldPolicy {
  positionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
  positionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PostPositionProfileForOpeningPayload_ConflictKeySpecifier = Array<
  | 'conflictingPositionProfile'
  | PostPositionProfileForOpeningPayload_ConflictKeySpecifier
>;
export interface PostPositionProfileForOpeningPayload_ConflictFieldPolicy {
  conflictingPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PostPositionProfileForOpeningPayload_SuccessKeySpecifier = Array<
  'positionProfile' | PostPositionProfileForOpeningPayload_SuccessKeySpecifier
>;
export interface PostPositionProfileForOpeningPayload_SuccessFieldPolicy {
  positionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PostPositionProfileForOpening_PositionProfilePayloadKeySpecifier =
  Array<
    | 'profileId'
    | PostPositionProfileForOpening_PositionProfilePayloadKeySpecifier
  >;
export interface PostPositionProfileForOpening_PositionProfilePayloadFieldPolicy {
  profileId?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PostPosition_PositionOpeningPayloadKeySpecifier = Array<
  'documentId' | PostPosition_PositionOpeningPayloadKeySpecifier
>;
export interface PostPosition_PositionOpeningPayloadFieldPolicy {
  documentId?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PostPosition_PositionProfilePayloadKeySpecifier = Array<
  'profileId' | PostPosition_PositionProfilePayloadKeySpecifier
>;
export interface PostPosition_PositionProfilePayloadFieldPolicy {
  profileId?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PostedPositionProfileKeySpecifier = Array<
  | 'jobCategories'
  | 'offeredRemunerationPackage'
  | 'positionFormattedDescriptions'
  | 'positionLocation'
  | 'positionOpening'
  | 'positionOrganizations'
  | 'positionScheduleTypeCodes'
  | 'positionTitle'
  | 'positionUri'
  | 'postingInstructions'
  | 'profileId'
  | 'seekAnzWorkTypeCode'
  | 'seekApplicationQuestionnaire'
  | 'seekApplicationUri'
  | 'seekBillingReference'
  | 'seekCreatedBySelfIndicator'
  | 'seekHirerJobReference'
  | 'seekPartnerMetadata'
  | 'seekTypeCode'
  | 'seekVideo'
  | PostedPositionProfileKeySpecifier
>;
export interface PostedPositionProfileFieldPolicy {
  jobCategories?: FieldPolicy<any> | FieldReadFunction<any>;
  offeredRemunerationPackage?: FieldPolicy<any> | FieldReadFunction<any>;
  positionFormattedDescriptions?: FieldPolicy<any> | FieldReadFunction<any>;
  positionLocation?: FieldPolicy<any> | FieldReadFunction<any>;
  positionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
  positionOrganizations?: FieldPolicy<any> | FieldReadFunction<any>;
  positionScheduleTypeCodes?: FieldPolicy<any> | FieldReadFunction<any>;
  positionTitle?: FieldPolicy<any> | FieldReadFunction<any>;
  positionUri?: FieldPolicy<any> | FieldReadFunction<any>;
  postingInstructions?: FieldPolicy<any> | FieldReadFunction<any>;
  profileId?: FieldPolicy<any> | FieldReadFunction<any>;
  seekAnzWorkTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  seekApplicationQuestionnaire?: FieldPolicy<any> | FieldReadFunction<any>;
  seekApplicationUri?: FieldPolicy<any> | FieldReadFunction<any>;
  seekBillingReference?: FieldPolicy<any> | FieldReadFunction<any>;
  seekCreatedBySelfIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  seekHirerJobReference?: FieldPolicy<any> | FieldReadFunction<any>;
  seekPartnerMetadata?: FieldPolicy<any> | FieldReadFunction<any>;
  seekTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  seekVideo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PostedPositionProfilePreviewKeySpecifier = Array<
  'previewUri' | PostedPositionProfilePreviewKeySpecifier
>;
export interface PostedPositionProfilePreviewFieldPolicy {
  previewUri?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PostedPositionProfile_AdvertisementProductKeySpecifier = Array<
  'label' | PostedPositionProfile_AdvertisementProductKeySpecifier
>;
export interface PostedPositionProfile_AdvertisementProductFieldPolicy {
  label?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PostingInstructionKeySpecifier = Array<
  | 'applicationMethods'
  | 'branding'
  | 'brandingId'
  | 'end'
  | 'seekAdvertisementProduct'
  | 'seekAnzAdvertisementType'
  | 'start'
  | PostingInstructionKeySpecifier
>;
export interface PostingInstructionFieldPolicy {
  applicationMethods?: FieldPolicy<any> | FieldReadFunction<any>;
  branding?: FieldPolicy<any> | FieldReadFunction<any>;
  brandingId?: FieldPolicy<any> | FieldReadFunction<any>;
  end?: FieldPolicy<any> | FieldReadFunction<any>;
  seekAdvertisementProduct?: FieldPolicy<any> | FieldReadFunction<any>;
  seekAnzAdvertisementType?: FieldPolicy<any> | FieldReadFunction<any>;
  start?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PostingRequesterKeySpecifier = Array<
  | 'id'
  | 'name'
  | 'personContacts'
  | 'roleCode'
  | 'seekAnzAdvertiserId'
  | PostingRequesterKeySpecifier
>;
export interface PostingRequesterFieldPolicy {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  personContacts?: FieldPolicy<any> | FieldReadFunction<any>;
  roleCode?: FieldPolicy<any> | FieldReadFunction<any>;
  seekAnzAdvertiserId?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type PreferredLocationKeySpecifier = Array<
  'referenceLocation' | PreferredLocationKeySpecifier
>;
export interface PreferredLocationFieldPolicy {
  referenceLocation?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type QueryKeySpecifier = Array<
  | 'advertisementBranding'
  | 'advertisementBrandings'
  | 'advertisementProducts'
  | 'applicationLibraryQuestionSuggestions'
  | 'applicationQuestionnaire'
  | 'candidate'
  | 'candidateProcessHistoryItem'
  | 'candidateProfile'
  | 'currencies'
  | 'event'
  | 'events'
  | 'hiringOrganization'
  | 'hiringOrganizations'
  | 'inferLocation'
  | 'jobCategories'
  | 'jobCategory'
  | 'jobCategorySuggestions'
  | 'location'
  | 'locationSuggestions'
  | 'nearestLocations'
  | 'payTypes'
  | 'positionOpening'
  | 'positionOpenings'
  | 'positionProfile'
  | 'postedPositionProfilePreview'
  | 'seekAnzAdvertiser'
  | 'seekAnzHirerAdvertisementCreationProducts'
  | 'seekAnzHirerAdvertisementModificationProducts'
  | 'seekAnzHirerAdvertisementModificationProductsAlt'
  | 'self'
  | 'version'
  | 'webhookAttemptsForEvent'
  | 'webhookRequest'
  | 'webhookRequestsForSubscription'
  | 'webhookSubscription'
  | 'webhookSubscriptionReplay'
  | 'webhookSubscriptions'
  | QueryKeySpecifier
>;
export interface QueryFieldPolicy {
  advertisementBranding?: FieldPolicy<any> | FieldReadFunction<any>;
  advertisementBrandings?: FieldPolicy<any> | FieldReadFunction<any>;
  advertisementProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  applicationLibraryQuestionSuggestions?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  applicationQuestionnaire?: FieldPolicy<any> | FieldReadFunction<any>;
  candidate?: FieldPolicy<any> | FieldReadFunction<any>;
  candidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>;
  candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  currencies?: FieldPolicy<any> | FieldReadFunction<any>;
  event?: FieldPolicy<any> | FieldReadFunction<any>;
  events?: FieldPolicy<any> | FieldReadFunction<any>;
  hiringOrganization?: FieldPolicy<any> | FieldReadFunction<any>;
  hiringOrganizations?: FieldPolicy<any> | FieldReadFunction<any>;
  inferLocation?: FieldPolicy<any> | FieldReadFunction<any>;
  jobCategories?: FieldPolicy<any> | FieldReadFunction<any>;
  jobCategory?: FieldPolicy<any> | FieldReadFunction<any>;
  jobCategorySuggestions?: FieldPolicy<any> | FieldReadFunction<any>;
  location?: FieldPolicy<any> | FieldReadFunction<any>;
  locationSuggestions?: FieldPolicy<any> | FieldReadFunction<any>;
  nearestLocations?: FieldPolicy<any> | FieldReadFunction<any>;
  payTypes?: FieldPolicy<any> | FieldReadFunction<any>;
  positionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
  positionOpenings?: FieldPolicy<any> | FieldReadFunction<any>;
  positionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  postedPositionProfilePreview?: FieldPolicy<any> | FieldReadFunction<any>;
  seekAnzAdvertiser?: FieldPolicy<any> | FieldReadFunction<any>;
  seekAnzHirerAdvertisementCreationProducts?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  seekAnzHirerAdvertisementModificationProducts?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  seekAnzHirerAdvertisementModificationProductsAlt?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  self?: FieldPolicy<any> | FieldReadFunction<any>;
  version?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookAttemptsForEvent?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookRequest?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookRequestsForSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookSubscriptionReplay?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type RemunerationAmountKeySpecifier = Array<
  'currency' | 'value' | RemunerationAmountKeySpecifier
>;
export interface RemunerationAmountFieldPolicy {
  currency?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type RemunerationPackageKeySpecifier = Array<
  'basisCode' | 'descriptions' | 'ranges' | RemunerationPackageKeySpecifier
>;
export interface RemunerationPackageFieldPolicy {
  basisCode?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptions?: FieldPolicy<any> | FieldReadFunction<any>;
  ranges?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type RemunerationRangeKeySpecifier = Array<
  | 'intervalCode'
  | 'maximumAmount'
  | 'minimumAmount'
  | RemunerationRangeKeySpecifier
>;
export interface RemunerationRangeFieldPolicy {
  intervalCode?: FieldPolicy<any> | FieldReadFunction<any>;
  maximumAmount?: FieldPolicy<any> | FieldReadFunction<any>;
  minimumAmount?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type ReplayWebhookSubscriptionPayloadKeySpecifier = Array<
  'webhookSubscription' | ReplayWebhookSubscriptionPayloadKeySpecifier
>;
export interface ReplayWebhookSubscriptionPayloadFieldPolicy {
  webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type SeekAnzAdProductKeySpecifier = Array<
  | 'advertisementTypeCode'
  | 'checkoutEstimate'
  | 'description'
  | 'enabledIndicator'
  | 'features'
  | 'messages'
  | 'name'
  | 'price'
  | SeekAnzAdProductKeySpecifier
>;
export interface SeekAnzAdProductFieldPolicy {
  advertisementTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  checkoutEstimate?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  enabledIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  features?: FieldPolicy<any> | FieldReadFunction<any>;
  messages?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  price?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type SeekAnzAdProductCheckoutEstimateKeySpecifier = Array<
  | 'contractConsumption'
  | 'paymentDueExcludingTax'
  | 'summary'
  | SeekAnzAdProductCheckoutEstimateKeySpecifier
>;
export interface SeekAnzAdProductCheckoutEstimateFieldPolicy {
  contractConsumption?: FieldPolicy<any> | FieldReadFunction<any>;
  paymentDueExcludingTax?: FieldPolicy<any> | FieldReadFunction<any>;
  summary?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type SeekAnzAdProductContractConsumptionKeySpecifier = Array<
  'summary' | 'typeCode' | SeekAnzAdProductContractConsumptionKeySpecifier
>;
export interface SeekAnzAdProductContractConsumptionFieldPolicy {
  summary?: FieldPolicy<any> | FieldReadFunction<any>;
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type SeekAnzAdProductFeaturesKeySpecifier = Array<
  | 'brandingIndicator'
  | 'searchBulletPointsIndicator'
  | SeekAnzAdProductFeaturesKeySpecifier
>;
export interface SeekAnzAdProductFeaturesFieldPolicy {
  brandingIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  searchBulletPointsIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type SeekAnzAdProductMessageKeySpecifier = Array<
  | 'content'
  | 'severityCode'
  | 'typeCode'
  | 'visibilityCode'
  | SeekAnzAdProductMessageKeySpecifier
>;
export interface SeekAnzAdProductMessageFieldPolicy {
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  severityCode?: FieldPolicy<any> | FieldReadFunction<any>;
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  visibilityCode?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type SeekAnzAdProductPriceKeySpecifier = Array<
  | 'amountExcludingTax'
  | 'summary'
  | 'taxedIndicator'
  | 'visibleForHirerIndicator'
  | SeekAnzAdProductPriceKeySpecifier
>;
export interface SeekAnzAdProductPriceFieldPolicy {
  amountExcludingTax?: FieldPolicy<any> | FieldReadFunction<any>;
  summary?: FieldPolicy<any> | FieldReadFunction<any>;
  taxedIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  visibleForHirerIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type SeekProcessHistoryItemSourceKeySpecifier = Array<
  'name' | SeekProcessHistoryItemSourceKeySpecifier
>;
export interface SeekProcessHistoryItemSourceFieldPolicy {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type SeekVideoKeySpecifier = Array<
  'seekAnzPositionCode' | 'url' | SeekVideoKeySpecifier
>;
export interface SeekVideoFieldPolicy {
  seekAnzPositionCode?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type SelfOrganizationsKeySpecifier = Array<
  'hirer' | 'partner' | SelfOrganizationsKeySpecifier
>;
export interface SelfOrganizationsFieldPolicy {
  hirer?: FieldPolicy<any> | FieldReadFunction<any>;
  partner?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type SpecifiedPersonKeySpecifier = Array<
  'communication' | 'name' | 'roleCode' | SpecifiedPersonKeySpecifier
>;
export interface SpecifiedPersonFieldPolicy {
  communication?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  roleCode?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UnpostedPositionProfileKeySpecifier = Array<
  | 'jobCategories'
  | 'offeredRemunerationPackage'
  | 'positionFormattedDescriptions'
  | 'positionLocation'
  | 'positionOpening'
  | 'positionOrganizations'
  | 'positionScheduleTypeCodes'
  | 'positionTitle'
  | 'positionUri'
  | 'postingInstructions'
  | 'profileId'
  | 'profileName'
  | 'seekAnzWorkTypeCode'
  | 'seekApplicationQuestionnaire'
  | 'seekBillingReference'
  | 'seekCreatedBySelfIndicator'
  | 'seekHirerJobReference'
  | 'seekPartnerMetadata'
  | 'seekTypeCode'
  | 'seekVideo'
  | UnpostedPositionProfileKeySpecifier
>;
export interface UnpostedPositionProfileFieldPolicy {
  jobCategories?: FieldPolicy<any> | FieldReadFunction<any>;
  offeredRemunerationPackage?: FieldPolicy<any> | FieldReadFunction<any>;
  positionFormattedDescriptions?: FieldPolicy<any> | FieldReadFunction<any>;
  positionLocation?: FieldPolicy<any> | FieldReadFunction<any>;
  positionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
  positionOrganizations?: FieldPolicy<any> | FieldReadFunction<any>;
  positionScheduleTypeCodes?: FieldPolicy<any> | FieldReadFunction<any>;
  positionTitle?: FieldPolicy<any> | FieldReadFunction<any>;
  positionUri?: FieldPolicy<any> | FieldReadFunction<any>;
  postingInstructions?: FieldPolicy<any> | FieldReadFunction<any>;
  profileId?: FieldPolicy<any> | FieldReadFunction<any>;
  profileName?: FieldPolicy<any> | FieldReadFunction<any>;
  seekAnzWorkTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  seekApplicationQuestionnaire?: FieldPolicy<any> | FieldReadFunction<any>;
  seekBillingReference?: FieldPolicy<any> | FieldReadFunction<any>;
  seekCreatedBySelfIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  seekHirerJobReference?: FieldPolicy<any> | FieldReadFunction<any>;
  seekPartnerMetadata?: FieldPolicy<any> | FieldReadFunction<any>;
  seekTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  seekVideo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdateCandidateProcessHistoryItemPayloadKeySpecifier = Array<
  | 'candidateProcessHistoryItem'
  | UpdateCandidateProcessHistoryItemPayloadKeySpecifier
>;
export interface UpdateCandidateProcessHistoryItemPayloadFieldPolicy {
  candidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdatePositionOpeningPersonContactsPayloadKeySpecifier = Array<
  'positionOpening' | UpdatePositionOpeningPersonContactsPayloadKeySpecifier
>;
export interface UpdatePositionOpeningPersonContactsPayloadFieldPolicy {
  positionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdatePositionOpeningStatusPayloadKeySpecifier = Array<
  'positionOpening' | UpdatePositionOpeningStatusPayloadKeySpecifier
>;
export interface UpdatePositionOpeningStatusPayloadFieldPolicy {
  positionOpening?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdatePostedPositionProfilePayloadKeySpecifier = Array<
  'positionProfile' | UpdatePostedPositionProfilePayloadKeySpecifier
>;
export interface UpdatePostedPositionProfilePayloadFieldPolicy {
  positionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdatePostedPositionProfile_PositionProfilePayloadKeySpecifier =
  Array<
    'profileId' | UpdatePostedPositionProfile_PositionProfilePayloadKeySpecifier
  >;
export interface UpdatePostedPositionProfile_PositionProfilePayloadFieldPolicy {
  profileId?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdateUnpostedPositionProfilePayloadKeySpecifier = Array<
  'positionProfile' | UpdateUnpostedPositionProfilePayloadKeySpecifier
>;
export interface UpdateUnpostedPositionProfilePayloadFieldPolicy {
  positionProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdateUploadedCandidatePersonPayload_ConflictKeySpecifier = Array<
  | 'conflictingCandidate'
  | UpdateUploadedCandidatePersonPayload_ConflictKeySpecifier
>;
export interface UpdateUploadedCandidatePersonPayload_ConflictFieldPolicy {
  conflictingCandidate?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdateUploadedCandidatePersonPayload_SuccessKeySpecifier = Array<
  'candidate' | UpdateUploadedCandidatePersonPayload_SuccessKeySpecifier
>;
export interface UpdateUploadedCandidatePersonPayload_SuccessFieldPolicy {
  candidate?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdateUploadedCandidateProfileActionsPayloadKeySpecifier = Array<
  'candidateProfile' | UpdateUploadedCandidateProfileActionsPayloadKeySpecifier
>;
export interface UpdateUploadedCandidateProfileActionsPayloadFieldPolicy {
  candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdateUploadedCandidateProfileDatesPayloadKeySpecifier = Array<
  'candidateProfile' | UpdateUploadedCandidateProfileDatesPayloadKeySpecifier
>;
export interface UpdateUploadedCandidateProfileDatesPayloadFieldPolicy {
  candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdateUploadedCandidateProfilePositionPreferencesPayloadKeySpecifier =
  Array<
    | 'candidateProfile'
    | UpdateUploadedCandidateProfilePositionPreferencesPayloadKeySpecifier
  >;
export interface UpdateUploadedCandidateProfilePositionPreferencesPayloadFieldPolicy {
  candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdateWebhookSubscriptionDeliveryConfigurationPayload_ConflictKeySpecifier =
  Array<
    | 'conflictingWebhookSubscription'
    | UpdateWebhookSubscriptionDeliveryConfigurationPayload_ConflictKeySpecifier
  >;
export interface UpdateWebhookSubscriptionDeliveryConfigurationPayload_ConflictFieldPolicy {
  conflictingWebhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdateWebhookSubscriptionDeliveryConfigurationPayload_SuccessKeySpecifier =
  Array<
    | 'webhookSubscription'
    | UpdateWebhookSubscriptionDeliveryConfigurationPayload_SuccessKeySpecifier
  >;
export interface UpdateWebhookSubscriptionDeliveryConfigurationPayload_SuccessFieldPolicy {
  webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UpdateWebhookSubscriptionSigningConfigurationPayloadKeySpecifier =
  Array<
    | 'webhookSubscription'
    | UpdateWebhookSubscriptionSigningConfigurationPayloadKeySpecifier
  >;
export interface UpdateWebhookSubscriptionSigningConfigurationPayloadFieldPolicy {
  webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UploadCandidatePayload_ConflictKeySpecifier = Array<
  | 'conflictingCandidate'
  | 'hiringOrganization'
  | UploadCandidatePayload_ConflictKeySpecifier
>;
export interface UploadCandidatePayload_ConflictFieldPolicy {
  conflictingCandidate?: FieldPolicy<any> | FieldReadFunction<any>;
  hiringOrganization?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type UploadCandidatePayload_SuccessKeySpecifier = Array<
  | 'candidate'
  | 'candidateProcessHistoryItems'
  | 'hiringOrganization'
  | UploadCandidatePayload_SuccessKeySpecifier
>;
export interface UploadCandidatePayload_SuccessFieldPolicy {
  candidate?: FieldPolicy<any> | FieldReadFunction<any>;
  candidateProcessHistoryItems?: FieldPolicy<any> | FieldReadFunction<any>;
  hiringOrganization?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebUrlKeySpecifier = Array<'url' | WebUrlKeySpecifier>;
export interface WebUrlFieldPolicy {
  url?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookAttemptKeySpecifier = Array<
  | 'createDateTime'
  | 'event'
  | 'id'
  | 'webhookRequest'
  | 'webhookSubscription'
  | WebhookAttemptKeySpecifier
>;
export interface WebhookAttemptFieldPolicy {
  createDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  event?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookRequest?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookAttemptEdgeKeySpecifier = Array<
  'cursor' | 'node' | WebhookAttemptEdgeKeySpecifier
>;
export interface WebhookAttemptEdgeFieldPolicy {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookAttemptsConnectionKeySpecifier = Array<
  'edges' | 'pageInfo' | WebhookAttemptsConnectionKeySpecifier
>;
export interface WebhookAttemptsConnectionFieldPolicy {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookRequestKeySpecifier = Array<
  | 'attempts'
  | 'createDateTime'
  | 'descriptionCode'
  | 'latencyMs'
  | 'requestId'
  | 'statusCode'
  | 'webhookSubscription'
  | WebhookRequestKeySpecifier
>;
export interface WebhookRequestFieldPolicy {
  attempts?: FieldPolicy<any> | FieldReadFunction<any>;
  createDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionCode?: FieldPolicy<any> | FieldReadFunction<any>;
  latencyMs?: FieldPolicy<any> | FieldReadFunction<any>;
  requestId?: FieldPolicy<any> | FieldReadFunction<any>;
  statusCode?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookRequestEdgeKeySpecifier = Array<
  'cursor' | 'node' | WebhookRequestEdgeKeySpecifier
>;
export interface WebhookRequestEdgeFieldPolicy {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookRequestsConnectionKeySpecifier = Array<
  'edges' | 'pageInfo' | WebhookRequestsConnectionKeySpecifier
>;
export interface WebhookRequestsConnectionFieldPolicy {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookSubscriptionKeySpecifier = Array<
  | 'createDateTime'
  | 'eventTypeCode'
  | 'hirer'
  | 'hirerId'
  | 'id'
  | 'maxEventsPerAttempt'
  | 'schemeId'
  | 'signingAlgorithmCode'
  | 'updateDateTime'
  | 'url'
  | 'webhookRequests'
  | 'webhookSubscriptionReplays'
  | WebhookSubscriptionKeySpecifier
>;
export interface WebhookSubscriptionFieldPolicy {
  createDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  eventTypeCode?: FieldPolicy<any> | FieldReadFunction<any>;
  hirer?: FieldPolicy<any> | FieldReadFunction<any>;
  hirerId?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  maxEventsPerAttempt?: FieldPolicy<any> | FieldReadFunction<any>;
  schemeId?: FieldPolicy<any> | FieldReadFunction<any>;
  signingAlgorithmCode?: FieldPolicy<any> | FieldReadFunction<any>;
  updateDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookRequests?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookSubscriptionReplays?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookSubscriptionEdgeKeySpecifier = Array<
  'cursor' | 'node' | WebhookSubscriptionEdgeKeySpecifier
>;
export interface WebhookSubscriptionEdgeFieldPolicy {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookSubscriptionReplayKeySpecifier = Array<
  | 'createDateTime'
  | 'id'
  | 'request'
  | 'statusCode'
  | 'updateDateTime'
  | 'webhookSubscription'
  | WebhookSubscriptionReplayKeySpecifier
>;
export interface WebhookSubscriptionReplayFieldPolicy {
  createDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  request?: FieldPolicy<any> | FieldReadFunction<any>;
  statusCode?: FieldPolicy<any> | FieldReadFunction<any>;
  updateDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookSubscriptionReplayByIdRequestKeySpecifier = Array<
  'eventIds' | 'typeCode' | WebhookSubscriptionReplayByIdRequestKeySpecifier
>;
export interface WebhookSubscriptionReplayByIdRequestFieldPolicy {
  eventIds?: FieldPolicy<any> | FieldReadFunction<any>;
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookSubscriptionReplayByRangeRequestKeySpecifier = Array<
  | 'afterDateTime'
  | 'beforeDateTime'
  | 'hirer'
  | 'replayDeliveredEventsIndicator'
  | 'typeCode'
  | WebhookSubscriptionReplayByRangeRequestKeySpecifier
>;
export interface WebhookSubscriptionReplayByRangeRequestFieldPolicy {
  afterDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  beforeDateTime?: FieldPolicy<any> | FieldReadFunction<any>;
  hirer?: FieldPolicy<any> | FieldReadFunction<any>;
  replayDeliveredEventsIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookSubscriptionReplayEdgeKeySpecifier = Array<
  'cursor' | 'node' | WebhookSubscriptionReplayEdgeKeySpecifier
>;
export interface WebhookSubscriptionReplayEdgeFieldPolicy {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookSubscriptionReplayRequestKeySpecifier = Array<
  'typeCode' | WebhookSubscriptionReplayRequestKeySpecifier
>;
export interface WebhookSubscriptionReplayRequestFieldPolicy {
  typeCode?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookSubscriptionReplaysConnectionKeySpecifier = Array<
  'edges' | 'pageInfo' | WebhookSubscriptionReplaysConnectionKeySpecifier
>;
export interface WebhookSubscriptionReplaysConnectionFieldPolicy {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export type WebhookSubscriptionsConnectionKeySpecifier = Array<
  'edges' | 'pageInfo' | WebhookSubscriptionsConnectionKeySpecifier
>;
export interface WebhookSubscriptionsConnectionFieldPolicy {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
}
export interface StrictTypedTypePolicies {
  Address?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AddressKeySpecifier
      | (() => undefined | AddressKeySpecifier);
    fields?: AddressFieldPolicy;
  };
  AddressComponent?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AddressComponentKeySpecifier
      | (() => undefined | AddressComponentKeySpecifier);
    fields?: AddressComponentFieldPolicy;
  };
  AdvertisementBranding?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AdvertisementBrandingKeySpecifier
      | (() => undefined | AdvertisementBrandingKeySpecifier);
    fields?: AdvertisementBrandingFieldPolicy;
  };
  AdvertisementBrandingEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AdvertisementBrandingEdgeKeySpecifier
      | (() => undefined | AdvertisementBrandingEdgeKeySpecifier);
    fields?: AdvertisementBrandingEdgeFieldPolicy;
  };
  AdvertisementBrandingImage?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AdvertisementBrandingImageKeySpecifier
      | (() => undefined | AdvertisementBrandingImageKeySpecifier);
    fields?: AdvertisementBrandingImageFieldPolicy;
  };
  AdvertisementBrandingsConnection?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | AdvertisementBrandingsConnectionKeySpecifier
      | (() => undefined | AdvertisementBrandingsConnectionKeySpecifier);
    fields?: AdvertisementBrandingsConnectionFieldPolicy;
  };
  AdvertisementProduct?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AdvertisementProductKeySpecifier
      | (() => undefined | AdvertisementProductKeySpecifier);
    fields?: AdvertisementProductFieldPolicy;
  };
  AdvertisementProductFeatures?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AdvertisementProductFeaturesKeySpecifier
      | (() => undefined | AdvertisementProductFeaturesKeySpecifier);
    fields?: AdvertisementProductFeaturesFieldPolicy;
  };
  AdvertisementProductFeatures_Branding?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | AdvertisementProductFeatures_BrandingKeySpecifier
      | (() => undefined | AdvertisementProductFeatures_BrandingKeySpecifier);
    fields?: AdvertisementProductFeatures_BrandingFieldPolicy;
  };
  AdvertisementProductFeatures_SearchBulletPoints?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | AdvertisementProductFeatures_SearchBulletPointsKeySpecifier
      | (() =>
          | undefined
          | AdvertisementProductFeatures_SearchBulletPointsKeySpecifier);
    fields?: AdvertisementProductFeatures_SearchBulletPointsFieldPolicy;
  };
  AdvertisementProductPaymentDetails?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | AdvertisementProductPaymentDetailsKeySpecifier
      | (() => undefined | AdvertisementProductPaymentDetailsKeySpecifier);
    fields?: AdvertisementProductPaymentDetailsFieldPolicy;
  };
  AdvertisementProductPriceDetails?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | AdvertisementProductPriceDetailsKeySpecifier
      | (() => undefined | AdvertisementProductPriceDetailsKeySpecifier);
    fields?: AdvertisementProductPriceDetailsFieldPolicy;
  };
  AdvertisementProductSellingPoint?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | AdvertisementProductSellingPointKeySpecifier
      | (() => undefined | AdvertisementProductSellingPointKeySpecifier);
    fields?: AdvertisementProductSellingPointFieldPolicy;
  };
  AdvertisementProducts?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AdvertisementProductsKeySpecifier
      | (() => undefined | AdvertisementProductsKeySpecifier);
    fields?: AdvertisementProductsFieldPolicy;
  };
  ApplicationLibraryQuestion?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ApplicationLibraryQuestionKeySpecifier
      | (() => undefined | ApplicationLibraryQuestionKeySpecifier);
    fields?: ApplicationLibraryQuestionFieldPolicy;
  };
  ApplicationLibraryQuestionChoice?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | ApplicationLibraryQuestionChoiceKeySpecifier
      | (() => undefined | ApplicationLibraryQuestionChoiceKeySpecifier);
    fields?: ApplicationLibraryQuestionChoiceFieldPolicy;
  };
  ApplicationLibraryQuestionPreferenceSelection?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | ApplicationLibraryQuestionPreferenceSelectionKeySpecifier
      | (() =>
          | undefined
          | ApplicationLibraryQuestionPreferenceSelectionKeySpecifier);
    fields?: ApplicationLibraryQuestionPreferenceSelectionFieldPolicy;
  };
  ApplicationLibraryQuestionSuggestion?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | ApplicationLibraryQuestionSuggestionKeySpecifier
      | (() => undefined | ApplicationLibraryQuestionSuggestionKeySpecifier);
    fields?: ApplicationLibraryQuestionSuggestionFieldPolicy;
  };
  ApplicationMethod?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ApplicationMethodKeySpecifier
      | (() => undefined | ApplicationMethodKeySpecifier);
    fields?: ApplicationMethodFieldPolicy;
  };
  ApplicationPrivacyConsent?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ApplicationPrivacyConsentKeySpecifier
      | (() => undefined | ApplicationPrivacyConsentKeySpecifier);
    fields?: ApplicationPrivacyConsentFieldPolicy;
  };
  ApplicationPrivacyConsentResponse?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | ApplicationPrivacyConsentResponseKeySpecifier
      | (() => undefined | ApplicationPrivacyConsentResponseKeySpecifier);
    fields?: ApplicationPrivacyConsentResponseFieldPolicy;
  };
  ApplicationQuestion?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ApplicationQuestionKeySpecifier
      | (() => undefined | ApplicationQuestionKeySpecifier);
    fields?: ApplicationQuestionFieldPolicy;
  };
  ApplicationQuestionAnswer?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ApplicationQuestionAnswerKeySpecifier
      | (() => undefined | ApplicationQuestionAnswerKeySpecifier);
    fields?: ApplicationQuestionAnswerFieldPolicy;
  };
  ApplicationQuestionChoice?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ApplicationQuestionChoiceKeySpecifier
      | (() => undefined | ApplicationQuestionChoiceKeySpecifier);
    fields?: ApplicationQuestionChoiceFieldPolicy;
  };
  ApplicationQuestionResponse?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ApplicationQuestionResponseKeySpecifier
      | (() => undefined | ApplicationQuestionResponseKeySpecifier);
    fields?: ApplicationQuestionResponseFieldPolicy;
  };
  ApplicationQuestionnaire?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ApplicationQuestionnaireKeySpecifier
      | (() => undefined | ApplicationQuestionnaireKeySpecifier);
    fields?: ApplicationQuestionnaireFieldPolicy;
  };
  ApplicationQuestionnaireComponent?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | ApplicationQuestionnaireComponentKeySpecifier
      | (() => undefined | ApplicationQuestionnaireComponentKeySpecifier);
    fields?: ApplicationQuestionnaireComponentFieldPolicy;
  };
  ApplicationQuestionnaireComponentResponse?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | ApplicationQuestionnaireComponentResponseKeySpecifier
      | (() =>
          | undefined
          | ApplicationQuestionnaireComponentResponseKeySpecifier);
    fields?: ApplicationQuestionnaireComponentResponseFieldPolicy;
  };
  ApplicationQuestionnaireSubmission?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | ApplicationQuestionnaireSubmissionKeySpecifier
      | (() => undefined | ApplicationQuestionnaireSubmissionKeySpecifier);
    fields?: ApplicationQuestionnaireSubmissionFieldPolicy;
  };
  AssociatedPositionOpening?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AssociatedPositionOpeningKeySpecifier
      | (() => undefined | AssociatedPositionOpeningKeySpecifier);
    fields?: AssociatedPositionOpeningFieldPolicy;
  };
  Attachment?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AttachmentKeySpecifier
      | (() => undefined | AttachmentKeySpecifier);
    fields?: AttachmentFieldPolicy;
  };
  Candidate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CandidateKeySpecifier
      | (() => undefined | CandidateKeySpecifier);
    fields?: CandidateFieldPolicy;
  };
  CandidateApplicationCreatedEvent?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | CandidateApplicationCreatedEventKeySpecifier
      | (() => undefined | CandidateApplicationCreatedEventKeySpecifier);
    fields?: CandidateApplicationCreatedEventFieldPolicy;
  };
  CandidatePerson?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CandidatePersonKeySpecifier
      | (() => undefined | CandidatePersonKeySpecifier);
    fields?: CandidatePersonFieldPolicy;
  };
  CandidateProcessAction?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CandidateProcessActionKeySpecifier
      | (() => undefined | CandidateProcessActionKeySpecifier);
    fields?: CandidateProcessActionFieldPolicy;
  };
  CandidateProcessHistoryItem?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CandidateProcessHistoryItemKeySpecifier
      | (() => undefined | CandidateProcessHistoryItemKeySpecifier);
    fields?: CandidateProcessHistoryItemFieldPolicy;
  };
  CandidateProcessHistoryItemConnection?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | CandidateProcessHistoryItemConnectionKeySpecifier
      | (() => undefined | CandidateProcessHistoryItemConnectionKeySpecifier);
    fields?: CandidateProcessHistoryItemConnectionFieldPolicy;
  };
  CandidateProcessHistoryItemEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CandidateProcessHistoryItemEdgeKeySpecifier
      | (() => undefined | CandidateProcessHistoryItemEdgeKeySpecifier);
    fields?: CandidateProcessHistoryItemEdgeFieldPolicy;
  };
  CandidateProcessParty?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CandidateProcessPartyKeySpecifier
      | (() => undefined | CandidateProcessPartyKeySpecifier);
    fields?: CandidateProcessPartyFieldPolicy;
  };
  CandidateProcessStatus?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CandidateProcessStatusKeySpecifier
      | (() => undefined | CandidateProcessStatusKeySpecifier);
    fields?: CandidateProcessStatusFieldPolicy;
  };
  CandidateProfile?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CandidateProfileKeySpecifier
      | (() => undefined | CandidateProfileKeySpecifier);
    fields?: CandidateProfileFieldPolicy;
  };
  CandidateProfilePurchasedEvent?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CandidateProfilePurchasedEventKeySpecifier
      | (() => undefined | CandidateProfilePurchasedEventKeySpecifier);
    fields?: CandidateProfilePurchasedEventFieldPolicy;
  };
  CandidateSource?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CandidateSourceKeySpecifier
      | (() => undefined | CandidateSourceKeySpecifier);
    fields?: CandidateSourceFieldPolicy;
  };
  Certification?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CertificationKeySpecifier
      | (() => undefined | CertificationKeySpecifier);
    fields?: CertificationFieldPolicy;
  };
  ClosePostedPositionProfilePayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | ClosePostedPositionProfilePayloadKeySpecifier
      | (() => undefined | ClosePostedPositionProfilePayloadKeySpecifier);
    fields?: ClosePostedPositionProfilePayloadFieldPolicy;
  };
  ClosePostedPositionProfile_PositionProfilePayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | ClosePostedPositionProfile_PositionProfilePayloadKeySpecifier
      | (() =>
          | undefined
          | ClosePostedPositionProfile_PositionProfilePayloadKeySpecifier);
    fields?: ClosePostedPositionProfile_PositionProfilePayloadFieldPolicy;
  };
  Communication?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CommunicationKeySpecifier
      | (() => undefined | CommunicationKeySpecifier);
    fields?: CommunicationFieldPolicy;
  };
  CreateApplicationQuestionnairePayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | CreateApplicationQuestionnairePayloadKeySpecifier
      | (() => undefined | CreateApplicationQuestionnairePayloadKeySpecifier);
    fields?: CreateApplicationQuestionnairePayloadFieldPolicy;
  };
  CreateCandidateProcessHistoryItemPayload_Conflict?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | CreateCandidateProcessHistoryItemPayload_ConflictKeySpecifier
      | (() =>
          | undefined
          | CreateCandidateProcessHistoryItemPayload_ConflictKeySpecifier);
    fields?: CreateCandidateProcessHistoryItemPayload_ConflictFieldPolicy;
  };
  CreateCandidateProcessHistoryItemPayload_Success?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | CreateCandidateProcessHistoryItemPayload_SuccessKeySpecifier
      | (() =>
          | undefined
          | CreateCandidateProcessHistoryItemPayload_SuccessKeySpecifier);
    fields?: CreateCandidateProcessHistoryItemPayload_SuccessFieldPolicy;
  };
  CreatePositionOpeningPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreatePositionOpeningPayloadKeySpecifier
      | (() => undefined | CreatePositionOpeningPayloadKeySpecifier);
    fields?: CreatePositionOpeningPayloadFieldPolicy;
  };
  CreateUnpostedPositionProfileForOpeningPayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | CreateUnpostedPositionProfileForOpeningPayloadKeySpecifier
      | (() =>
          | undefined
          | CreateUnpostedPositionProfileForOpeningPayloadKeySpecifier);
    fields?: CreateUnpostedPositionProfileForOpeningPayloadFieldPolicy;
  };
  CreateWebhookSubscriptionPayload_Conflict?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | CreateWebhookSubscriptionPayload_ConflictKeySpecifier
      | (() =>
          | undefined
          | CreateWebhookSubscriptionPayload_ConflictKeySpecifier);
    fields?: CreateWebhookSubscriptionPayload_ConflictFieldPolicy;
  };
  CreateWebhookSubscriptionPayload_Success?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | CreateWebhookSubscriptionPayload_SuccessKeySpecifier
      | (() =>
          | undefined
          | CreateWebhookSubscriptionPayload_SuccessKeySpecifier);
    fields?: CreateWebhookSubscriptionPayload_SuccessFieldPolicy;
  };
  Currency?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CurrencyKeySpecifier
      | (() => undefined | CurrencyKeySpecifier);
    fields?: CurrencyFieldPolicy;
  };
  CurrencyMinorUnit?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CurrencyMinorUnitKeySpecifier
      | (() => undefined | CurrencyMinorUnitKeySpecifier);
    fields?: CurrencyMinorUnitFieldPolicy;
  };
  DeleteCandidateProcessHistoryItemPayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | DeleteCandidateProcessHistoryItemPayloadKeySpecifier
      | (() =>
          | undefined
          | DeleteCandidateProcessHistoryItemPayloadKeySpecifier);
    fields?: DeleteCandidateProcessHistoryItemPayloadFieldPolicy;
  };
  DeletePositionOpeningPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | DeletePositionOpeningPayloadKeySpecifier
      | (() => undefined | DeletePositionOpeningPayloadKeySpecifier);
    fields?: DeletePositionOpeningPayloadFieldPolicy;
  };
  DeleteUnpostedPositionProfilePayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | DeleteUnpostedPositionProfilePayloadKeySpecifier
      | (() => undefined | DeleteUnpostedPositionProfilePayloadKeySpecifier);
    fields?: DeleteUnpostedPositionProfilePayloadFieldPolicy;
  };
  DeleteUploadedCandidatePayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | DeleteUploadedCandidatePayloadKeySpecifier
      | (() => undefined | DeleteUploadedCandidatePayloadKeySpecifier);
    fields?: DeleteUploadedCandidatePayloadFieldPolicy;
  };
  DeleteWebhookSubscriptionPayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | DeleteWebhookSubscriptionPayloadKeySpecifier
      | (() => undefined | DeleteWebhookSubscriptionPayloadKeySpecifier);
    fields?: DeleteWebhookSubscriptionPayloadFieldPolicy;
  };
  DistributionGuidelines?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | DistributionGuidelinesKeySpecifier
      | (() => undefined | DistributionGuidelinesKeySpecifier);
    fields?: DistributionGuidelinesFieldPolicy;
  };
  EducationAttendance?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EducationAttendanceKeySpecifier
      | (() => undefined | EducationAttendanceKeySpecifier);
    fields?: EducationAttendanceFieldPolicy;
  };
  EducationDegree?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EducationDegreeKeySpecifier
      | (() => undefined | EducationDegreeKeySpecifier);
    fields?: EducationDegreeFieldPolicy;
  };
  EffectiveTimePeriod?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EffectiveTimePeriodKeySpecifier
      | (() => undefined | EffectiveTimePeriodKeySpecifier);
    fields?: EffectiveTimePeriodFieldPolicy;
  };
  Email?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EmailKeySpecifier
      | (() => undefined | EmailKeySpecifier);
    fields?: EmailFieldPolicy;
  };
  EmployerHistory?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EmployerHistoryKeySpecifier
      | (() => undefined | EmployerHistoryKeySpecifier);
    fields?: EmployerHistoryFieldPolicy;
  };
  Event?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EventKeySpecifier
      | (() => undefined | EventKeySpecifier);
    fields?: EventFieldPolicy;
  };
  EventEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EventEdgeKeySpecifier
      | (() => undefined | EventEdgeKeySpecifier);
    fields?: EventEdgeFieldPolicy;
  };
  EventsConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EventsConnectionKeySpecifier
      | (() => undefined | EventsConnectionKeySpecifier);
    fields?: EventsConnectionFieldPolicy;
  };
  GeoLocation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | GeoLocationKeySpecifier
      | (() => undefined | GeoLocationKeySpecifier);
    fields?: GeoLocationFieldPolicy;
  };
  HirerRelationshipChangedEvent?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | HirerRelationshipChangedEventKeySpecifier
      | (() => undefined | HirerRelationshipChangedEventKeySpecifier);
    fields?: HirerRelationshipChangedEventFieldPolicy;
  };
  HiringOrganization?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | HiringOrganizationKeySpecifier
      | (() => undefined | HiringOrganizationKeySpecifier);
    fields?: HiringOrganizationFieldPolicy;
  };
  HiringOrganizationApiCapabilities?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | HiringOrganizationApiCapabilitiesKeySpecifier
      | (() => undefined | HiringOrganizationApiCapabilitiesKeySpecifier);
    fields?: HiringOrganizationApiCapabilitiesFieldPolicy;
  };
  HiringOrganizationEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | HiringOrganizationEdgeKeySpecifier
      | (() => undefined | HiringOrganizationEdgeKeySpecifier);
    fields?: HiringOrganizationEdgeFieldPolicy;
  };
  HiringOrganizationsConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | HiringOrganizationsConnectionKeySpecifier
      | (() => undefined | HiringOrganizationsConnectionKeySpecifier);
    fields?: HiringOrganizationsConnectionFieldPolicy;
  };
  JobCategory?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | JobCategoryKeySpecifier
      | (() => undefined | JobCategoryKeySpecifier);
    fields?: JobCategoryFieldPolicy;
  };
  JobCategorySuggestionChoice?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | JobCategorySuggestionChoiceKeySpecifier
      | (() => undefined | JobCategorySuggestionChoiceKeySpecifier);
    fields?: JobCategorySuggestionChoiceFieldPolicy;
  };
  Location?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LocationKeySpecifier
      | (() => undefined | LocationKeySpecifier);
    fields?: LocationFieldPolicy;
  };
  LocationSuggestion?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LocationSuggestionKeySpecifier
      | (() => undefined | LocationSuggestionKeySpecifier);
    fields?: LocationSuggestionFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  ObjectIdentifier?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ObjectIdentifierKeySpecifier
      | (() => undefined | ObjectIdentifierKeySpecifier);
    fields?: ObjectIdentifierFieldPolicy;
  };
  Organization?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | OrganizationKeySpecifier
      | (() => undefined | OrganizationKeySpecifier);
    fields?: OrganizationFieldPolicy;
  };
  PageInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PageInfoKeySpecifier
      | (() => undefined | PageInfoKeySpecifier);
    fields?: PageInfoFieldPolicy;
  };
  PartnerOrganization?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PartnerOrganizationKeySpecifier
      | (() => undefined | PartnerOrganizationKeySpecifier);
    fields?: PartnerOrganizationFieldPolicy;
  };
  PayType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PayTypeKeySpecifier
      | (() => undefined | PayTypeKeySpecifier);
    fields?: PayTypeFieldPolicy;
  };
  PersonCompetency?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PersonCompetencyKeySpecifier
      | (() => undefined | PersonCompetencyKeySpecifier);
    fields?: PersonCompetencyFieldPolicy;
  };
  PersonName?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PersonNameKeySpecifier
      | (() => undefined | PersonNameKeySpecifier);
    fields?: PersonNameFieldPolicy;
  };
  Phone?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PhoneKeySpecifier
      | (() => undefined | PhoneKeySpecifier);
    fields?: PhoneFieldPolicy;
  };
  PositionFormattedDescription?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PositionFormattedDescriptionKeySpecifier
      | (() => undefined | PositionFormattedDescriptionKeySpecifier);
    fields?: PositionFormattedDescriptionFieldPolicy;
  };
  PositionFormattedDescriptionIdentifier?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | PositionFormattedDescriptionIdentifierKeySpecifier
      | (() => undefined | PositionFormattedDescriptionIdentifierKeySpecifier);
    fields?: PositionFormattedDescriptionIdentifierFieldPolicy;
  };
  PositionHistory?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PositionHistoryKeySpecifier
      | (() => undefined | PositionHistoryKeySpecifier);
    fields?: PositionHistoryFieldPolicy;
  };
  PositionOpening?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PositionOpeningKeySpecifier
      | (() => undefined | PositionOpeningKeySpecifier);
    fields?: PositionOpeningFieldPolicy;
  };
  PositionOpeningConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PositionOpeningConnectionKeySpecifier
      | (() => undefined | PositionOpeningConnectionKeySpecifier);
    fields?: PositionOpeningConnectionFieldPolicy;
  };
  PositionOpeningEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PositionOpeningEdgeKeySpecifier
      | (() => undefined | PositionOpeningEdgeKeySpecifier);
    fields?: PositionOpeningEdgeFieldPolicy;
  };
  PositionPreference?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PositionPreferenceKeySpecifier
      | (() => undefined | PositionPreferenceKeySpecifier);
    fields?: PositionPreferenceFieldPolicy;
  };
  PositionProfile?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PositionProfileKeySpecifier
      | (() => undefined | PositionProfileKeySpecifier);
    fields?: PositionProfileFieldPolicy;
  };
  PositionProfileClosedEvent?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PositionProfileClosedEventKeySpecifier
      | (() => undefined | PositionProfileClosedEventKeySpecifier);
    fields?: PositionProfileClosedEventFieldPolicy;
  };
  PositionProfileConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PositionProfileConnectionKeySpecifier
      | (() => undefined | PositionProfileConnectionKeySpecifier);
    fields?: PositionProfileConnectionFieldPolicy;
  };
  PositionProfileEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PositionProfileEdgeKeySpecifier
      | (() => undefined | PositionProfileEdgeKeySpecifier);
    fields?: PositionProfileEdgeFieldPolicy;
  };
  PositionProfilePostedEvent?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PositionProfilePostedEventKeySpecifier
      | (() => undefined | PositionProfilePostedEventKeySpecifier);
    fields?: PositionProfilePostedEventFieldPolicy;
  };
  PostPositionPayload_Conflict?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PostPositionPayload_ConflictKeySpecifier
      | (() => undefined | PostPositionPayload_ConflictKeySpecifier);
    fields?: PostPositionPayload_ConflictFieldPolicy;
  };
  PostPositionPayload_Success?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PostPositionPayload_SuccessKeySpecifier
      | (() => undefined | PostPositionPayload_SuccessKeySpecifier);
    fields?: PostPositionPayload_SuccessFieldPolicy;
  };
  PostPositionProfileForOpeningPayload_Conflict?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | PostPositionProfileForOpeningPayload_ConflictKeySpecifier
      | (() =>
          | undefined
          | PostPositionProfileForOpeningPayload_ConflictKeySpecifier);
    fields?: PostPositionProfileForOpeningPayload_ConflictFieldPolicy;
  };
  PostPositionProfileForOpeningPayload_Success?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | PostPositionProfileForOpeningPayload_SuccessKeySpecifier
      | (() =>
          | undefined
          | PostPositionProfileForOpeningPayload_SuccessKeySpecifier);
    fields?: PostPositionProfileForOpeningPayload_SuccessFieldPolicy;
  };
  PostPositionProfileForOpening_PositionProfilePayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | PostPositionProfileForOpening_PositionProfilePayloadKeySpecifier
      | (() =>
          | undefined
          | PostPositionProfileForOpening_PositionProfilePayloadKeySpecifier);
    fields?: PostPositionProfileForOpening_PositionProfilePayloadFieldPolicy;
  };
  PostPosition_PositionOpeningPayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | PostPosition_PositionOpeningPayloadKeySpecifier
      | (() => undefined | PostPosition_PositionOpeningPayloadKeySpecifier);
    fields?: PostPosition_PositionOpeningPayloadFieldPolicy;
  };
  PostPosition_PositionProfilePayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | PostPosition_PositionProfilePayloadKeySpecifier
      | (() => undefined | PostPosition_PositionProfilePayloadKeySpecifier);
    fields?: PostPosition_PositionProfilePayloadFieldPolicy;
  };
  PostedPositionProfile?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PostedPositionProfileKeySpecifier
      | (() => undefined | PostedPositionProfileKeySpecifier);
    fields?: PostedPositionProfileFieldPolicy;
  };
  PostedPositionProfilePreview?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PostedPositionProfilePreviewKeySpecifier
      | (() => undefined | PostedPositionProfilePreviewKeySpecifier);
    fields?: PostedPositionProfilePreviewFieldPolicy;
  };
  PostedPositionProfile_AdvertisementProduct?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | PostedPositionProfile_AdvertisementProductKeySpecifier
      | (() =>
          | undefined
          | PostedPositionProfile_AdvertisementProductKeySpecifier);
    fields?: PostedPositionProfile_AdvertisementProductFieldPolicy;
  };
  PostingInstruction?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PostingInstructionKeySpecifier
      | (() => undefined | PostingInstructionKeySpecifier);
    fields?: PostingInstructionFieldPolicy;
  };
  PostingRequester?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PostingRequesterKeySpecifier
      | (() => undefined | PostingRequesterKeySpecifier);
    fields?: PostingRequesterFieldPolicy;
  };
  PreferredLocation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PreferredLocationKeySpecifier
      | (() => undefined | PreferredLocationKeySpecifier);
    fields?: PreferredLocationFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  RemunerationAmount?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | RemunerationAmountKeySpecifier
      | (() => undefined | RemunerationAmountKeySpecifier);
    fields?: RemunerationAmountFieldPolicy;
  };
  RemunerationPackage?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | RemunerationPackageKeySpecifier
      | (() => undefined | RemunerationPackageKeySpecifier);
    fields?: RemunerationPackageFieldPolicy;
  };
  RemunerationRange?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | RemunerationRangeKeySpecifier
      | (() => undefined | RemunerationRangeKeySpecifier);
    fields?: RemunerationRangeFieldPolicy;
  };
  ReplayWebhookSubscriptionPayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | ReplayWebhookSubscriptionPayloadKeySpecifier
      | (() => undefined | ReplayWebhookSubscriptionPayloadKeySpecifier);
    fields?: ReplayWebhookSubscriptionPayloadFieldPolicy;
  };
  SeekAnzAdProduct?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SeekAnzAdProductKeySpecifier
      | (() => undefined | SeekAnzAdProductKeySpecifier);
    fields?: SeekAnzAdProductFieldPolicy;
  };
  SeekAnzAdProductCheckoutEstimate?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | SeekAnzAdProductCheckoutEstimateKeySpecifier
      | (() => undefined | SeekAnzAdProductCheckoutEstimateKeySpecifier);
    fields?: SeekAnzAdProductCheckoutEstimateFieldPolicy;
  };
  SeekAnzAdProductContractConsumption?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | SeekAnzAdProductContractConsumptionKeySpecifier
      | (() => undefined | SeekAnzAdProductContractConsumptionKeySpecifier);
    fields?: SeekAnzAdProductContractConsumptionFieldPolicy;
  };
  SeekAnzAdProductFeatures?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SeekAnzAdProductFeaturesKeySpecifier
      | (() => undefined | SeekAnzAdProductFeaturesKeySpecifier);
    fields?: SeekAnzAdProductFeaturesFieldPolicy;
  };
  SeekAnzAdProductMessage?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SeekAnzAdProductMessageKeySpecifier
      | (() => undefined | SeekAnzAdProductMessageKeySpecifier);
    fields?: SeekAnzAdProductMessageFieldPolicy;
  };
  SeekAnzAdProductPrice?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SeekAnzAdProductPriceKeySpecifier
      | (() => undefined | SeekAnzAdProductPriceKeySpecifier);
    fields?: SeekAnzAdProductPriceFieldPolicy;
  };
  SeekProcessHistoryItemSource?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SeekProcessHistoryItemSourceKeySpecifier
      | (() => undefined | SeekProcessHistoryItemSourceKeySpecifier);
    fields?: SeekProcessHistoryItemSourceFieldPolicy;
  };
  SeekVideo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SeekVideoKeySpecifier
      | (() => undefined | SeekVideoKeySpecifier);
    fields?: SeekVideoFieldPolicy;
  };
  SelfOrganizations?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SelfOrganizationsKeySpecifier
      | (() => undefined | SelfOrganizationsKeySpecifier);
    fields?: SelfOrganizationsFieldPolicy;
  };
  SpecifiedPerson?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SpecifiedPersonKeySpecifier
      | (() => undefined | SpecifiedPersonKeySpecifier);
    fields?: SpecifiedPersonFieldPolicy;
  };
  UnpostedPositionProfile?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UnpostedPositionProfileKeySpecifier
      | (() => undefined | UnpostedPositionProfileKeySpecifier);
    fields?: UnpostedPositionProfileFieldPolicy;
  };
  UpdateCandidateProcessHistoryItemPayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdateCandidateProcessHistoryItemPayloadKeySpecifier
      | (() =>
          | undefined
          | UpdateCandidateProcessHistoryItemPayloadKeySpecifier);
    fields?: UpdateCandidateProcessHistoryItemPayloadFieldPolicy;
  };
  UpdatePositionOpeningPersonContactsPayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdatePositionOpeningPersonContactsPayloadKeySpecifier
      | (() =>
          | undefined
          | UpdatePositionOpeningPersonContactsPayloadKeySpecifier);
    fields?: UpdatePositionOpeningPersonContactsPayloadFieldPolicy;
  };
  UpdatePositionOpeningStatusPayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdatePositionOpeningStatusPayloadKeySpecifier
      | (() => undefined | UpdatePositionOpeningStatusPayloadKeySpecifier);
    fields?: UpdatePositionOpeningStatusPayloadFieldPolicy;
  };
  UpdatePostedPositionProfilePayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdatePostedPositionProfilePayloadKeySpecifier
      | (() => undefined | UpdatePostedPositionProfilePayloadKeySpecifier);
    fields?: UpdatePostedPositionProfilePayloadFieldPolicy;
  };
  UpdatePostedPositionProfile_PositionProfilePayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdatePostedPositionProfile_PositionProfilePayloadKeySpecifier
      | (() =>
          | undefined
          | UpdatePostedPositionProfile_PositionProfilePayloadKeySpecifier);
    fields?: UpdatePostedPositionProfile_PositionProfilePayloadFieldPolicy;
  };
  UpdateUnpostedPositionProfilePayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdateUnpostedPositionProfilePayloadKeySpecifier
      | (() => undefined | UpdateUnpostedPositionProfilePayloadKeySpecifier);
    fields?: UpdateUnpostedPositionProfilePayloadFieldPolicy;
  };
  UpdateUploadedCandidatePersonPayload_Conflict?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdateUploadedCandidatePersonPayload_ConflictKeySpecifier
      | (() =>
          | undefined
          | UpdateUploadedCandidatePersonPayload_ConflictKeySpecifier);
    fields?: UpdateUploadedCandidatePersonPayload_ConflictFieldPolicy;
  };
  UpdateUploadedCandidatePersonPayload_Success?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdateUploadedCandidatePersonPayload_SuccessKeySpecifier
      | (() =>
          | undefined
          | UpdateUploadedCandidatePersonPayload_SuccessKeySpecifier);
    fields?: UpdateUploadedCandidatePersonPayload_SuccessFieldPolicy;
  };
  UpdateUploadedCandidateProfileActionsPayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdateUploadedCandidateProfileActionsPayloadKeySpecifier
      | (() =>
          | undefined
          | UpdateUploadedCandidateProfileActionsPayloadKeySpecifier);
    fields?: UpdateUploadedCandidateProfileActionsPayloadFieldPolicy;
  };
  UpdateUploadedCandidateProfileDatesPayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdateUploadedCandidateProfileDatesPayloadKeySpecifier
      | (() =>
          | undefined
          | UpdateUploadedCandidateProfileDatesPayloadKeySpecifier);
    fields?: UpdateUploadedCandidateProfileDatesPayloadFieldPolicy;
  };
  UpdateUploadedCandidateProfilePositionPreferencesPayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdateUploadedCandidateProfilePositionPreferencesPayloadKeySpecifier
      | (() =>
          | undefined
          | UpdateUploadedCandidateProfilePositionPreferencesPayloadKeySpecifier);
    fields?: UpdateUploadedCandidateProfilePositionPreferencesPayloadFieldPolicy;
  };
  UpdateWebhookSubscriptionDeliveryConfigurationPayload_Conflict?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdateWebhookSubscriptionDeliveryConfigurationPayload_ConflictKeySpecifier
      | (() =>
          | undefined
          | UpdateWebhookSubscriptionDeliveryConfigurationPayload_ConflictKeySpecifier);
    fields?: UpdateWebhookSubscriptionDeliveryConfigurationPayload_ConflictFieldPolicy;
  };
  UpdateWebhookSubscriptionDeliveryConfigurationPayload_Success?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdateWebhookSubscriptionDeliveryConfigurationPayload_SuccessKeySpecifier
      | (() =>
          | undefined
          | UpdateWebhookSubscriptionDeliveryConfigurationPayload_SuccessKeySpecifier);
    fields?: UpdateWebhookSubscriptionDeliveryConfigurationPayload_SuccessFieldPolicy;
  };
  UpdateWebhookSubscriptionSigningConfigurationPayload?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdateWebhookSubscriptionSigningConfigurationPayloadKeySpecifier
      | (() =>
          | undefined
          | UpdateWebhookSubscriptionSigningConfigurationPayloadKeySpecifier);
    fields?: UpdateWebhookSubscriptionSigningConfigurationPayloadFieldPolicy;
  };
  UploadCandidatePayload_Conflict?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UploadCandidatePayload_ConflictKeySpecifier
      | (() => undefined | UploadCandidatePayload_ConflictKeySpecifier);
    fields?: UploadCandidatePayload_ConflictFieldPolicy;
  };
  UploadCandidatePayload_Success?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UploadCandidatePayload_SuccessKeySpecifier
      | (() => undefined | UploadCandidatePayload_SuccessKeySpecifier);
    fields?: UploadCandidatePayload_SuccessFieldPolicy;
  };
  WebUrl?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | WebUrlKeySpecifier
      | (() => undefined | WebUrlKeySpecifier);
    fields?: WebUrlFieldPolicy;
  };
  WebhookAttempt?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | WebhookAttemptKeySpecifier
      | (() => undefined | WebhookAttemptKeySpecifier);
    fields?: WebhookAttemptFieldPolicy;
  };
  WebhookAttemptEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | WebhookAttemptEdgeKeySpecifier
      | (() => undefined | WebhookAttemptEdgeKeySpecifier);
    fields?: WebhookAttemptEdgeFieldPolicy;
  };
  WebhookAttemptsConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | WebhookAttemptsConnectionKeySpecifier
      | (() => undefined | WebhookAttemptsConnectionKeySpecifier);
    fields?: WebhookAttemptsConnectionFieldPolicy;
  };
  WebhookRequest?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | WebhookRequestKeySpecifier
      | (() => undefined | WebhookRequestKeySpecifier);
    fields?: WebhookRequestFieldPolicy;
  };
  WebhookRequestEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | WebhookRequestEdgeKeySpecifier
      | (() => undefined | WebhookRequestEdgeKeySpecifier);
    fields?: WebhookRequestEdgeFieldPolicy;
  };
  WebhookRequestsConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | WebhookRequestsConnectionKeySpecifier
      | (() => undefined | WebhookRequestsConnectionKeySpecifier);
    fields?: WebhookRequestsConnectionFieldPolicy;
  };
  WebhookSubscription?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | WebhookSubscriptionKeySpecifier
      | (() => undefined | WebhookSubscriptionKeySpecifier);
    fields?: WebhookSubscriptionFieldPolicy;
  };
  WebhookSubscriptionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | WebhookSubscriptionEdgeKeySpecifier
      | (() => undefined | WebhookSubscriptionEdgeKeySpecifier);
    fields?: WebhookSubscriptionEdgeFieldPolicy;
  };
  WebhookSubscriptionReplay?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | WebhookSubscriptionReplayKeySpecifier
      | (() => undefined | WebhookSubscriptionReplayKeySpecifier);
    fields?: WebhookSubscriptionReplayFieldPolicy;
  };
  WebhookSubscriptionReplayByIdRequest?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | WebhookSubscriptionReplayByIdRequestKeySpecifier
      | (() => undefined | WebhookSubscriptionReplayByIdRequestKeySpecifier);
    fields?: WebhookSubscriptionReplayByIdRequestFieldPolicy;
  };
  WebhookSubscriptionReplayByRangeRequest?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | WebhookSubscriptionReplayByRangeRequestKeySpecifier
      | (() => undefined | WebhookSubscriptionReplayByRangeRequestKeySpecifier);
    fields?: WebhookSubscriptionReplayByRangeRequestFieldPolicy;
  };
  WebhookSubscriptionReplayEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | WebhookSubscriptionReplayEdgeKeySpecifier
      | (() => undefined | WebhookSubscriptionReplayEdgeKeySpecifier);
    fields?: WebhookSubscriptionReplayEdgeFieldPolicy;
  };
  WebhookSubscriptionReplayRequest?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | WebhookSubscriptionReplayRequestKeySpecifier
      | (() => undefined | WebhookSubscriptionReplayRequestKeySpecifier);
    fields?: WebhookSubscriptionReplayRequestFieldPolicy;
  };
  WebhookSubscriptionReplaysConnection?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | WebhookSubscriptionReplaysConnectionKeySpecifier
      | (() => undefined | WebhookSubscriptionReplaysConnectionKeySpecifier);
    fields?: WebhookSubscriptionReplaysConnectionFieldPolicy;
  };
  WebhookSubscriptionsConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | WebhookSubscriptionsConnectionKeySpecifier
      | (() => undefined | WebhookSubscriptionsConnectionKeySpecifier);
    fields?: WebhookSubscriptionsConnectionFieldPolicy;
  };
}
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
