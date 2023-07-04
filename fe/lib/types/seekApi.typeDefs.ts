import gql from 'graphql-tag';

export const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  """
  Indicates that a field supports localization through the standard
  \`Accept-Language\` HTTP request header.

  The SEEK API defaults to \`en-AU\` if the requested locales cannot be
  satisfied.
  """
  directive @localized(
    """
    The locales supported by the field.

    Locales are listed as IETF BCP 47 language tags (e.g. \`en-US\`) that
    comprise two hyphen-separated subtags:

    1. Primary language: two-letter ISO 639-1:2002 language code, in lowercase
    2. Region: two-letter ISO 3166-1:2013 country code, in uppercase
    """
    locales: [String!]!
  ) on FIELD_DEFINITION

  directive @paginated(defaultPageSize: Int!) on FIELD_DEFINITION

  directive @unpaginated(indicativeLength: Int!) on FIELD_DEFINITION

  """
  A physical address.
  """
  type Address {
    """
    The city or suburb of the address.
    """
    city: String
    """
    The two-letter ISO 3166-1:2013 country code, in uppercase.
    """
    countryCode: String
    """
    An array of further divisions of the country.

    These may include districts, regions, states, provinces, etc.
    """
    countrySubDivisions: [AddressComponent!]!
    """
    An array of additional address lines.

    These may include an apartment or suite number.
    """
    extendedLines: [AddressComponent!]!
    """
    The formatted representation of the whole address for display purposes.
    """
    formattedAddress: String
    """
    The geographical coordinates of the address.
    """
    geoLocation: GeoLocation
    """
    The street line address.
    """
    line: String
    """
    The postal code of the address.
    """
    postalCode: String
  }

  """
  An individual component of a physical address.
  """
  type AddressComponent {
    """
    The type of the address component.

    Currently, the following components are defined:

    - \`Apartment\` indicates an address line for an apartment, unit or suite.
    - \`State\` indicates a state or internal territory country subdivision.
    """
    type: String!
    """
    The actual component value.
    """
    value: String!
  }

  """
  An individual component of a physical address.
  """
  input AddressComponentInput {
    """
    The type of the address component.

    Currently, the following components are defined:

    - \`Apartment\` indicates an address line for an apartment, unit or suite.
    - \`State\` indicates a state or internal territory country subdivision.
    """
    type: String!
    """
    The actual component value.
    """
    value: String!
  }

  """
  A physical address.
  """
  input AddressInput {
    """
    The city or suburb of the address.
    """
    city: String!
    """
    The two-letter ISO 3166-1:2013 country code, in uppercase.
    """
    countryCode: String!
    """
    An array of further divisions of the country.

    These may include districts, regions, states, provinces, etc.

    A maximum of 5 subdivisions may be provided.
    """
    countrySubDivisions: [AddressComponentInput!]!
    """
    An array of additional address lines.

    These may include an apartment or suite number.

    A maximum of 5 extended lines may be provided.
    """
    extendedLines: [AddressComponentInput!]!
    """
    The formatted representation of the whole address for display purposes.

    This field has a maximum length of 1,000 characters.
    """
    formattedAddress: String
    """
    The geographical coordinates of the address.
    """
    geoLocation: GeoLocationInput
    """
    The street line address.
    """
    line: String
    """
    The postal code of the address.

    This field has a maximum length of 50 characters.
    """
    postalCode: String!
  }

  """
  Advertisement branding details and images.

  This can be associated with one or more \`PositionProfile\`s when they are created.

  Branding images are visible to candidates searching for positions or viewing a job ad with this associated advertisement branding.
  """
  type AdvertisementBranding {
    """
    The organization that has the advertisement branding.
    """
    hirer: HiringOrganization!
    """
    The identifier for the \`AdvertisementBranding\`.
    """
    id: ObjectIdentifier!
    """
    A list of images associated with the advertisement branding.
    """
    images: [AdvertisementBrandingImage!]!
    """
    The advertisement branding name.
    """
    name: String!
  }

  """
  An advertisement branding in a paginated list.
  """
  type AdvertisementBrandingEdge {
    """
    The opaque cursor to advertisement branding.

    This can be used as a subsequent pagination argument.
    """
    cursor: String!
    """
    The actual advertisement branding.
    """
    node: AdvertisementBranding!
  }

  """
  A visual representation of advertisement branding.
  """
  type AdvertisementBrandingImage {
    """
    The type of advertisement branding image.

    Currently, two codes are defined:

    - \`OriginalLogo\` indicates the original advertisement branding logo image from which other logo images are derived.

    - \`CoverImage\` indicates an optional cover image to be displayed on the top of job ads.
    """
    typeCode: String!
    """
    The URL of the advertisement branding image.

    This can be retrieved to visually identify an advertisement branding in a partner system.
    """
    url: String!
  }

  """
  A page of advertisement brandings for a hirer.
  """
  type AdvertisementBrandingsConnection {
    """
    A deep link to the SEEK employer website where the hirer can manage their brands.

    This field accepts browser tokens that include the \`query:organizations\` scope.
    """
    brandManagementUrl: WebUrl
    """
    The page of advertisement brandings and their corresponding cursors.

    This list may be empty.
    """
    edges: [AdvertisementBrandingEdge!]!
    """
    The pagination metadata for this page of advertisement brandings.
    """
    pageInfo: PageInfo!
  }

  """
  The details of an available advertisement product.
  """
  type AdvertisementProduct {
    """
    A short phrase intended for display to a user that describes the advertisement product.
    """
    description: String
    """
    Additional information that is accepted when posting a job ad to configure the features of this advertisement product.
    """
    features: AdvertisementProductFeatures!
    """
    The identifier of this advertisement product.

    Identifiers may become stale, and should not be stored for long periods.

    It would be appropriate to save an identifier for use in a job ad draft, but not for use as a job ad template.
    """
    id: ObjectIdentifier!
    """
    The name of the advertisement product for displaying to the user.

    This is typically a single word that differentiates the product from other options.
    """
    label: String!
    """
    Information about how payment will be made for this advertisement product.
    """
    payment: AdvertisementProductPaymentDetails
    """
    Information about how much this advertisement product costs.
    """
    price: AdvertisementProductPriceDetails
    """
    Whether this advertisement product should be preselected or not.

    This field generally indicates the advertisement product that is set in the current state of an existing \`PositionProfile\`.
    """
    selected: Boolean!
    """
    An array of short phrases that tell the user what value this advertisement product provides.
    """
    sellingPoints: [AdvertisementProductSellingPoint!]!
  }

  """
  Additional information that is accepted when posting a job ad with this advertisement product.
  """
  type AdvertisementProductFeatures {
    """
    Additional information related to branding that is accepted when posting a job ad.
    """
    branding: AdvertisementProductFeatures_Branding
    """
    Additional information related to search bullet points that is accepted when posting a job ad.
    """
    searchBulletPoints: AdvertisementProductFeatures_SearchBulletPoints
  }

  """
  Branding features that are included with a product when posting or updating a job ad.
  """
  type AdvertisementProductFeatures_Branding {
    """
    Whether the cover image from the provided \`AdvertisementBranding\` will be visible on the job ad.
    """
    coverImageIndicator: Boolean!
    """
    Whether the logo from the provided \`AdvertisementBranding\` will be visible on the job ad.
    """
    logoIndicator: Boolean!
  }

  """
  Search bullet points that are included with a product.
  """
  type AdvertisementProductFeatures_SearchBulletPoints {
    """
    How many search bullet points are accepted when posting a job ad.

    This is always a positive integer; if bullet points are not supported, the entire object will be \`null\`.
    """
    limit: Int!
  }

  """
  The details of how an advertisement product will be paid.
  """
  type AdvertisementProductPaymentDetails {
    """
    A plain text summary of how payment will be broken down across payment methods.

    This is a human-readable string intended for displaying in a user interface.
    """
    summary: String!
    """
    An alternate version of \`summary\` that includes HTML markup.

    This is intended to be parsed and rendered by a web browser for displaying in a user interface.
    """
    summaryHtml: String!
  }

  """
  The details of what will be paid for an advertisement product.
  """
  type AdvertisementProductPriceDetails {
    """
    The summary of what the price is for an advertisement product.

    This is a human-readable string intended for displaying in a user interface.
    """
    summary: String!
  }

  """
  A selling point of an advertisement product.

  This details a reason why a user should choose this advertisement product over another.
  """
  type AdvertisementProductSellingPoint {
    """
    The textual representation of this selling point for displaying to the user.
    """
    text: String!
  }

  """
  A list of advertisement products with additional context that applies to all products.
  """
  type AdvertisementProducts {
    """
    Information on this set of available products.

    Typically this is a legal disclaimer.
    """
    information: String
    """
    The list of advertisement products.
    """
    products: [AdvertisementProduct!]!
  }

  """
  The proposed state of the job ad to be posted or updated.
  """
  input AdvertisementProducts_PositionProfileInput {
    """
    An array of \`JobCategory\` identifiers.

    This field currently requires a single identifier for a child job category.
    """
    jobCategories: [String!]!
    """
    The remuneration offered for the position.

    This information allows us to better forecast the performance of the advertisement products.
    """
    offeredRemunerationPackage: RemunerationPackageInput
    """
    An array of \`Location\` identifiers.

    Scheme requirements:

    - This field currently requires a single identifier for a location.
    """
    positionLocation: [String!]!
    """
    Array of identifiers for the \`HiringOrganization\` that will post or update the job ad.

    The \`seekAnz\` scheme requires exactly one element.
    """
    positionOrganizations: [String!]!
    """
    A short phrase describing the position as it would be listed on a business card or in a company directory.

    This field has a maximum length of 80 characters.
    """
    positionTitle: String!
    """
    The identifier of the job ad to be updated.

    It should be omitted when creating a new job.
    """
    profileId: String
    """
    A SEEK ANZ work type code.

    Currently, four codes are defined:

    - \`Casual\` indicates a casual position.
    - \`ContractTemp\` indicates a fixed-length contract position.
    - \`FullTime\` indicates a full-time position.
    - \`PartTime\` indicates a part-time position.

    This information allows us to better forecast the performance of the advertisement products.
    """
    seekAnzWorkTypeCode: String
  }

  """
  A question from SEEK's library.

  This consists of label text displayed to a user and an input for them to select a response.
  """
  type ApplicationLibraryQuestion {
    """
    The identifier for the \`ApplicationLibraryQuestion\`.
    """
    id: ObjectIdentifier!
    """
    The way in which the response choices should be presented for selection.
    """
    preferenceSelection: ApplicationLibraryQuestionPreferenceSelection!
    """
    The collection of possible responses.

    - \`MultiSelect\` questions contain at least two elements.
    - \`SingleSelect\` questions contain at least two elements.
    """
    responseChoice: [ApplicationLibraryQuestionChoice!]
    """
    The type of the question response.

    Currently, two codes are defined:

    - \`MultiSelect\` for choosing one or more responses from \`responseChoice\`.
    - \`SingleSelect\` for choosing a single response from \`responseChoice\`.
    """
    responseTypeCode: String!
    """
    Text of the question displayed to the candidate.
    """
    text: String!
  }

  """
  A possible response to an \`ApplicationLibraryQuestion\`.
  """
  type ApplicationLibraryQuestionChoice {
    """
    The identifier for the \`ApplicationLibraryQuestionChoice\`.
    """
    id: ObjectIdentifier!
    """
    Text of the choice displayed to the candidate.
    """
    text: String!
  }

  """
  A question component of an \`ApplicationQuestionnaire\`.

  This consists of identifiers for the library question and its preferred response choices.
  """
  input ApplicationLibraryQuestionInput {
    """
    The type of the component.

    This is always \`Question\`.
    """
    componentTypeCode: String!
    """
    The identifier of the library question or suggestion that the component is based on.

    If the library question was suggested via the \`applicationLibraryQuestionSuggestions\` query,
    you should supply the \`ApplicationLibraryQuestionSuggestion.id\` rather than the \`ApplicationLibraryQuestion.id\`.

    If the library question was retrieved outside of a suggestion context,
    you may supply its underlying \`ApplicationLibraryQuestion.id\`.
    """
    id: String!
    """
    The selected response choice identifiers for the question.

    The identifiers should be populated from available response choices within \`ApplicationQuestion.responseChoice\` returned with question suggestions.
    """
    selectedResponseChoice: [String!]
  }

  """
  The way in which the response choices should be presented for selection.
  """
  type ApplicationLibraryQuestionPreferenceSelection {
    """
    A human-readable description of the way in which the response choice selection will apply.

    For example, the message can be:

    - \`I will only accept this answer\`
    - \`I will accept any of these answers\`
    - \`I will only accept this combination of answers\`
    - \`I will accept above and including\`
    - \`I will accept up to and including\`
    - \`I will accept between this range\`
    """
    message: String!
    """
    The way to present the response choice selection.

    Currently, three codes are defined:

    - \`SingleChoice\` indicates a question that expects a single preferred response choice.

      A radio group or dropdown may be used.

    - \`MultiChoice\` indicates a question that expects multiple preferred response choices.

      A checkbox group may be used.

    - \`Range\` indicates a question that expects two response choices representing the minimum and maximum preferred values.

      A set of two dropdowns may be used.
    """
    typeCode: String!
  }

  """
  A suggested question component.
  """
  type ApplicationLibraryQuestionSuggestion {
    """
    The application question information of the suggestion.

    This will be a SEEK library question suitable for use in an application questionnaire.
    """
    applicationLibraryQuestion: ApplicationLibraryQuestion!
    """
    The identifier for the \`ApplicationLibraryQuestionSuggestion\`.
    """
    id: ObjectIdentifier!
  }

  """
  The input parameter for the \`applicationLibraryQuestionSuggestions\` query.
  """
  input ApplicationLibraryQuestionSuggestions_PositionProfileInput {
    """
    An array of \`JobCategory\` identifiers.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element.
    """
    jobCategories: [String!]!
    """
    An array of formatted position profile descriptions.
    """
    positionFormattedDescriptions: [PositionFormattedDescriptionInput!]
    """
    An array of \`Location\` identifiers.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element.
    """
    positionLocation: [String!]!
    """
    An array of identifiers for the \`HiringOrganization\`s that have the position.

    Scheme requirements:

    The \`seekAnz\` scheme requires exactly one element.
    """
    positionOrganizations: [String!]!
    """
    The position title.

    This field has a maximum length of 80 characters.
    """
    positionTitle: String!
  }

  """
  A method of applying to a position.
  """
  type ApplicationMethod {
    """
    The email address that candidate applications are directed to.

    Do not select this in your operations,
    or your integration will break when the field is removed.
    """
    applicationEmail: Email
      @deprecated(
        reason: "This is always \`null\` and has been replaced by Application Export"
      )
    """
    A URL of an external application form.

    When this is provided, SEEK's native apply form will be disabled and the candidate will be redirected to the supplied URL.
    """
    applicationUri: WebUrl
  }

  """
  A method of applying to a position.
  """
  input ApplicationMethodInput {
    """
    A URL of an external application form.

    When this is provided, SEEK's native apply form will be disabled and the candidate will link out to the supplied URL.
    This requires that the hirer has an \`HiringOrganizationApiCapabilities.applicationMethodCodes\` that includes \`ApplicationUri\`.
    """
    applicationUri: WebUrlInput
  }

  """
  A privacy policy consent component of an \`ApplicationQuestionnaire\`.

  This consists of a URL for candidates to view the privacy policy and text to prompt the candidate as to whether or not they agree.

  The privacy policy consent component presents the candidate with a 'Yes' or 'No' choice.
  """
  type ApplicationPrivacyConsent implements ApplicationQuestionnaireComponent {
    """
    The type of the component.

    This is always \`PrivacyConsent\`.
    """
    componentTypeCode: String!
    """
    The HTML snippet to prompt the candidate for consent.

    Unsupported tags will be silently stripped when creating a questionnaire.

    This is optional and will default to 'Do you agree to the privacy policy?'.
    """
    descriptionHtml: String
    """
    The identifier for the \`ApplicationQuestionnaireComponent\`.
    """
    id: ObjectIdentifier!
    """
    The URL of the privacy policy to show to the candidate.
    """
    privacyPolicyUrl: WebUrl!
    """
    A partner-provided unique ID for the question.

    This can be used to correlate the question back to its corresponding representation in your software.
    """
    value: String
  }

  """
  A privacy policy consent component of an \`ApplicationQuestionnaire\`.

  This consists of a URL for candidates to view the privacy policy and text to prompt the candidate as to whether or not they agree.

  The privacy policy consent component always defaults the available response choices for the candidate to 'Yes' and 'No'.
  """
  input ApplicationPrivacyConsentInput {
    """
    The type of the component.

    This is always \`PrivacyConsent\`.
    """
    componentTypeCode: String!
    """
    The HTML snippet to prompt the candidate for consent.

    Unsupported tags will be silently stripped when creating a questionnaire.

    This is optional and will default to 'Do you agree to the privacy policy?'.
    """
    descriptionHtml: String
    """
    The URL of the privacy policy to show to the candidate.

    The \`url\` field has a maximum length of 1,000 characters.
    """
    privacyPolicyUrl: WebUrlInput!
    """
    A partner-provided unique ID for the consent component.

    This can be used to correlate the consent component back to its corresponding representation in your software.
    This must be unique across all components in the questionnaire.
    """
    value: String
  }

  """
  A candidate's response to a privacy policy consent component in the questionnaire.
  """
  type ApplicationPrivacyConsentResponse implements ApplicationQuestionnaireComponentResponse {
    """
    The privacy consent component this is responding to.
    """
    component: ApplicationPrivacyConsent!
    """
    The type of the component.

    This is always \`PrivacyConsent\`.
    """
    componentTypeCode: String!
    """
    This indicates whether or not the candidate agrees to the provided privacy policy.
    """
    consentGivenIndicator: Boolean!
  }

  """
  A question component of an \`ApplicationQuestionnaire\`.

  This consists of label text displayed to a user and an input for them to select a response.
  """
  type ApplicationQuestion implements ApplicationQuestionnaireComponent {
    """
    The underlying library question that the component is based on.

    The availability of this field is dependent on \`sourceCode\`:

    - \`Custom\` is always null.
    - \`Library\` is always non-null.
    """
    applicationLibraryQuestion: ApplicationLibraryQuestion
    """
    The type of the component.

    This is always \`Question\`.
    """
    componentTypeCode: String!
    """
    The identifier for the \`ApplicationQuestionnaireComponent\`.
    """
    id: ObjectIdentifier!
    """
    The HTML snippet of the question being asked to the candidate.

    Unsupported tags will be silently stripped when creating a questionnaire.

    This field has a maximum length of 1,000 characters.
    """
    questionHtml: String!
    """
    The collection of possible responses.

    - \`FreeText\` must not contain any elements.
    - \`MultiSelect\` must contain at least two elements.
    - \`SingleSelect\` must contain at least two elements.
    """
    responseChoice: [ApplicationQuestionChoice!]
    """
    The type of the question response.

    Currently, three codes are defined:

    - \`FreeText\` for a free text response.
    - \`MultiSelect\` for choosing one or more responses from \`responseChoice\`.
    - \`SingleSelect\` for choosing a single response from \`responseChoice\`.
    """
    responseTypeCode: String!
    """
    The source of the component.

    Currently, two codes are defined:

    - \`Custom\` indicates that the question was authored by the hirer.
    - \`Library\` indicates that the question was sourced from SEEK's question library.
    """
    sourceCode: String!
    """
    A partner-provided unique ID for the question.

    This can be used to correlate the question back to its corresponding representation in your software.
    """
    value: String
  }

  """
  A single answer to a question in the questionnaire.
  """
  type ApplicationQuestionAnswer {
    """
      The text value of the answer.

      For \`FreeText\` questions this may contain whitespace such as the \`
    \` newline escape sequence.
      For readability, you should display [whitespace characters](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) instead of collapsing them.
    """
    answer: String!
    """
    The questionnaire choice for the answer.

    For \`FreeText\` questions this will be \`null\`.
    """
    choice: ApplicationQuestionChoice
  }

  """
  A possible response to an \`ApplicationQuestion\`.
  """
  type ApplicationQuestionChoice {
    """
    The underlying library question choice that the question choice is based on.

    The availability of this field is dependent on the parent \`ApplicationQuestion.sourceCode\`:

    - \`Custom\` is always null.
    - \`Library\` is always non-null.
    """
    applicationLibraryQuestionChoice: ApplicationLibraryQuestionChoice
    """
    The identifier for the \`ApplicationQuestionChoice\`.
    """
    id: ObjectIdentifier!
    """
    Whether this choice is preferred when scoring the answers.

    This is not displayed to the candidate.
    """
    preferredIndicator: Boolean!
    """
    Whether this choice was explicitly selected as a preference.

    When authoring a new questionnaire based on existing questions,
    response choice selections may be prefilled from this indicator.

    - For a custom question, this always matches \`preferredIndicator\`.

    - For a library question, this is set for bounding preferences only.

      For example, a library question may define choices 1–5,
      and require a minimum and maximum to be selected as a range preference.
      Selecting the range 2–4 will set \`preferredIndicator\` for choices 2, 3, and 4,
      and \`selectedIndicator\` for bounding choices 2 and 4.

    This is not displayed to the candidate.
    """
    selectedIndicator: Boolean!
    """
    Text of the choice displayed to the candidate.
    """
    text: String!
    """
    A partner-provided unique ID for the question choice.

    This can be used to correlate the choice back to its corresponding representation in your software.
    """
    value: String
  }

  """
  A possible response to an \`ApplicationQuestion\`.
  """
  input ApplicationQuestionChoiceInput {
    """
    Whether this choice is preferred when scoring the answers.

    This is not displayed to the candidate.
    """
    preferredIndicator: Boolean!
    """
    Text of the choice displayed to the candidate.

    This must be unique across all choices in the question.
    """
    text: String!
    """
    A partner-provided unique ID for this choice.

    This can be used to correlate the choice back to its corresponding representation in your software.

    This must be unique across all choices in the question.
    """
    value: String
  }

  """
  A question component of an \`ApplicationQuestionnaire\`.

  This consists of label text displayed to a user and an input for them to select a response.
  """
  input ApplicationQuestionInput {
    """
    The type of the component.

    This is always \`Question\`.
    """
    componentTypeCode: String!
    """
    The HTML snippet of the question being asked to the candidate.

    Unsupported tags will be silently stripped when creating a questionnaire.

    This field has a maximum length of 1,000 characters.
    """
    questionHtml: String!
    """
    The collection of possible responses.

    For \`SingleSelect\` and \`MultiSelect\` this must contain between 2 and 99 elements, inclusive.
    """
    responseChoice: [ApplicationQuestionChoiceInput!]
    """
    The type of the question response.

    Currently, three codes are defined:

    - \`FreeText\` for a free text response.
    - \`MultiSelect\` for choosing one or more responses from \`responseChoice\`.
    - \`SingleSelect\` for choosing a single response from \`responseChoice\`.
    """
    responseTypeCode: String!
    """
    A partner-provided unique ID for this question.

    This can be used to correlate the question back to its corresponding representation in your software.
    This must be unique across all components in the questionnaire.
    """
    value: String
  }

  """
  A candidate's response to a question in the questionnaire.
  """
  type ApplicationQuestionResponse implements ApplicationQuestionnaireComponentResponse {
    """
    The answers provided by the candidate.

    For \`SingleSelect\` and \`FreeText\` this will be a single element array.
    """
    answers: [ApplicationQuestionAnswer!]!
    """
    The question this is responding to.
    """
    component: ApplicationQuestion!
    """
    The type of the component.

    This is always \`Question\`.
    """
    componentTypeCode: String!
    """
    How well the candidate answered the question against the hirer's preferences.

    The score is calculated differently based on the \`responseTypeCode\`:

    - For \`FreeText\`, the score will be null.
    - For \`MultiSelect\`, the score will be between 0 and 1 as a floating point.
      For example, if the candidate selected half of the preferred answers, the score would be 0.5.
    - For \`SingleSelect\`, the score will be either 1 or 0 based off whether or not the candidate selected a preferred answer.
    """
    score: Float
  }

  """
  A set of questions presented to a candidate during an application.

  This can be associated with one or more \`PositionProfile\`s when they are created.
  """
  type ApplicationQuestionnaire {
    """
    The array of components in the order they are presented to the candidate.
    """
    components: [ApplicationQuestionnaireComponent!]!
    """
    The hiring organization that created the questionnaire.

    The questionnaire can be attached to job ads posted by this organization.
    """
    hirer: HiringOrganization!
    """
    The identifier for the \`ApplicationQuestionnaire\`.
    """
    id: ObjectIdentifier!
  }

  """
  A component of an application questionnaire.

  This only contains identifying metadata;
  the \`componentTypeCode\` can be used to determine the concrete type of the component.
  """
  interface ApplicationQuestionnaireComponent {
    """
    The type of the component.

    Currently, two codes are defined:

    - \`PrivacyConsent\` which corresponds to the \`ApplicationPrivacyConsent\` type.
    - \`Question\` which corresponds to the \`ApplicationQuestion\` type.
    """
    componentTypeCode: String!
    """
    The identifier for the \`ApplicationQuestionnaireComponent\`.
    """
    id: ObjectIdentifier!
    """
    A partner-provided unique ID for the component.

    This can be used to correlate the component back to its corresponding representation in your software.
    """
    value: String
  }

  """
  A component of the questionnaire to be created.
  """
  input ApplicationQuestionnaireComponentInput {
    """
    The type of the component.

    Currently, two codes are defined:

    - \`PrivacyConsent\` corresponds to the \`privacyConsent\` field.
    - \`Question\` corresponds to the \`question\` and \`libraryQuestion\` fields.
    """
    componentTypeCode: String!
    """
    A library question component of an \`ApplicationQuestionnaire\`.

    Either this or \`question\` must be provided if the \`componentTypeCode\` is \`Question\`.

    The SEEK library question is sourced from the \`applicationLibraryQuestionSuggestions\` query.
    """
    libraryQuestion: ApplicationLibraryQuestionInput
    """
    A privacy consent component of an \`ApplicationQuestionnaire\`.

    This must be provided if the \`componentTypeCode\` is \`PrivacyConsent\`.
    """
    privacyConsent: ApplicationPrivacyConsentInput
    """
    A question component of an \`ApplicationQuestionnaire\`.

    Either this or \`libraryQuestion\` must be provided if the \`componentTypeCode\` is \`Question\`.
    """
    question: ApplicationQuestionInput
  }

  """
  A response to a component in a questionnaire.

  This only contains metadata related to the component responded to in the questionnaire.
  The implementation of a response is based on the \`componentTypeCode\` of its component.
  """
  interface ApplicationQuestionnaireComponentResponse {
    """
    The component this is responding to.
    """
    component: ApplicationQuestionnaireComponent!
    """
    The type of the component.

    Currently, two codes are defined:

    - \`PrivacyConsent\` which corresponds to the \`ApplicationPrivacyConsent\` type.
    - \`Question\` which corresponds to the \`ApplicationQuestion\` type.
    """
    componentTypeCode: String!
  }

  """
  A completed candidate submission for an \`ApplicationQuestionnaire\`.
  """
  type ApplicationQuestionnaireSubmission {
    """
    The set of questions presented to the candidate during the application.
    """
    questionnaire: ApplicationQuestionnaire!
    """
    The candidate's responses to the application's questionnaire.
    """
    responses: [ApplicationQuestionnaireComponentResponse!]!
    """
    The indication of how well the candidate scored on the questionnaire overall.

    The score is a calculation between 0 and 1 as a floating point.
    For example, if the candidate received a score of 1 on one question, and a score of 0 on another, this overall score would be calculated as 0.5.
    If there are no scored questions this score will be null.
    """
    score: Float
  }

  """
  The details of a position that a candidate is associated with.
  """
  type AssociatedPositionOpening {
    """
    Whether the candidate applied to this associated position.

    This is \`false\` for purchased profiles from the Proactive Sourcing use case.
    """
    candidateAppliedIndicator: Boolean
    """
    The position opening that the candidate is associated with.
    """
    positionOpening: PositionOpening!
    """
    The identifier for the \`PositionOpening\`.

    This is included for HR-JSON compatibility;
    GraphQL users should use the \`positionOpening\` nested object instead.
    """
    positionOpeningId: ObjectIdentifier!
    """
    A resource identifier for the position.

    This identifies the relevant position profile within the position opening.
    It can be matched with the position profile \`positionUri\` field.

    - For candidate application profiles from the Application Export use case,
      this is the public web URL of the posted job ad.

    - For purchased candidate profiles from the Proactive Sourcing use case,
      this is the object identifier of the relevant unposted position profile.
    """
    positionUri: String!
  }

  """
  A profile attachment stored at an external URL.
  """
  type Attachment {
    """
    An array of human readable descriptions of the attachment.

    Resumes & cover letters can be programmatically identified using the  \`seekRoleCode\` field.
    """
    descriptions: [String!]!
    """
    The identifier for the \`Attachment\`.

    This is unique across all attachments.
    """
    id: ObjectIdentifier!
    """
    The role of the attachment within a profile.
    """
    seekRole: SeekAttachmentRole @deprecated(reason: "Use seekRoleCode")
    """
    The role of the attachment within a profile.

    Currently, three codes are defined:

    - \`CoverLetter\` is used for a candidate's cover letter for a specific position.
    - \`Resume\` is used for a candidate's resume or CV.
    - \`SelectionCriteria\` is used for a candidate's selection criteria for a specific position.

    Additional documents will have a \`null\` role code.
    They can be distinguished by their free text \`descriptions\`.
    """
    seekRoleCode: String
    """
    A download URL for the attachment.

    This URL accepts partner tokens or browser tokens that include the \`download:candidate-profile-attachments\` scope.
    This is guaranteed to be an absolute URL with an origin of \`https://graphql.seek.com\`.
    """
    url: String!
  }

  """
  A person who applied for a position at a company.

  If the same person applies to multiple hirers they will have distinct \`Candidate\` objects created.
  """
  type Candidate {
    """
    Instructions on how this candidate should be distributed.
    """
    distributionGuidelines: DistributionGuidelines!
    """
    The identifier for the \`Candidate\`.

    This is unique for a given hirer & person.
    """
    documentId: ObjectIdentifier!
    """
    Information to identify the person,
    including their name and methods of communicating with the person.
    """
    person: CandidatePerson!
    """
    The list of profiles associated with with the candidate.

    Uploaded candidates sourced from the \`uploadCandidate\` mutation have a single profile.

    SEEK candidates have a profile per submitted application.
    This field exposes up to 10 recent applications submitted by the candidate.

    We recommend querying specific applications by their \`CandidateProfile.profileId\`s for the Application Export use case.

    This field is redacted and an empty/filtered list is returned when a candidate or job application is deleted.
    """
    profiles(
      """
      The upper limit of candidate profiles to return from the end of the list.

      Defaults to 10.
      Excess candidate profiles will be trimmed from the start of the list.
      """
      last: Int
    ): [CandidateProfile!]!
    """
    The candidate's primary email address.

    The value is only set for candidates with \`CandidateSource\` value \`PartnerUpload\`.
    Values will be unique within a given hirer.
    """
    seekPrimaryEmailAddress: String
  }

  """
  The event signaling that a candidate has applied for a \`PositionOpening\`.

  A candidate may apply for the same position opening more than once.
  Each application will trigger a new event with a distinct \`id\`.
  """
  type CandidateApplicationCreatedEvent implements Event {
    """
    The \`Candidate\` that applied for the position opening.

    This will include the candidate's personal details along with all application profiles for a single hirer.

    This field is only accessible while you have an active \`ApplicationExport\` relationship with the hirer.
    If this relationship has been removed, it will return null along with a \`FORBIDDEN\` error.
    """
    candidate: Candidate
    """
    The \`CandidateProfile\` associated with the application.

    This field is only accessible while you have an active \`ApplicationExport\` relationship with the hirer.
    If this relationship has been removed, it will return null along with a \`FORBIDDEN\` error.
    """
    candidateApplicationProfile: CandidateProfile
    """
    The identifier for the specific \`CandidateProfile\` associated with the application.

    This can be used to retrieve structured candidate details with the \`candidateProfile\` query.
    """
    candidateApplicationProfileId: String!
    """
    The identifier for the \`Candidate\` that applied for the position opening.
    """
    candidateId: String!
    """
    The date & time the application was accepted from the candidate.

    This field has weak ordering guarantees, so it should not be used as a pagination argument.
    """
    createDateTime: DateTime!
    """
    The identifier for the \`Event\`.
    """
    id: ObjectIdentifier!
    """
    The data source for the event.

    Currently, only the \`seekAnz\` and \`seekAnzPublicTest\` schemes emit \`CandidateApplicationCreated\` events.
    """
    schemeId: String!
    """
    The type of event, i.e. \`CandidateApplicationCreated\`.
    """
    typeCode: String!
    """
    A page of webhook attempts for the current event matching the specified criteria.

    A maximum of 100 webhook attempts can be returned in a single page.
    Additional webhook attempts can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest known attempt if no pagination arguments are provided.
    """
    webhookAttempts(
      """
      An opaque cursor to the earlier bounding webhook attempt.

      Resulting webhook attempts will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding webhook attempt.

      Resulting webhook attempts will _precede_ this cursor.
      """
      before: String
      """
      The additional \`WebhookAttempt\`-specific criteria to filter by.
      """
      filter: WebhookAttemptsFilterInput
      """
      The upper limit of webhook attempts to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess webhook attempts will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of webhook attempts to return from the end of the list.

      Excess webhook attempts will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
    ): WebhookAttemptsConnection!
  }

  """
  Information about a person not specific to a candidate profile.
  """
  type CandidatePerson {
    """
    Methods of communication with the person.
    """
    communication: Communication!
    """
    The person's name.
    """
    name: PersonName!
  }

  """
  Information about a person not specific to a candidate profile.
  """
  input CandidatePersonInput {
    """
    Methods of communication with the person.
    """
    communication: CommunicationInput!
    """
    The person's name.
    """
    name: PersonNameInput!
  }

  """
  An action that can be executed as part of a workflow process.
  """
  type CandidateProcessAction {
    """
    The code of the action.

    Currently, the following action codes are defined:

    - \`AgencySubmission\`
    - \`CandidateWorkflowTransition\`
    - \`Document\`
    - \`Email\`
    - \`Note\`
    - \`PhoneCall\`
    - \`PostPlacementActivity\`
    - \`Screening\`
    - \`StatusChange\`
    - \`VerificationActivity\`
    - \`Other\`
    """
    code: String!
    """
    The free-form description of the action.
    """
    description: String
    """
    A short human-readable name for the workflow step.

    This is non-null for a process history action of an uploaded candidate.
    """
    name: String
    """
    A deep link to the action.
    """
    seekUrl: WebUrl
  }

  """
  An action that can be executed as part of a workflow process.
  """
  input CandidateProcessActionInput {
    """
    The code of the action.

    For process history actions, the following action codes are defined:

    - \`AgencySubmission\`
    - \`CandidateWorkflowTransition\`
    - \`Document\`
    - \`Email\`
    - \`Note\`
    - \`PhoneCall\`
    - \`PostPlacementActivity\`
    - \`Screening\`
    - \`StatusChange\`
    - \`VerificationActivity\`
    - \`Other\`

    For profile actions, one action code is defined:

    - \`ViewProfile\` indicates that the URL is used to view the candidate's profile.
    """
    code: String!
    """
    The free-form description of the action.

    This is required for a process history action of an uploaded candidate.

    This field has a maximum length of 1,000 characters.
    """
    description: String
    """
    A short human-readable name of the workflow process.

    This is required for a process history action of an uploaded candidate.
    """
    name: String
    """
    A deep link to the action.

    This is required for a profile action of an uploaded candidate.

    The \`url\` field has a maximum length of 1,000 characters.
    """
    seekUrl: WebUrlInput
  }

  """
  A single item in a \`CandidateProfile\`'s workflow process history.
  """
  type CandidateProcessHistoryItem {
    """
    The executed action that constitutes this history item.

    This action may or may not trigger a change in the status of the underlying process.
    For example, an action may be to add a note against a candidate's profile,
    which has no material effect on the stage through the application process.
    """
    action: CandidateProcessAction!
    """
    The date & time the action was executed.
    """
    actionDate: DateTime!
    """
    The \`CandidateProfile\` that the \`CandidateProcessHistoryItem\` relates to.
    """
    candidateProfile: CandidateProfile!
    """
    The identifier for the \`CandidateProcessHistoryItem\`.
    """
    id: ObjectIdentifier!
    """
    The position profile that the history item relates to.

    This is null for interactions that are not specific to an individual position,
    such as a general interview with a recruiter.
    It will also be null where an unknown \`profileId\` was provided or the position profile has since been deleted.
    """
    positionProfile: PositionProfile
    """
    The parties that executed the action.
    """
    primaryParties: [CandidateProcessParty!]!
    """
    The underlying source for the item.

    For example, items related to an application process would note the job board or other channel that sourced the application.
    """
    seekSource: SeekProcessHistoryItemSource
    """
    The current status of the underlying process.

    For example, a candidate in an application process may progress through a series of statuses like applied, interviewed, offered, hired.
    """
    status: CandidateProcessStatus
  }

  """
  A page of candidate process history items.
  """
  type CandidateProcessHistoryItemConnection {
    """
    The page of candidate process history items and their corresponding cursors.

    This list may be empty.
    """
    edges: [CandidateProcessHistoryItemEdge!]!
    """
    The pagination metadata for this page of candidate process history items.
    """
    pageInfo: PageInfo!
  }

  """
  A candidate process history item in a paginated list.
  """
  type CandidateProcessHistoryItemEdge {
    """
    The opaque cursor to the candidate process history item.

    This can be used as a subsequent pagination argument.
    """
    cursor: String!
    """
    The actual candidate process history item.
    """
    node: CandidateProcessHistoryItem!
  }

  """
  A single item in a \`CandidateProfile\`'s workflow process history.
  """
  input CandidateProcessHistoryItemInput {
    """
    The executed action that constitutes this history item.

    This action may or may not trigger a change in the status of the underlying process.
    For example, an action may be to add a note against a candidate's profile,
    which has no material effect on the stage through the application process.
    """
    action: CandidateProcessActionInput!
    """
    The date & time the action was executed.
    """
    actionDate: DateTime!
    """
    The position profile that the history item relates to.

    This is null for interactions that are not specific to an individual position,
    such as a general interview with a recruiter.
    """
    positionProfile: CandidateProcessHistoryItem_PositionProfileInput
    """
    The parties that executed the action.

    At least one party is required for a process history item of an uploaded candidate.
    A maximum of 10 primary parties may be provided.
    """
    primaryParties: [CandidateProcessPartyInput!]!
    """
    The underlying source for the item.

    For example, items related to an application process would note the job board or other channel that sourced the application.

    This is required if \`positionProfile\` is specified.
    """
    seekSource: SeekProcessHistoryItemSourceInput
    """
    The current status of the underlying process.

    For example, a candidate in an application process may progress through a series of statuses like applied, interviewed, offered, hired.
    """
    status: CandidateProcessStatusInput
  }

  """
  A position profile associated with a workflow process.
  """
  input CandidateProcessHistoryItem_PositionProfileInput {
    """
    The identifier for the \`PositionProfile\`.
    """
    profileId: String!
  }

  """
  A party that contributes to a workflow process.

  This may be a person, organization, or both.
  """
  type CandidateProcessParty {
    """
    The organization that is contributing to the workflow process.
    """
    organization: Organization
    """
    The individual person that is contributing to the workflow process.
    """
    person: SpecifiedPerson
  }

  """
  A party that contributes to a workflow process.

  This may be a person, organization, or both.
  """
  input CandidateProcessPartyInput {
    """
    The organization that is contributing to the workflow process.
    """
    organization: OrganizationInput
    """
    The individual person that is contributing to the workflow process.
    """
    person: SpecifiedPersonInput
  }

  """
  A status of a workflow process.
  """
  type CandidateProcessStatus {
    """
    The code of the status of the underlying process.

    Currently, the following status codes are defined:

    - \`AgencyShortlist\`
    - \`AgencySubmission\`
    - \`Application\`
    - \`HirerShortlist\`
    - \`Interview\`
    - \`Offer\`
    - \`ReferenceCheck\`
    - \`Successful\`
    - \`TestingOrQualificationsCheck\`
    - \`Unsuccessful\`
    """
    code: String!
  }

  """
  A status of a workflow process.
  """
  input CandidateProcessStatusInput {
    """
    The code of the status of the underlying process.

    Currently, the following status codes are defined:

    - \`AgencyShortlist\`
    - \`AgencySubmission\`
    - \`Application\`
    - \`HirerShortlist\`
    - \`Interview\`
    - \`Offer\`
    - \`ReferenceCheck\`
    - \`Successful\`
    - \`TestingOrQualificationsCheck\`
    - \`Unsuccessful\`
    """
    code: String!
  }

  """
  Structured information about a candidate in relation to a particular position.
  """
  type CandidateProfile {
    """
    The position openings associated with this candidate profile.
    """
    associatedPositionOpenings: [AssociatedPositionOpening!]!
      @deprecated(reason: "Use associatedPositionProfile")
    """
    The primary position profile for this candidate profile.

    This is a convenience field to avoid an extra hop through \`associatedPositionOpenings\`.

    - For candidate applications, this is the job ad that the candidate applied to.
    - For purchased profiles, this is the unposted position profile that the purchase is scoped to.
    - For uploaded candidate profiles, this is always \`null\`.
    """
    associatedPositionProfile: PositionProfile
    """
    The attachments related to the candidate's profile.

    This field is redacted and an empty list is returned when a candidate or job application is deleted.
    """
    attachments: [Attachment!]!
    """
    The \`Candidate\` that this profile relates to.

    This contains the candidate's personal details along with all their profiles for the same hirer.
    """
    candidate: Candidate!
    """
    The sources from which the candidate was obtained from.
    """
    candidateSources: [CandidateSource!]!
    """
    The certifications and licenses the candidate holds.

    This field is redacted and an empty list is returned when a candidate or job application is deleted.
    """
    certifications: [Certification!]!
    """
    The date & time the candidate was associated with the position.
    """
    createDateTime: DateTime!
    """
    The education history of the candidate.

    This field is redacted and an empty list is returned when a candidate or job application is deleted.
    """
    education: [EducationAttendance!]!
    """
    The employment history of the candidate.

    This field is redacted and an empty list is returned when a candidate or job application is deleted.
    """
    employment: [EmployerHistory!]!
    """
    The candidate's preferences in an ideal position.

    This is only available for uploaded candidate profiles.
    For candidate applications & purchased profiles this will be an empty list.
    """
    positionPreferences: [PositionPreference!]!
    """
    The identifier for the \`CandidateProfile\`.

    This profile can be queried at any time by passing this identifier string to \`candidateProfile\`.
    """
    profileId: ObjectIdentifier!
    """
    The skills or competencies of the candidate.

    This field is redacted and an empty list is returned when a candidate or job application is deleted.
    """
    qualifications: [PersonCompetency!]!
    """
    A list of executable actions linked to the candidate profile.
    """
    seekActions: [CandidateProcessAction!]!
    """
    The workflow process history of the candidate.

    A maximum of 20 process history items can be returned in a single page.
    Additional items can be queried using a pagination cursor.

    This is null for non-uploaded candidates.
    """
    seekProcessHistory(
      """
      An opaque cursor to the earlier bounding page.

      Resulting items will _succeed_ this cursor.
      """
      after: String
      """
      The upper limit of items to return from the start of the list.

      Defaults to 10 if \`first\` is not specified.
      Excess items will be trimmed from the end of the list.
      """
      first: Int
    ): CandidateProcessHistoryItemConnection
    """
    The completed candidate submission for the position profile's questionnaire.

    This field is redacted for a deleted candidate or job application.
    """
    seekQuestionnaireSubmission: ApplicationQuestionnaireSubmission
    """
    The date & time the candidate profile was last updated.
    """
    updateDateTime: DateTime!
  }

  """
  The event signaling that a \`CandidateProfile\` has been purchased.
  """
  type CandidateProfilePurchasedEvent implements Event {
    """
    The \`CandidateProfile\` that was purchased.

    This field is only accessible while you have an active \`ProactiveSourcing\` relationship with the hirer.
    If this relationship has been removed, it will return null along with a \`FORBIDDEN\` error.
    """
    candidateProfile: CandidateProfile
    """
    The identifier for the \`CandidateProfile\` that was purchased.
    """
    candidateProfileId: String!
    """
    The date & time the \`CandidateProfile\` was purchased.

    This field has weak ordering guarantees, so it should not be used as a pagination argument.
    """
    createDateTime: DateTime!
    """
    The identifier for the \`Event\`.
    """
    id: ObjectIdentifier!
    """
    The data source for the event.

    Currently, only the \`seekAnz\` and \`seekAnzPublicTest\` schemes emit \`CandidateProfilePurchased\` events.
    """
    schemeId: String!
    """
    The type of event, i.e. \`CandidateProfilePurchased\`.
    """
    typeCode: String!
    """
    A page of webhook attempts for the current event matching the specified criteria.

    A maximum of 100 webhook attempts can be returned in a single page.
    Additional webhook attempts can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest known attempt if no pagination arguments are provided.
    """
    webhookAttempts(
      """
      An opaque cursor to the earlier bounding webhook attempt.

      Resulting webhook attempts will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding webhook attempt.

      Resulting webhook attempts will _precede_ this cursor.
      """
      before: String
      """
      The additional \`WebhookAttempt\`-specific criteria to filter by.
      """
      filter: WebhookAttemptsFilterInput
      """
      The upper limit of webhook attempts to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess webhook attempts will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of webhook attempts to return from the end of the list.

      Excess webhook attempts will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
    ): WebhookAttemptsConnection!
  }

  """
  A source from which the candidate was obtained from.
  """
  type CandidateSource {
    """
    Free text description of the source.
    """
    name: String!
    """
    The grouping that the source falls under.

    Currently, three types are defined:

    - \`PartnerUpload\` indicates that the candidate was uploaded to SEEK from a partner system.
    - \`SeekApplication\` indicates that the candidate applied for a position on the SEEK job board.
    - \`SeekPurchase\` indicates that the candidate profile was purchased from SEEK Talent Search.
    """
    type: String!
  }

  """
  A certification or license held by the candidate.
  """
  type Certification {
    """
    Human readable descriptions of the certification.

    This can contain multiple descriptions from two different sources:

    1. Free text descriptions provided by the candidate.
    2. Human readable descriptions automatically generated from SEEK's internal structured data.
    """
    descriptions: [String!]!
    """
    The time period for which the certification is effective.

    This will be \`null\` if the expiration date is unknown or not provided.
    """
    effectiveTimePeriod: EffectiveTimePeriod
    """
    The date the certification was issued.

    This will be \`null\` if the issue date is unknown or not provided.
    """
    issueDate: HistoryDate @deprecated(reason: "Use \`issued\`.")
    """
    The date the certification was last issued.

    This will be \`null\` if the issue date is unknown or not provided.
    """
    issued: HistoryDate
    """
    The organization that issued the certification.
    """
    issuingAuthority: Organization
    """
    The free text name of the certification.
    """
    name: String!
  }

  """
  The input parameter for the \`closePostedPositionProfile\` mutation.
  """
  input ClosePostedPositionProfileInput {
    """
    The details of the position profile to be closed.
    """
    positionProfile: ClosePostedPositionProfile_PositionProfileInput!
  }

  """
  The output of the \`closePostedPositionProfile\` mutation.
  """
  type ClosePostedPositionProfilePayload {
    """
    Attributes of the closed position profile.
    """
    positionProfile: ClosePostedPositionProfile_PositionProfilePayload!
  }

  """
  The details of the position profile to be closed.
  """
  input ClosePostedPositionProfile_PositionProfileInput {
    """
    The identifier for the posted \`PositionProfile\` to be closed.
    """
    profileId: String!
  }

  """
  Attributes of the closed position profile.
  """
  type ClosePostedPositionProfile_PositionProfilePayload {
    """
    The identifier for the closed \`PositionProfile\`.
    """
    profileId: ObjectIdentifier!
  }

  """
  Communication channels for a person.
  """
  type Communication {
    """
    An array of physical addresses for the person.

    The physical addresses are ordered in descending preference.

    This field is redacted and an empty array is returned when a candidate or job application is deleted.
    """
    address: [Address!]!
    """
    An array of email addresses for the person.

    The email addresses are ordered in descending preference.

    This field is redacted and an empty array is returned when a candidate or job application is deleted.
    """
    email: [Email!]!
    """
    An array of phone numbers for the person.

    The phone numbers are ordered in descending preference.

    This field is redacted and an empty array is returned when a candidate or job application is deleted.
    """
    phone: [Phone!]!
    """
     Whether the candidate must not be contacted by hirers.

    - For uploaded candidates from the Proactive Sourcing use case,
      this field may be set to prevent hirers from contacting them through SEEK Talent Search.
      A \`null\` value is treated the same as an explicit \`false\`.

    - For \`PositionOpening\` contact people from the Job Posting and Proactive Sourcing use cases,
      this field is always ignored.
    """
    seekDoNotContactIndicator: Boolean
  }

  """
  Communication channels for a person.
  """
  input CommunicationInput {
    """
    An array of physical addresses for the person.

    The physical addresses are ordered in descending preference.

    Between 0 and 5 physical addresses may be provided, inclusive.
    """
    address: [AddressInput!]
    """
    An array of email addresses for the person.

    The email addresses are ordered in descending preference.

    A maximum of 5 email addresses may be provided.
    """
    email: [EmailInput!]!
    """
    An array of phone numbers for the person.

    The phone numbers are ordered in descending preference.

    Between 0 and 5 phone numbers may be provided, inclusive.
    """
    phone: [PhoneInput!]!
    """
    Whether the candidate must not be contacted by hirers.

    - For uploaded candidates from the Proactive Sourcing use case,
      this field may be set to prevent hirers from contacting them through SEEK Talent Search.
      A \`null\` value is treated the same as an explicit \`false\`.

    - For \`PositionOpening\` contact people from the Job Posting and Proactive Sourcing use cases,
      this field is always ignored.
    """
    seekDoNotContactIndicator: Boolean
  }

  """
  The input parameter for the \`createApplicationQuestionnaire\` mutation.

  This must not exceed 56 KiB in length.
  """
  input CreateApplicationQuestionnaireInput {
    """
    The details of the questionnaire to be created.
    """
    applicationQuestionnaire: CreateApplicationQuestionnaire_ApplicationQuestionnaireInput!
  }

  """
  The response from the \`createApplicationQuestionnaire\` mutation.
  """
  type CreateApplicationQuestionnairePayload {
    """
    The details of the created questionnaire.
    """
    applicationQuestionnaire: ApplicationQuestionnaire!
  }

  """
  The details of the questionnaire to be created.
  """
  input CreateApplicationQuestionnaire_ApplicationQuestionnaireInput {
    """
    The array of components in the order they are presented to the candidate.
    """
    components: [ApplicationQuestionnaireComponentInput!]!
    """
    The identifier for the \`HiringOrganization\` that will own the questionnaire.

    Hirers can only associate position profiles with questionnaires they own.
    """
    hirerId: String!
  }

  """
  The input parameter for the \`createCandidateProcessHistoryItem\` mutation.
  """
  input CreateCandidateProcessHistoryItemInput {
    """
    The details of the \`CandidateProcessHistoryItem\` to be added to the \`CandidateProfile\`.
    """
    candidateProcessHistoryItem: CreateCandidateProcessHistoryItem_CandidateProcessHistoryItemInput!
    """
    The details of the \`CandidateProfile\` that the \`CandidateProcessHistoryItem\` belongs to.
    """
    candidateProfile: CreateCandidateProcessHistoryItem_CandidateProfileInput!
  }

  """
  The response from the \`createCandidateProcessHistoryItem\` mutation.
  """
  union CreateCandidateProcessHistoryItemPayload =
      CreateCandidateProcessHistoryItemPayload_Conflict
    | CreateCandidateProcessHistoryItemPayload_Success

  """
  The conflict result for the \`createCandidateProcessHistoryItem\` mutation.
  """
  type CreateCandidateProcessHistoryItemPayload_Conflict {
    """
    The \`CandidateProfile\` that the \`CandidateProcessHistoryItem\` belongs to.
    """
    candidateProfile: CandidateProfile!
    """
    The details of the conflicting \`CandidateProcessHistoryItem\`.
    """
    conflictingCandidateProcessHistoryItem: CandidateProcessHistoryItem!
  }

  """
  The success result for the \`createCandidateProcessHistoryItem\` mutation.
  """
  type CreateCandidateProcessHistoryItemPayload_Success {
    """
    The details of the \`CandidateProcessHistoryItem\` created.
    """
    candidateProcessHistoryItem: CandidateProcessHistoryItem!
    """
    The \`CandidateProfile\` that the \`CandidateProcessHistoryItem\` belongs to.
    """
    candidateProfile: CandidateProfile!
  }

  """
  The candidate process history to create.
  """
  input CreateCandidateProcessHistoryItem_CandidateProcessHistoryItemInput {
    """
    The executed action that constitutes this history item.

    This action may or may not trigger a change in the status of the underlying process.
    For example, an action may be to add a note against a candidate's profile,
    which has no material effect on the stage through the application process.
    """
    action: CandidateProcessActionInput!
    """
    The date & time the action was executed.
    """
    actionDate: DateTime!
    """
    An identifier to ensure that multiple candidate process history items are not created on retries.

    The identifier must be unique within the given candidate profile.
    The same identifier must be provided when retrying after create failures.
    """
    idempotencyId: String!
    """
    The position profile that the history item relates to.

    This is null for interactions that are not specific to an individual position,
    such as a general interview with a recruiter.
    """
    positionProfile: CandidateProcessHistoryItem_PositionProfileInput
    """
    The parties that executed the action.
    """
    primaryParties: [CandidateProcessPartyInput!]!
    """
    The underlying source for the item.

    For example, items related to an application process would note the job board or other channel that sourced the application.

    This is required if \`positionProfile\` is specified.
    """
    seekSource: SeekProcessHistoryItemSourceInput
    """
    The current status of the underlying process.

    For example, a candidate in an application process may progress through a series of statuses like applied, interviewed, offered, hired.
    """
    status: CandidateProcessStatusInput
  }

  """
  The candidate profile that the process history item belongs to.
  """
  input CreateCandidateProcessHistoryItem_CandidateProfileInput {
    """
    The identifier for the \`CandidateProfile\` that the \`CandidateProcessHistoryItem\` relates to.
    """
    profileId: String!
  }

  """
  The input parameter for the \`createPositionOpening\` mutation.
  """
  input CreatePositionOpeningInput {
    """
    The details of the position opening to be created.
    """
    positionOpening: CreatePositionOpening_PositionOpeningInput!
  }

  """
  The response from the \`createPositionOpening\` mutation.
  """
  type CreatePositionOpeningPayload {
    """
    The details of the created position opening.
    """
    positionOpening: PositionOpening!
  }

  """
  The details of the position opening to be created.
  """
  input CreatePositionOpening_PositionOpeningInput {
    """
    The party that owns the position opening.
    """
    postingRequester: PostingRequesterInput!
    """
    An optional field for storing additional data with a \`PositionOpening\`.

    The metadata is not used by SEEK and won't be seen by hirers or candidates.

    This field has a maximum length of 1,000 characters.
    """
    seekPartnerMetadata: String
    """
    The status of the position opening.

    Defaults to \`Active\` if no value is provided.

    Currently, three codes are defined:

    - \`Incomplete\` indicates the position opening is in draft.
    - \`Active\` indicates the position opening is open.
    - \`Closed\` indicates the position opening has been closed.
    """
    statusCode: String
  }

  """
  Information about how to post a job ad and where to direct its candidate applications.
  """
  input CreatePostingInstructionInput {
    """
    An array of methods for applying to the position.

    If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
    Native applications will emit a \`CandidateApplicationCreated\` event that points to a \`CandidateProfile\` object.

    Scheme requirements:

    - For the \`seekAnz\` scheme, this field is limited to a single element.
      Requests with more than 1 element will fail.
    """
    applicationMethods: [ApplicationMethodInput!]
    """
    The identifier for the \`AdvertisementBranding\` to apply to the posted job ad.

    Scheme requirements:

    - For the \`seekAnz\` scheme, this field's behavior is dependent on the \`SeekAnzAdProductFeatures\` of the product set in the \`seekAnzAdvertisementType\` field.

      When the product's \`SeekAnzAdProductFeatures.brandingIndicator\` value is false, this field will be silently ignored.
    """
    brandingId: String
    """
    The end date of the posting.

    Scheme requirements:

    - For the \`seekAnz\` scheme this must be no more than 30 days in the future.

      If an end date is omitted, the job ad will default to the maximum period of 30 calendar days.
      The precise end date can be queried from the \`PostingInstruction.end\` field once the job ad goes live.
    """
    end: DateTime
    """
    An identifier to ensure that multiple ads are not created on retries.

    A unique identifier needs to be generated by your software for each position profile.
    The same identifier must be provided when retrying after create failures.
    Your identifiers are isolated from and will not conflict with those generated by other recruitment software providers.
    """
    idempotencyId: String!
    """
    The identifier for the \`AdvertisementProduct\`.
    """
    seekAdvertisementProductId: String
    """
    A SEEK ANZ advertisement type code.

    Currently, three codes are defined:

    - \`Classic\` indicates a Classic job ad.
    - \`StandOut\` indicates a StandOut job ad.
    - \`Premium\` indicates a Premium job ad.

    Scheme requirements:

    - This field is required for the \`seekAnz\` scheme.
    - Omit this field for other schemes.
    """
    seekAnzAdvertisementType: String
  }

  """
  The input parameter for the \`createUnpostedPositionProfileForOpening\` mutation.
  """
  input CreateUnpostedPositionProfileForOpeningInput {
    """
    An unposted profile of a position opening to create.
    """
    positionProfile: CreateUnpostedPositionProfileForOpeningPositionProfileInput!
  }

  """
  The response from the \`createUnpostedPositionProfileForOpening\` mutation.
  """
  type CreateUnpostedPositionProfileForOpeningPayload {
    """
    Attributes of the newly created unposted position profile.
    """
    positionProfile: UnpostedPositionProfile!
  }

  """
  An unposted profile of a position opening to create.
  """
  input CreateUnpostedPositionProfileForOpeningPositionProfileInput {
    """
    An array of \`JobCategory\` identifiers.

    A maximum of 10 job categories may be provided.
    """
    jobCategories: [String!]!
    """
    The salary or compensation offered for the position.
    """
    offeredRemunerationPackage: RemunerationPackageInput!
    """
    An array of formatted position profile descriptions.

    A maximum of 10 formatted descriptions may be provided.
    """
    positionFormattedDescriptions: [PositionFormattedDescriptionInput!]!
    """
    An array of \`Location\` identifiers.

    A maximum of 10 locations may be provided.
    """
    positionLocation: [String!]!
    """
    The identifier for the \`PositionOpening\` that this position profile belongs to.
    """
    positionOpeningId: String!
    """
    The identifier for the \`HiringOrganization\` that has the position.

    This should contain exactly one element that matches the position opening's \`PostingRequester.id\`.
    """
    positionOrganizations: [String!]!
    """
    An array of codes for the offered schedules for the position.

    Currently, two codes are defined:

    - \`FullTime\` indicates a full-time schedule.
    - \`PartTime\` indicates a part-time schedule.
    """
    positionScheduleTypeCodes: [String!]
    """
    A short phrase describing the position as it would be listed on a business card or in a company directory.

    This field has a maximum length of 80 characters.
    """
    positionTitle: String!
    """
    A human-readable name given to the profile.

    This in addition to the \`positionTitle\` can help identify the profile to an end user.
    """
    profileName: String
    """
    An optional opaque billing reference.

    SEEK does not use this field on unposted position profiles.

    This field has a maximum length of 50 characters.
    """
    seekBillingReference: String
    """
    An optional hirer-provided opaque job reference.

    This field has a maximum length of 50 characters.
    """
    seekHirerJobReference: String
    """
    An optional field for storing additional data with a \`PositionProfile\`.

    The metadata is not used by SEEK and won't be seen by hirers or candidates.

    This field has a maximum length of 1,000 characters.
    """
    seekPartnerMetadata: String
  }

  """
  The input parameter for the \`createWebhookSubscription\` mutation.
  """
  input CreateWebhookSubscriptionInput {
    """
    The details of the webhook subscription to be created.
    """
    webhookSubscription: CreateWebhookSubscription_SubscriptionInput!
  }

  """
  The response from the \`createWebhookSubscription\` mutation.
  """
  union CreateWebhookSubscriptionPayload =
      CreateWebhookSubscriptionPayload_Conflict
    | CreateWebhookSubscriptionPayload_Success

  """
  The conflict result for the \`createWebhookSubscription\` mutation.

  Webhook subscriptions must have a unique combination of \`eventTypeCode\`, \`schemeId\`, \`url\` & \`hirerId\` fields.
  Attempting to create a duplicate webhook subscription will result in a conflict.
  """
  type CreateWebhookSubscriptionPayload_Conflict {
    """
    The details of the conflicting webhook subscription.
    """
    conflictingWebhookSubscription: WebhookSubscription!
  }

  """
  The success result for the \`createWebhookSubscription\` mutation.
  """
  type CreateWebhookSubscriptionPayload_Success {
    """
    The details of the created webhook subscription.
    """
    webhookSubscription: WebhookSubscription!
  }

  """
  The details of the webhook subscription to be created.
  """
  input CreateWebhookSubscription_SubscriptionInput {
    """
    The type of event to subscribe to.

    See \`Event\` implementations for a list of supported values.
    """
    eventTypeCode: String!
    """
    The optional hirer ID to receive events from.

    By default webhook subscriptions will send events from all hirers the partner has access to.
    Providing a hirer ID will filter events to the specified hirer.
    """
    hirerId: String
    """
    The maximum number of events that will be sent in each HTTP request.

    This number must be between 1 and 10 inclusive. Defaults to 10.
    """
    maxEventsPerAttempt: Int
    """
    The data source for the event.

    Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
    """
    schemeId: String!
    """
    The secret for signing webhooks.

    This must be specified if \`signingAlgorithmCode\` is not \`None\`.
    It is used as the key to generate a message authentication code for each request.

    The secret should be a random string with high entropy that is not reused for any other purpose.

    This field has a maximum length of 255 bytes in UTF-8 encoding.
    """
    secret: String
    """
    The algorithm for signing webhooks.

    Currently, two codes are defined:

    - \`None\` indicates no signature will be attached.
    - \`SeekHmacSha512\` indicates a HMAC SHA-512 hex digest will be attached to each request as a \`Seek-Signature\` header.

    A webhook's signature can be used to validate that the request originated from SEEK.

    Use a constant-time algorithm to validate the signature.
    Regular comparison methods like the \`==\` operator are susceptible to timing attacks.
    """
    signingAlgorithmCode: String!
    """
    The subscriber-owned URL where events will be sent to.
    """
    url: String!
  }

  """
  A currency supported by the SEEK API.

  This may be used when specifying a price or salary range.
  """
  type Currency {
    """
    A three-letter ISO 4217 currency code, in uppercase.
    """
    code: String!
  }

  """
  A monetary amount expressed as an integer in a specified minor currency unit.

  This is used to avoid floating point rounding errors when expressing prices & funds.
  """
  type CurrencyMinorUnit {
    """
    The three-letter ISO 4217 currency code, in uppercase.
    """
    currency: String!
    """
    A non-negative integer in the minor currency unit for the ISO currency code.

    For example, this is the number of cents in dollar-denominated currencies.
    """
    value: Int!
  }

  """
  A date string, such as 2007-12-03, compliant with the \`full-date\` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar Date

  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the \`date-time\` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar DateTime

  """
  The input parameter for the \`deleteCandidateProcessHistoryItem\` mutation.
  """
  input DeleteCandidateProcessHistoryItemInput {
    """
    The details of the  \`CandidateProcessHistoryItem\` to be deleted.
    """
    candidateProcessHistoryItem: DeleteCandidateProcessHistoryItem_CandidateProcessHistoryItemInput!
  }

  """
  The response from the \`deleteCandidateProcessHistoryItem\` mutation.
  """
  type DeleteCandidateProcessHistoryItemPayload {
    """
    The details of the \`CandidateProcessHistoryItem\` that was deleted.
    """
    candidateProcessHistoryItem: CandidateProcessHistoryItem!
  }

  """
  The details of the \`CandidateProcessHistoryItem\` to be deleted.
  """
  input DeleteCandidateProcessHistoryItem_CandidateProcessHistoryItemInput {
    """
    The identifier for the \`CandidateProcessHistoryItem\` to be deleted.
    """
    id: String!
  }

  """
  The input parameter for the \`deletePositionOpening\` mutation.
  """
  input DeletePositionOpeningInput {
    """
    The details of the position opening to be deleted.
    """
    positionOpening: DeletePositionOpening_PositionOpeningInput!
  }

  """
  The response from the \`deletePositionOpening\` mutation.
  """
  type DeletePositionOpeningPayload {
    """
    The details of the deleted position opening.
    """
    positionOpening: PositionOpening!
  }

  """
  The details of the position opening to be deleted.
  """
  input DeletePositionOpening_PositionOpeningInput {
    """
    The identifier for the \`PositionOpening\` to be deleted.
    """
    documentId: String!
  }

  """
  The input parameter for the \`deleteUnpostedPositionProfile\` mutation.
  """
  input DeleteUnpostedPositionProfileInput {
    """
    The details of the unposted position profile to be deleted.
    """
    positionProfile: DeleteUnpostedPositionProfile_PositionProfileInput!
  }

  """
  The response from the \`deleteUnpostedPositionProfile\` mutation.
  """
  type DeleteUnpostedPositionProfilePayload {
    """
    The details of the deleted unposted position profile.
    """
    positionProfile: UnpostedPositionProfile!
  }

  """
  The details of the unposted position profile to be deleted.
  """
  input DeleteUnpostedPositionProfile_PositionProfileInput {
    """
    The identifier for the unposted \`PositionProfile\`.
    """
    profileId: String!
  }

  """
  The input parameter for the \`deleteUploadedCandidate\` mutation.
  """
  input DeleteUploadedCandidateInput {
    """
    The details of the uploaded \`Candidate\` to be deleted.
    """
    candidate: DeleteUploadedCandidate_CandidateInput!
  }

  """
  The response from the \`deleteUploadedCandidate\` mutation.
  """
  type DeleteUploadedCandidatePayload {
    """
    The details of the uploaded candidate that was deleted.

    The uploaded candidate profile is available in the \`profiles\` field.
    """
    candidate: Candidate!
  }

  """
  The details of the uploaded candidate to be deleted.
  """
  input DeleteUploadedCandidate_CandidateInput {
    """
    The identifier for the uploaded \`Candidate\` to be deleted.
    """
    documentId: String!
  }

  """
  The input parameter for the \`deleteWebhookSubscription\` mutation.
  """
  input DeleteWebhookSubscriptionInput {
    """
    The details of the webhook subscription to be deleted.
    """
    webhookSubscription: DeleteWebhookSubscription_SubscriptionInput!
  }

  """
  The response from the \`deleteWebhookSubscription\` mutation.
  """
  type DeleteWebhookSubscriptionPayload {
    """
    The details of the deleted webhook subscription.
    """
    webhookSubscription: WebhookSubscription!
  }

  """
  The details of the webhook subscription to be deleted.
  """
  input DeleteWebhookSubscription_SubscriptionInput {
    """
    The identifier for the \`WebhookSubscription\`.
    """
    id: String!
  }

  """
  Instructions on how a candidate should be distributed.
  """
  type DistributionGuidelines {
    """
    The SEEK products that the candidate may be surfaced in.

    Currently, two codes are defined:

    - \`CandidateManagement\` indicates that the candidate may be viewed in SEEK Candidate Management.
    - \`ProactiveSourcing\` indicates that the candidate may be viewed in SEEK Talent Search.
    """
    seekProductCodes: [String!]!
  }

  """
  Instructions on how a candidate should be distributed.
  """
  input DistributionGuidelinesInput {
    """
    The SEEK products that the candidate may be surfaced in.

    Currently, one code is defined:

    - \`ProactiveSourcing\` indicates that the candidate may be viewed in SEEK Talent Search.
    """
    seekProductCodes: [String!]!
  }

  """
  The details documenting a person's attendance at an educational institution.
  """
  type EducationAttendance {
    """
    Additional free text descriptions of the person's attendance at the institution.

    This typically includes activities, honours, awards or specialities achieved during their study.
    """
    descriptions: [String!]!
    """
    The degrees which were awarded or in process at the institution.
    """
    educationDegrees: [EducationDegree!]!
    """
    The institution the person attended.
    """
    institution: Organization!
  }

  """
  The details of a student's degree.
  """
  type EducationDegree {
    """
    The date the degree was granted or is expected to be granted.

    This may only contain a year and optional month, e.g. \`2020\` or \`2020-06\`.
    If the date isn't known this will be \`null\`.
    """
    date: HistoryDate
    """
    The granted status of the degree.

    Currently, two statuses are defined:

    - \`InProgress\` indicates the student is still completing the degree.
    - \`Granted\` indicates the degree has been granted to the student.
    """
    degreeGrantedStatus: String!
    """
    The name of the degree.
    """
    name: String!
  }

  """
  A time period for which an associated object is effective.
  """
  type EffectiveTimePeriod {
    """
    The date which the associated object is no longer effective.

    For example, this corresponds to the expiry date of certifications.
    This will be \`null\` if the associated object does not expire.
    """
    validTo: HistoryDate
  }

  """
  An email address.
  """
  type Email {
    """
    The email address.
    """
    address: String!
  }

  """
  An email address.
  """
  input EmailInput {
    """
    The email address.

    This field has a maximum length of 255 bytes in UTF-8 encoding.
    """
    address: String!
  }

  """
  The details of a person's employment, work, or relevant experience.
  """
  type EmployerHistory {
    """
    The specific organization to which the person held positions.
    """
    organization: Organization!
    """
    The set of positions that the person held.
    """
    positionHistories: [PositionHistory!]!
  }

  """
  A signal that an action has been performed on the SEEK platform that may be of interest to an integration partner.

  Events can be delivered via:

  - Webhook, using the \`createWebhookSubscription\` mutation
  - GraphQL polling, using the paginated \`events\` query
  """
  interface Event {
    """
    The date & time the event was created.

    This is commonly linked to the creation of an object that can be retrieved from the SEEK API.

    The data source for this field differs by event type and scheme.
    This field has weak ordering guarantees, so it should not be used as a pagination argument.
    """
    createDateTime: DateTime!
    """
    The identifier for the \`Event\`.
    """
    id: ObjectIdentifier!
    """
    The data source for the event.

    Currently, only the \`seekAnz\` and \`seekAnzPublicTest\` schemes emit events.
    """
    schemeId: String!
    """
    The type of event.

    See \`Event\` implementations for a list of supported values.
    """
    typeCode: String!
    """
    A page of webhook attempts for the current event matching the specified criteria.

    A maximum of 100 webhook attempts can be returned in a single page.
    Additional webhook attempts can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest known attempt if no pagination arguments are provided.
    """
    webhookAttempts(
      """
      An opaque cursor to the earlier bounding webhook attempt.

      Resulting webhook attempts will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding webhook attempt.

      Resulting webhook attempts will _precede_ this cursor.
      """
      before: String
      """
      The additional \`WebhookAttempt\`-specific criteria to filter by.
      """
      filter: WebhookAttemptsFilterInput
      """
      The upper limit of webhook attempts to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess webhook attempts will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of webhook attempts to return from the end of the list.

      Excess webhook attempts will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
    ): WebhookAttemptsConnection!
  }

  """
  An event in a stream.
  """
  type EventEdge {
    """
    The opaque cursor to the event in the stream.

    This can be used as a subsequent pagination argument.
    """
    cursor: String!
    """
    The actual event.
    """
    node: Event!
    """
    The date & time the event was added to the stream.

    Initial \`afterDateTime\` and \`beforeDateTime\` filters apply to this field.
    """
    streamDateTime: DateTime!
  }

  """
  A page of events from a stream.
  """
  type EventsConnection {
    """
    The page of events and their corresponding cursors.
    """
    edges: [EventEdge!]!
    """
    The pagination metadata for this page of events.
    """
    pageInfo: PageInfo!
  }

  """
  The criteria to filter events by.

  These are \`Event\`-specific extensions on top of the standard pagination arguments \`before\`, \`after\`, \`first\` and \`last\`.
  """
  input EventsFilterInput {
    """
    The stream date & time that resulting events must succeed.

    This can be used to initiate the retrieval of paginated results.
    Subsequent queries should use the opaque cursors returned from \`EventsConnection\`.
    """
    afterDateTime: DateTime
    """
    The stream date & time that resulting events must precede.

    This can be used to initiate the retrieval of paginated results.
    Subsequent queries should use the opaque cursors returned from \`EventsConnection\`.
    """
    beforeDateTime: DateTime
    """
    Whether the event was successfully delivered via the specified webhook \`subscriptionId\`.

    This filter does not apply if \`subscriptionId\` is not specified.
    """
    deliveredIndicator: Boolean
    """
    The types of events to retrieve.

    See \`Event\` implementations for a list of supported values.
    """
    eventTypeCodes: [String!]
    """
    The subscription stream to retrieve events from.

    This can be used in combination with \`deliveredIndicator\` to identify events that were not successfully delivered through a particular webhook subscription.

    Omit this field to consume events solely through GraphQL polling.
    This will retrieve events from a persistent stream that is not associated with a webhook subscription.
    """
    subscriptionId: String
  }

  """
  A geographical coordinate.
  """
  type GeoLocation {
    """
    The latitude of the geographical location.
    """
    latitude: Float!
    """
    The longitude of the geographical location.
    """
    longitude: Float!
  }

  """
  A geographical coordinate.
  """
  input GeoLocationInput {
    """
    The latitude of the geographical location.
    """
    latitude: Float!
    """
    The longitude of the geographical location.
    """
    longitude: Float!
  }

  """
  The event signaling that a hirer relationship has been added or removed.
  """
  type HirerRelationshipChangedEvent implements Event {
    """
    The date & time the hirer relationship was changed.

    This field has weak ordering guarantees, so it should not be used as a pagination argument.
    """
    createDateTime: DateTime!
    """
    The optional hiring organization for whom the relationship was changed.

    This field is only accessible while you have an active relationship with the hirer.
    If all relationships have been removed, it will return null along with a \`FORBIDDEN\` error.
    """
    hirer: HiringOrganization
    """
    The identifier for the hiring organization for whom the relationship was changed.
    """
    hirerId: String!
    """
    The identifier for the \`Event\`.
    """
    id: ObjectIdentifier!
    """
    The data source for the event.

    Currently, only the \`seekAnz\` and \`seekAnzPublicTest\` schemes emit \`HirerRelationshipChanged\` events.
    """
    schemeId: String!
    """
    The type of event, i.e. \`HirerRelationshipChanged\`.
    """
    typeCode: String!
    """
    A page of webhook attempts for the current event matching the specified criteria.

    A maximum of 100 webhook attempts can be returned in a single page.
    Additional webhook attempts can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest known attempt if no pagination arguments are provided.
    """
    webhookAttempts(
      """
      An opaque cursor to the earlier bounding webhook attempt.

      Resulting webhook attempts will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding webhook attempt.

      Resulting webhook attempts will _precede_ this cursor.
      """
      before: String
      """
      The additional \`WebhookAttempt\`-specific criteria to filter by.
      """
      filter: WebhookAttemptsFilterInput
      """
      The upper limit of webhook attempts to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess webhook attempts will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of webhook attempts to return from the end of the list.

      Excess webhook attempts will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
    ): WebhookAttemptsConnection!
  }

  """
  An organization hiring for an open position.
  """
  type HiringOrganization {
    """
    The identifier for the \`HiringOrganization\`.
    """
    id: ObjectIdentifier!
    """
    The name of the hiring organization.
    """
    name: String!
    """
    The legacy SEEK ANZ advertiser ID.

    This is a numeric identifier used by legacy Job Posting & Application Export APIs in the \`seekAnz\` scheme.
    For organizations in other schemes this will be \`null\`.
    """
    seekAnzAdvertiserId: Int
    """
    The capabilities of the requesting partner to act on behalf of the hiring organization.

    This will be \`null\` for agencies; the SEEK API does not support acting on behalf of an agency.
    """
    seekApiCapabilities: HiringOrganizationApiCapabilities
  }

  """
  The capabilities of the requesting partner to act on behalf of a hirer.

  This provides a read-only view of the configuration of a SEEK hirer for the current partner.
  """
  type HiringOrganizationApiCapabilities {
    """
    The supported methods of applying to job ads posted by the hirer.

    All SEEK hirers can use SEEK's native apply functionality by omitting the \`ApplicationMethod\` object when posting.
    This enumerates additional application methods SEEK has configured for the hirer.

    Currently, one code is defined:

    - \`ApplicationUri\` indicates that job ads can link out to an external apply form.
    """
    applicationMethodCodes: [String!]!
    """
    The active relationship types between the requesting partner and the hirer.

    Currently, three codes are defined:

    - \`ApplicationExport\` enables exporting candidate applications from SEEK's native apply functionality.

    - \`JobPosting\` enables posting job ads to the SEEK job board.

    - \`ProactiveSourcing\` enables hirers to proactively search for and connect with suitable candidates.
    """
    relationshipTypeCodes: [String!]!
  }

  """
  A hirer in a paginated list.
  """
  type HiringOrganizationEdge {
    """
    The opaque cursor to the hirer.

    This can be used as a subsequent pagination argument.
    """
    cursor: String!
    """
    The actual hirer.
    """
    node: HiringOrganization!
  }

  """
  A page of hirers.
  """
  type HiringOrganizationsConnection {
    """
    The page of hirers and their corresponding cursors.
    """
    edges: [HiringOrganizationEdge!]!
    """
    The pagination metadata for this page of hirers.
    """
    pageInfo: PageInfo!
  }

  """
  The criteria to filter hirers by.

  These are \`HiringOrganization\`-specific extensions on top of the standard pagination arguments \`before\`, \`after\`, \`first\` and \`last\`.
  """
  input HiringOrganizationsFilterInput {
    """
    Filters on hirer names containing the provided case-insensitive substring.

    This is intended to support ad-hoc searches for hirers by name.
    """
    nameSearch: String
    """
    Filters on relationship types between the hirer and requesting partner.

    See the \`HiringOrganizationApiCapabilities.relationshipTypeCodes\` documentation for a list of relationship types.

    If this is not provided then all related hirers are returned.
    """
    relationshipTypeCodes: [String!]
  }

  """
  A date string compliant with the ISO 8601 "year", "year and month" or "complete date" formats.

  For example, \`"2020"\`, \`"2020-05"\` and \`"2020-05-27"\` are all valid for \`HistoryDate\`.

  This is used for dates in a candidate's position & employment histories where the precise month or day may not have been provided.
  """
  scalar HistoryDate

  """
  The input parameter for the \`jobCategories\` query.
  """
  input JobCategories_PositionProfileInput {
    """
    An array of identifiers for the position's \`Location\`s.
    """
    positionLocation: [String!]!
  }

  """
  The category of a job's occupation.
  """
  type JobCategory {
    """
    An array of child job categories.

    These are more specific categories that belong to this general classification.
    """
    children: [JobCategory!]
    """
    The identifier for the \`JobCategory\`.
    """
    id: ObjectIdentifier!
    """
    Name of the job category.
    """
    name: String!
    """
    The parent job category.

    This is a more general classification that this category belongs to.
    It will be \`null\` for root categories that do not belong to a more general classification.
    """
    parent: JobCategory
  }

  """
  A job category with information of the suggested choice.
  """
  type JobCategorySuggestionChoice {
    """
    The confidence in the returned job category based on the suggestion input.

    This is a floating point value ranging from 0 (lowest) to 1 (highest).
    """
    confidence: Float!
    """
    The job category information of the suggestion choice.

    This will be a child job category suitable for posting a position profile.
    """
    jobCategory: JobCategory!
  }

  """
  The input parameter for the \`jobCategorySuggestions\` query.
  """
  input JobCategorySuggestionPositionProfileInput {
    """
    The descriptions for the position profile.

    Currently, only the \`AdvertisementDetails\` description is used.
    Other descriptions will be accepted but are ignored when determining the relevance of suggestion.

    The job category suggestion algorithm is designed to work with the complete advertisement details as they would appear on the final job ad.
    Providing incomplete or placeholder text in this field may result in irrelevant suggestions.
    """
    positionFormattedDescriptions: [PositionFormattedDescriptionInput!]
    """
    An array of identifiers for the position's \`Location\`s.
    """
    positionLocation: [String!]!
    """
    An array of identifiers for the \`HiringOrganization\`s that have the position.

    Information such as the organization's domicile can be used to refine the returned suggestions.
    """
    positionOrganizations: [String!]
    """
    The position title.
    """
    positionTitle: String!
  }

  """
  A physical location with a persistent identifier.
  """
  type Location {
    """
    An array of child locations.

    This is always \`null\` regardless of the existence of child locations.
    """
    children: [Location!] @deprecated(reason: "Not implemented.")
    """
    The contextual name of the location, e.g. "Richmond VIC 3121 AU".

    This name is sufficient to unambiguously identify the location to a hirer.
    """
    contextualName: String!
    """
    The two-letter ISO 3166-1:2013 country code, in uppercase.
    """
    countryCode: String!
    """
    A list of currencies used within this location.

    Locations with unsupported currencies will default to a SEEK supported currency.

    At least one currency will be provided.

    As most countries only use a single currency, the first item in the array can be used to preselect the default currency in a job posting flow.
    """
    currencies: [Currency!]!
    """
    The identifier for the \`Location\`.
    """
    id: ObjectIdentifier!
    """
    The location name, e.g. "Richmond".

    This name is ambiguous without the context of its parent location.
    """
    name: String!
    """
    The parent location.
    """
    parent: Location
  }

  """
  A suggested location.
  """
  type LocationSuggestion {
    """
    Location information of the choice.
    """
    location: Location!
  }

  """
  The schema's entry-point for mutations.

  This acts as the public, top-level API from which all mutation queries must start.
  """
  type Mutation {
    """
    A placeholder string.
    """
    _empty: String @deprecated(reason: "Placeholder only")
    """
    Asynchronously closes a live job ad.

    The job ad will be removed from the job board and no refund will be issued.
    The \`PositionProfile\` and its associated candidate applications will be available for 6 months after its close date.

    Once the job ad has been closed a \`PositionProfileClosed\` event will be emitted.
    """
    closePostedPositionProfile(
      input: ClosePostedPositionProfileInput!
    ): ClosePostedPositionProfilePayload
    """
    Creates a new questionnaire.

    The \`input\` must not exceed 56 KiB in length.

    This mutation accepts browser tokens that include the \`mutate:application-questionnaires\` scope.
    """
    createApplicationQuestionnaire(
      input: CreateApplicationQuestionnaireInput!
    ): CreateApplicationQuestionnairePayload!
    """
    Adds a process history item to an uploaded candidate's profile.
    """
    createCandidateProcessHistoryItem(
      input: CreateCandidateProcessHistoryItemInput!
    ): CreateCandidateProcessHistoryItemPayload!
    """
    Creates a new position opening.

    Every position profile belongs to a position opening.
    Up to 25 position profiles may belong to the same position opening.
    """
    createPositionOpening(
      input: CreatePositionOpeningInput!
    ): CreatePositionOpeningPayload!
    """
    Creates a new unposted position profile for an opening.

    If the position opening already contains 25 position profiles this will fail with a \`BAD_USER_INPUT\` error.
    """
    createUnpostedPositionProfileForOpening(
      input: CreateUnpostedPositionProfileForOpeningInput!
    ): CreateUnpostedPositionProfileForOpeningPayload!
    """
    Creates a new webhook subscription.
    """
    createWebhookSubscription(
      input: CreateWebhookSubscriptionInput!
    ): CreateWebhookSubscriptionPayload!
    """
    Deletes a candidate process history item from SEEK's systems.
    """
    deleteCandidateProcessHistoryItem(
      input: DeleteCandidateProcessHistoryItemInput!
    ): DeleteCandidateProcessHistoryItemPayload
    """
    Deletes an empty position opening.

    Each position profile that belongs to a position opening must be deleted before the position opening can be deleted.
    """
    deletePositionOpening(
      input: DeletePositionOpeningInput!
    ): DeletePositionOpeningPayload
    """
    Deletes an unposted position profile.
    """
    deleteUnpostedPositionProfile(
      input: DeleteUnpostedPositionProfileInput!
    ): DeleteUnpostedPositionProfilePayload
    """
    Deletes an uploaded candidate and their profile from SEEK's systems.

    This will also delete all \`CandidateProcessHistoryItem\`s belonging to the candidate profile.
    """
    deleteUploadedCandidate(
      input: DeleteUploadedCandidateInput!
    ): DeleteUploadedCandidatePayload
    """
    Deletes an existing webhook subscription.
    """
    deleteWebhookSubscription(
      input: DeleteWebhookSubscriptionInput!
    ): DeleteWebhookSubscriptionPayload
    """
    Asynchronously posts a job ad for a new position opening.

    This combines the \`createPositionOpening\` & \`postPositionProfileForOpening\` mutations in a single operation.
    """
    postPosition(input: PostPositionInput!): PostPositionPayload!
    """
    Asynchronously posts a job ad for an existing position opening.

    If the position opening already contains 25 position profiles this will fail with a \`BAD_USER_INPUT\` error.

    Once the job ad has been posted a \`PositionProfilePosted\` event will be emitted.
    """
    postPositionProfileForOpening(
      input: PostPositionProfileForOpeningInput!
    ): PostPositionProfileForOpeningPayload!
    """
    Replays a webhook subscription.

    This causes any matching events to be requeued for delivery.

    Resending occurs asynchronously in a background task.
    """
    replayWebhookSubscription(
      input: ReplayWebhookSubscriptionInput!
    ): ReplayWebhookSubscriptionPayload
    """
    Updates a candidate process history item.
    """
    updateCandidateProcessHistoryItem(
      input: UpdateCandidateProcessHistoryItemInput!
    ): UpdateCandidateProcessHistoryItemPayload
    """
    Replaces an existing position opening's person contacts.
    """
    updatePositionOpeningPersonContacts(
      input: UpdatePositionOpeningPersonContactsInput!
    ): UpdatePositionOpeningPersonContactsPayload
    """
    Updates the status of a position opening.

    This status is provided to help hirers manage position openings.
    The SEEK API does not use the position opening's status itself.
    """
    updatePositionOpeningStatus(
      input: UpdatePositionOpeningStatusInput!
    ): UpdatePositionOpeningStatusPayload
    """
    Asynchronously updates a live job ad.

    The position profile's existing fields will be replaced with the provided input fields.
    This will update the live job ad under its current URL.
    """
    updatePostedPositionProfile(
      input: UpdatePostedPositionProfileInput!
    ): UpdatePostedPositionProfilePayload
    """
    Updates an existing unposted position profile.
    """
    updateUnpostedPositionProfile(
      input: UpdateUnpostedPositionProfileInput!
    ): UpdateUnpostedPositionProfilePayload
    """
    Updates the personal details of an uploaded candidate.
    """
    updateUploadedCandidatePerson(
      input: UpdateUploadedCandidatePersonInput!
    ): UpdateUploadedCandidatePersonPayload
    """
    Updates the actions associated with an uploaded candidate profile.
    """
    updateUploadedCandidateProfileActions(
      input: UpdateUploadedCandidateProfileActionsInput!
    ): UpdateUploadedCandidateProfileActionsPayload
    """
    Updates the dates associated with an uploaded candidate profile.
    """
    updateUploadedCandidateProfileDates(
      input: UpdateUploadedCandidateProfileDatesInput!
    ): UpdateUploadedCandidateProfileDatesPayload
    """
    Updates the position preferences associated with an uploaded candidate profile.
    """
    updateUploadedCandidateProfilePositionPreferences(
      input: UpdateUploadedCandidateProfilePositionPreferencesInput!
    ): UpdateUploadedCandidateProfilePositionPreferencesPayload
    """
    Updates an existing webhook subscription's delivery configuration.

    This modifies fields related to the URL and payload of an existing webhook subscription.
    Changes may take up to half an hour to take effect.

    The fields that determine which events are to be delivered are immutable.
    A new webhook subscription should be created for such cases.
    """
    updateWebhookSubscriptionDeliveryConfiguration(
      input: UpdateWebhookSubscriptionDeliveryConfigurationInput!
    ): UpdateWebhookSubscriptionDeliveryConfigurationPayload
    """
    Updates an existing webhook subscription's signing configuration.

    This modifies fields related to the signature of an existing webhook subscription.
    Changes may take up to half an hour to take effect.
    """
    updateWebhookSubscriptionSigningConfiguration(
      input: UpdateWebhookSubscriptionSigningConfigurationInput!
    ): UpdateWebhookSubscriptionSigningConfigurationPayload
    """
    Uploads a candidate and their profile into SEEK's systems.
    """
    uploadCandidate(input: UploadCandidateInput!): UploadCandidatePayload!
  }

  """
  An opaque identifier for GraphQL objects.

  The \`value\` has a maximum length of 255 characters,
  and will always be representable with 255 bytes in UTF-8 encoding.
  """
  type ObjectIdentifier {
    """
    The identifier itself.

    This has a maximum length of 255 characters,
    and will always be representable with 255 bytes in UTF-8 encoding.
    """
    value: String!
  }

  """
  Basic information to identify and reference a specific organization.
  """
  type Organization {
    """
    The human readable name of the organization.
    """
    name: String!
  }

  """
  Basic information to identify and reference a specific organization.
  """
  input OrganizationInput {
    """
    The human readable name of the organization.
    """
    name: String!
  }

  """
  Pagination metadata for a result list.

  This is compliant with the _Relay Cursor Connections Specification_:

  <https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo>
  """
  type PageInfo {
    """
    An opaque string cursor for retrieving the next page of results.
    """
    endCursor: String
    """
    Whether there is a next page of results at the time of retrieval.
    """
    hasNextPage: Boolean!
    """
    Whether there is a previous page of results at the time of retrieval.
    """
    hasPreviousPage: Boolean!
    """
    An opaque string cursor for retrieving the previous page of results.
    """
    startCursor: String
  }

  """
  A partner organization for a \`self\` query.
  """
  type PartnerOrganization {
    """
    Whether the querying partner has been approved to self-service their live SEEK API client credentials.

    SEEK will approve partners once they have demonstrated progress through the development process.
    When true, administrative users will be able to issue and rotate client credentials in the Developer Dashboard.
    """
    credentialSelfServiceApprovedIndicator: Boolean!
    """
    The name of the querying partner.
    """
    name: String!
  }

  """
  The primary method of payment and the interval in which it is paid for a position.
  """
  type PayType {
    """
    A code classifying the primary method of payment for a position.
    """
    basisCode: String!
    """
    A code classifying the interval the remuneration amounts are calculated over.
    """
    intervalCode: String!
    """
    A human-readable description of the pay type.
    """
    label: String!
  }

  """
  A skill or competency asserted by the candidate.
  """
  type PersonCompetency {
    """
    The human readable name of the competency.
    """
    competencyName: String!
  }

  """
  The name of a person including a breakdown of name components.
  """
  type PersonName {
    """
    The family name (or surname) of a person, if provided.

    This field is redacted and a null value is returned when a candidate or job application is deleted.
    This redaction is limited to candidate data objects within SEEK optimized apply.
    """
    family: String
    """
    The formatted name of a person, as it would be written out together.

    This field is redacted and a static 'redacted' text is returned when a candidate or job application is deleted.
    This redaction is limited to candidate data objects within SEEK optimized apply.
    """
    formattedName: String!
    """
    The given name of a person, if provided.

    This field is redacted and a static 'redacted' text is returned when a candidate or job application is deleted.
    This redaction is limited to candidate data objects within SEEK optimized apply.
    """
    given: String
  }

  """
  The name of a person associated with an object.
  """
  input PersonNameInput {
    """
    The optional family name (or surname) of a person.
    """
    family: String
    """
    The formatted name of a person, as it would be written out together.
    """
    formattedName: String!
    """
    The optional given name of a person.
    """
    given: String
  }

  """
  The phone number of a person.
  """
  type Phone {
    """
    The phone number represented as a human readable string.
    """
    formattedNumber: String!
  }

  """
  The phone number of a person.
  """
  input PhoneInput {
    """
    The phone number represented as a human readable string.
    """
    formattedNumber: String!
  }

  """
  A formatted description of the position profile.
  """
  type PositionFormattedDescription {
    """
    The HTML content of the description.
    """
    content: String!
    """
    The description type.
    """
    descriptionId: PositionFormattedDescriptionIdentifier!
  }

  """
  A description type identifier.

  This specifies the meaning of the description and determines where it's presented to the candidate.
  """
  type PositionFormattedDescriptionIdentifier {
    """
    The description type.

    Currently, three identifiers are defined:

    - \`AdvertisementDetails\` is the detailed description of the position that appears on the job ad.
    - \`SearchBulletPoint\` is a highlight or selling point of the position that appears in search results.
      This will not appear on the job ad details page.
      SEEK ANZ allows up to three search bullet points when \`SeekAnzAdProductFeatures\`'s \`searchBulletPointsIndicator\` is true.
    - \`SearchSummary\` is a short description that appears in search results.
      This will not appear on the job ad details page.
    """
    value: String!
  }

  """
  A formatted description of the position profile.
  """
  input PositionFormattedDescriptionInput {
    """
    The HTML content of the description.

    The maximum length differs by \`descriptionId\`:

      - \`AdvertisementDetails\` has a maximum length of 15,000 characters.
      - \`SearchBulletPoint\` has a maximum length of 80 characters per bullet point.
      - \`SearchSummary\` has a maximum length of 150 characters.

    Scheme requirements:

    - The \`seekAnz\` scheme supports the following HTML tags in \`AdvertisementDetails\`:

      - \`a\` (HTTPS only. Available on a per hirer basis. Hirer must contact SEEK to enable.)
      - \`b\`
      - \`br\`
      - \`div\`
      - \`em\`
      - \`h2\`
      - \`li\`
      - \`ol\`
      - \`p\`
      - \`strong\`
      - \`ul\`

      Other descriptions will have all HTML tags stripped.
    """
    content: String!
    """
    The description type.

    Currently, three identifiers are defined:

    - \`AdvertisementDetails\` is the detailed description of the position that appears on the job ad.

    - \`SearchBulletPoint\` is a highlight or selling point of the position that appears in search results.
      SEEK ANZ allows up to three search bullet points when \`SeekAnzAdProductFeatures.searchBulletPointsIndicator\` is true.
      The length limit applies to each search bullet point separately.

    - \`SearchSummary\` is a short description that appears in search results.

    Scheme requirements:

    - The \`seekAnz\` scheme requires \`AdvertisementDetails\` and \`SearchSummary\` to be included.
    """
    descriptionId: String!
  }

  """
  The details about a person's tenure within the position.
  """
  type PositionHistory {
    """
    Whether the person is still working at the organization, if known.
    """
    current: Boolean
    """
    An array of descriptions of the person's responsibilities, skills and achievements in the position.
    """
    descriptions: [String!]!
    """
    The end date of the position if known.

    This may only contain the year and month, e.g. \`2020-01\`.
    """
    end: HistoryDate
    """
    The start date of the position.

    This may only contain the year and month, e.g. \`2019-01\`.
    """
    start: HistoryDate!
    """
    The title that the person held for this position.
    """
    title: String!
  }

  """
  A job requisition or position opening within an organization.

  This is a container object that groups multiple \`PositionProfile\`s together along with their owner.
  """
  type PositionOpening {
    """
    The identifier for the \`PositionOpening\`.
    """
    documentId: ObjectIdentifier!
    """
    A page of position profiles that belong to the opening.

    A maximum of 50 position profiles can be returned in a single page.
    Additional position profiles can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest known position profile if no pagination arguments are provided.
    """
    paginatedPositionProfiles(
      """
      An opaque cursor to the earlier bounding page.

      Resulting position profiles will _succeed_ this cursor.
      """
      after: String
      """
      The upper limit of position profiles to return from the start of the list.

      Defaults to 10 if \`first\` is not specified.
      Excess position profiles will be trimmed from the end of the list.
      """
      first: Int
    ): PositionProfileConnection!
    """
    An array of up to 25 profiles for the position opening.

    Each profile represents a posted job ad or an unposted internal requisition associated with this opening.
    """
    positionProfiles: [PositionProfile!]!
      @deprecated(
        reason: "There is no guarantee all profiles will be returned. Use paginatedPositionProfiles instead."
      )
    """
    The party that owns the position opening.

    This may be different from the hiring organization if the position opening was created by a recruitment agency outside of the SEEK API.
    """
    postingRequester: PostingRequester!
    """
    An optional field for storing additional data with a \`PositionOpening\`.

    The metadata is not used by SEEK and won't be seen by hirers or candidates.

    This field has a maximum length of 1,000 characters.
    """
    seekPartnerMetadata: String
    """
    The status of the position opening.

    Currently, three codes are defined:

    - \`Incomplete\` indicates the position opening is in a draft state.
    - \`Active\` indicates the position opening is open.
    - \`Closed\` indicates the position opening has been closed.
    """
    statusCode: String!
  }

  """
  A page of position openings.
  """
  type PositionOpeningConnection {
    """
    The page of position openings and their corresponding cursors.

    This list may be empty.
    """
    edges: [PositionOpeningEdge!]!
    """
    The pagination metadata for this page of position openings.
    """
    pageInfo: PageInfo!
  }

  """
  A position opening in a paginated list.
  """
  type PositionOpeningEdge {
    """
    The opaque cursor to the position opening.

    This can be used as a subsequent pagination argument.
    """
    cursor: String!
    """
    The actual position opening.
    """
    node: PositionOpening!
  }

  """
  The criteria to filter position openings by.

  These are \`PositionOpening\`-specific extensions on top of the standard pagination arguments \`after\` and \`first\`.
  """
  input PositionOpeningsFilterInput {
    """
    Optionally filter results to only include position openings with the specified status code.

    Currently, three codes are defined:

    - \`Incomplete\` indicates the position opening is in a draft state.
    - \`Active\` indicates the position opening is open.
    - \`Closed\` indicates the position opening has been closed.
    """
    statusCode: String
  }

  """
  A candidate's preferences in an ideal position.
  """
  type PositionPreference {
    """
    An array of locations which are preferred by the candidate.

    The locations are ordered in descending preference.
    """
    locations: [PreferredLocation!]!
  }

  """
  A candidate's preferences in an ideal position.
  """
  input PositionPreferenceInput {
    """
    An array of locations which are preferred by the candidate.

    The locations are ordered in descending preference.

    A maximum of 5 locations may be provided.
    """
    locations: [PreferredLocationInput!]!
  }

  """
  A profile of a position opening.

  This contains information of how a position opening is presented on a job board or as an internal requisition.
  """
  interface PositionProfile {
    """
    The occupational categories of the job.
    """
    jobCategories: [JobCategory!]!
    """
    The salary or compensation offered for the position.
    """
    offeredRemunerationPackage: RemunerationPackage!
    """
    An array of formatted position profile descriptions.
    """
    positionFormattedDescriptions: [PositionFormattedDescription!]!
    """
    The locations of the position.
    """
    positionLocation: [Location!]!
    """
    The \`PositionOpening\` that this profile was created under.
    """
    positionOpening: PositionOpening!
    """
    An array of identifiers for the \`HiringOrganization\`s that have the position.
    """
    positionOrganizations: [HiringOrganization!]!
    """
    An array of codes for the offered schedules for the position.

    Currently, two codes are defined:

    - \`FullTime\` indicates a full-time schedule.
    - \`PartTime\` indicates a part-time schedule.

    If the offered schedule isn't known this will be \`null\`.
    """
    positionScheduleTypeCodes: [String!]
    """
    A short phrase describing the position as it would be listed on a business card or in a company directory.
    """
    positionTitle: String!
    """
    A unique resource identifier the position profile.

    - For posted position profiles, this is the public web URL of the posted job ad.

    - For unposted position profiles, this is the profile's object identifier.
    """
    positionUri: String!
    """
    The instructions related to posting the job ad.
    """
    postingInstructions: [PostingInstruction!]!
    """
    The identifier for the \`PositionProfile\`.
    """
    profileId: ObjectIdentifier!
    """
    A work type code for the \`seekAnz\` scheme.

    Currently, four codes are defined:

    - \`Casual\` indicates a casual position.
    - \`ContractTemp\` indicates a fixed-length contract position.
    - \`FullTime\` indicates a full-time position.
    - \`PartTime\` indicates a part-time position.

    For positions in other schemes this will be \`null\`.
    """
    seekAnzWorkTypeCode: String
    """
    The set of questions presented to candidates during an application.

    The questionnaire responses will be available as \`CandidateProfile.seekQuestionnaireSubmission\` on the candidate's application profile.
    """
    seekApplicationQuestionnaire: ApplicationQuestionnaire
    """
    An optional opaque billing reference.

    This appears on the invoice when SEEK bills the hirer for a job ad.
    """
    seekBillingReference: String
    """
    Whether the position profile was created by the requesting partner.

    If your software cannot ingest objects that are created by another source,
    this can be used to filter out such position profiles.

    This indicator is unavailable where we cannot cheaply determine the source of the position profile.
    \`null\` values should not be filtered out.
    See specific implementations for further details.
    """
    seekCreatedBySelfIndicator: Boolean
    """
    An optional hirer-provided opaque job reference.
    """
    seekHirerJobReference: String
    """
    An optional field for storing additional data with a \`PositionProfile\`.

    The metadata is not used by SEEK and won't be seen by hirers or candidates.

    This field has a maximum length of 1,000 characters.
    """
    seekPartnerMetadata: String
    """
    The type of position profile.

    See \`PositionProfile\` implementations for a list of supported values.
    """
    seekTypeCode: String!
    """
    The video to render within the job ad.
    """
    seekVideo: SeekVideo
  }

  """
  The event signaling that a posted \`PositionProfile\` has been closed.
  """
  type PositionProfileClosedEvent implements Event {
    """
    The date & time the \`PositionProfile\` was closed.

    \`PositionProfile\`s are closed automatically when they reach their \`PostingInstruction.end\` date.
    They can also be closed early using the \`closePostedPositionProfile\` mutation.

    This field has weak ordering guarantees, so it should not be used as a pagination argument.
    """
    createDateTime: DateTime!
    """
    The identifier for the \`Event\`.
    """
    id: ObjectIdentifier!
    """
    The \`PositionProfile\` that was closed.

    This may return null if the \`PositionProfile\` has been closed for an extended period of time.

    This field is only accessible while you have an active \`ApplicationExport\` or \`JobPosting\` relationship with the hirer.
    If these relationships have been removed, it will return null along with a \`FORBIDDEN\` error.
    """
    positionProfile: PostedPositionProfile
    """
    The identifier for the \`PositionProfile\` that was closed.
    """
    positionProfileId: String!
    """
    The data source for the event.

    Currently, only the \`seekAnz\` and \`seekAnzPublicTest\` schemes emit \`PositionProfileClosed\` events.
    """
    schemeId: String!
    """
    The type of event, i.e. \`PositionProfileClosed\`.
    """
    typeCode: String!
    """
    A page of webhook attempts for the current event matching the specified criteria.

    A maximum of 100 webhook attempts can be returned in a single page.
    Additional webhook attempts can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest known attempt if no pagination arguments are provided.
    """
    webhookAttempts(
      """
      An opaque cursor to the earlier bounding webhook attempt.

      Resulting webhook attempts will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding webhook attempt.

      Resulting webhook attempts will _precede_ this cursor.
      """
      before: String
      """
      The additional \`WebhookAttempt\`-specific criteria to filter by.
      """
      filter: WebhookAttemptsFilterInput
      """
      The upper limit of webhook attempts to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess webhook attempts will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of webhook attempts to return from the end of the list.

      Excess webhook attempts will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
    ): WebhookAttemptsConnection!
  }

  """
  A page of position profiles.
  """
  type PositionProfileConnection {
    """
    The page of position profiles and their corresponding cursors.

    This list may be empty.
    """
    edges: [PositionProfileEdge!]!
    """
    The pagination metadata for this page of position profiles.
    """
    pageInfo: PageInfo!
  }

  """
  A position profile in a paginated list.
  """
  type PositionProfileEdge {
    """
    The opaque cursor to the position profile.

    This can be used as a subsequent pagination argument.
    """
    cursor: String!
    """
    The actual position profile.
    """
    node: PositionProfile!
  }

  """
  The event signaling that a \`PositionProfile\` has been posted.
  """
  type PositionProfilePostedEvent implements Event {
    """
    The date & time the \`PositionProfile\` was considered as successfully posted inside of SEEK's internal systems.

    This field has weak ordering guarantees, so it should not be used as a pagination argument.
    """
    createDateTime: DateTime!
    """
    The identifier for the \`Event\`.
    """
    id: ObjectIdentifier!
    """
    The \`PositionProfile\` that was posted.

    This may return null if the \`PositionProfile\` has been closed for an extended period of time.

    This field is only accessible while you have an active \`ApplicationExport\` or \`JobPosting\` relationship with the hirer.
    If these relationships have been removed, it will return null along with a \`FORBIDDEN\` error.
    """
    positionProfile: PostedPositionProfile
    """
    The identifier for the \`PositionProfile\` that was posted.
    """
    positionProfileId: String!
    """
    The data source for the event.

    Currently, only the \`seekAnz\` and \`seekAnzPublicTest\` schemes emit \`PositionProfilePosted\` events.
    """
    schemeId: String!
    """
    The type of event, i.e. \`PositionProfilePosted\`.
    """
    typeCode: String!
    """
    A page of webhook attempts for the current event matching the specified criteria.

    A maximum of 100 webhook attempts can be returned in a single page.
    Additional webhook attempts can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest known attempt if no pagination arguments are provided.
    """
    webhookAttempts(
      """
      An opaque cursor to the earlier bounding webhook attempt.

      Resulting webhook attempts will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding webhook attempt.

      Resulting webhook attempts will _precede_ this cursor.
      """
      before: String
      """
      The additional \`WebhookAttempt\`-specific criteria to filter by.
      """
      filter: WebhookAttemptsFilterInput
      """
      The upper limit of webhook attempts to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess webhook attempts will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of webhook attempts to return from the end of the list.

      Excess webhook attempts will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
    ): WebhookAttemptsConnection!
  }

  """
  The information required to post a job ad for a newly created position.
  """
  input PostPositionInput {
    """
    The details of the position opening to be created.
    """
    positionOpening: CreatePositionOpening_PositionOpeningInput!
    """
    A profile of a position opening.
    """
    positionProfile: PostPosition_PositionProfileInput!
  }

  """
  The response from the \`postPosition\` mutation.
  """
  union PostPositionPayload =
      PostPositionPayload_Conflict
    | PostPositionPayload_Success

  """
  The conflict result for the \`postPosition\` mutation.

  The  \`idempotencyId\` provided as part of \`CreatePostingInstructionInput\` while creating a position profile must be unique.
  Providing the same \`idempotencyId\` will result in a conflict.
  """
  type PostPositionPayload_Conflict {
    """
    Attributes of the conflicting position opening.
    """
    conflictingPositionOpening: PostPosition_PositionOpeningPayload!
    """
    Attributes of the conflicting position profile.
    """
    conflictingPositionProfile: PostPosition_PositionProfilePayload!
  }

  """
  The success result for the \`postPosition\` mutation.
  """
  type PostPositionPayload_Success {
    """
    Attributes of the newly created position opening.
    """
    positionOpening: PostPosition_PositionOpeningPayload!
    """
    Attributes of the newly created position profile for the job ad.
    """
    positionProfile: PostPosition_PositionProfilePayload!
  }

  """
  The input parameter for the \`postPositionProfileForOpening\` mutation.
  """
  input PostPositionProfileForOpeningInput {
    """
    A profile for posting a job ad against an existing position opening.

    This contains information of how a position opening is presented on a given channel or job board.
    """
    positionProfile: PostPositionProfileForOpeningPositionProfileInput!
  }

  """
  The response from the \`postPositionProfileForOpening\` mutation.
  """
  union PostPositionProfileForOpeningPayload =
      PostPositionProfileForOpeningPayload_Conflict
    | PostPositionProfileForOpeningPayload_Success

  """
  The conflict result for the \`postPositionProfileForOpening\` mutation.

  The  \`idempotencyId\` provided as part of \`CreatePostingInstructionInput\` while creating a position profile must be unique.
  Providing the same \`idempotencyId\` will result in a conflict.
  """
  type PostPositionProfileForOpeningPayload_Conflict {
    """
    Attributes of the conflicting position profile.
    """
    conflictingPositionProfile: PostPositionProfileForOpening_PositionProfilePayload!
  }

  """
  The success result for the \`postPositionProfileForOpening\` mutation.
  """
  type PostPositionProfileForOpeningPayload_Success {
    """
    Attributes of the newly created position profile for the job ad.
    """
    positionProfile: PostPositionProfileForOpening_PositionProfilePayload!
  }

  """
  A profile for posting a job ad against an existing position opening.

  This contains information of how a position opening is presented on a given channel or job board.
  """
  input PostPositionProfileForOpeningPositionProfileInput {
    """
    An array of \`JobCategory\` identifiers.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one identifier for a child job category.
    """
    jobCategories: [String!]!
    """
    The salary or compensation offered for the position.
    """
    offeredRemunerationPackage: RemunerationPackageInput!
    """
    An array of formatted position profile descriptions.
    """
    positionFormattedDescriptions: [PositionFormattedDescriptionInput!]!
    """
    An array of \`Location\` identifiers.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element.
    """
    positionLocation: [String!]!
    """
    The identifier for the \`PositionOpening\` that this position profile belongs to.
    """
    positionOpeningId: String!
    """
    An array of identifiers for the \`HiringOrganization\`s that have the position.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element that matches the position opening's \`PostingRequester.id\`.
    """
    positionOrganizations: [String!]!
    """
    An array of codes for the offered schedules for the position.

    Currently, two codes are defined:

    - \`FullTime\` indicates a full-time schedule.
    - \`PartTime\` indicates a part-time schedule.

    Omit this field for the \`seekAnz\` scheme.
    """
    positionScheduleTypeCodes: [String!]
    """
    A short phrase describing the position as it would be listed on a business card or in a company directory.

    This field has a maximum length of 80 characters.
    """
    positionTitle: String!
    """
    The instructions related to posting the job ad.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element.
    """
    postingInstructions: [CreatePostingInstructionInput!]!
    """
    A SEEK ANZ work type code.

    For positions in \`seekAnz\` scheme, this field is used instead of \`positionScheduleTypeCodes\`.

    Currently, four codes are defined:

    - \`Casual\` indicates a casual position.
    - \`ContractTemp\` indicates a fixed-length contract position.
    - \`FullTime\` indicates a full-time position.
    - \`PartTime\` indicates a part-time position.

    Scheme requirements:

    - This field is required for the \`seekAnz\` scheme.
    - Omit this field for other schemes.
    """
    seekAnzWorkTypeCode: String
    """
    The identifier for the \`ApplicationQuestionnaire\` to present to a candidate during their application.

    The questionnaire responses will be available as \`CandidateProfile.seekQuestionnaireSubmission\` on the candidate's application profile.

    SEEK questionnaires are only supported on our native apply form;
    omit this field if an \`ApplicationMethodInput.applicationUri\` is provided.
    """
    seekApplicationQuestionnaireId: String
    """
    An optional opaque billing reference.

    This appears on the invoice when SEEK bills the hirer for the job ad.

    This field has a maximum length of 50 characters.
    """
    seekBillingReference: String
    """
    An optional hirer-provided opaque job reference.

    This field has a maximum length of 50 characters.
    """
    seekHirerJobReference: String
    """
    An optional field for storing additional data with a \`PositionProfile\`.

    The metadata is not used by SEEK and won't be seen by hirers or candidates.

    This field has a maximum length of 1,000 characters.
    """
    seekPartnerMetadata: String
    """
    The video to render within the job ad.
    """
    seekVideo: SeekVideoInput
  }

  """
  Attributes of the position profile.
  """
  type PostPositionProfileForOpening_PositionProfilePayload {
    """
    The identifier for the \`PositionProfile\`.
    """
    profileId: ObjectIdentifier!
  }

  """
  Attributes of the position opening.
  """
  type PostPosition_PositionOpeningPayload {
    """
    The identifier for the \`PositionOpening\`.

    Scheme restrictions:

    - The \`seekAnz\` scheme creates the position opening asynchronously.
      This identifier will initially reference a missing object;
      the object should be created within a few minutes.
    """
    documentId: ObjectIdentifier!
  }

  """
  The details of the position profile to be created.
  """
  input PostPosition_PositionProfileInput {
    """
    An array of \`JobCategory\` identifiers.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one identifier for a child job category.
    """
    jobCategories: [String!]!
    """
    The salary or compensation offered for the position.
    """
    offeredRemunerationPackage: RemunerationPackageInput!
    """
    An array of formatted position profile descriptions.
    """
    positionFormattedDescriptions: [PositionFormattedDescriptionInput!]!
    """
    An array of \`Location\` identifiers.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element.
    """
    positionLocation: [String!]!
    """
    An array of identifiers for the \`HiringOrganization\`s that have the position.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element that matches the position opening's \`PostingRequester.id\`.
    """
    positionOrganizations: [String!]!
    """
    An array of codes for the offered schedules for the position.

    Currently, two codes are defined:

    - \`FullTime\` indicates a full-time schedule.
    - \`PartTime\` indicates a part-time schedule.

    Omit this field for the \`seekAnz\` scheme.
    """
    positionScheduleTypeCodes: [String!]
    """
    A short phrase describing the position as it would be listed on a business card or in a company directory.

    This field has a maximum length of 80 characters.
    """
    positionTitle: String!
    """
    The instructions related to posting the job ad.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element.
    """
    postingInstructions: [CreatePostingInstructionInput!]!
    """
    A SEEK ANZ work type code.

    For positions in \`seekAnz\` scheme, this field is used instead of \`positionScheduleTypeCodes\`.

    Currently, four codes are defined:

    - \`Casual\` indicates a casual position.
    - \`ContractTemp\` indicates a fixed-length contract position.
    - \`FullTime\` indicates a full-time position.
    - \`PartTime\` indicates a part-time position.

    Scheme requirements:

    - This field is required for the \`seekAnz\` scheme.
    - Omit this field for other schemes.
    """
    seekAnzWorkTypeCode: String
    """
    The identifier for the \`ApplicationQuestionnaire\` to present to a candidate during their application.

    The questionnaire responses will be available as \`CandidateProfile.seekQuestionnaireSubmission\` on the candidate's application profile.

    SEEK questionnaires are only supported on our native apply form;
    omit this field if an \`ApplicationMethodInput.applicationUri\` is provided.
    """
    seekApplicationQuestionnaireId: String
    """
    An optional opaque billing reference.

    This appears on the invoice when SEEK bills the hirer for the job ad.

    This field has a maximum length of 50 characters.
    """
    seekBillingReference: String
    """
    An optional hirer-provided opaque job reference.

    This field has a maximum length of 50 characters.
    """
    seekHirerJobReference: String
    """
    An optional field for storing additional data with a \`PositionProfile\`.

    The metadata is not used by SEEK and won't be seen by hirers or candidates.

    This field has a maximum length of 1,000 characters.
    """
    seekPartnerMetadata: String
    """
    The video to render within the job ad.
    """
    seekVideo: SeekVideoInput
  }

  """
  Attributes of the position profile.
  """
  type PostPosition_PositionProfilePayload {
    """
    The identifier for the \`PositionProfile\`.

    Scheme restrictions:

    - The \`seekAnz\` scheme creates the position profile asynchronously.
      This identifier will initially reference a missing object;
      the object should be created within a few minutes.
    """
    profileId: ObjectIdentifier!
  }

  """
  A profile of a position opening.

  This contains information of how a position opening is presented on a job board.
  """
  type PostedPositionProfile implements PositionProfile {
    """
    The occupational categories of the job.
    """
    jobCategories: [JobCategory!]!
    """
    The salary or compensation offered for the position.
    """
    offeredRemunerationPackage: RemunerationPackage!
    """
    An array of formatted position profile descriptions.
    """
    positionFormattedDescriptions: [PositionFormattedDescription!]!
    """
    The locations of the position.
    """
    positionLocation: [Location!]!
    """
    The \`PositionOpening\` that this profile was created under.
    """
    positionOpening: PositionOpening!
    """
    An array of identifiers for the \`HiringOrganization\`s that have the position.
    """
    positionOrganizations: [HiringOrganization!]!
    """
    An array of codes for the offered schedules for the position.

    Currently, two codes are defined:

    - \`FullTime\` indicates a full-time schedule.
    - \`PartTime\` indicates a part-time schedule.

    If the offered schedule isn't known this will be \`null\`.
    """
    positionScheduleTypeCodes: [String!]
    """
    A short phrase describing the position as it would be listed on a business card or in a company directory.
    """
    positionTitle: String!
    """
    The public web URL of the posted job ad on SEEK.
    """
    positionUri: String!
    """
    The instructions related to posting the job ad.
    """
    postingInstructions: [PostingInstruction!]!
    """
    The identifier for the \`PositionProfile\`.
    """
    profileId: ObjectIdentifier!
    """
    A work type code for the \`seekAnz\` scheme.

    Currently, four codes are defined:

    - \`Casual\` indicates a casual position.
    - \`ContractTemp\` indicates a fixed-length contract position.
    - \`FullTime\` indicates a full-time position.
    - \`PartTime\` indicates a part-time position.

    For positions in other schemes this will be \`null\`.
    """
    seekAnzWorkTypeCode: String
    """
    The set of questions presented to candidates during an application.

    The questionnaire responses will be available as \`CandidateProfile.seekQuestionnaireSubmission\` on the candidate's application profile.
    """
    seekApplicationQuestionnaire: ApplicationQuestionnaire
    """
    The public web URL to submit an application for the posted job ad on SEEK.

    This is null for job ads that use a link-out application method.
    """
    seekApplicationUri: WebUrl
    """
    An optional opaque billing reference.

    This appears on the invoice when SEEK bills the hirer for the job ad.
    """
    seekBillingReference: String
    """
    Whether the job ad was initially posted by the requesting partner.

    If your software cannot ingest objects that are created by another source,
    this can be used to filter out such job ads and their associated applications.

    This indicator is unavailable for job ads posted before September 2021.
    \`null\` values should not be filtered out.
    """
    seekCreatedBySelfIndicator: Boolean
    """
    An optional hirer-provided opaque job reference.
    """
    seekHirerJobReference: String
    """
    An optional field for storing additional data with a \`PositionProfile\`.

    The metadata is not used by SEEK and won't be seen by hirers or candidates.

    This field has a maximum length of 1,000 characters.
    """
    seekPartnerMetadata: String
    """
    The type of position profile, i.e. \`PostedPositionProfile\`.
    """
    seekTypeCode: String!
    """
    The video to render within the job ad.
    """
    seekVideo: SeekVideo
  }

  """
  The details of a job ad preview.
  """
  type PostedPositionProfilePreview {
    """
    The URL of a standalone webpage to preview a job ad, with an origin of \`job-ad-preview.seek.com\`.

    The page can be embedded in an iframe or opened in a new tab.

    The webpage will expire after 24 hours.
    """
    previewUri: WebUrl!
  }

  """
  The details of the position profile to be previewed.
  """
  input PostedPositionProfilePreview_PositionProfileInput {
    """
    An array of \`JobCategory\` identifiers.

    Scheme requirements:

    - The \`seekAnz\` scheme has a maximum of one element.
    """
    jobCategories: [String!]
    """
    The salary or compensation offered for the position.
    """
    offeredRemunerationPackage: PostedPositionProfilePreview_RemunerationPackageInput!
    """
    An array of formatted position profile descriptions.
    """
    positionFormattedDescriptions: [PositionFormattedDescriptionInput!]
    """
    An array of \`Location\` identifiers.

    Scheme requirements:

    - The \`seekAnz\` scheme has a maximum of one element.
    """
    positionLocation: [String!]
    """
    An array of identifiers for the \`HiringOrganization\`s that have the position.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element.
    """
    positionOrganizations: [String!]!
    """
    A short phrase describing the position as it would be listed on a business card or in a company directory.

    This field has a maximum length of 80 characters.
    """
    positionTitle: String!
    """
    The instructions related to posting the job ad.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element.
    """
    postingInstructions: [PostedPositionProfilePreview_PostingInstructionInput!]!
    """
    The identifier for the \`PositionProfile\` to be updated.

    This field should only be provided when updating an existing \`PositionProfile\`.
    """
    profileId: String
    """
    A SEEK ANZ work type code.

    For positions in \`seekAnz\` scheme, this field is used instead of \`positionScheduleTypeCodes\`.

    Currently, four codes are defined:

    - \`Casual\` indicates a casual position.
    - \`ContractTemp\` indicates a fixed-length contract position.
    - \`FullTime\` indicates a full-time position.
    - \`PartTime\` indicates a part-time position.

    Scheme requirements:

    - This field is required for the \`seekAnz\` scheme.
    - Omit this field for other schemes.
    """
    seekAnzWorkTypeCode: String!
    """
    The identifier for the \`ApplicationQuestionnaire\` to present to a candidate during their application.

    A preview of the question set may be displayed on the job ad.

    SEEK questionnaires are only supported on our native apply form;
    omit this field if an \`ApplicationMethodInput.applicationUri\` is provided.
    """
    seekApplicationQuestionnaireId: String
    """
    The video to render within the job ad.
    """
    seekVideo: SeekVideoInput
  }

  """
  Information about how to post a job ad and where to direct its candidate applications.
  """
  input PostedPositionProfilePreview_PostingInstructionInput {
    """
    An array of methods for applying to the position.

    If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
    Native applications will emit a \`CandidateApplicationCreated\` event that points to a \`CandidateProfile\` object.

    Scheme requirements:

    - For the \`seekAnz\` scheme, this field is limited to a single element.
      Requests with more than 1 element will fail.
    """
    applicationMethods: [ApplicationMethodInput!]
    """
    The identifier for the \`AdvertisementBranding\` to apply to the posted job ad.

    Scheme requirements:

    - For the \`seekAnz\` scheme, this field's behavior is dependent on the \`SeekAnzAdProductFeatures\` of the product set in the \`seekAnzAdvertisementType\` field.

      When the product's \`SeekAnzAdProductFeatures.brandingIndicator\` value is false, this field will be silently ignored.
    """
    brandingId: String
    """
    The identifier for the \`AdvertisementProduct\`.
    """
    seekAdvertisementProductId: String
    """
    A SEEK ANZ advertisement type code.

    Currently, three codes are defined:

    - \`Classic\` indicates a Classic job ad.
    - \`StandOut\` indicates a StandOut job ad.
    - \`Premium\` indicates a Premium job ad.

    Scheme requirements:

    - This field is required for the \`seekAnz\` scheme.
    - Omit this field for other schemes.
    """
    seekAnzAdvertisementType: String
  }

  """
  A monetary amount of remuneration in a specified currency for a position to be previewed prior to posting.
  """
  input PostedPositionProfilePreview_RemunerationAmountInput {
    """
    The three-letter ISO 4217 currency code, in uppercase.

    For the \`seekAnz\` scheme, the following currencies are accepted:

    - \`AUD\`
    - \`BDT\`
    - \`CNY\`
    - \`EUR\`
    - \`GBP\`
    - \`HKD\`
    - \`IDR\`
    - \`INR\`
    - \`JPY\`
    - \`MYR\`
    - \`NZD\`
    - \`PHP\`
    - \`SGD\`
    - \`THB\`
    - \`USD\`
    - \`VND\`
    """
    currency: String!
    """
    A non-negative float in the major currency unit for the ISO currency code.

    For example, this is the number of dollars in dollar-denominated currencies.
    """
    value: Float!
  }

  """
  The salary or compensation for a position to be previewed prior to posting.
  """
  input PostedPositionProfilePreview_RemunerationPackageInput {
    """
    A code classifying the primary method of payment for a position.

    Currently, three codes are defined:

    - \`Hourly\` employment is paid for the number of hours worked.

    - \`Salaried\` employment is paid on a monthly or annual basis.

    - \`SalariedPlusCommission\` employment is paid on an annual basis plus a results-based commission.
    """
    basisCode: String
    """
    Human readable descriptions of the remuneration package.

    Scheme requirements:

    - The \`seekAnz\` scheme is limited to a single element with a maximum length of 50 characters.

    An empty array must be provided to signify the absence of salary descriptions.
    """
    descriptions: [String!]!
    """
    An array of offered salary ranges.

    Scheme requirements:

    - The \`seekAnz\` scheme is limited to a single element containing the amount for the \`basisCode\`.

    Salary ranges are used to refine candidate job searches.
    While the monetary values in \`minimumAmount\` and \`maximumAmount\` are not visible on job ads,
    the currency and interval may be displayed alongside the \`descriptions\` of the remuneration package for clarity.
    """
    ranges: [PostedPositionProfilePreview_RemunerationRangeInput!]
  }

  """
  A salary or compensation range for a position to be previewed prior to posting.

  Salary ranges are used to refine candidate job searches.
  While the monetary values in \`minimumAmount\` and \`maximumAmount\` are not visible on job ads,
  the currency and interval may be displayed alongside the \`descriptions\` of the remuneration package for clarity.
  """
  input PostedPositionProfilePreview_RemunerationRangeInput {
    """
    The interval the remuneration amounts are calculated over.

    Currently three interval codes are defined:

    - \`Hour\` is used to express hourly rates.
    - \`Month\` is used to express monthly salaries.
    - \`Year\` is used to express annual salaries.

    The specified value must correspond to \`RemunerationPackageInput.basisCode\`.
    When \`RemunerationPackageInput.basisCode\` equals \`Hourly\`, the \`RemunerationRangeInput.intervalCode\` must be \`Hour\`.
    When \`RemunerationPackageInput.basisCode\` equals \`Salaried\`, the \`RemunerationRangeInput.intervalCode\` must be \`Month\` or \`Year\`.
    For all other \`RemunerationPackageInput.basisCode\`s, the \`RemunerationRangeInput.intervalCode\` must be \`Year\`.
    """
    intervalCode: String!
    """
    The maximum amount an organization is willing to pay for a position.

    The value must be greater than or equal to the value of \`minimumAmount\` and the currency must match \`minimumAmount\`.

    This should be a mandatory input in your software and will be required in our schema in future.
    Currently, omitting the field will default it to \`minimumAmount\` and harm the performance of the job ad.
    """
    maximumAmount: RemunerationAmountInput
    """
    The minimum amount an organization is willing to pay for a position.

    The value must be greater than 0.
    """
    minimumAmount: RemunerationAmountInput!
  }

  """
  The details of the advertisement product for a job ad.
  """
  type PostedPositionProfile_AdvertisementProduct {
    """
    The name of the advertisement product for displaying to the user.

    This field is for display purposes only and should not be used to determine any features of an ad.
    """
    label: String!
  }

  """
  Information about how to post a job ad and where to direct its candidate applications.
  """
  type PostingInstruction {
    """
    An array of methods for applying to the position.

    If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
    Native applications will emit a \`CandidateApplicationCreated\` event that points to a \`CandidateProfile\` object.
    """
    applicationMethods: [ApplicationMethod!]!
    """
    The branding applied to the posted job ad.
    """
    branding: AdvertisementBranding
    """
    The identifier for the \`AdvertisementBranding\` applied to the posted job ad.

    This is included for HR-JSON compatibility;
    GraphQL users should use the \`branding\` nested object instead.
    """
    brandingId: String
    """
    The end date of the posting.
    """
    end: DateTime!
    """
    A SEEK advertisement product label.

    This field is for display purposes only and should not be used to determine any features of an ad.
    """
    seekAdvertisementProduct: PostedPositionProfile_AdvertisementProduct
    """
    A SEEK ANZ advertisement type code.

    Currently, three codes are defined:

    - \`Classic\` indicates a Classic job ad.
    - \`StandOut\` indicates a StandOut job ad.
    - \`Premium\` indicates a Premium job ad.

    For positions in other schemes this will be \`null\`.
    """
    seekAnzAdvertisementType: String
    """
    The start date of the posting.
    """
    start: DateTime!
  }

  """
  The party that owns the position opening.
  """
  type PostingRequester {
    """
    The identifier for the \`HiringOrganization\` that owns the position opening.

    This is typically a hirer,
    but may be a recruitment agency for position openings created outside of the SEEK API.
    """
    id: ObjectIdentifier!
    """
    The name of the party that owns the position opening.
    """
    name: String!
    """
    Specific contact people for the position opening at the party.
    """
    personContacts: [SpecifiedPerson!]!
    """
    The role of the owner of the position opening.

    Currently, two codes are defined:

    - \`Agency\` indicates a recruitment agency hiring on behalf of another company.

      This only applies to position openings created outside of the SEEK API.

    - \`Company\` indicates a company hiring on behalf of themselves.

      This applies to all position openings created through the SEEK API.
    """
    roleCode: String!
    """
    The legacy SEEK ANZ advertiser ID.

    This is a numeric identifier used by legacy Job Posting & Application Export APIs in the \`seekAnz\` scheme.
    For hirers or agencies in other schemes this will be \`null\`.
    """
    seekAnzAdvertiserId: Int
  }

  """
  The party that owns the position opening.
  """
  input PostingRequesterInput {
    """
    The identifier for the \`HiringOrganization\` that owns the position opening.
    """
    id: String!
    """
    Specific contact people for the position opening at the party.

    The name, email address & role of at least one contact person must be provided.
    A maximum of 10 contact people may be provided.
    """
    personContacts: [SpecifiedPersonInput!]!
    """
    The role of the owner of the position opening.

    Currently, one code is defined:

    - \`Company\` indicates a company hiring on behalf of themselves.
    """
    roleCode: String!
  }

  """
  A candidate's preferences in the location of a position.
  """
  type PreferredLocation {
    """
    The address that represents the preferred location.
    """
    referenceLocation: Address!
  }

  """
  A candidate's preferences in the location of a position.
  """
  input PreferredLocationInput {
    """
    The address that represents the preferred location.
    """
    referenceLocation: AddressInput!
  }

  """
  The schema's entry-point for queries.

  This acts as the public, top-level API from which all queries must start.
  """
  type Query {
    """
    The advertisement branding for the given \`id\`.

    This query accepts browser tokens that include the \`query:advertisement-brandings\` scope.
    """
    advertisementBranding(
      """
      The value of \`AdvertisementBranding.id\` for the requested object.
      """
      id: String!
    ): AdvertisementBranding
    """
    A page of advertisement brandings associated with the specified \`hirerId\`.

    A maximum of 100 advertisement brandings can be returned in a single page.
    Additional advertisement brandings can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest known advertisement branding if no pagination arguments are provided.

    This query accepts browser tokens that include the \`query:advertisement-brandings\` scope.
    """
    advertisementBrandings(
      """
      An opaque cursor to the earlier bounding advertisement brandings.

      Resulting advertisement brandings will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding advertisement brandings.

      Resulting advertisement brandings will _precede_ this cursor.
      """
      before: String
      """
      The upper limit of advertisement brandings to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess advertisement brandings will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The identifier for the \`HiringOrganization\`.
      """
      hirerId: String!
      """
      The upper limit of advertisement brandings to return from the end of the list.

      Excess advertisement brandings will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
    ): AdvertisementBrandingsConnection!
    """
    The list of advertisement products available to the hirer when posting or updating a job.

    This query accepts browser tokens that include the \`query:ad-products\` scope.
    """
    advertisementProducts(
      """
      The upper limit of advertisement products to return in the list.

      If your user interface can only display a certain number of products,
      set this limit so that SEEK can provide the most relevant set of products within your constraints.
      Do not manually truncate the returned list as that may exclude highly relevant products.

      This must be a positive integer that is greater than or equal to 3.
      Defaults to a unbounded list though expect this to remain within reason;
      we typically return up to 3 products and have only discussed an increase to 4 in future.
      """
      limit: Int
      """
      The new state of the job ad to be created or updated.
      """
      positionProfile: AdvertisementProducts_PositionProfileInput!
      """
      The identifier of an advertisement product that has been previously selected.

      If this product is still available, then one of the advertisement products in the response will have its selected flag set to true.

      This is intended to accept values that have been saved in a draft state and may now have become stale.
      """
      selectedAdvertisementProductId: String
    ): AdvertisementProducts!
    """
    An array of suggested application questions for the provided partial \`PositionProfile\` in decreasing order of relevance.

    A maximum of 10 application questions can be recommended.

    This query accepts browser tokens that include the \`query:application-library-question-suggestions\` scope.
    """
    applicationLibraryQuestionSuggestions(
      """
      A non-negative limit to the number of questions to return.

      Defaults to 10.
      """
      first: Int
      """
      The partial position profile to suggest application questions.

      This should include the same field values that will eventually be used to create or post the \`PositionProfile\`.
      """
      positionProfile: ApplicationLibraryQuestionSuggestions_PositionProfileInput!
      """
      The scheme of the suggested application questions.

      Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
      """
      schemeId: String!
    ): [ApplicationLibraryQuestionSuggestion!]!
    """
    An application questionnaire with the given \`id\`.

    Questionnaires can be associated with a \`PositionProfile\`.

    This query accepts browser tokens that include the \`query:application-questionnaires\` scope.
    """
    applicationQuestionnaire(
      """
      The value of \`ApplicationQuestionnaire.id\` for the requested object.
      """
      id: String!
    ): ApplicationQuestionnaire
    """
    The candidate for the given \`id\`.

    This will include the candidate's personal details along with all application profiles for a single hirer.
    """
    candidate(
      """
      The value of \`Candidate.documentId\` for the requested object.
      """
      id: String!
    ): Candidate
    """
    The \`CandidateProcessHistoryItem\` for the given \`id\`.
    """
    candidateProcessHistoryItem(
      """
      The value of \`CandidateProcessHistoryItem.id\` for the requested object.
      """
      id: String!
    ): CandidateProcessHistoryItem
    """
    The \`CandidateProfile\` for the given \`id\`.
    """
    candidateProfile(
      """
      The value of \`CandidateProfile.profileId\` for the requested object.
      """
      id: String!
    ): CandidateProfile
    """
    A list of currencies.

    These may be presented to a hirer for selection in a job posting flow.
    A dropdown is recommended.

    This query accepts browser tokens that include the \`query:ontologies\` scope.
    """
    currencies(
      """
      Determines the list of currencies to be provided.

      Currently only two codes are defined:

      - \`All\` will provide every currency that SEEK supports in a job posting flow.

      - \`SEEKMarket\` will provide currencies associated with the markets SEEK is active in.
      """
      usageTypeCode: String!
    ): [Currency!]!
    """
    The event for the given \`id\`.
    """
    event(
      """
      The value of \`Event.id\` for the requested object.
      """
      id: String!
    ): Event
    """
    A page of events matching the specified criteria.

    A maximum of 100 events can be returned in a single page.
    Additional events can be queried using a pagination cursor.

    The result list is returned in ascending stream date & time order.
    It starts from the earliest known event if no pagination arguments are provided.
    """
    events(
      """
      An opaque cursor to the earlier bounding event.

      Resulting events will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding event.

      Resulting events will _precede_ this cursor.
      """
      before: String
      """
      The additional \`Event\`-specific criteria to filter by.
      """
      filter: EventsFilterInput
      """
      The upper limit of events to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess events will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of events to return from the end of the list.

      Excess events will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
      """
      The data source for the event.

      Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
      """
      schemeId: String!
    ): EventsConnection!
    """
    The hiring organization for the given \`id\`.

    This query accepts browser tokens that include the \`query:organizations\` scope.
    """
    hiringOrganization(
      """
      The value of \`HiringOrganization.id\` for the requested object.
      """
      id: String!
    ): HiringOrganization
    """
    A page of hirers that have an active relationship with the requesting partner.

    This will not return agencies; it's not possible to have a relationship with an agency.

    A maximum of 100 hirers can be returned in a single page.
    Additional hirers can be queried using a pagination cursor.

    The result list is ordered alphabetically by the hirer's name.

    This query accepts browser tokens that include the \`query:organizations\` scope.
    It will only return the single hirer that the browser token is scoped to.
    """
    hiringOrganizations(
      """
      An opaque cursor to the earlier bounding hirer.

      Resulting hirers will be alphabetically later than this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding hirers.

      Resulting hirers will be alphabetically earlier than this cursor.
      """
      before: String
      """
      The additional \`HiringOrganization\`-specific criteria to filter by.
      """
      filter: HiringOrganizationsFilterInput
      """
      The upper limit of hirers to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess hirers will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of hirers to return from the end of the list.

      Excess hirers will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
      """
      The scheme of the hirers.

      Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
      """
      schemeId: String!
    ): HiringOrganizationsConnection!
    """
    A location inferred from the provided address details.

    SEEK will attempt to match the address details to a location in our hierarchy on a best-effort basis.

    This query accepts browser tokens that include the \`query:ontologies\` scope.
    """
    inferLocation(
      """
      The address details to infer a SEEK location from.
      """
      address: SeekPositionAddressInput!
      """
      The identifier for the \`HiringOrganization\` used to provide location suggestions weighted by the hirer's SEEK-configured domicile.
      """
      hirerId: String
      """
      The scheme for the location dataset to query.

      Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
      """
      schemeId: String!
    ): Location
    """
    A list of top-level job categories for the provided scheme.

    This query accepts browser tokens that include the \`query:ontologies\` scope.
    """
    jobCategories(
      """
      The partial position profile to list job categories for.

      This should include the same field values that will eventually be used to create or post the \`PositionProfile\`.
      """
      positionProfile: JobCategories_PositionProfileInput
      """
      The scheme of the job categories.

      Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
      """
      schemeId: String!
    ): [JobCategory!]!
    """
    The job category for the given \`id\`.

    This query accepts browser tokens that include the \`query:ontologies\` scope.
    """
    jobCategory(
      """
      The value of \`JobCategory.id\` for the requested object.
      """
      id: String!
    ): JobCategory
    """
    An array of suggested job categories for the provided partial \`PositionProfile\` in decreasing order of relevance.

    A maximum of 10 job categories can be recommended.

    This query accepts browser tokens that include the \`query:ontologies\` scope.
    """
    jobCategorySuggestions(
      """
      A non-negative limit to the number of job categories to return.

      Defaults to 10.
      """
      first: Int
      """
      The partial position profile to suggest a job category for.

      This should include the same field values that will eventually be used to create or post the \`PositionProfile\`.
      """
      positionProfile: JobCategorySuggestionPositionProfileInput!
      """
      The scheme of the suggested job categories.

      Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
      """
      schemeId: String!
    ): [JobCategorySuggestionChoice!]!
    """
    A location node with the given location \`id\`.

    This query accepts browser tokens that include the \`query:ontologies\` scope.
    """
    location(
      """
      The value of \`Location.id\` for the requested object.
      """
      id: String!
    ): Location
    """
    An array of suggested locations for the text provided in decreasing order of relevance.

    While a maximum of 20 locations can be requested, the current implementation does not return more than 10 recommendations.

    This query accepts browser tokens that include the \`query:ontologies\` scope.
    """
    locationSuggestions(
      """
      A non-negative limit to the number of locations to return.

      Defaults to 10.
      """
      first: Int
      """
      The identifier for the \`HiringOrganization\` used to provide location suggestions weighted by the hirer's SEEK-configured domicile.
      """
      hirerId: String
      """
      The scheme for the location dataset to query.

      Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
      """
      schemeId: String!
      """
      Hirer-provided text used for the location suggestions.

      This currently expects a substring of a location's name (e.g. a suburb or city name).
      Postcodes and street addresses are not supported.
      """
      text: String!
      """
      The context that the location suggestions will be used in.

      Not all locations are accepted by all SEEK API operations.
      Specifying the correct usage type ensures the returned locations are valid in the context they're consumed.

      Currently two codes are defined:

      -  \`PositionPosting\` returns locations suitable for posting a position profile.
         They would typically be passed to the \`postPosition\` or \`postPositionProfileForOpening\` mutation.

      -  \`ProactiveSourcing\` returns locations suitable for proactively sourcing candidates.
         They would typically be passed to the \`createUnpostedPositionProfileForOpening\` mutation.
      """
      usageTypeCode: String!
    ): [LocationSuggestion!]
    """
    An array of locations relevant to the provided geolocation ordered by distance.

    A maximum of 10 locations can be recommended.

    This query accepts browser tokens that include the \`query:ontologies\` scope.
    """
    nearestLocations(
      """
      A non-negative limit to the number of locations to return.

      Defaults to 10.
      """
      first: Int
      """
      The geolocation coordinates input used for the location suggestions.
      """
      geoLocation: GeoLocationInput!
      """
      The scheme for the location dataset to query.

      Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
      """
      schemeId: String!
    ): [Location!]
    """
    A list of pay types that specify the method and interval of a payment.

    These may be presented to a hirer for selection in a job posting flow.
    A dropdown or radio group is recommended.

    This query accepts browser tokens that include the \`query:ontologies\` scope.
    """
    payTypes(
      """
      The scheme of the pay types.

      Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
      """
      schemeId: String!
    ): [PayType!]!
    """
    A position opening with the given \`id\`.
    """
    positionOpening(
      """
      The value of \`PositionOpening.documentId\` for the requested object.
      """
      id: String!
    ): PositionOpening
    """
    A page of position openings for the given \`hirerId\`.

    Currently, only position openings in the \`global\` and \`globalPublicTest\` schemes are returned.

    A maximum of 20 position openings can be returned in a single page.
    Additional position openings can be queried using a pagination cursor.
    """
    positionOpenings(
      """
      An opaque cursor to the earlier bounding page.

      Resulting position openings will _succeed_ this cursor.
      """
      after: String
      """
      The additional \`PositionOpening\`-specific criteria to filter by.
      """
      filter: PositionOpeningsFilterInput
      """
      The upper limit of position openings to return from the start of the list.

      Defaults to 10 if \`first\` is not specified.
      Excess position openings will be trimmed from the end of the list.
      """
      first: Int
      """
      The identifier for the \`HiringOrganization\` to retrieve position openings for.
      """
      hirerId: String!
    ): PositionOpeningConnection!
    """
    A position profile with the given \`id\`.

    This query accepts browser tokens that include the \`query:position-profiles\` scope for posted position profiles.
    Note that this scope does not grant access to the containing \`PositionProfile.positionOpening\`.
    """
    positionProfile(
      """
      The value of \`PositionProfile.profileId\` for the requested object.
      """
      id: String!
    ): PositionProfile
    """
    A preview of a prospective job ad as it would appear on a SEEK job board.

    This query accepts browser tokens that include the \`query:posted-position-profile-previews\` scope.
    """
    postedPositionProfilePreview(
      """
      The details of the position profile to be previewed.
      """
      positionProfile: PostedPositionProfilePreview_PositionProfileInput!
    ): PostedPositionProfilePreview!
    """
    A hiring organization corresponding to the given SEEK ANZ advertiser ID.

    This query accepts browser tokens that include the \`query:organizations\` scope.
    """
    seekAnzAdvertiser(
      """
      The legacy SEEK ANZ advertiser ID.

      This is a numeric identifier used by legacy Job Posting & Application Export APIs in the \`seekAnz\` scheme.
      """
      id: Int!
    ): HiringOrganization
    """
    Ad products available when initially posting a job ad.

    This query accepts browser tokens that include the \`query:ad-products\` scope.
    """
    seekAnzHirerAdvertisementCreationProducts(
      """
      The proposed state of the job ad to be posted.
      """
      draftAdvertisement: SeekAnzAdProductAdvertisementDraftInput!
      """
      The identifier for the \`HiringOrganization\` that will post the job ad.
      """
      hirerId: String!
    ): [SeekAnzAdProduct!]
    """
    Ad products available when updating a live job ad.

    Use this query when you have the \`PositionProfile.profileId\` for the live job ad.

    This query accepts browser tokens that include the \`query:ad-products\` scope.
    """
    seekAnzHirerAdvertisementModificationProducts(
      """
      The value of \`PositionProfile.profileId\` for the live job ad.
      """
      advertisementId: String!
      """
      The proposed state of the updated job ad.
      """
      draftAdvertisement: SeekAnzAdProductAdvertisementDraftInput!
      """
      The identifier for the \`HiringOrganization\` that posted the live job ad.
      """
      hirerId: String!
    ): [SeekAnzAdProduct!]
    """
    Ad products available when updating a job ad.

    Use this query when you don't have the \`PositionProfile.profileId\` for the live job ad.

    This query accepts browser tokens that include the \`query:ad-products\` scope.
    """
    seekAnzHirerAdvertisementModificationProductsAlt(
      """
      The state of the live job ad on SEEK's job board.

      This depends on your software persisting & updating the state of the live job ad.
      The \`seekAnzHirerAdvertisementModificationProducts\` query is recommended if you have a \`PositionProfile.profileId\` for the live job ad.
      """
      advertisement: SeekAnzAdProductAdvertisementInput!
      """
      The proposed state of the updated job ad.
      """
      draftAdvertisement: SeekAnzAdProductAdvertisementDraftInput!
      """
      The identifier for the \`HiringOrganization\` that posted the live job ad.
      """
      hirerId: String!
    ): [SeekAnzAdProduct!]
    """
    The organizations the query's access token can act on behalf of.

    For all token types this returns the name of the integration partner.

    This query accepts browser tokens that include the \`query:organizations\` scope.
    When provided with a browser token this will additionally return the scoped SEEK hirer.
    """
    self: SelfOrganizations!
    """
    The API version.
    """
    version: String!
    """
    A page of webhook attempts matching the specified criteria generated by a selected event.

    A maximum of 100 webhook attempts can be returned in a single page.
    Additional webhook attempts can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest known attempt if no pagination arguments are provided.
    """
    webhookAttemptsForEvent(
      """
      An opaque cursor to the earlier bounding webhook attempt.

      Resulting webhook attempts will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding webhook attempt.

      Resulting webhook attempts will _precede_ this cursor.
      """
      before: String
      """
      The identifier for the \`Event\` that generated the attempts.
      """
      eventId: String!
      """
      The additional \`WebhookAttempt\`-specific criteria to filter by.
      """
      filter: WebhookAttemptsFilterInput
      """
      The upper limit of webhook attempts to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess webhook attempts will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of webhook attempts to return from the end of the list.

      Excess webhook attempts will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
    ): WebhookAttemptsConnection!
    """
    The webhook request for the given \`requestId\`.
    """
    webhookRequest(
      """
      The request ID.

      This is included in the HTTP request as an \`X-Request-Id\` custom header.
      """
      requestId: String!
      """
      The scheme ID of the \`WebhookSubscription\` that generated the request.

      This is used to determine which data source includes the \`requestId\`.

      Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
      """
      schemeId: String!
    ): WebhookRequest
    """
    A page of webhook requests matching the specified criteria generated by a selected subscription.

    A maximum of 100 webhook requests can be returned in a single page.
    Additional webhook requests can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest known request if no pagination arguments are provided.
    """
    webhookRequestsForSubscription(
      """
      An opaque cursor to the earlier bounding webhook request.

      Resulting webhook requests will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding webhook request.

      Resulting webhook requests will _precede_ this cursor.
      """
      before: String
      """
      The additional \`WebhookRequest\`-specific criteria to filter by.
      """
      filter: WebhookRequestFilterInput
      """
      The upper limit of webhook requests to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess webhook requests will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of webhook requests to return from the end of the list.

      Excess webhook requests will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
      """
      The identifier for the \`WebhookSubscription\` that generated the requests.
      """
      subscriptionId: String!
    ): WebhookRequestsConnection!
    """
    The webhook subscription for the given \`id\`.
    """
    webhookSubscription(
      """
      The value of \`WebhookSubscription.id\` for the requested object.
      """
      id: String!
    ): WebhookSubscription
    """
    The webhook subscription replay for the given \`id\`.
    """
    webhookSubscriptionReplay(
      """
      The value of \`WebhookSubscriptionReplay.id\` for the requested object.
      """
      id: String!
    ): WebhookSubscriptionReplay
    """
    A page of webhook subscriptions matching the specified criteria.

    A maximum of 100 webhook subscriptions can be returned in a single page.
    Additional webhook subscriptions can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest known subscription if no pagination arguments are provided.
    """
    webhookSubscriptions(
      """
      An opaque cursor to the earlier bounding webhook subscription.

      Resulting webhook subscriptions will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding webhook subscription.

      Resulting webhook subscriptions will _precede_ this cursor.
      """
      before: String
      """
      The additional \`WebhookSubscription\`-specific criteria to filter by.
      """
      filter: WebhookSubscriptionsFilterInput
      """
      The upper limit of webhook subscriptions to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess webhook subscriptions will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of webhook subscriptions to return from the end of the list.

      Excess webhook subscriptions will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
      """
      The data source for the webhook subscription's events.

      Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
      """
      schemeId: String!
    ): WebhookSubscriptionsConnection!
  }

  """
  A monetary amount of remuneration in a specified currency.
  """
  type RemunerationAmount {
    """
    The three-letter ISO 4217 currency code, in uppercase.
    """
    currency: String!
    """
    A non-negative float in the major currency unit for the ISO currency code.

    For example, this is the number of dollars in dollar-denominated currencies.
    """
    value: Float!
  }

  """
  A monetary amount of remuneration in a specified currency.
  """
  input RemunerationAmountInput {
    """
    The three-letter ISO 4217 currency code, in uppercase.

    For the \`seekAnz\` scheme, the following currencies are accepted:

    - \`AUD\`
    - \`BDT\`
    - \`CNY\`
    - \`EUR\`
    - \`GBP\`
    - \`HKD\`
    - \`IDR\`
    - \`INR\`
    - \`JPY\`
    - \`MYR\`
    - \`NZD\`
    - \`PHP\`
    - \`SGD\`
    - \`THB\`
    - \`USD\`
    - \`VND\`
    """
    currency: String!
    """
    A non-negative float in the major currency unit for the ISO currency code.

    For example, this is the number of dollars in dollar-denominated currencies.
    """
    value: Float!
  }

  """
  The salary or compensation for a position.
  """
  type RemunerationPackage {
    """
    A code classifying the primary method of payment for a position.

    Currently, four codes are defined:

    - \`CommissionOnly\` employment is paid exclusively a results-based commission.
      This payment basis is deprecated and should be removed from your software.

    - \`Hourly\` employment is paid for the number of hours worked.

    - \`Salaried\` employment is paid on a monthly or annual basis.

    - \`SalariedPlusCommission\` employment is paid on an annual basis plus a results-based commission.
    """
    basisCode: String!
    """
    Human readable descriptions of the remuneration package.

    The \`seekAnz\` scheme will be limited to a single element.

    An empty array signifies that no salary descriptions exist for the remuneration package.
    """
    descriptions: [String!]!
    """
    An array of offered salary ranges.

    The \`seekAnz\` scheme will always have a single element containing the amount for the \`basisCode\`.
    """
    ranges: [RemunerationRange!]!
  }

  """
  The salary or compensation for a position.
  """
  input RemunerationPackageInput {
    """
    A code classifying the primary method of payment for a position.

    Currently, four codes are defined:

    - \`CommissionOnly\` employment is paid exclusively a results-based commission.
      This payment basis is deprecated and should be removed from your software.

    - \`Hourly\` employment is paid for the number of hours worked.

    - \`Salaried\` employment is paid on a monthly or annual basis.

    - \`SalariedPlusCommission\` employment is paid on an annual basis plus a results-based commission.
    """
    basisCode: String!
    """
    Human readable descriptions of the remuneration package.

    Scheme requirements:

    - The \`global\` scheme has a maximum of 10 elements for \`UnpostedPositionProfile\`s.
    - The \`seekAnz\` scheme is limited to a single element with a maximum length of 50 characters.

    An empty array must be provided to signify the absence of salary descriptions.
    """
    descriptions: [String!]!
    """
    An array of offered salary ranges.

    Scheme requirements:

    - The \`global\` scheme has a maximum of 10 elements for \`UnpostedPositionProfile\`s.
    - The \`seekAnz\` scheme is limited to a single element containing the amount for the \`basisCode\`.

    Salary ranges are used to refine candidate job searches.
    While the monetary values in \`minimumAmount\` and \`maximumAmount\` are not visible on job ads,
    the currency and interval may be displayed alongside the \`descriptions\` of the remuneration package for clarity.
    """
    ranges: [RemunerationRangeInput!]!
  }

  """
  A salary or compensation range for a position.
  """
  type RemunerationRange {
    """
    The interval the remuneration amounts are calculated over.

    Currently three interval codes are defined:

    - \`Hour\` is used to express hourly rates.
    - \`Month\` is used to express monthly salaries.
    - \`Year\` is used to express annual salaries or commissions.
    """
    intervalCode: String!
    """
    The maximum amount an organization is willing to pay for a position.

    The value must be greater than or equal to the value of \`minimumAmount\` and the currency must match \`minimumAmount\`.

    The associated \`RemunerationRangeInput.maximumAmount\` field will be required in our schema in future.
    Currently, omitting the field will default it to \`minimumAmount\` and harm the performance of the job ad.
    """
    maximumAmount: RemunerationAmount
    """
    The minimum amount an organization is willing to pay for a position.

    The value must be greater than 0.
    """
    minimumAmount: RemunerationAmount!
  }

  """
  A salary or compensation range for a position.

  Salary ranges are used to refine candidate job searches.
  While the monetary values in \`minimumAmount\` and \`maximumAmount\` are not visible on job ads,
  the currency and interval may be displayed alongside the \`descriptions\` of the remuneration package for clarity.
  """
  input RemunerationRangeInput {
    """
    The interval the remuneration amounts are calculated over.

    Currently three interval codes are defined:

    - \`Hour\` is used to express hourly rates.
    - \`Month\` is used to express monthly salaries.
    - \`Year\` is used to express annual salaries.

    The specified value must correspond to \`RemunerationPackageInput.basisCode\`.
    When \`RemunerationPackageInput.basisCode\` equals \`Hourly\`, the \`RemunerationRangeInput.intervalCode\` must be \`Hour\`.
    When \`RemunerationPackageInput.basisCode\` equals \`Salaried\`, the \`RemunerationRangeInput.intervalCode\` must be \`Month\` or \`Year\`.
    For all other \`RemunerationPackageInput.basisCode\`s, the \`RemunerationRangeInput.intervalCode\` must be \`Year\`.
    """
    intervalCode: String!
    """
    The maximum amount an organization is willing to pay for a position.

    The value must be greater than or equal to the value of \`minimumAmount\` and the currency must match \`minimumAmount\`.

    This should be a mandatory input in your software and will be required in our schema in future.
    Currently, omitting the field will default it to \`minimumAmount\` and harm the performance of the job ad.
    """
    maximumAmount: RemunerationAmountInput
    """
    The minimum amount an organization is willing to pay for a position.

    The value must be greater than 0.
    """
    minimumAmount: RemunerationAmountInput!
  }

  """
  The input parameter for the \`replayWebhookSubscription\` mutation.
  """
  input ReplayWebhookSubscriptionInput {
    """
    List of event IDs to filter which events are to be replayed.

    This is an alternative to the \`filter\` argument, providing the ability to replay a list of specific events by their IDs.
    \`eventIds\` and \`filter\` cannot be specified in the same mutation.

    A maximum of 100 event IDs may be provided.
    """
    eventIds: [String!]
    """
    Additional fields to filter which events are to be replayed.

    This is an alternative to the \`eventIds\` argument, and allows replaying events within a designated time range.
    \`eventIds\` and \`filter\` cannot be specified in the same mutation.
    """
    filter: ReplayWebhookSubscription_FilterInput
    """
    The details of the webhook subscription to be replayed.
    """
    webhookSubscription: ReplayWebhookSubscription_SubscriptionInput!
  }

  """
  The response from the \`replayWebhookSubscription\` mutation.
  """
  type ReplayWebhookSubscriptionPayload {
    """
    The details of the webhook subscription to have its messages redelivered.
    """
    webhookSubscription: WebhookSubscription!
  }

  """
  Criteria used to decide which events will be replayed.
  """
  input ReplayWebhookSubscription_FilterInput {
    """
    The earliest event to replay.
    """
    createdAfterDateTime: DateTime!
    """
    The latest event to replay.
    """
    createdBeforeDateTime: DateTime!
    """
    The hirer ID to replay events for.

    This must be specified for partner-scoped subscriptions if  \`replayDeliveredEventsIndicator\` is true.
    This defaults to the corresponding \`WebhookSubscription.hirerId\` for a hirer-scoped subscription.
    """
    hirerId: String
    """
    Whether to include all events, or only events that have failed to be delivered.
    """
    replayDeliveredEventsIndicator: Boolean!
  }

  """
  The details of the webhook subscription to be replayed.
  """
  input ReplayWebhookSubscription_SubscriptionInput {
    """
    The identifier for the \`WebhookSubscription\`.
    """
    id: String!
  }

  """
  The details of an available ad product.
  """
  type SeekAnzAdProduct {
    """
    The type of the ad product.

    Currently, three codes are defined:

    - \`Classic\` indicates a Classic ad.
    - \`StandOut\` indicates a StandOut ad.
    - \`Premium\` indicates a Premium ad.

    This value should be provided as \`PostingInstruction.seekAnzAdvertisementType\` when posting or updating the job ad.
    """
    advertisementTypeCode: String!
    """
    How the ad product would be paid.
    """
    checkoutEstimate: SeekAnzAdProductCheckoutEstimate!
    """
    The human-readable description of the ad product.
    """
    description: String!
    """
    Whether the ad product should be selectable by the hirer.
    """
    enabledIndicator: Boolean!
    """
    The features this product supports.
    """
    features: SeekAnzAdProductFeatures!
    """
    The messages that may be shown to hirer.
    """
    messages: [SeekAnzAdProductMessage!]!
    """
    The human-readable ad product name.
    """
    name: String!
    """
    The price component of the ad product.
    """
    price: SeekAnzAdProductPrice!
  }

  """
  The proposed state of a job ad.

  This contains the \`PositionProfile\` fields relevant to querying ad products.
  """
  input SeekAnzAdProductAdvertisementDraftInput {
    """
    The hirer's job reference.

    This field is used for tracing & debugging.
    It does not impact the available ad products or their pricing.
    """
    hirerJobReference: String
    """
    The identifier for the \`JobCategory\`.
    """
    jobCategoryId: String
    """
    The identifier for the position's \`Location\`.
    """
    positionLocationId: String
    """
    A short phrase describing the position as it would be listed on a business card or in a company directory.
    """
    positionTitle: String
    """
    The type of the ad product.

    Currently, three codes are defined:

    - \`Classic\` indicates a Classic ad.
    - \`StandOut\` indicates a StandOut ad.
    - \`Premium\` indicates a Premium ad.

    This field is unused and may be omitted from the input.
    """
    typeCode: String
  }

  """
  The state of a live job ad as persisted by an integration partner.

  This contains the \`PositionProfile\` fields relevant to querying ad products.
  """
  input SeekAnzAdProductAdvertisementInput {
    """
    The hirer's job reference.

    This field is used for tracing & debugging.
    It does not impact the available ad product or their pricing.
    """
    hirerJobReference: String
    """
    The identifier for the \`PositionProfile\`.
    """
    id: String
    """
    The identifier for the \`JobCategory\`.
    """
    jobCategoryId: String!
    """
    The identifier for the position's \`Location\`.
    """
    positionLocationId: String!
    """
    A short phrase describing the position as it would be listed on a business card or in a company directory.
    """
    positionTitle: String!
    """
    The type of the ad product.

    Currently, three codes are defined:

    - \`Classic\` indicates a Classic ad.
    - \`StandOut\` indicates a StandOut ad.
    - \`Premium\` indicates a Premium ad.
    """
    typeCode: String!
  }

  """
  The details of the outstanding payment.
  """
  type SeekAnzAdProductCheckoutEstimate {
    """
    The contract component of the checkout estimate.
    """
    contractConsumption: SeekAnzAdProductContractConsumption
    """
    The amount left to be paid.
    """
    paymentDueExcludingTax: CurrencyMinorUnit
    """
    The human-readable checkout estimate summary.
    """
    summary: String!
  }

  """
  The details of changes to the hirer's contract consumption.
  """
  type SeekAnzAdProductContractConsumption {
    """
    The human-readable summary of contract consumption.
    """
    summary: String!
    """
    The type of contract consumption.

    Currently, three codes are defined:

    - \`SameAdType\` indicates payment due will be consumed from a contract of the same ad type as this product.
    - \`OtherAdType\` indicates payment due will be consumed from a contract of a different ad type to this product.
    - \`SameAdTypePlusInvoice\` indicates payment due will be consumed from a contract of the same ad type as this product and an invoice will be generated.
    """
    typeCode: String!
  }

  """
  The features supported by an ad product.

  These are features that have a dynamic impact on an integration partner's job posting flow.
  Ad products may have additional features that are implemented entirely within SEEK's systems.
  """
  type SeekAnzAdProductFeatures {
    """
    Whether the product supports advertisement branding.

    When false, the \`PostingInstruction.brandingId\` field will be ignored.
    """
    brandingIndicator: Boolean!
    """
    Whether the product supports bullet points in the search results.

    When false, \`SearchBulletPoint\` \`PositionFormattedDescription\`s will be silently discarded.
    """
    searchBulletPointsIndicator: Boolean!
  }

  """
  A message shown to the hirer for the current ad product.
  """
  type SeekAnzAdProductMessage {
    """
    The human-readable content of the message.
    """
    content: String!
    """
    The severity of the message.

    Currently, two codes are defined:

    - \`Informational\` indicates a message with helpful information for a hirer.
    - \`Critical\` indicates a message with critical information for a hirer.
    """
    severityCode: String!
    """
    The type of message.

    Currently, four codes are defined:
    - \`PricingError\` indicates a message relating to a pricing error.
    - \`PremiumPerformanceChange\` indicates a message relating to an impact on premium ad performance.
    - \`UpdatePricingIncrease\` indicates a message relating to a price increase in update mode for SEEK contracts.
    - \`ProductUnavailable\` indicates a message relating to an unavailable product.
    """
    typeCode: String!
    """
    The visibility of the message.

    Currently, two codes are defined:
    - \`ProductSelected\` indicates the message should be visible when the product is selected.
    - \`Always\` indicates the message should be always visible.
    """
    visibilityCode: String!
  }

  """
  The price for an ad product.
  """
  type SeekAnzAdProductPrice {
    """
    The product price without tax.
    """
    amountExcludingTax: CurrencyMinorUnit
    """
    The human-readable summary of the product price.
    """
    summary: String!
    """
    Whether taxes will be added when purchased.
    """
    taxedIndicator: Boolean!
    """
    Whether the price can be shown to the hirer.
    """
    visibleForHirerIndicator: Boolean!
  }

  """
  The role of an attachment within a profile.
  """
  enum SeekAttachmentRole {
    """
    A cover letter specific to a position opening.
    """
    COVER_LETTER @deprecated(reason: "Use Attachment.seekRoleCode")
    """
    A resume or CV.
    """
    RESUME @deprecated(reason: "Use Attachment.seekRoleCode")
    """
    A document supporting a position-specific selection criteria.
    """
    SELECTION_CRITERIA @deprecated(reason: "Use Attachment.seekRoleCode")
  }

  """
  The information required for inferring a SEEK-specific location.
  """
  input SeekPositionAddressInput {
    """
    The two-letter ISO 3166-1:2013 country code of the address, in uppercase.
    Include this field to improve inference if you have access to a reliable country code.
    If you only have access to the country name, please provide this within the \`formattedAddress\` field.
    """
    countryCode: String
    """
    The address of the location as text. For example \`60-88 Cremorne St, Cremorne VIC 3121, Australia\`.
    """
    formattedAddress: String!
    """
    The postal code of the location.
    Include this field to improve inference if you have access to a reliable postal code.
    """
    postalCode: String
  }

  """
  The source system for the process history item.
  """
  type SeekProcessHistoryItemSource {
    """
    Free text description of the source.
    """
    name: String!
  }

  """
  The source system for the process history item.
  """
  input SeekProcessHistoryItemSourceInput {
    """
    Free text description of the source.
    """
    name: String!
  }

  """
  An externally hosted video to display alongside advertisement details.
  """
  type SeekVideo {
    """
    The position relative to the advertisement details where the video is rendered.

    Currently, two codes are defined:

    - \`Above\` indicates the video will render above the advertisement details.
    - \`Below\` indicates the video will render below the advertisement details.
    """
    seekAnzPositionCode: String!
    """
    The URL of the video.
    """
    url: String!
  }

  """
  An externally hosted video to display alongside advertisement details.
  """
  input SeekVideoInput {
    """
    The position relative to the advertisement details where the video should be rendered.

    Currently, two codes are defined:

    - \`Above\` indicates the video will render above the advertisement details.
    - \`Below\` indicates the video will render below the advertisement details.
    """
    seekAnzPositionCode: String!
    """
    The URL of the video to display.

    Scheme requirements:

     - The \`seekAnz\` scheme requires a YouTube link in one of the following formats:

        - \`https://www.youtube.com/embed/aAgePQvHBQM\`
        - \`https://www.youtube.com/watch?v=aAgePQvHBQM\`
        - \`https://youtu.be/aAgePQvHBQM\`

       If the URL provided does not match the above criteria it will be ignored.
       Examples of unsupported formats include:

       - Links with additional query parameters: \`https://www.youtube.com/watch?ab_channel=SEEKJobs&v=aAgePQvHBQM\`
       - Mobile links: \`https://m.youtube.com/watch?v=aAgePQvHBQM\`
    """
    url: String!
  }

  """
  The organizations the query's access token can act on behalf of.
  """
  type SelfOrganizations {
    """
    The hirer the browser token is scoped to.

    This will be \`null\` when queried with a partner token.
    """
    hirer: HiringOrganization
    """
    The partner organization making the request.
    """
    partner: PartnerOrganization!
  }

  """
  A reference to a person associated with an object.
  """
  type SpecifiedPerson {
    """
    Methods of communication with the person.
    """
    communication: Communication!
    """
    The person's name.
    """
    name: PersonName!
    """
    The role of the person.

    Currently, two codes are defined:

    - \`Recruiter\` indicates a person recruiting for the position.
    - \`HiringManager\` indicates an employee that requested the position to be filled.
    """
    roleCode: String
  }

  """
  A reference to a person associated with an object.
  """
  input SpecifiedPersonInput {
    """
    Methods of communication with the person.
    """
    communication: CommunicationInput!
    """
    The person's name.
    """
    name: PersonNameInput!
    """
    The role of the person.

    Currently, two codes are defined:

    - \`Recruiter\` indicates a person recruiting for the position.
    - \`HiringManager\` indicates an employee that requested the position to be filled.

    This field is required when providing a position opening's \`personContacts\`.
    """
    roleCode: String
  }

  """
  A profile of a position opening.

  This contains information of how a position opening is presented as an internal requisition.
  """
  type UnpostedPositionProfile implements PositionProfile {
    """
    The occupational categories of the job.
    """
    jobCategories: [JobCategory!]!
    """
    The salary or compensation offered for the position.
    """
    offeredRemunerationPackage: RemunerationPackage!
    """
    An array of formatted position profile descriptions.
    """
    positionFormattedDescriptions: [PositionFormattedDescription!]!
    """
    The locations of the position.
    """
    positionLocation: [Location!]!
    """
    The \`PositionOpening\` that this profile was created under.
    """
    positionOpening: PositionOpening!
    """
    An array of identifiers for the \`HiringOrganization\`s that have the position.
    """
    positionOrganizations: [HiringOrganization!]!
    """
    An array of codes for the offered schedules for the position.

    Currently, two codes are defined:

    - \`FullTime\` indicates a full-time schedule.
    - \`PartTime\` indicates a part-time schedule.

    If the offered schedule isn't known this will be \`null\`.
    """
    positionScheduleTypeCodes: [String!]
    """
    A short phrase describing the position as it would be listed on a business card or in a company directory.
    """
    positionTitle: String!
    """
    The object identifier for the \`PositionProfile\`.

    This is duplicated from the \`profileId\` field to satisfy the \`PositionProfile\` interface.
    """
    positionUri: String!
    """
    The instructions related to posting the job ad.
    """
    postingInstructions: [PostingInstruction!]!
    """
    The identifier for the \`PositionProfile\`.
    """
    profileId: ObjectIdentifier!
    """
    A human-readable name given to the profile.

    This in addition to the \`positionTitle\` can help identify the profile to an end user.
    """
    profileName: String
    """
    A work type code for the \`seekAnz\` scheme.

    Currently, four codes are defined:

    - \`Casual\` indicates a casual position.
    - \`ContractTemp\` indicates a fixed-length contract position.
    - \`FullTime\` indicates a full-time position.
    - \`PartTime\` indicates a part-time position.

    For positions in other schemes this will be \`null\`.
    """
    seekAnzWorkTypeCode: String
    """
    The set of questions presented to candidates during an application.

    The questionnaire responses will be available as \`CandidateProfile.seekQuestionnaireSubmission\` on the candidate's application profile.
    """
    seekApplicationQuestionnaire: ApplicationQuestionnaire
    """
    An optional opaque billing reference.

    SEEK does not use this field on unposted position profiles.
    """
    seekBillingReference: String
    """
    Whether the position profile was created by the requesting partner.

    If your software cannot ingest objects that are created by another source,
    this can be used to filter out such position profiles.

    This indicator is never \`null\` for unposted position profiles.
    """
    seekCreatedBySelfIndicator: Boolean
    """
    An optional hirer-provided opaque job reference.
    """
    seekHirerJobReference: String
    """
    An optional field for storing additional data with a \`PositionProfile\`.

    The metadata is not used by SEEK and won't be seen by hirers or candidates.

    This field has a maximum length of 1,000 characters.
    """
    seekPartnerMetadata: String
    """
    The type of position profile, i.e. \`UnpostedPositionProfile\`.
    """
    seekTypeCode: String!
    """
    The video to render within the job ad.
    """
    seekVideo: SeekVideo
  }

  """
  The input parameter for the \`updateCandidateProcessHistoryItem\` mutation.
  """
  input UpdateCandidateProcessHistoryItemInput {
    """
    The details of the  \`CandidateProcessHistoryItem\` to be updated.
    """
    candidateProcessHistoryItem: UpdateCandidateProcessHistoryItem_CandidateProcessHistoryItemInput!
  }

  """
  The response from the \`updateCandidateProcessHistoryItem\` mutation.
  """
  type UpdateCandidateProcessHistoryItemPayload {
    """
    The details of the \`CandidateProcessHistoryItem\` that was updated.
    """
    candidateProcessHistoryItem: CandidateProcessHistoryItem!
  }

  """
  The details of the \`CandidateProcessHistoryItem\` to be updated.
  """
  input UpdateCandidateProcessHistoryItem_CandidateProcessHistoryItemInput {
    """
    The executed action that constitutes this history item.

    This action may or may not trigger a change in the status of the underlying process.
    For example, an action may be to add a note against a candidate's profile,
    which has no material effect on the stage through the application process.
    """
    action: CandidateProcessActionInput!
    """
    The date & time the action was executed.
    """
    actionDate: DateTime!
    """
    The identifier for the \`CandidateProcessHistoryItem\` to be updated.
    """
    id: String!
    """
    The position profile that the history item relates to.

    This is null for interactions that are not specific to an individual position,
    such as a general interview with a recruiter.
    """
    positionProfile: CandidateProcessHistoryItem_PositionProfileInput
    """
    The parties that executed the action.
    """
    primaryParties: [CandidateProcessPartyInput!]!
    """
    The underlying source for the item.

    For example, items related to an application process would note the job board or other channel that sourced the application.

    This is required if \`positionProfile\` is specified.
    """
    seekSource: SeekProcessHistoryItemSourceInput
    """
    The current status of the underlying process.

    For example, a candidate in an application process may progress through a series of statuses like applied, interviewed, offered, hired.
    """
    status: CandidateProcessStatusInput
  }

  """
  The input parameter for the \`updatePositionOpeningPersonContacts\` mutation.
  """
  input UpdatePositionOpeningPersonContactsInput {
    """
    The details of the position opening to be updated.
    """
    positionOpening: UpdatePositionOpeningPersonContactsPositionOpeningInput!
  }

  """
  The response from the \`updatePositionOpeningPersonContacts\` mutation.
  """
  type UpdatePositionOpeningPersonContactsPayload {
    """
    The details of the updated position opening.
    """
    positionOpening: PositionOpening!
  }

  """
  The details of the position opening to be updated.
  """
  input UpdatePositionOpeningPersonContactsPositionOpeningInput {
    """
    The identifier for the \`PositionOpening\` to be updated.
    """
    documentId: String!
    """
    Specific contact people for the position opening at the party.

    The name, email address & role of at least one contact person must be provided.
    A maximum of 10 contact people may be provided.
    """
    personContacts: [SpecifiedPersonInput!]!
  }

  """
  The input parameter for the \`updatePositionOpeningStatus\` mutation.
  """
  input UpdatePositionOpeningStatusInput {
    """
    The details of the position opening to be updated.
    """
    positionOpening: UpdatePositionOpeningStatusPositionOpeningInput!
  }

  """
  The response from the \`updatePositionOpeningStatus\` mutation.
  """
  type UpdatePositionOpeningStatusPayload {
    """
    The details of the updated position opening.
    """
    positionOpening: PositionOpening!
  }

  """
  The details of the position opening to have its status updated.
  """
  input UpdatePositionOpeningStatusPositionOpeningInput {
    """
    The identifier for the \`PositionOpening\` to be updated.
    """
    documentId: String!
    """
    The status of the position opening.

    Currently, three codes are defined:

    - \`Incomplete\` indicates the position opening is in a draft state.
    - \`Active\` indicates the position opening is open.
    - \`Closed\` indicates the position opening has been closed.
    """
    statusCode: String!
  }

  """
  The input parameter for the \`updatePostedPositionProfile\` mutation.
  """
  input UpdatePostedPositionProfileInput {
    """
    The values to replace on a posted position profile.
    """
    positionProfile: UpdatePostedPositionProfile_PositionProfileInput!
  }

  """
  The output of the \`updatePostedPositionProfile\` mutation.
  """
  type UpdatePostedPositionProfilePayload {
    """
    Attributes of the updated position profile.
    """
    positionProfile: UpdatePostedPositionProfile_PositionProfilePayload!
  }

  """
  The values to replace on a posted position profile.
  """
  input UpdatePostedPositionProfile_PositionProfileInput {
    """
    An array of \`JobCategory\` identifiers.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one identifier for a child job category.
    """
    jobCategories: [String!]!
    """
    The salary or compensation offered for the position.
    """
    offeredRemunerationPackage: RemunerationPackageInput!
    """
    An array of formatted position profile descriptions.
    """
    positionFormattedDescriptions: [PositionFormattedDescriptionInput!]!
    """
    An array of \`Location\` identifiers.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element.
    """
    positionLocation: [String!]!
    """
    An array of identifiers for the \`HiringOrganization\`s that have the position.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element that matches the position opening's \`PostingRequester.id\`.
    """
    positionOrganizations: [String!]!
    """
    An array of codes for the offered schedules for the position.

    Currently, two codes are defined:

    - \`FullTime\` indicates a full-time schedule.
    - \`PartTime\` indicates a part-time schedule.

    Omit this field for the \`seekAnz\` scheme.
    """
    positionScheduleTypeCodes: [String!]
    """
    A short phrase describing the position as it would be listed on a business card or in a company directory.

    This field has a maximum length of 80 characters.
    """
    positionTitle: String!
    """
    The instructions related to posting the job ad.

    Scheme requirements:

    - The \`seekAnz\` scheme requires exactly one element.
    """
    postingInstructions: [UpdatePostingInstructionInput!]!
    """
    The identifier for the posted \`PositionProfile\` to update.
    """
    profileId: String!
    """
    A SEEK ANZ work type code.

    For positions in \`seekAnz\` scheme, this field is used instead of \`positionScheduleTypeCodes\`.

    Currently, four codes are defined:

    - \`Casual\` indicates a casual position.
    - \`ContractTemp\` indicates a fixed-length contract position.
    - \`FullTime\` indicates a full-time position.
    - \`PartTime\` indicates a part-time position.

    Scheme requirements:

    - This field is required for the \`seekAnz\` scheme.
    - Omit this field for other schemes.
    """
    seekAnzWorkTypeCode: String
    """
    This field is deprecated and must be omitted from all inputs.

    Do not explicitly set to \`null\` or any other value.
    """
    seekApplicationQuestionnaireId: String
    """
    An optional opaque billing reference.

    This appears on the invoice when SEEK bills the hirer for the job ad.

    This field has a maximum length of 50 characters.
    """
    seekBillingReference: String
    """
    An optional hirer-provided opaque job reference.

    This field has a maximum length of 50 characters.
    """
    seekHirerJobReference: String
    """
    An optional field for storing additional data with a \`PositionProfile\`.

    The metadata is not used by SEEK and won't be seen by hirers or candidates.

    This field has a maximum length of 1,000 characters.
    """
    seekPartnerMetadata: String
    """
    The video to render within the job ad.
    """
    seekVideo: SeekVideoInput
  }

  """
  Attributes of the updated position profile.
  """
  type UpdatePostedPositionProfile_PositionProfilePayload {
    """
    The identifier for the updated \`PositionProfile\`.
    """
    profileId: ObjectIdentifier!
  }

  """
  Information about how to post a job ad and where to direct its candidate applications.
  """
  input UpdatePostingInstructionInput {
    """
    An array of methods for applying to the position.

    If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
    Native applications will emit a \`CandidateApplicationCreated\` event that points to a \`CandidateProfile\` object.

    The application method of a job ad must not be changed once it has been posted.
    Attempting to switch between link out and native apply when updating a job ad will fail with a \`BAD_USER_INPUT\` error or result in unexpected behaviour.
    This field should only be used to update the \`ApplicationMethod.applicationUri\` of an existing link out job ad.

    Scheme requirements:

    - For the \`seekAnz\` scheme, this field is limited to a single element.
      Requests with more than 1 element will fail.
    """
    applicationMethods: [ApplicationMethodInput!]
    """
    The identifier for the \`AdvertisementBranding\` to apply to the posted job ad.

    Scheme requirements:

    - For the \`seekAnz\` scheme, this field's behavior is dependent on the \`SeekAnzAdProductFeatures\` of the product set in the \`seekAnzAdvertisementType\` field.

      When the product's \`SeekAnzAdProductFeatures.brandingIndicator\` value is false, this field will be silently ignored.
    """
    brandingId: String
    """
    The end date of the posting.

    Scheme requirements:

    - For the \`seekAnz\` scheme this must be no more than 30 days after the job ad was initially posted.

      If an end date is omitted, the job ad's existing end date will be preserved.
    """
    end: DateTime
    """
    The identifier for the \`AdvertisementProduct\`.
    """
    seekAdvertisementProductId: String
    """
    A SEEK ANZ advertisement type code.

    Currently, three codes are defined:

    - \`Classic\` indicates a Classic job ad.
    - \`StandOut\` indicates a StandOut job ad.
    - \`Premium\` indicates a Premium job ad.

    Scheme requirements:

    - This field is required for the \`seekAnz\` scheme.
    - Omit this field for other schemes.
    """
    seekAnzAdvertisementType: String
  }

  """
  The input parameter for the \`updateUnpostedPositionProfile\` mutation.
  """
  input UpdateUnpostedPositionProfileInput {
    """
    An unposted profile of a position opening to update.
    """
    positionProfile: UpdateUnpostedPositionProfile_PositionProfileInput!
  }

  """
  The response from the \`updateUnpostedPositionProfile\` mutation.
  """
  type UpdateUnpostedPositionProfilePayload {
    """
    Attributes of the updated unposted position profile.
    """
    positionProfile: UnpostedPositionProfile!
  }

  """
  An unposted profile of a position opening to update.
  """
  input UpdateUnpostedPositionProfile_PositionProfileInput {
    """
    An array of \`JobCategory\` identifiers.

    A maximum of 10 job categories may be provided.
    """
    jobCategories: [String!]!
    """
    The salary or compensation offered for the position.
    """
    offeredRemunerationPackage: RemunerationPackageInput!
    """
    An array of formatted position profile descriptions.

    A maximum of 10 formatted descriptions may be provided.
    """
    positionFormattedDescriptions: [PositionFormattedDescriptionInput!]!
    """
    An array of \`Location\` identifiers.

    A maximum of 10 locations may be provided.
    """
    positionLocation: [String!]!
    """
    An array of codes for the offered schedules for the position.

    Currently, two codes are defined:

    - \`FullTime\` indicates a full-time schedule.
    - \`PartTime\` indicates a part-time schedule.
    """
    positionScheduleTypeCodes: [String!]
    """
    A short phrase describing the position as it would be listed on a business card or in a company directory.

    This field has a maximum length of 80 characters.
    """
    positionTitle: String!
    """
    The identifier for the unposted \`PositionProfile\` to update.
    """
    profileId: String!
    """
    A human-readable name given to the profile.

    This in addition to the \`positionTitle\` can help identify the profile to an end user.
    """
    profileName: String
    """
    An optional opaque billing reference.

    SEEK does not use this field on unposted position profiles.

    This field has a maximum length of 50 characters.
    """
    seekBillingReference: String
    """
    An optional hirer-provided opaque job reference.

    This field has a maximum length of 50 characters.
    """
    seekHirerJobReference: String
    """
    An optional field for storing additional data with a \`PositionProfile\`.

    The metadata is not used by SEEK and won't be seen by hirers or candidates.

    This field has a maximum length of 1,000 characters.
    """
    seekPartnerMetadata: String
  }

  """
  The input parameter for the \`updateUploadedCandidatePerson\` mutation.
  """
  input UpdateUploadedCandidatePersonInput {
    """
    The details of the uploaded candidate to be updated.
    """
    candidate: UpdateUploadedCandidatePerson_CandidateInput!
  }

  """
  The response from the \`updateUploadedCandidatePerson\` mutation.
  """
  union UpdateUploadedCandidatePersonPayload =
      UpdateUploadedCandidatePersonPayload_Conflict
    | UpdateUploadedCandidatePersonPayload_Success

  """
  The conflict result for the \`updateUploadedCandidatePerson\` mutation.
  """
  type UpdateUploadedCandidatePersonPayload_Conflict {
    """
    The details of the conflicting candidate.
    """
    conflictingCandidate: Candidate!
  }

  """
  The success result for the \`updateUploadedCandidatePerson\` mutation.
  """
  type UpdateUploadedCandidatePersonPayload_Success {
    """
    The details of the uploaded candidate that was updated.
    """
    candidate: Candidate!
  }

  """
  The details of the uploaded candidate to be updated.
  """
  input UpdateUploadedCandidatePerson_CandidateInput {
    """
    The identifier for the uploaded \`Candidate\` to be updated.
    """
    documentId: String!
    """
    The personal details of the uploaded candidate to be updated.

    At least one email address is required in \`communication\`,
    and one of the provided values must match \`seekPrimaryEmailAddress\`.

    If no value is provided for physical addresses in \`communication\` it will be treated as an empty list and will remove any previously uploaded addresses.
    """
    person: CandidatePersonInput!
    """
    The candidate's primary email address.

    The value must match one of the candidate's email addresses.

    This field has a maximum length of 255 bytes in UTF-8 encoding.
    """
    seekPrimaryEmailAddress: String!
  }

  """
  The input parameter for the \`updateUploadedCandidateProfileActions\` mutation.
  """
  input UpdateUploadedCandidateProfileActionsInput {
    """
    The details of the uploaded candidate profile to be updated.
    """
    candidateProfile: UpdateUploadedCandidateProfileActions_CandidateProfileInput!
  }

  """
  The response from the \`updateUploadedCandidateProfileActions\` mutation.
  """
  type UpdateUploadedCandidateProfileActionsPayload {
    """
    The details of the uploaded candidate profile that was updated.

    The uploaded candidate is available in the \`candidate\` field.
    """
    candidateProfile: CandidateProfile!
  }

  """
  The details of the uploaded candidate profile to be updated.
  """
  input UpdateUploadedCandidateProfileActions_CandidateProfileInput {
    """
    The identifier for the uploaded \`CandidateProfile\` to be updated.
    """
    profileId: String!
    """
    Any associated actions that can be performed on the candidate profile.

    Only one of each type of action is permitted for the candidate profile.
    Currently, only a \`ViewProfile\` action type is defined to provide a URL to view the candidate's profile.
    """
    seekActions: [CandidateProcessActionInput!]!
  }

  """
  The input parameter for the \`updateUploadedCandidateProfileDates\` mutation.
  """
  input UpdateUploadedCandidateProfileDatesInput {
    """
    The details of the uploaded candidate profile to be updated.
    """
    candidateProfile: UpdateUploadedCandidateProfileDates_CandidateProfileInput!
  }

  """
  The response from the \`updateUploadedCandidateProfileDates\` mutation.
  """
  type UpdateUploadedCandidateProfileDatesPayload {
    """
    The details of the uploaded candidate profile that was updated.

    The uploaded candidate is available in the \`candidate\` field.
    """
    candidateProfile: CandidateProfile!
  }

  """
  The details of the uploaded candidate profile to be updated.
  """
  input UpdateUploadedCandidateProfileDates_CandidateProfileInput {
    """
    When the candidate profile was first created in the partner system.

    Expects a RFC 3339 compliant date time.
    Millisecond precision is optional, and set to 0 if not provided.
    """
    createDateTime: DateTime!
    """
    The identifier for the uploaded \`CandidateProfile\` to be updated.
    """
    profileId: String!
    """
    When the candidate profile was last updated in the partner system.

    Expects a RFC 3339 compliant date time.
    Millisecond precision is optional, and set to 0 if not provided.
    """
    updateDateTime: DateTime!
  }

  """
  The input parameter for the \`updateUploadedCandidateProfilePositionPreferences\` mutation.
  """
  input UpdateUploadedCandidateProfilePositionPreferencesInput {
    """
    The details of the uploaded candidate profile to be updated.
    """
    candidateProfile: UpdateUploadedCandidateProfilePositionPreferences_CandidateProfileInput!
  }

  """
  The response from the \`updateUploadedCandidateProfilePositionPreferences\` mutation.
  """
  type UpdateUploadedCandidateProfilePositionPreferencesPayload {
    """
    The details of the uploaded candidate profile that was updated.

    The uploaded candidate is available in the \`candidate\` field.
    """
    candidateProfile: CandidateProfile!
  }

  """
  The details of the uploaded candidate profile to be updated.
  """
  input UpdateUploadedCandidateProfilePositionPreferences_CandidateProfileInput {
    """
    The candidate's preferences in an ideal position.

    \`ProactiveSourcing\` candidates may have 0–1 position preferences.
    """
    positionPreferences: [PositionPreferenceInput!]!
    """
    The identifier for the uploaded \`CandidateProfile\` to be updated.
    """
    profileId: String!
  }

  """
  The input parameter for the \`updateWebhookSubscriptionDeliveryConfiguration\` mutation.
  """
  input UpdateWebhookSubscriptionDeliveryConfigurationInput {
    """
    The details of the webhook subscription to be updated.
    """
    webhookSubscription: UpdateWebhookSubscriptionDeliveryConfiguration_SubscriptionInput!
  }

  """
  The response from the \`updateWebhookSubscriptionDeliveryConfiguration\` mutation.
  """
  union UpdateWebhookSubscriptionDeliveryConfigurationPayload =
      UpdateWebhookSubscriptionDeliveryConfigurationPayload_Conflict
    | UpdateWebhookSubscriptionDeliveryConfigurationPayload_Success

  """
  The conflict result for the \`updateWebhookSubscriptionDeliveryConfiguration\` mutation.

  Webhook subscriptions must have a unique combination of \`eventTypeCode\`, \`schemeId\`, \`url\` & \`hirerId\` fields.
  Attempting to update a webhook subscription to match an existing subscription will result in a conflict.
  """
  type UpdateWebhookSubscriptionDeliveryConfigurationPayload_Conflict {
    """
    The details of the conflicting webhook subscription.
    """
    conflictingWebhookSubscription: WebhookSubscription!
  }

  """
  The success result for the \`updateWebhookSubscriptionDeliveryConfiguration\` mutation.
  """
  type UpdateWebhookSubscriptionDeliveryConfigurationPayload_Success {
    """
    The details of the updated webhook subscription.
    """
    webhookSubscription: WebhookSubscription!
  }

  """
  The details of the webhook subscription delivery configuration to be updated.
  """
  input UpdateWebhookSubscriptionDeliveryConfiguration_SubscriptionInput {
    """
    The identifier for the \`WebhookSubscription\`.
    """
    id: String!
    """
    The maximum number of events that will be sent in each HTTP request.

    This number must be between 1 and 10 inclusive. Defaults to 10.
    """
    maxEventsPerAttempt: Int
    """
    The subscriber-owned URL where events will be sent to.
    """
    url: String!
  }

  """
  The input parameter for the \`updateWebhookSubscriptionSigningConfiguration\` mutation.
  """
  input UpdateWebhookSubscriptionSigningConfigurationInput {
    """
    The details of the webhook subscription to be updated.
    """
    webhookSubscription: UpdateWebhookSubscriptionSigningConfiguration_SubscriptionInput!
  }

  """
  The response from the \`updateWebhookSubscriptionSigningConfiguration\` mutation.
  """
  type UpdateWebhookSubscriptionSigningConfigurationPayload {
    """
    The details of the updated webhook subscription.
    """
    webhookSubscription: WebhookSubscription!
  }

  """
  The details of the webhook subscription signing configuration to be updated.
  """
  input UpdateWebhookSubscriptionSigningConfiguration_SubscriptionInput {
    """
    The identifier for the \`WebhookSubscription\`.
    """
    id: String!
    """
    The secret for signing webhooks.

    This must be specified if \`signingAlgorithmCode\` is not \`None\`.
    It is used as the key to generate a message authentication code for each request.

    The secret should be a random string with high entropy that is not reused for any other purpose.

    This field has a maximum length of 255 bytes in UTF-8 encoding.
    """
    secret: String
    """
    The algorithm for signing webhooks.

    Currently, two codes are defined:

    - \`None\` indicates no signature will be attached.
    - \`SeekHmacSha512\` indicates a HMAC SHA-512 hex digest will be attached to each request as a \`Seek-Signature\` header.

    A webhook's signature can be used to validate that the request originated from SEEK.

    Use a constant-time algorithm to validate the signature.
    Regular comparison methods like the \`==\` operator are susceptible to timing attacks.
    """
    signingAlgorithmCode: String!
  }

  """
  The input parameter for the \`uploadCandidate\` mutation.
  """
  input UploadCandidateInput {
    """
    The details of the \`Candidate\` to be uploaded.
    """
    candidate: UploadCandidate_CandidateInput!
    """
    The details of the \`CandidateProfile\` to be uploaded.
    """
    candidateProfile: UploadCandidate_CandidateProfileInput!
    """
    The details of the \`HiringOrganization\` that submitted the candidate profile.
    """
    hiringOrganization: UploadCandidate_HiringOrganizationInput!
  }

  """
  The response from the \`uploadCandidate\` mutation.
  """
  union UploadCandidatePayload =
      UploadCandidatePayload_Conflict
    | UploadCandidatePayload_Success

  """
  The conflict result for the \`uploadCandidate\` mutation.
  """
  type UploadCandidatePayload_Conflict {
    """
    The details of the conflicting candidate.

    The conflicting candidate profile is available in the \`profiles\` field.
    """
    conflictingCandidate: Candidate!
    """
    The details of the hiring organization that uploaded the candidate and their profile.
    """
    hiringOrganization: HiringOrganization!
  }

  """
  The success result for the \`uploadCandidate\` mutation.
  """
  type UploadCandidatePayload_Success {
    """
    The details of the uploaded candidate.

    The uploaded candidate profile is available in the \`profiles\` field.
    """
    candidate: Candidate!
    """
    The details of the process history items uploaded alongside the candidate.

    The upload operation is atomic;
    if you receive an \`UploadCandidatePayload_Success\` payload,
    all process history items were successfully uploaded.
    Input order is preserved to allow your software to record the \`id\` assigned to each item.
    """
    candidateProcessHistoryItems: [CandidateProcessHistoryItem!]!
    """
    The details of the hiring organization that uploaded the candidate and their profile.
    """
    hiringOrganization: HiringOrganization!
  }

  """
  The details of the candidate to be uploaded.
  """
  input UploadCandidate_CandidateInput {
    """
    Instructions on how this candidate should be distributed.

    Currently, one product code is defined for uploaded candidates:

    - \`ProactiveSourcing\` indicates that the candidate may be viewed in SEEK Talent Search.
    """
    distributionGuidelines: DistributionGuidelinesInput!
    """
    The personal details of the candidate to be uploaded.

    At least one email address is required in \`communication\`,
    and one of the provided values must match \`seekPrimaryEmailAddress\`.
    """
    person: CandidatePersonInput!
    """
    The candidate's primary email address.

    The value must match one of the candidate's email addresses.
    Duplicate uploads will result in a \`BAD_USER_INPUT\` error.

    This field has a maximum length of 255 bytes in UTF-8 encoding.
    """
    seekPrimaryEmailAddress: String!
  }

  """
  The details of the candidate profile to be uploaded.
  """
  input UploadCandidate_CandidateProfileInput {
    """
    When the candidate profile was first created in the partner system.

    Expects a RFC 3339 compliant date time.
    Millisecond precision is optional, and set to 0 if not provided.
    """
    createDateTime: DateTime!
    """
    The candidate's preferences in an ideal position.

    \`ProactiveSourcing\` candidates may have 0–1 position preferences.
    """
    positionPreferences: [PositionPreferenceInput!]!
    """
    Any associated actions that can be performed on the candidate profile.

    Only one of each type of action is permitted for the candidate profile.
    Currently, only a \`ViewProfile\` action type is defined to provide a URL to view the candidate's profile.
    """
    seekActions: [CandidateProcessActionInput!]!
    """
    The workflow process history of the candidate.

    A maximum of 20 process history items may be provided on initial upload.
    """
    seekProcessHistory: [CandidateProcessHistoryItemInput!]!
    """
    When the candidate profile was last updated in the partner system.

    Expects a RFC 3339 compliant date time.
    Millisecond precision is optional, and set to 0 if not provided.
    """
    updateDateTime: DateTime!
  }

  """
  Details of the \`HiringOrganization\` that submitted the candidate profile.
  """
  input UploadCandidate_HiringOrganizationInput {
    """
    The identifier for the \`HiringOrganization\` that submitted the candidate profile.
    """
    id: String!
  }

  """
  An address of a human-accessible web page.
  """
  type WebUrl {
    """
    The URL of the web page.
    """
    url: String!
  }

  """
  An address of a human-accessible web page.
  """
  input WebUrlInput {
    """
    The URL of the web page.
    """
    url: String!
  }

  """
  An attempt to deliver a specific \`Event\` to a \`WebhookSubscription\`.
  """
  type WebhookAttempt {
    """
    The date & time that the webhook attempt was acknowledged or timed out.
    """
    createDateTime: DateTime!
    """
    The event that was attempted to be delivered.
    """
    event: Event!
    """
    The identifier for the \`WebhookAttempt\`.
    """
    id: ObjectIdentifier!
    """
    The HTTP request containing the webhook attempt.
    """
    webhookRequest: WebhookRequest!
    """
    The webhook subscription that was the target of the delivery attempt.

    This will be \`null\` if the subscription has since been deleted.
    """
    webhookSubscription: WebhookSubscription
  }

  """
  A webhook attempt in a paginated list.
  """
  type WebhookAttemptEdge {
    """
    The opaque cursor to the webhook attempt.

    This can be used as a subsequent pagination argument.
    """
    cursor: String!
    """
    The actual webhook attempt.
    """
    node: WebhookAttempt!
  }

  """
  A page of webhook attempts.
  """
  type WebhookAttemptsConnection {
    """
    The page of webhook attempts and their corresponding cursors.
    """
    edges: [WebhookAttemptEdge!]!
    """
    The pagination metadata for this page of webhook attempts.
    """
    pageInfo: PageInfo!
  }

  """
  The criteria to filter webhook attempts by.

  These are \`WebhookAttempt\`-specific extensions on top of the standard pagination arguments \`before\`, \`after\`, \`first\` and \`last\`.
  """
  input WebhookAttemptsFilterInput {
    """
    The creation date & time that resulting webhook attempts must succeed.

    This can be used to initiate the retrieval of paginated results.
    Subsequent queries should use the opaque cursors returned from \`WebhookAttemptsConnection\`.
    """
    afterDateTime: DateTime
    """
    The creation date & time that resulting webhook attempts must precede.

    This can be used to initiate the retrieval of paginated results.
    Subsequent queries should use the opaque cursors returned from \`WebhookAttemptsConnection\`.
    """
    beforeDateTime: DateTime
    """
    The high-level HTTP result of the webhook attempts to retrieve.

    See the \`WebhookRequest.descriptionCode\` documentation for a list of possible description codes.

    If this is not provided then all attempts will be returned regardless of their result.
    """
    descriptionCodes: [String!]
  }

  """
  An HTTP request to a \`WebhookSubscription\`.

  HTTP requests are associated with one or more \`WebhookAttempt\`s representing each \`Event\` in the request body.
  """
  type WebhookRequest {
    """
    The list of events that were attempted to be delivered in the request body.
    """
    attempts: [WebhookAttempt!]!
    """
    The date & time the HTTP request occurred.

    This field has weak ordering guarantees, so it should not be used as a pagination argument.
    """
    createDateTime: DateTime!
    """
    The high-level description of the HTTP request's result.

    Currently, four codes are defined:

    - \`BadResponse\` indicates the subscription endpoint returned a non-2xx HTTP response.
    - \`InvalidUrl\` indicates the subscription URL did not pass validation.
    - \`RequestTimeout\` indicates the subscription endpoint took more than 10 seconds to respond.
    - \`Success\` indicates the subscription endpoint returned a 2xx HTTP response.
    """
    descriptionCode: String!
    """
    The latency of the HTTP request in milliseconds.

    This will be \`null\` if the request wasn't made (i.e. an \`InvalidUrl\` error occurred).
    """
    latencyMs: Int
    """
    The identifier for the HTTP request.

    This is included in the request as an \`X-Request-Id\` custom header.
    """
    requestId: String!
    """
    The HTTP status code returned by the subscription endpoint.

    When an HTTP response wasn't received a synthetic status code will be generated:

    - For \`InvalidUrl\` the status code will be set to \`400\`.
    - For \`RequestTimeout\` the status code will be set to \`504\`.
    """
    statusCode: Int!
    """
    The webhook subscription that was the target of the HTTP request.

    This will be \`null\` if the subscription has since been deleted.
    """
    webhookSubscription: WebhookSubscription
  }

  """
  A webhook request in a paginated list.
  """
  type WebhookRequestEdge {
    """
    The opaque cursor to the webhook request.

    This can be used as a subsequent pagination argument.
    """
    cursor: String!
    """
    The actual webhook request.
    """
    node: WebhookRequest!
  }

  """
  The criteria to filter webhook requests by.

  These are \`WebhookRequest\`-specific extensions on top of the standard pagination arguments \`before\`, \`after\`, \`first\` and \`last\`.
  """
  input WebhookRequestFilterInput {
    """
    The creation date & time that resulting webhook requests must succeed.

    This can be used to initiate the retrieval of paginated results.
    Subsequent queries should use the opaque cursors returned from \`WebhookRequestsConnection\`.
    """
    afterDateTime: DateTime
    """
    The creation date & time that resulting webhook requests must precede.

    This can be used to initiate the retrieval of paginated results.
    Subsequent queries should use the opaque cursors returned from \`WebhookRequestsConnection\`.
    """
    beforeDateTime: DateTime
    """
    The high-level HTTP result of the webhook requests to retrieve.

    See the \`WebhookRequest.descriptionCode\` documentation for a list of possible description codes.

    If this is not provided then all requests will be returned regardless of their result.
    """
    descriptionCodes: [String!]
  }

  """
  A page of webhook requests.
  """
  type WebhookRequestsConnection {
    """
    The page of webhook requests and their corresponding cursors.
    """
    edges: [WebhookRequestEdge!]!
    """
    The pagination metadata for this page of webhook requests.
    """
    pageInfo: PageInfo!
  }

  """
  A subscription for a given event type and scheme to be delivered via webhook.

  Events are delivered in batches with a HTTP POST request to the specified subscription URL.
  """
  type WebhookSubscription {
    """
    The date & time the webhook subscription was created.

    Initial \`afterDateTime\` and \`beforeDateTime\` filters apply to this field.
    """
    createDateTime: DateTime!
    """
    The type of event.

    See \`Event\` implementations for a list of supported values.
    """
    eventTypeCode: String!
    """
    The optional hirer associated with this webhook subscription.

    This will only be accessible if there is an active relationship between the partner and hirer.

    By default webhook subscriptions will send events from all hirers the partner has access to.
    A non-null \`hirer\` field indicates that this subscription is filtered to a single hirer.
    """
    hirer: HiringOrganization
    """
    The optional hirer ID to receive events from.

    By default webhook subscriptions will send events from all hirers the partner has access to.
    A non-null \`hirerId\` indicates that this subscription is filtered to a single hirer.
    """
    hirerId: ObjectIdentifier
    """
    The identifier for the \`WebhookSubscription\`.
    """
    id: ObjectIdentifier!
    """
    The maximum number of events that will be sent in each HTTP request.

    This number is between 1 and 10 inclusive. Defaults to 10.
    """
    maxEventsPerAttempt: Int!
    """
    The data source for the event.

    Currently, only \`seekAnz\` and \`seekAnzPublicTest\` are supported.
    """
    schemeId: String!
    """
    The algorithm for signing webhooks.

    Currently, two codes are defined:

    - \`None\` indicates no signature will be attached.
    - \`SeekHmacSha512\` indicates a HMAC SHA-512 hex digest will be attached to each request as a \`Seek-Signature\` header.

    A webhook's signature can be used to validate that the request originated from SEEK.

    Use a constant-time algorithm to validate the signature.
    Regular comparison methods like the \`==\` operator are susceptible to timing attacks.
    """
    signingAlgorithmCode: String!
    """
    The date & time the webhook subscription was last updated.
    """
    updateDateTime: DateTime!
    """
    The subscriber-owned URL where events are sent to.
    """
    url: String!
    """
    A page of webhook requests for the subscription matching the specified criteria.

    A maximum of 100 webhook requests can be returned in a single page.
    Additional webhook requests can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest known request if no pagination arguments are provided.
    """
    webhookRequests(
      """
      An opaque cursor to the earlier bounding webhook request.

      Resulting webhook requests will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding webhook request.

      Resulting webhook requests will _precede_ this cursor.
      """
      before: String
      """
      The additional \`WebhookRequest\`-specific criteria to filter by.
      """
      filter: WebhookRequestFilterInput
      """
      The upper limit of webhook requests to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess webhook requests will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of webhook requests to return from the end of the list.

      Excess webhook requests will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
    ): WebhookRequestsConnection!
    """
    A page of replays for the current webhook subscription matching the specified criteria.

    A maximum of 100 webhook subscription replays can be returned in a single page.
    Additional subscription replays can be queried using a pagination cursor.

    The result list is returned in ascending creation date & time order.
    It starts from the earliest subscription replay if no pagination arguments are provided.
    """
    webhookSubscriptionReplays(
      """
      An opaque cursor to the earlier bounding webhook subscription replay.

      Resulting subscription replays will _succeed_ this cursor.
      """
      after: String
      """
      An opaque cursor to the later bounding webhook subscription replay.

      Resulting subscription replays will _precede_ this cursor.
      """
      before: String
      """
      The additional \`WebhookSubscriptionReplay\`-specific criteria to filter by.
      """
      filter: WebhookSubscriptionReplaysFilterInput
      """
      The upper limit of webhook subscription replays to return from the start of the list.

      Defaults to 10 if neither \`first\` nor \`last\` are specified.
      Excess subscription replays will be trimmed from the end of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      first: Int
      """
      The upper limit of webhook subscription replays to return from the end of the list.

      Excess subscription replays will be trimmed from the start of the list.

      \`first\` and \`last\` cannot be specified in the same query.
      """
      last: Int
    ): WebhookSubscriptionReplaysConnection!
  }

  """
  A webhook subscription in a paginated list.
  """
  type WebhookSubscriptionEdge {
    """
    The opaque cursor to the webhook subscription.

    This can be used as a subsequent pagination argument.
    """
    cursor: String!
    """
    The actual webhook subscription.
    """
    node: WebhookSubscription!
  }

  """
  The state of a request to replay events for a \`WebhookSubscription\`.
  """
  type WebhookSubscriptionReplay {
    """
    The date & time that the webhook subscription replay was created.
    """
    createDateTime: DateTime!
    """
    The identifier for the \`WebhookSubscriptionReplay\`.
    """
    id: ObjectIdentifier!
    """
    The original request for the \`WebhookSubscriptionReplay\`.
    """
    request: WebhookSubscriptionReplayRequest!
    """
    The current status of the replay.

    Currently, the following status codes are defined:

    - \`Submitted\`
    - \`Running\`
    - \`Completed\`
    - \`Cancelled\`
    """
    statusCode: String!
    """
    The date & time that the subscription replay was last updated.

    Subscription replays are updated whenever the replay makes forward progress.
    """
    updateDateTime: DateTime!
    """
    The webhook subscription that was the target of the replay.

    This will be \`null\` if the subscription has since been deleted.
    """
    webhookSubscription: WebhookSubscription
  }

  """
  The event ID criteria used to determine which events will be replayed.
  """
  type WebhookSubscriptionReplayByIdRequest implements WebhookSubscriptionReplayRequest {
    """
    The list of \`Event.id\` values to replay.
    """
    eventIds: [String!]!
    """
    The type of the component.

    This is always \`IdReplayRequest\`.
    """
    typeCode: String!
  }

  """
  The date range criteria used to determine which events will be replayed.
  """
  type WebhookSubscriptionReplayByRangeRequest implements WebhookSubscriptionReplayRequest {
    """
    The earliest event to include.
    """
    afterDateTime: DateTime!
    """
    The latest event to include.
    """
    beforeDateTime: DateTime!
    """
    The hirer to replay events for.
    """
    hirer: HiringOrganization
    """
    Whether previously delivered events should be included in the request.

    This also includes events that were not delivered because the relevant hirer relationship or webhook subscription was not in place at time of occurrence.
    """
    replayDeliveredEventsIndicator: Boolean!
    """
    The type of the component.

    This is always \`RangeReplayRequest\`.
    """
    typeCode: String!
  }

  """
  A webhook subscription replay in a paginated list.
  """
  type WebhookSubscriptionReplayEdge {
    """
    The opaque cursor to the webhook subscription replay.

    This can be used as a subsequent pagination argument.
    """
    cursor: String!
    """
    The actual webhook subscription replay.
    """
    node: WebhookSubscriptionReplay!
  }

  """
  The original criteria used to determine which events will be replayed.
  """
  interface WebhookSubscriptionReplayRequest {
    """
    The type of the replay.

    Currently, two codes are defined:

    - \`RangeReplayRequest\` which corresponds to the \`WebhookSubscriptionReplayByRangeRequest\` type.
    - \`IdReplayRequest\` which corresponds to the \`WebhookSubscriptionReplayByIdRequest\` type.
    """
    typeCode: String!
  }

  """
  A page of webhook subscription replays.
  """
  type WebhookSubscriptionReplaysConnection {
    """
    The page of webhook subscription replays and their corresponding cursors.
    """
    edges: [WebhookSubscriptionReplayEdge!]!
    """
    The pagination metadata for this page of webhook subscription replays.

    Disclaimer:
    - The \`hasPreviousPage\` field will always be false when paginating by \`first\`.
    - The \`hasNextPage\` field will always be false when paginating by \`last\`.

    To discern whether a next/previous page exists in these conditions, an additional request will need to be made to retrieve the next/previous page.
    """
    pageInfo: PageInfo!
  }

  """
  The criteria to filter webhook subscription replays by.

  These are \`WebhookSubscriptionReplay\`-specific extensions on top of the standard pagination arguments \`before\`, \`after\`, \`first\` and \`last\`.
  """
  input WebhookSubscriptionReplaysFilterInput {
    """
    The replay status to filter by.

    See the \`WebhookSubscriptionReplay.statusCode\` documentation for a list of possible status codes.

    If this is not provided then replays of all statuses will be returned.
    """
    statusCode: String
  }

  """
  A page of webhook subscriptions.
  """
  type WebhookSubscriptionsConnection {
    """
    The page of webhook subscriptions and their corresponding cursors.
    """
    edges: [WebhookSubscriptionEdge!]!
    """
    The pagination metadata for this page of subscriptions.
    """
    pageInfo: PageInfo!
  }

  """
  The criteria to filter webhook subscriptions by.

  These are \`WebhookSubscription\`-specific extensions on top of the standard pagination arguments \`before\`, \`after\`, \`first\` and \`last\`.
  """
  input WebhookSubscriptionsFilterInput {
    """
    The creation date & time that resulting webhook subscriptions must succeed.

    This can be used to initiate the retrieval of paginated results.
    Subsequent queries should use the opaque cursors returned from \`WebhookSubscriptionsConnection\`.
    """
    afterDateTime: DateTime
    """
    The creation date & time that resulting webhook subscriptions must precede.

    This can be used to initiate the retrieval of paginated results.
    Subsequent queries should use the opaque cursors returned from \`WebhookSubscriptionsConnection\`.
    """
    beforeDateTime: DateTime
    """
    The event types of webhook subscriptions to retrieve.

    See \`Event\` implementations for a list of supported values.

    If this is not provided then events of all types will be returned.
    """
    eventTypeCodes: [String!]
    """
    The hirer IDs of the hirer-filtered webhook subscriptions to retrieve.

    If this is not provided then both hirer-filtered and unfiltered subscriptions will be returned.
    """
    hirerIds: [String!]
  }
`;
