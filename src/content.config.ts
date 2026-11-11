import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notebook = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notebook' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    track: z.enum(['A', 'B', 'C', 'D']),
    link: z.string().url().optional(),
    summary: z.string(),
  }),
});

const tracks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tracks' }),
  schema: z.object({
    letter: z.enum(['A', 'B', 'C', 'D']),
    title: z.string(),
    experiment: z.string(),
    buildsToward: z.string(),
    status: z.enum(['Active', 'Next', 'Planned']),
    order: z.number(),
  }),
});

export const collections = { notebook, tracks };
