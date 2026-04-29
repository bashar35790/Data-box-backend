export default {
  name: 'pricingAchievementsSection',
  title: 'Pricing Achievements Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title (Optional)',
      type: 'string',
      initialValue: 'Trusted by over 30,000 businesses'
    },
    {
      name: 'achievements',
      title: 'Achievement Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'achievementCard',
          title: 'Achievement Card',
          fields: [
            {
              name: 'value',
              title: 'Number/Value',
              type: 'string',
              description: 'e.g. 30,000+, 4.8/5, or 130+',
              validation: Rule => Rule.required()
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g. Happy customers or Rating on G2',
              validation: Rule => Rule.required()
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
