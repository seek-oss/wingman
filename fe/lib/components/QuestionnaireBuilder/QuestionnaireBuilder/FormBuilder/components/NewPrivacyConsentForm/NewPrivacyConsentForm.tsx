import { yupResolver } from '@hookform/resolvers';
import {
  Actions,
  Box,
  Button,
  Card,
  Heading,
  Stack,
  TextField,
} from 'braid-design-system';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { object, string } from 'yup';

import { PrivacyConsent, WebUrl } from '../../../../questionTypes';
import { StateContext, actionCreators } from '../../state/formBuilderState';

interface NewPrivacyConsentForm {
  hideForm: () => void;
  initialValues: PrivacyConsent | typeof blankFormValues;
}

interface FormValues {
  description: string;
  url: string;
}

const blankFormValues = {
  value: '',
  privacyPolicyUrl: {
    url: '',
  } as WebUrl,
  descriptionHtml: '',
};

const schema = object().shape({
  url: string().url().required(),
  description: string(),
});

export default ({
  hideForm,
  initialValues = blankFormValues,
}: NewPrivacyConsentForm) => {
  const { dispatch } = useContext(StateContext);

  const { control, handleSubmit, errors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const saveThisPrivacyConsent = (formData: FormValues) => {
    const { description, url } = formData;

    if (initialValues.value) {
      const creator = actionCreators.update.PrivacyConsent;
      creator(dispatch)(initialValues.value, description, url);
    } else {
      const creator = actionCreators.add.PrivacyConsent;
      creator(dispatch)(description, url);
    }
    hideForm();
  };

  return (
    <form onSubmit={handleSubmit(saveThisPrivacyConsent)}>
      <Card>
        <Stack space="large">
          <Box>
            <Heading level="3">
              {initialValues.value ? 'Edit' : 'New'} Privacy Consent
            </Heading>
          </Box>
          <Controller
            render={(formProps) => (
              <TextField
                id="url"
                label="URL"
                message={errors.url?.message}
                tone={errors.url ? 'critical' : undefined}
                {...formProps}
              />
            )}
            control={control}
            name="url"
            value=""
            defaultValue={initialValues.privacyPolicyUrl.url}
          />
          <Controller
            render={(formProps) => (
              <TextField
                id="description"
                label="Description"
                message={errors.description?.message}
                tone={errors.description ? 'critical' : undefined}
                {...formProps}
              />
            )}
            control={control}
            name="description"
            value=""
            defaultValue={
              initialValues.descriptionHtml ||
              'Do you agree to the privacy policy?'
            }
          />
          <Box>
            <Actions>
              <Button type="submit">Save</Button>
              <Button onClick={hideForm} weight="weak">
                Cancel
              </Button>
            </Actions>
          </Box>
        </Stack>
      </Card>
    </form>
  );
};
