import {
  Actions,
  Alert,
  Button,
  Card,
  Heading,
  Stack,
  Text,
} from 'braid-design-system';
import React, { useState } from 'react';

import { postPartnerWebhook } from '../api/partnerWebhook';

const HARDCODED_WEBHOOK_PAYLOAD = {
  events: [
    {
      createDateTime: 'foo',
      id: 'foo',
      type: 'CandidateApplicationCreated',
      candidateApplicationProfileId: 'foo',
      candidateId: 'foo',
    },
  ],
  subscriptionId: 'foo',
};

const HARDCODED_WEBHOOK_ENDPOINT = 'abc-123';

export const Webhook = () => {
  const [loading, setLoading] = useState(false);

  const [response, setResponse] = useState<{
    message: string;
    tone: 'critical' | 'positive';
  }>();

  const onClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    setLoading(true);
    setResponse(undefined);

    try {
      const message = await postPartnerWebhook(
        HARDCODED_WEBHOOK_PAYLOAD,
        HARDCODED_WEBHOOK_ENDPOINT,
      );

      setResponse({
        message,
        tone: 'positive',
      });
    } catch (err) {
      setResponse({
        message: String(err),
        tone: 'critical',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Stack dividers space="large">
        <Heading level="3">Webhook</Heading>

        <Stack space="medium">
          <Actions>
            <Button loading={loading} onClick={onClick}>
              Send
            </Button>
          </Actions>

          <Alert tone={response?.tone ?? 'info'}>
            <Text>{response?.message ?? 'Waiting...'}</Text>
          </Alert>
        </Stack>
      </Stack>
    </Card>
  );
};
