export interface BraidArgs {
  braidThemeName: BraidThemeName;
}

export const defaultArgs = {
  braidThemeName: 'docs' as const,
  tone: 'undefined',
};

export type BraidThemeName = 'apac' | 'docs' | 'wireframe';

export const defaultArgTypes = {
  braidThemeName: {
    control: { type: 'radio' },
    name: 'Braid theme',
    options: ['apac', 'docs', 'wireframe'],
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
