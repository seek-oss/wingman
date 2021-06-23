import {
  Box,
  Checkbox,
  Heading,
  IconAdd,
  IconDocument,
  IconEducation,
  IconHome,
  IconImage,
  IconNewWindow,
  IconPeople,
  IconSecurity,
  IconShare,
  IconSocialGitHub,
  IconWorkExperience,
  Link,
  Stack,
  Text,
} from 'braid-design-system';
import React, { Fragment, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { ClientOnly } from '../components/ClientOnly';

import * as styles from './Sidebar.css';

interface LinkProps {
  children: ReactNode;
  to: string;
}

const ExternalLink = ({ children, to }: LinkProps) => (
  <Link className={styles.link} href={to} rel="noreferrer" target="_blank">
    {children}
  </Link>
);

const InternalLink = ({ children, to }: LinkProps) => (
  <NavLink
    activeClassName={styles.activeLink}
    className={styles.link}
    exact
    to={to}
  >
    {children}
  </NavLink>
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
    <LinkWrapper to={to}>
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

        <Box paddingY="gutter">
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
        </Box>

        <ClientOnly>
          {({ preferences, setPreferences }) => (
            <Box paddingY="gutter">
              <Box padding="gutter">
                <Checkbox
                  checked={preferences.devTools}
                  id="devTools"
                  label="Dev tools"
                  onChange={() =>
                    setPreferences({
                      devTools: !preferences.devTools,
                    })
                  }
                />
              </Box>
              {preferences.devTools ? (
                <Fragment>
                  <SidebarLink to="/admin">
                    <IconSecurity /> Admin
                  </SidebarLink>

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
