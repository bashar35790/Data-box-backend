export default {
  name: 'featuresSection',
  title: 'Features Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Unlock data. Empower decisions.',
    },
    {
      name: 'highlightedText',
      title: 'Highlighted Heading Part',
      type: 'string',
      initialValue: ' Empower decisions.',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
      initialValue: 'Your data is useless unless your team can quickly put it to work to make better decisions. And right now, they can’t.',
    },
    {
      name: 'cards',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'hoverText', title: 'Hover Testimonial', type: 'text', rows: 2 },
            { 
              name: 'icon', 
              title: 'Icon Name', 
              type: 'string',
              description: 'Lucide icon name (e.g. Network, Brain, Database)'
            },
          ]
        }
      ],
      initialValue: [
        {
          title: 'Card Title',
          description: 'A card component has a figure, a body part, and inside body there are title and actions parts',
          hoverText: "Databox is an absolute must in my tech stack. It allows me to track metrics that matter to me in a way that other reporting tools don't.",
          icon: 'LuNetwork'
        }
      ]
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Why choose Databox',
    },
    {
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
      initialValue: '#',
    }
  ]
}
