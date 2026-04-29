export default {
  name: 'pricingAddonsSection',
  title: 'Pricing Addons Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Supercharge your reporting with Add-ons'
    },
    {
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 2,
      initialValue: 'Need more power? Add these specialized features to any paid plan.'
    },
    {
      name: 'addons',
      title: 'Addon Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'addonItem',
          title: 'Addon Item',
          fields: [
            {
              name: 'title',
              title: 'Addon Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3
            },
            {
              name: 'price',
              title: 'Price Display',
              type: 'string',
              description: 'e.g. $250/mo or $5.60/mo'
            },
            {
              name: 'icon',
              title: 'Icon (Optional)',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        }
      ]
    }
  ]
}
