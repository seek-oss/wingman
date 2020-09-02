import {
  Card,
  Checkbox,
  Stack,
  Text,
  TextLink,
  IconNewWindow,
} from 'braid-design-system';
import React, { useState } from 'react';

import { PrivacyConsent } from '../../questionTypes';

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
          label="I agree to this employer's Privacy Policy"
          onChange={handleClick}
          checked={checked}
        />
        <Text>
          <TextLink hitArea="large" href={privacy.privacyPolicyUrl.url}>
            Link to Employer's Privacy Policy <IconNewWindow />
          </TextLink>
        </Text>
      </Stack>
    </Card>
  );
};

export default PrivacyConsentRenderer;
