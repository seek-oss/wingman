import { Box, IconChevron, Strong, Text } from 'braid-design-system';
import { Fragment } from 'react';

interface Props {
  segments: Array<{ name: string; key: string }>;
}

export const BreadCrumbsString = ({ segments }: Props) => (
  <Box background="infoLight" borderRadius="large" padding="small">
    <Text>
      {segments.map(({ name, key }, index) =>
        index === 0 ? (
          <Strong key={key}>{name} </Strong>
        ) : (
          <Fragment key={key}>
            <IconChevron direction="left" /> {name}{' '}
          </Fragment>
        ),
      )}
    </Text>
  </Box>
);
