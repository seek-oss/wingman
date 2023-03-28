import {
  Box,
  Heading,
  IconEducation,
  IconHome,
  IconNewWindow,
  IconSocialGitHub,
  Link,
  Stack,
  Text,
  Toggle,
} from 'braid-design-system';
import React, { Fragment, ReactNode } from 'react';
import { InternalLink } from 'scoobie';

import { ClientOnly } from '../components/ClientOnly';

import * as styles from './Sidebar.css';

interface LinkProps {
  children: ReactNode;
  href: string;
}

const ExternalLink = ({ children, href }: LinkProps) => (
  <Link className={styles.link} href={href} rel="noreferrer" target="_blank">
    {children}
  </Link>
);

interface SidebarLinkProps {
  children: ReactNode;
  size?: 'small';
  to: string;
}

const SidebarLink = ({ children, size, to }: SidebarLinkProps) => {
  // Very naive switch, but we shouldn't be using other protocols
  const isExternal = to.startsWith('https://');

  const LinkWrapper = isExternal ? ExternalLink : InternalLink;

  return (
    <LinkWrapper href={to}>
      <Box
        className={styles.linkContainer}
        paddingX="gutter"
        paddingY={size ?? 'gutter'}
      >
        <Text size={size} tone="link">
          {children}
          {isExternal ? (
            <Fragment>
              {' '}
              <IconNewWindow />
            </Fragment>
          ) : (
            ''
          )}
        </Text>
      </Box>
    </LinkWrapper>
  );
};

export const Sidebar = () => (
  <Box className={styles.sidebar}>
    <Stack dividers space="none">
      <Box padding="gutter">
        <Heading level="3">🛩</Heading>
      </Box>

      <Stack dividers space="none">
        <Box paddingY="gutter">
          <SidebarLink to="/">
            <IconHome /> Home
          </SidebarLink>
        </Box>

        {/* TODO: rebuild from shared components. */}
        {/* <Box paddingY="gutter">
          <SidebarLink to="/positions">
            <IconWorkExperience /> Positions
          </SidebarLink>
          <SidebarLink size="small" to="/positions/new">
            <IconAdd /> New
          </SidebarLink>
          <SidebarLink size="small" to="/positions/brandings">
            <IconImage /> Brandings
          </SidebarLink>
          <SidebarLink size="small" to="/positions/questionnaires">
            <IconDocument /> Questionnaires
          </SidebarLink>
        </Box>

        <Box paddingY="gutter">
          <SidebarLink to="/candidates">
            <IconPeople /> Candidates
          </SidebarLink>
        </Box>

        <Box paddingY="gutter">
          <SidebarLink to="/accounts">
            <IconShare /> Switch account
          </SidebarLink>
        </Box> */}
        <ClientOnly>
          {({ preferences, setPreferences }) => (
            <Box paddingY="gutter">
              <Box padding="gutter">
                <Toggle
                  align="justify"
                  id="devTools"
                  label="Dev tools"
                  on={preferences.devTools}
                  onChange={() =>
                    setPreferences({
                      devTools: !preferences.devTools,
                    })
                  }
                />
              </Box>
              {preferences.devTools ? (
                <Fragment>
                  {/* TODO: rebuild from shared components. */}
                  {/* <SidebarLink to="/admin">
                    <IconSecurity /> Admin
                  </SidebarLink> */}

                  <SidebarLink to="https://seek-oss.github.io/wingman/storybook/index.html">
                    <IconEducation /> Storybook
                  </SidebarLink>

                  <SidebarLink to="https://github.com/seek-oss/wingman">
                    <IconSocialGitHub /> Source code
                  </SidebarLink>
                </Fragment>
              ) : undefined}
            </Box>
          )}
        </ClientOnly>
      </Stack>
    </Stack>
  </Box>
);
