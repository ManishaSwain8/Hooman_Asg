import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    des: z.string(),
    date: z.string(),
    img: z.string(),
  }),
});
export const collection = {
  posts: postsCollection,
};
