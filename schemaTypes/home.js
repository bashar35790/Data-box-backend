export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'The title shown in the browser tab and search engines.',
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          rows: 3,
        },
        {
          name: 'backgroundImage',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'services',
      title: 'Services / Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text', rows: 2},
            {name: 'icon', title: 'Icon Name (Lucide)', type: 'string', description: 'e.g. Activity, Shield, Zap'},
          ],
        },
      ],
    },
  ],
}
