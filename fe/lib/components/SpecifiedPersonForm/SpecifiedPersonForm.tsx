import {
  Actions,
  Box,
  Button,
  Column,
  Columns,
  IconPersonAdd,
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

export interface SpecifiedPersonFormProps {
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
}: SpecifiedPersonFormProps) => {
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
                text: 'Hiring manager',
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

      <Columns collapseBelow="desktop" space="medium">
        <Column>
          <TextField {...fieldProps('specifiedPersonGivenName')} />
        </Column>
        <Column>
          <TextField {...fieldProps('specifiedPersonFamilyName')} />
        </Column>
      </Columns>

      <TextField type="email" {...fieldProps('specifiedPersonEmailAddress')} />
      <TextField type="tel" {...fieldProps('specifiedPersonPhoneNumber')} />

      <Actions>
        <Button icon={<IconPersonAdd />} onClick={addContact}>
          Add contact
        </Button>
      </Actions>
    </Stack>
  );
};
