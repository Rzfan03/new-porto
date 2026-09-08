import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    slug: z.string(),
    desc: z.string(),
    date: z.coerce.date().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { blog };