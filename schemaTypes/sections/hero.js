export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'headingFirstText',
      title: 'Heading First Text',
      type: 'string',
      initialValue: 'AI-powered',
    },
    {
      name: 'headingSecondText',
      title: 'Heading Second Text',
      type: 'string',
      initialValue: 'analytics for teams that need answers now',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
      initialValue: 'Turn business performance data into clear answers your team can understand, explain, and act on – instantly.',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Try It Free',
    },
    {
      name: 'ctaText2',
      title: 'CTA Button Text 2',
      type: 'string',
      initialValue: 'Book a Demo',
    },
    {
      name: 'underTheButtonsText',
      title: 'Under The Buttons Text',
      type: 'string',
      initialValue: 'No credit card needed · Free-forever plan',
    },
    {
      name: 'features',
      title: 'Interactive Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'featureItem',
          title: 'Feature Item',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { 
              name: 'icon', 
              title: 'Icon Name', 
              type: 'string',
              description: 'Lucide icon name (e.g. BrainCog, Wallpaper, FileText)'
            },
            { 
              name: 'image', 
              title: 'Feature Image', 
              type: 'image', 
              options: { hotspot: true } 
            },
          ]
        }
      ]
    },
  ]
}
