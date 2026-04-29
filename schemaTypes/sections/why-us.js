export default {
  name: 'whyUsSection',
  title: 'Why Us Section',
  type: 'object',
  fields: [
    {
      name: 'headingLine1',
      title: 'Heading Line 1',
      type: 'string',
      initialValue: 'Business intelligence,',
    },
    {
      name: 'headingHighlight',
      title: 'Highlighted Heading',
      type: 'string',
      initialValue: 'without the baggage',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      initialValue: 'Databox removes the complicated setup, steep price, and long learning curve...',
    },
    {
      name: 'beforeSection',
      title: 'Before Section (Pain Points)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string', initialValue: 'Before Databox' },
        { name: 'subtitle', title: 'Subtitle', type: 'string', initialValue: 'The Old Way' },
        { name: 'items', title: 'Points List', type: 'array', of: [{ type: 'string' }] },
      ]
    },
    {
      name: 'afterSection',
      title: 'After Section (Solution)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string', initialValue: 'With Databox' },
        { name: 'subtitle', title: 'Subtitle', type: 'string', initialValue: 'The Solution' },
        { name: 'items', title: 'Points List', type: 'array', of: [{ type: 'string' }] },
      ]
    },
    {
      name: 'cta',
      title: 'CTA Section',
      type: 'object',
      fields: [
        { name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Try It Free' },
        { name: 'bottomText', title: 'Bottom Text', type: 'string', initialValue: 'No credit card required' },
      ]
    },
  ]
}
