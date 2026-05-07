import { defineType, defineField } from 'sanity';
import { DocumentsIcon } from '@sanity/icons';

export const pressItem = defineType({
  name: 'pressItem',
  title: 'Press Item',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Press Release', value: 'release' },
          { title: 'Coverage', value: 'coverage' },
          { title: 'Mention', value: 'mention' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
    }),
    defineField({
      name: 'publication',
      title: 'Publication',
      type: 'string',
      description: 'Name of the publication (for coverage)',
      hidden: ({ parent }) => parent?.type !== 'coverage',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'object',
      fields: [
        { name: 'nl', type: 'text', title: 'Nederlands', rows: 3 },
        { name: 'en', type: 'text', title: 'English', rows: 3 },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Publication Date',
      name: 'date',
      by: [{ field: 'publicationDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title.nl', date: 'publicationDate', type: 'type' },
    prepare({ title, date, type }) {
      return { title: title || 'Untitled', subtitle: `${type} — ${date || ''}` };
    },
  },
});
