import { defineType, defineField } from 'sanity';
import { UsersIcon } from '@sanity/icons';

export const person = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio (short)',
      type: 'object',
      fields: [
        { name: 'nl', type: 'text', title: 'Nederlands', rows: 4 },
        { name: 'en', type: 'text', title: 'English', rows: 4 },
      ],
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional. Phase 2.',
    }),
    defineField({
      name: 'pressContact',
      title: 'Press Contact',
      type: 'boolean',
      description: 'Show on Pers page as spokesperson',
      initialValue: false,
    }),
    defineField({
      name: 'pressNote',
      title: 'Press Note',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
      description: 'e.g. "Alleen over Masculinities in Action onderzoek"',
      hidden: ({ parent }) => !parent?.pressContact,
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
    select: { title: 'name', subtitle: 'role.nl' },
  },
});
