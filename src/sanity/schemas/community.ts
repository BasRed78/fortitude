import { defineType, defineField } from 'sanity';
import { UsersIcon } from '@sanity/icons';

export const community = defineType({
  name: 'community',
  title: 'Community Page',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'narrative',
      title: 'Narrative',
      description: 'Describes and inspires',
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
      name: 'phasing',
      title: 'Phasing',
      description: 'Fase 1, 2, 3 explanation',
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
      name: 'interestCaptureHeading',
      title: 'Interest Capture Heading',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'interestCaptureBody',
      title: 'Interest Capture Body',
      type: 'object',
      fields: [
        { name: 'nl', type: 'text', title: 'Nederlands', rows: 3 },
        { name: 'en', type: 'text', title: 'English', rows: 3 },
      ],
    }),
    defineField({
      name: 'privacyNotice',
      title: 'Privacy Notice',
      type: 'object',
      fields: [
        { name: 'nl', type: 'text', title: 'Nederlands', rows: 3 },
        { name: 'en', type: 'text', title: 'English', rows: 3 },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Community Page Content' };
    },
  },
});
