import {
  Actions,
  Button,
  Card,
  IconAdd,
  Inline,
  Stack,
  Strong,
  Text,
  Textarea,
} from 'braid-design-system';
import React, { useState } from 'react';

import { RelativeDate } from '../../../components/RelativeDate';
import { Candidate } from '../../../data/candidates';

interface Props {
  children: Candidate;
}

export const CandidateNotes = ({ children: candidate }: Props) => {
  const [noteText, setNoteText] = useState('');

  return (
    <Stack space="gutter">
      <Card>
        <Stack space="gutter">
          <Textarea
            id="addNote"
            onChange={(event) => setNoteText(event.currentTarget.value)}
            value={noteText}
          />
          <Actions>
            <Button>
              <IconAdd /> Add
            </Button>
          </Actions>
        </Stack>
      </Card>

      {candidate.notes.length ? (
        <Card>
          <Stack dividers space="large">
            {candidate.notes.map((note, index) => (
              <Stack key={index} space="gutter">
                <Inline space="small">
                  <Text>
                    <Strong>{note.author.formattedName}</Strong> ·{' '}
                    <RelativeDate date={note.date} />
                  </Text>
                </Inline>
                <Text>{note.text}</Text>
              </Stack>
            ))}
          </Stack>
        </Card>
      ) : undefined}
    </Stack>
  );
};
