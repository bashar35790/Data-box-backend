export default {
  name: 'howItWorksSection',
  title: 'How It Works Section',
  type: 'object',
  fields: [
    {
      name: 'headingFirstPart',
      title: 'Heading First Part',
      type: 'string',
      initialValue: 'Your',
    },
    {
      name: 'headingHighlight',
      title: 'Highlighted Text',
      type: 'string',
      initialValue: 'easier, no-code data workflow',
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'text',
      rows: 3,
      initialValue: 'Databox simplifies every step, so your team can focus on improving performance – not process.',
    },
    {
      name: 'cards',
      title: 'Workflow Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'cardItem',
          title: 'Card Item',
          fields: [
            { name: 'title', title: 'Title', type: 'string', initialValue: 'Connect' },
            { name: 'description', title: 'Description', type: 'text', rows: 2, initialValue: 'Connect all your tools, so your data lives in one place.' },
            { name: 'features', title: 'Features List', type: 'array', of: [{ type: 'string' }] },
            { name: 'ctaText', title: 'CTA Text', type: 'string', initialValue: 'Explore →' },
            { name: 'ctaLink', title: 'CTA Link', type: 'url' },
            { 
              name: 'icon', 
              title: 'Icon Name', 
              type: 'string',
              options: {
                list: [
                  { title: 'PlugZap', value: 'PlugZap' },
                  { title: 'Blocks', value: 'Blocks' },
                  { title: 'ScanEye', value: 'ScanEye' },
                  { title: 'ScanSearch', value: 'ScanSearch' },
                  { title: 'Workflow', value: 'Workflow' },
                  { title: 'Waypoints', value: 'Waypoints' },
                ],
              },
              initialValue: 'PlugZap',
            },
          ]
        }
      ]
    },
    {
      name: 'bottomCTA',
      title: 'Bottom CTA',
      type: 'object',
      fields: [
        { name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Explore the platform' },
        { name: 'buttonLink', title: 'Button Link', type: 'url' },
      ]
    },
  ]
}
