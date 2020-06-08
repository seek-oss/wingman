import { FormComponent } from '../../questionTypes';

import { convertComponentsToMutationVariables } from './GraphqlQueryRenderer';

describe('convertComponentsToMutationVariables', () => {
  describe('when converting components to mutation variables', () => {
    it('should return as an application questionnaire and return as valid if it meets the conditions', () => {
      const formComponents: FormComponent[] = [
        {
          componentTypeCode: 'Question',
          questionHtml: 'Tell us about yourself',
          responseTypeCode: 'FreeText',
          value: '04e671b1-166d-416d-a346-4b560ad13a51',
        },
        {
          componentTypeCode: 'Question',
          questionHtml: 'Can you drive?',
          responseChoice: [
            { preferredIndicator: true, text: 'Yes', value: 'yes' },
            { preferredIndicator: false, text: 'No', value: 'no' },
          ],
          responseTypeCode: 'SingleSelect',
          value: '76250b99-dfc7-47a3-8418-1fc6bee64589',
        },
        {
          componentTypeCode: 'PrivacyConsent',
          privacyPolicyUrl: {
            url: 'https://www.seek.com.au/my-privacy/',
          },
          value: 'cdb93e19-6caf-4852-854c-3088787f234c',
          descriptionHtml: 'Do you agree to the privacy policy?',
        },
      ];
      expect(
        convertComponentsToMutationVariables(formComponents, '123'),
      ).toMatchSnapshot();
    });

    it('should return as invalid if there arent any components', () => {
      const formComponents: FormComponent[] = [];
      expect(
        convertComponentsToMutationVariables(formComponents, '123').valid,
      ).toBe(false);
    });

    it('should return as invalid if there are too many components', () => {
      const formComponents: FormComponent[] = Array(101).fill({
        componentTypeCode: 'Question',
        questionHtml: 'Tell us about yourself',
        responseTypeCode: 'FreeText',
        value: '04e671b1-166d-416d-a346-4b560ad13a51',
      });
      expect(
        convertComponentsToMutationVariables(formComponents, '123').valid,
      ).toBe(false);
    });

    it('should return as invalid if there are too many PrivacyConsent components', () => {
      const formComponents: FormComponent[] = Array(2).fill({
        componentTypeCode: 'PrivacyConsent',
        privacyPolicyUrl: {
          url: 'https://www.seek.com.au/my-privacy/',
        },
        value: 'cdb93e19-6caf-4852-854c-3088787f234c',
        descriptionHtml: 'Do you agree to the privacy policy?',
      });
      expect(
        convertComponentsToMutationVariables(formComponents, '123').valid,
      ).toBe(false);
    });
  });
});
