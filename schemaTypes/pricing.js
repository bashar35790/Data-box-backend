export default {
  name: 'pricingPage',
  title: 'Pricing Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'plans',
      title: 'Pricing Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Plan Name', type: 'string'},
            {name: 'price', title: 'Price', type: 'string'},
            {name: 'period', title: 'Billing Period', type: 'string', description: 'e.g. per month, per year'},
            {name: 'features', title: 'Features', type: 'array', of: [{type: 'string'}]},
            {name: 'isPopular', title: 'Mark as Popular', type: 'boolean'},
            {name: 'buttonText', title: 'Button Text', type: 'string'},
          ],
        },
      ],
    },
  ],
}
