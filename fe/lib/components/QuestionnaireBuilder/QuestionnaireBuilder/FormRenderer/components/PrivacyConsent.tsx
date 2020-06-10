import { Card, Checkbox, Stack, Text, TextLink } from 'braid-design-system';
import React, { useState } from 'react';

import { PrivacyConsent } from '../../../questionTypes';

interface PrivacyConsentRendererProps {
  privacy: PrivacyConsent;
  title: string;
}

const PrivacyConsentRenderer = ({
  privacy,
  title,
}: PrivacyConsentRendererProps) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  return (
    <Card>
      <Stack space="medium">
        <Text size="large">{title}</Text>
        <Text>
          {privacy.descriptionHtml || 'Do you agree to the privacy policy?'}{' '}
          <TextLink hitArea="large" href={privacy.privacyPolicyUrl.url}>
            Privacy policy
          </TextLink>
        </Text>
        <Checkbox
          id="privacyConsentCheckbox"
          label="I have read and accept the privacy policy"
          onChange={handleClick}
          checked={checked}
        />
      </Stack>
    </Card>
  );
};

export default PrivacyConsentRenderer;
