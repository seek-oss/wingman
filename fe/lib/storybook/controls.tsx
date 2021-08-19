export const defaultArgs = {
  tone: 'undefined',
};

export const defaultArgTypes = {
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
