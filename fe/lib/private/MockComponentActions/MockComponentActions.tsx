import {
  Actions,
  ButtonLink,
  IconEducation,
  IconSocialGitHub,
  Stack,
} from 'braid-design-system';
import React, { ComponentProps } from 'react';

interface MockComponentActionsProps {
  children: ComponentProps<typeof Stack>['children'];
  space: ComponentProps<typeof Stack>['space'];
  storybookPath?: string;
  sourcePath?: string;
}

export const MockComponentActions = ({
  children,
  space,
  storybookPath,
  sourcePath,
}: MockComponentActionsProps) => (
  <Stack space={space}>
    {children}

    {storybookPath || sourcePath ? (
      <Actions size="small">
        {storybookPath ? (
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
        ) : null}

        {sourcePath ? (
          <ButtonLink
            href={`https://github.com/seek-oss/wingman/tree/master/fe/${sourcePath}`}
            rel="noreferrer"
            target="_blank"
            tone="brandAccent"
            variant="soft"
          >
            <IconSocialGitHub /> View on GitHub
          </ButtonLink>
        ) : null}
      </Actions>
    ) : null}
  </Stack>
);
