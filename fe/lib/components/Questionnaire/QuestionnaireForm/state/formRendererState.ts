export interface FormUpdateAction {
  type: 'UPDATE_FIELD';
  newValue: any;
  fieldId: string;
}

export const createUpdateFieldAction = <T>(
  fieldId: string,
  dispatch: React.Dispatch<FormUpdateAction>,
) => (newValue: T) => dispatch({ type: 'UPDATE_FIELD', fieldId, newValue });

export const formStateReducer = (
  state: Record<string, any>,
  action: FormUpdateAction,
) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      const newState = { ...state, [action.fieldId]: action.newValue };
      return newState;
  }
};
