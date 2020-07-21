import { Text } from 'braid-design-system';
import React from 'react';

import { RichDropdown } from '../components/RichDropdown';
import { QUESTIONNAIRES, Questionnaire } from '../data/questionnaires';

interface Props {
  onChange?: (questionnaire: Questionnaire | undefined) => void;
}

export const QuestionnaireSelect = ({ onChange }: Props) => (
  <RichDropdown onChange={onChange} values={QUESTIONNAIRES}>
    {(questionnaire) => <Text>{questionnaire?.name ?? 'Select...'}</Text>}
  </RichDropdown>
);
