import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const postScehma = z.object({
  title: z.string(),
  slug: z.string(),
  tags: z.array(z.string()),
  blurb: z.string(),
  created: z.date(),
  updated: z.date(),
  image: z.string()
})

export default defineContentConfig({
  collections: {
    live: defineCollection({
      // Load every file inside the `content` directory
      source: 'live/**',
      // Specify the type of content in this collection
      type: 'page',
      schema: postScehma,
    }),
    draft: defineCollection({
      // Load every file inside the `content` directory
      source: 'draft/**',
      // Specify the type of content in this collection
      type: 'page',
      schema: postScehma,
    }),
    test: defineCollection({
      // Load every file inside the `content` directory
      source: 'testing/**',
      // Specify the type of content in this collection
      type: 'page',
      schema: postScehma,
    })
  }
})
