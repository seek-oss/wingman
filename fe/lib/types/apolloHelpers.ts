import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AddressKeySpecifier = ('line' | 'extendedLines' | 'countryCode' | 'countrySubDivisions' | 'city' | 'postalCode' | 'geoLocation' | 'formattedAddress' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
	line?: FieldPolicy<any> | FieldReadFunction<any>,
	extendedLines?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	countrySubDivisions?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	geoLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	formattedAddress?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressComponentKeySpecifier = ('type' | 'value' | AddressComponentKeySpecifier)[];
export type AddressComponentFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdvertisementBrandingKeySpecifier = ('id' | 'name' | 'images' | 'hirer' | AdvertisementBrandingKeySpecifier)[];
export type AdvertisementBrandingFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	hirer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdvertisementBrandingEdgeKeySpecifier = ('cursor' | 'node' | AdvertisementBrandingEdgeKeySpecifier)[];
export type AdvertisementBrandingEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdvertisementBrandingImageKeySpecifier = ('typeCode' | 'url' | AdvertisementBrandingImageKeySpecifier)[];
export type AdvertisementBrandingImageFieldPolicy = {
	typeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdvertisementBrandingsConnectionKeySpecifier = ('edges' | 'pageInfo' | AdvertisementBrandingsConnectionKeySpecifier)[];
export type AdvertisementBrandingsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationMethodKeySpecifier = ('applicationUri' | 'applicationEmail' | ApplicationMethodKeySpecifier)[];
export type ApplicationMethodFieldPolicy = {
	applicationUri?: FieldPolicy<any> | FieldReadFunction<any>,
	applicationEmail?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationPrivacyConsentKeySpecifier = ('id' | 'componentTypeCode' | 'value' | 'privacyPolicyUrl' | 'descriptionHtml' | ApplicationPrivacyConsentKeySpecifier)[];
export type ApplicationPrivacyConsentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	componentTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	privacyPolicyUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionHtml?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationPrivacyConsentResponseKeySpecifier = ('component' | 'componentTypeCode' | 'consentGivenIndicator' | ApplicationPrivacyConsentResponseKeySpecifier)[];
export type ApplicationPrivacyConsentResponseFieldPolicy = {
	component?: FieldPolicy<any> | FieldReadFunction<any>,
	componentTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	consentGivenIndicator?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationQuestionKeySpecifier = ('id' | 'componentTypeCode' | 'value' | 'questionHtml' | 'responseTypeCode' | 'responseChoice' | ApplicationQuestionKeySpecifier)[];
export type ApplicationQuestionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	componentTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	questionHtml?: FieldPolicy<any> | FieldReadFunction<any>,
	responseTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	responseChoice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationQuestionAnswerKeySpecifier = ('choice' | 'answer' | ApplicationQuestionAnswerKeySpecifier)[];
export type ApplicationQuestionAnswerFieldPolicy = {
	choice?: FieldPolicy<any> | FieldReadFunction<any>,
	answer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationQuestionChoiceKeySpecifier = ('id' | 'text' | 'value' | 'preferredIndicator' | ApplicationQuestionChoiceKeySpecifier)[];
export type ApplicationQuestionChoiceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredIndicator?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationQuestionResponseKeySpecifier = ('component' | 'componentTypeCode' | 'answers' | 'score' | ApplicationQuestionResponseKeySpecifier)[];
export type ApplicationQuestionResponseFieldPolicy = {
	component?: FieldPolicy<any> | FieldReadFunction<any>,
	componentTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	answers?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationQuestionnaireKeySpecifier = ('id' | 'components' | ApplicationQuestionnaireKeySpecifier)[];
export type ApplicationQuestionnaireFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationQuestionnaireComponentKeySpecifier = ('id' | 'componentTypeCode' | 'value' | ApplicationQuestionnaireComponentKeySpecifier)[];
export type ApplicationQuestionnaireComponentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	componentTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationQuestionnaireComponentResponseKeySpecifier = ('component' | 'componentTypeCode' | ApplicationQuestionnaireComponentResponseKeySpecifier)[];
export type ApplicationQuestionnaireComponentResponseFieldPolicy = {
	component?: FieldPolicy<any> | FieldReadFunction<any>,
	componentTypeCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationQuestionnaireSubmissionKeySpecifier = ('questionnaire' | 'responses' | 'score' | ApplicationQuestionnaireSubmissionKeySpecifier)[];
export type ApplicationQuestionnaireSubmissionFieldPolicy = {
	questionnaire?: FieldPolicy<any> | FieldReadFunction<any>,
	responses?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssociatedPositionOpeningKeySpecifier = ('positionOpeningId' | 'positionOpening' | 'positionUri' | 'candidateAppliedIndicator' | AssociatedPositionOpeningKeySpecifier)[];
export type AssociatedPositionOpeningFieldPolicy = {
	positionOpeningId?: FieldPolicy<any> | FieldReadFunction<any>,
	positionOpening?: FieldPolicy<any> | FieldReadFunction<any>,
	positionUri?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateAppliedIndicator?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttachmentKeySpecifier = ('id' | 'url' | 'descriptions' | 'seekRoleCode' | 'seekRole' | AttachmentKeySpecifier)[];
export type AttachmentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	seekRoleCode?: FieldPolicy<any> | FieldReadFunction<any>,
	seekRole?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandidateKeySpecifier = ('documentId' | 'seekPrimaryEmailAddress' | 'distributionGuidelines' | 'person' | 'profiles' | CandidateKeySpecifier)[];
export type CandidateFieldPolicy = {
	documentId?: FieldPolicy<any> | FieldReadFunction<any>,
	seekPrimaryEmailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	distributionGuidelines?: FieldPolicy<any> | FieldReadFunction<any>,
	person?: FieldPolicy<any> | FieldReadFunction<any>,
	profiles?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandidateApplicationCreatedEventKeySpecifier = ('id' | 'schemeId' | 'typeCode' | 'createDateTime' | 'candidateApplicationProfileId' | 'candidateId' | 'candidate' | 'candidateApplicationProfile' | 'webhookAttempts' | CandidateApplicationCreatedEventKeySpecifier)[];
export type CandidateApplicationCreatedEventFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	schemeId?: FieldPolicy<any> | FieldReadFunction<any>,
	typeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	createDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateApplicationProfileId?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateId?: FieldPolicy<any> | FieldReadFunction<any>,
	candidate?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateApplicationProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookAttempts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandidatePersonKeySpecifier = ('name' | 'communication' | CandidatePersonKeySpecifier)[];
export type CandidatePersonFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	communication?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandidateProcessActionKeySpecifier = ('code' | 'description' | 'name' | 'seekUrl' | CandidateProcessActionKeySpecifier)[];
export type CandidateProcessActionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	seekUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandidateProcessHistoryItemKeySpecifier = ('id' | 'candidateProfile' | 'actionDate' | 'action' | 'status' | 'positionProfile' | 'seekSource' | 'primaryParties' | CandidateProcessHistoryItemKeySpecifier)[];
export type CandidateProcessHistoryItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	actionDate?: FieldPolicy<any> | FieldReadFunction<any>,
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	positionProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	seekSource?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryParties?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandidateProcessHistoryItemConnectionKeySpecifier = ('edges' | 'pageInfo' | CandidateProcessHistoryItemConnectionKeySpecifier)[];
export type CandidateProcessHistoryItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandidateProcessHistoryItemEdgeKeySpecifier = ('cursor' | 'node' | CandidateProcessHistoryItemEdgeKeySpecifier)[];
export type CandidateProcessHistoryItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandidateProcessPartyKeySpecifier = ('person' | 'organization' | CandidateProcessPartyKeySpecifier)[];
export type CandidateProcessPartyFieldPolicy = {
	person?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandidateProcessStatusKeySpecifier = ('code' | CandidateProcessStatusKeySpecifier)[];
export type CandidateProcessStatusFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandidateProfileKeySpecifier = ('candidate' | 'profileId' | 'createDateTime' | 'associatedPositionOpenings' | 'associatedPositionProfile' | 'attachments' | 'employment' | 'education' | 'qualifications' | 'certifications' | 'candidateSources' | 'positionPreferences' | 'updateDateTime' | 'seekActions' | 'seekProcessHistory' | 'seekQuestionnaireSubmission' | CandidateProfileKeySpecifier)[];
export type CandidateProfileFieldPolicy = {
	candidate?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>,
	createDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	associatedPositionOpenings?: FieldPolicy<any> | FieldReadFunction<any>,
	associatedPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	employment?: FieldPolicy<any> | FieldReadFunction<any>,
	education?: FieldPolicy<any> | FieldReadFunction<any>,
	qualifications?: FieldPolicy<any> | FieldReadFunction<any>,
	certifications?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateSources?: FieldPolicy<any> | FieldReadFunction<any>,
	positionPreferences?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	seekActions?: FieldPolicy<any> | FieldReadFunction<any>,
	seekProcessHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	seekQuestionnaireSubmission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandidateProfilePurchasedEventKeySpecifier = ('id' | 'schemeId' | 'typeCode' | 'createDateTime' | 'candidateProfileId' | 'candidateProfile' | 'webhookAttempts' | CandidateProfilePurchasedEventKeySpecifier)[];
export type CandidateProfilePurchasedEventFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	schemeId?: FieldPolicy<any> | FieldReadFunction<any>,
	typeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	createDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateProfileId?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookAttempts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandidateSourceKeySpecifier = ('name' | 'type' | CandidateSourceKeySpecifier)[];
export type CandidateSourceFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CertificationKeySpecifier = ('name' | 'effectiveTimePeriod' | 'issued' | 'issueDate' | 'issuingAuthority' | 'descriptions' | CertificationKeySpecifier)[];
export type CertificationFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	effectiveTimePeriod?: FieldPolicy<any> | FieldReadFunction<any>,
	issued?: FieldPolicy<any> | FieldReadFunction<any>,
	issueDate?: FieldPolicy<any> | FieldReadFunction<any>,
	issuingAuthority?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClosePostedPositionProfilePayloadKeySpecifier = ('positionProfile' | ClosePostedPositionProfilePayloadKeySpecifier)[];
export type ClosePostedPositionProfilePayloadFieldPolicy = {
	positionProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClosePostedPositionProfile_PositionProfilePayloadKeySpecifier = ('profileId' | ClosePostedPositionProfile_PositionProfilePayloadKeySpecifier)[];
export type ClosePostedPositionProfile_PositionProfilePayloadFieldPolicy = {
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommunicationKeySpecifier = ('phone' | 'email' | 'address' | CommunicationKeySpecifier)[];
export type CommunicationFieldPolicy = {
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateApplicationQuestionnairePayloadKeySpecifier = ('applicationQuestionnaire' | CreateApplicationQuestionnairePayloadKeySpecifier)[];
export type CreateApplicationQuestionnairePayloadFieldPolicy = {
	applicationQuestionnaire?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCandidateProcessHistoryItemPayload_ConflictKeySpecifier = ('conflictingCandidateProcessHistoryItem' | 'candidateProfile' | CreateCandidateProcessHistoryItemPayload_ConflictKeySpecifier)[];
export type CreateCandidateProcessHistoryItemPayload_ConflictFieldPolicy = {
	conflictingCandidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCandidateProcessHistoryItemPayload_SuccessKeySpecifier = ('candidateProcessHistoryItem' | 'candidateProfile' | CreateCandidateProcessHistoryItemPayload_SuccessKeySpecifier)[];
export type CreateCandidateProcessHistoryItemPayload_SuccessFieldPolicy = {
	candidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePositionOpeningPayloadKeySpecifier = ('positionOpening' | CreatePositionOpeningPayloadKeySpecifier)[];
export type CreatePositionOpeningPayloadFieldPolicy = {
	positionOpening?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateUnpostedPositionProfileForOpeningPayloadKeySpecifier = ('positionProfile' | CreateUnpostedPositionProfileForOpeningPayloadKeySpecifier)[];
export type CreateUnpostedPositionProfileForOpeningPayloadFieldPolicy = {
	positionProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateWebhookSubscriptionPayload_ConflictKeySpecifier = ('conflictingWebhookSubscription' | CreateWebhookSubscriptionPayload_ConflictKeySpecifier)[];
export type CreateWebhookSubscriptionPayload_ConflictFieldPolicy = {
	conflictingWebhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateWebhookSubscriptionPayload_SuccessKeySpecifier = ('webhookSubscription' | CreateWebhookSubscriptionPayload_SuccessKeySpecifier)[];
export type CreateWebhookSubscriptionPayload_SuccessFieldPolicy = {
	webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrencyMinorUnitKeySpecifier = ('value' | 'currency' | CurrencyMinorUnitKeySpecifier)[];
export type CurrencyMinorUnitFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteCandidateProcessHistoryItemPayloadKeySpecifier = ('candidateProcessHistoryItem' | DeleteCandidateProcessHistoryItemPayloadKeySpecifier)[];
export type DeleteCandidateProcessHistoryItemPayloadFieldPolicy = {
	candidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePositionOpeningPayloadKeySpecifier = ('positionOpening' | DeletePositionOpeningPayloadKeySpecifier)[];
export type DeletePositionOpeningPayloadFieldPolicy = {
	positionOpening?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteUnpostedPositionProfilePayloadKeySpecifier = ('positionProfile' | DeleteUnpostedPositionProfilePayloadKeySpecifier)[];
export type DeleteUnpostedPositionProfilePayloadFieldPolicy = {
	positionProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteUploadedCandidatePayloadKeySpecifier = ('candidate' | DeleteUploadedCandidatePayloadKeySpecifier)[];
export type DeleteUploadedCandidatePayloadFieldPolicy = {
	candidate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteWebhookSubscriptionPayloadKeySpecifier = ('webhookSubscription' | DeleteWebhookSubscriptionPayloadKeySpecifier)[];
export type DeleteWebhookSubscriptionPayloadFieldPolicy = {
	webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DistributionGuidelinesKeySpecifier = ('seekProductCodes' | DistributionGuidelinesKeySpecifier)[];
export type DistributionGuidelinesFieldPolicy = {
	seekProductCodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EducationAttendanceKeySpecifier = ('institution' | 'educationDegrees' | 'descriptions' | EducationAttendanceKeySpecifier)[];
export type EducationAttendanceFieldPolicy = {
	institution?: FieldPolicy<any> | FieldReadFunction<any>,
	educationDegrees?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EducationDegreeKeySpecifier = ('name' | 'degreeGrantedStatus' | 'date' | EducationDegreeKeySpecifier)[];
export type EducationDegreeFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	degreeGrantedStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EffectiveTimePeriodKeySpecifier = ('validTo' | EffectiveTimePeriodKeySpecifier)[];
export type EffectiveTimePeriodFieldPolicy = {
	validTo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmailKeySpecifier = ('address' | EmailKeySpecifier)[];
export type EmailFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmployerHistoryKeySpecifier = ('organization' | 'positionHistories' | EmployerHistoryKeySpecifier)[];
export type EmployerHistoryFieldPolicy = {
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	positionHistories?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventKeySpecifier = ('id' | 'schemeId' | 'typeCode' | 'createDateTime' | 'webhookAttempts' | EventKeySpecifier)[];
export type EventFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	schemeId?: FieldPolicy<any> | FieldReadFunction<any>,
	typeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	createDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookAttempts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventEdgeKeySpecifier = ('cursor' | 'node' | 'streamDateTime' | EventEdgeKeySpecifier)[];
export type EventEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	streamDateTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventsConnectionKeySpecifier = ('edges' | 'pageInfo' | EventsConnectionKeySpecifier)[];
export type EventsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeoLocationKeySpecifier = ('latitude' | 'longitude' | GeoLocationKeySpecifier)[];
export type GeoLocationFieldPolicy = {
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HirerRelationshipChangedEventKeySpecifier = ('id' | 'schemeId' | 'typeCode' | 'createDateTime' | 'hirerId' | 'hirer' | 'webhookAttempts' | HirerRelationshipChangedEventKeySpecifier)[];
export type HirerRelationshipChangedEventFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	schemeId?: FieldPolicy<any> | FieldReadFunction<any>,
	typeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	createDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	hirerId?: FieldPolicy<any> | FieldReadFunction<any>,
	hirer?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookAttempts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HiringOrganizationKeySpecifier = ('id' | 'name' | 'seekApiCapabilities' | 'seekAnzAdvertiserId' | HiringOrganizationKeySpecifier)[];
export type HiringOrganizationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	seekApiCapabilities?: FieldPolicy<any> | FieldReadFunction<any>,
	seekAnzAdvertiserId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HiringOrganizationApiCapabilitiesKeySpecifier = ('relationshipTypeCodes' | 'applicationMethodCodes' | HiringOrganizationApiCapabilitiesKeySpecifier)[];
export type HiringOrganizationApiCapabilitiesFieldPolicy = {
	relationshipTypeCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	applicationMethodCodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HiringOrganizationEdgeKeySpecifier = ('cursor' | 'node' | HiringOrganizationEdgeKeySpecifier)[];
export type HiringOrganizationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HiringOrganizationsConnectionKeySpecifier = ('edges' | 'pageInfo' | HiringOrganizationsConnectionKeySpecifier)[];
export type HiringOrganizationsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JobCategoryKeySpecifier = ('id' | 'parent' | 'children' | 'name' | JobCategoryKeySpecifier)[];
export type JobCategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JobCategorySuggestionChoiceKeySpecifier = ('jobCategory' | 'confidence' | JobCategorySuggestionChoiceKeySpecifier)[];
export type JobCategorySuggestionChoiceFieldPolicy = {
	jobCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	confidence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationKeySpecifier = ('id' | 'parent' | 'children' | 'name' | 'contextualName' | 'countryCode' | LocationKeySpecifier)[];
export type LocationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	contextualName?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationSuggestionKeySpecifier = ('location' | LocationSuggestionKeySpecifier)[];
export type LocationSuggestionFieldPolicy = {
	location?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('_empty' | 'createApplicationQuestionnaire' | 'createPositionOpening' | 'updatePositionOpeningPersonContacts' | 'updatePositionOpeningStatus' | 'deletePositionOpening' | 'postPositionProfileForOpening' | 'updatePostedPositionProfile' | 'closePostedPositionProfile' | 'postPosition' | 'createUnpostedPositionProfileForOpening' | 'updateUnpostedPositionProfile' | 'deleteUnpostedPositionProfile' | 'deleteUploadedCandidate' | 'uploadCandidate' | 'updateUploadedCandidatePerson' | 'updateUploadedCandidateProfileActions' | 'updateUploadedCandidateProfileDates' | 'updateUploadedCandidateProfilePositionPreferences' | 'createCandidateProcessHistoryItem' | 'deleteCandidateProcessHistoryItem' | 'updateCandidateProcessHistoryItem' | 'createWebhookSubscription' | 'updateWebhookSubscriptionDeliveryConfiguration' | 'updateWebhookSubscriptionSigningConfiguration' | 'deleteWebhookSubscription' | 'replayWebhookSubscription' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	_empty?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicationQuestionnaire?: FieldPolicy<any> | FieldReadFunction<any>,
	createPositionOpening?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePositionOpeningPersonContacts?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePositionOpeningStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePositionOpening?: FieldPolicy<any> | FieldReadFunction<any>,
	postPositionProfileForOpening?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePostedPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	closePostedPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	postPosition?: FieldPolicy<any> | FieldReadFunction<any>,
	createUnpostedPositionProfileForOpening?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUnpostedPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUnpostedPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUploadedCandidate?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadCandidate?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUploadedCandidatePerson?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUploadedCandidateProfileActions?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUploadedCandidateProfileDates?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUploadedCandidateProfilePositionPreferences?: FieldPolicy<any> | FieldReadFunction<any>,
	createCandidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCandidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCandidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>,
	createWebhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	updateWebhookSubscriptionDeliveryConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	updateWebhookSubscriptionSigningConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWebhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	replayWebhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ObjectIdentifierKeySpecifier = ('value' | ObjectIdentifierKeySpecifier)[];
export type ObjectIdentifierFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationKeySpecifier = ('name' | OrganizationKeySpecifier)[];
export type OrganizationFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('hasPreviousPage' | 'hasNextPage' | 'startCursor' | 'endCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerOrganizationKeySpecifier = ('name' | PartnerOrganizationKeySpecifier)[];
export type PartnerOrganizationFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PersonCompetencyKeySpecifier = ('competencyName' | PersonCompetencyKeySpecifier)[];
export type PersonCompetencyFieldPolicy = {
	competencyName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PersonNameKeySpecifier = ('formattedName' | 'given' | 'family' | PersonNameKeySpecifier)[];
export type PersonNameFieldPolicy = {
	formattedName?: FieldPolicy<any> | FieldReadFunction<any>,
	given?: FieldPolicy<any> | FieldReadFunction<any>,
	family?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhoneKeySpecifier = ('formattedNumber' | PhoneKeySpecifier)[];
export type PhoneFieldPolicy = {
	formattedNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionFormattedDescriptionKeySpecifier = ('descriptionId' | 'content' | PositionFormattedDescriptionKeySpecifier)[];
export type PositionFormattedDescriptionFieldPolicy = {
	descriptionId?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionFormattedDescriptionIdentifierKeySpecifier = ('value' | PositionFormattedDescriptionIdentifierKeySpecifier)[];
export type PositionFormattedDescriptionIdentifierFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionHistoryKeySpecifier = ('start' | 'end' | 'current' | 'title' | 'descriptions' | PositionHistoryKeySpecifier)[];
export type PositionHistoryFieldPolicy = {
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	end?: FieldPolicy<any> | FieldReadFunction<any>,
	current?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionOpeningKeySpecifier = ('statusCode' | 'documentId' | 'seekPartnerMetadata' | 'postingRequester' | 'positionProfiles' | PositionOpeningKeySpecifier)[];
export type PositionOpeningFieldPolicy = {
	statusCode?: FieldPolicy<any> | FieldReadFunction<any>,
	documentId?: FieldPolicy<any> | FieldReadFunction<any>,
	seekPartnerMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	postingRequester?: FieldPolicy<any> | FieldReadFunction<any>,
	positionProfiles?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionOpeningConnectionKeySpecifier = ('edges' | 'pageInfo' | PositionOpeningConnectionKeySpecifier)[];
export type PositionOpeningConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionOpeningEdgeKeySpecifier = ('cursor' | 'node' | PositionOpeningEdgeKeySpecifier)[];
export type PositionOpeningEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionPreferenceKeySpecifier = ('locations' | PositionPreferenceKeySpecifier)[];
export type PositionPreferenceFieldPolicy = {
	locations?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionProfileKeySpecifier = ('profileId' | 'positionOpening' | 'seekTypeCode' | 'positionTitle' | 'positionOrganizations' | 'seekHirerJobReference' | 'seekBillingReference' | 'positionUri' | 'positionFormattedDescriptions' | 'positionScheduleTypeCodes' | 'offeredRemunerationPackage' | 'seekAnzWorkTypeCode' | 'jobCategories' | 'positionLocation' | 'seekApplicationQuestionnaire' | 'seekVideo' | 'postingInstructions' | 'seekPartnerMetadata' | 'seekCreatedBySelfIndicator' | PositionProfileKeySpecifier)[];
export type PositionProfileFieldPolicy = {
	profileId?: FieldPolicy<any> | FieldReadFunction<any>,
	positionOpening?: FieldPolicy<any> | FieldReadFunction<any>,
	seekTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	positionTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	positionOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	seekHirerJobReference?: FieldPolicy<any> | FieldReadFunction<any>,
	seekBillingReference?: FieldPolicy<any> | FieldReadFunction<any>,
	positionUri?: FieldPolicy<any> | FieldReadFunction<any>,
	positionFormattedDescriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	positionScheduleTypeCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	offeredRemunerationPackage?: FieldPolicy<any> | FieldReadFunction<any>,
	seekAnzWorkTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	jobCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	positionLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	seekApplicationQuestionnaire?: FieldPolicy<any> | FieldReadFunction<any>,
	seekVideo?: FieldPolicy<any> | FieldReadFunction<any>,
	postingInstructions?: FieldPolicy<any> | FieldReadFunction<any>,
	seekPartnerMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	seekCreatedBySelfIndicator?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionProfileClosedEventKeySpecifier = ('id' | 'schemeId' | 'typeCode' | 'createDateTime' | 'positionProfileId' | 'positionProfile' | 'webhookAttempts' | PositionProfileClosedEventKeySpecifier)[];
export type PositionProfileClosedEventFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	schemeId?: FieldPolicy<any> | FieldReadFunction<any>,
	typeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	createDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	positionProfileId?: FieldPolicy<any> | FieldReadFunction<any>,
	positionProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookAttempts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionProfilePostedEventKeySpecifier = ('id' | 'schemeId' | 'typeCode' | 'createDateTime' | 'positionProfileId' | 'positionProfile' | 'webhookAttempts' | PositionProfilePostedEventKeySpecifier)[];
export type PositionProfilePostedEventFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	schemeId?: FieldPolicy<any> | FieldReadFunction<any>,
	typeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	createDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	positionProfileId?: FieldPolicy<any> | FieldReadFunction<any>,
	positionProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookAttempts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostPositionPayload_ConflictKeySpecifier = ('conflictingPositionOpening' | 'conflictingPositionProfile' | PostPositionPayload_ConflictKeySpecifier)[];
export type PostPositionPayload_ConflictFieldPolicy = {
	conflictingPositionOpening?: FieldPolicy<any> | FieldReadFunction<any>,
	conflictingPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostPositionPayload_SuccessKeySpecifier = ('positionOpening' | 'positionProfile' | PostPositionPayload_SuccessKeySpecifier)[];
export type PostPositionPayload_SuccessFieldPolicy = {
	positionOpening?: FieldPolicy<any> | FieldReadFunction<any>,
	positionProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostPositionProfileForOpeningPayload_ConflictKeySpecifier = ('conflictingPositionProfile' | PostPositionProfileForOpeningPayload_ConflictKeySpecifier)[];
export type PostPositionProfileForOpeningPayload_ConflictFieldPolicy = {
	conflictingPositionProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostPositionProfileForOpeningPayload_SuccessKeySpecifier = ('positionProfile' | PostPositionProfileForOpeningPayload_SuccessKeySpecifier)[];
export type PostPositionProfileForOpeningPayload_SuccessFieldPolicy = {
	positionProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostPositionProfileForOpening_PositionProfilePayloadKeySpecifier = ('profileId' | PostPositionProfileForOpening_PositionProfilePayloadKeySpecifier)[];
export type PostPositionProfileForOpening_PositionProfilePayloadFieldPolicy = {
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostPosition_PositionOpeningPayloadKeySpecifier = ('documentId' | PostPosition_PositionOpeningPayloadKeySpecifier)[];
export type PostPosition_PositionOpeningPayloadFieldPolicy = {
	documentId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostPosition_PositionProfilePayloadKeySpecifier = ('profileId' | PostPosition_PositionProfilePayloadKeySpecifier)[];
export type PostPosition_PositionProfilePayloadFieldPolicy = {
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostedPositionProfileKeySpecifier = ('profileId' | 'positionOpening' | 'seekTypeCode' | 'positionTitle' | 'positionOrganizations' | 'seekHirerJobReference' | 'seekBillingReference' | 'positionUri' | 'positionFormattedDescriptions' | 'positionScheduleTypeCodes' | 'offeredRemunerationPackage' | 'seekAnzWorkTypeCode' | 'jobCategories' | 'positionLocation' | 'seekApplicationQuestionnaire' | 'seekVideo' | 'postingInstructions' | 'seekPartnerMetadata' | 'seekCreatedBySelfIndicator' | PostedPositionProfileKeySpecifier)[];
export type PostedPositionProfileFieldPolicy = {
	profileId?: FieldPolicy<any> | FieldReadFunction<any>,
	positionOpening?: FieldPolicy<any> | FieldReadFunction<any>,
	seekTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	positionTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	positionOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	seekHirerJobReference?: FieldPolicy<any> | FieldReadFunction<any>,
	seekBillingReference?: FieldPolicy<any> | FieldReadFunction<any>,
	positionUri?: FieldPolicy<any> | FieldReadFunction<any>,
	positionFormattedDescriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	positionScheduleTypeCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	offeredRemunerationPackage?: FieldPolicy<any> | FieldReadFunction<any>,
	seekAnzWorkTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	jobCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	positionLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	seekApplicationQuestionnaire?: FieldPolicy<any> | FieldReadFunction<any>,
	seekVideo?: FieldPolicy<any> | FieldReadFunction<any>,
	postingInstructions?: FieldPolicy<any> | FieldReadFunction<any>,
	seekPartnerMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	seekCreatedBySelfIndicator?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostingInstructionKeySpecifier = ('start' | 'end' | 'seekAnzAdvertisementType' | 'applicationMethods' | 'brandingId' | 'branding' | PostingInstructionKeySpecifier)[];
export type PostingInstructionFieldPolicy = {
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	end?: FieldPolicy<any> | FieldReadFunction<any>,
	seekAnzAdvertisementType?: FieldPolicy<any> | FieldReadFunction<any>,
	applicationMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	brandingId?: FieldPolicy<any> | FieldReadFunction<any>,
	branding?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostingRequesterKeySpecifier = ('id' | 'name' | 'seekAnzAdvertiserId' | 'roleCode' | 'personContacts' | PostingRequesterKeySpecifier)[];
export type PostingRequesterFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	seekAnzAdvertiserId?: FieldPolicy<any> | FieldReadFunction<any>,
	roleCode?: FieldPolicy<any> | FieldReadFunction<any>,
	personContacts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreferredLocationKeySpecifier = ('referenceLocation' | PreferredLocationKeySpecifier)[];
export type PreferredLocationFieldPolicy = {
	referenceLocation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('version' | 'hiringOrganization' | 'hiringOrganizations' | 'seekAnzAdvertiser' | 'self' | 'advertisementBrandings' | 'advertisementBranding' | 'seekAnzHirerAdvertisementCreationProducts' | 'seekAnzHirerAdvertisementModificationProducts' | 'seekAnzHirerAdvertisementModificationProductsAlt' | 'location' | 'locationSuggestions' | 'nearestLocations' | 'jobCategory' | 'jobCategories' | 'jobCategorySuggestions' | 'applicationQuestionnaire' | 'positionOpening' | 'positionProfile' | 'positionOpenings' | 'candidateProfile' | 'candidate' | 'candidateProcessHistoryItem' | 'event' | 'events' | 'webhookAttemptsForEvent' | 'webhookSubscription' | 'webhookSubscriptions' | 'webhookSubscriptionReplay' | 'webhookRequestsForSubscription' | 'webhookRequest' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	hiringOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	hiringOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	seekAnzAdvertiser?: FieldPolicy<any> | FieldReadFunction<any>,
	self?: FieldPolicy<any> | FieldReadFunction<any>,
	advertisementBrandings?: FieldPolicy<any> | FieldReadFunction<any>,
	advertisementBranding?: FieldPolicy<any> | FieldReadFunction<any>,
	seekAnzHirerAdvertisementCreationProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	seekAnzHirerAdvertisementModificationProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	seekAnzHirerAdvertisementModificationProductsAlt?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationSuggestions?: FieldPolicy<any> | FieldReadFunction<any>,
	nearestLocations?: FieldPolicy<any> | FieldReadFunction<any>,
	jobCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	jobCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	jobCategorySuggestions?: FieldPolicy<any> | FieldReadFunction<any>,
	applicationQuestionnaire?: FieldPolicy<any> | FieldReadFunction<any>,
	positionOpening?: FieldPolicy<any> | FieldReadFunction<any>,
	positionProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	positionOpenings?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	candidate?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookAttemptsForEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookSubscriptionReplay?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookRequestsForSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemunerationAmountKeySpecifier = ('value' | 'currency' | RemunerationAmountKeySpecifier)[];
export type RemunerationAmountFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemunerationPackageKeySpecifier = ('basisCode' | 'ranges' | 'descriptions' | RemunerationPackageKeySpecifier)[];
export type RemunerationPackageFieldPolicy = {
	basisCode?: FieldPolicy<any> | FieldReadFunction<any>,
	ranges?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemunerationRangeKeySpecifier = ('minimumAmount' | 'maximumAmount' | 'intervalCode' | RemunerationRangeKeySpecifier)[];
export type RemunerationRangeFieldPolicy = {
	minimumAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	intervalCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReplayWebhookSubscriptionPayloadKeySpecifier = ('webhookSubscription' | ReplayWebhookSubscriptionPayloadKeySpecifier)[];
export type ReplayWebhookSubscriptionPayloadFieldPolicy = {
	webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeekAnzAdProductKeySpecifier = ('advertisementTypeCode' | 'name' | 'description' | 'price' | 'enabledIndicator' | 'checkoutEstimate' | 'messages' | 'features' | SeekAnzAdProductKeySpecifier)[];
export type SeekAnzAdProductFieldPolicy = {
	advertisementTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	enabledIndicator?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutEstimate?: FieldPolicy<any> | FieldReadFunction<any>,
	messages?: FieldPolicy<any> | FieldReadFunction<any>,
	features?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeekAnzAdProductCheckoutEstimateKeySpecifier = ('paymentDueExcludingTax' | 'summary' | 'contractConsumption' | SeekAnzAdProductCheckoutEstimateKeySpecifier)[];
export type SeekAnzAdProductCheckoutEstimateFieldPolicy = {
	paymentDueExcludingTax?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	contractConsumption?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeekAnzAdProductContractConsumptionKeySpecifier = ('summary' | 'typeCode' | SeekAnzAdProductContractConsumptionKeySpecifier)[];
export type SeekAnzAdProductContractConsumptionFieldPolicy = {
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	typeCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeekAnzAdProductFeaturesKeySpecifier = ('brandingIndicator' | 'searchBulletPointsIndicator' | SeekAnzAdProductFeaturesKeySpecifier)[];
export type SeekAnzAdProductFeaturesFieldPolicy = {
	brandingIndicator?: FieldPolicy<any> | FieldReadFunction<any>,
	searchBulletPointsIndicator?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeekAnzAdProductMessageKeySpecifier = ('typeCode' | 'severityCode' | 'visibilityCode' | 'content' | SeekAnzAdProductMessageKeySpecifier)[];
export type SeekAnzAdProductMessageFieldPolicy = {
	typeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	severityCode?: FieldPolicy<any> | FieldReadFunction<any>,
	visibilityCode?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeekAnzAdProductPriceKeySpecifier = ('amountExcludingTax' | 'summary' | 'visibleForHirerIndicator' | 'taxedIndicator' | SeekAnzAdProductPriceKeySpecifier)[];
export type SeekAnzAdProductPriceFieldPolicy = {
	amountExcludingTax?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	visibleForHirerIndicator?: FieldPolicy<any> | FieldReadFunction<any>,
	taxedIndicator?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeekProcessHistoryItemSourceKeySpecifier = ('name' | SeekProcessHistoryItemSourceKeySpecifier)[];
export type SeekProcessHistoryItemSourceFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeekVideoKeySpecifier = ('url' | 'seekAnzPositionCode' | SeekVideoKeySpecifier)[];
export type SeekVideoFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	seekAnzPositionCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelfOrganizationsKeySpecifier = ('partner' | 'hirer' | SelfOrganizationsKeySpecifier)[];
export type SelfOrganizationsFieldPolicy = {
	partner?: FieldPolicy<any> | FieldReadFunction<any>,
	hirer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SpecifiedPersonKeySpecifier = ('name' | 'communication' | 'roleCode' | SpecifiedPersonKeySpecifier)[];
export type SpecifiedPersonFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	communication?: FieldPolicy<any> | FieldReadFunction<any>,
	roleCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnpostedPositionProfileKeySpecifier = ('profileId' | 'profileName' | 'positionOpening' | 'seekTypeCode' | 'positionTitle' | 'positionOrganizations' | 'seekHirerJobReference' | 'seekBillingReference' | 'positionUri' | 'positionFormattedDescriptions' | 'positionScheduleTypeCodes' | 'offeredRemunerationPackage' | 'seekAnzWorkTypeCode' | 'jobCategories' | 'positionLocation' | 'seekApplicationQuestionnaire' | 'seekVideo' | 'postingInstructions' | 'seekPartnerMetadata' | 'seekCreatedBySelfIndicator' | UnpostedPositionProfileKeySpecifier)[];
export type UnpostedPositionProfileFieldPolicy = {
	profileId?: FieldPolicy<any> | FieldReadFunction<any>,
	profileName?: FieldPolicy<any> | FieldReadFunction<any>,
	positionOpening?: FieldPolicy<any> | FieldReadFunction<any>,
	seekTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	positionTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	positionOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	seekHirerJobReference?: FieldPolicy<any> | FieldReadFunction<any>,
	seekBillingReference?: FieldPolicy<any> | FieldReadFunction<any>,
	positionUri?: FieldPolicy<any> | FieldReadFunction<any>,
	positionFormattedDescriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	positionScheduleTypeCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	offeredRemunerationPackage?: FieldPolicy<any> | FieldReadFunction<any>,
	seekAnzWorkTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	jobCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	positionLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	seekApplicationQuestionnaire?: FieldPolicy<any> | FieldReadFunction<any>,
	seekVideo?: FieldPolicy<any> | FieldReadFunction<any>,
	postingInstructions?: FieldPolicy<any> | FieldReadFunction<any>,
	seekPartnerMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	seekCreatedBySelfIndicator?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCandidateProcessHistoryItemPayloadKeySpecifier = ('candidateProcessHistoryItem' | UpdateCandidateProcessHistoryItemPayloadKeySpecifier)[];
export type UpdateCandidateProcessHistoryItemPayloadFieldPolicy = {
	candidateProcessHistoryItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePositionOpeningPersonContactsPayloadKeySpecifier = ('positionOpening' | UpdatePositionOpeningPersonContactsPayloadKeySpecifier)[];
export type UpdatePositionOpeningPersonContactsPayloadFieldPolicy = {
	positionOpening?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePositionOpeningStatusPayloadKeySpecifier = ('positionOpening' | UpdatePositionOpeningStatusPayloadKeySpecifier)[];
export type UpdatePositionOpeningStatusPayloadFieldPolicy = {
	positionOpening?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePostedPositionProfilePayloadKeySpecifier = ('positionProfile' | UpdatePostedPositionProfilePayloadKeySpecifier)[];
export type UpdatePostedPositionProfilePayloadFieldPolicy = {
	positionProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePostedPositionProfile_PositionProfilePayloadKeySpecifier = ('profileId' | UpdatePostedPositionProfile_PositionProfilePayloadKeySpecifier)[];
export type UpdatePostedPositionProfile_PositionProfilePayloadFieldPolicy = {
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUnpostedPositionProfilePayloadKeySpecifier = ('positionProfile' | UpdateUnpostedPositionProfilePayloadKeySpecifier)[];
export type UpdateUnpostedPositionProfilePayloadFieldPolicy = {
	positionProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUploadedCandidatePersonPayload_ConflictKeySpecifier = ('conflictingCandidate' | UpdateUploadedCandidatePersonPayload_ConflictKeySpecifier)[];
export type UpdateUploadedCandidatePersonPayload_ConflictFieldPolicy = {
	conflictingCandidate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUploadedCandidatePersonPayload_SuccessKeySpecifier = ('candidate' | UpdateUploadedCandidatePersonPayload_SuccessKeySpecifier)[];
export type UpdateUploadedCandidatePersonPayload_SuccessFieldPolicy = {
	candidate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUploadedCandidateProfileActionsPayloadKeySpecifier = ('candidateProfile' | UpdateUploadedCandidateProfileActionsPayloadKeySpecifier)[];
export type UpdateUploadedCandidateProfileActionsPayloadFieldPolicy = {
	candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUploadedCandidateProfileDatesPayloadKeySpecifier = ('candidateProfile' | UpdateUploadedCandidateProfileDatesPayloadKeySpecifier)[];
export type UpdateUploadedCandidateProfileDatesPayloadFieldPolicy = {
	candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUploadedCandidateProfilePositionPreferencesPayloadKeySpecifier = ('candidateProfile' | UpdateUploadedCandidateProfilePositionPreferencesPayloadKeySpecifier)[];
export type UpdateUploadedCandidateProfilePositionPreferencesPayloadFieldPolicy = {
	candidateProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateWebhookSubscriptionDeliveryConfigurationPayload_ConflictKeySpecifier = ('conflictingWebhookSubscription' | UpdateWebhookSubscriptionDeliveryConfigurationPayload_ConflictKeySpecifier)[];
export type UpdateWebhookSubscriptionDeliveryConfigurationPayload_ConflictFieldPolicy = {
	conflictingWebhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateWebhookSubscriptionDeliveryConfigurationPayload_SuccessKeySpecifier = ('webhookSubscription' | UpdateWebhookSubscriptionDeliveryConfigurationPayload_SuccessKeySpecifier)[];
export type UpdateWebhookSubscriptionDeliveryConfigurationPayload_SuccessFieldPolicy = {
	webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateWebhookSubscriptionSigningConfigurationPayloadKeySpecifier = ('webhookSubscription' | UpdateWebhookSubscriptionSigningConfigurationPayloadKeySpecifier)[];
export type UpdateWebhookSubscriptionSigningConfigurationPayloadFieldPolicy = {
	webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadCandidatePayload_ConflictKeySpecifier = ('conflictingCandidate' | 'hiringOrganization' | UploadCandidatePayload_ConflictKeySpecifier)[];
export type UploadCandidatePayload_ConflictFieldPolicy = {
	conflictingCandidate?: FieldPolicy<any> | FieldReadFunction<any>,
	hiringOrganization?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadCandidatePayload_SuccessKeySpecifier = ('candidate' | 'candidateProcessHistoryItems' | 'hiringOrganization' | UploadCandidatePayload_SuccessKeySpecifier)[];
export type UploadCandidatePayload_SuccessFieldPolicy = {
	candidate?: FieldPolicy<any> | FieldReadFunction<any>,
	candidateProcessHistoryItems?: FieldPolicy<any> | FieldReadFunction<any>,
	hiringOrganization?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebUrlKeySpecifier = ('url' | WebUrlKeySpecifier)[];
export type WebUrlFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookAttemptKeySpecifier = ('id' | 'createDateTime' | 'event' | 'webhookSubscription' | 'webhookRequest' | WebhookAttemptKeySpecifier)[];
export type WebhookAttemptFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookAttemptEdgeKeySpecifier = ('cursor' | 'node' | WebhookAttemptEdgeKeySpecifier)[];
export type WebhookAttemptEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookAttemptsConnectionKeySpecifier = ('edges' | 'pageInfo' | WebhookAttemptsConnectionKeySpecifier)[];
export type WebhookAttemptsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookRequestKeySpecifier = ('requestId' | 'webhookSubscription' | 'statusCode' | 'descriptionCode' | 'latencyMs' | 'createDateTime' | 'attempts' | WebhookRequestKeySpecifier)[];
export type WebhookRequestFieldPolicy = {
	requestId?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	statusCode?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionCode?: FieldPolicy<any> | FieldReadFunction<any>,
	latencyMs?: FieldPolicy<any> | FieldReadFunction<any>,
	createDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	attempts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookRequestEdgeKeySpecifier = ('cursor' | 'node' | WebhookRequestEdgeKeySpecifier)[];
export type WebhookRequestEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookRequestsConnectionKeySpecifier = ('edges' | 'pageInfo' | WebhookRequestsConnectionKeySpecifier)[];
export type WebhookRequestsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookSubscriptionKeySpecifier = ('id' | 'eventTypeCode' | 'schemeId' | 'hirerId' | 'hirer' | 'url' | 'maxEventsPerAttempt' | 'signingAlgorithmCode' | 'createDateTime' | 'updateDateTime' | 'webhookRequests' | 'webhookSubscriptionReplays' | WebhookSubscriptionKeySpecifier)[];
export type WebhookSubscriptionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	eventTypeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	schemeId?: FieldPolicy<any> | FieldReadFunction<any>,
	hirerId?: FieldPolicy<any> | FieldReadFunction<any>,
	hirer?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	maxEventsPerAttempt?: FieldPolicy<any> | FieldReadFunction<any>,
	signingAlgorithmCode?: FieldPolicy<any> | FieldReadFunction<any>,
	createDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookSubscriptionReplays?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookSubscriptionEdgeKeySpecifier = ('cursor' | 'node' | WebhookSubscriptionEdgeKeySpecifier)[];
export type WebhookSubscriptionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookSubscriptionReplayKeySpecifier = ('id' | 'createDateTime' | 'updateDateTime' | 'webhookSubscription' | 'statusCode' | WebhookSubscriptionReplayKeySpecifier)[];
export type WebhookSubscriptionReplayFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	statusCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookSubscriptionReplayEdgeKeySpecifier = ('cursor' | 'node' | WebhookSubscriptionReplayEdgeKeySpecifier)[];
export type WebhookSubscriptionReplayEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookSubscriptionReplaysConnectionKeySpecifier = ('edges' | 'pageInfo' | WebhookSubscriptionReplaysConnectionKeySpecifier)[];
export type WebhookSubscriptionReplaysConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookSubscriptionsConnectionKeySpecifier = ('edges' | 'pageInfo' | WebhookSubscriptionsConnectionKeySpecifier)[];
export type WebhookSubscriptionsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Address?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		fields?: AddressFieldPolicy,
	},
	AddressComponent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressComponentKeySpecifier | (() => undefined | AddressComponentKeySpecifier),
		fields?: AddressComponentFieldPolicy,
	},
	AdvertisementBranding?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdvertisementBrandingKeySpecifier | (() => undefined | AdvertisementBrandingKeySpecifier),
		fields?: AdvertisementBrandingFieldPolicy,
	},
	AdvertisementBrandingEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdvertisementBrandingEdgeKeySpecifier | (() => undefined | AdvertisementBrandingEdgeKeySpecifier),
		fields?: AdvertisementBrandingEdgeFieldPolicy,
	},
	AdvertisementBrandingImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdvertisementBrandingImageKeySpecifier | (() => undefined | AdvertisementBrandingImageKeySpecifier),
		fields?: AdvertisementBrandingImageFieldPolicy,
	},
	AdvertisementBrandingsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdvertisementBrandingsConnectionKeySpecifier | (() => undefined | AdvertisementBrandingsConnectionKeySpecifier),
		fields?: AdvertisementBrandingsConnectionFieldPolicy,
	},
	ApplicationMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationMethodKeySpecifier | (() => undefined | ApplicationMethodKeySpecifier),
		fields?: ApplicationMethodFieldPolicy,
	},
	ApplicationPrivacyConsent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationPrivacyConsentKeySpecifier | (() => undefined | ApplicationPrivacyConsentKeySpecifier),
		fields?: ApplicationPrivacyConsentFieldPolicy,
	},
	ApplicationPrivacyConsentResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationPrivacyConsentResponseKeySpecifier | (() => undefined | ApplicationPrivacyConsentResponseKeySpecifier),
		fields?: ApplicationPrivacyConsentResponseFieldPolicy,
	},
	ApplicationQuestion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationQuestionKeySpecifier | (() => undefined | ApplicationQuestionKeySpecifier),
		fields?: ApplicationQuestionFieldPolicy,
	},
	ApplicationQuestionAnswer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationQuestionAnswerKeySpecifier | (() => undefined | ApplicationQuestionAnswerKeySpecifier),
		fields?: ApplicationQuestionAnswerFieldPolicy,
	},
	ApplicationQuestionChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationQuestionChoiceKeySpecifier | (() => undefined | ApplicationQuestionChoiceKeySpecifier),
		fields?: ApplicationQuestionChoiceFieldPolicy,
	},
	ApplicationQuestionResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationQuestionResponseKeySpecifier | (() => undefined | ApplicationQuestionResponseKeySpecifier),
		fields?: ApplicationQuestionResponseFieldPolicy,
	},
	ApplicationQuestionnaire?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationQuestionnaireKeySpecifier | (() => undefined | ApplicationQuestionnaireKeySpecifier),
		fields?: ApplicationQuestionnaireFieldPolicy,
	},
	ApplicationQuestionnaireComponent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationQuestionnaireComponentKeySpecifier | (() => undefined | ApplicationQuestionnaireComponentKeySpecifier),
		fields?: ApplicationQuestionnaireComponentFieldPolicy,
	},
	ApplicationQuestionnaireComponentResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationQuestionnaireComponentResponseKeySpecifier | (() => undefined | ApplicationQuestionnaireComponentResponseKeySpecifier),
		fields?: ApplicationQuestionnaireComponentResponseFieldPolicy,
	},
	ApplicationQuestionnaireSubmission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationQuestionnaireSubmissionKeySpecifier | (() => undefined | ApplicationQuestionnaireSubmissionKeySpecifier),
		fields?: ApplicationQuestionnaireSubmissionFieldPolicy,
	},
	AssociatedPositionOpening?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssociatedPositionOpeningKeySpecifier | (() => undefined | AssociatedPositionOpeningKeySpecifier),
		fields?: AssociatedPositionOpeningFieldPolicy,
	},
	Attachment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttachmentKeySpecifier | (() => undefined | AttachmentKeySpecifier),
		fields?: AttachmentFieldPolicy,
	},
	Candidate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandidateKeySpecifier | (() => undefined | CandidateKeySpecifier),
		fields?: CandidateFieldPolicy,
	},
	CandidateApplicationCreatedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandidateApplicationCreatedEventKeySpecifier | (() => undefined | CandidateApplicationCreatedEventKeySpecifier),
		fields?: CandidateApplicationCreatedEventFieldPolicy,
	},
	CandidatePerson?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandidatePersonKeySpecifier | (() => undefined | CandidatePersonKeySpecifier),
		fields?: CandidatePersonFieldPolicy,
	},
	CandidateProcessAction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandidateProcessActionKeySpecifier | (() => undefined | CandidateProcessActionKeySpecifier),
		fields?: CandidateProcessActionFieldPolicy,
	},
	CandidateProcessHistoryItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandidateProcessHistoryItemKeySpecifier | (() => undefined | CandidateProcessHistoryItemKeySpecifier),
		fields?: CandidateProcessHistoryItemFieldPolicy,
	},
	CandidateProcessHistoryItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandidateProcessHistoryItemConnectionKeySpecifier | (() => undefined | CandidateProcessHistoryItemConnectionKeySpecifier),
		fields?: CandidateProcessHistoryItemConnectionFieldPolicy,
	},
	CandidateProcessHistoryItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandidateProcessHistoryItemEdgeKeySpecifier | (() => undefined | CandidateProcessHistoryItemEdgeKeySpecifier),
		fields?: CandidateProcessHistoryItemEdgeFieldPolicy,
	},
	CandidateProcessParty?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandidateProcessPartyKeySpecifier | (() => undefined | CandidateProcessPartyKeySpecifier),
		fields?: CandidateProcessPartyFieldPolicy,
	},
	CandidateProcessStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandidateProcessStatusKeySpecifier | (() => undefined | CandidateProcessStatusKeySpecifier),
		fields?: CandidateProcessStatusFieldPolicy,
	},
	CandidateProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandidateProfileKeySpecifier | (() => undefined | CandidateProfileKeySpecifier),
		fields?: CandidateProfileFieldPolicy,
	},
	CandidateProfilePurchasedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandidateProfilePurchasedEventKeySpecifier | (() => undefined | CandidateProfilePurchasedEventKeySpecifier),
		fields?: CandidateProfilePurchasedEventFieldPolicy,
	},
	CandidateSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandidateSourceKeySpecifier | (() => undefined | CandidateSourceKeySpecifier),
		fields?: CandidateSourceFieldPolicy,
	},
	Certification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CertificationKeySpecifier | (() => undefined | CertificationKeySpecifier),
		fields?: CertificationFieldPolicy,
	},
	ClosePostedPositionProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClosePostedPositionProfilePayloadKeySpecifier | (() => undefined | ClosePostedPositionProfilePayloadKeySpecifier),
		fields?: ClosePostedPositionProfilePayloadFieldPolicy,
	},
	ClosePostedPositionProfile_PositionProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClosePostedPositionProfile_PositionProfilePayloadKeySpecifier | (() => undefined | ClosePostedPositionProfile_PositionProfilePayloadKeySpecifier),
		fields?: ClosePostedPositionProfile_PositionProfilePayloadFieldPolicy,
	},
	Communication?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommunicationKeySpecifier | (() => undefined | CommunicationKeySpecifier),
		fields?: CommunicationFieldPolicy,
	},
	CreateApplicationQuestionnairePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateApplicationQuestionnairePayloadKeySpecifier | (() => undefined | CreateApplicationQuestionnairePayloadKeySpecifier),
		fields?: CreateApplicationQuestionnairePayloadFieldPolicy,
	},
	CreateCandidateProcessHistoryItemPayload_Conflict?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCandidateProcessHistoryItemPayload_ConflictKeySpecifier | (() => undefined | CreateCandidateProcessHistoryItemPayload_ConflictKeySpecifier),
		fields?: CreateCandidateProcessHistoryItemPayload_ConflictFieldPolicy,
	},
	CreateCandidateProcessHistoryItemPayload_Success?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCandidateProcessHistoryItemPayload_SuccessKeySpecifier | (() => undefined | CreateCandidateProcessHistoryItemPayload_SuccessKeySpecifier),
		fields?: CreateCandidateProcessHistoryItemPayload_SuccessFieldPolicy,
	},
	CreatePositionOpeningPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePositionOpeningPayloadKeySpecifier | (() => undefined | CreatePositionOpeningPayloadKeySpecifier),
		fields?: CreatePositionOpeningPayloadFieldPolicy,
	},
	CreateUnpostedPositionProfileForOpeningPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateUnpostedPositionProfileForOpeningPayloadKeySpecifier | (() => undefined | CreateUnpostedPositionProfileForOpeningPayloadKeySpecifier),
		fields?: CreateUnpostedPositionProfileForOpeningPayloadFieldPolicy,
	},
	CreateWebhookSubscriptionPayload_Conflict?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateWebhookSubscriptionPayload_ConflictKeySpecifier | (() => undefined | CreateWebhookSubscriptionPayload_ConflictKeySpecifier),
		fields?: CreateWebhookSubscriptionPayload_ConflictFieldPolicy,
	},
	CreateWebhookSubscriptionPayload_Success?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateWebhookSubscriptionPayload_SuccessKeySpecifier | (() => undefined | CreateWebhookSubscriptionPayload_SuccessKeySpecifier),
		fields?: CreateWebhookSubscriptionPayload_SuccessFieldPolicy,
	},
	CurrencyMinorUnit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrencyMinorUnitKeySpecifier | (() => undefined | CurrencyMinorUnitKeySpecifier),
		fields?: CurrencyMinorUnitFieldPolicy,
	},
	DeleteCandidateProcessHistoryItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteCandidateProcessHistoryItemPayloadKeySpecifier | (() => undefined | DeleteCandidateProcessHistoryItemPayloadKeySpecifier),
		fields?: DeleteCandidateProcessHistoryItemPayloadFieldPolicy,
	},
	DeletePositionOpeningPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePositionOpeningPayloadKeySpecifier | (() => undefined | DeletePositionOpeningPayloadKeySpecifier),
		fields?: DeletePositionOpeningPayloadFieldPolicy,
	},
	DeleteUnpostedPositionProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteUnpostedPositionProfilePayloadKeySpecifier | (() => undefined | DeleteUnpostedPositionProfilePayloadKeySpecifier),
		fields?: DeleteUnpostedPositionProfilePayloadFieldPolicy,
	},
	DeleteUploadedCandidatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteUploadedCandidatePayloadKeySpecifier | (() => undefined | DeleteUploadedCandidatePayloadKeySpecifier),
		fields?: DeleteUploadedCandidatePayloadFieldPolicy,
	},
	DeleteWebhookSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteWebhookSubscriptionPayloadKeySpecifier | (() => undefined | DeleteWebhookSubscriptionPayloadKeySpecifier),
		fields?: DeleteWebhookSubscriptionPayloadFieldPolicy,
	},
	DistributionGuidelines?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DistributionGuidelinesKeySpecifier | (() => undefined | DistributionGuidelinesKeySpecifier),
		fields?: DistributionGuidelinesFieldPolicy,
	},
	EducationAttendance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EducationAttendanceKeySpecifier | (() => undefined | EducationAttendanceKeySpecifier),
		fields?: EducationAttendanceFieldPolicy,
	},
	EducationDegree?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EducationDegreeKeySpecifier | (() => undefined | EducationDegreeKeySpecifier),
		fields?: EducationDegreeFieldPolicy,
	},
	EffectiveTimePeriod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EffectiveTimePeriodKeySpecifier | (() => undefined | EffectiveTimePeriodKeySpecifier),
		fields?: EffectiveTimePeriodFieldPolicy,
	},
	Email?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmailKeySpecifier | (() => undefined | EmailKeySpecifier),
		fields?: EmailFieldPolicy,
	},
	EmployerHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmployerHistoryKeySpecifier | (() => undefined | EmployerHistoryKeySpecifier),
		fields?: EmployerHistoryFieldPolicy,
	},
	Event?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventKeySpecifier | (() => undefined | EventKeySpecifier),
		fields?: EventFieldPolicy,
	},
	EventEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventEdgeKeySpecifier | (() => undefined | EventEdgeKeySpecifier),
		fields?: EventEdgeFieldPolicy,
	},
	EventsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventsConnectionKeySpecifier | (() => undefined | EventsConnectionKeySpecifier),
		fields?: EventsConnectionFieldPolicy,
	},
	GeoLocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeoLocationKeySpecifier | (() => undefined | GeoLocationKeySpecifier),
		fields?: GeoLocationFieldPolicy,
	},
	HirerRelationshipChangedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HirerRelationshipChangedEventKeySpecifier | (() => undefined | HirerRelationshipChangedEventKeySpecifier),
		fields?: HirerRelationshipChangedEventFieldPolicy,
	},
	HiringOrganization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HiringOrganizationKeySpecifier | (() => undefined | HiringOrganizationKeySpecifier),
		fields?: HiringOrganizationFieldPolicy,
	},
	HiringOrganizationApiCapabilities?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HiringOrganizationApiCapabilitiesKeySpecifier | (() => undefined | HiringOrganizationApiCapabilitiesKeySpecifier),
		fields?: HiringOrganizationApiCapabilitiesFieldPolicy,
	},
	HiringOrganizationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HiringOrganizationEdgeKeySpecifier | (() => undefined | HiringOrganizationEdgeKeySpecifier),
		fields?: HiringOrganizationEdgeFieldPolicy,
	},
	HiringOrganizationsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HiringOrganizationsConnectionKeySpecifier | (() => undefined | HiringOrganizationsConnectionKeySpecifier),
		fields?: HiringOrganizationsConnectionFieldPolicy,
	},
	JobCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JobCategoryKeySpecifier | (() => undefined | JobCategoryKeySpecifier),
		fields?: JobCategoryFieldPolicy,
	},
	JobCategorySuggestionChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JobCategorySuggestionChoiceKeySpecifier | (() => undefined | JobCategorySuggestionChoiceKeySpecifier),
		fields?: JobCategorySuggestionChoiceFieldPolicy,
	},
	Location?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationKeySpecifier | (() => undefined | LocationKeySpecifier),
		fields?: LocationFieldPolicy,
	},
	LocationSuggestion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationSuggestionKeySpecifier | (() => undefined | LocationSuggestionKeySpecifier),
		fields?: LocationSuggestionFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	ObjectIdentifier?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ObjectIdentifierKeySpecifier | (() => undefined | ObjectIdentifierKeySpecifier),
		fields?: ObjectIdentifierFieldPolicy,
	},
	Organization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationKeySpecifier | (() => undefined | OrganizationKeySpecifier),
		fields?: OrganizationFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PartnerOrganization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerOrganizationKeySpecifier | (() => undefined | PartnerOrganizationKeySpecifier),
		fields?: PartnerOrganizationFieldPolicy,
	},
	PersonCompetency?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PersonCompetencyKeySpecifier | (() => undefined | PersonCompetencyKeySpecifier),
		fields?: PersonCompetencyFieldPolicy,
	},
	PersonName?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PersonNameKeySpecifier | (() => undefined | PersonNameKeySpecifier),
		fields?: PersonNameFieldPolicy,
	},
	Phone?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhoneKeySpecifier | (() => undefined | PhoneKeySpecifier),
		fields?: PhoneFieldPolicy,
	},
	PositionFormattedDescription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionFormattedDescriptionKeySpecifier | (() => undefined | PositionFormattedDescriptionKeySpecifier),
		fields?: PositionFormattedDescriptionFieldPolicy,
	},
	PositionFormattedDescriptionIdentifier?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionFormattedDescriptionIdentifierKeySpecifier | (() => undefined | PositionFormattedDescriptionIdentifierKeySpecifier),
		fields?: PositionFormattedDescriptionIdentifierFieldPolicy,
	},
	PositionHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionHistoryKeySpecifier | (() => undefined | PositionHistoryKeySpecifier),
		fields?: PositionHistoryFieldPolicy,
	},
	PositionOpening?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionOpeningKeySpecifier | (() => undefined | PositionOpeningKeySpecifier),
		fields?: PositionOpeningFieldPolicy,
	},
	PositionOpeningConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionOpeningConnectionKeySpecifier | (() => undefined | PositionOpeningConnectionKeySpecifier),
		fields?: PositionOpeningConnectionFieldPolicy,
	},
	PositionOpeningEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionOpeningEdgeKeySpecifier | (() => undefined | PositionOpeningEdgeKeySpecifier),
		fields?: PositionOpeningEdgeFieldPolicy,
	},
	PositionPreference?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionPreferenceKeySpecifier | (() => undefined | PositionPreferenceKeySpecifier),
		fields?: PositionPreferenceFieldPolicy,
	},
	PositionProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionProfileKeySpecifier | (() => undefined | PositionProfileKeySpecifier),
		fields?: PositionProfileFieldPolicy,
	},
	PositionProfileClosedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionProfileClosedEventKeySpecifier | (() => undefined | PositionProfileClosedEventKeySpecifier),
		fields?: PositionProfileClosedEventFieldPolicy,
	},
	PositionProfilePostedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionProfilePostedEventKeySpecifier | (() => undefined | PositionProfilePostedEventKeySpecifier),
		fields?: PositionProfilePostedEventFieldPolicy,
	},
	PostPositionPayload_Conflict?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostPositionPayload_ConflictKeySpecifier | (() => undefined | PostPositionPayload_ConflictKeySpecifier),
		fields?: PostPositionPayload_ConflictFieldPolicy,
	},
	PostPositionPayload_Success?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostPositionPayload_SuccessKeySpecifier | (() => undefined | PostPositionPayload_SuccessKeySpecifier),
		fields?: PostPositionPayload_SuccessFieldPolicy,
	},
	PostPositionProfileForOpeningPayload_Conflict?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostPositionProfileForOpeningPayload_ConflictKeySpecifier | (() => undefined | PostPositionProfileForOpeningPayload_ConflictKeySpecifier),
		fields?: PostPositionProfileForOpeningPayload_ConflictFieldPolicy,
	},
	PostPositionProfileForOpeningPayload_Success?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostPositionProfileForOpeningPayload_SuccessKeySpecifier | (() => undefined | PostPositionProfileForOpeningPayload_SuccessKeySpecifier),
		fields?: PostPositionProfileForOpeningPayload_SuccessFieldPolicy,
	},
	PostPositionProfileForOpening_PositionProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostPositionProfileForOpening_PositionProfilePayloadKeySpecifier | (() => undefined | PostPositionProfileForOpening_PositionProfilePayloadKeySpecifier),
		fields?: PostPositionProfileForOpening_PositionProfilePayloadFieldPolicy,
	},
	PostPosition_PositionOpeningPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostPosition_PositionOpeningPayloadKeySpecifier | (() => undefined | PostPosition_PositionOpeningPayloadKeySpecifier),
		fields?: PostPosition_PositionOpeningPayloadFieldPolicy,
	},
	PostPosition_PositionProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostPosition_PositionProfilePayloadKeySpecifier | (() => undefined | PostPosition_PositionProfilePayloadKeySpecifier),
		fields?: PostPosition_PositionProfilePayloadFieldPolicy,
	},
	PostedPositionProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostedPositionProfileKeySpecifier | (() => undefined | PostedPositionProfileKeySpecifier),
		fields?: PostedPositionProfileFieldPolicy,
	},
	PostingInstruction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostingInstructionKeySpecifier | (() => undefined | PostingInstructionKeySpecifier),
		fields?: PostingInstructionFieldPolicy,
	},
	PostingRequester?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostingRequesterKeySpecifier | (() => undefined | PostingRequesterKeySpecifier),
		fields?: PostingRequesterFieldPolicy,
	},
	PreferredLocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreferredLocationKeySpecifier | (() => undefined | PreferredLocationKeySpecifier),
		fields?: PreferredLocationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RemunerationAmount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemunerationAmountKeySpecifier | (() => undefined | RemunerationAmountKeySpecifier),
		fields?: RemunerationAmountFieldPolicy,
	},
	RemunerationPackage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemunerationPackageKeySpecifier | (() => undefined | RemunerationPackageKeySpecifier),
		fields?: RemunerationPackageFieldPolicy,
	},
	RemunerationRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemunerationRangeKeySpecifier | (() => undefined | RemunerationRangeKeySpecifier),
		fields?: RemunerationRangeFieldPolicy,
	},
	ReplayWebhookSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReplayWebhookSubscriptionPayloadKeySpecifier | (() => undefined | ReplayWebhookSubscriptionPayloadKeySpecifier),
		fields?: ReplayWebhookSubscriptionPayloadFieldPolicy,
	},
	SeekAnzAdProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeekAnzAdProductKeySpecifier | (() => undefined | SeekAnzAdProductKeySpecifier),
		fields?: SeekAnzAdProductFieldPolicy,
	},
	SeekAnzAdProductCheckoutEstimate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeekAnzAdProductCheckoutEstimateKeySpecifier | (() => undefined | SeekAnzAdProductCheckoutEstimateKeySpecifier),
		fields?: SeekAnzAdProductCheckoutEstimateFieldPolicy,
	},
	SeekAnzAdProductContractConsumption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeekAnzAdProductContractConsumptionKeySpecifier | (() => undefined | SeekAnzAdProductContractConsumptionKeySpecifier),
		fields?: SeekAnzAdProductContractConsumptionFieldPolicy,
	},
	SeekAnzAdProductFeatures?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeekAnzAdProductFeaturesKeySpecifier | (() => undefined | SeekAnzAdProductFeaturesKeySpecifier),
		fields?: SeekAnzAdProductFeaturesFieldPolicy,
	},
	SeekAnzAdProductMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeekAnzAdProductMessageKeySpecifier | (() => undefined | SeekAnzAdProductMessageKeySpecifier),
		fields?: SeekAnzAdProductMessageFieldPolicy,
	},
	SeekAnzAdProductPrice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeekAnzAdProductPriceKeySpecifier | (() => undefined | SeekAnzAdProductPriceKeySpecifier),
		fields?: SeekAnzAdProductPriceFieldPolicy,
	},
	SeekProcessHistoryItemSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeekProcessHistoryItemSourceKeySpecifier | (() => undefined | SeekProcessHistoryItemSourceKeySpecifier),
		fields?: SeekProcessHistoryItemSourceFieldPolicy,
	},
	SeekVideo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeekVideoKeySpecifier | (() => undefined | SeekVideoKeySpecifier),
		fields?: SeekVideoFieldPolicy,
	},
	SelfOrganizations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelfOrganizationsKeySpecifier | (() => undefined | SelfOrganizationsKeySpecifier),
		fields?: SelfOrganizationsFieldPolicy,
	},
	SpecifiedPerson?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SpecifiedPersonKeySpecifier | (() => undefined | SpecifiedPersonKeySpecifier),
		fields?: SpecifiedPersonFieldPolicy,
	},
	UnpostedPositionProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnpostedPositionProfileKeySpecifier | (() => undefined | UnpostedPositionProfileKeySpecifier),
		fields?: UnpostedPositionProfileFieldPolicy,
	},
	UpdateCandidateProcessHistoryItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCandidateProcessHistoryItemPayloadKeySpecifier | (() => undefined | UpdateCandidateProcessHistoryItemPayloadKeySpecifier),
		fields?: UpdateCandidateProcessHistoryItemPayloadFieldPolicy,
	},
	UpdatePositionOpeningPersonContactsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePositionOpeningPersonContactsPayloadKeySpecifier | (() => undefined | UpdatePositionOpeningPersonContactsPayloadKeySpecifier),
		fields?: UpdatePositionOpeningPersonContactsPayloadFieldPolicy,
	},
	UpdatePositionOpeningStatusPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePositionOpeningStatusPayloadKeySpecifier | (() => undefined | UpdatePositionOpeningStatusPayloadKeySpecifier),
		fields?: UpdatePositionOpeningStatusPayloadFieldPolicy,
	},
	UpdatePostedPositionProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePostedPositionProfilePayloadKeySpecifier | (() => undefined | UpdatePostedPositionProfilePayloadKeySpecifier),
		fields?: UpdatePostedPositionProfilePayloadFieldPolicy,
	},
	UpdatePostedPositionProfile_PositionProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePostedPositionProfile_PositionProfilePayloadKeySpecifier | (() => undefined | UpdatePostedPositionProfile_PositionProfilePayloadKeySpecifier),
		fields?: UpdatePostedPositionProfile_PositionProfilePayloadFieldPolicy,
	},
	UpdateUnpostedPositionProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUnpostedPositionProfilePayloadKeySpecifier | (() => undefined | UpdateUnpostedPositionProfilePayloadKeySpecifier),
		fields?: UpdateUnpostedPositionProfilePayloadFieldPolicy,
	},
	UpdateUploadedCandidatePersonPayload_Conflict?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUploadedCandidatePersonPayload_ConflictKeySpecifier | (() => undefined | UpdateUploadedCandidatePersonPayload_ConflictKeySpecifier),
		fields?: UpdateUploadedCandidatePersonPayload_ConflictFieldPolicy,
	},
	UpdateUploadedCandidatePersonPayload_Success?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUploadedCandidatePersonPayload_SuccessKeySpecifier | (() => undefined | UpdateUploadedCandidatePersonPayload_SuccessKeySpecifier),
		fields?: UpdateUploadedCandidatePersonPayload_SuccessFieldPolicy,
	},
	UpdateUploadedCandidateProfileActionsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUploadedCandidateProfileActionsPayloadKeySpecifier | (() => undefined | UpdateUploadedCandidateProfileActionsPayloadKeySpecifier),
		fields?: UpdateUploadedCandidateProfileActionsPayloadFieldPolicy,
	},
	UpdateUploadedCandidateProfileDatesPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUploadedCandidateProfileDatesPayloadKeySpecifier | (() => undefined | UpdateUploadedCandidateProfileDatesPayloadKeySpecifier),
		fields?: UpdateUploadedCandidateProfileDatesPayloadFieldPolicy,
	},
	UpdateUploadedCandidateProfilePositionPreferencesPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUploadedCandidateProfilePositionPreferencesPayloadKeySpecifier | (() => undefined | UpdateUploadedCandidateProfilePositionPreferencesPayloadKeySpecifier),
		fields?: UpdateUploadedCandidateProfilePositionPreferencesPayloadFieldPolicy,
	},
	UpdateWebhookSubscriptionDeliveryConfigurationPayload_Conflict?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateWebhookSubscriptionDeliveryConfigurationPayload_ConflictKeySpecifier | (() => undefined | UpdateWebhookSubscriptionDeliveryConfigurationPayload_ConflictKeySpecifier),
		fields?: UpdateWebhookSubscriptionDeliveryConfigurationPayload_ConflictFieldPolicy,
	},
	UpdateWebhookSubscriptionDeliveryConfigurationPayload_Success?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateWebhookSubscriptionDeliveryConfigurationPayload_SuccessKeySpecifier | (() => undefined | UpdateWebhookSubscriptionDeliveryConfigurationPayload_SuccessKeySpecifier),
		fields?: UpdateWebhookSubscriptionDeliveryConfigurationPayload_SuccessFieldPolicy,
	},
	UpdateWebhookSubscriptionSigningConfigurationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateWebhookSubscriptionSigningConfigurationPayloadKeySpecifier | (() => undefined | UpdateWebhookSubscriptionSigningConfigurationPayloadKeySpecifier),
		fields?: UpdateWebhookSubscriptionSigningConfigurationPayloadFieldPolicy,
	},
	UploadCandidatePayload_Conflict?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadCandidatePayload_ConflictKeySpecifier | (() => undefined | UploadCandidatePayload_ConflictKeySpecifier),
		fields?: UploadCandidatePayload_ConflictFieldPolicy,
	},
	UploadCandidatePayload_Success?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadCandidatePayload_SuccessKeySpecifier | (() => undefined | UploadCandidatePayload_SuccessKeySpecifier),
		fields?: UploadCandidatePayload_SuccessFieldPolicy,
	},
	WebUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebUrlKeySpecifier | (() => undefined | WebUrlKeySpecifier),
		fields?: WebUrlFieldPolicy,
	},
	WebhookAttempt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookAttemptKeySpecifier | (() => undefined | WebhookAttemptKeySpecifier),
		fields?: WebhookAttemptFieldPolicy,
	},
	WebhookAttemptEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookAttemptEdgeKeySpecifier | (() => undefined | WebhookAttemptEdgeKeySpecifier),
		fields?: WebhookAttemptEdgeFieldPolicy,
	},
	WebhookAttemptsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookAttemptsConnectionKeySpecifier | (() => undefined | WebhookAttemptsConnectionKeySpecifier),
		fields?: WebhookAttemptsConnectionFieldPolicy,
	},
	WebhookRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookRequestKeySpecifier | (() => undefined | WebhookRequestKeySpecifier),
		fields?: WebhookRequestFieldPolicy,
	},
	WebhookRequestEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookRequestEdgeKeySpecifier | (() => undefined | WebhookRequestEdgeKeySpecifier),
		fields?: WebhookRequestEdgeFieldPolicy,
	},
	WebhookRequestsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookRequestsConnectionKeySpecifier | (() => undefined | WebhookRequestsConnectionKeySpecifier),
		fields?: WebhookRequestsConnectionFieldPolicy,
	},
	WebhookSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookSubscriptionKeySpecifier | (() => undefined | WebhookSubscriptionKeySpecifier),
		fields?: WebhookSubscriptionFieldPolicy,
	},
	WebhookSubscriptionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookSubscriptionEdgeKeySpecifier | (() => undefined | WebhookSubscriptionEdgeKeySpecifier),
		fields?: WebhookSubscriptionEdgeFieldPolicy,
	},
	WebhookSubscriptionReplay?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookSubscriptionReplayKeySpecifier | (() => undefined | WebhookSubscriptionReplayKeySpecifier),
		fields?: WebhookSubscriptionReplayFieldPolicy,
	},
	WebhookSubscriptionReplayEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookSubscriptionReplayEdgeKeySpecifier | (() => undefined | WebhookSubscriptionReplayEdgeKeySpecifier),
		fields?: WebhookSubscriptionReplayEdgeFieldPolicy,
	},
	WebhookSubscriptionReplaysConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookSubscriptionReplaysConnectionKeySpecifier | (() => undefined | WebhookSubscriptionReplaysConnectionKeySpecifier),
		fields?: WebhookSubscriptionReplaysConnectionFieldPolicy,
	},
	WebhookSubscriptionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookSubscriptionsConnectionKeySpecifier | (() => undefined | WebhookSubscriptionsConnectionKeySpecifier),
		fields?: WebhookSubscriptionsConnectionFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;