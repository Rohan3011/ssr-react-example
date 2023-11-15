import { z } from "zod";

export const formSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  slug: z.string().optional(),
  body: z.string(),
  authorId: z.string(),
  tags: z.array(z.string()),
  published: z.boolean(),
  date: z.date().optional(),
});
