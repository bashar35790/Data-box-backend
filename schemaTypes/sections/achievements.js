export default {
  name: 'achievementsSection',
  title: 'Achievements Section',
  type: 'object',
  fields: [
    // ⭐ Ratings (Dynamic)
    {
      name: 'ratings',
      title: 'Ratings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform Name',
              type: 'string',
              initialValue: 'G2'
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'string',
              initialValue: '4.4'
            }
          ]
        }
      ]
    },

    // 📝 Review Text
    {
      name: 'reviewText',
      title: 'Review Summary Text',
      type: 'string',
      initialValue: 'based on 1,000+ reviews'
    },

    // 🏆 Awards Logos (Slider)
    {
      name: 'awards',
      title: 'Awards Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              initialValue: 'Award logo'
            },
            {
              name: 'link',
              title: 'Optional Link',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
};
