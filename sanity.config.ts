import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'fortitude',
  title: 'Fortitude',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Settings singleton
            S.listItem()
              .title('Site Settings')
              .id('settings')
              .child(
                S.document()
                  .schemaType('settings')
                  .documentId('settings')
                  .title('Site Settings')
              ),

            // Community singleton
            S.listItem()
              .title('Community Page')
              .id('community')
              .child(
                S.document()
                  .schemaType('community')
                  .documentId('community')
                  .title('Community Page Content')
              ),

            S.divider(),

            // Regular document types
            ...S.documentTypeListItems().filter(
              (item) =>
                !['settings', 'community'].includes(
                  item.getId() as string
                )
            ),
          ]),
    }),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],

  schema: {
    types: schemaTypes,
  },
});
