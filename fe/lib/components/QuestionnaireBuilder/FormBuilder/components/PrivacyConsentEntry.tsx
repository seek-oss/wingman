import { Column, Columns, Stack, Text } from 'braid-design-system';
import React, { useContext, useState } from 'react';

import type { PrivacyConsent } from '../../../../private/questionnaires/types';
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
    <Columns alignY="center" space="small">
      <Column>
        <Stack space="small">
          <Text size="large">Privacy consent</Text>
          <Text tone="secondary" size="small">
            {privacyConsent.descriptionHtml ??
              privacyConsent.privacyPolicyUrl.url}
          </Text>
        </Stack>
      </Column>

      <Column width="content">
        <QuestionEntryMenu
          onClickDelete={onClickDelete(privacyConsent)}
          onClickEdit={onClickEdit}
        />
      </Column>
    </Columns>
  );
};

export default PrivacyConsentEntry;
