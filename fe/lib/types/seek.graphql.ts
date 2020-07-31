export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /**
   * A date string compliant with the ISO 8601 "year", "year and month" or "complete date" formats.
   * For example, `"2020"`, `"2020-05"` and `"2020-05-27"` are all valid for `HistoryDate`.
   *
   * This is used for dates in a candidate's position & employment histories where the precise month or day may not have been provided.
   */
  HistoryDate: string;
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface Query {
  __typename?: 'Query';
  /** The API version. */
  version: Scalars['String'];
  /**
   * An application questionnaire with the given `id`.
   *
   * Questionnaires can be associated with a `PositionProfile`.
   *
   * This query accepts browser tokens that include the `query:application-questionnaires` scope.
   */
  applicationQuestionnaire?: Maybe<ApplicationQuestionnaire>;
  /**
   * Ad products available when creating an advertisement.
   * @deprecated Use `seekAnzHirerAdvertisementCreationProducts`.
   */
  advertisementCreationProducts?: Maybe<Array<AdProduct>>;
  /**
   * Ad products available when updating an advertisement.
   * @deprecated Use `seekAnzHirerAdvertisementModificationProducts`.
   */
  advertisementModificationProducts?: Maybe<Array<AdProduct>>;
  /** Ad products available when creating an advertisement. */
  seekAnzHirerAdvertisementCreationProducts?: Maybe<Array<SeekAnzAdProduct>>;
  /** Ad products available when updating an advertisement. */
  seekAnzHirerAdvertisementModificationProducts?: Maybe<
    Array<SeekAnzAdProduct>
  >;
  /**
   * Ad products available when updating an advertisement.
   *
   * Use this query when you don't have the live advertisement identifier.
   */
  seekAnzHirerAdvertisementModificationProductsAlt?: Maybe<
    Array<SeekAnzAdProduct>
  >;
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
   * The hiring organization for the given `id`.
   *
   * This query accepts browser tokens that include the `query:organizations` scope.
   */
  hiringOrganization?: Maybe<HiringOrganization>;
  /**
   * A hiring organization corresponding to the given SEEK ANZ advertiser ID.
   *
   * This query accepts browser tokens that include the `query:organizations` scope.
   */
  seekAnzAdvertiser?: Maybe<HiringOrganization>;
  /** A page of advertisement brandings associated with the specified `hirerId`. */
  advertisementBrandings: AdvertisementBrandingsConnection;
  /** The advertisement branding for the given `id`. */
  advertisementBranding?: Maybe<AdvertisementBranding>;
  /** A position opening with the given `id`. */
  positionOpening?: Maybe<PositionOpening>;
  /** A position profile with its position opening, given the position profile `id`. */
  positionOpeningWithPositionProfile?: Maybe<PositionOpening>;
  /** A position profile with the given `id`. */
  positionProfile?: Maybe<PositionProfile>;
  /** A page of position openings for the given `hirerId`. */
  positionOpenings: PositionOpeningConnection;
  /**
   * A candidate with the given `applicationProfileId` with only that
   * profile included.
   *
   * This will include the candidate's personal details along with the
   * profile they've elected to represent them for this application.
   * @deprecated Use `candidateProfile` and select the `candidate` field.
   */
  candidateWithApplicationProfile?: Maybe<Candidate>;
  /** The `CandidateProfile` for the given `id`. */
  candidateProfile?: Maybe<CandidateProfile>;
  /**
   * The candidate for the given `id`.
   *
   * This will include the candidate's personal details along with all
   * application profiles for a single hirer.
   */
  candidate?: Maybe<Candidate>;
  /**
   * A page of webhook attempts matching the specified criteria generated by a selected subscription.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttemptsForSubscription: WebhookAttemptsConnection;
  /**
   * A page of webhook attempts matching the specified criteria generated by a selected event.
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
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known subscription if no pagination arguments are provided.
   */
  webhookSubscriptions: WebhookSubscriptionsConnection;
  /** The event for the given `id`. */
  event?: Maybe<Event>;
  /**
   * A page of events matching the specified criteria.
   *
   * The result list is returned in ascending stream date & time order.
   * It starts from the earliest known event if no pagination arguments are provided.
   */
  events: EventsConnection;
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryApplicationQuestionnaireArgs {
  id: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryAdvertisementCreationProductsArgs {
  hirerId: Scalars['String'];
  draftAdvertisement: AdProductAdvertisementDraftInput;
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryAdvertisementModificationProductsArgs {
  hirerId: Scalars['String'];
  advertisement: AdProductAdvertisementInput;
  draftAdvertisement: AdProductAdvertisementDraftInput;
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QuerySeekAnzHirerAdvertisementCreationProductsArgs {
  hirerId: Scalars['String'];
  draftAdvertisement: SeekAnzAdProductAdvertisementDraftInput;
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QuerySeekAnzHirerAdvertisementModificationProductsArgs {
  hirerId: Scalars['String'];
  advertisementId: Scalars['String'];
  draftAdvertisement: SeekAnzAdProductAdvertisementDraftInput;
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QuerySeekAnzHirerAdvertisementModificationProductsAltArgs {
  hirerId: Scalars['String'];
  advertisement: SeekAnzAdProductAdvertisementInput;
  draftAdvertisement: SeekAnzAdProductAdvertisementDraftInput;
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryJobCategoryArgs {
  id: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryJobCategoriesArgs {
  schemeId: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryJobCategorySuggestionsArgs {
  positionProfile: JobCategorySuggestionPositionProfileInput;
  schemeId: Scalars['String'];
  hirerId?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryLocationArgs {
  id: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryLocationSuggestionsArgs {
  usageTypeCode: Scalars['String'];
  schemeId: Scalars['String'];
  hirerId?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryNearestLocationsArgs {
  schemeId: Scalars['String'];
  geoLocation: GeoLocationInput;
  first?: Maybe<Scalars['Int']>;
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryHiringOrganizationArgs {
  id: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QuerySeekAnzAdvertiserArgs {
  id: Scalars['Int'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryAdvertisementBrandingsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  hirerId: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryAdvertisementBrandingArgs {
  id: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryPositionOpeningArgs {
  id: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryPositionOpeningWithPositionProfileArgs {
  id: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryPositionProfileArgs {
  id: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryPositionOpeningsArgs {
  hirerId: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  filter?: Maybe<PositionOpeningsFilterInput>;
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryCandidateWithApplicationProfileArgs {
  applicationProfileId: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryCandidateProfileArgs {
  id: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryCandidateArgs {
  id: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryWebhookAttemptsForSubscriptionArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookAttemptsFilterInput>;
  subscriptionId: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryWebhookAttemptsForEventArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookAttemptsFilterInput>;
  eventId: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryWebhookSubscriptionArgs {
  id: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryWebhookSubscriptionsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookSubscriptionsFilterInput>;
  schemeId: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryEventArgs {
  id: Scalars['String'];
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryEventsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<EventsFilterInput>;
  schemeId: Scalars['String'];
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface Mutation {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  /**
   * Creates a new questionnaire.
   *
   * This mutation accepts browser tokens that include the `mutate:questionnaires` scope.
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
  updatePositionOpeningPersonContacts?: Maybe<
    UpdatePositionOpeningPersonContactsPayload
  >;
  /**
   * Update the status of a position opening.
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
  /** Creates a new position profile for an opening and posts it. */
  postPositionProfileForOpening: PostPositionProfileForOpeningPayload;
  /**
   * Updates an existing posted position profile.
   *
   * The position profile's existing fields will be replaced with the provided input fields.
   * This will update the position's live job ad under its current URL.
   */
  updatePostedPositionProfile?: Maybe<UpdatePostedPositionProfilePayload>;
  /**
   * Closes an existing posted position profile.
   *
   * The job ad will be removed from the job board and no refund will be issued.
   * The `PositionProfile` and its associated candidate applications will be available for 6 months after its close date.
   */
  closePostedPositionProfile?: Maybe<ClosePostedPositionProfilePayload>;
  /** Posts a live job ad for a new position. */
  postPosition: PostPositionPayload;
  /** Creates a new unposted position profile for an opening. */
  createUnpostedPositionProfileForOpening: CreateUnpostedPositionProfileForOpeningPayload;
  /** Updates an existing unposted position profile. */
  updateUnpostedPositionProfile?: Maybe<UpdateUnpostedPositionProfilePayload>;
  /** Deletes an unposted position profile. */
  deleteUnpostedPositionProfile?: Maybe<DeleteUnpostedPositionProfilePayload>;
  /** Creates a new webhook subscription. */
  createWebhookSubscription: CreateWebhookSubscriptionPayload;
  /**
   * Updates an existing webhook subscription's delivery configuration.
   *
   * This modifies fields related to the URL, payload & signature of an existing webhook subscription.
   * Changes may take up to half an hour to take effect.
   *
   * The fields that determine which events are to be delivered are immutable.
   * A new webhook subscription should be created for such cases.
   */
  updateWebhookSubscriptionDeliveryConfiguration?: Maybe<
    UpdateWebhookSubscriptionDeliveryConfigurationPayload
  >;
  /** Deletes an existing webhook subscription. */
  deleteWebhookSubscription?: Maybe<DeleteWebhookSubscriptionPayload>;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCreateApplicationQuestionnaireArgs {
  input: CreateApplicationQuestionnaireInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCreatePositionOpeningArgs {
  input: CreatePositionOpeningInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationUpdatePositionOpeningPersonContactsArgs {
  input: UpdatePositionOpeningPersonContactsInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationUpdatePositionOpeningStatusArgs {
  input: UpdatePositionOpeningStatusInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationDeletePositionOpeningArgs {
  input: DeletePositionOpeningInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationPostPositionProfileForOpeningArgs {
  input: PostPositionProfileForOpeningInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationUpdatePostedPositionProfileArgs {
  input: UpdatePostedPositionProfileInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationClosePostedPositionProfileArgs {
  input: ClosePostedPositionProfileInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationPostPositionArgs {
  input: PostPositionInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCreateUnpostedPositionProfileForOpeningArgs {
  input: CreateUnpostedPositionProfileForOpeningInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationUpdateUnpostedPositionProfileArgs {
  input: UpdateUnpostedPositionProfileInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationDeleteUnpostedPositionProfileArgs {
  input: DeleteUnpostedPositionProfileInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCreateWebhookSubscriptionArgs {
  input: CreateWebhookSubscriptionInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationUpdateWebhookSubscriptionDeliveryConfigurationArgs {
  input: UpdateWebhookSubscriptionDeliveryConfigurationInput;
}

/** The schema's entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationDeleteWebhookSubscriptionArgs {
  input: DeleteWebhookSubscriptionInput;
}

/** An address of a human-accessible web page. */
export interface WebUrl {
  __typename?: 'WebUrl';
  /** The URL of the web page. */
  url: Scalars['String'];
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
}

/** Communication channels for a person. */
export interface CommunicationInput {
  /**
   * An array of phone numbers for the person.
   *
   * The phone numbers are ordered in descending preference.
   */
  phone: Array<PhoneInput>;
  /**
   * An array of email addresses for the person.
   *
   * The email addresses are ordered in descending preference.
   */
  email: Array<EmailInput>;
}

/** An address of a human-accessible web page. */
export interface WebUrlInput {
  /** The URL of the web page. */
  url: Scalars['String'];
}

/** An opaque identifier for GraphQL objects. */
export interface ObjectIdentifier {
  __typename?: 'ObjectIdentifier';
  /** The identifier itself. */
  value: Scalars['String'];
}

/**
 * A monetary amount expressed as an integer in a specified minor currency unit.
 *
 * This is used to avoid floating point rounding errors when expressing prices & funds.
 */
export interface Money {
  __typename?: 'Money';
  /**
   * The three-letter ISO 4217 currency code, in uppercase.
   *
   * This must be a supported currency. Currently supported codes are: `AUD`
   * and `NZD`. Additional codes may be added in the future.
   */
  currencyCode: Scalars['String'];
  /**
   * A positive integer in the minor currency unit for the ISO currency code.
   *
   * This is the number of cents in dollar-denominated currencies e.g. 1000
   * cents for $10.00.
   */
  amount: Scalars['Int'];
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

/**
 * A set of questions presented to a candidate during an application.
 *
 * This can be associated with one or more `PositionProfile`s when they are created.
 */
export interface ApplicationQuestionnaire {
  __typename?: 'ApplicationQuestionnaire';
  /** An opaque identifier for the questionnaire. */
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
  /** An opaque identifier for the component. */
  id: ObjectIdentifier;
  /**
   * The type of the component. Currently, this can be:
   *
   * - "Question" which corresponds to the `ApplicationQuestion` type.
   * - "PrivacyConsent" which corresponds to the `ApplicationPrivacyConsent` type.
   */
  componentTypeCode: Scalars['String'];
  /**
   * A partner provided unique reference ID to the component.
   *
   * This can be used to correlate the component with the submission.
   */
  value?: Maybe<Scalars['String']>;
}

/**
 * A question component of an `ApplicationQuestionnaire`.
 *
 * This consists of label text displayed to a user and an input for them to select a response.
 */
export interface ApplicationQuestion extends ApplicationQuestionnaireComponent {
  __typename?: 'ApplicationQuestion';
  /** An opaque identifier for the question. */
  id: ObjectIdentifier;
  /**
   * The type of the component.
   *
   * This is always "Question".
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
   * The three possible values of this are:
   *
   * - "SingleSelect" for choosing a single response from `responseChoice`.
   * - "MultiSelect" for choosing one or more responses from `responseChoice`.
   * - "FreeText" for a free text response.
   */
  responseTypeCode: Scalars['String'];
  /**
   * The collection of possible responses.
   *
   * For "SingleSelect" and "MultiSelect" this must contain at least one element.
   */
  responseChoice?: Maybe<Array<ApplicationQuestionChoice>>;
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
  /** An opaque identifier for the question. */
  id: ObjectIdentifier;
  /**
   * The type of the component.
   *
   * This is always "PrivacyConsent".
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
   * This is optional and will default to 'Do you agree to the privacy policy?'
   */
  descriptionHtml?: Maybe<Scalars['String']>;
}

/** A possible response to an `ApplicationQuestion`. */
export interface ApplicationQuestionChoice {
  __typename?: 'ApplicationQuestionChoice';
  /** An opaque identifier for the question choice. */
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
   * Indicates if this choice is preferred when scoring the answers.
   *
   * This is not displayed to the candidate.
   */
  preferredIndicator: Scalars['Boolean'];
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
   * The type of the component. Currently, this can be:
   *
   * - "Question" which corresponds to the `ApplicationQuestion` type.
   * - "PrivacyConsent" which corresponds to the `ApplicationPrivacyConsent` type.
   */
  componentTypeCode: Scalars['String'];
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

/** A candidate's response to a question in the questionnaire. */
export interface ApplicationQuestionResponse
  extends ApplicationQuestionnaireComponentResponse {
  __typename?: 'ApplicationQuestionResponse';
  /** The question this is responding to. */
  component: ApplicationQuestion;
  /**
   * The type of the component.
   *
   * This is always "Question".
   */
  componentTypeCode: Scalars['String'];
  /**
   * The answers provided by the candidate.
   *
   * For "SingleSelect" and "FreeText" this will be a single element array.
   */
  answers: Array<ApplicationQuestionAnswer>;
  /**
   * How well the candidate answered the question against the hirer's preferences.
   *
   * Score is calculated based off the `responseTypeCode`:
   * - For a `SingleSelect` question the score will be either 1 or 0 based off whether or not the candidate selected a preferred answer.
   * - For a `MultiSelect` question the score will be between 0 and 1 as a floating point. For example, if the candidate selected half of the preferred answers, the score would be 0.5.
   * - For a `FreeText` the score will be null.
   */
  score?: Maybe<Scalars['Float']>;
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
   * This is always "PrivacyConsent".
   */
  componentTypeCode: Scalars['String'];
  /** This indicates whether or not the candidate agrees to the provided privacy policy. */
  consentGivenIndicator: Scalars['Boolean'];
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
   * This is always "PrivacyConsent".
   */
  componentTypeCode: Scalars['String'];
  /**
   * A partner provided unique reference ID to the consent component.
   *
   * This can be used to correlate the consent component with the submitted response.
   */
  value?: Maybe<Scalars['String']>;
  /** The URL of the privacy policy to show to the candidate. */
  privacyPolicyUrl: WebUrlInput;
  /**
   * The HTML snippet to prompt the candidate for consent.
   *
   * Unsupported tags will be silently stripped when creating a questionnaire.
   *
   * This is optional and will default to 'Do you agree to the privacy policy?'
   */
  descriptionHtml?: Maybe<Scalars['String']>;
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
   * This is always "Question".
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
   * The three possible values of this are:
   *
   * - "SingleSelect" for choosing a single response from `responseChoice`.
   * - "MultiSelect" for choosing one or more responses from `responseChoice`.
   * - "FreeText" for a free text response.
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
   * For "SingleSelect" and "MultiSelect" this must contain at least one element.
   */
  responseChoice?: Maybe<Array<ApplicationQuestionChoiceInput>>;
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
   * Indicates if this choice is preferred when scoring the answers.
   *
   * This is not displayed to the candidate.
   */
  preferredIndicator: Scalars['Boolean'];
}

/** A component of the questionnaire to be created. */
export interface ApplicationQuestionnaireComponentInput {
  /**
   * The type of the component. Currently, this can be:
   *
   * - "Question" which corresponds to the `question` property.
   * - "PrivacyConsent" which corresponds to the `privacyConsent` property.
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

/** The details of the questionnaire to be created. */
export interface CreateApplicationQuestionnaireApplicationQuestionnaireInput {
  /**
   * The identifier for the hirer that will own the questionnaire.
   *
   * Hirers can only associate position profiles with questionnaires they own.
   */
  hirerId: Scalars['String'];
  /** The array of components in the order they are presented to the candidate. */
  components: Array<ApplicationQuestionnaireComponentInput>;
}

/** The input parameter for the `createApplicationQuestionnaire` mutation. */
export interface CreateApplicationQuestionnaireInput {
  /** The details of the questionnaire to be created. */
  applicationQuestionnaire: CreateApplicationQuestionnaireApplicationQuestionnaireInput;
}

/** The output parameter for the `createApplicationQuestionnaire` mutation. */
export interface CreateApplicationQuestionnairePayload {
  __typename?: 'CreateApplicationQuestionnairePayload';
  /** The details of the created questionnaire. */
  applicationQuestionnaire: ApplicationQuestionnaire;
}

/** The types of ads which can be placed. */
export enum AdvertisementType {
  /** A standard ad. */
  Classic = 'CLASSIC',
  /** Ad with branding. */
  Standout = 'STANDOUT',
  /** Featured ad */
  Premium = 'PREMIUM',
}

export interface AdProduct {
  __typename?: 'AdProduct';
  /** The type of the ad product. */
  advertisementType: AdvertisementType;
  /** The name of the ad product. */
  name: Scalars['String'];
  /** The description of the ad product. */
  description: Scalars['String'];
  /** The price component of the ad product. */
  price: AdProductPrice;
  /** Whether the ad product is enabled. */
  enabled: Scalars['Boolean'];
  /** How the ad product would be paid. */
  checkoutEstimate: AdProductCheckoutEstimate;
  /** Disclosures related to the ad product. */
  disclosures: Array<Disclosure>;
  /** Information messages */
  messages: Array<Scalars['String']>;
}

export interface AdProductPrice {
  __typename?: 'AdProductPrice';
  /** The product price without tax */
  amountExcludingTax?: Maybe<Money>;
  /** Descriptive summary of the Product Price */
  summary: Scalars['String'];
  /** Indicates whether the price can be shown to the hirer */
  canBeShownToHirer: Scalars['Boolean'];
  /** Specifies whether taxes will be added when purchased. */
  taxable: Scalars['Boolean'];
}

export interface AdProductCheckoutEstimate {
  __typename?: 'AdProductCheckoutEstimate';
  /** The amount left to be paid. */
  paymentDueExcludingTax?: Maybe<Money>;
  /** Checkout estimate summary */
  summary: Scalars['String'];
  /** Contract component of the checkout estimate */
  contractConsumption?: Maybe<AdProductContractConsumption>;
}

export interface AdProductContractConsumption {
  __typename?: 'AdProductContractConsumption';
  /** Summary of contract consumption */
  summary: Scalars['String'];
  /** Type of contract consumption. */
  type: AdProductContractConsumptionType;
}

export interface AdProductAdvertisementInput {
  /** The type of the ad product. Classic, StandOut or Premium */
  type: AdvertisementType;
  /** The advertisement identifier. */
  id?: Maybe<Scalars['String']>;
  /** The hirer's job reference */
  hirerJobReference?: Maybe<Scalars['String']>;
  /** The position title */
  positionTitle: Scalars['String'];
  /** The job category identifier */
  jobCategoryId: Scalars['String'];
  /** The position location identifier */
  positionLocationId: Scalars['String'];
}

export interface AdProductAdvertisementDraftInput {
  /** The type of the ad product. Classic, StandOut or Premium */
  type?: Maybe<AdvertisementType>;
  /** The advertisement identifier. */
  id?: Maybe<Scalars['String']>;
  /** The hirer's job reference */
  hirerJobReference?: Maybe<Scalars['String']>;
  /** The position title */
  positionTitle?: Maybe<Scalars['String']>;
  /** The job category identifier */
  jobCategoryId?: Maybe<Scalars['String']>;
  /** The position location identifer */
  positionLocationId?: Maybe<Scalars['String']>;
}

export enum AdProductContractConsumptionType {
  /** A contract will be consumed of the same ad type as the product. */
  SameAdtype = 'SAME_ADTYPE',
  /** A contract will be consumed of a different ad type than the product. */
  OtherAdtype = 'OTHER_ADTYPE',
  /** A contract will be consumed of the same ad type as the product and an invoice will be generated. */
  SameAdtypePlusInvoice = 'SAME_ADTYPE_PLUS_INVOICE',
}

/** A disclosure shown to the hirer for the current ad product. */
export interface Disclosure {
  __typename?: 'Disclosure';
  /** The type of the disclosure message. */
  type: DisclosureType;
  /** The content of the disclosure message. */
  message: Scalars['String'];
}

/** The type of disclosure message. */
export enum DisclosureType {
  /** A disclosure relating to a pricing error. */
  PricingError = 'PRICING_ERROR',
  /** A disclosure relating to an impact on premium ad performance. */
  PremiumPerformanceChange = 'PREMIUM_PERFORMANCE_CHANGE',
  /** A disclosure relating to a price increase in update mode for SEEK contracts. */
  UpdatePricingIncrease = 'UPDATE_PRICING_INCREASE',
}

export interface SeekAnzAdProduct {
  __typename?: 'SeekAnzAdProduct';
  /**
   * The type of the ad product.
   *
   * Currently, three codes are defined:
   * - `Classic` indicates a Classic ad.
   * - `StandOut` indicates a StandOut ad.
   * - `Premium` indicates a Premium ad.
   */
  advertisementTypeCode: Scalars['String'];
  /** The ad product name. */
  name: Scalars['String'];
  /** The description of the ad product. */
  description: Scalars['String'];
  /** The price component of the ad product. */
  price: SeekAnzAdProductPrice;
  /** Indicates whether the ad product is enabled. */
  enabledIndicator: Scalars['Boolean'];
  /** How the ad product would be paid. */
  checkoutEstimate: SeekAnzAdProductCheckoutEstimate;
  /** Messages that may be shown to hirer. */
  messages: Array<SeekAnzAdProductMessage>;
}

export interface SeekAnzAdProductPrice {
  __typename?: 'SeekAnzAdProductPrice';
  /** The product price without tax */
  amountExcludingTax?: Maybe<CurrencyMinorUnit>;
  /** Descriptive summary of the Product Price */
  summary: Scalars['String'];
  /** Indicates whether the price can be shown to the hirer */
  visibleForHirerIndicator: Scalars['Boolean'];
  /** Indicates whether taxes will be added when purchased. */
  taxedIndicator: Scalars['Boolean'];
}

export interface SeekAnzAdProductCheckoutEstimate {
  __typename?: 'SeekAnzAdProductCheckoutEstimate';
  /** The amount left to be paid. */
  paymentDueExcludingTax?: Maybe<CurrencyMinorUnit>;
  /** Checkout estimate summary */
  summary: Scalars['String'];
  /** Contract component of the checkout estimate */
  contractConsumption?: Maybe<SeekAnzAdProductContractConsumption>;
}

export interface SeekAnzAdProductContractConsumption {
  __typename?: 'SeekAnzAdProductContractConsumption';
  /** Summary of contract consumption */
  summary: Scalars['String'];
  /**
   * Type of contract consumption.
   *
   * Currently, three codes are defined:
   * - `SameAdType` indicates payment due will be consumed from a contract of the same ad type as this product.
   * - `OtherAdType` indicates payment due will be consumed from a contract of a different ad type to this product.
   * - `SameAdTypePlusInvoice` indicates payment due will be consumed from a contract of the same ad type as this product and an invoice will be generated.
   */
  typeCode: Scalars['String'];
}

export interface SeekAnzAdProductAdvertisementInput {
  /**
   * The type of ad product.
   *
   * Currently, three codes are defined:
   * - `Classic` indicates a Classic ad.
   * - `StandOut` indicates a StandOut ad.
   * - `Premium` indicates a Premium ad.
   */
  typeCode: Scalars['String'];
  /** The advertisement identifier. */
  id?: Maybe<Scalars['String']>;
  /** The hirer's job reference */
  hirerJobReference?: Maybe<Scalars['String']>;
  /** The position title */
  positionTitle: Scalars['String'];
  /** The job category identifier */
  jobCategoryId: Scalars['String'];
  /** The position location identifier */
  positionLocationId: Scalars['String'];
}

export interface SeekAnzAdProductAdvertisementDraftInput {
  /**
   * The type of ad product.
   *
   * Currently, three codes are defined:
   * - `Classic` indicates a Classic ad.
   * - `StandOut` indicates a StandOut ad.
   * - `Premium` indicates a Premium ad.
   */
  typeCode?: Maybe<Scalars['String']>;
  /** The advertisement identifier. */
  id?: Maybe<Scalars['String']>;
  /** The hirer's job reference */
  hirerJobReference?: Maybe<Scalars['String']>;
  /** The position title */
  positionTitle?: Maybe<Scalars['String']>;
  /** The job category identifier */
  jobCategoryId?: Maybe<Scalars['String']>;
  /** The position location identifer */
  positionLocationId?: Maybe<Scalars['String']>;
}

/** A message shown to the hirer for the current ad product. */
export interface SeekAnzAdProductMessage {
  __typename?: 'SeekAnzAdProductMessage';
  /**
   * The severity of the message.
   *
   * Currently, two codes are defined:
   * - `Informational` indicates a message with helpful information for a hirer.
   * - `Critical` indicates a message with critical information for a hirer.
   */
  severityCode: Scalars['String'];
  /** The content of the message. */
  content: Scalars['String'];
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

/** A reference to a person associated with an object. */
export interface SpecifiedPerson {
  __typename?: 'SpecifiedPerson';
  /** The person's name */
  name?: Maybe<PersonName>;
  /** Methods of communication with the person. */
  communication: Communication;
  /**
   * The role of the person.
   *
   * Currently, two codes are defined:
   * - `Recruiter` indicates a person recruiting for the position.
   * - `HiringManager` indicates an employee that requested the position to be filled.
   */
  roleCode?: Maybe<Scalars['String']>;
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

/** A reference to a person associated with an object. */
export interface SpecifiedPersonInput {
  /** The person's name. */
  name?: Maybe<PersonNameInput>;
  /** Methods of communication with the person. */
  communication: CommunicationInput;
  /**
   * The role of the person.
   *
   * Currently, two codes are defined:
   * - `Recruiter` indicates a person recruiting for the position.
   * - `HiringManager` indicates an employee that requested the position to be filled.
   */
  roleCode?: Maybe<Scalars['String']>;
}

/** A method of applying to a position. */
export interface ApplicationMethodInput {
  /**
   * A URL of an external application form.
   *
   * When this is provided, SEEK's native apply form will be disabled and the candidate will be redirected to the supplied URL.
   */
  applicationUri: WebUrlInput;
}

/** The input parameter for the `closePostedPositionProfile` mutation. */
export interface ClosePostedPositionProfileInput {
  /** The details of the position profile to be closed. */
  positionProfile: ClosePostedPositionProfilePositionProfileInput;
}

/** The details of the position profile to be closed. */
export interface ClosePostedPositionProfilePositionProfileInput {
  /** The unique identifier for the posted position profile. */
  profileId: Scalars['String'];
}

/** A collection of information about where and how to post a job ad. */
export interface CreatePostingInstructionInput {
  /**
   * A SEEK ANZ advertisement type code.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic advertisement.
   * - `StandOut` indicates a StandOut advertisement.
   * - `Premium` indicates a Premium advertisement.
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
   *   If the end date is not specified it will default to the maximum period of 30 days.
   */
  end?: Maybe<Scalars['DateTime']>;
  /**
   * An identifier to ensure that multiple ads are not created on retries.
   *
   * The identifier should be unique in the partner system for each position profile created.
   * The same identifier must be provided when retrying after create failures.
   */
  idempotencyId: Scalars['String'];
  /**
   * An array of methods for applying to the position.
   *
   * If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
   * Native applications will raise a `CandidateApplicationCreated` event that points to a `CandidateProfile` object.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field is limited to a single element. Requests with more than 1 element will fail.
   */
  applicationMethods?: Maybe<Array<ApplicationMethodInput>>;
  /** The identifier of the branding to apply to the posted job ad. */
  brandingId?: Maybe<Scalars['String']>;
}

/** A formatted description of the position profile. */
export interface PositionFormattedDescriptionInput {
  /**
   * The description type.
   *
   * Currently, four description identifiers are defined:
   * 1. `AdvertisementDetails` is the detailed description of the position that appears on the job ad.
   * 2. `ContactDetails` is a free-text description of a contact person for the position.
   *    The use of this field is discouraged in SEEK ANZ but it is still used by certain advertisement templates.
   * 3. `SearchBulletPoint` is a highlight or selling point of the position that appears in search results.
   *    SEEK ANZ allows up to three search bullet points for Premium or StandOut ad products.
   * 4. `SearchSummary` is a short description that appears in search results.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires `AdvertisementDetails` and `SearchSummary` to be included and non-empty.
   */
  descriptionId: Scalars['String'];
  /** The HTML content of the description. */
  content: Scalars['String'];
}

/** The input parameter for the `createPositionOpening` mutation. */
export interface CreatePositionOpeningInput {
  /** The details of the position opening to be created. */
  positionOpening: CreatePositionOpeningPositionOpeningInput;
}

/** The details of the position opening to be created. */
export interface CreatePositionOpeningPositionOpeningInput {
  /** The party that owns the position opening. */
  postingRequester: PostingRequesterInput;
  /**
   * The status of the position opening.
   *
   * Defaults to `Active` if no value is provided.
   *
   * Currently three codes are defined:
   * - `Incomplete` indicates the position opening is in draft.
   * - `Active` indicates the position opening is open.
   * - `Closed` indicates the position opening has been closed.
   */
  statusCode?: Maybe<Scalars['String']>;
}

/** The input parameter for the `updatePositionOpeningPersonContacts` mutation. */
export interface UpdatePositionOpeningPersonContactsInput {
  /** The details of the position opening to be updated. */
  positionOpening: UpdatePositionOpeningPersonContactsPositionOpeningInput;
}

/** The details of the position opening to be updated. */
export interface UpdatePositionOpeningPersonContactsPositionOpeningInput {
  /** The unique identifier for the position opening to update. */
  documentId: Scalars['String'];
  /** Specific contact people for the position opening at the party. */
  personContacts: Array<SpecifiedPersonInput>;
}

/** The input parameter for the `updatePositionOpeningStatus` mutation. */
export interface UpdatePositionOpeningStatusInput {
  /** The details of the position opening to be updated. */
  positionOpening: UpdatePositionOpeningStatusPositionOpeningInput;
}

/** The details of the position opening to have its status updated. */
export interface UpdatePositionOpeningStatusPositionOpeningInput {
  /** The unique identifier for the position opening to update. */
  documentId: Scalars['String'];
  /**
   * The status of the position opening.
   *
   * Currently three codes are defined:
   * - `Incomplete` indicates the position opening is in a draft state.
   * - `Active` indicates the position opening is open.
   * - `Closed` indicates the position opening has been closed.
   */
  statusCode: Scalars['String'];
}

/** The input parameter for the `deletePositionOpening` mutation. */
export interface DeletePositionOpeningInput {
  /** The details of the position opening to be deleted. */
  positionOpening: DeletePositionOpeningPositionOpeningInput;
}

/** The details of the position opening to be deleted. */
export interface DeletePositionOpeningPositionOpeningInput {
  /** The unique identifier for the position opening. */
  documentId: Scalars['String'];
}

/**
 * The party that owns the position opening.
 *
 * This may be different from the hiring organization if the position opening is created by a recruitment agency.
 */
export interface PostingRequesterInput {
  /** An opaque identifier for hirer or agency owning the position opening. */
  id: Scalars['String'];
  /**
   * The role of the owner of the position opening.
   *
   * Currently two codes are defined:
   * - `Agency` indicates a recruitment agency hiring on behalf of another company.
   * - `Company` indicates a company hiring on behalf of themselves.
   */
  roleCode: Scalars['String'];
  /** Specific contact people for the position opening at the party. */
  personContacts: Array<SpecifiedPersonInput>;
}

/** The information required to post a job ad for a newly created position. */
export interface PostPositionInput {
  /** The details of the position opening to be created. */
  positionOpening: CreatePositionOpeningPositionOpeningInput;
  /** A profile of a position opening. */
  positionProfile: PostPositionPositionProfileInput;
}

export interface PostPositionPositionProfileInput {
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /**
   * An array of identifiers for the organizations that have the position.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionOrganizations: Array<Scalars['String']>;
  /** An optional hirer-provided opaque job reference. */
  seekHirerJobReference?: Maybe<Scalars['String']>;
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
   * Currently, four work type codes are defined:
   *
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `Casual` indicates a casual position.
   *
   * Scheme requirements:
   *
   * - Required for the `seekAnz` scheme when `postingInstructions` are provided.
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
   * The identifier of the questionnaire with the set of questions to present to candidates during an application.
   *
   * The questionnaire responses will be available as `seekQuestionnaireSubmission` on the application's `CandidateProfile`.
   */
  seekApplicationQuestionnaireId?: Maybe<Scalars['String']>;
  /** The video to render within the advertisement. */
  seekVideo?: Maybe<SeekVideoInput>;
  /**
   * The instructions related to posting the job ad.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  postingInstructions: Array<CreatePostingInstructionInput>;
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

/**
 * A profile for posting a job ad against an existing position opening.
 *
 * This contains information of how a position opening is presented on a given channel or job board.
 */
export interface PostPositionProfileForOpeningPositionProfileInput {
  /** The identifier of the position opening that this position profile belongs to. */
  positionOpeningId: Scalars['String'];
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /**
   * An array of identifiers for the organizations that have the position.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionOrganizations: Array<Scalars['String']>;
  /** An optional hirer-provided opaque job reference. */
  seekHirerJobReference?: Maybe<Scalars['String']>;
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
   * Currently, four work type codes are defined:
   *
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `Casual` indicates a casual position.
   *
   * Scheme requirements:
   *
   * - Required for the `seekAnz` scheme when `postingInstructions` are provided.
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
   * The identifier of the questionnaire with the set of questions to present to candidates during an application.
   *
   * The questionnaire responses will be available as `seekQuestionnaireSubmission` on the application's `CandidateProfile`.
   */
  seekApplicationQuestionnaireId?: Maybe<Scalars['String']>;
  /** The video to render within the advertisement. */
  seekVideo?: Maybe<SeekVideoInput>;
  /**
   * The instructions related to posting the job ad.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  postingInstructions: Array<CreatePostingInstructionInput>;
}

/** The salary or compensation for a position. */
export interface RemunerationPackageInput {
  /**
   * A code classifying the primary method of payment for a position.
   *
   * Currently, four basis codes are defined:
   *
   * 1. `Hourly` employment is paid for the number of hours worked.
   * 2. `Salaried` employment is paid on an annual basis.
   * 3. `SalariedPlusCommission` employment is paid on an annual basis plus a results-based commission.
   * 4. `CommissionOnly` employment is paid exclusively a results-based commission.
   */
  basisCode: Scalars['String'];
  /**
   * An array of offered salary ranges.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme is limited to a single element containing the amount for the `basisCode`.
   */
  ranges: Array<RemunerationRangeInput>;
  /** Human readable descriptions of the remuneration package. */
  descriptions: Array<Scalars['String']>;
}

/** A salary or compensation range for a position. */
export interface RemunerationRangeInput {
  /** The minimum amount an organization is willing to pay for a position. */
  minimumAmount: RemunerationAmountInput;
  /**
   * The maximum amount an organization is willing to pay for a position.
   *
   * A `null` value indicates the organization has not specified an upper bound for the range.
   *
   * Scheme requirements:
   *
   * - Required for the `seekAnz` scheme when `postingInstructions` are provided.
   */
  maximumAmount?: Maybe<RemunerationAmountInput>;
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

/** A monetary amount of remuneration in a specified currency. */
export interface RemunerationAmountInput {
  /**
   * A non-negative float in the major currency unit for the ISO currency code.
   *
   * For example, this is the number of dollars in dollar-denominated currencies.
   */
  value: Scalars['Float'];
  /** The three-letter ISO 4217 currency code, in uppercase. */
  currency: Scalars['String'];
}

/** The input parameter for the `createUnpostedPositionProfile` mutation. */
export interface CreateUnpostedPositionProfileForOpeningInput {
  /** An unposted profile of a position opening to create. */
  positionProfile: CreateUnpostedPositionProfileForOpeningPositionProfileInput;
}

/** An unposted profile of a position opening to create. */
export interface CreateUnpostedPositionProfileForOpeningPositionProfileInput {
  /** The identifier of the position opening that this position profile belongs to. */
  positionOpeningId: Scalars['String'];
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /** An array of identifiers for the organizations that have the position. */
  positionOrganizations: Array<Scalars['String']>;
  /** An optional hirer-provided opaque job reference. */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /** An optional agency-provided opaque job reference. */
  seekAgencyJobReference?: Maybe<Scalars['String']>;
  /** An array of formatted position profile descriptions. */
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
  /** An array of `JobCategory` identifiers. */
  jobCategories: Array<Scalars['String']>;
  /** An array of `Location` identifiers. */
  positionLocation: Array<Scalars['String']>;
}

/** The input parameter for the `updateUnpostedPositionProfile` mutation. */
export interface UpdateUnpostedPositionProfileInput {
  /** An unposted profile of a position opening to update. */
  positionProfile: UpdateUnpostedPositionProfilePositionProfileInput;
}

/** An unposted profile of a position opening to update. */
export interface UpdateUnpostedPositionProfilePositionProfileInput {
  /** The identifier of the unposted position profile to update. */
  profileId: Scalars['String'];
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /** An array of identifiers for the organizations that have the position. */
  positionOrganizations: Array<Scalars['String']>;
  /** An optional hirer-provided opaque job reference. */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /** An optional agency-provided opaque job reference. */
  seekAgencyJobReference?: Maybe<Scalars['String']>;
  /** An array of formatted position profile descriptions. */
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
  /** An array of `JobCategory` identifiers. */
  jobCategories: Array<Scalars['String']>;
  /** An array of `Location` identifiers. */
  positionLocation: Array<Scalars['String']>;
}

/** The input parameter for the `deleteUnpostedPositionProfile` mutation. */
export interface DeleteUnpostedPositionProfileInput {
  /** The details of the unposted position profile to be deleted. */
  positionProfile: DeleteUnpostedPositionProfilePositionProfileInput;
}

/** The details of the unposted position profile to be deleted. */
export interface DeleteUnpostedPositionProfilePositionProfileInput {
  /** The unique identifier for the unposted position profile. */
  profileId: Scalars['String'];
}

/** The input parameter for the `updatePostedPositionProfile` mutation. */
export interface UpdatePostedPositionProfileInput {
  /** The values to replace on a posted position profile. */
  positionProfile: UpdatePostedPositionProfilePositionProfileInput;
}

/** The values to replace on a posted position profile. */
export interface UpdatePostedPositionProfilePositionProfileInput {
  /** The identifier of the posted position profile to update. */
  profileId: Scalars['String'];
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /**
   * An array of identifiers for the organizations that have the position.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionOrganizations: Array<Scalars['String']>;
  /** An optional hirer-provided opaque job reference. */
  seekHirerJobReference?: Maybe<Scalars['String']>;
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
   * Currently, four work type codes are defined:
   *
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `Casual` indicates a casual position.
   *
   * Scheme requirements:
   *
   * - Required for the `seekAnz` scheme when `postingInstructions` are provided.
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
   * The identifier of the questionnaire with the set of questions to present to candidates during an application.
   *
   * The questionnaire responses will be available as `seekQuestionnaireSubmission` on the application's `CandidateProfile`.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field is ignored.
   */
  seekApplicationQuestionnaireId?: Maybe<Scalars['String']>;
  /** The video to render within the advertisement. */
  seekVideo?: Maybe<SeekVideoInput>;
  /**
   * The instructions related to posting the job ad.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  postingInstructions: Array<UpdatePostingInstructionInput>;
}

/** A collection of information about where and how to post a job ad. */
export interface UpdatePostingInstructionInput {
  /**
   * A SEEK ANZ advertisement type code.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic advertisement.
   * - `StandOut` indicates a StandOut advertisement.
   * - `Premium` indicates a Premium advertisement.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field is required.
   * - For other schemes, set this to `null`.
   */
  seekAnzAdvertisementType?: Maybe<Scalars['String']>;
  /** The end date of the posting. */
  end?: Maybe<Scalars['DateTime']>;
  /**
   * An array of methods for applying to the position.
   *
   * If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
   * Native applications will raise a `CandidateApplicationCreated` event that points to a `CandidateProfile` object.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field is limited to a single element. Requests with more than 1 element will fail.
   */
  applicationMethods?: Maybe<Array<ApplicationMethodInput>>;
  /** The identifier of the branding to apply to the posted job ad. */
  brandingId?: Maybe<Scalars['String']>;
}

/** A collection of information about the video to display alongside advertisement details. */
export interface SeekVideoInput {
  /**
   * The URL of the video to display.
   *
   * Scheme requirements:
   *
   *  - The `seekAnz` scheme requires URLs to be YouTube embed URLs less than 255 characters e.g. `https://www.youtube.com/embed/aAgePQvHBQM`.
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

/**
 * The category of a job's occupation.
 *
 * This query accepts browser tokens that include the `query:ontologies` scope.
 */
export interface JobCategory {
  __typename?: 'JobCategory';
  /** An opaque identifier for the job category. */
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
  /** The job category information of the suggestion choice. */
  jobCategory: JobCategory;
  /**
   * A floating point value ranging from 0 (lowest) to 1 (highest)
   * that indicates confidence of the job category returned based on the suggestion input.
   */
  confidence: Scalars['Float'];
}

/** The input parameter for the `jobCategorySuggestions` query. */
export interface JobCategorySuggestionPositionProfileInput {
  /** The position title. */
  positionTitle: Scalars['String'];
  /** An array of location identifiers of the position. */
  positionLocation: Array<Scalars['String']>;
  /**
   * An array of identifiers for the organizations that have the position.
   *
   * Information such as the organization's domicile can be used to refine the returned suggestions.
   */
  positionOrganizations?: Maybe<Array<Scalars['String']>>;
  /**
   * The descriptions for the position profile.
   *
   * Currently, only the `AdvertisementDetails` description is used. Other
   * descriptions will be accepted but are ignored when determining the
   * relevance of suggestion.
   */
  positionFormattedDescriptions?: Maybe<
    Array<PositionFormattedDescriptionInput>
  >;
}

export interface Location {
  __typename?: 'Location';
  /** An opaque identifier of the location. */
  id: ObjectIdentifier;
  /** The parent location. */
  parent?: Maybe<Location>;
  /** An array of child locations. */
  children?: Maybe<Array<Location>>;
  /** The location name. */
  name: Scalars['String'];
  /** Contextual name of the location. */
  contextualName: Scalars['String'];
  /** The two-letter ISO 3166-1:2013 country code, in uppercase. */
  countryCode: Scalars['String'];
}

export interface LocationSuggestion {
  __typename?: 'LocationSuggestion';
  /** Location information of the choice. */
  location: Location;
}

/** A geographical coordinate. */
export interface GeoLocationInput {
  /** The latitude of the geographical location. */
  latitude: Scalars['Float'];
  /** The longitude of the geographical location. */
  longitude: Scalars['Float'];
}

/** An organization hiring for an open position. */
export interface HiringOrganization {
  __typename?: 'HiringOrganization';
  /** The opaque identifier of the hiring organization. */
  id: ObjectIdentifier;
  /** The name of the hiring organization. */
  name: Scalars['String'];
  /**
   * The legacy SEEK ANZ advertiser ID.
   *
   * This is a numeric identifier used by SEEK ANZ's legacy Job Posting & Application Export APIs.
   * For organizations in other schemes this will be `null`.
   */
  seekAnzAdvertiserId?: Maybe<Scalars['Int']>;
}

/**
 * Advertisement branding.
 *
 * This can be associated with one or more `PositionProfile`s when they are created.
 */
export interface AdvertisementBranding {
  __typename?: 'AdvertisementBranding';
  /** An opaque identifier for advertisement branding. */
  id: ObjectIdentifier;
  /** The advertisement branding name. */
  name: Scalars['String'];
  /** A list of images associated with the advertisement branding. */
  images: Array<AdvertisementBrandingImage>;
  /** The organization that has the advertisement branding. */
  hirer: HiringOrganization;
}

/** A visual representation of advertisement branding. */
export interface AdvertisementBrandingImage {
  __typename?: 'AdvertisementBrandingImage';
  /**
   * The type of advertisement branding image.
   *
   * Currently, only one code is defined:
   * - `OriginalLogo` indicates the original advertisement branding logo image from which other logo images are derived.
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

/** The output parameter for the `createPositionOpening` mutation. */
export interface CreatePositionOpeningPayload {
  __typename?: 'CreatePositionOpeningPayload';
  /** The details of the created position opening. */
  positionOpening: PositionOpening;
}

/** The output parameter for the `postPositionProfileForOpening` mutation. */
export interface PostPositionProfileForOpeningPayload {
  __typename?: 'PostPositionProfileForOpeningPayload';
  /** Attributes of the newly created position profile. */
  positionProfile: PostPositionProfileForOpeningPositionProfilePayload;
}

export interface PostPositionProfileForOpeningPositionProfilePayload {
  __typename?: 'PostPositionProfileForOpening_PositionProfilePayload';
  /** The identifier for the created position profile. */
  profileId: ObjectIdentifier;
}

/** The output parameter for the `postPosition` mutation. */
export interface PostPositionPayload {
  __typename?: 'PostPositionPayload';
  /** Attributes of the newly created position opening. */
  positionOpening: PostPositionPositionOpeningPayload;
  /** Attributes of the newly created position profile. */
  positionProfile: PostPositionPositionProfilePayload;
}

export interface PostPositionPositionOpeningPayload {
  __typename?: 'PostPosition_PositionOpeningPayload';
  /**
   * The identifier for the created position opening.
   *
   * Scheme restrictions:
   *
   * - The `seekAnz` scheme creates the position opening asynchronously.
   *   This identifier will initially reference an missing object;
   *   the object should be created within a few minutes.
   */
  documentId: ObjectIdentifier;
}

export interface PostPositionPositionProfilePayload {
  __typename?: 'PostPosition_PositionProfilePayload';
  /**
   * The identifier for the created position profile.
   *
   * Scheme restrictions:
   *
   * - The `seekAnz` scheme creates the position profile asynchronously.
   *   This identifier will initially reference an missing object;
   *   the object should be created within a few minutes.
   */
  profileId: ObjectIdentifier;
}

/** The output parameter for the `UpdatePositionOpeningStatus` mutation. */
export interface UpdatePositionOpeningStatusPayload {
  __typename?: 'UpdatePositionOpeningStatusPayload';
  /** The details of the updated position opening. */
  positionOpening: PositionOpening;
}

/** The output parameter for the `createUnpostedPositionProfileForOpening` mutation. */
export interface CreateUnpostedPositionProfileForOpeningPayload {
  __typename?: 'CreateUnpostedPositionProfileForOpeningPayload';
  /** Attributes of the newly created unposted position profile. */
  unpostedPositionProfile: PositionProfile;
}

/** The output parameter for the `updatePositionOpeningPersonContacts` mutation. */
export interface UpdatePositionOpeningPersonContactsPayload {
  __typename?: 'UpdatePositionOpeningPersonContactsPayload';
  /** The details of the updated position opening. */
  positionOpening: PositionOpening;
}

/** The output of the `updatePostedPositionProfile` mutation. */
export interface UpdatePostedPositionProfilePayload {
  __typename?: 'UpdatePostedPositionProfilePayload';
  /** The identifier of the updated posted position profile. */
  id: ObjectIdentifier;
}

/** The output of the `closePostedPositionProfile` mutation. */
export interface ClosePostedPositionProfilePayload {
  __typename?: 'ClosePostedPositionProfilePayload';
  /** The identifier of the closed posted position profile. */
  id: ObjectIdentifier;
}

/** The output parameter for the `updateUnpostedPositionProfile` mutation. */
export interface UpdateUnpostedPositionProfilePayload {
  __typename?: 'UpdateUnpostedPositionProfilePayload';
  /** Attributes of the unposted position profile. */
  unpostedPositionProfile: PositionProfile;
}

/** The output parameter for the `deletePositionOpening` mutation. */
export interface DeletePositionOpeningPayload {
  __typename?: 'DeletePositionOpeningPayload';
  /** The details of the deleted position opening. */
  positionOpening: PositionOpening;
}

/** The output parameter for the `deleteUnpostedPositionProfile` mutation. */
export interface DeleteUnpostedPositionProfilePayload {
  __typename?: 'DeleteUnpostedPositionProfilePayload';
  /** The details of the deleted unposted position profile. */
  unpostedPositionProfile: PositionProfile;
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
   * Currently three codes are defined:
   * - `Incomplete` indicates the position opening is in a draft state.
   * - `Active` indicates the position opening is open.
   * - `Closed` indicates the position opening has been closed.
   */
  statusCode: Scalars['String'];
  /** An opaque identifier for the position opening. */
  documentId: ObjectIdentifier;
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

/** The party that owns the position opening. */
export interface PostingRequester {
  __typename?: 'PostingRequester';
  /** An opaque identifier for hirer or agency owning the position opening. */
  id: ObjectIdentifier;
  /** The name of the party that owns the position opening. */
  name: Scalars['String'];
  /**
   * The legacy SEEK ANZ advertiser ID.
   *
   * This is a numeric identifier used by SEEK ANZ's legacy Job Posting & Application Export APIs.
   * For hirers or agencies in other schemes this will be `null`.
   */
  seekAnzAdvertiserId?: Maybe<Scalars['Int']>;
  /**
   * The role of the owner of the position opening.
   *
   * Currently two codes are defined:
   * - `Agency` indicates a recruitment agency hiring on behalf of another company.
   * - `Company` indicates a company hiring on behalf of themselves.
   */
  roleCode: Scalars['String'];
  /** Specific contact people for the position opening at the party. */
  personContacts: Array<SpecifiedPerson>;
}

/**
 * A profile of a position opening.
 *
 * This contains information of how a position opening is presented on a job board or as an internal requisition.
 */
export interface PositionProfile {
  __typename?: 'PositionProfile';
  /** An opaque identifier for the position profile. */
  profileId: ObjectIdentifier;
  /** The `PositionOpening` that this profile was created under. */
  positionOpening: PositionOpening;
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /** The organization which has the position. */
  positionOrganizations: Array<HiringOrganization>;
  /** An optional hirer-provided opaque job reference. */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /** An optional agency-provided opaque job reference. */
  seekAgencyJobReference?: Maybe<Scalars['String']>;
  /**
   * The public web URL of the posted job ad.
   *
   * This will be `null` for unposted position profiles.
   */
  positionUri?: Maybe<Scalars['String']>;
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescription>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * If the offered schedule isn't known this will be `null`.
   */
  positionScheduleTypeCodes?: Maybe<Array<Scalars['String']>>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackage;
  /**
   * A SEEK ANZ work type code.
   *
   * Four work type codes are defined:
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `Casual` indicates a casual position.
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
   * The questionnaire responses will be available as `seekQuestionnaireSubmission` on the application's `CandidateProfile`.
   */
  seekApplicationQuestionnaire?: Maybe<ApplicationQuestionnaire>;
  /** The video to render within the advertisement. */
  seekVideo?: Maybe<SeekVideo>;
  /** The instructions related to posting the job ad. */
  postingInstructions: Array<PostingInstruction>;
}

/**
 * A description type identifier.
 *
 * This specifies the meaning of the description and determines where it's
 * presented to the candidate.
 */
export interface PositionFormattedDescriptionIdentifier {
  __typename?: 'PositionFormattedDescriptionIdentifier';
  /**
   * The description type.
   *
   * Currently, three description identifiers are defined:
   * 1. `AdvertisementDetails` is the detailed description of the position that appears on the job ad.
   * 2. `SearchSummary` is a short description that appears in search results.
   * 3. `SearchBulletPoint` is a highlight or selling point of the position that appears in search results.
   *    SEEK ANZ allows up to three search bullet points for Premium or StandOut ad products.
   */
  value: Scalars['String'];
}

/** A formatted description of the position profile. */
export interface PositionFormattedDescription {
  __typename?: 'PositionFormattedDescription';
  /** The description type. */
  descriptionId: PositionFormattedDescriptionIdentifier;
  /** The HTML content of the description. */
  content: Scalars['String'];
}

/** The salary or compensation for a position. */
export interface RemunerationPackage {
  __typename?: 'RemunerationPackage';
  /**
   * A code classifying the primary method of payment for a position.
   *
   * Currently, four basis codes are defined:
   *
   * 1. `Hourly` employment is paid for the number of hours worked.
   * 2. `Salaried` employment is paid on an annual basis.
   * 3. `SalariedPlusCommission` employment is paid on an annual basis plus a results-based commission.
   * 4. `CommissionOnly` employment is paid exclusively a results-based commission.
   */
  basisCode: Scalars['String'];
  /**
   * An array of offered salary ranges.
   *
   * The scheme `seekAnz` will always have a single element containing the amount for the `basisCode`.
   */
  ranges: Array<RemunerationRange>;
  /** Human readable descriptions of the remuneration package. */
  descriptions: Array<Scalars['String']>;
}

/** A salary or compensation range for a position. */
export interface RemunerationRange {
  __typename?: 'RemunerationRange';
  /** The minimum amount an organization is willing to pay for a position. */
  minimumAmount: RemunerationAmount;
  /**
   * The maximum amount an organization is willing to pay for a position.
   *
   * A 'null' value indicates the organization has not specified an upper bound for the range.
   */
  maximumAmount?: Maybe<RemunerationAmount>;
  /**
   * The interval the remuneration amounts are calculated over.
   *
   * Currently two interval codes are defined:
   *
   * - `Hourly` is used to express hourly rates.
   * - `Year` is used to express annual salaries or commissions.
   */
  intervalCode: Scalars['String'];
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

/** A collection of information about where and how to post a job ad. */
export interface PostingInstruction {
  __typename?: 'PostingInstruction';
  /** The start date of the posting. */
  start: Scalars['DateTime'];
  /** The end date of the posting. */
  end: Scalars['DateTime'];
  /**
   * An array of methods for applying to the position.
   *
   * If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
   * Native applications will raise a `CandidateApplicationCreated` event that points to a `CandidateProfile` object.
   */
  applicationMethods: Array<ApplicationMethod>;
  /**
   * The identifier of the branding applied to the posted job ad.
   *
   * This is included for HR-JSON compatibility; GraphQL users should use the `branding` nested object instead.
   */
  brandingId?: Maybe<Scalars['String']>;
  /** The branding applied to the posted job ad. */
  branding?: Maybe<AdvertisementBranding>;
}

/** A method of applying to a position. */
export interface ApplicationMethod {
  __typename?: 'ApplicationMethod';
  /**
   * A URL of an external application form.
   *
   * When this is provided, SEEK's native apply form will be disabled and the candidate will be redirected to the supplied URL.
   */
  applicationUri: WebUrl;
}

/** A collection of information about the video to display alongside advertisement details. */
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

/**
 * The criteria to filter position openings by.
 *
 * These are `PositionOpening`-specific extensions on top of the standard pagination arguments `after` and `first`.
 */
export interface PositionOpeningsFilterInput {
  /**
   * Optionally filter results to only include position openings with the specified status code.
   *
   * Currently three codes are defined:
   * - `Incomplete` indicates the position opening is in a draft state.
   * - `Active` indicates the position opening is open.
   * - `Closed` indicates the position opening has been closed.
   */
  statusCode?: Maybe<Scalars['String']>;
}

/** Information about a person not specific to a candidate profile. */
export interface CandidatePerson {
  __typename?: 'CandidatePerson';
  /** The person's name. */
  name: PersonName;
  /** Methods of communication with the person. */
  communication: Communication;
}

/**
 * A person who applied for a position at a company.
 *
 * If the same person applies to multiple hirers they will have distinct
 * `Candidate` objects created.
 */
export interface Candidate {
  __typename?: 'Candidate';
  /**
   * An opaque identifier for the candidate
   *
   * This is unique for a given hirer & person.
   */
  documentId: ObjectIdentifier;
  /**
   * Information to identify the person, including their name and methods of
   * communicating with the person.
   */
  person: CandidatePerson;
  /**
   * The list of profiles associated with with the candidate.
   * Each submitted application for a position will have an associated profile.
   */
  profiles: Array<CandidateProfile>;
}

/** The role of an attachment within a profile. */
export enum SeekAttachmentRole {
  /** A resume or CV. */
  Resume = 'RESUME',
  /** A cover letter specific to a position opening. */
  CoverLetter = 'COVER_LETTER',
  /** A document supporting a position-specific selection criteria. */
  SelectionCriteria = 'SELECTION_CRITERIA',
}

/** The details of a position the candidate applied for. */
export interface AssociatedPositionOpening {
  __typename?: 'AssociatedPositionOpening';
  /**
   * The identifier for the position opening the candidate applied for.
   *
   * This is included for HR-JSON compatibility; GraphQL users should use the
   * `positionOpening` nested object instead.
   */
  positionOpeningId: ObjectIdentifier;
  /** The position opening this candidate applied for. */
  positionOpening: PositionOpening;
  /**
   * The public web URL of the posted job ad.
   *
   * This will be `null` for unposted position profiles.
   */
  positionUri?: Maybe<Scalars['String']>;
  /**
   * An indicator that the candidate applied to this associated position.
   *
   * This is always `true` until proactive sourcing is supported.
   */
  candidateAppliedIndicator?: Maybe<Scalars['Boolean']>;
}

/** A profile attachment stored at an external URL. */
export interface Attachment {
  __typename?: 'Attachment';
  /**
   * The opaque identifier for the attachment.
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

/** Basic information to identify and reference a specific organization. */
export interface Organization {
  __typename?: 'Organization';
  /** The human readable name of the organization. */
  name: Scalars['String'];
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
  /** Indicates whether the person is still working at the organization, if known. */
  current?: Maybe<Scalars['Boolean']>;
  /** The title that the person held for this position. */
  title: Scalars['String'];
  /** An array of descriptions of the person's responsibilities, skills and achievements in the position. */
  descriptions: Array<Scalars['String']>;
}

/** The details of a person's employment, work, or relevant experience. */
export interface EmployerHistory {
  __typename?: 'EmployerHistory';
  /** The specific organization to which the person held positions. */
  organization: Organization;
  /** The set of positions that the person held. */
  positionHistories: Array<PositionHistory>;
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

/** The details documenting a person's attendance at an educational institution. */
export interface EducationAttendance {
  __typename?: 'EducationAttendance';
  /** The institution the person attended. */
  institution: Organization;
  /** The degrees which were awarded or in process at the institution. */
  educationDegrees: Array<EducationDegree>;
}

/** A skill or competency asserted by the candidate. */
export interface PersonCompetency {
  __typename?: 'PersonCompetency';
  /** The human readable name of the competency. */
  competencyName: Scalars['String'];
}

/** Structured information about a candidate related to a particular application. */
export interface CandidateProfile {
  __typename?: 'CandidateProfile';
  /**
   * The `Candidate` that submitted this application.
   *
   * This contains the candidate's personal details along with all their
   * applications to the same hirer.
   */
  candidate: Candidate;
  /**
   * An opaque identifier for the profile.
   *
   * This profile can be queried at any time by passing this identifier string
   * to `candidateProfile`.
   */
  profileId: ObjectIdentifier;
  /** The date & time the candidate applied for the position. */
  createDateTime: Scalars['DateTime'];
  /** The positions this candidate has applied for. */
  associatedPositionOpenings: Array<AssociatedPositionOpening>;
  /** The attachments related to the candidate's profile. */
  attachments: Array<Attachment>;
  /** The employment history of the candidate. */
  employment: Array<EmployerHistory>;
  /** The education history of the candidate. */
  education: Array<EducationAttendance>;
  /** The skills or competencies of the candidate. */
  qualifications: Array<PersonCompetency>;
  /** The completed candidate submission for the position profile's questionnaire. */
  seekQuestionnaireSubmission?: Maybe<ApplicationQuestionnaireSubmission>;
}

/** A webhook attempt. */
export interface WebhookAttempt {
  __typename?: 'WebhookAttempt';
  /** An opaque identifier for the webhook attempt. */
  id: ObjectIdentifier;
  /** The date & time that the webhook attempt was acknowledged or timed out. */
  createDateTime: Scalars['DateTime'];
  /** The event opaque identifier that generated the attempt. */
  eventId: ObjectIdentifier;
  /** The subscription opaque identifier that generated the attempt. */
  subscriptionId: ObjectIdentifier;
  /** The HTTP status for the webhook attempt. */
  statusCode: Scalars['Int'];
  /**
   * The result description for the webhook attempt.
   *
   * Currently, four codes are defined:
   *
   * 1. `BadResponse` indicates that the webhook attempt received a non-2xx HTTP response
   * 2. `InvalidUrl` indicates that the subscription URL did not pass validation
   * 3. `RequestTimeout` indicates that the webhook attempt did not receive a timely response
   * 4. `Success` indicates that the webhook attempt received a 2xx HTTP response
   */
  descriptionCode: Scalars['String'];
  /**
   * The identifier of the HTTP request for the webhook attempt.
   *
   * This identifier is included in the request as an `X-Request-Id` custom header.
   */
  requestId: Scalars['String'];
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
  /**
   * The page of webhook attempts and their corresponding cursors.
   *
   * This is always a non-empty list.
   */
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
   * The types of webhook attempts to retrieve.
   *
   * See the relevant `WebhookAttempt` implementation for a list of supported description types.
   */
  descriptionCodes?: Maybe<Array<Scalars['String']>>;
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
   * This commonly refers to a SEEK brand.
   * See the relevant `Event` implementation for a list of supported schemes.
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
   * - `SeekHmacSha512` indicates a HMAC SHA-512 hex digest will be attached to
   *   each request as a `Seek-Signature` header.
   *
   * A webhook's signature can be used to validate that the request originated
   * from SEEK.
   *
   * Use a constant-time algorithm to validate the signature. Regular comparison
   * methods like the `==` operator are susceptible to timing attacks.
   */
  signingAlgorithmCode: Scalars['String'];
  /**
   * The secret for signing webhooks.
   *
   * This must be specified if `signingAlgorithmCode` is not `None`. It is
   * used as the key to generate a message authentication code for each request.
   *
   * The secret should be a random string with high entropy that is not reused
   * for any other purpose.
   */
  secret?: Maybe<Scalars['String']>;
}

/** The details of the webhook subscription delivery configuration to be updated. */
export interface UpdateWebhookSubscriptionDeliveryConfigurationSubscriptionInput {
  /** The unique identifier for the subscription. */
  id: Scalars['String'];
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
   * - `SeekHmacSha512` indicates a HMAC SHA-512 hex digest will be attached to
   *   each request as a `Seek-Signature` header.
   *
   * A webhook's signature can be used to validate that the request originated
   * from SEEK.
   *
   * Use a constant-time algorithm to validate the signature. Regular comparison
   * methods like the `==` operator are susceptible to timing attacks.
   */
  signingAlgorithmCode: Scalars['String'];
  /**
   * The secret for signing webhooks.
   *
   * This must be specified if `signingAlgorithmCode` is not `None`. It is
   * used as the key to generate a message authentication code for each request.
   *
   * The secret should be a random string with high entropy that is not reused
   * for any other purpose.
   */
  secret?: Maybe<Scalars['String']>;
}

/** The details of the webhook subscription to be deleted. */
export interface DeleteWebhookSubscriptionSubscriptionInput {
  /** The unique identifier for the subscription. */
  id: Scalars['String'];
}

/**
 * A subscription for a given event type and scheme to be delivered via webhook.
 *
 * Events are delivered in batches with a HTTP POST request to the specified subscription URL.
 */
export interface WebhookSubscription {
  __typename?: 'WebhookSubscription';
  /** The unique identifier for the subscription. */
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
   * This commonly refers to a SEEK brand.
   * See the relevant `Event` implementation for a list of supported schemes.
   */
  schemeId: Scalars['String'];
  /**
   * The optional hirer ID to receive events from.
   *
   * By default webhook subscriptions will send events from all hirers the partner has access to.
   * A non-null `hirerId` indicates that this subscription is filtered to a single hirer.
   */
  hirerId?: Maybe<ObjectIdentifier>;
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
   * - `SeekHmacSha512` indicates a HMAC SHA-512 hex digest will be attached to
   *   each request as a `Seek-Signature` header.
   *
   * A webhook's signature can be used to validate that the request originated
   * from SEEK.
   *
   * Use a constant-time algorithm to validate the signature. Regular comparison
   * methods like the `==` operator are susceptible to timing attacks.
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
   * A page of webhook attempts for the current subscription matching the specified criteria.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/**
 * A subscription for a given event type and scheme to be delivered via webhook.
 *
 * Events are delivered in batches with a HTTP POST request to the specified subscription URL.
 */
export interface WebhookSubscriptionWebhookAttemptsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookAttemptsFilterInput>;
}

/** The input parameter for the `createWebhookSubscription` mutation. */
export interface CreateWebhookSubscriptionInput {
  /** The details of the webhook subscription to be created. */
  webhookSubscription: CreateWebhookSubscriptionSubscriptionInput;
}

/** The output parameter for the `createWebhookSubscription` mutation. */
export interface CreateWebhookSubscriptionPayload {
  __typename?: 'CreateWebhookSubscriptionPayload';
  /** The details of the created webhook subscription. */
  webhookSubscription: WebhookSubscription;
}

/** The input parameter for the `updateWebhookSubscriptionDeliveryConfiguration` mutation. */
export interface UpdateWebhookSubscriptionDeliveryConfigurationInput {
  /** The details of the webhook subscription to be updated. */
  webhookSubscription: UpdateWebhookSubscriptionDeliveryConfigurationSubscriptionInput;
}

/** The output parameter for the `updateWebhookSubscriptionDeliveryConfiguration` mutation. */
export interface UpdateWebhookSubscriptionDeliveryConfigurationPayload {
  __typename?: 'UpdateWebhookSubscriptionDeliveryConfigurationPayload';
  /** The details of the updated webhook subscription. */
  webhookSubscription: WebhookSubscription;
}

/** The input parameter for the `deleteWebhookSubscription` mutation. */
export interface DeleteWebhookSubscriptionInput {
  /** The details of the webhook subscription to be deleted. */
  webhookSubscription: DeleteWebhookSubscriptionSubscriptionInput;
}

/** The output parameter for the `deleteWebhookSubscription` mutation. */
export interface DeleteWebhookSubscriptionPayload {
  __typename?: 'DeleteWebhookSubscriptionPayload';
  /** The details of the deleted webhook subscription. */
  webhookSubscription: WebhookSubscription;
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

/** A page of webhook subscriptions. */
export interface WebhookSubscriptionsConnection {
  __typename?: 'WebhookSubscriptionsConnection';
  /**
   * The page of webhook subscriptions and their corresponding cursors.
   *
   * This is always a non-empty list.
   */
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
   * See the relevant `WebhookSubscription` implementation for a list of supported event types.
   */
  eventTypeCodes?: Maybe<Array<Scalars['String']>>;
  /**
   * The hirer IDs of the hirer-filtered webhook subscriptions to retrieve.
   *
   * If this is not provided then both hirer-filtered and unfiltered subscriptions will be returned.
   */
  hirerIds?: Maybe<Array<Scalars['String']>>;
}

/** A page of events from a stream. */
export interface EventsConnection {
  __typename?: 'EventsConnection';
  /**
   * The page of events and their corresponding cursors.
   *
   * This is always a non-empty list.
   */
  edges: Array<EventEdge>;
  /** The pagination metadata for this page of events. */
  pageInfo: PageInfo;
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

/**
 * A signal that an action has been performed on the SEEK platform that may be of interest to an integration partner.
 *
 * Events can be delivered via:
 *
 * - Webhook, using the `createWebhookSubscription` mutation
 * - GraphQL polling, using the paginated `events` query
 */
export interface Event {
  /** The unique identifier of the event. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * This commonly refers to a SEEK brand.
   * See the relevant `Event` implementation for a list of supported schemes.
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

/**
 * The event signaling that a candidate has applied for a `PositionOpening`.
 *
 * A candidate may apply for the same position opening more than once.
 * Each application will trigger a new event with a distinct `id`.
 */
export interface CandidateApplicationCreatedEvent extends Event {
  __typename?: 'CandidateApplicationCreatedEvent';
  /** The unique identifier of the event. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * The following schemes are supported for this event type:
   *
   * - seekAnz
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
   * This can be used to retrieve structured candidate details with the `candidateWithApplicationProfile` query.
   */
  candidateApplicationProfileId: Scalars['String'];
  /** The identifier for the `Candidate` that applied for the position opening. */
  candidateId: Scalars['String'];
  /**
   * The `Candidate` that applied for the position opening.
   *
   * This will include the candidate's personal details along with all
   * application profiles for a single hirer.
   */
  candidate: Candidate;
  /** The `CandidateProfile` associated with the application. */
  candidateApplicationProfile: CandidateProfile;
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
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

/**
 * The event signaling that a `PositionProfile` has been posted.
 *
 * Corresponding events for the `updatePostedPositionProfile` and `closePostedPositionProfile` mutations are not currently available.
 */
export interface PositionProfilePostedEvent extends Event {
  __typename?: 'PositionProfilePostedEvent';
  /** The unique identifier of the event. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * The following schemes are supported for this event type:
   *
   * - seekAnz
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
  positionProfile?: Maybe<PositionProfile>;
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/**
 * The event signaling that a `PositionProfile` has been posted.
 *
 * Corresponding events for the `updatePostedPositionProfile` and `closePostedPositionProfile` mutations are not currently available.
 */
export interface PositionProfilePostedEventWebhookAttemptsArgs {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  filter?: Maybe<WebhookAttemptsFilterInput>;
}

/** The event signaling that a `CandidateProfile` has been purchased. */
export interface CandidateProfilePurchasedEvent extends Event {
  __typename?: 'CandidateProfilePurchasedEvent';
  /** The unique identifier of the event. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * The following schemes are supported for this event type:
   *
   * - seekAnz
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
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
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
   * An indicator that the event was successfully delivered via the specified webhook `subscriptionId`.
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

export type LocationAttributesFragment = { __typename?: 'Location' } & Pick<
  Location,
  'name' | 'contextualName' | 'countryCode'
> & {
    id: { __typename?: 'ObjectIdentifier' } & Pick<ObjectIdentifier, 'value'>;
  };

export type NestedLocationAttributesFragment = { __typename?: 'Location' } & {
  parent?: Maybe<
    { __typename?: 'Location' } & {
      parent?: Maybe<
        { __typename?: 'Location' } & {
          parent?: Maybe<
            { __typename?: 'Location' } & {
              parent?: Maybe<
                { __typename?: 'Location' } & {
                  parent?: Maybe<
                    { __typename?: 'Location' } & LocationAttributesFragment
                  >;
                } & LocationAttributesFragment
              >;
            } & LocationAttributesFragment
          >;
        } & LocationAttributesFragment
      >;
    } & LocationAttributesFragment
  >;
} & LocationAttributesFragment;

export type LocationQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type LocationQuery = { __typename?: 'Query' } & {
  location?: Maybe<
    { __typename?: 'Location' } & NestedLocationAttributesFragment
  >;
};

export type SuggestLocationsQueryVariables = Exact<{
  usageTypeCode: Scalars['String'];
  schemeId: Scalars['String'];
  hirerId?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
}>;

export type SuggestLocationsQuery = { __typename?: 'Query' } & {
  locationSuggestions?: Maybe<
    Array<
      { __typename?: 'LocationSuggestion' } & {
        location: {
          __typename?: 'Location';
        } & NestedLocationAttributesFragment;
      }
    >
  >;
};

export type NearestLocationsQueryVariables = Exact<{
  schemeId: Scalars['String'];
  geoLocation: GeoLocationInput;
  first?: Maybe<Scalars['Int']>;
}>;

export type NearestLocationsQuery = { __typename?: 'Query' } & {
  nearestLocations?: Maybe<
    Array<{ __typename?: 'Location' } & NestedLocationAttributesFragment>
  >;
};
