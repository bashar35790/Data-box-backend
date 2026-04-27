export default {
  name: 'pricingCard',
  title: 'Pricing Card',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Plan Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'dataSources',
      title: 'Data Sources Included',
      type: 'string',
    },
    {
      name: 'additionalPrice',
      title: 'Additional Price Details',
      type: 'string',
      description: 'e.g. "$7/mo per additional data source"',
    },
    {
      name: 'cta',
      title: 'Primary CTA Text',
      type: 'string',
    },
    {
      name: 'ctaSecondary',
      title: 'Secondary CTA Text',
      type: 'string',
    },
    {
      name: 'ctaType',
      title: 'CTA Style',
      type: 'string',
      options: {
        list: [
          {title: 'Primary (Blue)', value: 'primary'},
          {title: 'Primary Orange', value: 'primary-orange'},
          {title: 'Primary Dark', value: 'primary-dark'},
          {title: 'Outline (Green)', value: 'outline'},
          {title: 'Outline Purple', value: 'outline-purple'},
        ],
      },
      initialValue: 'primary',
    },
    {
      name: 'isPopular',
      title: 'Mark as Most Popular',
      type: 'boolean',
    },
    {
      name: 'isBestValue',
      title: 'Mark as Best Value',
      type: 'boolean',
    },
    {
      name: 'featuresTitle',
      title: 'Features List Title',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [{type: 'featureItem'}],
    },
    {
      name: 'footerTitle',
      title: 'Footer Title',
      type: 'string',
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      rows: 2,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Unnamed Plan',
        subtitle: subtitle !== undefined ? `$${subtitle}` : 'No price set',
      }
    },
  },
}
