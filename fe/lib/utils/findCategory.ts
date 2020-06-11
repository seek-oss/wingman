import { JobCategory } from '../types/seek.graphql';

export const findCategory = (jobCategories: JobCategory[], id: string) =>
  jobCategories.find(category => category.id.value === id);
