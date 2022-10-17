import {
  Actions,
  Button,
  Column,
  Columns,
  FieldMessage,
  Stack,
  Text,
  TextField,
} from 'braid-design-system';
import React, { useMemo, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

import type { ResponseChoice } from '../../../../../../private/questionnaires/types';
import { createResolver } from '../../../../../../utils';

import DisplayOption from './DisplayOption';

/**
 * https://developer.seek.com/schema/#/named-type/ApplicationQuestionInput/field/responseChoice
 */
const RESPONSE_CHOICE_LIMIT = 99;

interface FormValues {
  option: string;
}

interface SelectOptionsProps {
  options: ResponseChoice[];
  setOptionList: (value: ResponseChoice[]) => void;
}

const splitArrayAt = <T,>(inputArray: T[], index: number) => {
  const beforeItem = inputArray.slice(0, index);
  const afterItem = inputArray.slice(index + 1);
  const item = inputArray[index];
  return { beforeItem, item, afterItem };
};

export default ({ options, setOptionList }: SelectOptionsProps) => {
  const resolver = useMemo(
    () =>
      createResolver<FormValues>((values, errors) => {
        if (!values.option) {
          errors.option = {
            type: 'required',
            message: 'Please enter an option.',
          };
        } else if (options.some((option) => option.value === values.option)) {
          errors.option = {
            type: 'validate',
            message: 'This option already exists.',
          };
        }
      }),
    [options],
  );

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      option: '',
    },
    resolver,
  });

  const optionInputRef = useRef<HTMLInputElement>(null);

  const addOption = (values: FormValues) => {
    setOptionList([
      ...options,
      { text: values.option, value: values.option, preferredIndicator: false },
    ]);

    reset();

    optionInputRef.current?.focus();
  };

  const setPreferred = (itemText: string, newStatus: boolean) => {
    const itemIndex = options.findIndex(({ text }) => text === itemText);
    const { beforeItem, afterItem, item } = splitArrayAt(options, itemIndex);

    setOptionList([
      ...beforeItem,
      {
        text: item.text,
        preferredIndicator: newStatus,
        value: item.value,
      },
      ...afterItem,
    ]);
  };

  const removeItem = (itemText: string) => () => {
    const itemIndex = options.findIndex(({ text }) => text === itemText);
    const { beforeItem, afterItem } = splitArrayAt(options, itemIndex);
    setOptionList([...beforeItem, ...afterItem]);
  };

  return (
    <Stack space="medium">
      {options.length >= RESPONSE_CHOICE_LIMIT ? (
        <Text tone="secondary">
          You can’t provide more than {RESPONSE_CHOICE_LIMIT} options.
        </Text>
      ) : (
        <Stack space="small">
          <Columns alignY="bottom" space="small">
            <Column>
              <Controller
                control={control}
                name="option"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="questionnaireBuilderAddOption"
                    label="Options"
                    onClear={() => setValue('option', '')}
                    ref={optionInputRef}
                    tone={errors.option ? 'critical' : undefined}
                  />
                )}
              />
            </Column>
            <Column width="content">
              <Actions>
                <Button onClick={handleSubmit(addOption)}>Add</Button>
              </Actions>
            </Column>
          </Columns>

          {errors.option?.message ? (
            <FieldMessage
              id="questionnaireBuilderAddOptionMessage"
              message={errors.option.message}
              tone="critical"
            />
          ) : null}
        </Stack>
      )}

      <Stack dividers space="small">
        {options.map(({ text, preferredIndicator }) => (
          <DisplayOption
            key={text}
            text={text}
            preferredIndicator={preferredIndicator}
            setPreferred={setPreferred}
            removeItem={removeItem(text)}
          />
        ))}
      </Stack>
    </Stack>
  );
};
