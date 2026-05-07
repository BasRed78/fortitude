import { defineType, defineField } from 'sanity';
import { CogIcon } from '@sanity/icons';

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'payoff',
      title: 'Payoff',
      type: 'object',
      description: '"for young men living through and beyond cancer"',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
      ],
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'pressContactEmail',
      title: 'Press Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'generalContactEmail',
      title: 'General Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'donationUrl',
      title: 'Donation URL (F|Fort Foundation)',
      type: 'url',
    }),
    defineField({
      name: 'newsroomUrl',
      title: 'Newsroom URL (smart.pr)',
      type: 'url',
    }),
    defineField({
      name: 'goosLive',
      title: 'GOOS. is live',
      type: 'boolean',
      description: 'Toggle to switch GOOS. page CTA from "notify me" to "open GOOS."',
      initialValue: false,
    }),
    defineField({
      name: 'goosUrl',
      title: 'GOOS. URL',
      type: 'url',
      hidden: ({ parent }) => !parent?.goosLive,
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
