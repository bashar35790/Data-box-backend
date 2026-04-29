export default {
  name: 'achievementsSection',
  title: 'Achievements Section',
  type: 'object',
  fields: [
    {
      name: 'ratings',
      title: 'Ratings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platformLogo', title: 'Platform Logo', type: 'image' },
            { name: 'ratingValue', title: 'Rating Value', type: 'string', initialValue: '4.4' },
            { name: 'platformName', title: 'Platform Name', type: 'string' },
          ]
        }
      ]
    },
    {
      name: 'reviewSummary',
      title: 'Review Summary Text',
      type: 'string',
      initialValue: 'based on 1,000+ reviews',
    },
    {
      name: 'awardsLogos',
      title: 'Awards Logos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }
  ]
}
