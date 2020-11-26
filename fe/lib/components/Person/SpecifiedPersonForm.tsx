import {
  Button,
  Stack,
  Strong,
  Text,
  TextDropdown,
  TextField,
} from 'braid-design-system';
import React, { FormEvent, useState } from 'react';

import { SpecifiedPersonInput } from '../../types/seek.graphql';

type RoleCode = 'HiringManager' | 'Recruiter';

const ROLE_CODES: RoleCode[] = ['HiringManager', 'Recruiter'];

interface Props {
  onCreate: (person: SpecifiedPersonInput) => void;
}

interface SubmitData {
  roleCode: RoleCode;
  givenName: string;
  familyName: string;
  email?: string;
  phone?: string;
}

const mapFormDataToMutationInput = (
  formData: SubmitData,
): SpecifiedPersonInput => ({
  roleCode: formData.roleCode,
  communication: {
    email: formData.email
      ? [
          {
            address: formData.email,
          },
        ]
      : [],
    phone: formData.phone
      ? [
          {
            formattedNumber: formData.phone,
          },
        ]
      : [],
  },
  name: {
    given: formData.givenName,
    family: formData.familyName,
    formattedName: `${formData.givenName} ${formData.familyName}`,
  },
});

export const SpecifiedPersonForm = ({ onCreate }: Props) => {
  const [submitData, setSubmitData] = useState<SubmitData>({
    roleCode: 'HiringManager',
    givenName: '',
    familyName: '',
  });

  const setField = (field: keyof SubmitData) => (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement> | string,
  ) =>
    setSubmitData({
      ...submitData,
      [field]: typeof event === 'string' ? event : event.currentTarget.value,
    });

  return (
    <Stack space="small">
      <Text>
        <Strong>Hirer role:</Strong>{' '}
        <TextDropdown
          id="specifiedPersonRoleCode"
          label="Hirer role"
          onChange={(roleCode) => setSubmitData({ ...submitData, roleCode })}
          options={ROLE_CODES}
          value={submitData.roleCode}
        />
      </Text>
      <TextField
        id="specifiedPersonGivenName"
        message={submitData.givenName ? undefined : 'Given name is required'}
        label="Given name"
        value={submitData.givenName}
        onChange={setField('givenName')}
      />
      <TextField
        id="specifiedPersonFamilyName"
        message={submitData.familyName ? undefined : 'Family name is required'}
        label="Family name"
        value={submitData.familyName}
        onChange={setField('familyName')}
      />
      <TextField
        id="specifiedPersonEmail"
        label="Email address"
        value={submitData.email ?? ''}
        onChange={setField('email')}
      />
      <TextField
        id="specifiedPersonPhoneNumber"
        label="Phone number"
        value={submitData.phone ?? ''}
        onChange={setField('phone')}
      />

      <Button onClick={() => onCreate(mapFormDataToMutationInput(submitData))}>
        Add specified person
      </Button>
    </Stack>
  );
};
