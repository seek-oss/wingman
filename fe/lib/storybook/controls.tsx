import { THEMES } from './decorators';

export interface BraidArgs {
  braidThemeName: BraidThemeName;
}

export const defaultArgs = {
  braidThemeName: 'docs' as const,
  tone: 'undefined',
};

export type BraidThemeName = keyof typeof THEMES;

export const defaultArgTypes = {
  braidThemeName: {
    control: { type: 'radio' },
    name: 'Braid theme',
    options: Object.keys(THEMES),
  },
  showStorybookAction: {
    control: { type: 'boolean' },
    name: 'Mock showStorybookAction',
  },
  tone: {
    control: { type: 'radio' },
    mapping: {
      undefined,
      critical: 'critical',
      neutral: 'neutral',
      positive: 'positive',
    },
    options: ['undefined', 'critical', 'neutral', 'positive'],
  },
};
