import { z, defineCollection } from 'astro:content';

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  badge: z.string().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
    message: 'tags must be unique',
  }).optional(),

  // Code Links
  github: z.string().url().optional(),
  gitlab: z.string().url().optional(),
  docs: z.string().url().optional(),

  // Paper Links
  doi: z.string().url().optional(),
  pdf: z.string().optional(),
});

export const collections = {
  postfire: defineCollection({ type: 'content', schema: projectSchema }),
  da: defineCollection({ type: 'content', schema: projectSchema }),
};
