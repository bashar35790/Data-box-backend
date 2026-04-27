export default {
  name: 'pricingCategory',
  title: 'Pricing Category',
  type: 'object',
  fields: [
    {
      name: 'monthly',
      title: 'Monthly Plans',
      type: 'array',
      of: [{type: 'pricingCard'}],
    },
    {
      name: 'annual',
      title: 'Annual Plans',
      type: 'array',
      of: [{type: 'pricingCard'}],
    },
  ],
}
