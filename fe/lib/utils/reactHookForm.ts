import {
  EmptyObject,
  FieldErrors,
  FieldValues,
  Resolver,
} from 'react-hook-form';

export const createResolver =
  <T extends FieldValues>(
    fn: (values: T, errors: FieldErrors<T>) => void,
  ): Resolver<T> =>
  (values) => {
    const errors: FieldErrors<T> = {};

    fn(values as T, errors);

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
