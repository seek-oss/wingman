import {
  Box,
  Card,
  Column,
  Columns,
  FieldLabel,
  IconLocation,
  IconSubCategory,
  IconTime,
  Stack,
  TextField,
  Textarea,
} from 'braid-design-system';
import React, { FormEvent } from 'react';
import { useStyles } from 'sku/react-treat';

import type { AdProductName } from '../data/adProducts';
import { useLocalStorage } from '../hooks/localStorage';

import { AdProductSelect } from './AdProductSelect';
import { BrandingSelect } from './BrandingSelect';
import { QuestionnaireSelect } from './QuestionnaireSelect';

import * as styleRefs from './NewAdForm.treat';

export interface Fields {
  title: string;
  location: string;
  workType: string;
  category: string;
  adProduct: AdProductName | '';
  description: string;
  summary: string;
  bulletPoint1: string;
  bulletPoint2: string;
  bulletPoint3: string;
  questionnaire: string;
}

const DEFAULT_FIELDS: Fields = {
  title: '',
  location: '',
  workType: '',
  category: '',
  adProduct: '',
  description: '',
  summary: '',
  bulletPoint1: '',
  bulletPoint2: '',
  bulletPoint3: '',
  questionnaire: '',
};

interface Props {
  initial?: Partial<Fields>;
}

export const NewAdForm = ({ initial }: Props) => {
  const styles = useStyles(styleRefs);

  const [fields, setFields] = useLocalStorage<Fields>('widgets/NewAdForm', {
    ...DEFAULT_FIELDS,
    ...initial,
  });

  const setField = (field: keyof Fields) => (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement> | string,
  ) =>
    setFields({
      ...fields,
      [field]: typeof event === 'string' ? event : event.currentTarget.value,
    });

  const clearField = (field: keyof Fields) => () =>
    setFields({
      ...fields,
      [field]: '',
    });

  return (
    <Card>
      <Stack space="large">
        <TextField
          id="title"
          label="Title"
          onClear={clearField('title')}
          onChange={setField('title')}
          value={fields.title}
        />

        <Columns space="gutter">
          <Column>
            <TextField
              icon={<IconLocation />}
              id="location"
              label="Location"
              onClear={clearField('location')}
              onChange={setField('location')}
              value={fields.location}
            />
          </Column>
          <Column>
            <TextField
              icon={<IconTime />}
              id="workType"
              label="Work type"
              onClear={clearField('workType')}
              onChange={setField('workType')}
              value={fields.workType}
            />
          </Column>
        </Columns>

        <TextField
          icon={<IconSubCategory />}
          id="category"
          label="Category"
          onClear={clearField('category')}
          onChange={setField('category')}
          value={fields.category}
        />

        {/* TODO: save and restore in field state */}
        <AdProductSelect onChange={setField('adProduct')} />

        <Textarea
          id="description"
          label="Description"
          onChange={setField('description')}
          value={fields.description}
        />

        <TextField
          id="summary"
          label="Summary"
          onClear={clearField('summary')}
          onChange={setField('summary')}
          value={fields.summary}
        />

        {fields.adProduct === 'StandOut' || fields.adProduct === 'Premium' ? (
          <Columns collapseBelow="tablet" space="gutter">
            <Column>
              <TextField
                id="bulletPoint1"
                label="Bullet point 1"
                onClear={clearField('bulletPoint1')}
                onChange={setField('bulletPoint1')}
                value={fields.bulletPoint1}
              />
            </Column>
            <Column>
              <TextField
                id="bulletPoint2"
                label="Bullet point 2"
                onClear={clearField('bulletPoint2')}
                onChange={setField('bulletPoint2')}
                value={fields.bulletPoint2}
              />
            </Column>
            <Column>
              <TextField
                id="bulletPoint3"
                label="Bullet point 3"
                onClear={clearField('bulletPoint3')}
                onChange={setField('bulletPoint3')}
                value={fields.bulletPoint3}
              />
            </Column>
          </Columns>
        ) : undefined}

        <Stack space="xsmall">
          <FieldLabel htmlFor={false} label="Branding" />

          <Box borderRadius="standard" className={styles.fieldBorder}>
            {/* TODO: save and restore in field state */}
            <BrandingSelect />
          </Box>
        </Stack>

        <Stack space="xsmall">
          <FieldLabel htmlFor={false} label="Questionnaire" />

          <Box borderRadius="standard" className={styles.fieldBorder}>
            {/* TODO: save and restore in field state */}
            <QuestionnaireSelect />
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};
