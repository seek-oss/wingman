import {
  Box,
  Button,
  Stack,
  Strong,
  Text,
  TextDropdown,
  TextField,
} from 'braid-design-system';
import React from 'react';

import { useFields } from '../../hooks/Fields/Fields';
import type { SpecifiedPersonInput } from '../../types/seekApi.graphql';

type FieldId =
  | 'specifiedPersonRoleCode'
  | 'specifiedPersonGivenName'
  | 'specifiedPersonFamilyName'
  | 'specifiedPersonEmailAddress'
  | 'specifiedPersonPhoneNumber';

interface Props {
  initialValues?: InitialValues;
  onCreate: (person: SpecifiedPersonInput) => void;
}

const mapFormDataToMutationInput = ({
  specifiedPersonRoleCode,
  specifiedPersonGivenName,
  specifiedPersonFamilyName,
  specifiedPersonEmailAddress,
  specifiedPersonPhoneNumber,
}: Record<FieldId, string>): SpecifiedPersonInput => ({
  roleCode: specifiedPersonRoleCode,
  communication: {
    email: [
      {
        address: specifiedPersonEmailAddress,
      },
    ],
    phone: specifiedPersonPhoneNumber
      ? [
          {
            formattedNumber: specifiedPersonPhoneNumber,
          },
        ]
      : [],
  },
  name: {
    given: specifiedPersonGivenName,
    family: specifiedPersonFamilyName,
    formattedName: `${specifiedPersonGivenName} ${specifiedPersonFamilyName}`,
  },
});

interface InitialValues {
  roleCode?: string;
  givenName?: string;
  familyName?: string;
  emailAddress?: string;
  phoneNumber?: string;
}

export const SpecifiedPersonForm = ({
  initialValues = {},
  onCreate,
}: Props) => {
  const { fieldProps, fieldValues } = useFields<FieldId>({
    specifiedPersonRoleCode: {
      label: 'Hirer role',
      initialValue: initialValues.roleCode ?? 'HiringManager',
    },
    specifiedPersonGivenName: {
      initialValue: initialValues.givenName,
      label: 'Given name',
      required: true,
    },
    specifiedPersonFamilyName: {
      initialValue: initialValues.familyName,
      label: 'Family name',
      required: true,
    },
    specifiedPersonEmailAddress: {
      initialValue: initialValues.emailAddress,
      label: 'Email address',
      required: true,
    },
    specifiedPersonPhoneNumber: {
      initialValue: initialValues.phoneNumber,
      label: 'Phone number',
    },
  });

  const addContact = () => {
    const values = fieldValues();

    if (values) {
      onCreate(mapFormDataToMutationInput(values));
    }
  };

  return (
    <Stack space="medium">
      <Box marginBottom="medium">
        <Text>
          <Strong>Role:</Strong>{' '}
          <TextDropdown
            options={[
              {
                text: 'Hiring Manager',
                value: 'HiringManager',
              },
              {
                text: 'Recruiter',
                value: 'Recruiter',
              },
            ]}
            {...fieldProps('specifiedPersonRoleCode')}
          />
        </Text>
      </Box>
      <TextField {...fieldProps('specifiedPersonGivenName')} />
      <TextField {...fieldProps('specifiedPersonFamilyName')} />
      <TextField {...fieldProps('specifiedPersonEmailAddress')} />
      <TextField {...fieldProps('specifiedPersonPhoneNumber')} />

      <Button onClick={addContact}>Add contact</Button>
    </Stack>
  );
};
