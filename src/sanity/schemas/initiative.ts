import { defineType, defineField } from 'sanity';
import { RocketIcon } from '@sanity/icons';

export const initiative = defineType({
  name: 'initiative',
  title: 'Initiative',
  type: 'document',
  icon: RocketIcon,
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.en', maxLength: 96 },
      description: 'field-labs | goos | community',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary (short)',
      type: 'object',
      fields: [
        { name: 'nl', type: 'text', title: 'Nederlands', rows: 3 },
        { name: 'en', type: 'text', title: 'English', rows: 3 },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body (long-form)',
      type: 'object',
      fields: [
        {
          name: 'nl',
          type: 'array',
          title: 'Nederlands',
          of: [{ type: 'block' }],
        },
        {
          name: 'en',
          type: 'array',
          title: 'English',
          of: [{ type: 'block' }],
        },
      ],
    }),
    defineField({
      name: 'gradientVariant',
      title: 'Gradient Variant',
      type: 'number',
      options: {
        list: [
          { title: 'Gradient 1 (Orange → Green)', value: 1 },
          { title: 'Gradient 2 (Red → Violet)', value: 2 },
          { title: 'Gradient 3 (Blue → Mint)', value: 3 },
          { title: 'Gradient 4 (Orange → Hot pink)', value: 4 },
          { title: 'Gradient 5 (Cyan → Green)', value: 5 },
          { title: 'Gradient 6 (Blue → Magenta)', value: 6 },
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Past', value: 'past' },
          { title: 'In Development', value: 'in-development' },
        ],
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      description: 'For GOOS. site link or community platform when live',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title.nl', status: 'status' },
    prepare({ title, status }) {
      return { title: title || 'Untitled', subtitle: status };
    },
  },
});
