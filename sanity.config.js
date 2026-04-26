import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  title: 'Data-box-site',
  basePath: '/',

  projectId: 'chelo3w6',
  dataset: 'production',

  plugins: [
    structureTool({
      name: 'structure',
      title: 'Structure',
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
