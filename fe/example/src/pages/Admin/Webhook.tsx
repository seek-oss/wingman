import {
  Actions,
  Button,
  Card,
  Heading,
  Stack,
  useToast,
} from 'braid-design-system';
import React, { useState } from 'react';

import { postPartnerWebhook } from '../../api/partnerWebhook';

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
  const showToast = useToast();

  const [loading, setLoading] = useState(false);

  const onClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    setLoading(true);

    try {
      const message = await postPartnerWebhook(
        HARDCODED_WEBHOOK_PAYLOAD,
        HARDCODED_WEBHOOK_ENDPOINT,
      );

      showToast({
        message,
        tone: 'positive',
      });
    } catch (err) {
      showToast({
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
        </Stack>
      </Stack>
    </Card>
  );
};
