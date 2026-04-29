export default {
  name: 'heroIntroSection',
  title: 'Hero Intro Section',
  type: 'object',
  fields: [
    {
      name: 'colorIntroHeading',
      title: 'Color Intro Heading',
      type: 'string',
      initialValue: '20,000+ scaling teams & agencies',
    },
    {
      name: 'introHeadingSecoundPart',
      title: 'Intro Heading Second Part',
      type: 'string',
      initialValue: 'drive results that matter',
    },
    {
      name: 'cards',
      title: 'Stats Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'cardItem',
          title: 'Card Item',
          fields: [
            { name: 'title', title: 'Title', type: 'string', initialValue: '55%' },
            { name: 'description', title: 'Description', type: 'string', initialValue: 'increase in sales YoY' },
            { 
              name: 'icon', 
              title: 'Icon', 
              type: 'string',
              options: {
                list: [
                  { title: 'TrendingUp', value: 'TrendingUp' },
                  { title: 'TrendingDown', value: 'TrendingDown' },
                ],
              },
              initialValue: 'TrendingUp',
            },
            { 
              name: 'logo', 
              title: 'Logo URL', 
              type: 'url',
              initialValue: 'https://cdnwebsite.databox.com/wp-content/uploads/2024/01/25053353/First_Response_logo-1.png'
            },
          ]
        }
      ]
    },
  ]
}
