import {
  Actions,
  Box,
  Button,
  ContentBlock,
  Heading,
  Stack,
} from 'braid-design-system';
import { Questionnaire } from 'example/src/data/questionnaires';
import React, { useState } from 'react';

import { QuestionnaireForm } from '../../../../lib/components/Questionnaire';
import { Header } from '../../components/Header';
import { QuestionnaireSelect } from '../../widgets/QuestionnaireSelect';

export const PositionQuestionnairePage = () => {
  const [selection, setSelection] = useState<Questionnaire>();

  return (
    <Stack dividers space="none">
      <Header>
        <Heading level="3">Questionnaires</Heading>
      </Header>

      <ContentBlock width="large">
        <Box padding="gutter">
          <Stack space="gutter">
            <QuestionnaireSelect onChange={setSelection} />

            {selection ? (
              <Stack space="gutter">
                <QuestionnaireForm
                  type="Form"
                  components={selection.components}
                />

                <Actions>
                  <Button>Delete</Button>
                </Actions>
              </Stack>
            ) : undefined}
          </Stack>
        </Box>
      </ContentBlock>
    </Stack>
  );
};
