import { Box, Card, Stack, Text } from 'braid-design-system';
import React, { useContext, useState } from 'react';

import { PrivacyConsent } from '../../../questionTypes';
import { StateContext, actionCreators } from '../state/formBuilderState';

import NewPrivacyConsentForm from './NewPrivacyConsentForm/NewPrivacyConsentForm';
import QuestionEntryMenu from './QuestionEntryMenu';

interface PrivacyConsentEntryProps {
  privacyConsent: PrivacyConsent;
}

const PrivacyConsentEntry = ({ privacyConsent }: PrivacyConsentEntryProps) => {
  const { dispatch } = useContext(StateContext);
  const [showEditForm, setShowEditForm] = useState(false);

  const onClickDelete = (questionToDelete: PrivacyConsent) => () => {
    actionCreators.delete(dispatch)(questionToDelete.value);
  };

  const onClickEdit = () => {
    setShowEditForm(true);
  };

  return showEditForm ? (
    <NewPrivacyConsentForm
      hideForm={() => setShowEditForm(false)}
      initialValues={privacyConsent}
    />
  ) : (
    <Card>
      <Box display="flex" justifyContent="spaceBetween">
        <Stack space="small">
          <Text size="large">Privacy consent</Text>
          <Text tone="secondary" size="small">
            {privacyConsent.descriptionHtml ??
              privacyConsent.privacyPolicyUrl.url}
          </Text>
        </Stack>
        <QuestionEntryMenu
          onClickDelete={onClickDelete(privacyConsent)}
          onClickEdit={onClickEdit}
        />
      </Box>
    </Card>
  );
};

export default PrivacyConsentEntry;
