import baseFaker from 'faker';

baseFaker.seed(100);

const custom = {
  generate: <T>(generator: () => T, num: number | { max: number }): T[] => {
    const count = typeof num === 'number' ? num : baseFaker.random.number(num);

    return [...new Array(count)].map(() => generator());
  },

  latestDate: new Date(1593939249876),

  sample: <T>(options: T[], max: number = options.length): T[] => {
    const count = baseFaker.random.number({ max });

    const shuffled = baseFaker.helpers.shuffle(options);

    return shuffled.slice(0, count);
  },
};

export const faker = Object.assign(baseFaker, {
  /**
   * Wingman's custom extensions to the Faker.js interface.
   */
  custom,
});
