export interface BraidArgs {
  braidThemeName: string;
}

export const defaultArgs = {
  braidThemeName: 'docs',
  tone: 'undefined',
};

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
