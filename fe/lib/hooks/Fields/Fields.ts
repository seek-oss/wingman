import { FormEvent, useState } from 'react';

const transformValue = <K extends string, V>(
  obj: Record<K, V>,
  key: K,
  fn: (value: V) => V,
) => ({
  ...obj,
  [key]: fn(obj[key]),
});

const transformValues = <K extends string, I, O = I>(
  obj: Record<K, I>,
  fn: (value: I) => O,
) =>
  Object.entries<I>(obj).reduce((acc, [key, value]) => {
    acc[key as K] = fn(value);
    return acc;
  }, {} as Record<K, O>);

interface FieldConfig {
  initialValue?: string;
  label: string;
  required?: boolean;
}

interface FieldState {
  label: string;
  hadFocus: boolean;
  required: boolean;
  value: string;
}

/**
 * Your friendly neighbourhood `useFields` hook, but with an opinionated Braid
 * property and validation slant.
 */
export const useFields = <T extends string>(
  initialFields: Record<T, FieldConfig>,
) => {
  const [state, setState] = useState(
    Object.entries<FieldConfig>(initialFields).reduce(
      (acc, [id, { label, required, initialValue }]) => {
        acc[id as T] = {
          hadFocus: false,
          label,
          required: required ?? false,
          value: initialValue ?? '',
        };
        return acc;
      },
      {} as Record<T, FieldState>,
    ),
  );

  const setFocus = (id: T) =>
    setState((fields) =>
      transformValue(fields, id, (field) => ({
        ...field,
        hadFocus: true,
      })),
    );

  const setValue = (id: T, value: string) =>
    setState((fields) =>
      transformValue(fields, id, (field) => ({
        ...field,
        value,
      })),
    );

  const fieldProps = (id: T) => {
    const field = state[id];

    const requiredFields = field.required
      ? {
          required: true,
          ...(field.hadFocus &&
            !field.value && {
              message: `${field.label} is required`,
              tone: 'critical' as const,
            }),
          reserveMessageSpace: true,
        }
      : {
          secondaryLabel: 'optional',
        };

    return {
      ...requiredFields,

      id,
      label: field.label,
      onBlur: () => setFocus(id),
      onChange: (value: string | FormEvent<HTMLInputElement>) =>
        setValue(
          id,
          typeof value === 'string' ? value : value.currentTarget.value,
        ),
      value: field.value,
    };
  };

  const fieldValues = () => {
    setState((fields) =>
      transformValues(fields, (field) => ({
        ...field,
        hadFocus: true,
      })),
    );

    let valid = true;

    const result = transformValues(state, (field) => {
      if (field.required && !field.value) {
        valid = false;
      }

      return field.value;
    });

    return valid ? result : null;
  };

  return { fieldProps, fieldValues };
};
