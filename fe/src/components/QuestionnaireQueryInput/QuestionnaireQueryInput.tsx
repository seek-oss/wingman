import {
  Actions,
  Alert,
  Button,
  Stack,
  Text,
  Textarea,
} from 'braid-design-system';
import { useState } from 'react';

import {
  type MutationVariableInput,
  validateQueryInput,
} from '../../private/questionnaires/types';

interface QuestionnaireQueryInputProps {
  id: string;
  onChange: (variables: MutationVariableInput) => void;
}

export const QuestionnaireQueryInput = ({
  id,
  onChange,
}: QuestionnaireQueryInputProps) => {
  const [input, setInput] = useState('');

  const [queryInputError, setQueryInputError] = useState<string>('');
  const [showError, setShowError] = useState(false);

  const checkValidQuery = () => {
    try {
      const variables = validateQueryInput(JSON.parse(input));
      onChange(variables);

      setShowError(false);
    } catch (err) {
      setShowError(true);

      if (err instanceof Error) {
        setQueryInputError(`${err.name}: ${err.message}`);
      } else {
        throw err;
      }
    }
  };

  return (
    <Stack space="gutter">
      <Textarea
        label="GraphQL Input"
        id={id}
        lineLimit={10}
        value={input}
        onChange={(e) => {
          setInput(e.currentTarget.value);
        }}
      />
      {showError && (
        <Alert tone="caution">
          <Text>{queryInputError}</Text>
        </Alert>
      )}
      <Actions>
        <Button onClick={() => checkValidQuery()}>Save</Button>
      </Actions>
    </Stack>
  );
};
