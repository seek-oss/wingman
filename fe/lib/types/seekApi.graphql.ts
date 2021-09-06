export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /**
   * A date string compliant with the ISO 8601 "year", "year and month" or "complete date" formats.
   *
   * For example, `"2020"`, `"2020-05"` and `"2020-05-27"` are all valid for `HistoryDate`.
   *
   * This is used for dates in a candidate's position & employment histories where the precise month or day may not have been provided.
   */
  HistoryDate: string;
}

/** A physical address. */
export interface Address {
  __typename?: 'Address';
  /** The street line address. */
  line?: Maybe<Scalars['String']>;
  /**
   * An array of additional address lines.
   *
   * These may include an apartment or suite number.
   */
  extendedLines: Array<AddressComponent>;
  /** The two-letter ISO 3166-1:2013 country code, in uppercase. */
  countryCode?: Maybe<Scalars['String']>;
  /**
   * An array of further divisions of the country.
   *
   * These may include districts, regions, states, provinces, etc.
   */
  countrySubDivisions: Array<AddressComponent>;
  /** The city or suburb of the address. */
  city?: Maybe<Scalars['String']>;
  /** The postal code of the address. */
  postalCode?: Maybe<Scalars['String']>;
  /** The geographical coordinates of the address. */
  geoLocation?: Maybe<GeoLocation>;
  /** The formatted representation of the whole address for display purposes. */
  formattedAddress?: Maybe<Scalars['String']>;
}

/** An individual component of a physical address. */
export interface AddressComponent {
  __typename?: 'AddressComponent';
  /**
   * The type of the address component.
   *
   * Currently, the following components are defined:
   *
   * - `Apartment` indicates an address line for an apartment, unit or suite.
   * - `State` indicates a state or internal territory country subdivision.
   */
  type: Scalars['String'];
  /** The actual component value. */
  value: Scalars['String'];
}

/** An individual component of a physical address. */
export interface AddressComponentInput {
  /**
   * The type of the address component.
   *
   * Currently, the following components are defined:
   *
   * - `Apartment` indicates an address line for an apartment, unit or suite.
   * - `State` indicates a state or internal territory country subdivision.
   */
  type: Scalars['String'];
  /** The actual component value. */
  value: Scalars['String'];
}

