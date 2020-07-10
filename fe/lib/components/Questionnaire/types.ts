export interface OptionListItem {
  text: string;
  preferredIndicator: boolean;
}

export type HookSetterFn<T> = React.Dispatch<React.SetStateAction<T>>;
export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type QuestionType = 'FreeText' | 'SingleSelect' | 'MultiSelect';
export type ComponentType = 'Question' | 'PrivacyConsent';
