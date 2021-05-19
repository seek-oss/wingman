import {
  Card,
  Checkbox,
  IconNewWindow,
  Stack,
  Text,
  TextLink,
} from 'braid-design-system';
import React, { useState } from 'react';

import type { PrivacyConsent } from '../../types';

interface PrivacyConsentRendererProps {
  privacy: PrivacyConsent;
}

const PrivacyConsentRenderer = ({ privacy }: PrivacyConsentRendererProps) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  return (
    <Card>
      <Stack space="medium">
        <Checkbox
          id="privacyConsentCheckbox"
          label={
            /**
             * {@link https://developer.seek.com/schema/#/named-type/ApplicationPrivacyConsentInput}
             */
            privacy.descriptionHtml ?? 'Do you agree to the privacy policy?'
          }
          onChange={handleClick}
          checked={checked}
        />
        <Text>
          <TextLink hitArea="large" href={privacy.privacyPolicyUrl.url}>
            Click here to view <IconNewWindow />
          </TextLink>
        </Text>
      </Stack>
    </Card>
  );
};

export default PrivacyConsentRenderer;
