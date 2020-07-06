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
  IconSend,
  IconShare,
  IconWorkExperience,
  Stack,
  Text,
} from 'braid-design-system';
import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from 'sku/react-treat';

import { useUser } from '../hooks/user';

import * as styleRefs from './Sidebar.treat';

export const Sidebar = () => {
  const [user] = useUser();

  return (
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

            <SidebarLink to="/notifications">
              <IconSend /> Notifications
            </SidebarLink>
          </Box>

          <Box paddingY="gutter">
            <SidebarLink to="/positions">
              <IconWorkExperience /> Positions
            </SidebarLink>
            <SidebarLink size="small" to="/positions/new">
              <IconAdd /> New
            </SidebarLink>
            <SidebarLink size="small" to="/positions/branding">
              <IconImage /> Branding
            </SidebarLink>
            <SidebarLink size="small" to="/positions/questions">
              <IconDocument /> Questions
            </SidebarLink>
          </Box>

          <Box paddingY="gutter">
            <SidebarLink to="/candidates">
              <IconPeople /> Candidates
            </SidebarLink>
            <SidebarLink size="small" to="/candidates/new">
              <IconAdd /> New
            </SidebarLink>
          </Box>

          <Box paddingY="gutter">
            <SidebarLink to="/accounts">
              <IconShare /> Switch account
            </SidebarLink>
          </Box>

          <Box paddingY="gutter">
            <Box padding="gutter">
              <Checkbox
                checked={user.devTools}
                id="devTools"
                label="Dev tools"
                // TODO: support mutation of user
                onChange={() => undefined}
              />
            </Box>
            {user.devTools ? (
              <SidebarLink to="/admin">
                <IconSecurity /> Admin
              </SidebarLink>
            ) : (
              undefined
            )}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

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
