import { Actions, ButtonLink, IconEducation, Stack } from 'braid-design-system';
import React, { ComponentProps } from 'react';

interface MockComponentActionsProps {
  children: ComponentProps<typeof Stack>['children'];
  space: ComponentProps<typeof Stack>['space'];
  storybookPath?: string;
}

export const MockComponentActions = ({
  children,
  space,
  storybookPath,
}: MockComponentActionsProps) => (
  <Stack space={space}>
    {children}

    {storybookPath ? (
      <Actions size="small">
        <ButtonLink
          href={`https://seek-oss.github.io/wingman/storybook/?path=${encodeURIComponent(
            storybookPath,
          )}`}
          rel="noreferrer"
          target="_blank"
          tone="brandAccent"
          variant="ghost"
        >
          <IconEducation /> Open in Storybook
        </ButtonLink>
      </Actions>
    ) : null}
  </Stack>
);
