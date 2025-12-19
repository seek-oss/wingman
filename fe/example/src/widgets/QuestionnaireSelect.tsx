import { Text } from 'braid-design-system';

import { RichDropdown } from '../components/RichDropdown';
import { QUESTIONNAIRES, type Questionnaire } from '../data/questionnaires';

interface Props {
  onChange?: (questionnaire: Questionnaire | undefined) => void;
}

export const QuestionnaireSelect = ({ onChange }: Props) => (
  <RichDropdown onChange={onChange} values={QUESTIONNAIRES}>
    {(questionnaire) => <Text>{questionnaire?.name ?? 'Select...'}</Text>}
  </RichDropdown>
);
