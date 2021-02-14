import {
  Actions,
  Alert,
  Badge,
  Box,
  Button,
  Card,
  Column,
  Columns,
  Heading,
  IconAdd,
  IconEdit,
  IconLocation,
  IconSubCategory,
  IconTime,
  Inline,
  Stack,
  Text,
} from 'braid-design-system';
import React, { useState } from 'react';
import { useStyles } from 'sku/react-treat';
import { StringParam, useQueryParam } from 'use-query-params';

import type { Ad } from '../../data/ads';
import { NewAdForm } from '../../widgets/NewAdForm';

import * as styleRefs from './List.treat';

interface Props {
  ads: Ad[];
  position: string;
}

export const AdList = ({ ads }: Props) => {
  const [newAd, setNewAd] = useState(false);

  const [selectedAdId, setSelectedAdId] = useQueryParam('ad', StringParam);

  const [editAds, setEditAds] = useState(
    [...new Array(ads.length)].map(() => false),
  );

  const styles = useStyles(styleRefs);

  return (
    <Box padding="gutter">
      <Stack space="gutter">
        {ads.length ? undefined : (
          <Alert tone="info">
            <Text>You haven’t advertised this position yet.</Text>
          </Alert>
        )}

        {ads.map((ad, index) => (
          <Box
            className={{
              [styles.ad]: true,
              [styles.selectedAd]: ad.id === selectedAdId,
            }}
            key={index}
            onClick={() => setSelectedAdId(ad.id)}
          >
            {editAds[index] ? (
              <Stack dividers space="none">
                <Card>
                  <Heading level="4">Edit ad</Heading>
                </Card>

                {/* TODO: avoid sharing the same local storage state */}
                <NewAdForm initial={ad} />

                <Card>
                  {/* TODO: actually do something */}
                  <Actions>
                    <Button
                      onClick={() =>
                        setEditAds((array) => {
                          array.splice(index, 1, false);
                          return [...array];
                        })
                      }
                    >
                      Save
                    </Button>
                    <Button
                      onClick={() =>
                        setEditAds((array) => {
                          array.splice(index, 1, false);
                          return [...array];
                        })
                      }
                      variant="transparent"
                    >
                      Discard
                    </Button>
                  </Actions>
                </Card>
              </Stack>
            ) : (
              <Card>
                <Columns space="gutter">
                  <Column>
                    <Stack space="gutter">
                      <Inline space="small" alignY="center">
                        <Heading level="4">{ad.title}</Heading>

                        <Badge
                          tone={ad.adProduct === 'Premium' ? 'promote' : 'info'}
                        >
                          {ad.adProduct}
                        </Badge>
                      </Inline>

                      <Inline space="small" alignY="center">
                        <Text>
                          <IconLocation /> {ad.location}
                        </Text>
                        <Text>
                          <IconSubCategory /> {ad.category}
                        </Text>
                      </Inline>

                      <Text>{ad.summary}</Text>
                    </Stack>
                  </Column>
                  <Column width="content">
                    <Actions>
                      <Button
                        onClick={() =>
                          setEditAds((array) => {
                            array.splice(index, 1, true);
                            return [...array];
                          })
                        }
                      >
                        <IconEdit /> Edit
                      </Button>
                      <Button>
                        <IconTime /> Expire
                      </Button>
                    </Actions>
                  </Column>
                </Columns>
              </Card>
            )}
          </Box>
        ))}

        {newAd ? (
          <Stack dividers space="none">
            <Card>
              <Heading level="4">New ad</Heading>
            </Card>

            {/* TODO: avoid sharing the same local storage state */}
            <NewAdForm />

            <Card>
              {/* TODO: actually do something */}
              <Actions>
                <Button onClick={() => setNewAd(false)}>Post</Button>
                <Button onClick={() => setNewAd(false)} variant="transparent">
                  Discard
                </Button>
              </Actions>
            </Card>
          </Stack>
        ) : (
          <Actions>
            <Button onClick={() => setNewAd(true)}>
              <IconAdd /> New
            </Button>
          </Actions>
        )}
      </Stack>
    </Box>
  );
};
