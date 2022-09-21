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

  showStorybookAction: boolean | undefined;
  storybookPath: string;
  sourcePath: string;
}

export const MockComponentActions = ({
  children,
  space,

  showStorybookAction,
  storybookPath,
  sourcePath,
}: MockComponentActionsProps) => (
  <Stack space={space}>
    {children}

    {showStorybookAction && (
      <Actions size="small">
        <ButtonLink
          href={`https://seek-oss.github.io/wingman/storybook/?path=${encodeURIComponent(
            storybookPath,
          )}`}
          icon={<IconEducation />}
          rel="noreferrer"
          target="_blank"
          tone="brandAccent"
          variant="ghost"
        >
          Open in Storybook
        </ButtonLink>

        <ButtonLink
          href={`https://github.com/seek-oss/wingman/tree/master/fe/${sourcePath}`}
          icon={<IconSocialGitHub />}
          rel="noreferrer"
          target="_blank"
          tone="brandAccent"
          variant="transparent"
        >
          View on GitHub
        </ButtonLink>
      </Actions>
    )}
  </Stack>
);
