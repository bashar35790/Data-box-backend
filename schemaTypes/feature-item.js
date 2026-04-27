export default {
  name: 'featureItem',
  title: 'Feature Item',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Feature Text',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Check', value: 'check'},
          {title: 'Sparkles', value: 'sparkles'},
          {title: 'Infinity', value: 'infinity'},
        ],
      },
    },
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'e.g. "New"',
    },
    {
      name: 'highlight',
      title: 'Highlight Text',
      type: 'boolean',
      description: 'Highlight the feature text (e.g., orange color)',
    },
    {
      name: 'isValue',
      title: 'Is Value-based',
      type: 'boolean',
      description: 'Check this if the feature uses a numeric value instead of an icon (like "1" Dashboard)',
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'The number/value to show if Is Value-based is checked',
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'badge',
      iconVal: 'icon',
      isValue: 'isValue',
      value: 'value',
    },
    prepare({title, subtitle, iconVal, isValue, value}) {
      let iconStr = isValue ? `[${value}]` : iconVal;
      return {
        title: title || 'Untitled Feature',
        subtitle: subtitle ? `Badge: ${subtitle}` : `Icon: ${iconStr || 'None'}`,
      }
    },
  },
}
