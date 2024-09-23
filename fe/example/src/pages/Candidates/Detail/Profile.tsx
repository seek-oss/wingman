import {
  AccordionItem,
  Card,
  Divider,
  Heading,
  IconPromote,
  Inline,
  Stack,
  Strong,
  Tag,
  Text,
} from 'braid-design-system';
import React from 'react';

import type { Candidate, Role } from '../../../data/candidates';

const MAX_ROLES = 3;

interface RoleProps {
  children: Role;
}

const RoleDetails = ({ children: role }: RoleProps) => (
  <Stack space="gutter">
    <Text>
      <Strong>{role.title}</Strong>, {role.company}
    </Text>

    <Text tone="secondary">
      {role.startDate.getFullYear()} –{' '}
      {role.endDate?.getFullYear() ?? 'Current'}
    </Text>

    <Text>{role.highlights}</Text>
  </Stack>
);

interface Props {
  children: Candidate;
}

export const CandidateProfile = ({ children: candidate }: Props) => (
  <Stack space="gutter">
    <Card>
      <Stack space="large">
        <Heading level="4">Career history</Heading>

        {candidate.roles.length ? undefined : (
          <>
            <Divider />

            <Text tone="promote">
              <IconPromote /> New to the workforce
            </Text>
          </>
        )}

        {candidate.roles
          .slice(
            0,
            candidate.roles.length === MAX_ROLES ? MAX_ROLES : MAX_ROLES - 1,
          )
          .map((role, index) => (
            <React.Fragment key={index}>
              <Divider />
              <RoleDetails>{role}</RoleDetails>
            </React.Fragment>
          ))}

        {candidate.roles.length > MAX_ROLES ? (
          <>
            <Divider />
            <AccordionItem
              id="roles"
              label={`+${String(candidate.roles.length - MAX_ROLES)} more`}
            >
              <Stack space="gutter">
                <Divider />

                <Stack space="gutter">
                  {candidate.roles.slice(MAX_ROLES - 1).map((role, index) => (
                    <React.Fragment key={index}>
                      {index > 0 ? <Divider /> : null}
                      <RoleDetails>{role}</RoleDetails>
                    </React.Fragment>
                  ))}
                </Stack>
              </Stack>
            </AccordionItem>
          </>
        ) : undefined}
      </Stack>
    </Card>

    {candidate.qualifications.length ? (
      <Card>
        <Stack space="large">
          <Heading level="4">Education</Heading>
          <Divider />
          <Stack space="gutter">
            {candidate.qualifications.map((qualification, index) => (
              <Inline key={index} space="gutter">
                <Text>
                  {String(qualification.date.getFullYear()).padStart(4, '0')}
                </Text>
                <Text>
                  <Strong>{qualification.name}</Strong>, {qualification.issuer}
                </Text>
              </Inline>
            ))}
          </Stack>
        </Stack>
      </Card>
    ) : undefined}

    {candidate.skills.length ? (
      <Card>
        <Stack space="large">
          <Heading level="4">Skills</Heading>
          <Divider />
          <Inline space="gutter">
            {candidate.skills.map((skill, index) => (
              <Tag key={index}>{skill.name}</Tag>
            ))}
          </Inline>
        </Stack>
      </Card>
    ) : undefined}
  </Stack>
);