/** A physical address. */
export interface AddressInput {
  /** The street line address. */
  line?: Maybe<Scalars['String']>;
  /**
   * An array of additional address lines.
   *
   * These may include an apartment or suite number.
   *
   * A maximum of 5 extended lines may be provided.
   */
  extendedLines: Array<AddressComponentInput>;
  /** The two-letter ISO 3166-1:2013 country code, in uppercase. */
  countryCode: Scalars['String'];
  /**
   * An array of further divisions of the country.
   *
   * These may include districts, regions, states, provinces, etc.
   *
   * A maximum of 5 subdivisions may be provided.
   */
  countrySubDivisions: Array<AddressComponentInput>;
  /** The city or suburb of the address. */
  city: Scalars['String'];
  /**
   * The postal code of the address.
   *
   * This field has a maximum length of 50 bytes in UTF-8 encoding.
   */
  postalCode: Scalars['String'];
  /** The geographical coordinates of the address. */
  geoLocation?: Maybe<GeoLocationInput>;
  /**
   * The formatted representation of the whole address for display purposes.
   *
   * This field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  formattedAddress?: Maybe<Scalars['String']>;
}

/**
 * Advertisement branding details and images.
 *
 * This can be associated with one or more `PositionProfile`s when they are created.
 *
 * Branding images are visible to candidates searching for positions or viewing a job ad with this associated advertisement branding.
 */
export interface AdvertisementBranding {
  __typename?: 'AdvertisementBranding';
  /** The identifier for the `AdvertisementBranding`. */
  id: ObjectIdentifier;
  /** The advertisement branding name. */
  name: Scalars['String'];
  /** A list of images associated with the advertisement branding. */
  images: Array<AdvertisementBrandingImage>;
  /** The organization that has the advertisement branding. */
  hirer: HiringOrganization;
}

/** An advertisement branding in a paginated list. */
export interface AdvertisementBrandingEdge {
  __typename?: 'AdvertisementBrandingEdge';
  /**
   * The opaque cursor to advertisement branding.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual advertisement branding. */
  node: AdvertisementBranding;
}

/** A visual representation of advertisement branding. */
export interface AdvertisementBrandingImage {
  __typename?: 'AdvertisementBrandingImage';
  /**
   * The type of advertisement branding image.
   *
   * Currently, two codes are defined:
   *
   * - `OriginalLogo` indicates the original advertisement branding logo image from which other logo images are derived.
   *
   * - `CoverImage` indicates an optional cover image to be displayed on the top of job ads.
   */
  typeCode: Scalars['String'];
  /**
   * The URL of the advertisement branding image.
   *
   * This can be retrieved to visually identify an advertisement branding in a partner system.
   */
  url: Scalars['String'];
}

/** A page of advertisement brandings for a hirer. */
export interface AdvertisementBrandingsConnection {
  __typename?: 'AdvertisementBrandingsConnection';
  /**
   * The page of advertisement brandings and their corresponding cursors.
   *
   * This list may be empty.
   */
  edges: Array<AdvertisementBrandingEdge>;
  /** The pagination metadata for this page of advertisement brandings. */
  pageInfo: PageInfo;
}

/** A method of applying to a position. */
export interface ApplicationMethod {
  __typename?: 'ApplicationMethod';
  /**
   * A URL of an external application form.
   *
   * When this is provided, SEEK's native apply form will be disabled and the candidate will be redirected to the supplied URL.
   */
  applicationUri?: Maybe<WebUrl>;
  /**
   * The email address that candidate applications are directed to.
   * @deprecated This has been replaced by Application Export
   */
  applicationEmail?: Maybe<Email>;
}

/** A method of applying to a position. */
export interface ApplicationMethodInput {
  /**
   * A URL of an external application form.
   *
   * When this is provided, SEEK's native apply form will be disabled and the candidate will be redirected to the supplied URL.
   * This requires that the hirer has an `HiringOrganizationApiCapabilities.applicationMethodCodes` that includes `ApplicationUri`.
   */
  applicationUri?: Maybe<WebUrlInput>;
}

/**
 * A privacy policy consent component of an `ApplicationQuestionnaire`.
 *
 * This consists of a URL for candidates to view the privacy policy and text to prompt the candidate as to whether or not they agree.
 *
 * The privacy policy consent component presents the candidate with a 'Yes' or 'No' choice.
 */
export interface ApplicationPrivacyConsent
  extends ApplicationQuestionnaireComponent {
  __typename?: 'ApplicationPrivacyConsent';
  /** The identifier for the `ApplicationQuestionnaireComponent`. */
  id: ObjectIdentifier;
  /**
   * The type of the component.
   *
   * This is always `PrivacyConsent`.
   */
  componentTypeCode: Scalars['String'];
  /**
   * A partner provided unique reference ID to the question.
   *
   * This can be used to correlate the question with the submitted question components.
   */
  value?: Maybe<Scalars['String']>;
  /** The URL of the privacy policy to show to the candidate. */
  privacyPolicyUrl: WebUrl;
  /**
   * The HTML snippet to prompt the candidate for consent.
   *
   * Unsupported tags will be silently stripped when creating a questionnaire.
   *
   * This is optional and will default to 'Do you agree to the privacy policy?'.
   */
  descriptionHtml?: Maybe<Scalars['String']>;
}

/**
 * A privacy policy consent component of an `ApplicationQuestionnaire`.
 *
 * This consists of a URL for candidates to view the privacy policy and text to prompt the candidate as to whether or not they agree.
 *
 * The privacy policy consent component always defaults the available response choices for the candidate to 'Yes' and 'No'.
 */
export interface ApplicationPrivacyConsentInput {
  /**
   * The type of the component.
   *
   * This is always `PrivacyConsent`.
   */
  componentTypeCode: Scalars['String'];
  /**
   * A partner provided unique reference ID to the consent component.
   *
   * This can be used to correlate the consent component with the submitted response.
   */
  value?: Maybe<Scalars['String']>;
  /**
   * The URL of the privacy policy to show to the candidate.
   *
   * The `url` field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  privacyPolicyUrl: WebUrlInput;
  /**
   * The HTML snippet to prompt the candidate for consent.
   *
   * Unsupported tags will be silently stripped when creating a questionnaire.
   *
   * This is optional and will default to 'Do you agree to the privacy policy?'.
   */
  descriptionHtml?: Maybe<Scalars['String']>;
}

/** A candidate's response to a privacy policy consent component in the questionnaire. */
export interface ApplicationPrivacyConsentResponse
  extends ApplicationQuestionnaireComponentResponse {
  __typename?: 'ApplicationPrivacyConsentResponse';
  /** The privacy consent component this is responding to. */
  component: ApplicationPrivacyConsent;
  /**
   * The type of the component.
   *
   * This is always `PrivacyConsent`.
   */
  componentTypeCode: Scalars['String'];
  /** This indicates whether or not the candidate agrees to the provided privacy policy. */
  consentGivenIndicator: Scalars['Boolean'];
}

/**
 * A question component of an `ApplicationQuestionnaire`.
 *
 * This consists of label text displayed to a user and an input for them to select a response.
 */
export interface ApplicationQuestion extends ApplicationQuestionnaireComponent {
  __typename?: 'ApplicationQuestion';
  /** The identifier for the `ApplicationQuestionnaireComponent`. */
  id: ObjectIdentifier;
  /**
   * The type of the component.
   *
   * This is always `Question`.
   */
  componentTypeCode: Scalars['String'];
  /**
   * A partner provided unique reference ID to the question.
   *
   * This can be used to correlate the question with the submitted question components.
   */
  value?: Maybe<Scalars['String']>;
  /**
   * The HTML snippet of the question being asked to the candidate.
   *
   * Unsupported tags will be silently stripped when creating a questionnaire.
   */
  questionHtml: Scalars['String'];
  /**
   * The type of the question response.
   *
   * Currently, three codes are defined:
   *
   * - `FreeText` for a free text response.
   * - `MultiSelect` for choosing one or more responses from `responseChoice`.
   * - `SingleSelect` for choosing a single response from `responseChoice`.
   */
  responseTypeCode: Scalars['String'];
  /**
   * The collection of possible responses.
   *
   * For `SingleSelect` and `MultiSelect` this must contain at least one element.
   */
  responseChoice?: Maybe<Array<ApplicationQuestionChoice>>;
}

/** A single answer to a question in the questionnaire. */
export interface ApplicationQuestionAnswer {
  __typename?: 'ApplicationQuestionAnswer';
  /**
   * The questionnaire choice for the current answer.
   *
   * For `FreeText` questions this will be `null`.
   */
  choice?: Maybe<ApplicationQuestionChoice>;
  /** The text value of the selected answer. */
  answer: Scalars['String'];
}

/** A possible response to an `ApplicationQuestion`. */
export interface ApplicationQuestionChoice {
  __typename?: 'ApplicationQuestionChoice';
  /** The identifier for the `ApplicationQuestionChoice`. */
  id: ObjectIdentifier;
  /** Text of the choice displayed to the candidate. */
  text: Scalars['String'];
  /**
   * A partner provided unique reference ID to the question choice.
   *
   * This can be used to correlate the question with the submitted answers.
   */
  value?: Maybe<Scalars['String']>;
  /**
   * Whether this choice is preferred when scoring the answers.
   *
   * This is not displayed to the candidate.
   */
  preferredIndicator: Scalars['Boolean'];
}

/** A possible response to an `ApplicationQuestion`. */
export interface ApplicationQuestionChoiceInput {
  /** Text of the choice displayed to the candidate. */
  text: Scalars['String'];
  /**
   * A unique ID for this choice.
   *
   * This can be used to correlate the choice with the provided answers.
   * This must be unique within the questionnaire.
   */
  value: Scalars['String'];
  /**
   * Whether this choice is preferred when scoring the answers.
   *
   * This is not displayed to the candidate.
   */
  preferredIndicator: Scalars['Boolean'];
}

/**
 * A question component of an `ApplicationQuestionnaire`.
 *
 * This consists of label text displayed to a user and an input for them to select a response.
 */
export interface ApplicationQuestionInput {
  /**
   * The type of the component.
   *
   * This is always `Question`.
   */
  componentTypeCode: Scalars['String'];
  /**
   * The HTML snippet of the question being asked to the candidate.
   *
   * Unsupported tags will be silently stripped when creating a questionnaire.
   */
  questionHtml: Scalars['String'];
  /**
   * The type of the question response.
   *
   * Currently, three codes are defined:
   *
   * - `FreeText` for a free text response.
   * - `MultiSelect` for choosing one or more responses from `responseChoice`.
   * - `SingleSelect` for choosing a single response from `responseChoice`.
   */
  responseTypeCode: Scalars['String'];
  /**
   * A unique ID for this question.
   *
   * This can be used to correlate the question with the provided answers.
   * This must be unique within the questionnaire.
   */
  value: Scalars['String'];
  /**
   * The collection of possible responses.
   *
   * For `SingleSelect` and `MultiSelect` this must contain at least one element.
   */
  responseChoice?: Maybe<Array<ApplicationQuestionChoiceInput>>;
}

/** A candidate's response to a question in the questionnaire. */
export interface ApplicationQuestionResponse
  extends ApplicationQuestionnaireComponentResponse {
  __typename?: 'ApplicationQuestionResponse';
  /** The question this is responding to. */
  component: ApplicationQuestion;
  /**
   * The type of the component.
   *
   * This is always `Question`.
   */
  componentTypeCode: Scalars['String'];
  /**
   * The answers provided by the candidate.
   *
   * For `SingleSelect` and `FreeText` this will be a single element array.
   */
  answers: Array<ApplicationQuestionAnswer>;
  /**
   * How well the candidate answered the question against the hirer's preferences.
   *
   * The score is calculated differently based on the `responseTypeCode`:
   *
   * - For `FreeText`, the score will be null.
   * - For `MultiSelect`, the score will be between 0 and 1 as a floating point.
   *   For example, if the candidate selected half of the preferred answers, the score would be 0.5.
   * - For `SingleSelect`, the score will be either 1 or 0 based off whether or not the candidate selected a preferred answer.
   */
  score?: Maybe<Scalars['Float']>;
}

/**
 * A set of questions presented to a candidate during an application.
 *
 * This can be associated with one or more `PositionProfile`s when they are created.
 */
export interface ApplicationQuestionnaire {
  __typename?: 'ApplicationQuestionnaire';
  /** The identifier for the `ApplicationQuestionnaire`. */
  id: ObjectIdentifier;
  /** The array of components in the order they are presented to the candidate. */
  components: Array<ApplicationQuestionnaireComponent>;
}

/**
 * A component of an application questionnaire.
 *
 * This only contains identifying metadata;
 * the `componentTypeCode` can be used to determine the concrete type of the component.
 */
export interface ApplicationQuestionnaireComponent {
  /** The identifier for the `ApplicationQuestionnaireComponent`. */
  id: ObjectIdentifier;
  /**
   * The type of the component.
   *
   * Currently, two codes are defined:
   *
   * - `PrivacyConsent` which corresponds to the `ApplicationPrivacyConsent` type.
   * - `Question` which corresponds to the `ApplicationQuestion` type.
   */
  componentTypeCode: Scalars['String'];
  /**
   * A partner provided unique reference ID to the component.
   *
   * This can be used to correlate the component with the submission.
   */
  value?: Maybe<Scalars['String']>;
}

/** A component of the questionnaire to be created. */
export interface ApplicationQuestionnaireComponentInput {
  /**
   * The type of the component.
   *
   * Currently, two codes are defined:
   *
   * - `PrivacyConsent` corresponds to the `privacyConsent` field.
   * - `Question` corresponds to the `question` field.
   */
  componentTypeCode: Scalars['String'];
  /**
   * A question component of an `ApplicationQuestionnaire`.
   *
   * This must be provided if the `componentTypeCode` is `Question`.
   */
  question?: Maybe<ApplicationQuestionInput>;
  /**
   * A privacy consent component of an `ApplicationQuestionnaire`.
   *
   * This must be provided if the `componentTypeCode` is `PrivacyConsent`.
   */
  privacyConsent?: Maybe<ApplicationPrivacyConsentInput>;
}

/**
 * A response to a component in a questionnaire.
 *
 * This only contains metadata related to the component responded to in the questionnaire.
 * The implementation of a response is based on the `componentTypeCode` of its component.
 */
export interface ApplicationQuestionnaireComponentResponse {
  /** The component this is responding to. */
  component: ApplicationQuestionnaireComponent;
  /**
   * The type of the component.
   *
   * Currently, two codes are defined:
   *
   * - `PrivacyConsent` which corresponds to the `ApplicationPrivacyConsent` type.
   * - `Question` which corresponds to the `ApplicationQuestion` type.
   */
  componentTypeCode: Scalars['String'];
}

/** A completed candidate submission for an `ApplicationQuestionnaire`. */
export interface ApplicationQuestionnaireSubmission {
  __typename?: 'ApplicationQuestionnaireSubmission';
  /** The set of questions presented to the candidate during the application. */
  questionnaire: ApplicationQuestionnaire;
  /** The candidate's responses to the application's questionnaire. */
  responses: Array<ApplicationQuestionnaireComponentResponse>;
  /**
   * The indication of how well the candidate scored on all questions in the questionnaire.
   *
   * The score is a calculation between 0 and 1 as a floating point.
   * For example, if the candidate received a score of 1 on one question, and a score of 0 on another, this overall score would be calculated as 0.5.
   * If there are no scored questions this score will be null.
   */
  score?: Maybe<Scalars['Float']>;
}

/** The details of a position that a candidate is associated with. */
export interface AssociatedPositionOpening {
  __typename?: 'AssociatedPositionOpening';
  /**
   * The identifier for the `PositionOpening`.
   *
   * This is included for HR-JSON compatibility;
   * GraphQL users should use the `positionOpening` nested object instead.
   */
  positionOpeningId: ObjectIdentifier;
  /** The position opening that the candidate is associated with. */
  positionOpening: PositionOpening;
  /**
   * A resource identifier for the position.
   *
   * This identifies the relevant position profile within the position opening.
   * It can be matched with the position profile `positionUri` field.
   *
   * - For candidate application profiles from the Application Export use case,
   *   this is the public web URL of the posted job ad.
   *
   * - For purchased candidate profiles from the Proactive Sourcing use case,
   *   this is the object identifier of the relevant unposted position profile.
   */
  positionUri: Scalars['String'];
  /**
   * Whether the candidate applied to this associated position.
   *
   * This is `false` for purchased profiles from the Proactive Sourcing use case.
   */
  candidateAppliedIndicator?: Maybe<Scalars['Boolean']>;
}

/** A profile attachment stored at an external URL. */
export interface Attachment {
  __typename?: 'Attachment';
  /**
   * The identifier for the `Attachment`.
   *
   * This is unique across all attachments.
   */
  id: ObjectIdentifier;
  /**
   * A download URL for the attachment.
   *
   * This URL accepts partner tokens or browser tokens that include the `download:candidate-profile-attachments` scope.
   * This is guaranteed to be an absolute URL with an origin of `https://graphql.seek.com`.
   */
  url: Scalars['String'];
  /**
   * An array of human readable descriptions of the attachment.
   *
   * Resumes & cover letters can be programmatically identified using the  `seekRoleCode` field.
   */
  descriptions: Array<Scalars['String']>;
  /**
   * The role of the attachment within a profile.
   *
   * Currently, two codes are defined:
   *
   * - `Resume` is used for a candidate's resume or CV.
   * - `CoverLetter` is used for a candidate's cover letter for a specific position.
   *
   * Additional documents will have a `null` role code.
   * They can be distinguished by their free text `descriptions`.
   */
  seekRoleCode?: Maybe<Scalars['String']>;
  /**
   * The role of the attachment within a profile.
   * @deprecated Use seekRoleCode
   */
  seekRole?: Maybe<SeekAttachmentRole>;
}

/**
 * A person who applied for a position at a company.
 *
 * If the same person applies to multiple hirers they will have distinct `Candidate` objects created.
 */
export interface Candidate {
  __typename?: 'Candidate';
  /**
   * The identifier for the `Candidate`.
   *
   * This is unique for a given hirer & person.
   */
  documentId: ObjectIdentifier;
  /**
   * The candidate's primary email address.
   *
   * The value is only set for candidates with `CandidateSource` value `PartnerUpload`.
   * Values will be unique within a given hirer.
   */
  seekPrimaryEmailAddress?: Maybe<Scalars['String']>;
  /** Instructions on how this candidate should be distributed. */
  distributionGuidelines: DistributionGuidelines;
  /**
   * Information to identify the person,
   * including their name and methods of communicating with the person.
   */
  person: CandidatePerson;
  /**
   * The list of profiles associated with with the candidate.
   *
   * Each submitted application for a position will have an associated profile.
   */
  profiles: Array<CandidateProfile>;
}

/**
 * The event signaling that a candidate has applied for a `PositionOpening`.
 *
 * A candidate may apply for the same position opening more than once.
 * Each application will trigger a new event with a distinct `id`.
 */
export interface CandidateApplicationCreatedEvent extends Event {
  __typename?: 'CandidateApplicationCreatedEvent';
  /** The identifier for the `Event`. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * Currently, only the `seekAnz` and `seekAnzPublicTest` schemes emit `CandidateApplicationCreated` events.
   */
  schemeId: Scalars['String'];
  /** The type of event, i.e. `CandidateApplicationCreated`. */
  typeCode: Scalars['String'];
  /**
   * The date & time the application was accepted from the candidate.
   *
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /**
   * The identifier for the specific `CandidateProfile` associated with the application.
   *
   * This can be used to retrieve structured candidate details with the `candidateProfile` query.
   */
  candidateApplicationProfileId: Scalars['String'];
  /** The identifier for the `Candidate` that applied for the position opening. */
  candidateId: Scalars['String'];
  /**
   * The `Candidate` that applied for the position opening.
   *
   * This will include the candidate's personal details along with all application profiles for a single hirer.
   */
  candidate: Candidate;
  /** The `CandidateProfile` associated with the application. */
  candidateApplicationProfile: CandidateProfile;
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/**
 * The event signaling that a candidate has applied for a `PositionOpening`.
 *
 * A candidate may apply for the same position opening more than once.
 * Each application will trigger a new event with a distinct `id`.
 */
export interface CandidateApplicationCreatedEventWebhookAttemptsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookAttemptsFilterInput>;
}

/** Information about a person not specific to a candidate profile. */
export interface CandidatePerson {
  __typename?: 'CandidatePerson';
  /** The person's name. */
  name: PersonName;
  /** Methods of communication with the person. */
  communication: Communication;
}

/** Information about a person not specific to a candidate profile. */
export interface CandidatePersonInput {
  /** The person's name. */
  name: PersonNameInput;
  /** Methods of communication with the person. */
  communication: CommunicationInput;
}

/** An action that can be executed as part of a workflow process. */
export interface CandidateProcessAction {
  __typename?: 'CandidateProcessAction';
  /**
   * The code of the action.
   *
   * Currently, the following action codes are defined:
   *
   * - `AgencySubmission`
   * - `CandidateWorkflowTransition`
   * - `Document`
   * - `Email`
   * - `Note`
   * - `PhoneCall`
   * - `PostPlacementActivity`
   * - `Screening`
   * - `StatusChange`
   * - `VerificationActivity`
   * - `Other`
   */
  code: Scalars['String'];
  /** The free-form description of the action. */
  description?: Maybe<Scalars['String']>;
  /** A short human-readable name for the workflow step. */
  name?: Maybe<Scalars['String']>;
  /** A deep link to the action. */
  seekUrl?: Maybe<WebUrl>;
}

/** An action that can be executed as part of a workflow process. */
export interface CandidateProcessActionInput {
  /**
   * The code of the action.
   *
   * For process history actions, the following action codes are defined:
   *
   * - `AgencySubmission`
   * - `CandidateWorkflowTransition`
   * - `Document`
   * - `Email`
   * - `Note`
   * - `PhoneCall`
   * - `PostPlacementActivity`
   * - `Screening`
   * - `StatusChange`
   * - `VerificationActivity`
   * - `Other`
   *
   * For profile actions, one action code is defined:
   *
   * - `ViewProfile` indicates that the URL is used to view the candidate's profile.
   */
  code: Scalars['String'];
  /**
   * The free-form description of the action.
   *
   * This is required for a process history action of an uploaded candidate.
   *
   * This field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * A short human-readable name of the workflow process.
   *
   * This is required for a process history action of an uploaded candidate.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * A deep link to the action.
   *
   * This is required for a profile action of an uploaded candidate.
   *
   * The `url` field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  seekUrl?: Maybe<WebUrlInput>;
}

/** A single item in a `CandidateProfile`'s workflow process history. */
export interface CandidateProcessHistoryItem {
  __typename?: 'CandidateProcessHistoryItem';
  /** The identifier for the `CandidateProcessHistoryItem`. */
  id: ObjectIdentifier;
  /** The `CandidateProfile` that the `CandidateProcessHistoryItem` relates to. */
  candidateProfile: CandidateProfile;
  /** The date & time the action was executed. */
  actionDate: Scalars['DateTime'];
  /**
   * The executed action that constitutes this history item.
   *
   * This action may or may not trigger a change in the status of the underlying process.
   * For example, an action may be to add a note against a candidate's profile,
   * which has no material effect on the stage through the application process.
   */
  action: CandidateProcessAction;
  /**
   * The current status of the underlying process.
   *
   * For example, a candidate in an application process may progress through a series of statuses like applied, interviewed, offered, hired.
   */
  status?: Maybe<CandidateProcessStatus>;
  /**
   * The position profile that the history item relates to.
   *
   * This is null for interactions that are not specific to an individual position,
   * such as a general interview with a recruiter.
   * It will also be null where an unknown `profileId` was provided or the position profile has since been deleted.
   */
  positionProfile?: Maybe<PositionProfile>;
  /**
   * The underlying source for the item.
   *
   * For example, items related to an application process would note the job board or other channel that sourced the application.
   */
  seekSource?: Maybe<SeekProcessHistoryItemSource>;
  /** The parties that executed the action. */
  primaryParties: Array<CandidateProcessParty>;
}

/** A page of candidate process history items. */
export interface CandidateProcessHistoryItemConnection {
  __typename?: 'CandidateProcessHistoryItemConnection';
  /**
   * The page of candidate process history items and their corresponding cursors.
   *
   * This list may be empty.
   */
  edges: Array<CandidateProcessHistoryItemEdge>;
  /** The pagination metadata for this page of candidate process history items. */
  pageInfo: PageInfo;
}

/** A candidate process history item in a paginated list. */
export interface CandidateProcessHistoryItemEdge {
  __typename?: 'CandidateProcessHistoryItemEdge';
  /**
   * The opaque cursor to the candidate process history item.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual candidate process history item. */
  node: CandidateProcessHistoryItem;
}

/** A single item in a `CandidateProfile`'s workflow process history. */
export interface CandidateProcessHistoryItemInput {
  /** The date & time the action was executed. */
  actionDate: Scalars['DateTime'];
  /**
   * The executed action that constitutes this history item.
   *
   * This action may or may not trigger a change in the status of the underlying process.
   * For example, an action may be to add a note against a candidate's profile,
   * which has no material effect on the stage through the application process.
   */
  action: CandidateProcessActionInput;
  /**
   * The current status of the underlying process.
   *
   * For example, a candidate in an application process may progress through a series of statuses like applied, interviewed, offered, hired.
   */
  status?: Maybe<CandidateProcessStatusInput>;
  /**
   * The position profile that the history item relates to.
   *
   * This is null for interactions that are not specific to an individual position,
   * such as a general interview with a recruiter.
   */
  positionProfile?: Maybe<CandidateProcessHistoryItemPositionProfileInput>;
  /**
   * The underlying source for the item.
   *
   * For example, items related to an application process would note the job board or other channel that sourced the application.
   *
   * This is required if `positionProfile` is specified.
   */
  seekSource?: Maybe<SeekProcessHistoryItemSourceInput>;
  /**
   * The parties that executed the action.
   *
   * At least one party is required for a process history item of an uploaded candidate.
   * A maximum of 10 primary parties may be provided.
   */
  primaryParties: Array<CandidateProcessPartyInput>;
}

/** A position profile associated with a workflow process. */
export interface CandidateProcessHistoryItemPositionProfileInput {
  /** The identifier for the `PositionProfile`. */
  profileId: Scalars['String'];
}

/**
 * A party that contributes to a workflow process.
 *
 * This may be a person, organization, or both.
 */
export interface CandidateProcessParty {
  __typename?: 'CandidateProcessParty';
  /** The individual person that is contributing to the workflow process. */
  person?: Maybe<SpecifiedPerson>;
  /** The organization that is contributing to the workflow process. */
  organization?: Maybe<Organization>;
}

/**
 * A party that contributes to a workflow process.
 *
 * This may be a person, organization, or both.
 */
export interface CandidateProcessPartyInput {
  /** The individual person that is contributing to the workflow process. */
  person?: Maybe<SpecifiedPersonInput>;
  /** The organization that is contributing to the workflow process. */
  organization?: Maybe<OrganizationInput>;
}

/** A status of a workflow process. */
export interface CandidateProcessStatus {
  __typename?: 'CandidateProcessStatus';
  /**
   * The code of the status of the underlying process.
   *
   * Currently, the following status codes are defined:
   *
   * - `AgencyShortlist`
   * - `AgencySubmission`
   * - `Application`
   * - `HirerShortlist`
   * - `Interview`
   * - `Offer`
   * - `ReferenceCheck`
   * - `Successful`
   * - `TestingOrQualificationsCheck`
   * - `Unsuccessful`
   */
  code: Scalars['String'];
}

/** A status of a workflow process. */
export interface CandidateProcessStatusInput {
  /**
   * The code of the status of the underlying process.
   *
   * Currently, the following status codes are defined:
   *
   * - `AgencyShortlist`
   * - `AgencySubmission`
   * - `Application`
   * - `HirerShortlist`
   * - `Interview`
   * - `Offer`
   * - `ReferenceCheck`
   * - `Successful`
   * - `TestingOrQualificationsCheck`
   * - `Unsuccessful`
   */
  code: Scalars['String'];
}

/** Structured information about a candidate in relation to a particular position. */
export interface CandidateProfile {
  __typename?: 'CandidateProfile';
  /**
   * The `Candidate` that this profile relates to.
   *
   * This contains the candidate's personal details along with all their profiles for the same hirer.
   */
  candidate: Candidate;
  /**
   * The identifier for the `CandidateProfile`.
   *
   * This profile can be queried at any time by passing this identifier string to `candidateProfile`.
   */
  profileId: ObjectIdentifier;
  /** The date & time the candidate was associated with the position. */
  createDateTime: Scalars['DateTime'];
  /** The position openings associated with this candidate profile. */
  associatedPositionOpenings: Array<AssociatedPositionOpening>;
  /**
   * The primary position profile for this candidate profile.
   *
   * This is a convenience field to avoid an extra hop through `associatedPositionOpenings`.
   *
   * - For candidate applications, this is the job ad that the candidate applied to.
   * - For purchased profiles, this is the unposted position profile that the purchase is scoped to.
   * - For uploaded candidate profiles, this is always `null`.
   */
  associatedPositionProfile?: Maybe<PositionProfile>;
  /** The attachments related to the candidate's profile. */
  attachments: Array<Attachment>;
  /** The employment history of the candidate. */
  employment: Array<EmployerHistory>;
  /** The education history of the candidate. */
  education: Array<EducationAttendance>;
  /** The skills or competencies of the candidate. */
  qualifications: Array<PersonCompetency>;
  /** The certifications and licenses the candidate holds. */
  certifications: Array<Certification>;
  /** The sources from which the candidate was obtained from. */
  candidateSources: Array<CandidateSource>;
  /**
   * The candidate's preferences in an ideal position.
   *
   * This is only available for uploaded candidate profiles.
   * For candidate applications & purchased profiles this will be an empty list.
   */
  positionPreferences: Array<PositionPreference>;
  /** The date & time the candidate profile was last updated. */
  updateDateTime: Scalars['DateTime'];
  /** A list of executable actions linked to the candidate profile. */
  seekActions: Array<CandidateProcessAction>;
  /**
   * The workflow process history of the candidate.
   *
   * A maximum of 20 process history items can be returned in a single page.
   * Additional items can be queried using a pagination cursor.
   *
   * This is null for non-uploaded candidates.
   */
  seekProcessHistory?: Maybe<CandidateProcessHistoryItemConnection>;
  /** The completed candidate submission for the position profile's questionnaire. */
  seekQuestionnaireSubmission?: Maybe<ApplicationQuestionnaireSubmission>;
}

/** Structured information about a candidate in relation to a particular position. */
export interface CandidateProfileSeekProcessHistoryArgs {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
}

/** The event signaling that a `CandidateProfile` has been purchased. */
export interface CandidateProfilePurchasedEvent extends Event {
  __typename?: 'CandidateProfilePurchasedEvent';
  /** The identifier for the `Event`. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * Currently, only the `seekAnz` and `seekAnzPublicTest` schemes emit `CandidateProfilePurchased` events.
   */
  schemeId: Scalars['String'];
  /** The type of event, i.e. `CandidateProfilePurchased`. */
  typeCode: Scalars['String'];
  /**
   * The date & time the `CandidateProfile` was purchased.
   *
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /** The identifier for the `CandidateProfile` that was purchased. */
  candidateProfileId: Scalars['String'];
  /** The `CandidateProfile` that was purchased. */
  candidateProfile: CandidateProfile;
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/** The event signaling that a `CandidateProfile` has been purchased. */
export interface CandidateProfilePurchasedEventWebhookAttemptsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookAttemptsFilterInput>;
}

/** A source from which the candidate was obtained from. */
export interface CandidateSource {
  __typename?: 'CandidateSource';
  /** Free text description of the source. */
  name: Scalars['String'];
  /**
   * The grouping that the source falls under.
   *
   * Currently, three types are defined:
   *
   * - `PartnerUpload` indicates that the candidate was uploaded to SEEK from a partner system.
   * - `SeekApplication` indicates that the candidate applied for a position on the SEEK job board.
   * - `SeekPurchase` indicates that the candidate profile was purchased from SEEK Talent Search.
   */
  type: Scalars['String'];
}

/** A certification or license held by the candidate. */
export interface Certification {
  __typename?: 'Certification';
  /** The free text name of the certification. */
  name: Scalars['String'];
  /**
   * The time period for which the certification is effective.
   *
   * This will be `null` if the expiration date is unknown or not provided.
   */
  effectiveTimePeriod?: Maybe<EffectiveTimePeriod>;
  /**
   * The date the certification was last issued.
   *
   * This will be `null` if the issue date is unknown or not provided.
   */
  issued?: Maybe<Scalars['HistoryDate']>;
  /**
   * The date the certification was issued.
   *
   * This will be `null` if the issue date is unknown or not provided.
   * @deprecated Use `issued`.
   */
  issueDate?: Maybe<Scalars['HistoryDate']>;
  /** The organization that issued the certification. */
  issuingAuthority?: Maybe<Organization>;
  /**
   * Human readable descriptions of the certification.
   *
   * This can contain multiple descriptions from two different sources:
   *
   * 1. Free text descriptions provided by the candidate.
   * 2. Human readable descriptions automatically generated from SEEK's internal structured data.
   */
  descriptions: Array<Scalars['String']>;
}

/** The input parameter for the `closePostedPositionProfile` mutation. */
export interface ClosePostedPositionProfileInput {
  /** The details of the position profile to be closed. */
  positionProfile: ClosePostedPositionProfilePositionProfileInput;
}

/** The output of the `closePostedPositionProfile` mutation. */
export interface ClosePostedPositionProfilePayload {
  __typename?: 'ClosePostedPositionProfilePayload';
  /** Attributes of the closed position profile. */
  positionProfile: ClosePostedPositionProfilePositionProfilePayload;
}

/** The details of the position profile to be closed. */
export interface ClosePostedPositionProfilePositionProfileInput {
  /** The identifier for the posted `PositionProfile` to be closed. */
  profileId: Scalars['String'];
}

/** Attributes of the closed position profile. */
export interface ClosePostedPositionProfilePositionProfilePayload {
  __typename?: 'ClosePostedPositionProfile_PositionProfilePayload';
  /** The identifier for the closed `PositionProfile`. */
  profileId: ObjectIdentifier;
}

/** Communication channels for a person. */
export interface Communication {
  __typename?: 'Communication';
  /**
   * An array of phone numbers for the person.
   *
   * The phone numbers are ordered in descending preference.
   */
  phone: Array<Phone>;
  /**
   * An array of email addresses for the person.
   *
   * The email addresses are ordered in descending preference.
   */
  email: Array<Email>;
  /**
   * An array of physical addresses for the person.
   *
   * The physical addresses are ordered in descending preference.
   */
  address: Array<Address>;
}

/** Communication channels for a person. */
export interface CommunicationInput {
  /**
   * An array of phone numbers for the person.
   *
   * The phone numbers are ordered in descending preference.
   *
   * A maximum of 5 phone numbers may be provided.
   */
  phone: Array<PhoneInput>;
  /**
   * An array of email addresses for the person.
   *
   * The email addresses are ordered in descending preference.
   *
   * A maximum of 5 email addresses may be provided.
   */
  email: Array<EmailInput>;
  /**
   * An array of physical addresses for the person.
   *
   * The physical addresses are ordered in descending preference.
   *
   * A maximum of 5 physical addresses may be provided.
   */
  address?: Maybe<Array<AddressInput>>;
}

/** The input parameter for the `createApplicationQuestionnaire` mutation. */
export interface CreateApplicationQuestionnaireInput {
  /** The details of the questionnaire to be created. */
  applicationQuestionnaire: CreateApplicationQuestionnaireApplicationQuestionnaireInput;
}

/** The response from the `createApplicationQuestionnaire` mutation. */
export interface CreateApplicationQuestionnairePayload {
  __typename?: 'CreateApplicationQuestionnairePayload';
  /** The details of the created questionnaire. */
  applicationQuestionnaire: ApplicationQuestionnaire;
}

/** The details of the questionnaire to be created. */
export interface CreateApplicationQuestionnaireApplicationQuestionnaireInput {
  /**
   * The identifier for the `HiringOrganization` that will own the questionnaire.
   *
   * Hirers can only associate position profiles with questionnaires they own.
   */
  hirerId: Scalars['String'];
  /** The array of components in the order they are presented to the candidate. */
  components: Array<ApplicationQuestionnaireComponentInput>;
}

/** The input parameter for the `createCandidateProcessHistoryItem` mutation. */
export interface CreateCandidateProcessHistoryItemInput {
  /** The details of the `CandidateProfile` that the `CandidateProcessHistoryItem` belongs to. */
  candidateProfile: CreateCandidateProcessHistoryItemCandidateProfileInput;
  /** The details of the `CandidateProcessHistoryItem` to be added to the `CandidateProfile`. */
  candidateProcessHistoryItem: CreateCandidateProcessHistoryItemCandidateProcessHistoryItemInput;
}

/** The response from the `createCandidateProcessHistoryItem` mutation. */
export type CreateCandidateProcessHistoryItemPayload =
  | CreateCandidateProcessHistoryItemPayloadConflict
  | CreateCandidateProcessHistoryItemPayloadSuccess;

/** The conflict result for the `createCandidateProcessHistoryItem` mutation. */
export interface CreateCandidateProcessHistoryItemPayloadConflict {
  __typename?: 'CreateCandidateProcessHistoryItemPayload_Conflict';
  /** The details of the conflicting `CandidateProcessHistoryItem`. */
  conflictingCandidateProcessHistoryItem: CandidateProcessHistoryItem;
  /** The `CandidateProfile` that the `CandidateProcessHistoryItem` belongs to. */
  candidateProfile: CandidateProfile;
}

/** The success result for the `createCandidateProcessHistoryItem` mutation. */
export interface CreateCandidateProcessHistoryItemPayloadSuccess {
  __typename?: 'CreateCandidateProcessHistoryItemPayload_Success';
  /** The details of the `CandidateProcessHistoryItem` created. */
  candidateProcessHistoryItem: CandidateProcessHistoryItem;
  /** The `CandidateProfile` that the `CandidateProcessHistoryItem` belongs to. */
  candidateProfile: CandidateProfile;
}

/** The candidate process history to create. */
export interface CreateCandidateProcessHistoryItemCandidateProcessHistoryItemInput {
  /**
   * An identifier to ensure that multiple candidate process history items are not created on retries.
   *
   * The identifier must be unique within the given candidate profile.
   * The same identifier must be provided when retrying after create failures.
   */
  idempotencyId: Scalars['String'];
  /** The date & time the action was executed. */
  actionDate: Scalars['DateTime'];
  /**
   * The executed action that constitutes this history item.
   *
   * This action may or may not trigger a change in the status of the underlying process.
   * For example, an action may be to add a note against a candidate's profile,
   * which has no material effect on the stage through the application process.
   */
  action: CandidateProcessActionInput;
  /**
   * The current status of the underlying process.
   *
   * For example, a candidate in an application process may progress through a series of statuses like applied, interviewed, offered, hired.
   */
  status?: Maybe<CandidateProcessStatusInput>;
  /**
   * The position profile that the history item relates to.
   *
   * This is null for interactions that are not specific to an individual position,
   * such as a general interview with a recruiter.
   */
  positionProfile?: Maybe<CandidateProcessHistoryItemPositionProfileInput>;
  /**
   * The underlying source for the item.
   *
   * For example, items related to an application process would note the job board or other channel that sourced the application.
   *
   * This is required if `positionProfile` is specified.
   */
  seekSource?: Maybe<SeekProcessHistoryItemSourceInput>;
  /** The parties that executed the action. */
  primaryParties: Array<CandidateProcessPartyInput>;
}

/** The candidate profile that the process history item belongs to. */
export interface CreateCandidateProcessHistoryItemCandidateProfileInput {
  /** The identifier for the `CandidateProfile` that the `CandidateProcessHistoryItem` relates to. */
  profileId: Scalars['String'];
}

/** The input parameter for the `createPositionOpening` mutation. */
export interface CreatePositionOpeningInput {
  /** The details of the position opening to be created. */
  positionOpening: CreatePositionOpeningPositionOpeningInput;
}

/** The response from the `createPositionOpening` mutation. */
export interface CreatePositionOpeningPayload {
  __typename?: 'CreatePositionOpeningPayload';
  /** The details of the created position opening. */
  positionOpening: PositionOpening;
}

/** The details of the position opening to be created. */
export interface CreatePositionOpeningPositionOpeningInput {
  /** The party that owns the position opening. */
  postingRequester: PostingRequesterInput;
  /**
   * An optional field for storing additional data with a `PositionOpening`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
  /**
   * The status of the position opening.
   *
   * Defaults to `Active` if no value is provided.
   *
   * Currently, three codes are defined:
   *
   * - `Incomplete` indicates the position opening is in draft.
   * - `Active` indicates the position opening is open.
   * - `Closed` indicates the position opening has been closed.
   */
  statusCode?: Maybe<Scalars['String']>;
}

/** Information about how to post a job ad and where to direct its candidate applications. */
export interface CreatePostingInstructionInput {
  /**
   * A SEEK ANZ advertisement type code.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic job ad.
   * - `StandOut` indicates a StandOut job ad.
   * - `Premium` indicates a Premium job ad.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field is required.
   * - For other schemes, set this to `null`.
   */
  seekAnzAdvertisementType?: Maybe<Scalars['String']>;
  /**
   * The end date of the posting.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme this must be no more than 30 days in the future.
   *
   *   If the end date is not specified it will default to the maximum period of 30 calendar days.
   *   The precise end date can be queried from the `PostingInstruction.end` field once the job ad goes live.
   */
  end?: Maybe<Scalars['DateTime']>;
  /**
   * An identifier to ensure that multiple ads are not created on retries.
   *
   * A unique identifier needs to be generated by your software for each position profile.
   * The same identifier must be provided when retrying after create failures.
   * Your identifiers are isolated from and will not conflict with those generated by other recruitment software providers.
   */
  idempotencyId: Scalars['String'];
  /**
   * An array of methods for applying to the position.
   *
   * If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
   * Native applications will emit a `CandidateApplicationCreated` event that points to a `CandidateProfile` object.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field is limited to a single element.
   *   Requests with more than 1 element will fail.
   */
  applicationMethods?: Maybe<Array<ApplicationMethodInput>>;
  /**
   * The identifier for the `AdvertisementBranding` to apply to the posted job ad.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field's behavior is dependent on the `SeekAnzAdProductFeatures` of the product set in the `seekAnzAdvertisementType` field.
   *
   *   When the product's `SeekAnzAdProductFeatures.brandingIndicator` value is false, this field will be silently ignored.
   */
  brandingId?: Maybe<Scalars['String']>;
}

/** The input parameter for the `createUnpostedPositionProfileForOpening` mutation. */
export interface CreateUnpostedPositionProfileForOpeningInput {
  /** An unposted profile of a position opening to create. */
  positionProfile: CreateUnpostedPositionProfileForOpeningPositionProfileInput;
}

/** The response from the `createUnpostedPositionProfileForOpening` mutation. */
export interface CreateUnpostedPositionProfileForOpeningPayload {
  __typename?: 'CreateUnpostedPositionProfileForOpeningPayload';
  /** Attributes of the newly created unposted position profile. */
  positionProfile: UnpostedPositionProfile;
}

/** An unposted profile of a position opening to create. */
export interface CreateUnpostedPositionProfileForOpeningPositionProfileInput {
  /** The identifier for the `PositionOpening` that this position profile belongs to. */
  positionOpeningId: Scalars['String'];
  /**
   * A human-readable name given to the profile.
   *
   * This in addition to the `positionTitle` can help identify the profile to an end user.
   */
  profileName?: Maybe<Scalars['String']>;
  /**
   * A short phrase describing the position as it would be listed on a business card or in a company directory.
   *
   * This field has a maximum length of 80 bytes in UTF-8 encoding.
   */
  positionTitle: Scalars['String'];
  /**
   * The identifier for the `HiringOrganization` that has the position.
   *
   * This should contain exactly one element that matches the `postingRequester` on the position opening.
   */
  positionOrganizations: Array<Scalars['String']>;
  /**
   * An optional hirer-provided opaque job reference.
   *
   * This field has a maximum length of 50 bytes in UTF-8 encoding.
   */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * SEEK does not use this field on unposted position profiles.
   *
   * This field has a maximum length of 50 bytes in UTF-8 encoding.
   */
  seekBillingReference?: Maybe<Scalars['String']>;
  /**
   * An array of formatted position profile descriptions.
   *
   * A maximum of 10 formatted descriptions may be provided.
   */
  positionFormattedDescriptions: Array<PositionFormattedDescriptionInput>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   */
  positionScheduleTypeCodes?: Maybe<Array<Scalars['String']>>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackageInput;
  /**
   * An array of `JobCategory` identifiers.
   *
   * A maximum of 10 job categories may be provided.
   */
  jobCategories: Array<Scalars['String']>;
  /**
   * An array of `Location` identifiers.
   *
   * A maximum of 10 locations may be provided.
   */
  positionLocation: Array<Scalars['String']>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
}

/** The input parameter for the `createWebhookSubscription` mutation. */
export interface CreateWebhookSubscriptionInput {
  /** The details of the webhook subscription to be created. */
  webhookSubscription: CreateWebhookSubscriptionSubscriptionInput;
}

/** The response from the `createWebhookSubscription` mutation. */
export type CreateWebhookSubscriptionPayload =
  | CreateWebhookSubscriptionPayloadConflict
  | CreateWebhookSubscriptionPayloadSuccess;

/**
 * The conflict result for the `createWebhookSubscription` mutation.
 *
 * Webhook subscriptions must have a unique combination of `eventTypeCode`, `schemeId`, `url` & `hirerId` fields.
 * Attempting to create a duplicate webhook subscription will result in a conflict.
 */
export interface CreateWebhookSubscriptionPayloadConflict {
  __typename?: 'CreateWebhookSubscriptionPayload_Conflict';
  /** The details of the conflicting webhook subscription. */
  conflictingWebhookSubscription: WebhookSubscription;
}

/** The success result for the `createWebhookSubscription` mutation. */
export interface CreateWebhookSubscriptionPayloadSuccess {
  __typename?: 'CreateWebhookSubscriptionPayload_Success';
  /** The details of the created webhook subscription. */
  webhookSubscription: WebhookSubscription;
}

/** The details of the webhook subscription to be created. */
export interface CreateWebhookSubscriptionSubscriptionInput {
  /**
   * The type of event to subscribe to.
   *
   * See `Event` implementations for a list of supported values.
   */
  eventTypeCode: Scalars['String'];
  /**
   * The data source for the event.
   *
   * Currently, only `seekAnz` and `seekAnzPublicTest` are supported.
   */
  schemeId: Scalars['String'];
  /**
   * The optional hirer ID to receive events from.
   *
   * By default webhook subscriptions will send events from all hirers the partner has access to.
   * Providing a hirer ID will filter events to the specified hirer.
   */
  hirerId?: Maybe<Scalars['String']>;
  /** The subscriber-owned URL where events will be sent to. */
  url: Scalars['String'];
  /**
   * The maximum number of events that will be sent in each HTTP request.
   *
   * This number must be between 1 and 10 inclusive. Defaults to 10.
   */
  maxEventsPerAttempt?: Maybe<Scalars['Int']>;
  /**
   * The algorithm for signing webhooks.
   *
   * Currently, two codes are defined:
   *
   * - `None` indicates no signature will be attached.
   * - `SeekHmacSha512` indicates a HMAC SHA-512 hex digest will be attached to each request as a `Seek-Signature` header.
   *
   * A webhook's signature can be used to validate that the request originated from SEEK.
   *
   * Use a constant-time algorithm to validate the signature.
   * Regular comparison methods like the `==` operator are susceptible to timing attacks.
   */
  signingAlgorithmCode: Scalars['String'];
  /**
   * The secret for signing webhooks.
   *
   * This must be specified if `signingAlgorithmCode` is not `None`.
   * It is used as the key to generate a message authentication code for each request.
   *
   * The secret should be a random string with high entropy that is not reused for any other purpose.
   */
  secret?: Maybe<Scalars['String']>;
}

/**
 * A monetary amount expressed as an integer in a specified minor currency unit.
 *
 * This is used to avoid floating point rounding errors when expressing prices & funds.
 */
export interface CurrencyMinorUnit {
  __typename?: 'CurrencyMinorUnit';
  /**
   * A non-negative integer in the minor currency unit for the ISO currency code.
   *
   * For example, this is the number of cents in dollar-denominated currencies.
   */
  value: Scalars['Int'];
  /** The three-letter ISO 4217 currency code, in uppercase. */
  currency: Scalars['String'];
}

/** The input parameter for the `deleteCandidateProcessHistoryItem` mutation. */
export interface DeleteCandidateProcessHistoryItemInput {
  /** The details of the  `CandidateProcessHistoryItem` to be deleted. */
  candidateProcessHistoryItem: DeleteCandidateProcessHistoryItemCandidateProcessHistoryItemInput;
}

/** The response from the `deleteCandidateProcessHistoryItem` mutation. */
export interface DeleteCandidateProcessHistoryItemPayload {
  __typename?: 'DeleteCandidateProcessHistoryItemPayload';
  /** The details of the `CandidateProcessHistoryItem` that was deleted. */
  candidateProcessHistoryItem: CandidateProcessHistoryItem;
}

/** The details of the `CandidateProcessHistoryItem` to be deleted. */
export interface DeleteCandidateProcessHistoryItemCandidateProcessHistoryItemInput {
  /** The identifier for the `CandidateProcessHistoryItem` to be deleted. */
  id: Scalars['String'];
}

/** The input parameter for the `deletePositionOpening` mutation. */
export interface DeletePositionOpeningInput {
  /** The details of the position opening to be deleted. */
  positionOpening: DeletePositionOpeningPositionOpeningInput;
}

/** The response from the `deletePositionOpening` mutation. */
export interface DeletePositionOpeningPayload {
  __typename?: 'DeletePositionOpeningPayload';
  /** The details of the deleted position opening. */
  positionOpening: PositionOpening;
}

/** The details of the position opening to be deleted. */
export interface DeletePositionOpeningPositionOpeningInput {
  /** The identifier for the `PositionOpening` to be deleted. */
  documentId: Scalars['String'];
}

/** The input parameter for the `deleteUnpostedPositionProfile` mutation. */
export interface DeleteUnpostedPositionProfileInput {
  /** The details of the unposted position profile to be deleted. */
  positionProfile: DeleteUnpostedPositionProfilePositionProfileInput;
}

/** The response from the `deleteUnpostedPositionProfile` mutation. */
export interface DeleteUnpostedPositionProfilePayload {
  __typename?: 'DeleteUnpostedPositionProfilePayload';
  /** The details of the deleted unposted position profile. */
  positionProfile: UnpostedPositionProfile;
}

/** The details of the unposted position profile to be deleted. */
export interface DeleteUnpostedPositionProfilePositionProfileInput {
  /** The identifier for the unposted `PositionProfile`. */
  profileId: Scalars['String'];
}

/** The input parameter for the `deleteUploadedCandidate` mutation. */
export interface DeleteUploadedCandidateInput {
  /** The details of the uploaded `Candidate` to be deleted. */
  candidate: DeleteUploadedCandidateCandidateInput;
}

/** The response from the `deleteUploadedCandidate` mutation. */
export interface DeleteUploadedCandidatePayload {
  __typename?: 'DeleteUploadedCandidatePayload';
  /**
   * The details of the uploaded candidate that was deleted.
   *
   * The uploaded candidate profile is available in the `profiles` field.
   */
  candidate: Candidate;
}

/** The details of the uploaded candidate to be deleted. */
export interface DeleteUploadedCandidateCandidateInput {
  /** The identifier for the uploaded `Candidate` to be deleted. */
  documentId: Scalars['String'];
}

/** The input parameter for the `deleteWebhookSubscription` mutation. */
export interface DeleteWebhookSubscriptionInput {
  /** The details of the webhook subscription to be deleted. */
  webhookSubscription: DeleteWebhookSubscriptionSubscriptionInput;
}

/** The response from the `deleteWebhookSubscription` mutation. */
export interface DeleteWebhookSubscriptionPayload {
  __typename?: 'DeleteWebhookSubscriptionPayload';
  /** The details of the deleted webhook subscription. */
  webhookSubscription: WebhookSubscription;
}

/** The details of the webhook subscription to be deleted. */
export interface DeleteWebhookSubscriptionSubscriptionInput {
  /** The identifier for the `WebhookSubscription`. */
  id: Scalars['String'];
}

/** Instructions on how a candidate should be distributed. */
export interface DistributionGuidelines {
  __typename?: 'DistributionGuidelines';
  /**
   * The SEEK products that the candidate may be surfaced in.
   *
   * Currently, two codes are defined:
   *
   * - `CandidateManagement` indicates that the candidate may be viewed in SEEK Candidate Management.
   * - `ProactiveSourcing` indicates that the candidate may be viewed in SEEK Talent Search.
   */
  seekProductCodes: Array<Scalars['String']>;
}

/** Instructions on how a candidate should be distributed. */
export interface DistributionGuidelinesInput {
  /**
   * The SEEK products that the candidate may be surfaced in.
   *
   * Currently, one code is defined:
   *
   * - `ProactiveSourcing` indicates that the candidate may be viewed in SEEK Talent Search.
   */
  seekProductCodes: Array<Scalars['String']>;
}

/** The details documenting a person's attendance at an educational institution. */
export interface EducationAttendance {
  __typename?: 'EducationAttendance';
  /** The institution the person attended. */
  institution: Organization;
  /** The degrees which were awarded or in process at the institution. */
  educationDegrees: Array<EducationDegree>;
  /**
   * Additional free text descriptions of the person's attendance at the institution.
   *
   * This typically includes activities, honours, awards or specialities achieved during their study.
   */
  descriptions: Array<Scalars['String']>;
}

/** The details of a student's degree. */
export interface EducationDegree {
  __typename?: 'EducationDegree';
  /** The name of the degree. */
  name: Scalars['String'];
  /**
   * The granted status of the degree.
   *
   * Currently, two statuses are defined:
   *
   * - `InProgress` indicates the student is still completing the degree.
   * - `Granted` indicates the degree has been granted to the student.
   */
  degreeGrantedStatus: Scalars['String'];
  /**
   * The date the degree was granted or is expected to be granted.
   *
   * This may only contain a year and optional month, e.g. `2020` or `2020-06`.
   * If the date isn't known this will be `null`.
   */
  date?: Maybe<Scalars['HistoryDate']>;
}

/** A time period for which an associated object is effective. */
export interface EffectiveTimePeriod {
  __typename?: 'EffectiveTimePeriod';
  /**
   * The date which the associated object is no longer effective.
   *
   * For example, this corresponds to the expiry date of certifications.
   * This will be `null` if the associated object does not expire.
   */
  validTo?: Maybe<Scalars['HistoryDate']>;
}

/** An email address. */
export interface Email {
  __typename?: 'Email';
  /** The email address. */
  address: Scalars['String'];
}

/** An email address. */
export interface EmailInput {
  /** The email address. */
  address: Scalars['String'];
}

/** The details of a person's employment, work, or relevant experience. */
export interface EmployerHistory {
  __typename?: 'EmployerHistory';
  /** The specific organization to which the person held positions. */
  organization: Organization;
  /** The set of positions that the person held. */
  positionHistories: Array<PositionHistory>;
}

/**
 * A signal that an action has been performed on the SEEK platform that may be of interest to an integration partner.
 *
 * Events can be delivered via:
 *
 * - Webhook, using the `createWebhookSubscription` mutation
 * - GraphQL polling, using the paginated `events` query
 */
export interface Event {
  /** The identifier for the `Event`. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * Currently, only the `seekAnz` and `seekAnzPublicTest` schemes emit events.
   */
  schemeId: Scalars['String'];
  /**
   * The type of event.
   *
   * See `Event` implementations for a list of supported values.
   */
  typeCode: Scalars['String'];
  /**
   * The date & time the event was created.
   *
   * This is commonly linked to the creation of an object that can be retrieved from the SEEK API.
   *
   * The data source for this field differs by event type and scheme.
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/**
 * A signal that an action has been performed on the SEEK platform that may be of interest to an integration partner.
 *
 * Events can be delivered via:
 *
 * - Webhook, using the `createWebhookSubscription` mutation
 * - GraphQL polling, using the paginated `events` query
 */
export interface EventWebhookAttemptsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookAttemptsFilterInput>;
}

/** An event in a stream. */
export interface EventEdge {
  __typename?: 'EventEdge';
  /**
   * The opaque cursor to the event in the stream.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual event. */
  node: Event;
  /**
   * The date & time the event was added to the stream.
   *
   * Initial `afterDateTime` and `beforeDateTime` filters apply to this field.
   */
  streamDateTime: Scalars['DateTime'];
}

/** A page of events from a stream. */
export interface EventsConnection {
  __typename?: 'EventsConnection';
  /** The page of events and their corresponding cursors. */
  edges: Array<EventEdge>;
  /** The pagination metadata for this page of events. */
  pageInfo: PageInfo;
}

/**
 * The criteria to filter events by.
 *
 * These are `Event`-specific extensions on top of the standard pagination arguments `before`, `after`, `first` and `last`.
 */
export interface EventsFilterInput {
  /**
   * The stream date & time that resulting events must succeed.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `EventsConnection`.
   */
  afterDateTime?: Maybe<Scalars['DateTime']>;
  /**
   * The stream date & time that resulting events must precede.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `EventsConnection`.
   */
  beforeDateTime?: Maybe<Scalars['DateTime']>;
  /**
   * Whether the event was successfully delivered via the specified webhook `subscriptionId`.
   *
   * This filter does not apply if `subscriptionId` is not specified.
   */
  deliveredIndicator?: Maybe<Scalars['Boolean']>;
  /**
   * The types of events to retrieve.
   *
   * See `Event` implementations for a list of supported values.
   */
  eventTypeCodes?: Maybe<Array<Scalars['String']>>;
  /**
   * The subscription stream to retrieve events from.
   *
   * This can be used in combination with `deliveredIndicator` to identify events that were not successfully delivered through a particular webhook subscription.
   *
   * To consume events solely through GraphQL polling, do not specify this field.
   * This will retrieve events from a persistent stream that is not associated with a webhook subscription.
   */
  subscriptionId?: Maybe<Scalars['String']>;
}

/** A geographical coordinate. */
export interface GeoLocation {
  __typename?: 'GeoLocation';
  /** The latitude of the geographical location. */
  latitude: Scalars['Float'];
  /** The longitude of the geographical location. */
  longitude: Scalars['Float'];
}

/** A geographical coordinate. */
export interface GeoLocationInput {
  /** The latitude of the geographical location. */
  latitude: Scalars['Float'];
  /** The longitude of the geographical location. */
  longitude: Scalars['Float'];
}

/** The event signaling that a hirer relationship has been added or removed. */
export interface HirerRelationshipChangedEvent extends Event {
  __typename?: 'HirerRelationshipChangedEvent';
  /** The identifier for the `Event`. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * Currently, only the `seekAnz` and `seekAnzPublicTest` schemes emit `HirerRelationshipChanged` events.
   */
  schemeId: Scalars['String'];
  /** The type of event, i.e. `HirerRelationshipChanged`. */
  typeCode: Scalars['String'];
  /**
   * The date & time the hirer relationship was changed.
   *
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /** The identifier for the hiring organization for whom the relationship was changed. */
  hirerId: Scalars['String'];
  /**
   * The optional hiring organization for whom the relationship was changed.
   *
   * This will only be accessible if there is an active relationship between the partner and hirer.
   * If all relationships have been removed with the hirer this field will be return a `FORBIDDEN` error.
   */
  hirer?: Maybe<HiringOrganization>;
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/** The event signaling that a hirer relationship has been added or removed. */
export interface HirerRelationshipChangedEventWebhookAttemptsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookAttemptsFilterInput>;
}

/** An organization hiring for an open position. */
export interface HiringOrganization {
  __typename?: 'HiringOrganization';
  /** The identifier for the `HiringOrganization`. */
  id: ObjectIdentifier;
  /** The name of the hiring organization. */
  name: Scalars['String'];
  /**
   * The capabilities of the requesting partner to act on behalf of the hiring organization.
   *
   * This will be `null` for agencies; the SEEK API does not support acting on behalf of an agency.
   */
  seekApiCapabilities?: Maybe<HiringOrganizationApiCapabilities>;
  /**
   * The legacy SEEK ANZ advertiser ID.
   *
   * This is a numeric identifier used by legacy Job Posting & Application Export APIs in the `seekAnz` scheme.
   * For organizations in other schemes this will be `null`.
   */
  seekAnzAdvertiserId?: Maybe<Scalars['Int']>;
}

/**
 * The capabilities of the requesting partner to act on behalf of a hirer.
 *
 * This provides a read-only view of the configuration of a SEEK hirer for the current partner.
 */
export interface HiringOrganizationApiCapabilities {
  __typename?: 'HiringOrganizationApiCapabilities';
  /**
   * The active relationship types between the requesting partner and the hirer.
   *
   * Currently, three codes are defined:
   *
   * - `ApplicationExport` enables exporting candidate applications from SEEK's native apply functionality.
   *
   * - `JobPosting` enables posting job ads to the SEEK job board.
   *
   * - `ProactiveSourcing` enables hirers to proactively search for and connect with suitable candidates.
   */
  relationshipTypeCodes: Array<Scalars['String']>;
  /**
   * The supported methods of applying to job ads posted by the hirer.
   *
   * All SEEK hirers can use SEEK's native apply functionality by omitting the `ApplicationMethod` object when posting.
   * This enumerates additional application methods SEEK has configured for the hirer.
   *
   * Currently, one code is defined:
   *
   * - `ApplicationUri` indicates that job ads can link out to an external apply form.
   */
  applicationMethodCodes: Array<Scalars['String']>;
}

/** A hirer in a paginated list. */
export interface HiringOrganizationEdge {
  __typename?: 'HiringOrganizationEdge';
  /**
   * The opaque cursor to the hirer.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual hirer. */
  node: HiringOrganization;
}

/** A page of hirers. */
export interface HiringOrganizationsConnection {
  __typename?: 'HiringOrganizationsConnection';
  /** The page of hirers and their corresponding cursors. */
  edges: Array<HiringOrganizationEdge>;
  /** The pagination metadata for this page of hirers. */
  pageInfo: PageInfo;
}

/**
 * The criteria to filter hirers by.
 *
 * These are `HiringOrganization`-specific extensions on top of the standard pagination arguments `before`, `after`, `first` and `last`.
 */
export interface HiringOrganizationsFilterInput {
  /**
   * Filters on relationship types between the hirer and requesting partner.
   *
   * See the `HiringOrganizationApiCapabilities.relationshipTypeCodes` documentation for a list of relationship types.
   *
   * If this is not provided then all related hirers are returned.
   */
  relationshipTypeCodes?: Maybe<Array<Scalars['String']>>;
  /**
   * Filters on hirer names containing the provided case-insensitive substring.
   *
   * This is intended to support ad-hoc searches for hirers by name.
   */
  nameSearch?: Maybe<Scalars['String']>;
}

/** The category of a job's occupation. */
export interface JobCategory {
  __typename?: 'JobCategory';
  /** The identifier for the `JobCategory`. */
  id: ObjectIdentifier;
  /**
   * The parent job category.
   *
   * This is a more general classification that this category belongs to.
   * It will be `null` for root categories that do not belong to a more general classification.
   */
  parent?: Maybe<JobCategory>;
  /**
   * An array of child job categories.
   *
   * These are more specific categories that belong to this general classification.
   */
  children?: Maybe<Array<JobCategory>>;
  /** Name of the job category. */
  name: Scalars['String'];
}

/** A job category with information of the suggested choice. */
export interface JobCategorySuggestionChoice {
  __typename?: 'JobCategorySuggestionChoice';
  /**
   * The job category information of the suggestion choice.
   *
   * This will be a child job category suitable for posting a position profile.
   */
  jobCategory: JobCategory;
  /**
   * The confidence in the returned job category based on the suggestion input.
   *
   * This is a floating point value ranging from 0 (lowest) to 1 (highest).
   */
  confidence: Scalars['Float'];
}

/** The input parameter for the `jobCategorySuggestions` query. */
export interface JobCategorySuggestionPositionProfileInput {
  /** The position title. */
  positionTitle: Scalars['String'];
  /** An array of identifiers for the position's `Location`s. */
  positionLocation: Array<Scalars['String']>;
  /**
   * An array of identifiers for the `HiringOrganization`s that have the position.
   *
   * Information such as the organization's domicile can be used to refine the returned suggestions.
   */
  positionOrganizations?: Maybe<Array<Scalars['String']>>;
  /**
   * The descriptions for the position profile.
   *
   * Currently, only the `AdvertisementDetails` description is used.
   * Other descriptions will be accepted but are ignored when determining the relevance of suggestion.
   */
  positionFormattedDescriptions?: Maybe<
    Array<PositionFormattedDescriptionInput>
  >;
}

/** A physical location with a persistent identifier. */
export interface Location {
  __typename?: 'Location';
  /** The identifier for the `Location`. */
  id: ObjectIdentifier;
  /** The parent location. */
  parent?: Maybe<Location>;
  /** An array of child locations. */
  children?: Maybe<Array<Location>>;
  /**
   * The location name, e.g. "Richmond".
   *
   * This name is ambiguous without the context of its parent location.
   */
  name: Scalars['String'];
  /**
   * The contextual name of the location, e.g. "Richmond VIC 3121 AU".
   *
   * This name is sufficient to unambiguously identify the location to a hirer.
   */
  contextualName: Scalars['String'];
  /** The two-letter ISO 3166-1:2013 country code, in uppercase. */
  countryCode: Scalars['String'];
}

/** A suggested location. */
export interface LocationSuggestion {
  __typename?: 'LocationSuggestion';
  /** Location information of the choice. */
  location: Location;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface Mutation {
  __typename?: 'Mutation';
  /**
   * A placeholder string.
   * @deprecated Placeholder only
   */
  _empty?: Maybe<Scalars['String']>;
  /**
   * Creates a new questionnaire.
   *
   * This mutation accepts browser tokens that include the `mutate:application-questionnaires` scope.
   */
  createApplicationQuestionnaire: CreateApplicationQuestionnairePayload;
  /**
   * Creates a new position opening.
   *
   * Every position profile belongs to a position opening.
   * Multiple position profiles may belong to the same position opening.
   */
  createPositionOpening: CreatePositionOpeningPayload;
  /** Replaces an existing position opening's person contacts. */
  updatePositionOpeningPersonContacts?: Maybe<UpdatePositionOpeningPersonContactsPayload>;
  /**
   * Updates the status of a position opening.
   *
   * This status is provided to help hirers manage position openings.
   * The SEEK API does not use the position opening's status itself.
   */
  updatePositionOpeningStatus?: Maybe<UpdatePositionOpeningStatusPayload>;
  /**
   * Deletes an empty position opening.
   *
   * Each position profile that belongs to a position opening must be deleted before the position opening can be deleted.
   */
  deletePositionOpening?: Maybe<DeletePositionOpeningPayload>;
  /** Asynchronously posts a job ad for an existing position opening. */
  postPositionProfileForOpening: PostPositionProfileForOpeningPayload;
  /**
   * Asynchronously updates a live job ad.
   *
   * The position profile's existing fields will be replaced with the provided input fields.
   * This will update the live job ad under its current URL.
   */
  updatePostedPositionProfile?: Maybe<UpdatePostedPositionProfilePayload>;
  /**
   * Closes an existing posted position profile.
   *
   * The job ad will be removed from the job board and no refund will be issued.
   * The `PositionProfile` and its associated candidate applications will be available for 6 months after its close date.
   */
  closePostedPositionProfile?: Maybe<ClosePostedPositionProfilePayload>;
  /**
   * Asynchronously posts a job ad for a new position opening.
   *
   * This combines the `createPositionOpening` & `postPositionProfileForOpening` mutations in a single operation.
   */
  postPosition: PostPositionPayload;
  /** Creates a new unposted position profile for an opening. */
  createUnpostedPositionProfileForOpening: CreateUnpostedPositionProfileForOpeningPayload;
  /** Updates an existing unposted position profile. */
  updateUnpostedPositionProfile?: Maybe<UpdateUnpostedPositionProfilePayload>;
  /** Deletes an unposted position profile. */
  deleteUnpostedPositionProfile?: Maybe<DeleteUnpostedPositionProfilePayload>;
  /**
   * Deletes an uploaded candidate and their profile from SEEK's systems.
   *
   * This will also delete all `CandidateProcessHistoryItem`s belonging to the candidate profile.
   */
  deleteUploadedCandidate?: Maybe<DeleteUploadedCandidatePayload>;
  /** Uploads a candidate and their profile into SEEK's systems. */
  uploadCandidate: UploadCandidatePayload;
  /** Updates the personal details of an uploaded candidate. */
  updateUploadedCandidatePerson?: Maybe<UpdateUploadedCandidatePersonPayload>;
  /** Updates the actions associated with an uploaded candidate profile. */
  updateUploadedCandidateProfileActions?: Maybe<UpdateUploadedCandidateProfileActionsPayload>;
  /** Updates the dates associated with an uploaded candidate profile. */
  updateUploadedCandidateProfileDates?: Maybe<UpdateUploadedCandidateProfileDatesPayload>;
  /** Updates the position preferences associated with an uploaded candidate profile. */
  updateUploadedCandidateProfilePositionPreferences?: Maybe<UpdateUploadedCandidateProfilePositionPreferencesPayload>;
  /** Adds a process history item to an uploaded candidate's profile. */
  createCandidateProcessHistoryItem: CreateCandidateProcessHistoryItemPayload;
  /** Deletes a candidate process history item from SEEK's systems. */
  deleteCandidateProcessHistoryItem?: Maybe<DeleteCandidateProcessHistoryItemPayload>;
  /** Updates a candidate process history item. */
  updateCandidateProcessHistoryItem?: Maybe<UpdateCandidateProcessHistoryItemPayload>;
  /** Creates a new webhook subscription. */
  createWebhookSubscription: CreateWebhookSubscriptionPayload;
  /**
   * Updates an existing webhook subscription's delivery configuration.
   *
   * This modifies fields related to the URL and payload of an existing webhook subscription.
   * Changes may take up to half an hour to take effect.
   *
   * The fields that determine which events are to be delivered are immutable.
   * A new webhook subscription should be created for such cases.
   */
  updateWebhookSubscriptionDeliveryConfiguration?: Maybe<UpdateWebhookSubscriptionDeliveryConfigurationPayload>;
  /**
   * Updates an existing webhook subscription's signing configuration.
   *
   * This modifies fields related to the signature of an existing webhook subscription.
   * Changes may take up to half an hour to take effect.
   */
  updateWebhookSubscriptionSigningConfiguration?: Maybe<UpdateWebhookSubscriptionSigningConfigurationPayload>;
  /** Deletes an existing webhook subscription. */
  deleteWebhookSubscription?: Maybe<DeleteWebhookSubscriptionPayload>;
  /**
   * Replays a webhook subscription.
   *
   * This causes any matching events to be requeued for delivery.
   *
   * Resending occurs asynchronously in a background task.
   */
  replayWebhookSubscription?: Maybe<ReplayWebhookSubscriptionPayload>;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationCreateApplicationQuestionnaireArgs {
  input: CreateApplicationQuestionnaireInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationCreatePositionOpeningArgs {
  input: CreatePositionOpeningInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdatePositionOpeningPersonContactsArgs {
  input: UpdatePositionOpeningPersonContactsInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdatePositionOpeningStatusArgs {
  input: UpdatePositionOpeningStatusInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationDeletePositionOpeningArgs {
  input: DeletePositionOpeningInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationPostPositionProfileForOpeningArgs {
  input: PostPositionProfileForOpeningInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdatePostedPositionProfileArgs {
  input: UpdatePostedPositionProfileInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationClosePostedPositionProfileArgs {
  input: ClosePostedPositionProfileInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationPostPositionArgs {
  input: PostPositionInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationCreateUnpostedPositionProfileForOpeningArgs {
  input: CreateUnpostedPositionProfileForOpeningInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateUnpostedPositionProfileArgs {
  input: UpdateUnpostedPositionProfileInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationDeleteUnpostedPositionProfileArgs {
  input: DeleteUnpostedPositionProfileInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationDeleteUploadedCandidateArgs {
  input: DeleteUploadedCandidateInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUploadCandidateArgs {
  input: UploadCandidateInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateUploadedCandidatePersonArgs {
  input: UpdateUploadedCandidatePersonInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateUploadedCandidateProfileActionsArgs {
  input: UpdateUploadedCandidateProfileActionsInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateUploadedCandidateProfileDatesArgs {
  input: UpdateUploadedCandidateProfileDatesInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateUploadedCandidateProfilePositionPreferencesArgs {
  input: UpdateUploadedCandidateProfilePositionPreferencesInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationCreateCandidateProcessHistoryItemArgs {
  input: CreateCandidateProcessHistoryItemInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationDeleteCandidateProcessHistoryItemArgs {
  input: DeleteCandidateProcessHistoryItemInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateCandidateProcessHistoryItemArgs {
  input: UpdateCandidateProcessHistoryItemInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationCreateWebhookSubscriptionArgs {
  input: CreateWebhookSubscriptionInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateWebhookSubscriptionDeliveryConfigurationArgs {
  input: UpdateWebhookSubscriptionDeliveryConfigurationInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateWebhookSubscriptionSigningConfigurationArgs {
  input: UpdateWebhookSubscriptionSigningConfigurationInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationDeleteWebhookSubscriptionArgs {
  input: DeleteWebhookSubscriptionInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationReplayWebhookSubscriptionArgs {
  input: ReplayWebhookSubscriptionInput;
}

/** An opaque identifier for GraphQL objects. */
export interface ObjectIdentifier {
  __typename?: 'ObjectIdentifier';
  /** The identifier itself. */
  value: Scalars['String'];
}

/** Basic information to identify and reference a specific organization. */
export interface Organization {
  __typename?: 'Organization';
  /** The human readable name of the organization. */
  name: Scalars['String'];
}

/** Basic information to identify and reference a specific organization. */
export interface OrganizationInput {
  /** The human readable name of the organization. */
  name: Scalars['String'];
}

/**
 * Pagination metadata for a result list.
 *
 * This is compliant with the _Relay Cursor Connections Specification_:
 *
 * <https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo>
 */
export interface PageInfo {
  __typename?: 'PageInfo';
  /** Whether there is a previous page of results at the time of retrieval. */
  hasPreviousPage: Scalars['Boolean'];
  /** Whether there is a next page of results at the time of retrieval. */
  hasNextPage: Scalars['Boolean'];
  /** An opaque string cursor for retrieving the previous page of results. */
  startCursor?: Maybe<Scalars['String']>;
  /** An opaque string cursor for retrieving the next page of results. */
  endCursor?: Maybe<Scalars['String']>;
}

/** A partner organization for a `self` query. */
export interface PartnerOrganization {
  __typename?: 'PartnerOrganization';
  /** The name of the querying partner. */
  name: Scalars['String'];
}

/** A skill or competency asserted by the candidate. */
export interface PersonCompetency {
  __typename?: 'PersonCompetency';
  /** The human readable name of the competency. */
  competencyName: Scalars['String'];
}

/** The name of a person including a breakdown of name components. */
export interface PersonName {
  __typename?: 'PersonName';
  /** The formatted name of a person, as it would be written out together. */
  formattedName: Scalars['String'];
  /** The given name of a person, if provided. */
  given?: Maybe<Scalars['String']>;
  /** The family name (or surname) of a person, if provided. */
  family?: Maybe<Scalars['String']>;
}

/** The name of a person associated with an object. */
export interface PersonNameInput {
  /** The formatted name of a person, as it would be written out together. */
  formattedName: Scalars['String'];
  /** The optional given name of a person. */
  given?: Maybe<Scalars['String']>;
  /** The optional family name (or surname) of a person. */
  family?: Maybe<Scalars['String']>;
}

/** The phone number of a person. */
export interface Phone {
  __typename?: 'Phone';
  /** The phone number represented as a human readable string. */
  formattedNumber: Scalars['String'];
}

/** The phone number of a person. */
export interface PhoneInput {
  /** The phone number represented as a human readable string. */
  formattedNumber: Scalars['String'];
}

/** A formatted description of the position profile. */
export interface PositionFormattedDescription {
  __typename?: 'PositionFormattedDescription';
  /** The description type. */
  descriptionId: PositionFormattedDescriptionIdentifier;
  /** The HTML content of the description. */
  content: Scalars['String'];
}

/**
 * A description type identifier.
 *
 * This specifies the meaning of the description and determines where it's presented to the candidate.
 */
export interface PositionFormattedDescriptionIdentifier {
  __typename?: 'PositionFormattedDescriptionIdentifier';
  /**
   * The description type.
   *
   * Currently, three identifiers are defined:
   *
   * - `AdvertisementDetails` is the detailed description of the position that appears on the job ad.
   * - `SearchBulletPoint` is a highlight or selling point of the position that appears in search results.
   *   This will not appear on the job ad details page.
   *   SEEK ANZ allows up to three search bullet points when `SeekAnzAdProductFeatures`'s `searchBulletPointsIndicator` is true.
   * - `SearchSummary` is a short description that appears in search results.
   *   This will not appear on the job ad details page.
   */
  value: Scalars['String'];
}

/** A formatted description of the position profile. */
export interface PositionFormattedDescriptionInput {
  /**
   * The description type.
   *
   * Currently, three identifiers are defined:
   *
   * - `AdvertisementDetails` is the detailed description of the position that appears on the job ad.
   * - `SearchBulletPoint` is a highlight or selling point of the position that appears in search results.
   *   SEEK ANZ allows up to three search bullet points when `SeekAnzAdProductFeatures`'s `searchBulletPointsIndicator` is true.
   * - `SearchSummary` is a short description that appears in search results.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires `AdvertisementDetails` and `SearchSummary` to be included.
   */
  descriptionId: Scalars['String'];
  /**
   * The HTML content of the description.
   *
   * The maximum length differs by `descriptionId`:
   *
   *   - `AdvertisementDetails` has a maximum length of 20,000 bytes in UTF-8 encoding.
   *   - `SearchBulletPoint` has a maximum length of 80 bytes in UTF-8 encoding.
   *   - `SearchSummary` has a maximum length of 150 bytes in UTF-8 encoding.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme supports the following HTML tags in `AdvertisementDetails`:
   *
   *   - `a` (Available on a per hirer basis. Hirer must contact SEEK to enable.)
   *   - `br`
   *   - `div`
   *   - `em`
   *   - `h2`
   *   - `li`
   *   - `ol`
   *   - `p`
   *   - `strong`
   *   - `ul`
   *
   *   Other descriptions will have all HTML tags stripped.
   */
  content: Scalars['String'];
}

/** The details about a person's tenure within the position. */
export interface PositionHistory {
  __typename?: 'PositionHistory';
  /**
   * The start date of the position.
   *
   * This may only contain the year and month, e.g. `2019-01`.
   */
  start: Scalars['HistoryDate'];
  /**
   * The end date of the position if known.
   *
   * This may only contain the year and month, e.g. `2020-01`.
   */
  end?: Maybe<Scalars['HistoryDate']>;
  /** Whether the person is still working at the organization, if known. */
  current?: Maybe<Scalars['Boolean']>;
  /** The title that the person held for this position. */
  title: Scalars['String'];
  /** An array of descriptions of the person's responsibilities, skills and achievements in the position. */
  descriptions: Array<Scalars['String']>;
}

/**
 * A job requisition or position opening within an organization.
 *
 * This is a container object that groups multiple `PositionProfile`s together along with their owner.
 */
export interface PositionOpening {
  __typename?: 'PositionOpening';
  /**
   * The status of the position opening.
   *
   * Currently, three codes are defined:
   *
   * - `Incomplete` indicates the position opening is in a draft state.
   * - `Active` indicates the position opening is open.
   * - `Closed` indicates the position opening has been closed.
   */
  statusCode: Scalars['String'];
  /** The identifier for the `PositionOpening`. */
  documentId: ObjectIdentifier;
  /**
   * An optional field for storing additional data with a `PositionOpening`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
  /**
   * The party that owns the position opening.
   *
   * This may be different from the hiring organization if the position opening is created by a recruitment agency.
   */
  postingRequester: PostingRequester;
  /**
   * An array of profiles for the position opening.
   *
   * Each profile represents a posted job ad or an unposted internal requisition associated with this opening.
   */
  positionProfiles: Array<PositionProfile>;
}

/** A page of position openings. */
export interface PositionOpeningConnection {
  __typename?: 'PositionOpeningConnection';
  /**
   * The page of position openings and their corresponding cursors.
   *
   * This list may be empty.
   */
  edges: Array<PositionOpeningEdge>;
  /** The pagination metadata for this page of position openings. */
  pageInfo: PageInfo;
}

/** A position opening in a paginated list. */
export interface PositionOpeningEdge {
  __typename?: 'PositionOpeningEdge';
  /**
   * The opaque cursor to the position opening.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual position opening. */
  node: PositionOpening;
}

/**
 * The criteria to filter position openings by.
 *
 * These are `PositionOpening`-specific extensions on top of the standard pagination arguments `after` and `first`.
 */
export interface PositionOpeningsFilterInput {
  /**
   * Optionally filter results to only include position openings with the specified status code.
   *
   * Currently, three codes are defined:
   *
   * - `Incomplete` indicates the position opening is in a draft state.
   * - `Active` indicates the position opening is open.
   * - `Closed` indicates the position opening has been closed.
   */
  statusCode?: Maybe<Scalars['String']>;
}

/** A candidate's preferences in an ideal position. */
export interface PositionPreference {
  __typename?: 'PositionPreference';
  /**
   * An array of locations which are preferred by the candidate.
   *
   * The locations are ordered in descending preference.
   */
  locations: Array<PreferredLocation>;
}

/** A candidate's preferences in an ideal position. */
export interface PositionPreferenceInput {
  /**
   * An array of locations which are preferred by the candidate.
   *
   * The locations are ordered in descending preference.
   *
   * A maximum of 5 locations may be provided.
   */
  locations: Array<PreferredLocationInput>;
}

/**
 * A profile of a position opening.
 *
 * This contains information of how a position opening is presented on a job board or as an internal requisition.
 */
export interface PositionProfile {
  /** The identifier for the `PositionProfile`. */
  profileId: ObjectIdentifier;
  /** The `PositionOpening` that this profile was created under. */
  positionOpening: PositionOpening;
  /**
   * The type of position profile.
   *
   * See `PositionProfile` implementations for a list of supported values.
   */
  seekTypeCode: Scalars['String'];
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /** The organization which has the position. */
  positionOrganizations: Array<HiringOrganization>;
  /** An optional hirer-provided opaque job reference. */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * This appears on the invoice when SEEK bills the hirer for a job ad.
   */
  seekBillingReference?: Maybe<Scalars['String']>;
  /**
   * A unique resource identifier the position profile.
   *
   * - For posted position profiles, this is the public web URL of the posted job ad.
   *
   * - For unposted position profiles, this is the profile's object identifier.
   */
  positionUri: Scalars['String'];
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescription>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * If the offered schedule isn't known this will be `null`.
   */
  positionScheduleTypeCodes?: Maybe<Array<Scalars['String']>>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackage;
  /**
   * A work type code for the `seekAnz` scheme.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * For positions in other schemes this will be `null`.
   */
  seekAnzWorkTypeCode?: Maybe<Scalars['String']>;
  /** The occupational categories of the job. */
  jobCategories: Array<JobCategory>;
  /** The locations of the position. */
  positionLocation: Array<Location>;
  /**
   * The set of questions presented to candidates during an application.
   *
   * The questionnaire responses will be available as `CandidateProfile.seekQuestionnaireSubmission` on the candidate's application profile.
   */
  seekApplicationQuestionnaire?: Maybe<ApplicationQuestionnaire>;
  /** The video to render within the job ad. */
  seekVideo?: Maybe<SeekVideo>;
  /** The instructions related to posting the job ad. */
  postingInstructions: Array<PostingInstruction>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
  /**
   * Whether the position profile was created by the requesting partner.
   *
   * If your software cannot ingest objects that are created by another source,
   * this can be used to filter out such position profiles.
   *
   * This indicator is unavailable where we cannot cheaply determine the source
   * of the position profile.
   * `null` values should not be filtered out.
   * See specific implementations for further details.
   */
  seekCreatedBySelfIndicator?: Maybe<Scalars['Boolean']>;
}

/** The event signaling that a posted `PositionProfile` has been closed. */
export interface PositionProfileClosedEvent extends Event {
  __typename?: 'PositionProfileClosedEvent';
  /** The identifier for the `Event`. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * Currently, only the `seekAnz` and `seekAnzPublicTest` schemes emit `PositionProfileClosed` events.
   */
  schemeId: Scalars['String'];
  /** The type of event, i.e. `PositionProfileClosed`. */
  typeCode: Scalars['String'];
  /**
   * The date & time the `PositionProfile` was closed.
   *
   * `PositionProfile`s are closed automatically when they reach their `PostingInstruction.end` date.
   * They can also be closed early using the `closePostedPositionProfile` mutation.
   *
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /** The identifier for the `PositionProfile` that was closed. */
  positionProfileId: Scalars['String'];
  /**
   * The `PositionProfile` that was closed.
   *
   * This may return null if the `PositionProfile` has been closed for an extended period of time.
   */
  positionProfile?: Maybe<PostedPositionProfile>;
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/** The event signaling that a posted `PositionProfile` has been closed. */
export interface PositionProfileClosedEventWebhookAttemptsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookAttemptsFilterInput>;
}

/** The event signaling that a `PositionProfile` has been posted. */
export interface PositionProfilePostedEvent extends Event {
  __typename?: 'PositionProfilePostedEvent';
  /** The identifier for the `Event`. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * Currently, only the `seekAnz` and `seekAnzPublicTest` schemes emit `PositionProfilePosted` events.
   */
  schemeId: Scalars['String'];
  /** The type of event, i.e. `PositionProfilePosted`. */
  typeCode: Scalars['String'];
  /**
   * The date & time the `PositionProfile` was considered as successfully posted inside of SEEK's internal systems.
   *
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /** The identifier for the `PositionProfile` that was posted. */
  positionProfileId: Scalars['String'];
  /**
   * The `PositionProfile` that was posted.
   *
   * This may return null if the `PositionProfile` has been closed for an extended period of time.
   */
  positionProfile?: Maybe<PostedPositionProfile>;
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/** The event signaling that a `PositionProfile` has been posted. */
export interface PositionProfilePostedEventWebhookAttemptsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookAttemptsFilterInput>;
}

/** The information required to post a job ad for a newly created position. */
export interface PostPositionInput {
  /** The details of the position opening to be created. */
  positionOpening: CreatePositionOpeningPositionOpeningInput;
  /** A profile of a position opening. */
  positionProfile: PostPositionPositionProfileInput;
}

/** The response from the `postPosition` mutation. */
export type PostPositionPayload =
  | PostPositionPayloadSuccess
  | PostPositionPayloadConflict;

/**
 * The conflict result for the `postPosition` mutation.
 *
 * The  `idempotencyId` provided as part of `CreatePostingInstructionInput` while creating a position profile must be unique.
 * Providing the same `idempotencyId` will result in a conflict.
 */
export interface PostPositionPayloadConflict {
  __typename?: 'PostPositionPayload_Conflict';
  /** Attributes of the conflicting position opening. */
  conflictingPositionOpening: PostPositionPositionOpeningPayload;
  /** Attributes of the conflicting position profile. */
  conflictingPositionProfile: PostPositionPositionProfilePayload;
}

/** The success result for the `postPosition` mutation. */
export interface PostPositionPayloadSuccess {
  __typename?: 'PostPositionPayload_Success';
  /** Attributes of the newly created position opening. */
  positionOpening: PostPositionPositionOpeningPayload;
  /** Attributes of the newly created position profile for the job ad. */
  positionProfile: PostPositionPositionProfilePayload;
}

/** The input parameter for the `postPositionProfileForOpening` mutation. */
export interface PostPositionProfileForOpeningInput {
  /**
   * A profile for posting a job ad against an existing position opening.
   *
   * This contains information of how a position opening is presented on a given channel or job board.
   */
  positionProfile: PostPositionProfileForOpeningPositionProfileInput;
}

/** The response from the `postPositionProfileForOpening` mutation. */
export type PostPositionProfileForOpeningPayload =
  | PostPositionProfileForOpeningPayloadSuccess
  | PostPositionProfileForOpeningPayloadConflict;

/**
 * The conflict result for the `postPositionProfileForOpening` mutation.
 *
 * The  `idempotencyId` provided as part of `CreatePostingInstructionInput` while creating a position profile must be unique.
 * Providing the same `idempotencyId` will result in a conflict.
 */
export interface PostPositionProfileForOpeningPayloadConflict {
  __typename?: 'PostPositionProfileForOpeningPayload_Conflict';
  /** Attributes of the conflicting position profile. */
  conflictingPositionProfile: PostPositionProfileForOpeningPositionProfilePayload;
}

/** The success result for the `postPositionProfileForOpening` mutation. */
export interface PostPositionProfileForOpeningPayloadSuccess {
  __typename?: 'PostPositionProfileForOpeningPayload_Success';
  /** Attributes of the newly created position profile for the job ad. */
  positionProfile: PostPositionProfileForOpeningPositionProfilePayload;
}

/**
 * A profile for posting a job ad against an existing position opening.
 *
 * This contains information of how a position opening is presented on a given channel or job board.
 */
export interface PostPositionProfileForOpeningPositionProfileInput {
  /** The identifier for the `PositionOpening` that this position profile belongs to. */
  positionOpeningId: Scalars['String'];
  /**
   * A short phrase describing the position as it would be listed on a business card or in a company directory.
   *
   * This field has a maximum length of 80 bytes in UTF-8 encoding.
   */
  positionTitle: Scalars['String'];
  /**
   * An array of identifiers for the `HiringOrganization`s that have the position.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionOrganizations: Array<Scalars['String']>;
  /**
   * An optional hirer-provided opaque job reference.
   *
   * This field has a maximum length of 50 bytes in UTF-8 encoding.
   */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * This appears on the invoice when SEEK bills the hirer for the job ad.
   *
   * This field has a maximum length of 50 bytes in UTF-8 encoding.
   */
  seekBillingReference?: Maybe<Scalars['String']>;
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescriptionInput>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * For the `seekAnz` scheme, this field is not supported and should be set to `null`.
   */
  positionScheduleTypeCodes?: Maybe<Array<Scalars['String']>>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackageInput;
  /**
   * A SEEK ANZ work type code.
   *
   * For positions in `seekAnz` scheme, this field is used instead of `positionScheduleTypeCodes`.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * Scheme requirements:
   *
   * - Required for the `seekAnz` scheme.
   * - Set to `null` for other schemes.
   */
  seekAnzWorkTypeCode?: Maybe<Scalars['String']>;
  /**
   * An array of `JobCategory` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  jobCategories: Array<Scalars['String']>;
  /**
   * An array of `Location` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionLocation: Array<Scalars['String']>;
  /**
   * The identifier for the `ApplicationQuestionnaire` containing the set of questions to present to candidates during an application.
   *
   * The questionnaire responses will be available as `CandidateProfile.seekQuestionnaireSubmission` on the candidate's application profile.
   */
  seekApplicationQuestionnaireId?: Maybe<Scalars['String']>;
  /** The video to render within the job ad. */
  seekVideo?: Maybe<SeekVideoInput>;
  /**
   * The instructions related to posting the job ad.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  postingInstructions: Array<CreatePostingInstructionInput>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
}

/** Attributes of the position profile. */
export interface PostPositionProfileForOpeningPositionProfilePayload {
  __typename?: 'PostPositionProfileForOpening_PositionProfilePayload';
  /** The identifier for the `PositionProfile`. */
  profileId: ObjectIdentifier;
}

/** Attributes of the position opening. */
export interface PostPositionPositionOpeningPayload {
  __typename?: 'PostPosition_PositionOpeningPayload';
  /**
   * The identifier for the `PositionOpening`.
   *
   * Scheme restrictions:
   *
   * - The `seekAnz` scheme creates the position opening asynchronously.
   *   This identifier will initially reference an missing object;
   *   the object should be created within a few minutes.
   */
  documentId: ObjectIdentifier;
}

/** The details of the position profile to be created. */
export interface PostPositionPositionProfileInput {
  /**
   * A short phrase describing the position as it would be listed on a business card or in a company directory.
   *
   * This field has a maximum length of 80 bytes in UTF-8 encoding.
   */
  positionTitle: Scalars['String'];
  /**
   * An array of identifiers for the `HiringOrganization`s that have the position.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionOrganizations: Array<Scalars['String']>;
  /**
   * An optional hirer-provided opaque job reference.
   *
   * This field has a maximum length of 50 bytes in UTF-8 encoding.
   */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * This appears on the invoice when SEEK bills the hirer for the job ad.
   *
   * This field has a maximum length of 50 bytes in UTF-8 encoding.
   */
  seekBillingReference?: Maybe<Scalars['String']>;
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescriptionInput>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * For the `seekAnz` scheme, this field is not supported and should be set to `null`.
   */
  positionScheduleTypeCodes?: Maybe<Array<Scalars['String']>>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackageInput;
  /**
   * A SEEK ANZ work type code.
   *
   * For positions in `seekAnz` scheme, this field is used instead of `positionScheduleTypeCodes`.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * Scheme requirements:
   *
   * - Required for the `seekAnz` scheme.
   * - Set to `null` for other schemes.
   */
  seekAnzWorkTypeCode?: Maybe<Scalars['String']>;
  /**
   * An array of `JobCategory` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  jobCategories: Array<Scalars['String']>;
  /**
   * An array of `Location` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionLocation: Array<Scalars['String']>;
  /**
   * The identifier for the `ApplicationQuestionnaire` containing the set of questions to present to candidates during an application.
   *
   * The questionnaire responses will be available as `CandidateProfile.seekQuestionnaireSubmission` on the candidate's application profile.
   */
  seekApplicationQuestionnaireId?: Maybe<Scalars['String']>;
  /** The video to render within the job ad. */
  seekVideo?: Maybe<SeekVideoInput>;
  /**
   * The instructions related to posting the job ad.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  postingInstructions: Array<CreatePostingInstructionInput>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
}

/** Attributes of the position profile. */
export interface PostPositionPositionProfilePayload {
  __typename?: 'PostPosition_PositionProfilePayload';
  /**
   * The identifier for the `PositionProfile`.
   *
   * Scheme restrictions:
   *
   * - The `seekAnz` scheme creates the position profile asynchronously.
   *   This identifier will initially reference an missing object;
   *   the object should be created within a few minutes.
   */
  profileId: ObjectIdentifier;
}

/**
 * A profile of a position opening.
 *
 * This contains information of how a position opening is presented on a job board.
 */
export interface PostedPositionProfile extends PositionProfile {
  __typename?: 'PostedPositionProfile';
  /** The identifier for the `PositionProfile`. */
  profileId: ObjectIdentifier;
  /** The `PositionOpening` that this profile was created under. */
  positionOpening: PositionOpening;
  /** The type of position profile, i.e. `PostedPositionProfile`. */
  seekTypeCode: Scalars['String'];
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /** The organization which has the position. */
  positionOrganizations: Array<HiringOrganization>;
  /** An optional hirer-provided opaque job reference. */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * This appears on the invoice when SEEK bills the hirer for the job ad.
   */
  seekBillingReference?: Maybe<Scalars['String']>;
  /** The public web URL of the posted job ad. */
  positionUri: Scalars['String'];
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescription>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * If the offered schedule isn't known this will be `null`.
   */
  positionScheduleTypeCodes?: Maybe<Array<Scalars['String']>>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackage;
  /**
   * A work type code for the `seekAnz` scheme.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * For positions in other schemes this will be `null`.
   */
  seekAnzWorkTypeCode?: Maybe<Scalars['String']>;
  /** The occupational categories of the job. */
  jobCategories: Array<JobCategory>;
  /** The locations of the position. */
  positionLocation: Array<Location>;
  /**
   * The set of questions presented to candidates during an application.
   *
   * The questionnaire responses will be available as `CandidateProfile.seekQuestionnaireSubmission` on the candidate's application profile.
   */
  seekApplicationQuestionnaire?: Maybe<ApplicationQuestionnaire>;
  /** The video to render within the job ad. */
  seekVideo?: Maybe<SeekVideo>;
  /** The instructions related to posting the job ad. */
  postingInstructions: Array<PostingInstruction>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
  /**
   * Whether the job ad was initially posted by the requesting partner.
   *
   * If your software cannot ingest objects that are created by another source,
   * this can be used to filter out such job ads and their associated applications.
   *
   * This indicator is unavailable for job ads posted before September 2021.
   * `null` values should not be filtered out.
   */
  seekCreatedBySelfIndicator?: Maybe<Scalars['Boolean']>;
}

/** Information about how to post a job ad and where to direct its candidate applications. */
export interface PostingInstruction {
  __typename?: 'PostingInstruction';
  /** The start date of the posting. */
  start: Scalars['DateTime'];
  /** The end date of the posting. */
  end: Scalars['DateTime'];
  /**
   * A SEEK ANZ advertisement type code.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic job ad.
   * - `StandOut` indicates a StandOut job ad.
   * - `Premium` indicates a Premium job ad.
   *
   * For positions in other schemes this will be `null`.
   */
  seekAnzAdvertisementType?: Maybe<Scalars['String']>;
  /**
   * An array of methods for applying to the position.
   *
   * If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
   * Native applications will emit a `CandidateApplicationCreated` event that points to a `CandidateProfile` object.
   */
  applicationMethods: Array<ApplicationMethod>;
  /**
   * The identifier for the `AdvertisementBranding` applied to the posted job ad.
   *
   * This is included for HR-JSON compatibility;
   * GraphQL users should use the `branding` nested object instead.
   */
  brandingId?: Maybe<Scalars['String']>;
  /** The branding applied to the posted job ad. */
  branding?: Maybe<AdvertisementBranding>;
}

/** The party that owns the position opening. */
export interface PostingRequester {
  __typename?: 'PostingRequester';
  /**
   * The identifier for the `HiringOrganization` that owns the position opening.
   *
   * This may be a hirer or agency.
   */
  id: ObjectIdentifier;
  /** The name of the party that owns the position opening. */
  name: Scalars['String'];
  /**
   * The legacy SEEK ANZ advertiser ID.
   *
   * This is a numeric identifier used by legacy Job Posting & Application Export APIs in the `seekAnz` scheme.
   * For hirers or agencies in other schemes this will be `null`.
   */
  seekAnzAdvertiserId?: Maybe<Scalars['Int']>;
  /**
   * The role of the owner of the position opening.
   *
   * Currently, two codes are defined:
   *
   * - `Agency` indicates a recruitment agency hiring on behalf of another company.
   * - `Company` indicates a company hiring on behalf of themselves.
   */
  roleCode: Scalars['String'];
  /** Specific contact people for the position opening at the party. */
  personContacts: Array<SpecifiedPerson>;
}

/** The party that owns the position opening. */
export interface PostingRequesterInput {
  /** The identifier for the `HiringOrganization` that owns the position opening. */
  id: Scalars['String'];
  /**
   * The role of the owner of the position opening.
   *
   * Currently, one code is defined:
   *
   * - `Company` indicates a company hiring on behalf of themselves.
   */
  roleCode: Scalars['String'];
  /**
   * Specific contact people for the position opening at the party.
   *
   * The name and email address of at least one contact person must be provided.
   * A maximum of 10 contact people may be provided.
   */
  personContacts: Array<SpecifiedPersonInput>;
}

/** A candidate's preferences in the location of a position. */
export interface PreferredLocation {
  __typename?: 'PreferredLocation';
  /** The address that represents the preferred location. */
  referenceLocation: Address;
}

/** A candidate's preferences in the location of a position. */
export interface PreferredLocationInput {
  /** The address that represents the preferred location. */
  referenceLocation: AddressInput;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface Query {
  __typename?: 'Query';
  /** The API version. */
  version: Scalars['String'];
  /**
   * The hiring organization for the given `id`.
   *
   * This query accepts browser tokens that include the `query:organizations` scope.
   */
  hiringOrganization?: Maybe<HiringOrganization>;
  /**
   * A page of hirers that have an active relationship with the requesting partner.
   *
   * This will not return agencies; it's not possible to have a relationship with an agency.
   *
   * A maximum of 100 hirers can be returned in a single page.
   * Additional hirers can be queried using a pagination cursor.
   *
   * The result list is ordered alphabetically by the hirer's name.
   *
   * This query accepts browser tokens that include the `query:organizations` scope.
   * It will only return the single hirer that the browser token is scoped to.
   */
  hiringOrganizations: HiringOrganizationsConnection;
  /**
   * A hiring organization corresponding to the given SEEK ANZ advertiser ID.
   *
   * This query accepts browser tokens that include the `query:organizations` scope.
   */
  seekAnzAdvertiser?: Maybe<HiringOrganization>;
  /**
   * The organizations the query's access token can act on behalf of.
   *
   * For all token types this returns the name of the integration partner.
   *
   * This query accepts browser tokens that include the `query:organizations` scope.
   * When provided with a browser token this will additionally return the scoped SEEK hirer.
   */
  self: SelfOrganizations;
  /**
   * A page of advertisement brandings associated with the specified `hirerId`.
   *
   * This query accepts browser tokens that include the `query:advertisement-brandings` scope.
   */
  advertisementBrandings: AdvertisementBrandingsConnection;
  /**
   * The advertisement branding for the given `id`.
   *
   * This query accepts browser tokens that include the `query:advertisement-brandings` scope.
   */
  advertisementBranding?: Maybe<AdvertisementBranding>;
  /**
   * Ad products available when initially posting a job ad.
   *
   * This query accepts browser tokens that include the `query:ad-products` scope.
   */
  seekAnzHirerAdvertisementCreationProducts?: Maybe<Array<SeekAnzAdProduct>>;
  /**
   * Ad products available when updating a live job ad.
   *
   * Use this query when you have the `PositionProfile.profileId` for the live job ad.
   *
   * This query accepts browser tokens that include the `query:ad-products` scope.
   */
  seekAnzHirerAdvertisementModificationProducts?: Maybe<
    Array<SeekAnzAdProduct>
  >;
  /**
   * Ad products available when updating a job ad.
   *
   * Use this query when you don't have the `PositionProfile.profileId` for the live job ad.
   *
   * This query accepts browser tokens that include the `query:ad-products` scope.
   */
  seekAnzHirerAdvertisementModificationProductsAlt?: Maybe<
    Array<SeekAnzAdProduct>
  >;
  /**
   * A location node with the given location `id`.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  location?: Maybe<Location>;
  /**
   * An array of location nodes relevant to the text provided.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  locationSuggestions?: Maybe<Array<LocationSuggestion>>;
  /**
   * An array of locations relevant to the provided geolocation ordered by distance.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  nearestLocations?: Maybe<Array<Location>>;
  /**
   * The job category for the given `id`.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  jobCategory?: Maybe<JobCategory>;
  /**
   * A list of top-level job categories for the provided scheme.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  jobCategories: Array<JobCategory>;
  /**
   * An array of suggested job categories for the provided partial `PositionProfile`.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  jobCategorySuggestions: Array<JobCategorySuggestionChoice>;
  /**
   * An application questionnaire with the given `id`.
   *
   * Questionnaires can be associated with a `PositionProfile`.
   *
   * This query accepts browser tokens that include the `query:application-questionnaires` scope.
   */
  applicationQuestionnaire?: Maybe<ApplicationQuestionnaire>;
  /** A position opening with the given `id`. */
  positionOpening?: Maybe<PositionOpening>;
  /** A position profile with the given `id`. */
  positionProfile?: Maybe<PositionProfile>;
  /**
   * A page of position openings for the given `hirerId`.
   *
   * Currently, only position openings in the `global` and `globalPublicTest` schemes are returned.
   *
   * A maximum of 20 position openings can be returned in a single page.
   * Additional position openings can be queried using a pagination cursor.
   */
  positionOpenings: PositionOpeningConnection;
  /** The `CandidateProfile` for the given `id`. */
  candidateProfile?: Maybe<CandidateProfile>;
  /**
   * The candidate for the given `id`.
   *
   * This will include the candidate's personal details along with all application profiles for a single hirer.
   */
  candidate?: Maybe<Candidate>;
  /** The `CandidateProcessHistoryItem` for the given `id`. */
  candidateProcessHistoryItem?: Maybe<CandidateProcessHistoryItem>;
  /** The event for the given `id`. */
  event?: Maybe<Event>;
  /**
   * A page of events matching the specified criteria.
   *
   * A maximum of 100 events can be returned in a single page.
   * Additional events can be queried using a pagination cursor.
   *
   * The result list is returned in ascending stream date & time order.
   * It starts from the earliest known event if no pagination arguments are provided.
   */
  events: EventsConnection;
  /**
   * A page of webhook attempts matching the specified criteria generated by a selected event.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttemptsForEvent: WebhookAttemptsConnection;
  /** The webhook subscription for the given `id`. */
  webhookSubscription?: Maybe<WebhookSubscription>;
  /**
   * A page of webhook subscriptions matching the specified criteria.
   *
   * A maximum of 100 webhook subscriptions can be returned in a single page.
   * Additional webhook subscriptions can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known subscription if no pagination arguments are provided.
   */
  webhookSubscriptions: WebhookSubscriptionsConnection;
  /** The webhook subscription replay for the given `id`. */
  webhookSubscriptionReplay?: Maybe<WebhookSubscriptionReplay>;
  /**
   * A page of webhook requests matching the specified criteria generated by a selected subscription.
   *
   * A maximum of 100 webhook requests can be returned in a single page.
   * Additional webhook requests can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known request if no pagination arguments are provided.
   */
  webhookRequestsForSubscription: WebhookRequestsConnection;
  /** The webhook request for the given `requestId`. */
  webhookRequest?: Maybe<WebhookRequest>;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryHiringOrganizationArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryHiringOrganizationsArgs {
  schemeId: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<HiringOrganizationsFilterInput>;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QuerySeekAnzAdvertiserArgs {
  id: Scalars['Int'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryAdvertisementBrandingsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  hirerId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryAdvertisementBrandingArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QuerySeekAnzHirerAdvertisementCreationProductsArgs {
  hirerId: Scalars['String'];
  draftAdvertisement: SeekAnzAdProductAdvertisementDraftInput;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QuerySeekAnzHirerAdvertisementModificationProductsArgs {
  hirerId: Scalars['String'];
  advertisementId: Scalars['String'];
  draftAdvertisement: SeekAnzAdProductAdvertisementDraftInput;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QuerySeekAnzHirerAdvertisementModificationProductsAltArgs {
  hirerId: Scalars['String'];
  advertisement: SeekAnzAdProductAdvertisementInput;
  draftAdvertisement: SeekAnzAdProductAdvertisementDraftInput;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryLocationArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryLocationSuggestionsArgs {
  usageTypeCode: Scalars['String'];
  schemeId: Scalars['String'];
  hirerId?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryNearestLocationsArgs {
  schemeId: Scalars['String'];
  geoLocation: GeoLocationInput;
  first?: Maybe<Scalars['Int']>;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryJobCategoryArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryJobCategoriesArgs {
  schemeId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryJobCategorySuggestionsArgs {
  positionProfile: JobCategorySuggestionPositionProfileInput;
  schemeId: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryApplicationQuestionnaireArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryPositionOpeningArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryPositionProfileArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryPositionOpeningsArgs {
  hirerId: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  filter?: Maybe<PositionOpeningsFilterInput>;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryCandidateProfileArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryCandidateArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryCandidateProcessHistoryItemArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryEventArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryEventsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<EventsFilterInput>;
  schemeId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryWebhookAttemptsForEventArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookAttemptsFilterInput>;
  eventId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryWebhookSubscriptionArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryWebhookSubscriptionsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookSubscriptionsFilterInput>;
  schemeId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryWebhookSubscriptionReplayArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryWebhookRequestsForSubscriptionArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookRequestFilterInput>;
  subscriptionId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryWebhookRequestArgs {
  schemeId: Scalars['String'];
  requestId: Scalars['String'];
}

/** A monetary amount of remuneration in a specified currency. */
export interface RemunerationAmount {
  __typename?: 'RemunerationAmount';
  /**
   * A non-negative float in the major currency unit for the ISO currency code.
   *
   * For example, this is the number of dollars in dollar-denominated currencies.
   */
  value: Scalars['Float'];
  /** The three-letter ISO 4217 currency code, in uppercase. */
  currency: Scalars['String'];
}

/** A monetary amount of remuneration in a specified currency. */
export interface RemunerationAmountInput {
  /**
   * A non-negative float in the major currency unit for the ISO currency code.
   *
   * For example, this is the number of dollars in dollar-denominated currencies.
   */
  value: Scalars['Float'];
  /**
   * The three-letter ISO 4217 currency code, in uppercase.
   *
   * For the `seekAnz` scheme, a single currency is accepted in each location:
   *
   * - `NZD` is used by locations in New Zealand.
   *   These are locations that have a `Location.countryCode` of `NZ`.
   *
   * - `GBP` is used by locations in the UK & Ireland.
   *   These are locations that have a `Location.countryCode` of `GB` or `IE`.
   *
   * - `AUD` is used by all other locations.
   */
  currency: Scalars['String'];
}

/** The salary or compensation for a position. */
export interface RemunerationPackage {
  __typename?: 'RemunerationPackage';
  /**
   * A code classifying the primary method of payment for a position.
   *
   * Currently, four codes are defined:
   *
   * - `CommissionOnly` employment is paid exclusively a results-based commission.
   * - `Hourly` employment is paid for the number of hours worked.
   * - `Salaried` employment is paid on an annual basis.
   * - `SalariedPlusCommission` employment is paid on an annual basis plus a results-based commission.
   */
  basisCode: Scalars['String'];
  /**
   * An array of offered salary ranges.
   *
   * The `seekAnz` scheme will always have a single element containing the amount for the `basisCode`.
   */
  ranges: Array<RemunerationRange>;
  /**
   * Human readable descriptions of the remuneration package.
   *
   * The `seekAnz` scheme will be limited to a single element.
   *
   * An empty array signifies that no salary descriptions exist for the remuneration package.
   */
  descriptions: Array<Scalars['String']>;
}

/** The salary or compensation for a position. */
export interface RemunerationPackageInput {
  /**
   * A code classifying the primary method of payment for a position.
   *
   * Currently, four codes are defined:
   *
   * - `CommissionOnly` employment is paid exclusively a results-based commission.
   *   This payment basis is deprecated and should not be used by new integrations.
   *
   * - `Hourly` employment is paid for the number of hours worked.
   *
   * - `Salaried` employment is paid on an annual basis.
   *
   * - `SalariedPlusCommission` employment is paid on an annual basis plus a results-based commission.
   */
  basisCode: Scalars['String'];
  /**
   * An array of offered salary ranges.
   *
   * Scheme requirements:
   *
   * - The `global` scheme has a maximum of 10 elements for `UnpostedPositionProfile`s.
   * - The `seekAnz` scheme is limited to a single element containing the amount for the `basisCode`.
   */
  ranges: Array<RemunerationRangeInput>;
  /**
   * Human readable descriptions of the remuneration package.
   *
   * Scheme requirements:
   *
   * - The `global` scheme has a maximum of 10 elements for `UnpostedPositionProfile`s.
   * - The `seekAnz` scheme is limited to a single element with a maximum length of 50 bytes in UTF-8 encoding.
   *
   * An empty array must be provided to signify the absence of salary descriptions.
   */
  descriptions: Array<Scalars['String']>;
}

/** A salary or compensation range for a position. */
export interface RemunerationRange {
  __typename?: 'RemunerationRange';
  /**
   * The minimum amount an organization is willing to pay for a position.
   *
   * The value must be greater than 0.
   */
  minimumAmount: RemunerationAmount;
  /**
   * The maximum amount an organization is willing to pay for a position.
   *
   * A 'null' value indicates the organization has not specified an upper bound for the range.
   *
   * If specified, the value must be greater than or equal to the value of `minimumAmount`.
   */
  maximumAmount?: Maybe<RemunerationAmount>;
  /**
   * The interval the remuneration amounts are calculated over.
   *
   * Currently two interval codes are defined:
   *
   * - `Hour` is used to express hourly rates.
   * - `Year` is used to express annual salaries or commissions.
   */
  intervalCode: Scalars['String'];
}

/** A salary or compensation range for a position. */
export interface RemunerationRangeInput {
  /**
   * The minimum amount an organization is willing to pay for a position.
   *
   * The value must be greater than 0.
   */
  minimumAmount: RemunerationAmountInput;
  /**
   * The maximum amount an organization is willing to pay for a position.
   *
   * A `null` value indicates the organization has not specified an upper bound for the range.
   *
   * If specified, the value must be greater than or equal to the value of `minimumAmount`.
   */
  maximumAmount?: Maybe<RemunerationAmountInput>;
  /**
   * The interval the remuneration amounts are calculated over.
   *
   * Currently two interval codes are defined:
   *
   * - `Hour` is used to express hourly rates.
   * - `Year` is used to express annual salaries or commissions.
   *
   * The specified value must correspond to the specified `RemunerationPackageInput.basisCode`.
   * When `RemunerationPackageInput.basisCode` equals `Hourly`, the `RemunerationRangeInput.intervalCode` must be `Hour`.
   * For all other `RemunerationPackageInput.basisCode`s, the `RemunerationRangeInput.intervalCode` must be `Year`.
   */
  intervalCode: Scalars['String'];
}

/** The input parameter for the `replayWebhookSubscription` mutation. */
export interface ReplayWebhookSubscriptionInput {
  /** The details of the webhook subscription to be replayed. */
  webhookSubscription: ReplayWebhookSubscriptionSubscriptionInput;
  /** The additional fields to filter which events are to be replayed. */
  filter?: Maybe<ReplayWebhookSubscriptionFilterInput>;
}

/** The response from the `replayWebhookSubscription` mutation. */
export interface ReplayWebhookSubscriptionPayload {
  __typename?: 'ReplayWebhookSubscriptionPayload';
  /** The details of the webhook subscription to have its messages redelivered. */
  webhookSubscription: WebhookSubscription;
}

/** The criteria used to decide which events will be replayed. */
export interface ReplayWebhookSubscriptionFilterInput {
  /**
   * Whether to include all events, or only events that have failed to be delivered.
   *
   * Defaults to false if no value is provided.
   */
  replayDeliveredEventsIndicator?: Maybe<Scalars['Boolean']>;
  /**
   * The earliest event to replay.
   *
   * Defaults to the first event if no value is provided.
   */
  createdAfterDateTime?: Maybe<Scalars['DateTime']>;
  /**
   * The latest event to replay.
   *
   * Defaults to the last event if no value is provided.
   */
  createdBeforeDateTime?: Maybe<Scalars['DateTime']>;
}

/** The details of the webhook subscription to be replayed. */
export interface ReplayWebhookSubscriptionSubscriptionInput {
  /** The identifier for the `WebhookSubscription`. */
  id: Scalars['String'];
}

/** The details of an available ad product. */
export interface SeekAnzAdProduct {
  __typename?: 'SeekAnzAdProduct';
  /**
   * The type of the ad product.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic ad.
   * - `StandOut` indicates a StandOut ad.
   * - `Premium` indicates a Premium ad.
   *
   * This value should be provided as `PostingInstruction.seekAnzAdvertisementType` when posting or updating the job ad.
   */
  advertisementTypeCode: Scalars['String'];
  /** The human-readable ad product name. */
  name: Scalars['String'];
  /** The human-readable description of the ad product. */
  description: Scalars['String'];
  /** The price component of the ad product. */
  price: SeekAnzAdProductPrice;
  /** Whether the ad product is enabled. */
  enabledIndicator: Scalars['Boolean'];
  /** How the ad product would be paid. */
  checkoutEstimate: SeekAnzAdProductCheckoutEstimate;
  /** The messages that may be shown to hirer. */
  messages: Array<SeekAnzAdProductMessage>;
  /** The features this product supports. */
  features: SeekAnzAdProductFeatures;
}

/**
 * The proposed state of a job ad.
 *
 * This contains the `PositionProfile` fields relevant to querying ad products.
 */
export interface SeekAnzAdProductAdvertisementDraftInput {
  /**
   * The type of the ad product.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic ad.
   * - `StandOut` indicates a StandOut ad.
   * - `Premium` indicates a Premium ad.
   *
   * This field is unused and may be omitted from the input.
   */
  typeCode?: Maybe<Scalars['String']>;
  /**
   * The hirer's job reference.
   *
   * This field is used for tracing & debugging.
   * It does not impact the available ad products or their pricing.
   */
  hirerJobReference?: Maybe<Scalars['String']>;
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle?: Maybe<Scalars['String']>;
  /** The identifier for the `JobCategory`. */
  jobCategoryId?: Maybe<Scalars['String']>;
  /** The identifier for the position's `Location`. */
  positionLocationId?: Maybe<Scalars['String']>;
}

/**
 * The state of a live job ad as persisted by an integration partner.
 *
 * This contains the `PositionProfile` fields relevant to querying ad products.
 */
export interface SeekAnzAdProductAdvertisementInput {
  /**
   * The type of the ad product.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic ad.
   * - `StandOut` indicates a StandOut ad.
   * - `Premium` indicates a Premium ad.
   */
  typeCode: Scalars['String'];
  /** The identifier for the `PositionProfile`. */
  id?: Maybe<Scalars['String']>;
  /**
   * The hirer's job reference.
   *
   * This field is used for tracing & debugging.
   * It does not impact the available ad product or their pricing.
   */
  hirerJobReference?: Maybe<Scalars['String']>;
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /** The identifier for the `JobCategory`. */
  jobCategoryId: Scalars['String'];
  /** The identifier for the position's `Location`. */
  positionLocationId: Scalars['String'];
}

/** The details of the outstanding payment. */
export interface SeekAnzAdProductCheckoutEstimate {
  __typename?: 'SeekAnzAdProductCheckoutEstimate';
  /** The amount left to be paid. */
  paymentDueExcludingTax?: Maybe<CurrencyMinorUnit>;
  /** The human-readable checkout estimate summary. */
  summary: Scalars['String'];
  /** The contract component of the checkout estimate. */
  contractConsumption?: Maybe<SeekAnzAdProductContractConsumption>;
}

/** The details of changes to the hirer's contract consumption. */
export interface SeekAnzAdProductContractConsumption {
  __typename?: 'SeekAnzAdProductContractConsumption';
  /** The human-readable summary of contract consumption. */
  summary: Scalars['String'];
  /**
   * The type of contract consumption.
   *
   * Currently, three codes are defined:
   *
   * - `SameAdType` indicates payment due will be consumed from a contract of the same ad type as this product.
   * - `OtherAdType` indicates payment due will be consumed from a contract of a different ad type to this product.
   * - `SameAdTypePlusInvoice` indicates payment due will be consumed from a contract of the same ad type as this product and an invoice will be generated.
   */
  typeCode: Scalars['String'];
}

/**
 * The features supported by an ad product.
 *
 * These are features that have a dynamic impact on an integration partner's job posting flow.
 * Ad products may have additional features that are implemented entirely within SEEK's systems.
 */
export interface SeekAnzAdProductFeatures {
  __typename?: 'SeekAnzAdProductFeatures';
  /**
   * Whether the product supports advertisement branding.
   *
   * When false, the `PostingInstruction.brandingId` field will be ignored.
   */
  brandingIndicator: Scalars['Boolean'];
  /**
   * Whether the product supports bullet points in the search results.
   *
   * When false, `SearchBulletPoint` `PositionFormattedDescription`s will be silently discarded.
   */
  searchBulletPointsIndicator: Scalars['Boolean'];
}

/** A message shown to the hirer for the current ad product. */
export interface SeekAnzAdProductMessage {
  __typename?: 'SeekAnzAdProductMessage';
  /**
   * The type of message.
   *
   * Currently, four codes are defined:
   * - `PricingError` indicates a message relating to a pricing error.
   * - `PremiumPerformanceChange` indicates a message relating to an impact on premium ad performance.
   * - `UpdatePricingIncrease` indicates a message relating to a price increase in update mode for SEEK contracts.
   * - `ProductUnavailable` indicates a message relating to an unavailable product.
   */
  typeCode: Scalars['String'];
  /**
   * The severity of the message.
   *
   * Currently, two codes are defined:
   *
   * - `Informational` indicates a message with helpful information for a hirer.
   * - `Critical` indicates a message with critical information for a hirer.
   */
  severityCode: Scalars['String'];
  /**
   * The visibility of the message.
   *
   * Currently, two codes are defined:
   * - `ProductSelected` indicates the message should be visible when the product is selected.
   * - `Always` indicates the message should be always visible.
   */
  visibilityCode: Scalars['String'];
  /** The human-readable content of the message. */
  content: Scalars['String'];
}

/** The price for an ad product. */
export interface SeekAnzAdProductPrice {
  __typename?: 'SeekAnzAdProductPrice';
  /** The product price without tax. */
  amountExcludingTax?: Maybe<CurrencyMinorUnit>;
  /** The human-readable summary of the product price. */
  summary: Scalars['String'];
  /** Whether the price can be shown to the hirer. */
  visibleForHirerIndicator: Scalars['Boolean'];
  /** Whether taxes will be added when purchased. */
  taxedIndicator: Scalars['Boolean'];
}

/** The role of an attachment within a profile. */
export const SeekAttachmentRole = {
  /** A resume or CV. */
  Resume: 'RESUME',
  /** A cover letter specific to a position opening. */
  CoverLetter: 'COVER_LETTER',
  /** A document supporting a position-specific selection criteria. */
  SelectionCriteria: 'SELECTION_CRITERIA',
} as const;

export type SeekAttachmentRole =
  typeof SeekAttachmentRole[keyof typeof SeekAttachmentRole];
/** The source system for the process history item. */
export interface SeekProcessHistoryItemSource {
  __typename?: 'SeekProcessHistoryItemSource';
  /** Free text description of the source. */
  name: Scalars['String'];
}

/** The source system for the process history item. */
export interface SeekProcessHistoryItemSourceInput {
  /** Free text description of the source. */
  name: Scalars['String'];
}

/** An externally hosted video to display alongside advertisement details. */
export interface SeekVideo {
  __typename?: 'SeekVideo';
  /** The URL of the video. */
  url: Scalars['String'];
  /**
   * The position relative to the advertisement details where the video is rendered.
   *
   * Currently, two codes are defined:
   *
   * - `Above` indicates the video will render above the advertisement details.
   * - `Below` indicates the video will render below the advertisement details.
   */
  seekAnzPositionCode?: Maybe<Scalars['String']>;
}

/** An externally hosted video to display alongside advertisement details. */
export interface SeekVideoInput {
  /**
   * The URL of the video to display.
   *
   * Scheme requirements:
   *
   *  - The `seekAnz` scheme requires a YouTube link in one of the following formats:
   *
   *     - `https://www.youtube.com/embed/aAgePQvHBQM`
   *     - `https://www.youtube.com/watch?v=aAgePQvHBQM`
   *     - `https://youtu.be/aAgePQvHBQM`
   */
  url: Scalars['String'];
  /**
   * The position relative to the advertisement details where the video should be rendered.
   *
   * Currently, two codes are defined:
   *
   * - `Above` indicates the video will render above the advertisement details.
   * - `Below` indicates the video will render below the advertisement details.
   */
  seekAnzPositionCode?: Maybe<Scalars['String']>;
}

/** The organizations the query's access token can act on behalf of. */
export interface SelfOrganizations {
  __typename?: 'SelfOrganizations';
  /** The partner organization making the request. */
  partner: PartnerOrganization;
  /**
   * The hirer the browser token is scoped to.
   *
   * This will be `null` when queried with a partner token.
   */
  hirer?: Maybe<HiringOrganization>;
}

/** A reference to a person associated with an object. */
export interface SpecifiedPerson {
  __typename?: 'SpecifiedPerson';
  /** The person's name. */
  name: PersonName;
  /** Methods of communication with the person. */
  communication: Communication;
  /**
   * The role of the person.
   *
   * Currently, two codes are defined:
   *
   * - `Recruiter` indicates a person recruiting for the position.
   * - `HiringManager` indicates an employee that requested the position to be filled.
   */
  roleCode?: Maybe<Scalars['String']>;
}

/** A reference to a person associated with an object. */
export interface SpecifiedPersonInput {
  /** The person's name. */
  name: PersonNameInput;
  /** Methods of communication with the person. */
  communication: CommunicationInput;
  /**
   * The role of the person.
   *
   * Currently, two codes are defined:
   *
   * - `Recruiter` indicates a person recruiting for the position.
   * - `HiringManager` indicates an employee that requested the position to be filled.
   */
  roleCode?: Maybe<Scalars['String']>;
}

/**
 * A profile of a position opening.
 *
 * This contains information of how a position opening is presented as an internal requisition.
 */
export interface UnpostedPositionProfile extends PositionProfile {
  __typename?: 'UnpostedPositionProfile';
  /** The identifier for the `PositionProfile`. */
  profileId: ObjectIdentifier;
  /**
   * A human-readable name given to the profile.
   *
   * This in addition to the `positionTitle` can help identify the profile to an end user.
   */
  profileName?: Maybe<Scalars['String']>;
  /** The `PositionOpening` that this profile was created under. */
  positionOpening: PositionOpening;
  /** The type of position profile, i.e. `UnpostedPositionProfile`. */
  seekTypeCode: Scalars['String'];
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /** The organization which has the position. */
  positionOrganizations: Array<HiringOrganization>;
  /** An optional hirer-provided opaque job reference. */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * SEEK does not use this field on unposted position profiles.
   */
  seekBillingReference?: Maybe<Scalars['String']>;
  /**
   * The object identifier for the `PositionProfile`.
   *
   * This is duplicated from the `profileId` field to satisfy the `PositionProfile` interface.
   */
  positionUri: Scalars['String'];
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescription>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * If the offered schedule isn't known this will be `null`.
   */
  positionScheduleTypeCodes?: Maybe<Array<Scalars['String']>>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackage;
  /**
   * A work type code for the `seekAnz` scheme.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * For positions in other schemes this will be `null`.
   */
  seekAnzWorkTypeCode?: Maybe<Scalars['String']>;
  /** The occupational categories of the job. */
  jobCategories: Array<JobCategory>;
  /** The locations of the position. */
  positionLocation: Array<Location>;
  /**
   * The set of questions presented to candidates during an application.
   *
   * The questionnaire responses will be available as `CandidateProfile.seekQuestionnaireSubmission` on the candidate's application profile.
   */
  seekApplicationQuestionnaire?: Maybe<ApplicationQuestionnaire>;
  /** The video to render within the job ad. */
  seekVideo?: Maybe<SeekVideo>;
  /** The instructions related to posting the job ad. */
  postingInstructions: Array<PostingInstruction>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
  /**
   * Whether the position profile was created by the requesting partner.
   *
   * If your software cannot ingest objects that are created by another source,
   * this can be used to filter out such position profiles.
   *
   * This indicator is never `null` for unposted position profiles.
   */
  seekCreatedBySelfIndicator?: Maybe<Scalars['Boolean']>;
}

/** The input parameter for the `updateCandidateProcessHistoryItem` mutation. */
export interface UpdateCandidateProcessHistoryItemInput {
  /** The details of the  `CandidateProcessHistoryItem` to be updated. */
  candidateProcessHistoryItem: UpdateCandidateProcessHistoryItemCandidateProcessHistoryItemInput;
}

/** The response from the `updateCandidateProcessHistoryItem` mutation. */
export interface UpdateCandidateProcessHistoryItemPayload {
  __typename?: 'UpdateCandidateProcessHistoryItemPayload';
  /** The details of the `CandidateProcessHistoryItem` that was updated. */
  candidateProcessHistoryItem: CandidateProcessHistoryItem;
}

/** The details of the `CandidateProcessHistoryItem` to be updated. */
export interface UpdateCandidateProcessHistoryItemCandidateProcessHistoryItemInput {
  /** The identifier for the `CandidateProcessHistoryItem` to be updated. */
  id: Scalars['String'];
  /** The date & time the action was executed. */
  actionDate: Scalars['DateTime'];
  /**
   * The executed action that constitutes this history item.
   *
   * This action may or may not trigger a change in the status of the underlying process.
   * For example, an action may be to add a note against a candidate's profile,
   * which has no material effect on the stage through the application process.
   */
  action: CandidateProcessActionInput;
  /**
   * The current status of the underlying process.
   *
   * For example, a candidate in an application process may progress through a series of statuses like applied, interviewed, offered, hired.
   */
  status?: Maybe<CandidateProcessStatusInput>;
  /**
   * The position profile that the history item relates to.
   *
   * This is null for interactions that are not specific to an individual position,
   * such as a general interview with a recruiter.
   */
  positionProfile?: Maybe<CandidateProcessHistoryItemPositionProfileInput>;
  /**
   * The underlying source for the item.
   *
   * For example, items related to an application process would note the job board or other channel that sourced the application.
   *
   * This is required if `positionProfile` is specified.
   */
  seekSource?: Maybe<SeekProcessHistoryItemSourceInput>;
  /** The parties that executed the action. */
  primaryParties: Array<CandidateProcessPartyInput>;
}

/** The input parameter for the `updatePositionOpeningPersonContacts` mutation. */
export interface UpdatePositionOpeningPersonContactsInput {
  /** The details of the position opening to be updated. */
  positionOpening: UpdatePositionOpeningPersonContactsPositionOpeningInput;
}

/** The response from the `updatePositionOpeningPersonContacts` mutation. */
export interface UpdatePositionOpeningPersonContactsPayload {
  __typename?: 'UpdatePositionOpeningPersonContactsPayload';
  /** The details of the updated position opening. */
  positionOpening: PositionOpening;
}

/** The details of the position opening to be updated. */
export interface UpdatePositionOpeningPersonContactsPositionOpeningInput {
  /** The identifier for the `PositionOpening` to be updated. */
  documentId: Scalars['String'];
  /**
   * Specific contact people for the position opening at the party.
   *
   * The name and email address of at least one contact person must be provided.
   * A maximum of 10 contact people may be provided.
   */
  personContacts: Array<SpecifiedPersonInput>;
}

/** The input parameter for the `updatePositionOpeningStatus` mutation. */
export interface UpdatePositionOpeningStatusInput {
  /** The details of the position opening to be updated. */
  positionOpening: UpdatePositionOpeningStatusPositionOpeningInput;
}

/** The response from the `updatePositionOpeningStatus` mutation. */
export interface UpdatePositionOpeningStatusPayload {
  __typename?: 'UpdatePositionOpeningStatusPayload';
  /** The details of the updated position opening. */
  positionOpening: PositionOpening;
}

/** The details of the position opening to have its status updated. */
export interface UpdatePositionOpeningStatusPositionOpeningInput {
  /** The identifier for the `PositionOpening` to be updated. */
  documentId: Scalars['String'];
  /**
   * The status of the position opening.
   *
   * Currently, three codes are defined:
   *
   * - `Incomplete` indicates the position opening is in a draft state.
   * - `Active` indicates the position opening is open.
   * - `Closed` indicates the position opening has been closed.
   */
  statusCode: Scalars['String'];
}

/** The input parameter for the `updatePostedPositionProfile` mutation. */
export interface UpdatePostedPositionProfileInput {
  /** The values to replace on a posted position profile. */
  positionProfile: UpdatePostedPositionProfilePositionProfileInput;
}

/** The output of the `updatePostedPositionProfile` mutation. */
export interface UpdatePostedPositionProfilePayload {
  __typename?: 'UpdatePostedPositionProfilePayload';
  /** Attributes of the updated position profile. */
  positionProfile: UpdatePostedPositionProfilePositionProfilePayload;
}

/** The values to replace on a posted position profile. */
export interface UpdatePostedPositionProfilePositionProfileInput {
  /** The identifier for the posted `PositionProfile` to update. */
  profileId: Scalars['String'];
  /**
   * A short phrase describing the position as it would be listed on a business card or in a company directory.
   *
   * This field has a maximum length of 80 bytes in UTF-8 encoding.
   */
  positionTitle: Scalars['String'];
  /**
   * An array of identifiers for the `HiringOrganization`s that have the position.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionOrganizations: Array<Scalars['String']>;
  /**
   * An optional hirer-provided opaque job reference.
   *
   * This field has a maximum length of 50 bytes in UTF-8 encoding.
   */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * This appears on the invoice when SEEK bills the hirer for the job ad.
   *
   * This field has a maximum length of 50 bytes in UTF-8 encoding.
   */
  seekBillingReference?: Maybe<Scalars['String']>;
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescriptionInput>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * For the `seekAnz` scheme, this field is not supported and should be set to `null`.
   */
  positionScheduleTypeCodes?: Maybe<Array<Scalars['String']>>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackageInput;
  /**
   * A SEEK ANZ work type code.
   *
   * For positions in `seekAnz` scheme, this field is used instead of `positionScheduleTypeCodes`.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * Scheme requirements:
   *
   * - Required for the `seekAnz` scheme.
   * - Set to `null` for other schemes.
   */
  seekAnzWorkTypeCode?: Maybe<Scalars['String']>;
  /**
   * An array of `JobCategory` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  jobCategories: Array<Scalars['String']>;
  /**
   * An array of `Location` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionLocation: Array<Scalars['String']>;
  /**
   * This field is deprecated and must be omitted from all inputs.
   *
   * Do not explicitly set to `null` or any other value.
   */
  seekApplicationQuestionnaireId?: Maybe<Scalars['String']>;
  /** The video to render within the job ad. */
  seekVideo?: Maybe<SeekVideoInput>;
  /**
   * The instructions related to posting the job ad.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  postingInstructions: Array<UpdatePostingInstructionInput>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
}

/** Attributes of the updated position profile. */
export interface UpdatePostedPositionProfilePositionProfilePayload {
  __typename?: 'UpdatePostedPositionProfile_PositionProfilePayload';
  /** The identifier for the updated `PositionProfile`. */
  profileId: ObjectIdentifier;
}

/** Information about how to post a job ad and where to direct its candidate applications. */
export interface UpdatePostingInstructionInput {
  /**
   * A SEEK ANZ advertisement type code.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic job ad.
   * - `StandOut` indicates a StandOut job ad.
   * - `Premium` indicates a Premium job ad.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field is required.
   * - For other schemes, set this to `null`.
   */
  seekAnzAdvertisementType?: Maybe<Scalars['String']>;
  /**
   * The end date of the posting.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme this must be no more than 30 days after the job ad was initially posted.
   *
   *   If an end date is not specified the job ad's existing end date will be preserved.
   */
  end?: Maybe<Scalars['DateTime']>;
  /**
   * An array of methods for applying to the position.
   *
   * If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
   * Native applications will emit a `CandidateApplicationCreated` event that points to a `CandidateProfile` object.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field is limited to a single element.
   *   Requests with more than 1 element will fail.
   */
  applicationMethods?: Maybe<Array<ApplicationMethodInput>>;
  /**
   * The identifier for the `AdvertisementBranding` to apply to the posted job ad.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field's behavior is dependent on the `SeekAnzAdProductFeatures` of the product set in the `seekAnzAdvertisementType` field.
   *
   *   When the product's `SeekAnzAdProductFeatures.brandingIndicator` value is false, this field will be silently ignored.
   */
  brandingId?: Maybe<Scalars['String']>;
}

/** The input parameter for the `updateUnpostedPositionProfile` mutation. */
export interface UpdateUnpostedPositionProfileInput {
  /** An unposted profile of a position opening to update. */
  positionProfile: UpdateUnpostedPositionProfilePositionProfileInput;
}

/** The response from the `updateUnpostedPositionProfile` mutation. */
export interface UpdateUnpostedPositionProfilePayload {
  __typename?: 'UpdateUnpostedPositionProfilePayload';
  /** Attributes of the updated unposted position profile. */
  positionProfile: UnpostedPositionProfile;
}

/** An unposted profile of a position opening to update. */
export interface UpdateUnpostedPositionProfilePositionProfileInput {
  /** The identifier for the unposted `PositionProfile` to update. */
  profileId: Scalars['String'];
  /**
   * A human-readable name given to the profile.
   *
   * This in addition to the `positionTitle` can help identify the profile to an end user.
   */
  profileName?: Maybe<Scalars['String']>;
  /**
   * A short phrase describing the position as it would be listed on a business card or in a company directory.
   *
   * This field has a maximum length of 80 bytes in UTF-8 encoding.
   */
  positionTitle: Scalars['String'];
  /**
   * An optional hirer-provided opaque job reference.
   *
   * This field has a maximum length of 50 bytes in UTF-8 encoding.
   */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * SEEK does not use this field on unposted position profiles.
   *
   * This field has a maximum length of 50 bytes in UTF-8 encoding.
   */
  seekBillingReference?: Maybe<Scalars['String']>;
  /**
   * An array of formatted position profile descriptions.
   *
   * A maximum of 10 formatted descriptions may be provided.
   */
  positionFormattedDescriptions: Array<PositionFormattedDescriptionInput>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   */
  positionScheduleTypeCodes?: Maybe<Array<Scalars['String']>>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackageInput;
  /**
   * An array of `JobCategory` identifiers.
   *
   * A maximum of 10 job categories may be provided.
   */
  jobCategories: Array<Scalars['String']>;
  /**
   * An array of `Location` identifiers.
   *
   * A maximum of 10 locations may be provided.
   */
  positionLocation: Array<Scalars['String']>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 bytes in UTF-8 encoding.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
}

/** The input parameter for the `updateUploadedCandidatePerson` mutation. */
export interface UpdateUploadedCandidatePersonInput {
  /** The details of the uploaded candidate to be updated. */
  candidate: UpdateUploadedCandidatePersonCandidateInput;
}

/** The response from the `updateUploadedCandidatePerson` mutation. */
export type UpdateUploadedCandidatePersonPayload =
  | UpdateUploadedCandidatePersonPayloadConflict
  | UpdateUploadedCandidatePersonPayloadSuccess;

/** The conflict result for the `updateUploadedCandidatePerson` mutation. */
export interface UpdateUploadedCandidatePersonPayloadConflict {
  __typename?: 'UpdateUploadedCandidatePersonPayload_Conflict';
  /** The details of the conflicting candidate. */
  conflictingCandidate: Candidate;
}

/** The success result for the `updateUploadedCandidatePerson` mutation. */
export interface UpdateUploadedCandidatePersonPayloadSuccess {
  __typename?: 'UpdateUploadedCandidatePersonPayload_Success';
  /** The details of the uploaded candidate that was updated. */
  candidate: Candidate;
}

/** The details of the uploaded candidate to be updated. */
export interface UpdateUploadedCandidatePersonCandidateInput {
  /** The identifier for the uploaded `Candidate` to be updated. */
  documentId: Scalars['String'];
  /**
   * The personal details of the uploaded candidate to be updated.
   *
   * At least one email address is required in `communication`,
   * and one of the provided values must match `seekPrimaryEmailAddress`.
   *
   * If no value is provided for physical addresses in `communication` it will be treated as an empty list and will remove any previously uploaded addresses.
   */
  person: CandidatePersonInput;
  /**
   * The candidate's primary email address.
   *
   * The value must match one of the candidate's email addresses.
   */
  seekPrimaryEmailAddress: Scalars['String'];
}

/** The input parameter for the `updateUploadedCandidateProfileActions` mutation. */
export interface UpdateUploadedCandidateProfileActionsInput {
  /** The details of the uploaded candidate profile to be updated. */
  candidateProfile: UpdateUploadedCandidateProfileActionsCandidateProfileInput;
}

/** The response from the `updateUploadedCandidateProfileActions` mutation. */
export interface UpdateUploadedCandidateProfileActionsPayload {
  __typename?: 'UpdateUploadedCandidateProfileActionsPayload';
  /**
   * The details of the uploaded candidate profile that was updated.
   *
   * The uploaded candidate is available in the `candidate` field.
   */
  candidateProfile: CandidateProfile;
}

/** The details of the uploaded candidate profile to be updated. */
export interface UpdateUploadedCandidateProfileActionsCandidateProfileInput {
  /** The identifier for the uploaded `CandidateProfile` to be updated. */
  profileId: Scalars['String'];
  /**
   * Any associated actions that can be performed on the candidate profile.
   *
   * Only one of each type of action is permitted for the candidate profile.
   * Currently, only a `ViewProfile` action type is defined to provide a URL to view the candidate's profile.
   */
  seekActions: Array<CandidateProcessActionInput>;
}

/** The input parameter for the `updateUploadedCandidateProfileDates` mutation. */
export interface UpdateUploadedCandidateProfileDatesInput {
  /** The details of the uploaded candidate profile to be updated. */
  candidateProfile: UpdateUploadedCandidateProfileDatesCandidateProfileInput;
}

/** The response from the `updateUploadedCandidateProfileDates` mutation. */
export interface UpdateUploadedCandidateProfileDatesPayload {
  __typename?: 'UpdateUploadedCandidateProfileDatesPayload';
  /**
   * The details of the uploaded candidate profile that was updated.
   *
   * The uploaded candidate is available in the `candidate` field.
   */
  candidateProfile: CandidateProfile;
}

/** The details of the uploaded candidate profile to be updated. */
export interface UpdateUploadedCandidateProfileDatesCandidateProfileInput {
  /** The identifier for the uploaded `CandidateProfile` to be updated. */
  profileId: Scalars['String'];
  /**
   * When the candidate profile was first created in the partner system.
   *
   * Expects a RFC 3339 compliant date time.
   * Millisecond precision is optional, and set to 0 if not provided.
   */
  createDateTime: Scalars['DateTime'];
  /**
   * When the candidate profile was last updated in the partner system.
   *
   * Expects a RFC 3339 compliant date time.
   * Millisecond precision is optional, and set to 0 if not provided.
   */
  updateDateTime: Scalars['DateTime'];
}

/** The input parameter for the `updateUploadedCandidateProfilePositionPreferences` mutation. */
export interface UpdateUploadedCandidateProfilePositionPreferencesInput {
  /** The details of the uploaded candidate profile to be updated. */
  candidateProfile: UpdateUploadedCandidateProfilePositionPreferencesCandidateProfileInput;
}

/** The response from the `updateUploadedCandidateProfilePositionPreferences` mutation. */
export interface UpdateUploadedCandidateProfilePositionPreferencesPayload {
  __typename?: 'UpdateUploadedCandidateProfilePositionPreferencesPayload';
  /**
   * The details of the uploaded candidate profile that was updated.
   *
   * The uploaded candidate is available in the `candidate` field.
   */
  candidateProfile: CandidateProfile;
}

/** The details of the uploaded candidate profile to be updated. */
export interface UpdateUploadedCandidateProfilePositionPreferencesCandidateProfileInput {
  /** The identifier for the uploaded `CandidateProfile` to be updated. */
  profileId: Scalars['String'];
  /**
   * The candidate's preferences in an ideal position.
   *
   * `ProactiveSourcing` candidates may have 0–1 position preferences.
   */
  positionPreferences: Array<PositionPreferenceInput>;
}

/** The input parameter for the `updateWebhookSubscriptionDeliveryConfiguration` mutation. */
export interface UpdateWebhookSubscriptionDeliveryConfigurationInput {
  /** The details of the webhook subscription to be updated. */
  webhookSubscription: UpdateWebhookSubscriptionDeliveryConfigurationSubscriptionInput;
}

/** The response from the `updateWebhookSubscriptionDeliveryConfiguration` mutation. */
export type UpdateWebhookSubscriptionDeliveryConfigurationPayload =
  | UpdateWebhookSubscriptionDeliveryConfigurationPayloadConflict
  | UpdateWebhookSubscriptionDeliveryConfigurationPayloadSuccess;

/**
 * The conflict result for the `updateWebhookSubscriptionDeliveryConfiguration` mutation.
 *
 * Webhook subscriptions must have a unique combination of `eventTypeCode`, `schemeId`, `url` & `hirerId` fields.
 * Attempting to update a webhook subscription to match an existing subscription will result in a conflict.
 */
export interface UpdateWebhookSubscriptionDeliveryConfigurationPayloadConflict {
  __typename?: 'UpdateWebhookSubscriptionDeliveryConfigurationPayload_Conflict';
  /** The details of the conflicting webhook subscription. */
  conflictingWebhookSubscription: WebhookSubscription;
}

/** The success result for the `updateWebhookSubscriptionDeliveryConfiguration` mutation. */
export interface UpdateWebhookSubscriptionDeliveryConfigurationPayloadSuccess {
  __typename?: 'UpdateWebhookSubscriptionDeliveryConfigurationPayload_Success';
  /** The details of the updated webhook subscription. */
  webhookSubscription: WebhookSubscription;
}

/** The details of the webhook subscription delivery configuration to be updated. */
export interface UpdateWebhookSubscriptionDeliveryConfigurationSubscriptionInput {
  /** The identifier for the `WebhookSubscription`. */
  id: Scalars['String'];
  /** The subscriber-owned URL where events will be sent to. */
  url: Scalars['String'];
  /**
   * The maximum number of events that will be sent in each HTTP request.
   *
   * This number must be between 1 and 10 inclusive. Defaults to 10.
   */
  maxEventsPerAttempt?: Maybe<Scalars['Int']>;
}

/** The input parameter for the `updateWebhookSubscriptionSigningConfiguration` mutation. */
export interface UpdateWebhookSubscriptionSigningConfigurationInput {
  /** The details of the webhook subscription to be updated. */
  webhookSubscription: UpdateWebhookSubscriptionSigningConfigurationSubscriptionInput;
}

/** The response from the `updateWebhookSubscriptionSigningConfiguration` mutation. */
export interface UpdateWebhookSubscriptionSigningConfigurationPayload {
  __typename?: 'UpdateWebhookSubscriptionSigningConfigurationPayload';
  /** The details of the updated webhook subscription. */
  webhookSubscription: WebhookSubscription;
}

/** The details of the webhook subscription signing configuration to be updated. */
export interface UpdateWebhookSubscriptionSigningConfigurationSubscriptionInput {
  /** The identifier for the `WebhookSubscription`. */
  id: Scalars['String'];
  /**
   * The algorithm for signing webhooks.
   *
   * Currently, two codes are defined:
   *
   * - `None` indicates no signature will be attached.
   * - `SeekHmacSha512` indicates a HMAC SHA-512 hex digest will be attached to each request as a `Seek-Signature` header.
   *
   * A webhook's signature can be used to validate that the request originated from SEEK.
   *
   * Use a constant-time algorithm to validate the signature.
   * Regular comparison methods like the `==` operator are susceptible to timing attacks.
   */
  signingAlgorithmCode: Scalars['String'];
  /**
   * The secret for signing webhooks.
   *
   * This must be specified if `signingAlgorithmCode` is not `None`.
   * It is used as the key to generate a message authentication code for each request.
   *
   * The secret should be a random string with high entropy that is not reused for any other purpose.
   */
  secret?: Maybe<Scalars['String']>;
}

/** The input parameter for the `uploadCandidate` mutation. */
export interface UploadCandidateInput {
  /** The details of the `Candidate` to be uploaded. */
  candidate: UploadCandidateCandidateInput;
  /** The details of the `CandidateProfile` to be uploaded. */
  candidateProfile: UploadCandidateCandidateProfileInput;
  /** The details of the `HiringOrganization` that submitted the candidate profile. */
  hiringOrganization: UploadCandidateHiringOrganizationInput;
}

/** The response from the `uploadCandidate` mutation. */
export type UploadCandidatePayload =
  | UploadCandidatePayloadConflict
  | UploadCandidatePayloadSuccess;

/** The conflict result for the `uploadCandidate` mutation. */
export interface UploadCandidatePayloadConflict {
  __typename?: 'UploadCandidatePayload_Conflict';
  /**
   * The details of the conflicting candidate.
   *
   * The conflicting candidate profile is available in the `profiles` field.
   */
  conflictingCandidate: Candidate;
  /** The details of the hiring organization that uploaded the candidate and their profile. */
  hiringOrganization: HiringOrganization;
}

/** The success result for the `uploadCandidate` mutation. */
export interface UploadCandidatePayloadSuccess {
  __typename?: 'UploadCandidatePayload_Success';
  /**
   * The details of the uploaded candidate.
   *
   * The uploaded candidate profile is available in the `profiles` field.
   */
  candidate: Candidate;
  /**
   * The details of the process history items uploaded alongside the candidate.
   *
   * The upload operation is atomic;
   * if you receive an `UploadCandidatePayload_Success` payload,
   * all process history items were successfully uploaded.
   * Input order is preserved to allow your software to record the `id` assigned to each item.
   */
  candidateProcessHistoryItems: Array<CandidateProcessHistoryItem>;
  /** The details of the hiring organization that uploaded the candidate and their profile. */
  hiringOrganization: HiringOrganization;
}

/** The details of the candidate to be uploaded. */
export interface UploadCandidateCandidateInput {
  /**
   * The candidate's primary email address.
   *
   * The value must match one of the candidate's email addresses.
   * Duplicate uploads will result in a `BAD_USER_INPUT` error.
   */
  seekPrimaryEmailAddress: Scalars['String'];
  /**
   * Instructions on how this candidate should be distributed.
   *
   * Currently, one product code is defined for uploaded candidates:
   *
   * - `ProactiveSourcing` indicates that the candidate may be viewed in SEEK Talent Search.
   */
  distributionGuidelines: DistributionGuidelinesInput;
  /**
   * The personal details of the candidate to be uploaded.
   *
   * At least one email address is required in `communication`,
   * and one of the provided values must match `seekPrimaryEmailAddress`.
   */
  person: CandidatePersonInput;
}

/** The details of the candidate profile to be uploaded. */
export interface UploadCandidateCandidateProfileInput {
  /**
   * When the candidate profile was first created in the partner system.
   *
   * Expects a RFC 3339 compliant date time.
   * Millisecond precision is optional, and set to 0 if not provided.
   */
  createDateTime: Scalars['DateTime'];
  /**
   * When the candidate profile was last updated in the partner system.
   *
   * Expects a RFC 3339 compliant date time.
   * Millisecond precision is optional, and set to 0 if not provided.
   */
  updateDateTime: Scalars['DateTime'];
  /**
   * The workflow process history of the candidate.
   *
   * A maximum of 20 process history items may be provided on initial upload.
   */
  seekProcessHistory: Array<CandidateProcessHistoryItemInput>;
  /**
   * The candidate's preferences in an ideal position.
   *
   * `ProactiveSourcing` candidates may have 0–1 position preferences.
   */
  positionPreferences: Array<PositionPreferenceInput>;
  /**
   * Any associated actions that can be performed on the candidate profile.
   *
   * Only one of each type of action is permitted for the candidate profile.
   * Currently, only a `ViewProfile` action type is defined to provide a URL to view the candidate's profile.
   */
  seekActions: Array<CandidateProcessActionInput>;
}

/** Details of the `HiringOrganization` that submitted the candidate profile. */
export interface UploadCandidateHiringOrganizationInput {
  /** The identifier for the `HiringOrganization` that submitted the candidate profile. */
  id: Scalars['String'];
}

/** An address of a human-accessible web page. */
export interface WebUrl {
  __typename?: 'WebUrl';
  /** The URL of the web page. */
  url: Scalars['String'];
}

/** An address of a human-accessible web page. */
export interface WebUrlInput {
  /** The URL of the web page. */
  url: Scalars['String'];
}

/** An attempt to deliver a specific `Event` to a `WebhookSubscription`. */
export interface WebhookAttempt {
  __typename?: 'WebhookAttempt';
  /** The identifier for the `WebhookAttempt`. */
  id: ObjectIdentifier;
  /** The date & time that the webhook attempt was acknowledged or timed out. */
  createDateTime: Scalars['DateTime'];
  /** The event that was attempted to be delivered. */
  event: Event;
  /**
   * The webhook subscription that was the target of the delivery attempt.
   *
   * This will be `null` if the subscription has since been deleted.
   */
  webhookSubscription?: Maybe<WebhookSubscription>;
  /** The HTTP request containing the webhook attempt. */
  webhookRequest: WebhookRequest;
}

/** A webhook attempt in a paginated list. */
export interface WebhookAttemptEdge {
  __typename?: 'WebhookAttemptEdge';
  /**
   * The opaque cursor to the webhook attempt.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual webhook attempt. */
  node: WebhookAttempt;
}

/** A page of webhook attempts. */
export interface WebhookAttemptsConnection {
  __typename?: 'WebhookAttemptsConnection';
  /** The page of webhook attempts and their corresponding cursors. */
  edges: Array<WebhookAttemptEdge>;
  /** The pagination metadata for this page of webhook attempts. */
  pageInfo: PageInfo;
}

/**
 * The criteria to filter webhook attempts by.
 *
 * These are `WebhookAttempt`-specific extensions on top of the standard pagination arguments `before`, `after`, `first` and `last`.
 */
export interface WebhookAttemptsFilterInput {
  /**
   * The creation date & time that resulting webhook attempts must succeed.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `WebhookAttemptsConnection`.
   */
  afterDateTime?: Maybe<Scalars['DateTime']>;
  /**
   * The creation date & time that resulting webhook attempts must precede.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `WebhookAttemptsConnection`.
   */
  beforeDateTime?: Maybe<Scalars['DateTime']>;
  /**
   * The high-level HTTP result of the webhook attempts to retrieve.
   *
   * See the `WebhookRequest.descriptionCode` documentation for a list of possible description codes.
   *
   * If this is not provided then all attempts will be returned regardless of their result.
   */
  descriptionCodes?: Maybe<Array<Scalars['String']>>;
}

/**
 * An HTTP request to a `WebhookSubscription`.
 *
 * HTTP requests are associated with one or more `WebhookAttempt`s representing each `Event` in the request body.
 */
export interface WebhookRequest {
  __typename?: 'WebhookRequest';
  /**
   * The identifier for the HTTP request.
   *
   * This is included in the request as an `X-Request-Id` custom header.
   */
  requestId: Scalars['String'];
  /**
   * The webhook subscription that was the target of the HTTP request.
   *
   * This will be `null` if the subscription has since been deleted.
   */
  webhookSubscription?: Maybe<WebhookSubscription>;
  /**
   * The HTTP status code returned by the subscription endpoint.
   *
   * When an HTTP response wasn't received a synthetic status code will be generated:
   *
   * - For `InvalidUrl` the status code will be set to `400`.
   * - For `RequestTimeout` the status code will be set to `504`.
   */
  statusCode: Scalars['Int'];
  /**
   * The high-level description of the HTTP request's result.
   *
   * Currently, four codes are defined:
   *
   * - `BadResponse` indicates the subscription endpoint returned a non-2xx HTTP response.
   * - `InvalidUrl` indicates the subscription URL did not pass validation.
   * - `RequestTimeout` indicates the subscription endpoint took more than 10 seconds to respond.
   * - `Success` indicates the subscription endpoint returned a 2xx HTTP response.
   */
  descriptionCode: Scalars['String'];
  /**
   * The latency of the HTTP request in milliseconds.
   *
   * This will be `null` if the request wasn't made (i.e. an `InvalidUrl` error occurred).
   */
  latencyMs?: Maybe<Scalars['Int']>;
  /**
   * The date & time the HTTP request occurred.
   *
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /** The list of events that were attempted to be delivered in the request body. */
  attempts: Array<WebhookAttempt>;
}

/** A webhook request in a paginated list. */
export interface WebhookRequestEdge {
  __typename?: 'WebhookRequestEdge';
  /**
   * The opaque cursor to the webhook request.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual webhook request. */
  node: WebhookRequest;
}

/**
 * The criteria to filter webhook requests by.
 *
 * These are `WebhookRequest`-specific extensions on top of the standard pagination arguments `before`, `after`, `first` and `last`.
 */
export interface WebhookRequestFilterInput {
  /**
   * The creation date & time that resulting webhook requests must succeed.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `WebhookRequestsConnection`.
   */
  afterDateTime?: Maybe<Scalars['DateTime']>;
  /**
   * The creation date & time that resulting webhook requests must precede.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `WebhookRequestsConnection`.
   */
  beforeDateTime?: Maybe<Scalars['DateTime']>;
  /**
   * The high-level HTTP result of the webhook requests to retrieve.
   *
   * See the `WebhookRequest.descriptionCode` documentation for a list of possible description codes.
   *
   * If this is not provided then all requests will be returned regardless of their result.
   */
  descriptionCodes?: Maybe<Array<Scalars['String']>>;
}

/** A page of webhook requests. */
export interface WebhookRequestsConnection {
  __typename?: 'WebhookRequestsConnection';
  /** The page of webhook requests and their corresponding cursors. */
  edges: Array<WebhookRequestEdge>;
  /** The pagination metadata for this page of webhook requests. */
  pageInfo: PageInfo;
}

/**
 * A subscription for a given event type and scheme to be delivered via webhook.
 *
 * Events are delivered in batches with a HTTP POST request to the specified subscription URL.
 */
export interface WebhookSubscription {
  __typename?: 'WebhookSubscription';
  /** The identifier for the `WebhookSubscription`. */
  id: ObjectIdentifier;
  /**
   * The type of event.
   *
   * See `Event` implementations for a list of supported values.
   */
  eventTypeCode: Scalars['String'];
  /**
   * The data source for the event.
   *
   * Currently, only `seekAnz` and `seekAnzPublicTest` are supported.
   */
  schemeId: Scalars['String'];
  /**
   * The optional hirer ID to receive events from.
   *
   * By default webhook subscriptions will send events from all hirers the partner has access to.
   * A non-null `hirerId` indicates that this subscription is filtered to a single hirer.
   */
  hirerId?: Maybe<ObjectIdentifier>;
  /**
   * The optional hirer associated with this webhook subscription.
   *
   * This will only be accessible if there is an active relationship between the partner and hirer.
   *
   * By default webhook subscriptions will send events from all hirers the partner has access to.
   * A non-null `hirer` field indicates that this subscription is filtered to a single hirer.
   */
  hirer?: Maybe<HiringOrganization>;
  /** The subscriber-owned URL where events are sent to. */
  url: Scalars['String'];
  /**
   * The maximum number of events that will be sent in each HTTP request.
   *
   * This number is between 1 and 10 inclusive. Defaults to 10.
   */
  maxEventsPerAttempt: Scalars['Int'];
  /**
   * The algorithm for signing webhooks.
   *
   * Currently, two codes are defined:
   *
   * - `None` indicates no signature will be attached.
   * - `SeekHmacSha512` indicates a HMAC SHA-512 hex digest will be attached to each request as a `Seek-Signature` header.
   *
   * A webhook's signature can be used to validate that the request originated from SEEK.
   *
   * Use a constant-time algorithm to validate the signature.
   * Regular comparison methods like the `==` operator are susceptible to timing attacks.
   */
  signingAlgorithmCode: Scalars['String'];
  /**
   * The date & time the webhook subscription was created.
   *
   * Initial `afterDateTime` and `beforeDateTime` filters apply to this field.
   */
  createDateTime: Scalars['DateTime'];
  /** The date & time the webhook subscription was last updated. */
  updateDateTime: Scalars['DateTime'];
  /**
   * A page of webhook requests for the subscription matching the specified criteria.
   *
   * A maximum of 100 webhook requests can be returned in a single page.
   * Additional webhook requests can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known request if no pagination arguments are provided.
   */
  webhookRequests: WebhookRequestsConnection;
  /**
   * A page of replays for the current webhook subscription matching the specified criteria.
   *
   * A maximum of 100 webhook subscription replays can be returned in a single page.
   * Additional subscription replays can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest subscription replay if no pagination arguments are provided.
   */
  webhookSubscriptionReplays: WebhookSubscriptionReplaysConnection;
}

/**
 * A subscription for a given event type and scheme to be delivered via webhook.
 *
 * Events are delivered in batches with a HTTP POST request to the specified subscription URL.
 */
export interface WebhookSubscriptionWebhookRequestsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookRequestFilterInput>;
}

/**
 * A subscription for a given event type and scheme to be delivered via webhook.
 *
 * Events are delivered in batches with a HTTP POST request to the specified subscription URL.
 */
export interface WebhookSubscriptionWebhookSubscriptionReplaysArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookSubscriptionReplaysFilterInput>;
}

/** A webhook subscription in a paginated list. */
export interface WebhookSubscriptionEdge {
  __typename?: 'WebhookSubscriptionEdge';
  /**
   * The opaque cursor to the webhook subscription.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual webhook subscription. */
  node: WebhookSubscription;
}

/** The state of a request to replay events for a `WebhookSubscription`. */
export interface WebhookSubscriptionReplay {
  __typename?: 'WebhookSubscriptionReplay';
  /** The identifier for the `WebhookSubscriptionReplay`. */
  id: ObjectIdentifier;
  /** The date & time that the webhook subscription replay was created. */
  createDateTime: Scalars['DateTime'];
  /**
   * The date & time that the subscription replay was last updated.
   *
   * Subscription replays are updated whenever the replay makes forward progress.
   */
  updateDateTime: Scalars['DateTime'];
  /**
   * The webhook subscription that was the target of the replay.
   *
   * This will be `null` if the subscription has since been deleted.
   */
  webhookSubscription?: Maybe<WebhookSubscription>;
  /**
   * The current status of the replay.
   *
   * Currently, the following status codes are defined:
   *
   * - `Submitted`
   * - `Running`
   * - `Completed`
   * - `Cancelled`
   */
  statusCode: Scalars['String'];
}

/** A webhook subscription replay in a paginated list. */
export interface WebhookSubscriptionReplayEdge {
  __typename?: 'WebhookSubscriptionReplayEdge';
  /**
   * The opaque cursor to the webhook subscription replay.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual webhook subscription replay. */
  node: WebhookSubscriptionReplay;
}

/** A page of webhook subscription replays. */
export interface WebhookSubscriptionReplaysConnection {
  __typename?: 'WebhookSubscriptionReplaysConnection';
  /** The page of webhook subscription replays and their corresponding cursors. */
  edges: Array<WebhookSubscriptionReplayEdge>;
  /**
   * The pagination metadata for this page of webhook subscription replays.
   *
   * Disclaimer:
   * - The `hasPreviousPage` field will always be false when paginating by `first`.
   * - The `hasNextPage` field will always be false when paginating by `last`.
   *
   * To discern whether a next/previous page exists in these conditions, an additional request will need to be made to retrieve the next/previous page.
   */
  pageInfo: PageInfo;
}

/**
 * The criteria to filter webhook subscription replays by.
 *
 * These are `WebhookSubscriptionReplay`-specific extensions on top of the standard pagination arguments `before`, `after`, `first` and `last`.
 */
export interface WebhookSubscriptionReplaysFilterInput {
  /**
   * The replay status to filter by.
   *
   * See the `WebhookSubscriptionReplay.statusCode` documentation for a list of possible status codes.
   *
   * If this is not provided then replays of all statuses will be returned.
   */
  statusCode?: Maybe<Scalars['String']>;
}

/** A page of webhook subscriptions. */
export interface WebhookSubscriptionsConnection {
  __typename?: 'WebhookSubscriptionsConnection';
  /** The page of webhook subscriptions and their corresponding cursors. */
  edges: Array<WebhookSubscriptionEdge>;
  /** The pagination metadata for this page of subscriptions. */
  pageInfo: PageInfo;
}

/**
 * The criteria to filter webhook subscriptions by.
 *
 * These are `WebhookSubscription`-specific extensions on top of the standard pagination arguments `before`, `after`, `first` and `last`.
 */
export interface WebhookSubscriptionsFilterInput {
  /**
   * The creation date & time that resulting webhook subscriptions must succeed.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `WebhookSubscriptionsConnection`.
   */
  afterDateTime?: Maybe<Scalars['DateTime']>;
  /**
   * The creation date & time that resulting webhook subscriptions must precede.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `WebhookSubscriptionsConnection`.
   */
  beforeDateTime?: Maybe<Scalars['DateTime']>;
  /**
   * The event types of webhook subscriptions to retrieve.
   *
   * See `Event` implementations for a list of supported values.
   *
   * If this is not provided then events of all types will be returned.
   */
  eventTypeCodes?: Maybe<Array<Scalars['String']>>;
  /**
   * The hirer IDs of the hirer-filtered webhook subscriptions to retrieve.
   *
   * If this is not provided then both hirer-filtered and unfiltered subscriptions will be returned.
   */
  hirerIds?: Maybe<Array<Scalars['String']>>;
}

export type AdvertisementBrandingFieldsFragment = {
  __typename?: 'AdvertisementBranding';
  name: string;
  id: { __typename?: 'ObjectIdentifier'; value: string };
  images: Array<{
    __typename?: 'AdvertisementBrandingImage';
    typeCode: string;
    url: string;
  }>;
};

export type AdvertisementBrandingEdgeFieldsFragment = {
  __typename?: 'AdvertisementBrandingEdge';
  node: {
    __typename?: 'AdvertisementBranding';
    name: string;
    id: { __typename?: 'ObjectIdentifier'; value: string };
    images: Array<{
      __typename?: 'AdvertisementBrandingImage';
      typeCode: string;
      url: string;
    }>;
  };
};

export type AdvertisementBrandingQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type AdvertisementBrandingQuery = {
  advertisementBranding?: Maybe<{
    __typename?: 'AdvertisementBranding';
    name: string;
    id: { __typename?: 'ObjectIdentifier'; value: string };
    images: Array<{
      __typename?: 'AdvertisementBrandingImage';
      typeCode: string;
      url: string;
    }>;
  }>;
};

export type AdvertisementBrandingsQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  hirerId: Scalars['String'];
}>;

export type AdvertisementBrandingsQuery = {
  advertisementBrandings: {
    __typename?: 'AdvertisementBrandingsConnection';
    pageInfo: {
      __typename?: 'PageInfo';
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: Maybe<string>;
      endCursor?: Maybe<string>;
    };
    edges: Array<{
      __typename?: 'AdvertisementBrandingEdge';
      node: {
        __typename?: 'AdvertisementBranding';
        name: string;
        id: { __typename?: 'ObjectIdentifier'; value: string };
        images: Array<{
          __typename?: 'AdvertisementBrandingImage';
          typeCode: string;
          url: string;
        }>;
      };
    }>;
  };
};

export type JobCategoryAttributesFragment = {
  __typename?: 'JobCategory';
  name: string;
  id: { __typename?: 'ObjectIdentifier'; value: string };
};

export type JobCategoriesQueryVariables = Exact<{
  schemeId: Scalars['String'];
}>;

export type JobCategoriesQuery = {
  jobCategories: Array<{
    __typename?: 'JobCategory';
    name: string;
    children?: Maybe<
      Array<{
        __typename?: 'JobCategory';
        name: string;
        id: { __typename?: 'ObjectIdentifier'; value: string };
      }>
    >;
    id: { __typename?: 'ObjectIdentifier'; value: string };
  }>;
};

export type JobCategorySuggestionChoiceAttributesFragment = {
  __typename?: 'JobCategorySuggestionChoice';
  confidence: number;
  jobCategory: {
    __typename?: 'JobCategory';
    name: string;
    parent?: Maybe<{
      __typename?: 'JobCategory';
      name: string;
      id: { __typename?: 'ObjectIdentifier'; value: string };
    }>;
    children?: Maybe<
      Array<{
        __typename?: 'JobCategory';
        name: string;
        id: { __typename?: 'ObjectIdentifier'; value: string };
      }>
    >;
    id: { __typename?: 'ObjectIdentifier'; value: string };
  };
};

export type JobCategorySuggestQueryVariables = Exact<{
  positionProfile: JobCategorySuggestionPositionProfileInput;
  schemeId: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
}>;

export type JobCategorySuggestQuery = {
  jobCategorySuggestions: Array<{
    __typename?: 'JobCategorySuggestionChoice';
    confidence: number;
    jobCategory: {
      __typename?: 'JobCategory';
      name: string;
      parent?: Maybe<{
        __typename?: 'JobCategory';
        name: string;
        id: { __typename?: 'ObjectIdentifier'; value: string };
      }>;
      children?: Maybe<
        Array<{
          __typename?: 'JobCategory';
          name: string;
          id: { __typename?: 'ObjectIdentifier'; value: string };
        }>
      >;
      id: { __typename?: 'ObjectIdentifier'; value: string };
    };
  }>;
};

export type LocationAttributesFragment = {
  __typename?: 'Location';
  name: string;
  contextualName: string;
  countryCode: string;
  id: { __typename?: 'ObjectIdentifier'; value: string };
};

export type NestedLocationAttributesFragment = {
  __typename?: 'Location';
  name: string;
  contextualName: string;
  countryCode: string;
  parent?: Maybe<{
    __typename?: 'Location';
    name: string;
    contextualName: string;
    countryCode: string;
    parent?: Maybe<{
      __typename?: 'Location';
      name: string;
      contextualName: string;
      countryCode: string;
      parent?: Maybe<{
        __typename?: 'Location';
        name: string;
        contextualName: string;
        countryCode: string;
        parent?: Maybe<{
          __typename?: 'Location';
          name: string;
          contextualName: string;
          countryCode: string;
          parent?: Maybe<{
            __typename?: 'Location';
            name: string;
            contextualName: string;
            countryCode: string;
            id: { __typename?: 'ObjectIdentifier'; value: string };
          }>;
          id: { __typename?: 'ObjectIdentifier'; value: string };
        }>;
        id: { __typename?: 'ObjectIdentifier'; value: string };
      }>;
      id: { __typename?: 'ObjectIdentifier'; value: string };
    }>;
    id: { __typename?: 'ObjectIdentifier'; value: string };
  }>;
  id: { __typename?: 'ObjectIdentifier'; value: string };
};

export type LocationQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type LocationQuery = {
  location?: Maybe<{
    __typename?: 'Location';
    name: string;
    contextualName: string;
    countryCode: string;
    parent?: Maybe<{
      __typename?: 'Location';
      name: string;
      contextualName: string;
      countryCode: string;
      parent?: Maybe<{
        __typename?: 'Location';
        name: string;
        contextualName: string;
        countryCode: string;
        parent?: Maybe<{
          __typename?: 'Location';
          name: string;
          contextualName: string;
          countryCode: string;
          parent?: Maybe<{
            __typename?: 'Location';
            name: string;
            contextualName: string;
            countryCode: string;
            parent?: Maybe<{
              __typename?: 'Location';
              name: string;
              contextualName: string;
              countryCode: string;
              id: { __typename?: 'ObjectIdentifier'; value: string };
            }>;
            id: { __typename?: 'ObjectIdentifier'; value: string };
          }>;
          id: { __typename?: 'ObjectIdentifier'; value: string };
        }>;
        id: { __typename?: 'ObjectIdentifier'; value: string };
      }>;
      id: { __typename?: 'ObjectIdentifier'; value: string };
    }>;
    id: { __typename?: 'ObjectIdentifier'; value: string };
  }>;
};

export type SuggestLocationsQueryVariables = Exact<{
  usageTypeCode: Scalars['String'];
  schemeId: Scalars['String'];
  hirerId?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
}>;

export type SuggestLocationsQuery = {
  locationSuggestions?: Maybe<
    Array<{
      __typename?: 'LocationSuggestion';
      location: {
        __typename?: 'Location';
        name: string;
        contextualName: string;
        countryCode: string;
        parent?: Maybe<{
          __typename?: 'Location';
          name: string;
          contextualName: string;
          countryCode: string;
          parent?: Maybe<{
            __typename?: 'Location';
            name: string;
            contextualName: string;
            countryCode: string;
            parent?: Maybe<{
              __typename?: 'Location';
              name: string;
              contextualName: string;
              countryCode: string;
              parent?: Maybe<{
                __typename?: 'Location';
                name: string;
                contextualName: string;
                countryCode: string;
                parent?: Maybe<{
                  __typename?: 'Location';
                  name: string;
                  contextualName: string;
                  countryCode: string;
                  id: { __typename?: 'ObjectIdentifier'; value: string };
                }>;
                id: { __typename?: 'ObjectIdentifier'; value: string };
              }>;
              id: { __typename?: 'ObjectIdentifier'; value: string };
            }>;
            id: { __typename?: 'ObjectIdentifier'; value: string };
          }>;
          id: { __typename?: 'ObjectIdentifier'; value: string };
        }>;
        id: { __typename?: 'ObjectIdentifier'; value: string };
      };
    }>
  >;
};

export type NearestLocationsQueryVariables = Exact<{
  schemeId: Scalars['String'];
  geoLocation: GeoLocationInput;
  first?: Maybe<Scalars['Int']>;
}>;

export type NearestLocationsQuery = {
  nearestLocations?: Maybe<
    Array<{
      __typename?: 'Location';
      name: string;
      contextualName: string;
      countryCode: string;
      parent?: Maybe<{
        __typename?: 'Location';
        name: string;
        contextualName: string;
        countryCode: string;
        parent?: Maybe<{
          __typename?: 'Location';
          name: string;
          contextualName: string;
          countryCode: string;
          parent?: Maybe<{
            __typename?: 'Location';
            name: string;
            contextualName: string;
            countryCode: string;
            parent?: Maybe<{
              __typename?: 'Location';
              name: string;
              contextualName: string;
              countryCode: string;
              parent?: Maybe<{
                __typename?: 'Location';
                name: string;
                contextualName: string;
                countryCode: string;
                id: { __typename?: 'ObjectIdentifier'; value: string };
              }>;
              id: { __typename?: 'ObjectIdentifier'; value: string };
            }>;
            id: { __typename?: 'ObjectIdentifier'; value: string };
          }>;
          id: { __typename?: 'ObjectIdentifier'; value: string };
        }>;
        id: { __typename?: 'ObjectIdentifier'; value: string };
      }>;
      id: { __typename?: 'ObjectIdentifier'; value: string };
    }>
  >;
};
