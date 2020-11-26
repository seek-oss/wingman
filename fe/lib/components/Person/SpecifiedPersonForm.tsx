import { Button, Dropdown, Stack, TextField } from 'braid-design-system';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { SpecifiedPersonInput } from '../../types/seek.graphql';

type RoleCode = 'HiringManager' | 'Recruiter';

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
  const { handleSubmit, control, errors } = useForm<SubmitData>();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        handleSubmit((formData) =>
          onCreate(mapFormDataToMutationInput(formData)),
        );
      }}
    >
      <Stack space="small">
        <Controller
          render={(formProps) => (
            <Dropdown
              id="specifiedPersonRoleCode"
              label="Hirer role"
              placeholder="Please select a role"
              {...formProps}
            >
              <option key={'hiringManager'} value={'HiringManager'}>
                HiringManager
              </option>
              <option key={'recruiter'} value={'Recruiter'}>
                Recruiter
              </option>
            </Dropdown>
          )}
          rules={{ required: true }}
          name="roleCode"
          control={control}
          value=""
        />
        <Controller
          render={(formProps) => (
            <TextField
              id="specifiedPersonGivenName"
              type="text"
              message={errors.givenName && 'Given name is required'}
              label="Given name"
              {...formProps}
            />
          )}
          control={control}
          name="givenName"
          rules={{ required: true }}
          value=""
          defaultValue=""
        />
        <Controller
          render={(formProps) => (
            <TextField
              id="specifiedPersonFamilyName"
              type="text"
              message={errors.givenName && 'Family name is required'}
              label="Family name"
              {...formProps}
            />
          )}
          control={control}
          name="familyName"
          rules={{ required: true }}
          value=""
          defaultValue=""
        />
        <Controller
          render={(formProps) => (
            <TextField
              id="specifiedPersonEmail"
              type="email"
              label="Email address"
              {...formProps}
            />
          )}
          control={control}
          name="email"
          rules={{ required: false }}
          value=""
          defaultValue=""
        />
        <Controller
          render={(formProps) => (
            <TextField
              id="specifiedPersonPhone"
              type="text"
              label="Phone number"
              {...formProps}
            />
          )}
          control={control}
          name="phone"
          rules={{ required: false }}
          value=""
          defaultValue=""
        />
        <Button type="submit">Add specified person</Button>
      </Stack>
    </form>
  );
};
