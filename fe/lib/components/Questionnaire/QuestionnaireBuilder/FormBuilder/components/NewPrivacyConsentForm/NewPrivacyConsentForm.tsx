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
import {
  Controller,
  EmptyObject,
  FieldErrors,
  Resolver,
  useForm,
} from 'react-hook-form';

import type { PrivacyConsent, WebUrl } from '../../../../questionTypes';
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

const isWebUrl = (str: string): boolean => {
  try {
    const url = new URL(str);
    return ['http:', 'https:'].includes(url.protocol);
  } catch {
    return false;
  }
};

const formValuesResolver: Resolver<FormValues> = (values) => {
  const errors: FieldErrors<FormValues> = {};

  if (!values.description.trim()) {
    errors.description = {
      type: 'required',
      message: 'Please enter a description.',
    };
  }

  if (!isWebUrl(values.url)) {
    errors.url = {
      type: 'validate',
      message: 'Please enter a valid HTTP(S) URL.',
    };
  }

  return Object.keys(errors).length
    ? {
        errors,
        values: {} as EmptyObject,
      }
    : {
        errors: {} as EmptyObject,
        values,
      };
};

export default ({
  hideForm,
  initialValues = blankFormValues,
}: NewPrivacyConsentForm) => {
  const { dispatch } = useContext(StateContext);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: formValuesResolver,
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
            render={({ field }) => (
              <TextField
                id="url"
                label="URL"
                message={errors.url?.message}
                tone={errors.url ? 'critical' : undefined}
                {...field}
              />
            )}
            control={control}
            name="url"
            defaultValue={initialValues.privacyPolicyUrl.url}
          />
          <Controller
            render={({ field }) => (
              <TextField
                id="description"
                label="Description"
                message={errors.description?.message}
                tone={errors.description ? 'critical' : undefined}
                {...field}
              />
            )}
            control={control}
            name="description"
            defaultValue={
              initialValues.descriptionHtml ||
              'Do you agree to the privacy policy?'
            }
          />
          <Box>
            <Actions>
              <Button type="submit">Save</Button>
              <Button onClick={hideForm} variant="transparent">
                Cancel
              </Button>
            </Actions>
          </Box>
        </Stack>
      </Card>
    </form>
  );
};
