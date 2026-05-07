import { defineType, defineField } from 'sanity';

/* ===== HERO SECTION ===== */

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'object',
      fields: [
        { name: 'nl', type: 'text', title: 'Nederlands', rows: 3 },
        { name: 'en', type: 'text', title: 'English', rows: 3 },
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
      name: 'theme',
      title: 'Theme (if no gradient)',
      type: 'string',
      options: { list: ['light', 'dark', 'alt'] },
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        {
          name: 'label',
          type: 'object',
          fields: [
            { name: 'nl', type: 'string', title: 'Nederlands' },
            { name: 'en', type: 'string', title: 'English' },
          ],
        },
        { name: 'href', type: 'string', title: 'Link' },
        { name: 'external', type: 'boolean', title: 'External link?' },
      ],
      options: { collapsible: true, collapsed: true },
    }),
  ],
  preview: {
    select: { title: 'heading.nl' },
    prepare({ title }) {
      return { title: title || 'Hero Section', subtitle: 'Hero' };
    },
  },
});

/* ===== TEXT BLOCK ===== */

export const textBlock = defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Section Label',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
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
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: { list: ['light', 'dark', 'alt'] },
      initialValue: 'light',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: { list: ['full', 'narrow', 'two-column'] },
      initialValue: 'full',
    }),
  ],
  preview: {
    select: { title: 'heading.nl' },
    prepare({ title }) {
      return { title: title || 'Text Block', subtitle: 'Text' };
    },
  },
});

/* ===== INITIATIVES GRID ===== */

export const initiativesGrid = defineType({
  name: 'initiativesGrid',
  title: 'Initiatives Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'initiatives',
      title: 'Initiatives',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'initiative' }] }],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Initiatives Grid', subtitle: 'Grid' };
    },
  },
});

/* ===== QUOTE BLOCK ===== */

export const quoteBlock = defineType({
  name: 'quoteBlock',
  title: 'Quote Block',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'object',
      fields: [
        { name: 'nl', type: 'text', title: 'Nederlands', rows: 4 },
        { name: 'en', type: 'text', title: 'English', rows: 4 },
      ],
    }),
    defineField({
      name: 'attribution',
      title: 'Attribution',
      type: 'string',
    }),
    defineField({
      name: 'context',
      title: 'Context',
      type: 'string',
      options: {
        list: [
          { title: 'Field Lab', value: 'field-lab' },
          { title: 'Masculinities in Action', value: 'mia' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
  ],
  preview: {
    select: { title: 'quote.nl' },
    prepare({ title }) {
      return {
        title: title ? `"${title.substring(0, 60)}..."` : 'Quote',
        subtitle: 'Quote',
      };
    },
  },
});

/* ===== CTA BLOCK ===== */

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'CTA Block',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'object',
      fields: [
        { name: 'nl', type: 'text', title: 'Nederlands', rows: 3 },
        { name: 'en', type: 'text', title: 'English', rows: 3 },
      ],
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        {
          name: 'label',
          type: 'object',
          fields: [
            { name: 'nl', type: 'string', title: 'Nederlands' },
            { name: 'en', type: 'string', title: 'English' },
          ],
        },
        { name: 'href', type: 'string' },
        { name: 'external', type: 'boolean', title: 'External?' },
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        {
          name: 'label',
          type: 'object',
          fields: [
            { name: 'nl', type: 'string', title: 'Nederlands' },
            { name: 'en', type: 'string', title: 'English' },
          ],
        },
        { name: 'href', type: 'string' },
        { name: 'external', type: 'boolean', title: 'External?' },
      ],
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: { list: ['light', 'dark'] },
      initialValue: 'dark',
    }),
  ],
  preview: {
    select: { title: 'heading.nl' },
    prepare({ title }) {
      return { title: title || 'CTA Block', subtitle: 'CTA' };
    },
  },
});

/* ===== TEAM GRID ===== */

export const teamGrid = defineType({
  name: 'teamGrid',
  title: 'Team Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'object',
      fields: [
        { name: 'nl', type: 'string', title: 'Nederlands' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    }),
    defineField({
      name: 'people',
      title: 'People',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Team Grid', subtitle: 'Team' };
    },
  },
});
