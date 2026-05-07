import { defineType, defineField } from 'sanity';
import { DocumentIcon } from '@sanity/icons';

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.nl', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'object',
          fields: [
            { name: 'nl', type: 'string', title: 'Nederlands' },
            { name: 'en', type: 'string', title: 'English' },
          ],
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'object',
          fields: [
            { name: 'nl', type: 'text', title: 'Nederlands', rows: 3 },
            { name: 'en', type: 'text', title: 'English', rows: 3 },
          ],
        },
        {
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
          options: { hotspot: true },
        },
      ],
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'textBlock' },
        { type: 'initiativesGrid' },
        { type: 'quoteBlock' },
        { type: 'ctaBlock' },
        { type: 'teamGrid' },
      ],
    }),
  ],
  preview: {
    select: { title: 'title.nl', slug: 'slug.current' },
    prepare({ title, slug }) {
      return { title: title || 'Untitled', subtitle: `/${slug || ''}` };
    },
  },
});
