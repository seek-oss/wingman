import crypto from 'crypto';

interface ValidateWebhookBodyOptions {
  body: string;
  secret: string;
  signature: string;
}

export const validateWebhookSignature = ({
  body,
  secret,
  signature,
}: ValidateWebhookBodyOptions) => {
  const hmac = crypto.createHmac('sha512', secret);

  const computedSignature = hmac.update(body).digest('hex');

  return (
    signature.length === computedSignature.length &&
    crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(computedSignature),
    )
  );
};
