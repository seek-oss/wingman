export type AdProductName = (typeof AD_PRODUCTS)[number]['name'];

export const AD_PRODUCTS = [
  {
    name: 'Classic',
    description:
      'Your run-of-the-mill aircraft. It gets the job done but the leg room can be a little tight.',
  },
  {
    name: 'StandOut',
    description:
      'A cool paintjob. It’s sure to attract attention at the local airstrip.',
  },
  {
    name: 'Premium',
    description:
      'Alloy wheels, dual-zone climate control and full autopilot. The whole kit and caboodle.',
  },
] as const;
