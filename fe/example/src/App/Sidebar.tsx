import {
  Box,
  Checkbox,
  Heading,
  IconAdd,
  IconDocument,
  IconHome,
  IconImage,
  IconPeople,
  IconSecurity,
  IconShare,
  IconWorkExperience,
  Stack,
  Text,
} from 'braid-design-system';
import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from 'sku/react-treat';

import { ClientOnly } from '../components/ClientOnly';

import * as styleRefs from './Sidebar.treat';

export const Sidebar = () => (
  <Box height="full">
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
                <SidebarLink to="/admin">
                  <IconSecurity /> Admin
                </SidebarLink>
              ) : undefined}
            </Box>
          )}
        </ClientOnly>
      </Stack>
    </Stack>
  </Box>
);

const SidebarLink = ({
  children,
  size,
  to,
}: {
  children: ReactNode;
  size?: 'small';
  to: string;
}) => {
  const styles = useStyles(styleRefs);

  return (
    <NavLink
      activeClassName={styles.activeLink}
      className={styles.link}
      exact
      to={to}
    >
      <Box
        className={styles.linkContainer}
        paddingX="gutter"
        paddingY={size ?? 'gutter'}
      >
        <Text size={size} tone="link">
          {children}
        </Text>
      </Box>
    </NavLink>
  );
};
